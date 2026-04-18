import React from "react";
import { LittleBox, LittleBoxProps } from "./shared/LittleBox";
import "../css/Pedia.css";
import { PediaBoxLayout } from "../data/enums";

// Simple hash function for generating short unique keys
const simpleHash = (str: string): string => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash).toString(36);
};

const getLittleBoxKey = (box: LittleBoxProps, index: number): string => {
  const base = [box.link, box.title, box.subtitle, box.image, box.alt, box.otherClasses].filter(Boolean).join("|");
  const hash = simpleHash(base || "little-box");
  return `${hash}-${index}`;
};

interface PediaInfoProps {
  layout: PediaBoxLayout;
  title: string;
  subtitle: string;
  icon?: string | null;
  plortIcon?: string;
  radiant?: boolean;
  botLeftBtn?: React.ReactNode;
  littleBoxList: ReadonlyArray<LittleBoxProps>;
  BiomeComponent: React.ReactNode;
}

export const PediaInfo: React.FC<PediaInfoProps> = ({
  layout,
  title,
  subtitle,
  icon,
  plortIcon,
  radiant = false,
  botLeftBtn,
  littleBoxList,
  BiomeComponent,
}) => {
  return (
    <div className={`pedia-infos ${layout}`}>
      <div className="image-title">
        <div className={"info-title" + (radiant ? " slime-radiant" : "")}>
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
        </div>
        <div className="image-container">
          <img
            src={icon || "/assets/misc/empty.png"}
            className={"img-main" + (radiant ? " slime-radiant" : "")}
            alt={"Picture of " + title}
          />
        </div>
        {botLeftBtn}
        {plortIcon && <img src={`/assets/plorts/${plortIcon}.png`} className="img-plort" alt={"Plort of " + title} />}
      </div>
      {littleBoxList.map((box, index) => (
        <LittleBox
          order={index}
          key={getLittleBoxKey(box, index)}
          image={box.image}
          alt={box.alt}
          title={box.title}
          subtitle={box.subtitle}
          action={box.action}
          link={box.link}
          otherClasses={box.otherClasses}
        />
      ))}
      {BiomeComponent}
    </div>
  );
};

export default PediaInfo;
