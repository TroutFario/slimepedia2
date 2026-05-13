import React, { useState } from "react";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import { NavLink, useParams } from "react-router-dom";
import NavButton from "../../components/NavButton";
import {BlueprintType, DecorationTheme, prettyRequirement, unlockRequirements} from "../../data/blueprints/blueprints";
import {
  Decoration,
  decorationNames,
  decorationDescription,
  decorationList,
  themeList,
} from "../../data/blueprints/decoration";
import CraftingList from "../../components/shared/CraftingList";
import { LittleBoxProps } from "../../components/shared/LittleBox";
import PediaInfo from "../../components/PediaInfo";
import { PediaBoxLayout } from "../../data/enums";

const DecorationInfos: React.FC<{
  decoration: Decoration | null;
  setDecoFilter: React.Dispatch<React.SetStateAction<DecorationTheme>>;
}> = ({ decoration, setDecoFilter }) => {
  let title = "No decoration selected";
  let subtitle = "Select a decoration to get its information";
  let icon: string | null = null;
  const littleBoxList: LittleBoxProps[] = [];
  if (decoration === null) {
    littleBoxList.push(
      {
        image: "/assets/misc/decoration.png",
        alt: "No decoration selected",
        title: "Decoration Theme",
      },
      {
        image: "/assets/misc/pediatut.png",
        alt: "No decoration selected",
        title: "Unlock Requirements",
      },
    );
  } else {
    const themeName: string = themeList[decorationList[decoration].theme][0];
    littleBoxList.push({
      image: `/assets/${themeList[decorationList[decoration].theme][1]}.png`,
      alt: themeName + " Theme",
      title: "Decoration Theme",
      subtitle: themeName,
      action: () => setDecoFilter(decorationList[decoration].theme),
    });
    title = decorationList[decoration].name;
    subtitle = decorationDescription[decoration];
    icon = `/assets/deco/${decoration}.png`;
    littleBoxList.push({
      image: `/assets/${unlockRequirements[decorationList[decoration].unlock.unlock].icon}.png`,
      alt: prettyRequirement(decorationList[decoration].unlock),
      title: "Unlock Requirements",
      subtitle: prettyRequirement(decorationList[decoration].unlock),
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
            <CraftingList name={decoration} type={BlueprintType.DECORATION} />
          </div>
        }
      />
    </div>
  );
};

const DecorationPage: React.FC = () => {
  const { blueprint: blueprintName } = useParams();
  const blueprint = (blueprintName as Decoration) ?? null;
  const [decoFilter, setDecoFilter] = useState<DecorationTheme>(DecorationTheme.ANY);

  const decorationListFiltered: Decoration[] =
    decoFilter === "any" ? decorationNames : decorationNames.filter((deco) => decorationList[deco].theme=== decoFilter);

  document.title = blueprint === null ? "Decoration - Slimepedia" : decorationList[blueprint].name + " - Slimepedia";

  return (
    <>
      <div className="decoration-list">
        <div className="decoration-tabs">
          {Object.values(DecorationTheme).map((theme) => (
            <button
              key={theme}
              className={`decoration-tab${decoFilter === theme ? " selected" : ""}`}
              onClick={() => setDecoFilter(theme)}
              title={themeList[theme][0]}
            >
              <img src={`/assets/${themeList[theme][1]}.png`} alt="Any Decoration" />
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
            <NavLink key={decoName} to={`/blueprints/decoration/${decoName}`} className="blueprint-item">
              <NavButton
                name={decorationList[decoName].name}
                icon={`deco/${decoName}`}
                wiggle={false}
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
