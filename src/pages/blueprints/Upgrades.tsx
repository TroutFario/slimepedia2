import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { Navigate, NavLink, useParams } from "react-router-dom";
import { getUpgradeKey, Upgrade, upgradeDescriptions, upgradeEffects, upgradeNames, upgradePacks, upgradesList, UpgradeWithTier } from "../../text/blueprints/upgrades";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import CraftingList from "./CraftingList";
import { BlueprintType, unlockRequirements } from "../../text/blueprints/blueprints";


interface UpgradeItemListProps {
  selected: boolean;
  upgradePack: [string, string, number];
  tier: number;
}

const UpgradeItemList: React.FC<UpgradeItemListProps> = ({
  selected = false,
  upgradePack,
  tier: selectedTier = 1,
}) => {
  const [tier, setTier] = useState<number>(selectedTier);

  return (
    <div
      className={`vac-upgrade-item${selected ? " selected" : ""}`}
      key={upgradePack[0]}
    >
      <NavLink
        to={`/blueprints/upgrades/${upgradePack[0]}/${tier}`}
        className="vac-upgrade-pack"
      >
        <img
          src={`/assets/upgrades/${upgradePack[0]}.png`}
          alt={upgradePack[1]}
        />
        <h2>{upgradePack[1]}</h2>
      </NavLink>
      <div className="vac-upgrade-tiers">
        {tier > 1 && upgradePack[2] >= 1 ? (
          <NavLink
            to={`/blueprints/upgrades/${upgradePack[0]}/${tier - 1}`}
            onClick={() => setTier(tier - 1)}
          >
            <div className="arrow-left">
              <FaAngleDown />
            </div>
          </NavLink>
        ) : (
          <div className="arrow-left disabled">
            <FaAngleDown />
          </div>
        )}
        <h2>{tier}</h2>
        {tier < upgradePack[2] && upgradePack[2] >= 1 ? (
          <NavLink
            to={`/blueprints/upgrades/${upgradePack[0]}/${tier + 1}`}
            onClick={() => setTier(tier + 1)}
          >
            <div className="arrow-right">
              <FaAngleDown />
            </div>
          </NavLink>
        ) : (
          <div className="arrow-right disabled">
            <FaAngleDown />
          </div>
        )}
      </div>
    </div>
  );
};

export const UpgradesPage: React.FC = () => {
  const { blueprint: upgradeName, tier: selectedTier } = useParams();
  const tier = selectedTier ? parseInt(selectedTier, 10) : 1;
  const upgrade =
    upgradeName != null && upgradeNames.includes(upgradeName as Upgrade)
      ? (upgradeName as Upgrade)
      : null;

  const validateUpgrade = () => {
    if (upgrade !== null) {
      if (!upgradeNames.includes(upgrade as Upgrade))
        return <Navigate to="/blueprints/upgrades" replace />;
      if (tier < 1 || tier > upgradePacks[upgrade as Upgrade][1])
        return <Navigate to={`/blueprints/upgrades/${upgrade}`} replace />;
    }
    return null;
  };

  document.title =
    upgrade === null
      ? "Blueprints - Slimepedia"
      : upgradesList[(upgrade + tier) as UpgradeWithTier][0] + " - Slimepedia";

  return (
    <>
      {validateUpgrade()}
      <OverlayScrollbarsComponent
        options={{
          scrollbars: {
            autoHide: "move",
            autoHideDelay: 500,
          },
        }}
        defer
        className="vac-upgrade-list"
      >
        {upgradeNames.map((upgradeName) => (
          <UpgradeItemList
            selected={upgrade === upgradeName}
            key={upgradeName}
            upgradePack={[
              upgradeName,
              upgradePacks[upgradeName][0],
              upgradePacks[upgradeName][1],
            ]}
            tier={tier}
          />
        ))}
      </OverlayScrollbarsComponent>
      <div className="vac-upgrade-info">
        <UpgradeTitleBox upgrade={upgrade} tier={tier} />
        <div className="blueprint-recipe-box">
          <h2>Recipe</h2>
          {upgrade !== null && tier !== null && (
            <CraftingList
              name={getUpgradeKey(upgrade, tier)}
              type={BlueprintType.UPGRADES}
            />
          )}
        </div>
        <UpgradeEffectBox upgrade={upgrade} tier={tier} />
        <UpgradeRequirementBox upgrade={upgrade} tier={tier} />
      </div>
    </>
  );
};

const UpgradeTitleBox: React.FC<{ upgrade: Upgrade | null; tier: number }> = ({
  upgrade,
  tier,
}) => {
  const upgradeTier =
    upgrade === null ? null : ((upgrade + tier) as UpgradeWithTier);
  if (upgradeTier === null)
    return (
      <div className="blueprint-title-box">
        <img src={"/assets/misc/upgrade.png"} alt="" />
        <h1>Select an upgrade</h1>
        <h2>Select an upgrade to view its details</h2>
      </div>
    );

  return (
    <div className="blueprint-title-box">
      <img
        src={`/assets/upgrades/${upgrade}.png`}
        alt={upgradesList[upgradeTier][0]}
      />
      <h1>{upgradesList[upgradeTier][0]}</h1>
      <h2>{upgradeDescriptions[upgradeTier]}</h2>
    </div>
  );
};

const UpgradeEffectBox: React.FC<{ upgrade: Upgrade | null; tier: number }> = ({
  upgrade,
  tier,
}) => {
  const upgradeTier =
    upgrade === null ? null : ((upgrade + tier) as UpgradeWithTier);
  if (upgradeTier === null || upgrade === null)
    return (
      <div className="vac-upgrade-effect-box">
        <img src="" alt="" />
        <p className="vac-effect-desc"></p>
        <div></div>
        <img src="" alt="" />
        <p className="vac-effect-desc"></p>
      </div>
    );
  return (
    <div className="vac-upgrade-effect-box">
      <img src={`/assets/${upgradeEffects[upgradeTier][0][0]}.png`} alt="" />
      <p className="vac-effect-desc">{upgradeEffects[upgradeTier][0][1]}</p>
      <FaAngleDown />
      <img
        src={`/assets/${upgradeEffects[upgradeTier][1][0]}.png`}
        alt={upgradesList[getUpgradeKey(upgrade, tier) as UpgradeWithTier][0]}
      />
      <p className="vac-effect-desc">{upgradeEffects[upgradeTier][1][1]}</p>
    </div>
  );
};

const UpgradeRequirementBox: React.FC<{
  upgrade: Upgrade | null;
  tier: number;
}> = ({ upgrade, tier }) => {
  if (upgrade === null)
    return <div className="blueprint-requirements-box little-box"></div>;
  const unlockName = upgradesList[getUpgradeKey(upgrade, tier)][1];
  return (
    <div className="blueprint-requirements-box little-box">
      <img
        src={`/assets/${unlockRequirements[unlockName][1]}.png`}
        alt={unlockRequirements[unlockName][0]}
      />
      <div>
        <h3>Requirements</h3>
        <h4>{unlockRequirements[unlockName][0]}</h4>
      </div>
    </div>
  );
};
