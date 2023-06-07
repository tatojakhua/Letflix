/* eslint-disable react/prop-types */
import React from "react";
import { useAuthContext } from "../context/auth/AuthContextProvider";
import Banner from "../components/Banner/Banner";

const AuthGuard = ({ children }) => {
  const { state } = useAuthContext();
  return <div>{state.isAuthenticated ? children : <Banner />}</div>;
};

export default AuthGuard;
