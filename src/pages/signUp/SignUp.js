import React, { useState } from "react";
import Form from "../../components/SignUpForm/Form";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { HOME_PAGE, SIGN_IN } from "../../constants/routes";
import { signUp } from "../../API/auth";
import { useAuthContext } from "../../context/auth/AuthContextProvider";
import { userName } from "../../context/actions/constants/actionCreators";
import lottie from "lottie-web";
import { defineElement } from "lord-icon-element";
defineElement(lottie.loadAnimation);

const SignUpStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 105vh;
  width: 100%;
  background-size: cover;
  background-position: center;
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
    background-color: #f2f3f4;
    padding: 0px 60px;
    border-radius: 10px;
  }
  button {
    width: 100%;
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
  h1 {
    display: flex;
    justify-content: center;
    color: #7d3c98;
  }
`;
const HomeButtonStyle = styled.div`
  border: none;
  position: absolute;
  left: 70px;
  top: 66px;
`;

const SignUpLoader = styled.div`
  & {
    width: 80px;
    height: 40px;
    --c: radial-gradient(farthest-side, #7d3c98 93%, #0000);
    background: var(--c) 0 0, var(--c) 50% 0, var(--c) 100% 0;
    background-size: 16px 16px;
    background-repeat: no-repeat;
    position: relative;
    animation: db4-0 1s linear infinite alternate;
  }
  &:before {
    content: "";
    position: absolute;
    width: 16px;
    height: 24px;
    background: #7d3c98;
    left: 0;
    top: 0;
    animation: db4-1 1s linear infinite alternate,
      db4-2 0.5s cubic-bezier(0, 200, 0.8, 200) infinite;
  }

  @keyframes db4-0 {
    0% {
      background-position: 0 100%, 50% 0, 100% 0;
    }
    8%,
    42% {
      background-position: 0 0, 50% 0, 100% 0;
    }
    50% {
      background-position: 0 0, 50% 100%, 100% 0;
    }
    58%,
    92% {
      background-position: 0 0, 50% 0, 100% 0;
    }
    100% {
      background-position: 0 0, 50% 0, 100% 100%;
    }
  }

  @keyframes db4-1 {
    100% {
      left: calc(100% - 16px);
    }
  }

  @keyframes db4-2 {
    100% {
      top: -0.2px;
    }
  }
`;

const FetchErrorStyle = styled.span`
  display: flex;
  box-sizing: border-box;
  color: red;
`;

const SignUp = () => {
  const [Values, setValues] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [Loading, setLoading] = useState(false);
  const [Error, setError] = useState("");
  const navigate = useNavigate();
  const { dispatch } = useAuthContext();
  const inputs = [
    {
      id: 1,
      name: "userName",
      type: "text",
      placeholder: "User name",
      errorMessage:
        "Username should be 3-16 characters and shouldn`t include any special characters!",
      label: "User name",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage:
        "It should be a valid email addres and should matched gmail.com!",
      label: "Email",
      pattern: "[a-zA-Z0-9]+.[a-zA-Z0-9]+@gmail.com",
      required: true,
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 capital letter, 1 number and 1 special character! ",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don`t match",
      label: "Confirm Password",
      pattern: Values.password,
      required: true,
    },
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    signUp(Values)
      .then((data) => {
        dispatch(userName(data.userName));
        navigate(SIGN_IN, { state: { success: true } });
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const handleChange = (e) => {
    setValues({ ...Values, [e.target.name]: e.target.value });
  };
  return (
    <div>
      {!Loading && (
        <HomeButtonStyle>
          <Link to={HOME_PAGE}>
            <lord-icon
              src="https://cdn.lordicon.com/kxoxiwrf.json"
              trigger="hover"
              colors="primary:#e8308c,secondary:#e88c30"
              style={{ width: "70px", height: "70px" }}
            ></lord-icon>
          </Link>
        </HomeButtonStyle>
      )}
      <SignUpStyle>
        {Loading ? (
          <SignUpLoader />
        ) : (
          <form onSubmit={handleSubmit}>
            <h1>Sign Up</h1>
            {inputs.map((input) => (
              <Form
                key={input.id}
                {...input}
                value={Values[input.name]}
                onChange={handleChange}
              />
            ))}
            <FetchErrorStyle>{Error}</FetchErrorStyle>
            <button>Submit</button>
          </form>
        )}
      </SignUpStyle>
    </div>
  );
};

export default SignUp;
