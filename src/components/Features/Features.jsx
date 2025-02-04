import React from "react";
import css from "./Features.module.css";
import { useOutletContext } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import icon from "../../../public/sprite.svg";

const Features = () => {
  const camper = useOutletContext();
  const {
    form,
    length,
    width,
    height,
    tank,
    consumption,
    transmission,
    engine,
  } = camper;

  return (
    <div className={css.Wrap}>
      <ul className={css.equipment}>
        <li className={css.featuresWrap}>
          <svg className={css.icon}>
            <use href={`${icon}#icon-transmission`} />
          </svg>
          <p>{transmission}</p>
        </li>
        <li className={css.featuresWrap}>
          <svg className={css.icon}>
            <use href={`${icon}#icon-fuel-pump`} />
          </svg>
          <p>{engine}</p>
        </li>
        {Object.keys(camper)
          .filter((key) => camper[key] === true)
          .map((key) => (
            <li className={css.featuresWrap} key={uuidv4()}>
              <p>{key}</p>
              <svg className={css.icon}>
                <use href={`${icon}#icon-${key}`} />
              </svg>
            </li>
          ))}
      </ul>

      <h3>Vehicle details</h3>

      <div className={css.details}>
        <ul>
          <li>Form</li>
          <li>Length</li>
          <li>Width</li>
          <li>Height</li>
          <li>Tank</li>
          <li>Consumption</li>
        </ul>
        <ul>
          <li>{form}</li>
          <li>{length}</li>
          <li>{width}</li>
          <li>{height}</li>
          <li>{tank}</li>
          <li>{consumption}</li>
        </ul>
      </div>
    </div>
  );
};

export default Features;
