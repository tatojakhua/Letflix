import React from "react";
import { Link } from "react-router-dom";
import { HOME_PAGE, SIGN_UP, SIGN_IN } from "../../constants/routes";
import { useAuthContext } from "../../context/auth/AuthContextProvider";
import styled from "styled-components";
import lottie from "lottie-web";
import { defineElement } from "lord-icon-element";
defineElement(lottie.loadAnimation);

const ErrorMessageStyle = styled.section`
  background: hsla(212, 41%, 72%, 1);

  background: linear-gradient(
    90deg,
    hsla(212, 41%, 72%, 1) 0%,
    hsla(0, 8%, 29%, 1) 100%
  );

  background: -moz-linear-gradient(
    90deg,
    hsla(212, 41%, 72%, 1) 0%,
    hsla(0, 8%, 29%, 1) 100%
  );

  background: -webkit-linear-gradient(
    90deg,
    hsla(212, 41%, 72%, 1) 0%,
    hsla(0, 8%, 29%, 1) 100%
  );

  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#9BB6D5", endColorstr="#4F4343", GradientType=1 );
  text-align: start;
  padding: 7px;
  flex-wrap: wrap;
  height: 100vh;
  .first {
    margin-top: 100px;
    margin-left: 150px;
    padding: 10px 0 10px;
    width: 30%;
  }
  .second {
    margin-left: 150px;
    width: 30%;
  }
  .third {
    width: 30%;
    margin-left: 150px;
  }
  ul {
    margin-left: 20px;
  }
  strong {
    color: red;
    font-weight: bold;
    font-size: 1.2rem;
  }
  h1 {
    font-size: 3rem;
    width: 30%;
  }
  .third {
    padding: 20px 0;
  }
  ul {
    margin-left: 20px;
    margin-top: 10px;
    width: 30%;
  }
  li {
    padding: 3px 0;
    width: 100%;
  }
  a {
    text-decoration: none;
    color: #fdfefe;
  }
  a:hover {
    text-decoration: underline;
  }
`;

const ErrorIconStyle = styled.div`
  width: 20%;
  margin-left: 750px;
  margin-top: -259px;
`;

function Error() {
  const { state } = useAuthContext();
  return (
    <ErrorMessageStyle>
      <div className="first">
        <strong>404 ERROR</strong>
        <h1>Oops!</h1>
      </div>
      <div className="second">
        <p>We can`t seem to find the page you`re looking for.</p>
      </div>
      {state.user ? (
        <div className="third">
          <p>Here are some helpful links instead:</p>
          <ul>
            <li>
              <Link to={HOME_PAGE}>Home</Link>
            </li>
          </ul>
        </div>
      ) : (
        <div className="third">
          <p>Here are some helpful links instead:</p>
          <ul>
            <li>
              <Link to={HOME_PAGE}>Home</Link>
            </li>
            <li>
              <Link to={SIGN_UP}>Sign up</Link>
            </li>
            <li>
              <Link to={SIGN_IN}>Sign in</Link>
            </li>
          </ul>
        </div>
      )}

      <ErrorIconStyle>
        <lord-icon
          src="https://cdn.lordicon.com/vyukcgvf.json"
          trigger="hover"
          delay="2000"
          colors="outline:#121331,primary:#ffc738,secondary:#e83a30"
          stroke="50"
          style={{ width: "250px", height: "250px" }}
        ></lord-icon>
      </ErrorIconStyle>
    </ErrorMessageStyle>
  );
}

export default Error;
