import {
  HOME_PAGE,
  SIGN_IN,
  SIGN_UP,
  NOT_FOUND,
  DETAILS,
} from "../constants/routes";
import Pages from "../pages/index";
import AuthenticateGuard from "../Guard/AuthenticateGuard";
import GuestGuard from "../Guard/GuestGuard";
export const routes = [
  {
    path: HOME_PAGE,
    Component: Pages.Home,
    Guard: AuthenticateGuard,
  },
  {
    path: DETAILS,
    Component: Pages.Details,
    Guard: AuthenticateGuard,
  },
  {
    path: SIGN_IN,
    Component: Pages.SignIn,
    Guard: GuestGuard,
  },
  {
    path: SIGN_UP,
    Component: Pages.SignUp,
    Guard: GuestGuard,
  },
  {
    path: NOT_FOUND,
    Component: Pages.Error,
  },
];
