import { useEffect, useState } from "react";

const useData = () => {
  const [servs, setServs] = useState([]);

  useEffect(() => {
    fetch("https://damp-chamber-30165.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServs(data));
  }, []);

  return servs;
};

export default useData;
