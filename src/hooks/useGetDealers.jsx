import { useState, useEffect } from "react";
import messageError from '../helpers/messageApiError';


const useGetDealers = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        // console.log(data);
      })
      .catch((error) => {
        messageError()
        console.error("Error fetching dealers:", error);
      });
  }, [url]);

  return { data };
};

export default useGetDealers;
