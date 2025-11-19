import React from "react";
import { LittleBox, LittleBoxProps } from "./shared/LittleBox";
import "../css/Pedia.css";
import { v4 as uuidv4 } from "uuid";

const prepareLBList = (list: LittleBoxProps[]) => {
  for (const lb of list) {
    lb.id = uuidv4();
  }
};

export enum PediaBoxLayout {
  OneByOne = "one-one-layout",
  OneByTwo = "one-two-layout",
  TwoByOne = "two-one-layout",
  TwoByTwo = "two-two-layout",
  OneThenTwo = "one-then-two-layout",
}

interface PediaInfoProps {
  layout: PediaBoxLayout;
  title: string;
  subtitle: string;
  icon?: string | null;
  plortIcon?: string;
  littleBoxList: ReadonlyArray<LittleBoxProps>;
  BiomeComponent: React.ReactNode;
}

export const PediaInfo: React.FC<PediaInfoProps> = ({
  layout,
  title,
  subtitle,
  icon,
  plortIcon,
  littleBoxList,
  BiomeComponent,
}) => {
  prepareLBList(littleBoxList as LittleBoxProps[]);
  return (
    <div className={`pedia-infos ${layout}`}>
      <div className="image-title">
        <div className="info-title">
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
        </div>
        <div className="image-container">
          <img
            src={icon || "/assets/misc/empty.png"}
            className="img-main"
            alt={"Picture of " + title}
          />
        </div>
        {plortIcon && (
          <img
            src={`/assets/plorts/${plortIcon}.png`}
            className="img-plort"
            alt={"Plort of " + title}
          />
        )}
      </div>
      {littleBoxList.map((box) => (
        <LittleBox
          order={box.order}
          key={box.order}
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
