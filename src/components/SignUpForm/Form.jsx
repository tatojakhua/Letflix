/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import styled from "styled-components";

const FormStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;
  input {
    padding: 15px;
    margin: 10px 0;
    border-radius: 5px;
    border: 1px solid gray;
  }
  label {
    text-align: start;
    font-size: 12px;
    color: gray;
  }
  span {
    text-align: start;
    font-size: 12px;
    padding: 3px;
    color: red;
    display: none;
  }
  input:invalid[focused="true"] {
    border: 1px solid red;
  }
  input:invalid[focused="true"] ~ span {
    display: block;
  }
`;

const Form = (props) => {
  const [Focused, setFocusedLeave] = useState(false);
  const { label, onChange, errorMessage, ...inputProps } = props;
  const handleFocuse = () => {
    setFocusedLeave(true);
  };
  return (
    <FormStyle>
      <label>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocuse}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocusedLeave(true)
        }
        focused={Focused.toString()}
      />
      <span>{errorMessage}</span>
    </FormStyle>
  );
};

export default Form;
