import { useEffect, useState } from "react";

const useDataLoad = () => {
  const [catData, setCatData] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCatData(data));
  }, []);
  return [catData, setCatData];
};

export default useDataLoad;
