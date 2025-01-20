import React from "react";
import FilterCatalog from "../../components/FilterCatalog/FilterCatalog";
import Catalog from "../../components/Catalog/Catalog";
import Container from "../../components/Container/Container";
import css from "./CatalogsPage.module.css";

const CatalogsPage = () => {
  return (
    <div className={css.catalogsPageWrap}>
      <Container>
        <FilterCatalog />
        <Catalog />
      </Container>
    </div>
  );
};

export default CatalogsPage;
