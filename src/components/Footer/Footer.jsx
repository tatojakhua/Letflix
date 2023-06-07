import React from "react";
import styled from "styled-components";

const FooterStyled = styled.div`
  position: fixed;
  display: flex;
  align-items: end;
  justify-content: end;
  margin-top: 600px;
  left: 500px;
  p {
    color: white;
    text-decoration: none;
  }
  .text-warning {
    color: #7d3c98;
  }
`;

const Footer = () => {
  return (
    <FooterStyled>
      <p>
        Copyright ©2023 All rights reserved by:
        <strong className="text-warning">NiceGuyZ</strong>
      </p>
    </FooterStyled>
  );
};

export default Footer;
