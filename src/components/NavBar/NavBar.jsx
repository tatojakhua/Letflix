import React from "react";
import { Link } from "react-router-dom";
import { HOME_PAGE } from "../../constants/routes";
import { useAuthContext } from "../../context/auth/AuthContextProvider";
import Authenticated from "./Authenticated";
import NotAuthenticatied from "./NotAuthenticatied";
import styled from "styled-components";
import lottie from "lottie-web";
import { defineElement } from "lord-icon-element";
defineElement(lottie.loadAnimation);

const NavBarStyle = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  padding: 10px 90px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.06);
  div {
    position: absolute;
    top: -12px;
    left: 40px;
    height: 50px;
  }
`;

const NavBar = () => {
  const { state } = useAuthContext();
  return (
    <NavBarStyle>
      <div>
        <Link to={HOME_PAGE}>
          <lord-icon
            src="https://cdn.lordicon.com/xhitaejr.json"
            trigger="hover"
            colors="outline:#131432,primary:#3a3347,secondary:#08a88a,secondary 2:#ebe6ef"
            style={{ width: "80px", height: "80px" }}
          ></lord-icon>
        </Link>
      </div>
      {state.user ? <Authenticated /> : <NotAuthenticatied />}
    </NavBarStyle>
  );
};

export default NavBar;
