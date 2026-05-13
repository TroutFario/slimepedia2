import React, {useEffect, useRef, useState} from "react";
import {OverlayScrollbarsComponent} from "overlayscrollbars-react";
import {BlueprintItem, BlueprintType, Recipe, recipeElements} from "../../data/blueprints/blueprints";
import {useRecipeContext} from "../useRecipeContext";
import {upgradesList, UpgradeWithTier} from "../../data/blueprints/upgrades";
import {utilitiesList, Utility} from "../../data/blueprints/utilities";
import {Warp, warpGadgets} from "../../data/blueprints/warp";
import {Decoration, decorationList} from "../../data/blueprints/decoration";
import {FaAngleDown, FaMinus, FaPlus, FaXmark} from "react-icons/fa6";
import {NavLink} from "react-router-dom";
import "../../css/Blueprints.css";

const blueprintMatcher = (blueprint: BlueprintItem, type: BlueprintType): Recipe => {
    switch (type) {
        case BlueprintType.UPGRADE:
            return upgradesList[blueprint as UpgradeWithTier].recipe;
        case BlueprintType.UTILITY:
            return utilitiesList[blueprint as Utility].recipe;
        case BlueprintType.WARP:
            return warpGadgets[blueprint as Warp].recipe;
        case BlueprintType.DECORATION:
            return decorationList[blueprint as Decoration].recipe;
    }
};

const CraftingList: React.FC<{
    name: BlueprintItem | null;
    type: BlueprintType;
}> = ({name, type}) => {
    const {increaseBlueprint, triggerAnimation, currentElementRef} = useRecipeContext();
    const [quantity, setQuantity] = useState<number>(1);
    useEffect(() => {
        setQuantity(1);
    }, [name]);
    const increaseQuantity = () => setQuantity((prevQtty) => (prevQtty < 99 ? prevQtty + 1 : 99));
    const decreaseQuantity = () => setQuantity((prevQtty) => (prevQtty > 1 ? prevQtty - 1 : 1));
    const recipe = name ? blueprintMatcher(name, type) : [];
    const elementRef = useRef<HTMLButtonElement | null>(null);

    return (
        <OverlayScrollbarsComponent
            options={{
                scrollbars: {
                    autoHide: "move",
                    autoHideDelay: 500,
                },
                overflow: {
                    x: "hidden",
                    y: "scroll",
                },
            }}
            defer
            className="recipe-list"
        >
            <div className="quantity-selector">
                <FaAngleDown onClick={() => decreaseQuantity()}/>
                <div></div>
                <button
                    ref={elementRef}
                    onClick={() => {
                        if (name === null) return;
                        triggerAnimation(currentElementRef, "add-to-cart-animation");
                        triggerAnimation(elementRef, "grow-in-out-animation");
                        increaseBlueprint(name, type, quantity);
                    }}
                >
                    <h2>{quantity}</h2>
                    <FaPlus/>
                </button>
                <div></div>
                <FaAngleDown onClick={() => increaseQuantity()}/>
            </div>
            {[...recipe].map(([ingredient, qty]) => (
                <div key={ingredient}>
                    <NavLink to={recipeElements[ingredient][2] == null ? "" : `/${recipeElements[ingredient][2]}`}>
                        <img
                            src={`/assets/${recipeElements[ingredient][1]}.png`}
                            alt={recipeElements[ingredient][0]}
                            title={recipeElements[ingredient][0]}
                        />
                        <p>{recipeElements[ingredient][0]}: </p>
                    </NavLink>
                    <h3>{qty * quantity}</h3>
                </div>
            ))}
        </OverlayScrollbarsComponent>
    );
};

