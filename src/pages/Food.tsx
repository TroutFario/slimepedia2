import React, { useState, useMemo } from "react";
import { NavLink, useParams, Navigate } from "react-router-dom";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import { NavButton } from "../components/NavButton";
import { Biomes } from "../components/Biomes";
import { foodpedia, foodDescription, foodList, Food, FoodType, foodTypeList, foodBlackList } from "../data/food";
import { Tab } from "../components/Tab";
import { Slime, slimesList } from "../data/slimes";
import "../css/Pedia.css";
import { FaAngleDown } from "react-icons/fa6";
import { Region, regionElements } from "../data/regions";
import { LittleBoxProps } from "../components/shared/LittleBox";
import { PediaBoxLayout, PediaInfo } from "../components/PediaInfo";

interface FoodTabsProps {
  filter: FoodType | null;
  setFilter: (filter: FoodType | null) => void;
}

const FoodTabs: React.FC<FoodTabsProps> = ({ filter, setFilter }) => (
  <div className="food-tabs">
    <Tab title="All" icon={`food/any`} action={() => setFilter(FoodType.Any)} selected={filter === FoodType.Any} />
    <Tab
      title="Veggies"
      icon={`food/veggies`}
      action={() => setFilter(FoodType.Veggies)}
      selected={filter === FoodType.Veggies}
    />
    <Tab
      title="Fruits"
      icon={`food/fruits`}
      action={() => setFilter(FoodType.Fruits)}
      selected={filter === FoodType.Fruits}
    />
    <Tab title="Meat" icon={`food/meat`} action={() => setFilter(FoodType.Meat)} selected={filter === FoodType.Meat} />
    <Tab title="Special" icon={`food/honey`} action={() => setFilter(null)} selected={filter === null} />
  </div>
);

interface FoodDetailsProps {
  food: Food | null;
  setFilter: (filter: FoodType | null) => void;
}

