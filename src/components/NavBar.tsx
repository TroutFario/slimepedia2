import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import NavButton from "./NavButton";

const darkModeCheck = () => {
  const savedDarkMode: string | null = localStorage.getItem("darkMode");
  if (savedDarkMode === null) return globalThis.matchMedia("(prefers-color-scheme: dark)").matches;
  return savedDarkMode === "dark";
};

const navLinks = [
  { name: "Slimes", to: "/slimes", icon: "slimes/pink", tilting: "left" },
  { name: "Food", to: "/food", icon: "food/any", tilting: "right" },
  { name: "Items", to: "/items", icon: "misc/res", tilting: "left" },
  {
    name: "Regions",
    to: "/regions/fields",
    icon: "misc/world",
    tilting: "left",
  },
  { name: "Weather", to: "/weather", icon: "misc/weather", tilting: "none" },
  {
    name: "Blueprints",
    to: "/blueprints",
    icon: "misc/blueprint",
    tilting: "none",
  },
  { name: "Buildings", to: "/buildings", icon: "misc/patch", tilting: "none" },
  { name: "Music", to: "/", icon: "misc/audio", tilting: "none" },
];

export const NavBar = () => {
  const noLink = { textDecoration: "none" };
  const [darkMode, setDarkMode] = useState<boolean>(darkModeCheck());

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode ? "dark" : "light");
    globalThis.dispatchEvent(new Event("darkModeChange"));
    document.documentElement.dataset.theme = darkMode ? "dark" : "light";
  }, [darkMode]);

  return (
    <nav className="box-layout">
      {navLinks.map(({ name, to, icon, tilting }) => (
        <NavLink style={noLink} to={to} key={to}>
          {({ isActive }) => <NavButton name={name} icon={icon} tilting={tilting} selected={isActive} />}
        </NavLink>
      ))}
      <div className="theme-btn-container">
        <NavButton
          name="Switch Theme"
          icon={darkMode ? "misc/moon" : "misc/sun"}
          action={() => setDarkMode(!darkMode)}
          tilting="random"
          selected={false}
        />
      </div>
    </nav>
  );
};

export default NavBar;
