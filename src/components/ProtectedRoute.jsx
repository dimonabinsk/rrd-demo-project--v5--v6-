import React from "react";
import { useLocation, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { isLoggedInSelector } from "../store/authSlice";

function ProtectedRoute({ redirectTo = "/auth/login", element }) {
  const location = useLocation();
  const isLoggedIn = useSelector(isLoggedInSelector());

  if (!isLoggedIn)
    return <Navigate to={redirectTo} state={{ referrer: location }} />;

  return element;

  // return (
  //   <Route
  //     {...rest}
  //     render={(props) => {
  //       if (!isLoggedIn) {
  //         return (
  //           <Redirect
  //             to={{
  //               pathname: "/auth/login",
  //               state: {
  //                 referrer: props.location,
  //               },
  //             }}
  //           />
  //         );
  //       }
  //       return Component ? <Component {...props} /> : children;
  //     }}
  //   />
  // );
}
export default ProtectedRoute;
