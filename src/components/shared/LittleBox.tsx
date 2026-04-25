import React from "react";
import { NavLink } from "react-router-dom";

const DisplayText: React.FC<{ text: string | null | undefined }> = ({ text }) => {
  if (!text) return <h4>&nbsp;</h4>;
  return (
    <>
      {text.split("\n").map((line, index) => (
        <h4 key={"p-" + index}>{line}</h4>
      ))}
    </>
  );
};

interface LittleBoxBodyProps {
  image?: string | null;
  alt?: string | null;
  title?: string | null;
  subtitle?: string | null;
}

const LittleBoxBody: React.FC<LittleBoxBodyProps> = ({ image, alt, title, subtitle }) => {
  const imagePath = image ?? "/assets/misc/empty.png";
  const altText = alt ?? "No image";
  return (
    <>
      <img src={imagePath} alt={altText} />
      <div>
        <h3>{title}</h3>
        <DisplayText text={subtitle} />
      </div>
    </>
  );
};

const actionHandler = (e: React.KeyboardEvent<HTMLButtonElement>, action: (() => void) | null | undefined) => {
  if (action && "key" in e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      action();
    }
  }
};

export interface LittleBoxProps {
  order?: number;
  image?: string | null;
  alt?: string | null;
  title?: string | null;
  subtitle?: string | null;
  action?: (() => void) | null;
  link?: string | null;
  otherClasses?: string;
}

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
  if (link)
    return (
      <NavLink to={link} style={{ textDecoration: "none" }}>
        <button
          className={
            "info-box-base button-reset interactive-box element-" + order + (otherClasses ? " " + otherClasses : "")
          }
          onClick={action ? () => action() : undefined}
          onKeyDown={(e) => actionHandler(e, action)}
          tabIndex={0}
          aria-pressed="false"
        >
          <LittleBoxBody image={image} alt={alt} title={title} subtitle={subtitle} />
        </button>
      </NavLink>
    );
  return (
    <button
      className={
        "info-box-base button-reset element-" +
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
      <LittleBoxBody image={image} alt={alt} title={title} subtitle={subtitle} />
    </button>
  );
};
