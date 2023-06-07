import {
  HOME_PAGE,
  SIGN_IN,
  SIGN_UP,
  NOT_FOUND,
  DETAILS,
} from "../constants/routes";
import Home from "../pages/home/Home";
import SigUp from "../pages/signUp/SignUp";
import SignIn from "../pages/signIn/SignIn";
import Details from "../pages/MovieDetails/Details";
import Error from "../pages/error/Error";
import AuthenticateGuard from "../Guard/AuthenticateGuard";
import GuestGuard from "../Guard/GuestGuard";
export const routes = [
  {
    path: HOME_PAGE,
    Component: Home,
    Guard: AuthenticateGuard,
  },
  {
    path: DETAILS,
    Component: Details,
    Guard: AuthenticateGuard,
  },
  {
    path: SIGN_IN,
    Component: SignIn,
    Guard: GuestGuard,
  },
  {
    path: SIGN_UP,
    Component: SigUp,
    Guard: GuestGuard,
  },
  {
    path: NOT_FOUND,
    Component: Error,
  },
];
