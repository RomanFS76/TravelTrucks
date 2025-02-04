import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import CatalogsPage from "../../pages/CatalogsPage/CatalogsPage";
import CampersDetailsPage from "../../pages/CampersDetailsPage/CampersDetailsPage";
import css from "./App.module.css";
import Layout from "../Layout/Layout";
import Features from "../Features/Features";
import Reviews from "../Reviews/Reviews";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogsPage />} />
        <Route path="/catalog/:camperId" element={<CampersDetailsPage />}>
          <Route path="features" element={<Features />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </Layout>
  );
}

export default App;
