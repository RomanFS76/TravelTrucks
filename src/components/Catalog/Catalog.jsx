import React from "react";
import { selectCampers } from "../../redux/selectors";
import clsx from "clsx";
import css from "./Catalog.module.css";
import icon from "../../../public/sprite.svg";
import { useSelector } from "react-redux";

const Catalog = ({ page, setPage }) => {
  const campers = useSelector(selectCampers);

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <div className={css.catalogWrap}>
      <ul className={css.catalogList}>
        {campers.map(
          ({
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
          }) => {
            return (
              <li className={css.catalogCard} key={id}>
                <div className={css.cardImg}>
                  <img className={css.img} src={gallery[0].thumb} alt={name} />
                </div>
                <div className={css.catalogInfo}>
                  <div className={css.catalogInfoTitleWrap}>
                    <h2>{name}</h2>
                    <p>€{price}</p>
                    <svg className={clsx(css.icon)}>
                      <use href={`${icon}#icon-heart`} />
                    </svg>
                  </div>
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
                  <p className={css.camperDescription}>{description}</p>

                  {/* equipment */}

                  {/* <ul className={css.equipmentList}>

              {Object.entries(campers).map(([key, value]) => (
                    value === "true" ? <li key={key}>{key}</li> : null
                ))}
                <li className={css.equipmentItem}></li>
              </ul> */}

                  {
                    <ul className={css.equipmentList}>
                      <li className={css.equipmentItem}>
                        <svg className={clsx(css.filterIcon)}>
                          <use href={`${icon}#icon-transmission`} />
                        </svg>
                        <p>{transmission}</p>
                      </li>
                      <li className={css.equipmentItem}>
                        <svg className={clsx(css.filterIcon)}>
                          <use href={`${icon}#icon-fuel-pump`} />
                        </svg>
                        <p>{engine}</p>
                      </li>

                      <li className={css.equipmentItem}>
                        <svg className={clsx(css.filterIcon)}>
                          <use href={`${icon}#icon-ac`} />
                        </svg>
                        <p>AC</p>
                      </li>
                      <li className={css.equipmentItem}>
                        <svg className={clsx(css.filterIcon)}>
                          <use href={`${icon}#icon-bathroom`} />
                        </svg>
                        <p>Bathroom</p>
                      </li>
                      <li className={css.equipmentItem}>
                        <svg className={clsx(css.filterIcon)}>
                          <use href={`${icon}#icon-kitchen`} />
                        </svg>
                        <p>Kitchen</p>
                      </li>
                      <li className={css.equipmentItem}>
                        <svg className={clsx(css.filterIcon)}>
                          <use href={`${icon}#icon-tv`} />
                        </svg>
                        <p>TV</p>
                      </li>
                      <li className={css.equipmentItem}>
                        <svg className={clsx(css.filterIcon)}>
                          <use href={`${icon}#icon-radio`} />
                        </svg>
                        <p>Radio</p>
                      </li>
                      <li className={css.equipmentItem}>
                        <svg className={clsx(css.filterIcon)}>
                          <use href={`${icon}#icon-refrigerator`} />
                        </svg>
                        <p>Refrigerator</p>
                      </li>
                      <li className={css.equipmentItem}>
                        <svg className={clsx(css.filterIcon)}>
                          <use href={`${icon}#icon-microwave`} />
                        </svg>
                        <p>Microwave</p>
                      </li>
                      <li className={css.equipmentItem}>
                        <svg className={clsx(css.filterIcon)}>
                          <use href={`${icon}#icon-gas`} />
                        </svg>
                        <p>Gas</p>
                      </li>
                      <li className={css.equipmentItem}>
                        <svg className={clsx(css.filterIcon)}>
                          <use href={`${icon}#icon-water`} />
                        </svg>
                        <p>Water</p>
                      </li>
                    </ul>
                  }
                </div>
              </li>
            );
          }
        )}
      </ul>
      {campers.length > 0 && (
        <button
          className={css.btnLoadMore}
          type="button"
          onClick={handleLoadMore}
        >
          Load more
        </button>
      )}
    </div>
  );
};

export default Catalog;
