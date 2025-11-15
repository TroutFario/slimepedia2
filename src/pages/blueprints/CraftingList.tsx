import React, { useEffect, useRef, useState } from "react";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import {
  BlueprintItem,
  BlueprintType,
  Recipe,
  RecipeElement,
  recipeElements,
} from "../../text/blueprints/blueprints";
import { useRecipeContext } from "../../components/RecipeContext";
import { upgradesList, UpgradeWithTier } from "../../text/blueprints/upgrades";
import { utilitiesList, Utility } from "../../text/blueprints/utilities";
import { Warp, warpGadgets } from "../../text/blueprints/warp";
import { Decoration, decorationsList } from "../../text/blueprints/decoration";
import { FaAngleDown, FaMinus, FaPlus, FaXmark } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

export const blueprintMatcher = (
  blueprint: BlueprintItem | UpgradeWithTier,
  type: BlueprintType
) => {
  switch (type) {
    case BlueprintType.UPGRADES:
      return upgradesList[blueprint as UpgradeWithTier];
    case BlueprintType.UTILITIES:
      return utilitiesList[blueprint as Utility];
    case BlueprintType.WARP:
      return warpGadgets[blueprint as Warp];
    case BlueprintType.DECORATIONS:
      return decorationsList[blueprint as Decoration];
  }
};

export const CraftingList: React.FC<{
  name: BlueprintItem;
  type: BlueprintType;
}> = ({ name, type }) => {
  const { increaseBlueprint, triggerAnimation, currentElementRef } =
    useRecipeContext();
  const [quantity, setQuantity] = useState(1);
  useEffect(() => {
    setQuantity(1);
  }, [name]);
  const increaseQuantity = () =>
    setQuantity((prevQtty) => prevQtty + (prevQtty < 99 ? 1 : 0));
  const decreaseQuantity = () =>
    setQuantity((prevQtty) => prevQtty - (prevQtty > 1 ? 1 : 0));
  const recipe = blueprintMatcher(name, type)[2] as Recipe;
  console.log(recipe);
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
        <FaAngleDown onClick={() => decreaseQuantity()} />
        <div></div>
        <button
          ref={elementRef}
          onClick={() => {
            triggerAnimation(currentElementRef, "add-to-cart");
            triggerAnimation(elementRef, "grow-in-out");
            increaseBlueprint(name, type, quantity);
          }}
        >
          <h2>{quantity}</h2>
          <FaPlus />
        </button>
        <div></div>
        <FaAngleDown onClick={() => increaseQuantity()} />
      </div>
      {Object.keys(recipe).map((ingredient) => (
        <div key={ingredient}>
          <NavLink
            to={
              recipeElements[ingredient as RecipeElement][2] == null
                ? ""
                : `/${recipeElements[ingredient as RecipeElement][2]}`
            }
          >
            <img
              src={`/assets/${
                recipeElements[ingredient as RecipeElement][1]
              }.png`}
              alt={recipeElements[ingredient as RecipeElement][0]}
              title={recipeElements[ingredient as RecipeElement][0]}
            />
            <p>{recipeElements[ingredient as RecipeElement][0]}: </p>
          </NavLink>
          <h3>{recipe.get(ingredient as RecipeElement)! * quantity}</h3>
        </div>
      ))}
    </OverlayScrollbarsComponent>
  );
};

const craftRecipeMatcher = (item: BlueprintItem, type: BlueprintType) => {
  switch (type) {
    case BlueprintType.UPGRADES:
      return [
        upgradesList[item as keyof typeof upgradesList][0],
        upgradesList[item as keyof typeof upgradesList][2],
      ];
    case BlueprintType.UTILITIES:
      return [
        utilitiesList[item as Utility][0],
        utilitiesList[item as Utility][2],
      ];
    case BlueprintType.WARP:
      return [warpGadgets[item as Warp][0], warpGadgets[item as Warp][2]];
    case BlueprintType.DECORATIONS:
      return [
        decorationsList[item as Decoration][0],
        decorationsList[item as Decoration][2],
      ];
    default:
      throw new Error("Invalid blueprint type: " + type);
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
      <button
        onClick={() => setRecipeMenuToggle(!recipeMenuToggle)}
        ref={currentElementRef}
      >
        <img src="/assets/misc/shop.png" alt="Shop icon" />
      </button>
      <div className="pin-header">
        <img src="/assets/misc/shop.png" alt="Shop icon" />
        <h1>Recipes Ingredients List</h1>
        <button onClick={() => resetList()}>
          <img src="/assets/misc/trash.png" alt="Clear the list" />
        </button>
        <FaXmark onClick={() => setRecipeMenuToggle(!recipeMenuToggle)} />
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
            Array.from(blueprintList.keys()).map(((blueprint: BlueprintItem) => {
              const type = blueprintList.get(blueprint)![0];
              const name = craftRecipeMatcher(
                blueprint as BlueprintItem,
                type
              )[0];
              const currentType =
                type === BlueprintType.DECORATIONS ? "deco" : "gadgets";
              return (
                <div
                  className="pin-element pin-blueprint-element"
                  key={blueprint}
                >
                  <img
                    src={
                      type === BlueprintType.UPGRADES
                        ? "/assets/upgrades/" +
                          blueprint.replace(/[^a-zA-Z]/g, "") +
                          ".png"
                        : `/assets/${currentType}/${blueprint}.png`
                    }
                    alt="Icon of blueprint"
                  />
                  <p>{name}: </p>
                  <FaMinus onClick={() => decreaseBlueprint(blueprint, 1)} />
                  <h3>{blueprintList.get(blueprint)![1]}</h3>
                  <FaPlus
                    onClick={() => increaseBlueprint(blueprint, type, 1)}
                  />
                  <button onClick={() => deleteBlueprint(blueprint)}>
                    <img
                      src="/assets/misc/trash.png"
                      alt="Clear the blueprint"
                      className="clear-item-img"
                    />
                  </button>
                </div>
              );
            }))
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
                  src={`/assets/${
                    recipeElements[item as RecipeElement][1]
                  }.png`}
                  alt={recipeElements[item as RecipeElement][0]}
                  title={recipeElements[item as RecipeElement][0]}
                />
                <p>{recipeElements[item as RecipeElement][0]}: </p>
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
