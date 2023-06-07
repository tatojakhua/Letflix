import jwtDecode from "jwt-decode";
import {
  AUTHENTICATE,
  LOG_IN,
  LOG_OUT,
  MOVIE,
  USERNAME,
} from "../actions/constants/actions";
import { toggleLocalStorage } from "../../utils/jwt";

const autchReducer = (state, actions) => {
  const { type, payload } = actions;
  switch (type) {
    case LOG_IN: {
      const { token } = payload;
      const user = jwtDecode(token);
      toggleLocalStorage(token);
      return { isAuthenticated: true, user };
    }
    case LOG_OUT: {
      toggleLocalStorage();
      return { isAuthenticated: false, user: null };
    }
    case AUTHENTICATE: {
      const user = jwtDecode(payload);
      return { isAuthenticated: true, user };
    }
    case USERNAME:
      return { ...state, userName: payload };
    case MOVIE:
      return { ...state, movie: payload };
    default:
      break;
  }
};

const initialState = {
  user: null,
  isAuthenticated: false,
  userName: "",
  movie: {},
};

export { autchReducer, initialState };
