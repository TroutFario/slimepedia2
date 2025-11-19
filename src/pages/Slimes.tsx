import React, { useState, useEffect, useMemo } from "react";
import {
  Slime,
  slimesList,
  slimesText,
  slimepedia,
  specialSlimes,
} from "../data/slimes";
import { NavButton } from "../components/NavButton";
import { Biomes } from "../components/Biomes";
import { foodList, foodTypeList, foodTypeBlacklist } from "../data/food";
import { toyList } from "../data/toys";
import { Navigate, NavLink, useParams } from "react-router-dom";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import { FaAngleDown } from "react-icons/fa6";
import "../css/Pedia.css";
import { Region, regionElements } from "../data/regions";
import { Weather, weatherList } from "../data/weather";
import { LittleBoxProps } from "../components/shared/LittleBox";
import { PediaBoxLayout, PediaInfo } from "../components/PediaInfo";

const nonePath = "/assets/misc/none.png";
const nonPlortSlimes = [null, Slime.Lucky, Slime.Tarr];
interface SlimeDetailsProps {
  selectedSlime: Slime | null;
}

const getSlimeSpawnlist = (slime: Slime | null): (Region | Weather)[] => {
  if (slime === null) return [];
  if (specialSlimes.includes(slime))
    return [
      Region.Fields,
      Region.Strand,
      Region.Valley,
      Region.Bluffs,
      Region.Labyrinth,
    ];
  const spawnList: (Region | Weather)[] = [];
  for (const [region, regionElement] of Object.entries(regionElements))
    if (regionElement[0].includes(slime)) spawnList.push(region as Region);
  for (const [weather, weatherElement] of Object.entries(weatherList))
    if (weatherElement[4].includes(slime)) spawnList.push(weather as Weather);
  return spawnList;
};

const SlimeDetails: React.FC<SlimeDetailsProps> = ({ selectedSlime }) => {
  const isNoSlime = selectedSlime === null;

  const currentSlimeList = isNoSlime ? null : slimesList[selectedSlime];
  const foodType = currentSlimeList?.[1] ?? null;
  const favFood = currentSlimeList?.[2] ?? null;
  const isLargoable = currentSlimeList?.[3] ?? false;
  const toy = currentSlimeList?.[4] ?? null;

  const littleBoxList: LittleBoxProps[] = [
    // Diet
    {
      image: isNoSlime
        ? "/assets/food/any.png"
        : foodType === null
        ? nonePath
        : `/assets/food/${foodType}.png`,
      alt: isNoSlime
        ? "No slime selected"
        : foodType == null
        ? "None"
        : foodTypeList[foodType][0],
      title: "Diet",
      subtitle: isNoSlime
        ? null
        : foodType == null
        ? "None"
        : foodTypeList[foodType][0],
      action: null,
      link:
        isNoSlime ||
        foodType === null ||
        foodTypeBlacklist.slice(1).includes(foodType)
          ? null
          : `/food/${foodType}`,
    },
    // Favorite Food
    {
      image: isNoSlime
        ? "/assets/misc/empty.png"
        : favFood === null
        ? "/assets/misc/none.png"
        : `/assets/food/${favFood}.png`,
      alt: isNoSlime
        ? "No slime selected"
        : favFood == null
        ? "None"
        : foodList[favFood][0],
      title: "Favorite Food",
      subtitle: isNoSlime
        ? null
        : favFood == null
        ? "None"
        : foodList[favFood][0],
      action: null,
      link: isNoSlime || favFood === null ? null : `/food/${favFood}`,
    },
    // Largo-able
    {
      image: isNoSlime
        ? "/assets/misc/largo.png"
        : `/assets/misc/${isLargoable ? "largo" : "none"}.png`,
      alt: isNoSlime
        ? "No slime selected"
        : isLargoable
        ? "Largo-able"
        : "Non largo-able",
      title: "Largo-able",
      subtitle: isNoSlime ? null : isLargoable ? "Yes" : "No",
      action: null,
      link: null,
    },
    // Favorite Toy
    {
      image: isNoSlime
        ? "/assets/misc/empty.png"
        : !toy
        ? "/assets/misc/none.png"
        : `/assets/toys/${toy}.png`,
      alt: isNoSlime
        ? "No slime selected"
        : toy != null
        ? toyList[toy][0] ?? "None"
        : "None",
      title: "Favorite Toy",
      subtitle: isNoSlime
        ? null
        : toy != null
        ? toyList[toy][0] ?? "None"
        : "None",
      action: null,
      link: isNoSlime || toy === null ? null : `/items/toys/${toy}`,
    },
  ];

  return (
    <PediaInfo
      layout={PediaBoxLayout.TwoByTwo}
      title={
        isNoSlime || !currentSlimeList ? "Select a slime" : currentSlimeList[0]
      }
      subtitle={
        isNoSlime
          ? "Click on a slime on the list to get their information"
          : slimesText[selectedSlime]
      }
      icon={
        isNoSlime
          ? "/assets/misc/empty.png"
          : `/assets/slimes/${selectedSlime}.png`
      }
      plortIcon={
        !isNoSlime && !nonPlortSlimes.includes(selectedSlime)
          ? selectedSlime
          : undefined
      }
      littleBoxList={littleBoxList}
      BiomeComponent={<Biomes spawnList={getSlimeSpawnlist(selectedSlime)} />}
    />
  );
};

