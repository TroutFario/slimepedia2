import React from "react";
import { NavLink } from "react-router-dom";

interface LittleBoxProps {
  order?: number;
  image?: string | null;
  alt?: string | null;
  title?: string | null;
  subtitle?: string | null;
  action?: (() => void) | null;
  link?: string | null;
  otherClasses?: string;
}

const DisplayText: React.FC<{ text: string | null | undefined }> = ({
  text,
}) => {
  if (!text) return <h4>&nbsp;</h4>;
  return (
    <>
      {text.split("\n").map((line, index) => (
        <h4 key={"p-" + index}>{line}</h4>
      ))}
    </>
  );
};

export type LittleBoxStruct = Readonly<LittleBoxProps>;

export const LittleBox: React.FC<LittleBoxProps> = ({
  order = 0,
  image,
  alt,
  title,
  subtitle,
  action,
  link,
  otherClasses,
}) => {
  const imagePath = image ? image : "/assets/misc/empty.png";
  const altText = alt ? alt : "No image available";
  if (link)
    return (
      <NavLink to={link} style={{ textDecoration: "none" }}>
        <div
          className={
            "little-box interactive-box element-" +
            order +
            (otherClasses ? " " + otherClasses : "")
          }
          onClick={action ? () => action() : undefined}
          onKeyDown={
            action
              ? (e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    action();
                  }
                }
              : undefined
          }
          tabIndex={0}
          aria-pressed="false"
        >
          <img src={imagePath} alt={altText} />
          <div>
            <h3>{title && title}</h3>
            <DisplayText text={subtitle} />
          </div>
        </div>
      </NavLink>
    );
  return (
    <div
      className={
        "little-box element-" +
        order +
        (otherClasses ? " " + otherClasses : "") +
        (action ? " interactive-box" : "")
      }
      onClick={action ? () => action() : undefined}
      onKeyDown={
        action
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                action();
              }
            }
          : undefined
      }
      tabIndex={0}
      aria-pressed="false"
    >
      <img src={imagePath} alt={altText} />
      <div>
        <h3>{title && title}</h3>
        <DisplayText text={subtitle} />
      </div>
    </div>
  );
};
