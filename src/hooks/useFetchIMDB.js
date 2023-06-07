import { useEffect, useState } from "react";
import { imdbFetch } from "../API/IMDB";

const useFetchIMDB = () => {
  const [Info, setInfo] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [Error, setError] = useState("");
  useEffect(() => {
    imdbFetch()
      .then((data) => {
        setInfo(data);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      });
  }, []);
  return [Info, Loading, Error];
};

export default useFetchIMDB;
