import React from "react";
import { NavLink } from "react-router-dom";
import { HOME_PAGE, SIGN_UP, SIGN_IN } from "../../constants/routes";
import styled from "styled-components";

const NavbarStyle = styled.ul`
  display: flex;
  align-items: center;
  justify-content: end;
  li {
    list-style: none;
    padding: 0 20px;
    position: relative;
  }
  li a {
    justify-content: space-around;
    text-decoration: none;
    font-size: 16px;
    font-weight: 600;
    color: #fdfefe;
    transition: 0.3s ease;
  }
  li a.active::after,
  li a:hover::after {
    content: "";
    width: 20%;
    height: 4px;
    background: #fdfefe;
    border-radius: 25px;
    position: absolute;
    bottom: -6px;
    left: 20px;
  }
`;

const NotAuthenticatied = () => {
  return (
    <NavbarStyle>
      <li>
        <NavLink to={HOME_PAGE}>Home</NavLink>
      </li>
      <li>
        <NavLink to={SIGN_UP}>Sign up</NavLink>
      </li>
      <li>
        <NavLink to={SIGN_IN}>Sign in</NavLink>
      </li>
    </NavbarStyle>
  );
};

export default NotAuthenticatied;
