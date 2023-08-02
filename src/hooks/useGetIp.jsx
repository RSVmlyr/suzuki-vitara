import { useState, useEffect } from "react";
import messageError from '../helpers/messageApiError';

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
        messageError()
        console.error("Error obteniendo IP:", error);
      });
  }, [url]);

  return { dataIp };
};

export default useGetIp;
