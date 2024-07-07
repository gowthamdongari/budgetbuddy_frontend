import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegistrationPage from "../pages/RegistrationPage";
import routes from "./routes";

const getRoutes = (routes) => {
  return routes?.map((props, key) => {
    console.log(props.component);
    return (
      <Route path={`/${props?.path}`} element={props?.component} key={key} />
    );
  });
};
function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}>
          {getRoutes(routes)}
        </Route>
        <Route path="/Login" element={<LoginPage />}></Route>
        <Route path="/Registration" element={<RegistrationPage />}></Route>
      </Routes>
    </>
  );
}

export default AppRoutes;
