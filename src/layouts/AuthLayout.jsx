import React from "react";
// Libraries
// import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
// import { useRouteMatch } from "react-router-dom";
// Components
import Card from "../components/Card";
// Pages
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
// Store
// import { isLoggedInSelector } from "../store/authSlice";

const AuthLayout = () => {
  // let { path } = useRouteMatch();
  // const isLoggedIn = useSelector(isLoggedInSelector());

  // if (isLoggedIn) {
  //   return <Redirect to="/" />;
  // }

  return (
    <div className="flex flex-col items-center justify-center grow dark:text-slate-200 ">
      <Card>
        <Routes>
          <Route path={"login"} element={<LoginPage />} />
          <Route path={"signup"} element={<SignUpPage />} />
          {/* <Redirect to={path + "/signup"} /> */}
        </Routes>
      </Card>
    </div>
  );
};

export default AuthLayout;
