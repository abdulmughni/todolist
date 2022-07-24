import React, { Fragment, useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import App from "./app/App";
import { UserContainer } from "../containers";

const MainRoutes = ({ loginRes }) => {
  const [loginUser, setLoginUser] = useState(null);

  useEffect(() => {
    if (loginRes && loginRes.token) {
      console.log("loginRes", loginRes);
      setLoginUser(true);
    }

    if (loginRes && !loginRes.token) {
      setLoginUser(false);
    }
  }, [loginRes]);

  useEffect(() => {
    const token = localStorage.getItem("AK");
    if (token) {
      setLoginUser(true);
    }
    if (!token) {
      setLoginUser(false);
    }
  }, []);

  return (
    <Fragment>
      {loginUser === true && (
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Navigate replace to="/" />} />
        </Routes>
      )}

      {loginUser === false && (
        <Routes>
          <Route path="/login" element={<UserContainer />} />
          <Route path="/" element={<Navigate replace to="/login" />} />
        </Routes>
      )}
    </Fragment>
  );
};

export default MainRoutes;
