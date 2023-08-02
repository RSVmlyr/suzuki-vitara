import { useState, useEffect } from "react";

const useGetIp = (url) => {
  const [dataIp, setDataIp] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((dataIp) => {
        setDataIp(dataIp);
        // console.log(dataIp);
      })
      .catch((error) => {
        console.error("Error obteniendo IP:", error);
      });
  }, [url]);

  return { dataIp };
};

export default useGetIp;
