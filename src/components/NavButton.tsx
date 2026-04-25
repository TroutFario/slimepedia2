import React from "react";
import "../css/NavButton.css";

interface NavButtonProps {
  name?: string;
  icon?: string;
  size?: number;
  action?: () => void;
  selected?: boolean;
  wiggle?: boolean;
  visible?: boolean;
}

const NavButton: React.FC<NavButtonProps> = ({
  name = "Slimes",
  icon = "slimes/pink",
  size = 1,
  action = () => {},
  selected = false,
  wiggle = true,
  visible = true,
}) => (
  <button
    className={"button" + (selected ? " btn-selected" : "")}
    onClick={action}
    style={
      {
        "--btn-size": `${size * 5}em`,
        visibility: visible ? "shown" : "hidden",
      } as React.CSSProperties
    }
  >
    <div className="image-frame">
      <span className={"image-anim" + (wiggle ? " img-btn-wiggle" : "")}>
        <img src={`/assets/${icon}.png`} alt={name} className="image-button" />
      </span>
    </div>
    <p>{name}</p>
  </button>
);

export default NavButton;
