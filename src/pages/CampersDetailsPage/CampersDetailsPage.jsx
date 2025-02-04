import React from "react";
import Container from "../../components/Container/Container";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCampers } from "../../redux/selectors";
import icon from "../../../public/sprite.svg";
import clsx from "clsx";
import css from "./CampersDetailsPage.module.css";
import { v4 as uuidv4 } from 'uuid';
import CatalogForm from "../../components/CatalogForm/CatalogForm";

const CampersDetailsPage = () => {
  const { camperId } = useParams();
  const campers = useSelector(selectCampers);

  const camper = campers.find((item) => item.id === camperId);



  const navLink = ({ isActive }) => {
    return clsx(css.linkCatalog, isActive && css.isActive);
  };



  const {
    id,
    name,
    price,
    gallery,
    rating,
    reviews,
    location,
    transmission,
    engine,
    description,
  } = camper;

  return (
    <Container>
      <div className={css.topInfoWrap}>
        <div className={css.infoWrap}>
          <h2 className={css.camperName}>{name}</h2>
          <div className={css.catalogReviewsRatingWrap}>
            <svg className={clsx(css.icon, css.iconStar)}>
              <use href={`${icon}#icon-star`} />
            </svg>
            <p className={css.catalogReviewsRating}>
              {rating}({reviews.length} Reviews)
            </p>
            <svg className={clsx(css.icon, css.iconMap)}>
              <use href={`${icon}#icon-map`} />
            </svg>
            <p>{location}</p>
          </div>
          <p className={css.camperPrice}>€{price}</p>
        </div>
        <ul className={css.imgCamperList}>
          {gallery.map(({ thumb }) => {
            return (
              <li className={css.imgCamperItem} key={uuidv4()}>
                <img className={css.img} src={thumb} alt={name} />
              </li>
            );
          })}
        </ul>
        <p className={css.camperDesc}>{description}</p>
      </div>
      <div className={css.linkWrap}>
        <NavLink className={navLink} to="features">
          Features
        </NavLink>
        <NavLink className={navLink} to="reviews">
          Reviews
        </NavLink>
      </div>
      <div className={css.featuresReviewsFormWrap}>
        <div className={clsx(css.flexItem, css.featuresReviewsWrap)}>
          <Outlet context={camper}/>
        </div>
        <div className={clsx(css.flexItem)}>
          <CatalogForm className={css.flexItem} />
        </div>
      </div>
    </Container>
  );
};

export default CampersDetailsPage;
