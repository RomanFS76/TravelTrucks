import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import CatalogsPage from "../../pages/CatalogsPage/CatalogsPage";
import CampersDetailsPage from "../../pages/CampersDetailsPage/CampersDetailsPage";
import css from "./App.module.css";
import Layout from "../Layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogsPage />} />
        <Route path="/catalog/:camperId" element={<CampersDetailsPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
