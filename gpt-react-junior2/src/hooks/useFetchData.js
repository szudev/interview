import { useState, useEffect } from "react";

const useFetchData = () => {
  const [fetchedData, setFetchedData] = useState();
  useEffect(() => {
    fetch("../../src/api/data.json")
      .then((response) => response.json())
      .then((data) => setFetchedData(data.items));
  }, []);
  return { fetchedData };
};

export default useFetchData;
