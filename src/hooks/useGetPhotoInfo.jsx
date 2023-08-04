import { useState, useEffect } from "react";
import messageError from '../helpers/messageApiError';


const useGetPhotoInfo = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        
        if(data && data.error) {
          setError(true);
        }
      })
      .catch((error) => {
        setError(true);
        // messageError()
        // console.error("Error fetching dealers:", error);
      });
  }, [url]);

  return { data, error, setError };
};

export default useGetPhotoInfo;