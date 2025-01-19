import React from "react";
import css from "./HomePage.module.css";
import { Link } from "react-router-dom";
import Container from "../../components/Container/Container";

const HomePage = () => {
  return (
    <div className={css.homeWrap}>
      <Container>
        <h1>Campers of your dreams</h1>
        <p>You can find everything you want in our catalog</p>
        <Link className={css.linkViewNow}>View Now</Link>
      </Container>
    </div>
  );
};

export default HomePage;
