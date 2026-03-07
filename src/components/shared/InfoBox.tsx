import React from "react";
import { NavLink } from "react-router-dom";

interface InfoBoxProps {
  title: string;
  subtitle: string;
  icon: string;
  alt: string;
  className?: string;
  disabled?: boolean;
  linkTo?: string;
  onClick?: () => void;
}

export const InfoBox: React.FC<InfoBoxProps> = ({
  title,
  subtitle,
  icon,
  alt,
  className = "",
  disabled = false,
  linkTo,
  onClick,
}) => {
  const boxContent = (
    <div
      className={`little-box ${className} ${disabled ? "disabled" : ""} ${linkTo || onClick ? "interactive-box" : ""}`}
    >
      <img src={icon} alt={alt} className={disabled ? "no-image" : ""} />
      <div>
        <h3>{title}</h3>
        <h4>{subtitle}</h4>
      </div>
    </div>
  );

  if (disabled) {
    return boxContent;
  }

  if (linkTo) {
    return (
      <NavLink to={linkTo} style={{ textDecoration: "none" }}>
        {boxContent}
      </NavLink>
    );
  }

  if (onClick) {
    return (
      <button
        type="button"
        className="link-button"
        onClick={onClick}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onClick();
          }
        }}
        tabIndex={0}
        aria-pressed="false"
      >
        {boxContent}
      </button>
    );
  }

  return boxContent;
};
