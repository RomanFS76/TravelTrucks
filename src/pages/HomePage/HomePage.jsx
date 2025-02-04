import React from "react";
import css from "./HomePage.module.css";
import { Link } from "react-router-dom";
import Container from "../../components/Container/Container";
import clsx from "clsx";

const HomePage = () => {
  return (
    <div className={css.homeWrap}>
      <Container>
        <h1>Campers of your dreams</h1>
        <p className={css.text}>You can find everything you want in our catalog</p>
        <Link to="/catalog" className={clsx('link', css.viewNow)}>View Now</Link>
      </Container>
    </div>
  );
};

export default HomePage;
