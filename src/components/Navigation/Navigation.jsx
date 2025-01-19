import React from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";

const Navigation = () => {
  const navLink = ({ isActive }) => {
    return clsx(css.link, isActive && css.isActive);
  };
  return (
    <div>
      <nav className={css.nav}>
        <NavLink to="/" className={navLink}>
          Home
        </NavLink>
        <NavLink to="/catalog" className={navLink}>
          Catalog
        </NavLink>
      </nav>
    </div>
  );
};

export default Navigation;