const favSlimeCalc = (food: Food | null): Slime | null => {
  if (food === null) return null;
  for (const s of Object.values(Slime)) {
    if (slimesList[s][2] === food) return s;
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
  filter: FoodType | null;
}> = ({ actualFoodList, food, filter }) => (
  <OverlayScrollbarsComponent
    className={"list-food" + (filter === FoodType.Any ? " list-food-first" : filter && " list-food-last")}
    options={{
      scrollbars: {
        autoHide: "move",
        autoHideDelay: 500,
      },
    }}
    defer
  >
    {actualFoodList.map((foodName) => (
      <NavLink to={`/food/${foodName}`} style={{ textDecoration: "none" }} key={foodName}>
        <NavButton
          key={foodName}
          icon={`food/${foodName}`}
          size={1.25}
          name={foodList[foodName][0]}
          selected={foodName === food}
        />
      </NavLink>
    ))}
  </OverlayScrollbarsComponent>
);

const specialFoodFilter = (foodType: FoodType | null): FoodType | null => {
  if (foodType && [FoodType.Fruits, FoodType.Veggies, FoodType.Meat].includes(foodType)) return foodType;
  return null;
};

const FoodDetails: React.FC<FoodDetailsProps> = ({ food, setFilter }) => {
  const littleBoxList: LittleBoxProps[] = [];
  if (food === null) {
    littleBoxList.push(
      {
        image: null,
        alt: "No food selected",
        title: "Food type",
        subtitle: null,
        action: null,
        link: null,
      },
      {
        image: null,
        alt: "No slime selected",
        title: "Favorite of",
        subtitle: null,
        action: null,
        link: null,
      },
    );
    return (
      <PediaInfo
        layout={PediaBoxLayout.OneByTwo}
        title="Select food"
        subtitle="Click on food to get it's information"
        icon="/assets/misc/empty.png"
        littleBoxList={littleBoxList}
        BiomeComponent={<Biomes spawnList={[]} />}
      />
    );
  }

  const foodType = foodList[food][1];
  const foodTypeName = foodType === null ? "Unedible" : foodTypeList[foodType][1];
  const foodTypeIcon = foodType === null ? "/assets/misc/none.png" : `/assets/food/${foodType}.png`;

  const favSlime = favSlimeCalc(food);
  const slimeName = favSlime ? slimesList[favSlime][0] : "Nobody";
  const slimeIcon = favSlime ? `/assets/slimes/${favSlime}.png` : "/assets/misc/none.png";
  littleBoxList.push(
    {
      image: foodTypeIcon,
      alt: foodTypeName,
      title: "Food type",
      subtitle: foodTypeName,
      action: foodType === null ? null : () => setFilter(specialFoodFilter(foodType)),
      link: null,
    },
    {
      image: slimeIcon,
      alt: "Icon of " + slimeName,
      title: "Favorite of",
      subtitle: slimeName,
      action: null,
      link: favSlime ? `/slimes/${favSlime}` : null,
    },
  );
  return (
    <PediaInfo
      layout={PediaBoxLayout.OneByTwo}
      title={foodList[food][0]}
      subtitle={foodDescription[food]}
      icon={`/assets/food/${food}.png`}
      littleBoxList={littleBoxList}
      BiomeComponent={<Biomes spawnList={getFoodSpawnlist(food)} />}
    />
  );
};

interface FoodDescriptionProps {
  food: Food | null;
  topBtn: boolean;
}

const FoodDescription: React.FC<FoodDescriptionProps> = ({ food, topBtn }) => {
  if (food === null)
    return (
      <div className={"desc " + (topBtn ? "shown-desc" : "hidden-desc")}>
        <div className="desc-title">
          <img src="/assets/misc/pediaabout.png" alt="Slimeology" />
          <h3>About</h3>
        </div>
        <p>Select a food to get it&apos;s description</p>
        <div className="desc-title">
          <img src="/assets/misc/pediaquestion.png" alt="Rancher Risks" />
          <h3>On the ranch</h3>
        </div>
        <p>Select a food to get it&apos;s description</p>
      </div>
    );
  return (
    <div className={"desc " + (topBtn ? "shown-desc" : "hidden-desc")}>
      <div className="desc-title">
        <img src="/assets/misc/pediaabout.png" alt="Slimeology" />
        <h3>About</h3>
      </div>
      <p>{foodpedia[food][0]}</p>
      <div className="desc-title">
        <img src="/assets/misc/pediaquestion.png" alt="Rancher Risks" />
        <h3>On the ranch</h3>
      </div>
      <p>{foodpedia[food][1]}</p>
    </div>
  );
};

export const FoodPage = () => {
  const { food: foodName } = useParams<{ food: string }>();
  const food = Object.values(Food).includes(foodName as Food) ? (foodName as Food) : null;
  const [filter, setFilter] = useState<FoodType | null>(food ? foodList[food][1] : FoodType.Any);
  const [topBtn, setTopBtn] = useState(false);

  const actualFoodList: Food[] = useMemo(() => {
    switch (filter) {
      case FoodType.Any:
        return Object.values(Food).slice(0, -2);
      case FoodType.Fruits:
        return Object.values(Food).filter((foodSearched) => foodList[foodSearched][1] === FoodType.Fruits);
      case FoodType.Veggies:
        return Object.values(Food).filter((foodSearched) => foodList[foodSearched][1] === FoodType.Veggies);
      case FoodType.Meat:
        return Object.values(Food).filter((foodSearched) => foodList[foodSearched][1] === FoodType.Meat);
      case null:
        return Object.values(Food)
          .filter(
            (foodSearched) =>
              foodList[foodSearched][1] === null ||
              ![FoodType.Fruits, FoodType.Veggies, FoodType.Meat].includes(foodList[foodSearched][1]),
          )
          .slice(0, -2);
      default:
        return Object.values(Food).slice(0, -2);
    }
  }, [filter]);

  if ((food === null && foodName !== undefined) || (food !== null && foodBlackList.includes(food)))
    return <Navigate to="/food" replace />;

  document.title = food === null ? "Food - Slimepedia" : foodList[food][0] + " - Slimepedia";

  return (
    <div>
      <div className="list-container">
        <FoodTabs filter={filter} setFilter={setFilter} />
        <FoodList actualFoodList={actualFoodList} food={food} filter={filter} />
      </div>
      <div className={"box-presentation" + (topBtn ? " hidden-infos" : "")}>
        <FoodDetails food={food} setFilter={setFilter} />
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
          <FaAngleDown />
        </button>
        <FoodDescription food={food} topBtn={topBtn} />
      </div>
    </div>
  );
};

export default FoodPage;
