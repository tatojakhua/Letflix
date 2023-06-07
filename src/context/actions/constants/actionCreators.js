import { AUTHENTICATE, LOG_IN, LOG_OUT, MOVIE, USERNAME } from "./actions";

const logIn = (payload) => {
  return {
    type: LOG_IN,
    payload,
  };
};
const logOut = () => {
  return {
    type: LOG_OUT,
  };
};
const authenticateAction = (token) => {
  return {
    type: AUTHENTICATE,
    payload: token,
  };
};
const userName = (payload) => {
  return {
    type: USERNAME,
    payload,
  };
};
const movieDetails = (payload) => {
  return {
    type: MOVIE,
    payload,
  };
};
export { logIn, logOut, authenticateAction, userName, movieDetails };
