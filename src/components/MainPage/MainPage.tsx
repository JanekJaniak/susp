import { useState, useEffect } from "react";

export const MainPage = () => {
  const [data, setData] = useState([]);

  //fetch data from the api
  // useEffect(() => {
  //   fetch('https://localhost:5001/api/ApiData')
  //     .then((response) => response.json())
  //     .then((data) => setData(data));
  // }, []);

  return (
    <div>
      <h1>Api Data</h1>
    </div>
  );
};