interface SlimeDescriptionProps {
  slimepediaEntry: [string, string, string];
  topBtn: boolean;
}

const SlimeDescription: React.FC<SlimeDescriptionProps> = ({
  slimepediaEntry,
  topBtn,
}) => (
  <div className={"desc " + (topBtn ? "shown-desc" : "hidden-desc")}>
    <div className="desc-title">
      <img src="/assets/misc/pediaslime.png" alt="Slimeology" />
      <h3>Slimeology</h3>
    </div>
    <p>{slimepediaEntry[0]}</p>
    <div className="desc-title">
      <img src="/assets/misc/pediarisks.png" alt="Rancher Risks" />
      <h3>Rancher Risks</h3>
    </div>
    <p>{slimepediaEntry[1]}</p>
    <div className="desc-title">
      <img src="/assets/misc/pediaplort.png" alt="Plortonomics" />
      <h3>Plortonomics</h3>
    </div>
    <p>{slimepediaEntry[2]}</p>
  </div>
);

export const Slimes = () => {
  const { slime: slimeName } = useParams();

  const slime = Object.values(Slime).includes(slimeName as Slime)
    ? (slimeName as Slime)
    : null;
  const [topBtn, setTopBtn] = useState(false);
  useEffect(() => setTopBtn(false), [slime]);
  const slimepediaEntry: [string, string, string] = useMemo(
    () => (slime === null ? ["", "", ""] : slimepedia[slime]),
    [slime]
  );
  if (slime === null && slimeName !== undefined) {
    return <Navigate to="/slimes" replace />;
  }

  document.title =
    (slime ? slimesList[slime][0] : "Slimes") + " - Slimepedia 2";

  return (
    <div>
      <OverlayScrollbarsComponent
        className="list-slime"
        options={{
          scrollbars: {
            autoHide: "move",
            autoHideDelay: 500,
          },
        }}
        defer
      >
        {Object.values(Slime).map((slimeName) => (
          <NavLink
            to={`/slimes/${slimeName}`}
            style={{ textDecoration: "none" }}
            key={slimeName}
          >
            <NavButton
              key={slimeName}
              icon={`slimes/${slimeName}`}
              size={1.25}
              name={slimesList[slimeName][0]}
              selected={slimeName === slime}
            />
          </NavLink>
        ))}
      </OverlayScrollbarsComponent>
      <div
        className={
          "box-presentation" +
          (topBtn ? " hidden-infos" : "")
        }
      >
        <SlimeDetails selectedSlime={slime} />
        <button
          role="link"
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
        <SlimeDescription slimepediaEntry={slimepediaEntry} topBtn={topBtn} />
      </div>
    </div>
  );
};

export default Slimes;
