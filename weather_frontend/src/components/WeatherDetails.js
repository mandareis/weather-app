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
  // work on fixing the size of container below
  return (
    <div className="container lg:inline-flex text-sm md:text-md xl:text-lg ">
      <div
        className="container mx-auto text-blue-800 border-2 border-white dark:text-white border-opacity-25 shadow-md bg-indigo-200 dark:bg-gray-500 dark:border-gray-600 
        dark:border-opacity-25 md:w-3/5 rounded-lg p-8 space-y-2 mb-6 text-center"
        // style={{ margin: "2rem" }}
      >
        <p className="font-bold">
          {weather.location.name}, {weather.location.country}
        </p>
        <p>{weather.current.condition.text}</p>
        <p>
          {moment(weather.location.localtime, "YYYY-MM-DD H:mm").format(
            "LLLL "
          )}
        </p>

        <div className="grid grid-rows-2 space-y-2">
          <div className=" flex inline-flex justify-center space-x-4">
            <div>
              <span className="font-bold"> Current: </span>
              <p className="text-center">
                {Math.round(weather.current.temp_f)}&#176;F /{" "}
                {Math.round(weather.current.temp_c)}&#176;C
              </p>
            </div>
            <div>
              <span className="font-bold">Feels like:</span>
              <p className="text-center">
                {Math.round(weather.current.feelslike_f)}&#176;F /{" "}
                {Math.round(weather.current.feelslike_c)}&#176;C &nbsp;
              </p>
            </div>
          </div>
          <div className="flex inline-flex justify-center space-x-4">
            <div>
              <span className="font-bold">Humidity:</span>
              <p>{weather.current.humidity}%</p>
            </div>
            <div>
              <span className="font-bold ">Wind:</span>
              <p>
                &nbsp;{weather.current.wind_dir}{" "}
                {Math.round(weather.current.wind_mph)}&nbsp;mph
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-center pt-4 space-x-8">
          <button
            className="py-2 px-2 font-semibold rounded-lg shadow-md text-white bg-indigo-600 bg-opacity-25 hover:bg-indigo-200 active:bg-indigo-300 dark:bg-gray-300 dark:bg-opacity-25 dark:hover:bg-gray-200 dark:hover:bg-opacity-25 dark:active:bg-gray-300 text-center sm:text-left focus:outline-none  "
            type="submit"
            onClick={onBtnClick("hourly-btn")}
          >
            Hourly
          </button>
          <button
            className="py-2 px-2 font-semibold rounded-lg shadow-md text-white bg-indigo-600 bg-opacity-25 hover:bg-indigo-200 active:bg-indigo-300 
            dark:bg-gray-300 dark:bg-opacity-25 dark:hover:bg-gray-200 dark:hover:bg-opacity-25 dark:active:bg-gray-300 text-center sm:text-left focus:outline-none"
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
