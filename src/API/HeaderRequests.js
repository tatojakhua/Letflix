const request = {
  fetchTrending: `/trending/all/week?api_key=${process.env.REACT_APP_SECRET_HEADER_API_KEY}&lenguage=en-US`,
};

export default request;
