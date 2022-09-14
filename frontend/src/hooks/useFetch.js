import {useEffect, useState} from "react";
import axios from 'axios'

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = async (url) => {
    setLoading(true);
    try {
      const {data} = await axios.get(url)
      setData(data);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData(url);
  }, [url]);

  return {loading, error, data};
};

export default useFetch;
