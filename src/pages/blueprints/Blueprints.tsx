import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { NavButton } from "../../components/NavButton";
import { RecipeProvider } from "../../components/RecipeContext";
import {
  BlueprintItem,
  BlueprintType,
  DecorationTheme,
  themeList,
  unlockRequirements,
} from "../../text/blueprints/blueprints";
import {
  upgradeDescriptions,
  UpgradeWithTier,
} from "../../text/blueprints/upgrades";
import "../../css/Blueprints.css";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import {
  warpDescriptions,
  warpGadgets,
  warpNames,
  Warp,
} from "../../text/blueprints/warp";
import {
  utilitiesDescription,
  utilitiesList,
  Utility,
  utilityNames,
} from "../../text/blueprints/utilities";
import {
  decorationsDescription,
  decorationsList,
  Decoration,
  decorationNames,
} from "../../text/blueprints/decoration";
import { UpgradesPage } from "./Upgrades";
import CraftingList, { blueprintMatcher, RecipeMenu } from "./CraftingList";

const descriptionMatcher = (blueprint: BlueprintItem, type: BlueprintType) => {
  switch (type) {
    case BlueprintType.UPGRADES:
      return upgradeDescriptions[blueprint as UpgradeWithTier];
    case BlueprintType.UTILITIES:
      return utilitiesDescription[blueprint as Utility];
    case BlueprintType.WARP:
      return warpDescriptions[blueprint as Warp];
    case BlueprintType.DECORATIONS:
      return decorationsDescription[blueprint as Decoration];
  }
};

const isDecorationKey = (k: BlueprintItem): k is Decoration =>
  typeof k === "string" &&
  Object.prototype.hasOwnProperty.call(decorationsList, k);

const BlueprintInfos: React.FC<{
  blueprint: BlueprintItem | null;
  type: BlueprintType;
}> = ({ blueprint, type }) => {
  if (blueprint === null)
    return (
      <div className="blueprint-infos">
        <div className="blueprint-title-box">
          <img src="/assets/misc/blueprint.png" alt="No Blueprint" />
          <h1>Select a blueprint</h1>
          <h2>Select an upgrade to view its details</h2>
        </div>
        <div className="blueprint-requirements-box little-box">
          <div>
            <h3>Requirements</h3>
          </div>
        </div>
        <div className="blueprint-recipe-box">
          <h2>Recipe</h2>
        </div>
      </div>
    );
  const folder = type === BlueprintType.DECORATIONS ? "deco" : "gadgets";
  const blueprintInfos = blueprintMatcher(blueprint, type);
  const blueprintDescription = descriptionMatcher(blueprint, type);
  return (
    <div
      className={
        "blueprint-infos" +
        (type === BlueprintType.DECORATIONS ? " decoration" : "")
      }
    >
      <div className="blueprint-title-box">
        <img
          src={`/assets/${folder}/${blueprint}.png`}
          alt={blueprintInfos[0] + " Image"}
        />
        <h1>{blueprintInfos[0]}</h1>
        <h2>{blueprintDescription}</h2>
      </div>
      {type === BlueprintType.DECORATIONS && isDecorationKey(blueprint) && (
        <div className="decoration-theme-box little-box">
          <img
            src={`/assets/${themeList[decorationsList[blueprint][3]][1]}.png`}
            alt={themeList[decorationsList[blueprint][3]][0]}
          />
          <div>
            <h3>Decoration Theme</h3>
            <h4>{themeList[decorationsList[blueprint][3]][0]}</h4>
          </div>
        </div>
      )}

      <div className="blueprint-requirements-box little-box">
        <img
          src={`/assets/${unlockRequirements[blueprintInfos[1]][1]}.png`}
          alt={unlockRequirements[blueprintInfos[1]][0]}
        />
        <div>
          <h3>Requirements</h3>
          <h4>{unlockRequirements[blueprintInfos[1]][0]}</h4>
        </div>
      </div>
      <div className="blueprint-recipe-box">
        <h2>Recipe</h2>
        <CraftingList name={blueprint} type={type} />
      </div>
    </div>
  );
};

