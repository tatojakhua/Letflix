import React from "react";
import styled from "styled-components";

const FooterStyled = styled.div`
  position: fixed;
  display: flex;
  width: 300;
  bottom: 0px;
  left: 40%;
  margin: 600px 0 1px;
  align-items: end;
  justify-content: end;
  p {
    color: #fdfefe;
    text-decoration: none;
  }
  p .text-warning {
    color: #8e44ad;
  }
`;

const Footer = () => {
  return (
    <FooterStyled>
      <p>
        Copyright ©2023 All rights reserved by:
        <strong className="text-warning"> NiceGuyZ</strong>
      </p>
    </FooterStyled>
  );
};

export default Footer;
