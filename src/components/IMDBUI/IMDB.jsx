import React from "react";
import useFetchIMDB from "../../hooks/useFetchIMDB";
import Movies from "../movies/Movies";
import styled from "styled-components";
import lottie from "lottie-web";
import { defineElement } from "lord-icon-element";
defineElement(lottie.loadAnimation);

const RowStyle = styled.div`
  color: white;
  background-color: #17202a;
  h2 {
    margin-left: 20px;
  }
  .row_poster1 {
    display: flex;
    overflow-y: hidden;
    overflow-x: scroll;
    padding: 20px;
  }
  .row_poster1::-webkit-scrollbar {
    display: none;
  }
  .row_poster2 {
    display: flex;
    overflow-y: hidden;
    overflow-x: scroll;
    padding: 20px;
  }
  .row_poster2::-webkit-scrollbar {
    display: none;
  }
  .row_poster3 {
    display: flex;
    overflow-y: hidden;
    overflow-x: scroll;
    padding: 20px;
  }
  .row_poster3::-webkit-scrollbar {
    display: none;
  }
  .row_poster4 {
    display: flex;
    overflow-y: hidden;
    overflow-x: scroll;
    padding: 20px;
  }
  .row_poster4::-webkit-scrollbar {
    display: none;
  }
  .row_poster5 {
    display: flex;
    overflow-y: hidden;
    overflow-x: scroll;
    padding: 20px;
  }
  .row_poster5::-webkit-scrollbar {
    display: none;
  }
  hr {
    border: 0;
    border-bottom: 2px solid black;
    width: 0;
    -webkit-animation: separator-width 1s ease-out forwards;
    animation: separator-width 1s ease-out forwards;
  }
  @-webkit-keyframes separator-width {
    0% {
      width: 0;
    }
    100% {
      width: 100%;
    }
  }
  @keyframes separator-width {
    0% {
      width: 0;
    }
    100% {
      width: 100%;
    }
  }
`;

const LoadingStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #17202a;
  height: 100vh;
`;

const ErrorStyle = styled.div`
  display: flex;
  background-color: #17202a;
  align-items: center;
  justify-content: center;
  height: 100vh;
  h1 {
    color: #fff;
  }
`;

const IMDB = () => {
  const [movies, isLoading, Error] = useFetchIMDB();
  if (Error) {
    return (
      <ErrorStyle>
        <h1>{Error}</h1>
      </ErrorStyle>
    );
  }
  return (
    <div>
      {isLoading ? (
        <LoadingStyle>
          <lord-icon
            src="https://cdn.lordicon.com/tqywkdcz.json"
            trigger="loop"
            colors="primary:#4bb3fd,secondary:#f28ba8,tertiary:#ffc738,quaternary:#f24c00"
            style={{ width: "250px", height: "250px" }}
          ></lord-icon>
        </LoadingStyle>
      ) : (
        <RowStyle>
          <hr />
          <h2 style={{ marginTop: "80px" }}>Drama</h2>
          <div className="row_poster1">
            {movies.slice(0, 20).map((movie) => (
              <Movies key={movie.rank} movie={movie} />
            ))}
          </div>
          <hr />
          <h2>Action</h2>
          <div className="row_poster2">
            {movies.slice(20, 40).map((movie) => (
              <Movies key={movie.rank} movie={movie} />
            ))}
          </div>
          <hr />
          <h2>Adventure</h2>
          <div className="row_poster3">
            {movies.slice(40, 60).map((movie) => (
              <Movies key={movie.rank} movie={movie} />
            ))}
          </div>
          <hr />
          <h2>Mystery</h2>
          <div className="row_poster4">
            {movies.slice(60, 80).map((movie) => (
              <Movies key={movie.rank} movie={movie} />
            ))}
          </div>
          <hr />
          <h2>Comedy</h2>
          <div className="row_poster5">
            {movies.slice(80, 100).map((movie) => (
              <Movies key={movie.rank} movie={movie} />
            ))}
          </div>
        </RowStyle>
      )}
    </div>
  );
};

export default IMDB;
