import React, { useState } from "react";
import { signIn } from "../../API/auth";
import { useAuthContext } from "../../context/auth/AuthContextProvider";
import { logIn } from "../../context/actions/constants/actionCreators";
import { Link, useNavigate } from "react-router-dom";
import { HOME_PAGE } from "../../constants/routes";
import styled from "styled-components";
import lottie from "lottie-web";
import { defineElement } from "lord-icon-element";
defineElement(lottie.loadAnimation);

const SignInStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
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
  form {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  label {
    padding: 0.25rem 0;
  }
  input {
    margin: 0.5rem 0;
    padding: 0.6rem;
    border: none;
    border-radius: 10px;
  }
  button {
    width: 50%;
    height: 50px;
    padding: 10px;
    border: none;
    background-color: #7d3c98;
    color: white;
    border-radius: 5px;
    font-weight: bold;
    font-size: 18px;
    cursor: pointer;
    margin-top: 15px;
    margin-bottom: 30px;
  }
  span {
    color: red;
  }
  h1 {
    color: #fdfefe;
  }
`;
const ButtonStyle = styled.div`
  border: none;
  position: absolute;
  left: 70px;
  top: 66px;
`;

const SignInLoader = styled.div`
  & {
    width: 80px;
    height: 40px;
    --c: radial-gradient(farthest-side, #7d3c98 93%, #0000);
    background: var(--c) 0 0, var(--c) 50% 0;
    background-size: 16px 16px;
    background-repeat: no-repeat;
    position: relative;
    clip-path: inset(-200% -100% 0 0);
    animation: db6-0 1.5s linear infinite;
  }
  &:before {
    content: "";
    position: absolute;
    width: 16px;
    height: 24px;
    background: #7d3c98;
    left: -32px;
    top: 0;
    animation: db6-1 1.5s linear infinite,
      db6-2 0.5s cubic-bezier(0, 200, 0.8, 200) infinite;
  }
  &:after {
    content: "";
    position: absolute;
    inset: 0 0 auto auto;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #7d3c98;
    animation: db6-3 1.5s linear infinite;
  }

  @keyframes db6-0 {
    0%,
    30% {
      background-position: 0 0, 50% 0;
    }
    33% {
      background-position: 0 100%, 50% 0;
    }
    41%,
    63% {
      background-position: 0 0, 50% 0;
    }
    66% {
      background-position: 0 0, 50% 100%;
    }
    74%,
    100% {
      background-position: 0 0, 50% 0;
    }
  }

  @keyframes db6-1 {
    90% {
      transform: translateY(0);
    }
    95% {
      transform: translateY(30px);
    }
    100% {
      transform: translateY(30px);
      left: calc(100% - 16px);
    }
  }

  @keyframes db6-2 {
    100% {
      top: -0.2px;
    }
  }

  @keyframes db6-3 {
    0%,
    80%,
    100% {
      transform: translate(0);
    }
    90% {
      transform: translate(52px);
    }
  }
`;

const Form = () => {
  const { dispatch, state } = useAuthContext();
  const navigate = useNavigate();
  const [info, setInfo] = useState({
    userName: [state.userName],
    password: "",
    error: "",
  });
  const [Loading, setLoading] = useState(false);
  const submitHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    setInfo((prev) => ({ ...prev, error: "" }));
    signIn(info)
      .then((data) => {
        dispatch(logIn(data));
        navigate(HOME_PAGE);
      })
      .catch((err) => {
        setInfo((prev) => ({ ...prev, error: err.message }));
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <div>
      {!Loading && (
        <ButtonStyle>
          <Link to={HOME_PAGE}>
            <lord-icon
              src="https://cdn.lordicon.com/kxoxiwrf.json"
              trigger="hover"
              colors="primary:#e8308c,secondary:#e88c30"
              style={{ width: "70px", height: "70px" }}
            ></lord-icon>
          </Link>
        </ButtonStyle>
      )}
      <SignInStyle>
        {Loading ? (
          <SignInLoader />
        ) : (
          <form>
            <h1>Sign In</h1>
            <label htmlFor="userName">User name</label>
            <input
              autoCapitalize="true"
              placeholder="User name"
              value={info.userName}
              type="text"
              name="userName"
              onChange={(e) => {
                setInfo((prev) => {
                  return { ...prev, [e.target.name]: e.target.value };
                });
              }}
            />
            <label htmlFor="password">Password</label>
            <input
              autoCapitalize="true"
              placeholder="Password"
              value={info.password}
              type="password"
              name="password"
              onChange={(e) => {
                setInfo((prev) => {
                  return { ...prev, [e.target.name]: e.target.value };
                });
              }}
            />
            {info.error && <span>{info.error}</span>}
            <button onClick={submitHandler}>Submit</button>
          </form>
        )}
      </SignInStyle>
    </div>
  );
};

export default Form;
