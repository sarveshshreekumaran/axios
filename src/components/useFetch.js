import axios from "axios";
import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setDate] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setDate(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [url]);

  return [data];
};

export default useFetch;
