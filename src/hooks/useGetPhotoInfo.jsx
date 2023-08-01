import { useState, useEffect } from "react";

const useGetPhotoInfo = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        // console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching dealers:", error);
      });
  }, [url]);

  return { data };
};

export default useGetPhotoInfo;