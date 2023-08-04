import React from "react";
import styled from "styled-components";
import { useAuthContext } from "../../context/auth/AuthContextProvider";
import lottie from "lottie-web";
import { defineElement } from "lord-icon-element";
import { Link } from "react-router-dom";
import { HOME_PAGE } from "../../constants/routes";
defineElement(lottie.loadAnimation);

const DetailStyle = styled.div`
  background-color: #17202a;
  iframe {
    width: 100%;
    height: 100vh;
  }
  .back-button {
    position: absolute;
    left: 60px;
    top: 60px;
  }
  .banner_contents {
    position: absolute;
    left: 60px;
    top: 200px;
    color: white;
  }
  .banner_title {
    font-size: 3rem;
    font-weight: 800;
    padding-bottom: 0.3rem;
  }
  .banner_description {
    width: 45rem;
    line-height: 1.3;
    padding-top: 1rem;
    font-size: 1.2rem;
    max-width: 360px;
    height: 80px;
  }
  .rating {
    margin-top: 60px;
  }
`;

const Detail = () => {
  const { state } = useAuthContext();
  console.log(state);
  return (
    <DetailStyle>
      <div className="back-button">
        <Link to={HOME_PAGE}>
          <lord-icon
            src="https://cdn.lordicon.com/wjhsmbda.json"
            trigger="hover"
            colors="primary:#121331,secondary:#ebe6ef"
            style={{ width: "80px", height: "80px" }}
          ></lord-icon>
        </Link>
      </div>
      <iframe src={state?.movie.trailer} title={state?.movie?.title}></iframe>
      <div className="banner_contents">
        <h1 className="banner_title">{state?.movie?.title}</h1>
        <h1 className="banner_description">{state?.movie?.description}</h1>
        <div className="rating">
          <lord-icon
            src="https://cdn.lordicon.com/whttoese.json"
            trigger="morph"
            colors="primary:#4be1ec,secondary:#cb5eee"
            style={{ width: "50px", height: "50px" }}
          ></lord-icon>
          {state?.movie?.rating}
        </div>
      </div>
    </DetailStyle>
  );
};

export default Detail;
