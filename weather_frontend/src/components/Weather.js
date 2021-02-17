import React, { useState, useEffect } from "react";
import Searchbar from "./Searchbar";
import WeatherDetails from "./WeatherDetails";

function Weather() {
  const [forecast, setForecast] = useState();
  const [currentCondition, setCurrentCondition] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [place, setPlace] = useState("San Francisco");
  const [err, setErr] = useState(null);
  useEffect(() => {
    async function getForecast() {
      try {
        let response = await fetch(`/api/forecast?q=${place}`);
        let data = await response.json();
        setErr(null);
        console.log(response.status, data);

        if (!response.ok) {
          setErr("Failed to locate city.");
        } else {
          setForecast(data);
        }
      } catch (e) {
        setErr(e.message);
      } finally {
        setIsLoading(false);
      }
    }
    getForecast();
  }, [place]);
  useEffect(() => {
    async function getCurrentCondition() {
      try {
        let response = await fetch(`/api/current-condition?q=${place}`);
        let data = await response.json();
        setErr(null);
        console.log(response.status, data);
        if (!response.ok) {
          setErr("Failed to locate city.");
        } else {
          setCurrentCondition(data);
        }
      } catch (e) {
        setErr(e.message);
      } finally {
        setIsLoading(false);
      }
    }
    getCurrentCondition();
  }, [place]);

  return (
    <div>
      <Searchbar place={place} setPlace={setPlace} />
      {err || isLoading ? null : (
        <WeatherDetails
          forecast={forecast}
          place={place}
          currentCondition={currentCondition}
        />
      )}
      {err && <p>{err}</p>}
      {/* <pre>{JSON.stringify(forecast, null, 2)}</pre>
      <pre>{JSON.stringify(currentCondition, null, 2)}</pre> */}
    </div>
  );
}
export default Weather;
