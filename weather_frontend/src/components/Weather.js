import React, { useState, useEffect } from "react";
import Searchbar from "./Searchbar";

function Weather() {
  const [forecast, setForecast] = useState();
  const [currentCondition, setCurrentCondition] = useState();
  const [place, setPlace] = useState("San Francisco");
  const [err, setErr] = useState(null);
  useEffect(() => {
    async function getForecast() {
      try {
        let response = await fetch(`/api/forecast?q=${place}`);
        let data = await response.json();
        console.log(response.status, data);
        if (!response.ok) {
          setErr(data.message);
        } else {
          setForecast(data);
        }
      } catch (e) {
        setErr(e);
        throw Error(err);
      }
    }
    getForecast();
  }, [place, err]);
  useEffect(() => {
    async function getCurrentCondition() {
      let response = await fetch(`/api/current-condition?q=${place}`);
      let data = await response.json();
      console.log(response.status, data);
      if (!response.ok) {
        setErr(data.message);
      } else {
        setCurrentCondition(data);
      }
    }
    getCurrentCondition();
  }, [place]);
  return (
    <div>
      <p>Hello</p>
      <Searchbar place={place} setPlace={setPlace} />
      {/* {err && <p>{err}</p>} */}
      <pre>{JSON.stringify(forecast, null, 2)}</pre>
      <pre>{JSON.stringify(currentCondition, null, 2)}</pre>
    </div>
  );
}
export default Weather;
