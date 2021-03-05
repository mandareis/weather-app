import React, { useState, useEffect } from "react";
import WeatherDetails from "./WeatherDetails";

function Weather({ place }) {
  const [weather, setWeather] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const [err, setErr] = useState(null);
  useEffect(() => {
    async function getWeather() {
      try {
        let response = await fetch(`/api/weather?q=${place}`);
        let data = await response.json();
        setErr(null);
        if (!response.ok) {
          setErr("Failed to locate city.");
          console.error(`server error: ${data.error.message}`);
        } else {
          setWeather(data);
        }
      } catch (e) {
        setErr(e.message);
      } finally {
        setIsLoading(false);
      }
    }
    getWeather();
  }, [place]);

  return (
    <>
      {err || isLoading ? null : <WeatherDetails weather={weather} />}
      {err && <p>{err}</p>}
    </>
  );
}
export default Weather;
