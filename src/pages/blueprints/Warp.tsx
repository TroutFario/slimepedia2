import React from "react";
import {
  BlueprintType,
  unlockRequirements,
} from "../../data/blueprints/blueprints";
import {
  Warp,
  warpDescriptions,
  warpGadgets,
  warpNames,
} from "../../data/blueprints/warp";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import { NavLink, useParams } from "react-router-dom";
import NavButton from "../../components/NavButton";
import { CraftingList } from "../../components/shared/CraftingList";
import { LittleBoxProps } from "../../components/shared/LittleBox";
import PediaInfo, { PediaBoxLayout } from "../../components/PediaInfo";

const WarpInfos: React.FC<{ warp: Warp | null }> = ({ warp }) => {
  let title = "No warp tech selected";
  let subtitle = "Select a warp tech to get its information";
  let icon: string | null = null;
  const littleBoxList: LittleBoxProps[] = [];
  if (warp !== null) {
    title = warpGadgets[warp][0];
    subtitle = warpDescriptions[warp];
    icon = `/assets/gadgets/${warp}.png`;
    littleBoxList.push({
      image: `/assets/${unlockRequirements[warpGadgets[warp][1]][1]}.png`,
      alt: unlockRequirements[warpGadgets[warp][1]][0],
      title: "Unlock Requirements",
      subtitle: unlockRequirements[warpGadgets[warp][1]][0],
    });
  } else {
    littleBoxList.push({
      image: "/assets/misc/check.png",
      alt: "No warp tech selected",
      title: "Unlock Requirements",
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
            <CraftingList name={warp} type={BlueprintType.WARP} />
          </div>
        }
      />
    </div>
  );
};

export const WarpPage: React.FC = () => {
  const { blueprint: warpName } = useParams();
  const warp = (warpName as Warp) ?? null;

  document.title =
    warp === null
      ? "Blueprints - Slimepedia"
      : warpGadgets[warp][0] + " - Slimepedia";

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
        {warpNames.map((warpName) => (
          <NavLink
            key={warpName}
            to={`/blueprints/warp/${warpName}`}
            className="blueprint-item"
          >
            <NavButton
              key={warpName}
              name={warpGadgets[warpName][0]}
              icon={`gadgets/${warpName}`}
              tilting="none"
              size={1.25}
            />
          </NavLink>
        ))}
      </OverlayScrollbarsComponent>
      <WarpInfos warp={warp} />
    </>
  );
};

export default WarpPage;
