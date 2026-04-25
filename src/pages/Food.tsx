import React, {useState, useMemo} from "react";
import {NavLink, useParams, Navigate} from "react-router-dom";
import {OverlayScrollbarsComponent} from "overlayscrollbars-react";
import NavButton from "../components/NavButton";
import {Biomes} from "../components/Biomes";
import {foodpedia, foodDescription, foodList, Food, Diet, dietList, foodBlackList} from "../data/food";
import {Tab} from "../components/Tab";
import {Slime, slimes} from "../data/slimes";
import "../css/Pedia.css";
import {FaAngleDown} from "react-icons/fa6";
import {Region, regionElements} from "../data/regions";
import {LittleBoxProps} from "../components/shared/LittleBox";
import PediaInfo from "../components/PediaInfo";
import {PediaBoxLayout} from "../data/enums";

interface FoodTabsProps {
    filter: Diet | null;
    setFilter: (filter: Diet | null) => void;
}

const FoodTabs: React.FC<FoodTabsProps> = ({filter, setFilter}) => (
    <div className="food-tabs">
        <Tab title="All" icon={`food/any`} action={() => setFilter(Diet.Any)} selected={filter === Diet.Any}/>
        <Tab
            title="Veggies"
            icon={`food/veggies`}
            action={() => setFilter(Diet.Veggies)}
            selected={filter === Diet.Veggies}
        />
        <Tab title="Fruits" icon={`food/fruits`} action={() => setFilter(Diet.Fruits)}
             selected={filter === Diet.Fruits}/>
        <Tab title="Meat" icon={`food/meat`} action={() => setFilter(Diet.Meat)} selected={filter === Diet.Meat}/>
        <Tab title="Special" icon={`food/honey`} action={() => setFilter(null)} selected={filter === null}/>
    </div>
);

interface FoodDetailsProps {
    selectedFood: Food | null;
    setFilter: (filter: Diet | null) => void;
}

const favSlimeCalc = (food: Food | null) => {
    if (food === null) return null;
    for (const s of Object.values(Slime)) {
        if (slimes[s].food === food) return slimes[s];
    }
    return null;
};

const getFoodSpawnlist = (food: Food | null): Region[] => {
    if (food === null) return [];
    const spawnList: Region[] = [];
    for (const regionKey of Object.keys(regionElements) as Region[]) {
        const regionElement = regionElements[regionKey];
        if (regionElement[1].includes(food)) spawnList.push(regionKey);
    }
    return spawnList;
};

const FoodList: React.FC<{
    actualFoodList: Food[];
    food: Food | null;
    filter: Diet | null;
}> = ({actualFoodList, food, filter}) => (
    <OverlayScrollbarsComponent
        className={"list-food" + (filter === Diet.Any ? " list-food-first" : filter && " list-food-last")}
        options={{
            scrollbars: {
                autoHide: "move",
                autoHideDelay: 500,
            },
        }}
        defer
    >
        {actualFoodList.map((foodName) => (
            <NavLink to={`/food/${foodName}`} style={{textDecoration: "none"}} key={foodName}>
                <NavButton
                    key={foodName}
                    icon={`food/${foodName}`}
                    size={1.25}
                    name={foodList[foodName].name}
                    wiggle={false}
                    selected={foodName === food}
                />
            </NavLink>
        ))}
    </OverlayScrollbarsComponent>
);

const specialFoodFilter = (foodType: Diet | null): Diet | null => {
    if (foodType && [Diet.Fruits, Diet.Veggies, Diet.Meat].includes(foodType)) return foodType;
    return null;
};

