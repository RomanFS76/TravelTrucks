import React, { useEffect } from "react";
import FilterCatalog from "../../components/FilterCatalog/FilterCatalog";
import Catalog from "../../components/Catalog/Catalog";
import Container from "../../components/Container/Container";
import css from "./CatalogsPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllCampers } from "../../redux/OpsCampers";
import { selectError, selectIsLoading } from "../../redux/selectors";

const CatalogsPage = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(getAllCampers());
  }, [dispatch]);

  

  return (
    
    <div className={css.catalogsPageWrap}>
      <Container>
        <div className={css.catalogWrap}>
          <FilterCatalog />
          {loading ? <b>Loading page...</b>:<Catalog />}
          {error && <b>We have some problems</b>}
        </div>
      </Container>
    </div>
  );
};

export default CatalogsPage;
