import React, { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { RecipeProvider } from "../../components/RecipeContext";
import "../../css/Blueprints.css";
import UpgradePage from "./Upgrades";
import { RecipeMenu } from "../../components/shared/CraftingList";
import UtilityPage from "./Utility";
import WarpPage from "./Warp";
import DecorationPage from "./Decoration";
import { BlueprintType } from "../../data/blueprints/blueprints";

const Blueprints: React.FC = () => {
  const { tab: tabName } = useParams();
  const tab = (tabName as BlueprintType) ?? BlueprintType.UPGRADE;

  const renderPage = () => {
    switch (tab) {
      case BlueprintType.UPGRADE:
        return <UpgradePage />;
      case BlueprintType.UTILITY:
        return <UtilityPage />;
      case BlueprintType.WARP:
        return <WarpPage />;
      case BlueprintType.DECORATION:
        return <DecorationPage />;
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
            to="/blueprints/upgrade"
            className={`blueprints-tab${tab === BlueprintType.UPGRADE ? " selected" : ""}`}
          >
            <img src="/assets/misc/upgrade.png" alt="Upgrade Icon" />
            <h1>Upgrades</h1>
          </NavLink>
          <NavLink
            to="/blueprints/utility"
            className={`blueprints-tab${tab === BlueprintType.UTILITY ? " selected" : ""}`}
          >
            <img src="/assets/misc/utility.png" alt="Utility" />
            <h1>Utility</h1>
          </NavLink>
          <NavLink to="/blueprints/warp" className={`blueprints-tab${tab === BlueprintType.WARP ? " selected" : ""}`}>
            <img src="/assets/misc/warp.png" alt="Warp Tech" />
            <h1>Warp Tech</h1>
          </NavLink>
          <NavLink
            to="/blueprints/decoration"
            className={`blueprints-tab${tab === BlueprintType.DECORATION ? " selected" : ""}`}
          >
            <img src="/assets/misc/decoration.png" alt="Decoration" />
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
