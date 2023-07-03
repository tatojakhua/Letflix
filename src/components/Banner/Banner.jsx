import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { SIGN_IN, SIGN_UP } from "../../constants/routes";
import axios from "../../API/headerAxios";
import request from "../../API/HeaderRequests";

const BannerStyle = styled.header`
  background-size: cover;
  background-position: center;
  height: 100vh;
  color: white;
  object-fit: contain;

  &::after {
    content: "";
    padding: 36px;
    background-image: linear-gradient(
      transparent,
      rgba(37, 37, 37, 0.61),
      rgb(17, 17, 17)
    );
    transform: rotate(180deg);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }
  &:before {
    content: "";
    height: 7.4rem;
    background-image: linear-gradient(
      180deg,
      transparent,
      rgba(37, 37, 37, 0.61),
      #111
    );
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .banner_contents {
    max-width: max-content;
    text-align: start;
    margin-left: 60px;
    top: 200px;
    padding: 20px;
    border-radius: 15px;
    background-color: rgba(51, 51, 51, 0.3);
    position: relative;
  }
  .banner_title {
    max-width: max-content;
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
  }
  .banner_button {
    cursor: pointer;
    color: #fff;
    outline: none;
    border: none;
    font-weight: 700;
    border-radius: 0.2vw;
    padding-left: 2rem;
    padding-right: 2rem;
    margin-right: 1rem;
    padding-top: 0.5rem;
    background-color: rgba(51, 51, 51, 0.5);
    box-shadow: 0 0 2px 4px rgba(255, 255, 255, 0.12);
    padding-bottom: 0.5rem;
  }
  .banner_button:hover {
    color: #000;
    background-color: #e6e6e6;
    transition: all 0.2s;
  }
`;
const Banner = () => {
  const [Movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(request.fetchTrending);
      setMovie(
        response.data.results[
          Math.floor(Math.random() * response.data.results.length)
        ]
      );
      return response;
    }
    fetchData();
    setInterval(() => {
      async function fetchData() {
        const response = await axios.get(request.fetchTrending);
        setMovie(
          response.data.results[
            Math.floor(Math.random() * response.data.results.length)
          ]
        );
        return response;
      }
      fetchData();
    }, 10000);
  }, []);
  const navigate = useNavigate();
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + " ..." : string;
  }
  return (
    <BannerStyle
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${Movie?.backdrop_path}")`,
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {Movie?.title || Movie?.name || Movie.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button" onClick={() => navigate(SIGN_IN)}>
            Sign In
          </button>
          <button className="banner_button" onClick={() => navigate(SIGN_UP)}>
            Sign Up
          </button>
        </div>
        <h1 className="banner_description">{truncate(Movie?.overview, 150)}</h1>
      </div>
    </BannerStyle>
  );
};

export default Banner;