const craftRecipeMatcher = (item: BlueprintItem, type: BlueprintType) => {
    switch (type) {
        case BlueprintType.UPGRADE:
            return upgradesList[item as keyof typeof upgradesList].name;
        case BlueprintType.UTILITY:
            return utilitiesList[item as Utility].name;
        case BlueprintType.WARP:
            return warpGadgets[item as Warp].name;
        case BlueprintType.DECORATION:
            return decorationList[item as Decoration].name;
    }
};

export const RecipeMenu: React.FC = () => {
    const {
        blueprintList,
        resetList,
        craftList,
        decreaseBlueprint,
        increaseBlueprint,
        deleteBlueprint,
        currentElementRef,
    } = useRecipeContext();
    const [recipeMenuToggle, setRecipeMenuToggle] = useState(false);
    return (
        <div className={`pin-button ${recipeMenuToggle ? " opened" : ""}`}>
            <button onClick={() => setRecipeMenuToggle(!recipeMenuToggle)} ref={currentElementRef}>
                <img src="/assets/misc/shop.png" alt="Shop icon"/>
            </button>
            <div className="pin-header">
                <img src="/assets/misc/shop.png" alt="Shop icon"/>
                <h1>Recipes Ingredients List</h1>
                <button onClick={() => resetList()}>
                    <img src="/assets/misc/trash.png" alt="Clear the list"/>
                </button>
                <FaXmark onClick={() => setRecipeMenuToggle(!recipeMenuToggle)}/>
            </div>
            <OverlayScrollbarsComponent
                options={{
                    scrollbars: {
                        autoHide: "move",
                        autoHideDelay: 500,
                    },
                    overflow: {
                        x: "hidden",
                        y: "scroll",
                    },
                }}
                defer
            >
                <div className="pin-list-header">
                    <h1>Blueprints</h1>
                </div>
                <div className="pin-list">
                    {blueprintList.size === 0 ? (
                        <div className="craft-list-empty">
                            <h1>No blueprint selected</h1>
                        </div>
                    ) : (
                        Array.from(blueprintList.keys()).map((blueprint: BlueprintItem) => {
                            const type = blueprintList.get(blueprint)![0];
                            const name = craftRecipeMatcher(blueprint, type);
                            const currentType = type === BlueprintType.DECORATION ? "deco" : "gadgets";
                            return (
                                <div className="pin-element pin-blueprint-element" key={blueprint}>
                                    <img
                                        src={
                                            type === BlueprintType.UPGRADE
                                                ? "/assets/upgrades/" + blueprint.replaceAll(/[^a-zA-Z]/g, "") + ".png"
                                                : `/assets/${currentType}/${blueprint}.png`
                                        }
                                        alt="Icon of blueprint"
                                    />
                                    <p>{name}: </p>
                                    <FaMinus onClick={() => decreaseBlueprint(blueprint, 1)}/>
                                    <h3>{blueprintList.get(blueprint)![1]}</h3>
                                    <FaPlus onClick={() => increaseBlueprint(blueprint, type, 1)}/>
                                    <button onClick={() => deleteBlueprint(blueprint)}>
                                        <img src="/assets/misc/trash.png" alt="Clear the blueprint"
                                             className="clear-item-img"/>
                                    </button>
                                </div>
                            );
                        })
                    )}
                </div>
                <div className="pin-list-header">
                    <h1>Resources</h1>
                </div>
                <div className="pin-list">
                    {craftList.size === 0 ? (
                        <div className="craft-list-empty">
                            <h1>No resources needed</h1>
                        </div>
                    ) : (
                        Array.from(craftList.keys()).map((item) => (
                            <div key={item} className="pin-element pin-item-element">
                                <img
                                    src={`/assets/${recipeElements[item][1]}.png`}
                                    alt={recipeElements[item][0]}
                                    title={recipeElements[item][0]}
                                />
                                <p>{recipeElements[item][0]}: </p>
                                <h3>{craftList.get(item)!}</h3>
                            </div>
                        ))
                    )}
                </div>
            </OverlayScrollbarsComponent>
        </div>
    );
};

export default CraftingList;
