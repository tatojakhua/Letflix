import React from "react";
import { useAuthContext } from "../../context/auth/AuthContextProvider";
import { logOut } from "../../context/actions/constants/actionCreators";
import styled from "styled-components";
import lottie from "lottie-web";
import { defineElement } from "lord-icon-element";
defineElement(lottie.loadAnimation);

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
  button {
    width: 70px;
    height: 2.5rem;
    outline: none;
    border: none;
    border-radius: 50px;
    background-color: #fdfefe;
    color: black;
    font-weight: 600;
    text-transform: capitalize;
    cursor: pointer;
    transition: 0.5s;
  }
  button:hover {
    color: #fdfefe;
    background-color: #e74c3c;
  }
  span {
    line-height: 50px;
    color: #2ecc71;
    transition: 0.5s;
  }
  span:hover {
    color: #fdfefe;
  }
  figure {
    height: 2.5rem;
    border-radius: 2.5rem;
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    border: 2px solid #2ecc71;
    padding: 0 10px 0;
    gap: 0.3125rem;
    font-weight: 400;
    font-size: 0.875rem;
    box-sizing: border-box;
    transition: 0.5s;
  }
  figure:hover {
    border: 2px solid #fdfefe;
  }
`;

const Authenticated = () => {
  const { dispatch, state } = useAuthContext();
  const logOutHandler = () => {
    dispatch(logOut());
  };
  return (
    <NavbarStyle>
      <li></li>
      <li>
        <figure>
          <lord-icon
            src="https://cdn.lordicon.com/dxjqoygy.json"
            trigger="hover"
            colors="primary:#ffffff,secondary:#08a88a"
            stroke="70"
            style={{ width: "30px", height: "30px", marginBottom: "25px" }}
          ></lord-icon>
          <span>{state.user.userName}</span>
        </figure>
      </li>
      <li>
        <button onClick={logOutHandler}>Log out</button>
      </li>
    </NavbarStyle>
  );
};

export default Authenticated;
