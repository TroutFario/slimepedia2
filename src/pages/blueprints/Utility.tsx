import React from "react";
import { NavLink, useParams } from "react-router-dom";
import {
  utilitiesDescription,
  utilitiesList,
  Utility,
  utilityNames,
} from "../../data/blueprints/utilities";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import NavButton from "../../components/NavButton";
import { CraftingList } from "../../components/shared/CraftingList";
import {
  BlueprintType,
  unlockRequirements,
} from "../../data/blueprints/blueprints";
import PediaInfo, { PediaBoxLayout } from "../../components/PediaInfo";
import { LittleBoxProps } from "../../components/shared/LittleBox";

const UtilityInfo: React.FC<{utility: Utility | null}> = ({ utility }) => {
    let title = "No utility selected";
    let subtitle = "Select an utility to get its information";
    let icon: string | null = null;
    const littleBoxList: LittleBoxProps[] = [];
    if (utility === null) {
      littleBoxList.push({
        image: "/assets/misc/check.png",
        alt: "No utility selected",
        title: "Unlock Requirements",
      });
    } else {
      title = utilitiesList[utility][0];
      subtitle = utilitiesDescription[utility];
      icon = `/assets/gadgets/${utility}.png`;
      littleBoxList.push({
        image: `/assets/${unlockRequirements[utilitiesList[utility][1]][1]}.png`,
        alt: unlockRequirements[utilitiesList[utility][1]][0],
        title: "Unlock Requirements",
        subtitle: unlockRequirements[utilitiesList[utility][1]][0],
      });
    }
    return (
      <div className={"blueprint-infos box-presentation"}>
        <PediaInfo
          layout={PediaBoxLayout.OneByOne}
          title={title}
          subtitle={subtitle}
          icon={icon}
          littleBoxList={littleBoxList}
          BiomeComponent={
            <div className="blueprint-recipe-box component-container">
              <h2>Recipe</h2>
              <CraftingList name={utility} type={BlueprintType.UTILITY} />
            </div>
          }
        />
      </div>
    );
};

export const UtilityPage: React.FC = () => {
  const { blueprint: blueprintName } = useParams<{ blueprint: string }>();
  const warp = (blueprintName as Utility) ?? null;

  document.title =
    warp === null
      ? "Blueprints - Slimepedia"
      : utilitiesList[warp][0] + " - Slimepedia";

  return (
    <>
      <OverlayScrollbarsComponent
        options={{
          scrollbars: {
            autoHide: "move",
            autoHideDelay: 500,
          },
        }}
        defer
        className="blueprint-list"
      >
        {utilityNames.map((utilityName) => (
          <NavLink
            key={utilityName}
            to={`/blueprints/utility/${utilityName}`}
            className="blueprint-item"
          >
            <NavButton
              key={utilityName}
              name={utilitiesList[utilityName][0]}
              icon={`gadgets/${utilityName}`}
              tilting="none"
              size={1.25}
            />
          </NavLink>
        ))}
      </OverlayScrollbarsComponent>
      <UtilityInfo utility={warp} />
    </>
  );
};

export default UtilityPage;
