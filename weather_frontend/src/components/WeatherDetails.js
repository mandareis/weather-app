import React, { useEffect, useState } from "react";
import Forecast from "./Forecast";
import HourlyWeather from "./HourlyWeather";
import moment from "moment";

function WeatherDetails({ weather }) {
  const [defaultBtn, setDefaultBtn] = useState("hourly-btn");

  console.log(weather);

  //higher order function that first checks which button is being clicked, and arrow function updates the defaultBtn to the which is selected.
  const onBtnClick = (which) => {
    return () => {
      setDefaultBtn(which);
    };
  };

  // causes a re-render when location.name updates, and it updates defaultBtn back to Hourly
  useEffect(() => {
    setDefaultBtn("hourly-btn");
  }, [weather.location.name]);

  return (
    <div className="container lg:inline-flex gap-8">
      <div className=" container mx-auto text-blue-800 border-4 border-blue-500 border-opacity-25 shadow-md bg-indigo-200 md:w-3/5 rounded-lg p-8 text-center">
        <p>
          {weather.location.name}, {weather.location.country}
        </p>
        <p>{weather.current.condition.text}</p>
        <p>{moment(weather.location.localtime).format("LLLL ")}</p>
        <p>
          Current: {weather.current.temp_f}&#176;F / {weather.current.temp_c}
          &#176;C
        </p>
        <p>
          Feels like: {Math.round(weather.current.feelslike_f)}&#176;F /{" "}
          {Math.round(weather.current.feelslike_c)}&#176;C &nbsp;
        </p>
        <p>Humidity: {weather.current.humidity}%</p>
        <p>
          Wind: {weather.current.wind_dir}{" "}
          {Math.round(weather.current.wind_mph)} mph
        </p>
        <div className="flex flex-row gap-4 place-content-center pt-6">
          <button
            className="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-indigo-600 bg-opacity-25 hover:bg-indigo-200 active:bg-indigo-300 text-center sm:text-left focus:outline-none "
            type="submit"
            onClick={onBtnClick("hourly-btn")}
          >
            Hourly
          </button>
          <button
            className="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-indigo-600 bg-opacity-25 hover:bg-indigo-200 active:bg-indigo-300  text-center sm:text-left focus:outline-none"
            type="submit"
            onClick={onBtnClick("day-btn")}
          >
            3 Day
          </button>
        </div>
      </div>
      {defaultBtn === "hourly-btn" ? <HourlyWeather weather={weather} /> : null}
      {defaultBtn === "day-btn" ? <Forecast weather={weather} /> : null}
    </div>
  );
}

export default WeatherDetails;
