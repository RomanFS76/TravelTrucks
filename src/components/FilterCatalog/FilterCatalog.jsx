import { Field, Form, Formik } from "formik";
import { useId, useState } from "react";
import css from "./FilterCatalog.module.css";
import clsx from "clsx";
import icon from "../../../public/sprite.svg";

const initialValues = { location: "" };

const FormCatalog = () => {
  const [isActive, setIsActive] = useState([]);
  const locationFieldId = useId();

  const handleFilterClick = (filter) => {
    setIsActive((isActive) => {
      isActive.includes(filter)
        ? isActive.filter((item) => item !== filter)
        : [...isActive, ...filter];
    });
    console.log(isActive);
  };

  const handleSubmit = (values, actions) => {
    actions.resetForm();
    console.log(values);
  };

  return (
    <div className={css.FormCatalogWrap}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <label className={css.label} htmlFor={locationFieldId}>
            Location
          </label>
          <div className={css.fieldLocationWrap}>
            <Field
              className={css.fieldLocation}
              type="text"
              name="location"
              placeholder="City"
              id={locationFieldId}
            />
            <svg className={clsx(css.icon, css.iconMap)}>
              <use href={`${icon}#icon-map`} />
            </svg>
          </div>

          <p className={css.textFilters}>Filters</p>
          <h3>Vehicle equipment</h3>
          <ul className={css.filterList}>
            <li
              className={css.filterItem}
              onClick={() => handleFilterClick("AC")}
            >
              <div className={css.filterItemWrap}>
                <svg className={clsx(css.filterIcon)}>
                  <use href={`${icon}#icon-ac`} />
                </svg>
                <p>AC</p>
              </div>
            </li>
            <li
              className={css.filterItem}
              onClick={() => handleFilterClick("Automatic")}
            >
              <div className={css.filterItemWrap}>
                <svg className={clsx(css.filterIcon)}>
                  <use href={`${icon}#icon-transmission`} />
                </svg>
                <p>Automatic</p>
              </div>
            </li>
            <li
              className={css.filterItem}
              onClick={() => handleFilterClick("Kitchen")}
            >
              <div className={css.filterItemWrap}>
                <svg className={clsx(css.filterIcon)}>
                  <use href={`${icon}#icon-kitchen`} />
                </svg>
                <p>Kitchen</p>
              </div>
            </li>
            <li
              className={css.filterItem}
              onClick={() => handleFilterClick("TV")}
            >
              <div className={css.filterItemWrap}>
                <svg className={clsx(css.filterIcon)}>
                  <use href={`${icon}#icon-tv`} />
                </svg>
                <p>TV</p>
              </div>
            </li>
            <li
              className={css.filterItem}
              onClick={() => handleFilterClick("Bathroom")}
            >
              <div className={css.filterItemWrap}>
                <svg className={clsx(css.filterIcon)}>
                  <use href={`${icon}#icon-bathroom`} />
                </svg>
                <p>Bathroom</p>
              </div>
            </li>
          </ul>
          <h3>Vehicle</h3>
          <ul className={clsx(css.filterList, css.vehicle)}>
            <li className={css.filterItem}>
              <div className={css.filterItemWrap}>
                <svg className={clsx(css.filterIcon)}>
                  <use href={`${icon}#icon-van`} />
                </svg>
                <p>Van</p>
              </div>
            </li>
            <li className={css.filterItem}>
              <div className={clsx(css.filterItemWrap, css.fullyIntergrated)}>
                <svg className={clsx(css.filterIcon)}>
                  <use href={`${icon}#icon-fully-intergrated`} />
                </svg>
                <p>Fully Intergrated</p>
              </div>
            </li>
            <li className={css.filterItem}>
              <div className={clsx(css.filterItemWrap)}>
                <svg className={clsx(css.filterIcon)}>
                  <use href={`${icon}#icon-alcove`} />
                </svg>
                <p>Alcove</p>
              </div>
            </li>
          </ul>
          <button className={css.btnSearch} type="submit">
            Search
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default FormCatalog;
