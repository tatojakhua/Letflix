/* eslint-disable react/prop-types */
import React from "react";
import { useNavigate } from "react-router-dom";
import { DETAILS } from "../../constants/routes";
import { useAuthContext } from "../../context/auth/AuthContextProvider";
import styled from "styled-components";
import { movieDetails } from "../../context/actions/constants/actionCreators";

const MovieStyle = styled.div`
  margin-left: 20px;

  img {
    border-radius: 15px;
    max-height: 250px;
    object-fit: contain;
    transition: transform 450ms;
    cursor: pointer;
  }
  img:hover {
    transform: scale(1.15);
    opacity: 1;
  }
`;

const Movies = ({ movie }) => {
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();
  function navigateToDetailsPage(movie) {
    dispatch(movieDetails(movie));
    navigate(DETAILS);
  }
  return (
    <MovieStyle
      onClick={() => {
        navigateToDetailsPage(movie);
      }}
    >
      <img alt={movie.title} src={movie.image} />
    </MovieStyle>
  );
};

export default Movies;
