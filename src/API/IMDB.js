import axios from "axios";
const imdbFetch = async () => {
  const options = {
    method: "GET",
    url: "https://imdb-top-100-movies.p.rapidapi.com/",
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_SECRET,
      "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
    },
  };
  const response = await axios.request(options);
  return response.data;
};
export { imdbFetch };
