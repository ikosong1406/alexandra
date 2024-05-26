import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import "../styles/Layout.css";

const Layout = () => {
  return (
    <div className="layoutMain">
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
