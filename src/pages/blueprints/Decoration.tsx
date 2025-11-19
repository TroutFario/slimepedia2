import React, { useState } from "react";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import { NavLink, useParams } from "react-router-dom";
import NavButton from "../../components/NavButton";
import {
  BlueprintType,
  DecorationTheme,
  unlockRequirements,
} from "../../data/blueprints/blueprints";
import {
  Decoration,
  decorationNames,
  decorationDescription,
  decorationList,
  themeList,
} from "../../data/blueprints/decoration";
import { CraftingList } from "../../components/shared/CraftingList";
import { LittleBoxStruct } from "../../components/shared/LittleBox";
import PediaInfo, { PediaBoxLayout } from "../../components/PediaInfo";

const DecorationInfos: React.FC<{
  decoration: Decoration | null;
  setDecoFilter: React.Dispatch<React.SetStateAction<DecorationTheme>>;
}> = ({ decoration, setDecoFilter }) => {
  let title = "No decoration selected";
  let subtitle = "Select a decoration to get its information";
  let icon: string | null = null;
  const littleBoxList: LittleBoxStruct[] = [];
  if (decoration !== null) {
    const themeName: string = themeList[decorationList[decoration][3]][0];
    littleBoxList.push({
      image: `/assets/${themeList[decorationList[decoration][3]][1]}.png`,
      alt: themeName + " Theme",
      title: "Decoration Theme",
      subtitle: themeName,
      action: () => setDecoFilter(decorationList[decoration][3]),
    });
    title = decorationList[decoration][0];
    subtitle = decorationDescription[decoration];
    icon = `/assets/deco/${decoration}.png`;
    littleBoxList.push({
      image: `/assets/${
        unlockRequirements[decorationList[decoration][1]][1]
      }.png`,
      alt: unlockRequirements[decorationList[decoration][1]][0],
      title: "Unlock Requirements",
      subtitle: unlockRequirements[decorationList[decoration][1]][0],
    });
  } else {
    littleBoxList.push({
      image: "/assets/misc/decoration.png",
      alt: "No decoration selected",
      title: "Decoration Theme",
    });
    littleBoxList.push({
      image: "/assets/misc/pediatut.png",
      alt: "No decoration selected",
      title: "Unlock Requirements",
    });
  }
  return (
    <div className="blueprint-infos box-presentation">
      <PediaInfo
        layout={PediaBoxLayout.TwoByOne}
        title={title}
        subtitle={subtitle}
        icon={icon}
        littleBoxList={littleBoxList}
        BiomeComponent={
          <div className="blueprint-recipe-box component-container">
            <h2>Recipe</h2>
            <CraftingList
              name={decoration}
              type={BlueprintType.DECORATION}
            />
          </div>
        }
      />
    </div>
  );
};

const DecorationPage: React.FC = () => {
  const { blueprint: blueprintName } = useParams();
  const blueprint = (blueprintName as Decoration) ?? null;
  const [decoFilter, setDecoFilter] = useState<DecorationTheme>(
    DecorationTheme.ANY
  );

  const decorationListFiltered: Decoration[] =
    decoFilter === "any"
      ? decorationNames
      : decorationNames.filter(
          (deco) => decorationList[deco][3] === decoFilter
        );

  document.title =
    blueprint === null
      ? "Decoration - Slimepedia"
      : decorationList[blueprint][0] + " - Slimepedia";

  return (
    <>
      <div className="decoration-list">
        <div className="decoration-tabs">
          {Object.values(DecorationTheme).map((theme) => (
            <button
              key={theme}
              className={`decoration-tab${
                decoFilter === theme ? " selected" : ""
              }`}
              onClick={() => setDecoFilter(theme)}
              title={themeList[theme][0]}
            >
              <img
                src={`/assets/${themeList[theme][1]}.png`}
                alt="Any Decoration"
              />
            </button>
          ))}
        </div>
        <div className="decoration-filter-name">
          <h1>Filter : {themeList[decoFilter][0]}</h1>
        </div>
        <OverlayScrollbarsComponent
          options={{
            scrollbars: {
              autoHide: "move",
              autoHideDelay: 500,
            },
          }}
          defer
          className="blueprint-list decoration"
        >
          {decorationListFiltered.map((decoName) => (
            <NavLink
              key={decoName}
              to={`/blueprints/decoration/${decoName}`}
              className="blueprint-item"
            >
              <NavButton
                name={decorationList[decoName][0]}
                icon={`deco/${decoName}`}
                tilting="none"
                selected={decoName === blueprint}
                size={1.25}
              />
            </NavLink>
          ))}
        </OverlayScrollbarsComponent>
      </div>
      <DecorationInfos decoration={blueprint} setDecoFilter={setDecoFilter} />
    </>
  );
};

export default DecorationPage;
