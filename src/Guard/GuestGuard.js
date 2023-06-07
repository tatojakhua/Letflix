/* eslint-disable react/prop-types */
import React from "react";
import { useAuthContext } from "../context/auth/AuthContextProvider";
import { Navigate } from "react-router-dom";
import { HOME_PAGE } from "../constants/routes";

const GuestGuard = ({ children }) => {
  const { state } = useAuthContext();
  return (
    <div>{state.isAuthenticated ? <Navigate to={HOME_PAGE} /> : children}</div>
  );
};

export default GuestGuard;
