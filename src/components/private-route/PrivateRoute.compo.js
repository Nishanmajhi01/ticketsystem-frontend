import React from "react";
import { Navigate } from "react-router-dom";
import { DefaultLayout } from "../../Layout/DefaultLayout";

const isAuth = true; // Replace with actual authentication logic

export const PrivateRoute = ({ children}) => {
  // Redirect to the login page if not authenticated
  if (!isAuth) {
   
    return <Navigate to="/" />;
  }

  // Render the children within the DefaultLayout if authenticated
  return <DefaultLayout>{children}</DefaultLayout>;
};

