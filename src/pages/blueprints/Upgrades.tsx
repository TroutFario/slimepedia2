import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { Navigate, NavLink, useParams } from "react-router-dom";
import {
  Upgrade,
  upgradeDescriptions,
  upgradeEffects,
  upgradeNames,
  upgradePacks,
  upgradesList,
  UpgradeWithTier,
} from "../../data/blueprints/upgrades";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import CraftingList from "../../components/shared/CraftingList";
import { BlueprintType, unlockRequirements } from "../../data/blueprints/blueprints";
import PediaInfo, { PediaBoxLayout } from "../../components/PediaInfo";
import { LittleBoxProps } from "../../components/shared/LittleBox";

interface UpgradeItemListProps {
  selected: boolean;
  upgradePack: [string, string, number];
  tier: number;
}

const UpgradeItemList: React.FC<UpgradeItemListProps> = ({ selected = false, upgradePack, tier: selectedTier = 1 }) => {
  const [tier, setTier] = useState<number>(selectedTier);

  return (
    <div className={`vac-upgrade-item${selected ? " selected" : ""}`} key={upgradePack[0]}>
      <NavLink to={`/blueprints/upgrade/${upgradePack[0]}/${tier}`} className="vac-upgrade-pack">
        <img src={`/assets/upgrades/${upgradePack[0]}.png`} alt={upgradePack[1]} />
        <h2>{upgradePack[1]}</h2>
      </NavLink>
      <div className="vac-upgrade-tiers">
        {tier > 1 && upgradePack[2] >= 1 ? (
          <NavLink to={`/blueprints/upgrade/${upgradePack[0]}/${tier - 1}`} onClick={() => setTier(tier - 1)}>
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
          <NavLink to={`/blueprints/upgrade/${upgradePack[0]}/${tier + 1}`} onClick={() => setTier(tier + 1)}>
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

const UpgradeInfo: React.FC<{
  upgrade: Upgrade | null;
  tier: number;
}> = ({ upgrade, tier }) => {
  const upgradeWithTier: UpgradeWithTier | null =
    upgrade === null || !(upgrade + tier in upgradesList) ? null : ((upgrade + tier) as UpgradeWithTier);
  let title = "No upgrade selected";
  let subtitle = "Select an upgrade to get its information";
  let icon: string | null = null;
  const littleBoxList: LittleBoxProps[] = [];

  if (upgradeWithTier && upgradeWithTier in upgradesList) {
    title = upgradesList[upgradeWithTier][0];
    subtitle = upgradeDescriptions[upgradeWithTier];
    icon = `/assets/upgrades/${upgrade}.png`;
    littleBoxList.push(
      {
        image: `/assets/${unlockRequirements[upgradesList[upgradeWithTier][1]][1]}.png`,
        alt: unlockRequirements[upgradesList[upgradeWithTier][1]][0],
        title: "Unlock Requirements",
        subtitle: unlockRequirements[upgradesList[upgradeWithTier][1]][0],
      },
      {
        image: `/assets/${upgradeEffects[upgradeWithTier][0]}.png`,
        alt: upgradeEffects[upgradeWithTier][1],
        title: "Effect",
        subtitle: upgradeEffects[upgradeWithTier][1],
      },
    );
  } else {
    littleBoxList.push(
      {
        image: "/assets/misc/check.png",
        alt: "No upgrade selected",
        title: "Unlock Requirements",
      },
      {
        image: "/assets/misc/pediatut.png",
        alt: "No upgrade selected",
        title: "Effect",
      },
    );
  }

  return (
    <PediaInfo
      layout={PediaBoxLayout.TwoByOne}
      title={title}
      subtitle={subtitle}
      icon={icon}
      littleBoxList={littleBoxList}
      BiomeComponent={
        <div className="blueprint-recipe-box component-container">
          <h2>Recipe</h2>
          <CraftingList name={upgradeWithTier} type={BlueprintType.UPGRADE} />
        </div>
      }
    />
  );
};

export const UpgradePage: React.FC = () => {
  const { blueprint: upgradeName, tier: selectedTier } = useParams();
  const tier = selectedTier ? Number.parseInt(selectedTier, 10) : 1;
  const upgrade = upgradeName ? (upgradeName as Upgrade) : null;

  if (upgrade !== null) {
    if (!upgradeNames.includes(upgrade)) return <Navigate to="/blueprints/upgrade" replace />;
    if (tier < 1 || tier > upgradePacks[upgrade][1]) return <Navigate to={`/blueprints/upgrade/${upgrade}`} replace />;
  }
  document.title =
    upgrade === null
      ? "Blueprints - Slimepedia"
      : upgradesList[(upgrade + tier) as UpgradeWithTier][0] + " - Slimepedia";

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
        className="vac-upgrade-list"
      >
        {upgradeNames.map((upgradeName) => (
          <UpgradeItemList
            selected={upgrade === upgradeName}
            key={upgradeName}
            upgradePack={[upgradeName, upgradePacks[upgradeName][0], upgradePacks[upgradeName][1]]}
            tier={tier}
          />
        ))}
      </OverlayScrollbarsComponent>
      <div className="blueprint-infos box-presentation">
        <UpgradeInfo upgrade={upgrade} tier={tier} />
      </div>
    </>
  );
};

export default UpgradePage;
