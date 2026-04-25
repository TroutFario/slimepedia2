import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import NavButton from "./NavButton";

const darkModeCheck = () => {
  const savedDarkMode: string | null = localStorage.getItem("darkMode");
  if (savedDarkMode === null) return globalThis.matchMedia("(prefers-color-scheme: dark)").matches;
  return savedDarkMode === "dark";
};

const navLinks = [
  { name: "Slimes", to: "/slimes", icon: "slimes/pink"},
  { name: "Food", to: "/food", icon: "food/any"},
  { name: "Items", to: "/items", icon: "misc/res"},
  {
    name: "Regions",
    to: "/regions/fields",
    icon: "misc/world"
  },
  { name: "Weather", to: "/weather", icon: "misc/weather"},
  {
    name: "Blueprints",
    to: "/blueprints",
    icon: "misc/blueprint"
  },
  { name: "Buildings", to: "/buildings", icon: "misc/patch"},
  { name: "Music", to: "/", icon: "misc/audio"},
];

const NavBar = () => {
  const noLink = { textDecoration: "none" };
  const [darkMode, setDarkMode] = useState<boolean>(darkModeCheck());

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode ? "dark" : "light");
    globalThis.dispatchEvent(new Event("darkModeChange"));
    document.documentElement.dataset.theme = darkMode ? "dark" : "light";
  }, [darkMode]);

  return (
    <nav className="box-layout">
      {navLinks.map(({ name, to, icon }) => (
        <NavLink style={noLink} to={to} key={to}>
          {({ isActive }) => <NavButton name={name} icon={icon} selected={isActive} />}
        </NavLink>
      ))}
      <div className="theme-btn-container">
        <NavButton
          name="Switch Theme"
          icon={darkMode ? "misc/moon" : "misc/sun"}
          action={() => setDarkMode(!darkMode)}
          selected={false}
        />
      </div>
    </nav>
  );
};

export default NavBar;
