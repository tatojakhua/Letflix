import jwt_decoder from "jwt-decode";

function parseJWT(token) {
  const data = jwt_decoder(token);
  return data;
}
function toggleLocalStorage(token) {
  if (token) {
    localStorage.setItem("accessToken", token);
  } else {
    localStorage.removeItem("accessToken");
  }
}
function isTokenValid(token) {
  const currentTime = Date.now() / 1000;
  const decoded = jwt_decoder(token);
  return decoded.exp > currentTime;
}

export { parseJWT, toggleLocalStorage, isTokenValid };
