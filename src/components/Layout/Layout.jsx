import React, { Suspense } from "react";
import AppBar from "../AppBar/AppBar";
import css from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={css.layOutWrap}>
      <AppBar />
      <Suspense fallback={null}>{children}</Suspense>
    </div>
  );
};

export default Layout;