const UtilitiesPage: React.FC = () => {
  const { blueprint: blueprintName } = useParams();
  const blueprint = blueprintName as Utility ?? null;

  document.title =
    blueprint === null
      ? "Blueprints - Slimepedia"
      : utilitiesList[blueprint][0] + " - Slimepedia";

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
            to={`/blueprints/utilities/${utilityName}`}
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
      <BlueprintInfos
        blueprint={blueprint}
        type={BlueprintType.UTILITIES}
      />
    </>
  );
};

const WarpPage: React.FC = () => {
  const { blueprint: warpName } = useParams();
  const blueprint = warpName as Warp ?? null;

  document.title =
    blueprint === null
      ? "Blueprints - Slimepedia"
      : warpGadgets[blueprint][0] + " - Slimepedia";

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
      <BlueprintInfos
        blueprint={blueprint}
        type={BlueprintType.WARP}
      />
    </>
  );
};

const DecorationsPage: React.FC = () => {
  const { blueprint: blueprintName } = useParams();
  const blueprint = blueprintName as Decoration ?? null;
  const [decoFilter, setDecoFilter] = useState<DecorationTheme>(
    DecorationTheme.ANY
  );

  document.title =
    blueprint === null
      ? "Blueprints - Slimepedia"
      : decorationsList[blueprint][0] + " - Slimepedia";

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
          {(decoFilter === "any"
            ? decorationNames
            : decorationNames.filter(
                (deco) => decorationsList[deco][3] === decoFilter
              )
          ).map((decoName) => (
            <NavLink
              key={decoName}
              to={`/blueprints/decorations/${decoName}`}
              className="blueprint-item"
            >
              <NavButton
                name={decorationsList[decoName][0]}
                icon={`deco/${decoName}`}
                tilting="none"
                selected={decoName === blueprint}
                size={1.25}
              />
            </NavLink>
          ))}
        </OverlayScrollbarsComponent>
      </div>
      <BlueprintInfos
        blueprint={blueprint}
        type={BlueprintType.DECORATIONS}
      />
    </>
  );
};

export const Blueprints: React.FC = () => {
  const { tab: tabName } = useParams();
  const tab = tabName ?? "upgrades";

  const renderPage = () => {
    switch (tab) {
      case "upgrades":
        return <UpgradesPage />;
      case "utilities":
        return <UtilitiesPage />;
      case "warp":
        return <WarpPage />;
      case "decorations":
        return <DecorationsPage />;
      default:
        return <></>;
    }
  };

  useEffect(() => {
    document.title = "Blueprints - Slimepedia";
  }, []);

  return (
    <RecipeProvider>
      <div>
        <div className="blueprints-category">
          <NavLink
            to="/blueprints/upgrades"
            className={`blueprints-tab${tab === "upgrades" ? " selected" : ""}`}
          >
            <img src="/assets/misc/upgrade.png" alt="Upgrade Icon" />
            <h1>Upgrades</h1>
          </NavLink>
          <NavLink
            to="/blueprints/utilities"
            className={`blueprints-tab${
              tab === "utilities" ? " selected" : ""
            }`}
          >
            <img src="/assets/misc/utilities.png" alt="Utilities" />
            <h1>Utilities</h1>
          </NavLink>
          <NavLink
            to="/blueprints/warp"
            className={`blueprints-tab${tab === "warp" ? " selected" : ""}`}
          >
            <img src="/assets/misc/warp.png" alt="Warp Tech" />
            <h1>Warp Tech</h1>
          </NavLink>
          <NavLink
            to="/blueprints/decorations"
            className={`blueprints-tab${
              tab === "decorations" ? " selected" : ""
            }`}
          >
            <img src="/assets/misc/decorations.png" alt="Decorations" />
            <h1>Decoration</h1>
          </NavLink>
        </div>
        {renderPage()}
      </div>
      <RecipeMenu />
    </RecipeProvider>
  );
};

export default Blueprints;
