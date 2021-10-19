import { useEffect, useState } from "react";

const useData = () => {
  const [servs, setServs] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setServs(data));
  }, []);

  return servs;
};

export default useData;