const FoodDetails: React.FC<FoodDetailsProps> = ({selectedFood, setFilter}) => {
    if (selectedFood === null) {
        const littleBoxList: LittleBoxProps[] = [
            {
                alt: "No food selected",
                title: "Food type",
            },
            {
                alt: "No slime selected",
                title: "Favorite of",
            },
        ];
        return (
            <PediaInfo
                layout={PediaBoxLayout.OneByTwo}
                title="Select food"
                subtitle="Click on food to get it's information"
                icon="/assets/misc/empty.png"
                littleBoxList={littleBoxList}
                BiomeComponent={<Biomes spawnList={[]}/>}
            />
        );
    }

    const food = foodList[selectedFood];
    const foodType = food.diet;
    const foodTypeName = foodType === null ? "Unedible" : dietList[foodType].singular;
    const foodTypeIcon = foodType === null ? "/assets/misc/none.png" : `/assets/food/${foodType}.png`;

    const slime = favSlimeCalc(selectedFood);

    const littleBoxList: LittleBoxProps[] = [
        {
            image: foodTypeIcon,
            alt: foodTypeName,
            title: "Food type",
            subtitle: foodTypeName,
            action: foodType === null ? null : () => setFilter(specialFoodFilter(foodType)),
            link: null,
        },
        {
            image: slime ? `/assets/slimes/${slime}.png` : "/assets/misc/none.png",
            alt: slime ? slime.name : "Nobody",
            title: "Favorite of",
            subtitle: slime ? slime.name : "Nobody",
            action: null,
            link: slime ? `/slimes/${slime}` : null,
        },
    ];

    return (
        <PediaInfo
            layout={PediaBoxLayout.OneByTwo}
            title={food.name}
            subtitle={foodDescription[selectedFood]}
            icon={`/assets/food/${selectedFood}.png`}
            littleBoxList={littleBoxList}
            BiomeComponent={<Biomes spawnList={getFoodSpawnlist(selectedFood)}/>}
        />
    );
};

interface FoodDescriptionProps {
    food: Food | null;
    topBtn: boolean;
}

const FoodDescription: React.FC<FoodDescriptionProps> = ({food, topBtn}) => {
    if (food === null)
        return (
            <div className={"desc " + (topBtn ? "shown-desc" : "hidden-desc")}>
                <div className="desc-title">
                    <img src="/assets/misc/pediaabout.png" alt="Slimeology"/>
                    <h3>About</h3>
                </div>
                <p>Select a food to get it&apos;s description</p>
                <div className="desc-title">
                    <img src="/assets/misc/pediaquestion.png" alt="Rancher Risks"/>
                    <h3>On the ranch</h3>
                </div>
                <p>Select a food to get it&apos;s description</p>
            </div>
        );
    return (
        <div className={"desc " + (topBtn ? "shown-desc" : "hidden-desc")}>
            <div className="desc-title">
                <img src="/assets/misc/pediaabout.png" alt="Slimeology"/>
                <h3>About</h3>
            </div>
            <p>{foodpedia[food][0]}</p>
            <div className="desc-title">
                <img src="/assets/misc/pediaquestion.png" alt="Rancher Risks"/>
                <h3>On the ranch</h3>
            </div>
            <p>{foodpedia[food][1]}</p>
        </div>
    );
};

const FoodPage = () => {
    const {food: foodName} = useParams<{ food: string }>();
    const food = Object.values(Food).includes(foodName as Food) ? (foodName as Food) : null;
    const [filter, setFilter] = useState<Diet | null>(food ? foodList[food].diet : Diet.Any);
    const [topBtn, setTopBtn] = useState(false);

    const actualFoodList: Food[] = useMemo(() => {
        if (!filter)
            return Object.values(Food)
                .filter(
                    (foodSearched) =>
                        foodList[foodSearched].diet === null ||
                        ![Diet.Fruits, Diet.Veggies, Diet.Meat].includes(foodList[foodSearched].diet),
                )
                .slice(0, -2);
        if (filter === Diet.Any) return Object.values(Food).slice(0, -2);
        return Object.values(Food).filter((foodSearched) => foodList[foodSearched].diet === Diet.Fruits);
    }, [filter]);

    if ((food === null && foodName !== undefined) || (food !== null && foodBlackList.includes(food)))
        return <Navigate to="/food" replace/>;

    document.title = food === null ? "Food - Slimepedia" : foodList[food].name + " - Slimepedia";

    return (
        <div>
            <div className="list-container">
                <FoodTabs filter={filter} setFilter={setFilter}/>
                <FoodList actualFoodList={actualFoodList} food={food} filter={filter}/>
            </div>
            <div className={"box-presentation" + (topBtn ? " hidden-infos" : "")}>
                <FoodDetails selectedFood={food} setFilter={setFilter}/>
                <button
                    className={"arrow-btn " + (topBtn ? "top-btn" : "bot-btn")}
                    onClick={() => setTopBtn(!topBtn)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            setTopBtn(!topBtn);
                        }
                    }}
                    tabIndex={0}
                >
                    <FaAngleDown/>
                </button>
                <FoodDescription food={food} topBtn={topBtn}/>
            </div>
        </div>
    );
};

export default FoodPage;
