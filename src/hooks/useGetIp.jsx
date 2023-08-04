import { useState, useEffect } from "react";
import messageError from '../helpers/messageApiError';

const useGetIp = (url) => {
  const [dataIp, setDataIp] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((dataIp) => {
        setDataIp(dataIp);
        if(dataIp == null) {
          setError(true);
        }
      })
      .catch((error) => {
        setError(true);
        // messageError()
        console.error("Error obteniendo IP:", error);
      });
  }, [url]);

  return { dataIp, error, setError };
};

export default useGetIp;
