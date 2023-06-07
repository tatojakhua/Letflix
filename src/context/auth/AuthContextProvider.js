/* eslint-disable react/prop-types */
import React, { createContext, useContext, useEffect, useReducer } from "react";
import { autchReducer, initialState } from "./autchReducer";
import { authenticateAction } from "../actions/constants/actionCreators";
import { isTokenValid } from "../../utils/jwt";

const authContext = createContext();
const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(autchReducer, initialState);
  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    if (token && isTokenValid(token)) {
      dispatch(authenticateAction(token));
    }
  }, []);
  return (
    <authContext.Provider value={{ state, dispatch }}>
      {children}
    </authContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(authContext);
  if (context) {
    return context;
  }
  throw new Error("authcontext error");
};

export default AuthContextProvider;
