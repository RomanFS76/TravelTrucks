import { Link } from "react-router-dom";

import React from "react";
import css from "./AppBar.module.css";
import Navigation from "../Navigation/Navigation";
import Container from "../Container/Container";

const AppBar = () => {
  return (
    <Container>
      <header className={css.header}>
        <Link to="/" className={css.logo}>
          Travel<span className={css.logoTrack}>Tracks</span>
        </Link>
        <Navigation />
      </header>
    </Container>
  );
};

export default AppBar;
