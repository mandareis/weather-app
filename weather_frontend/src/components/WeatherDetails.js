import React, { useEffect, useState } from "react";
import Forecast from "./Forecast";
import HourlyWeather from "./HourlyWeather";
import moment from "moment";

function WeatherDetails({ weather }) {
  const [defaultBtn, setDefaultBtn] = useState("hourly-btn");
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
    <div className="container lg:inline-flex gap-8">
      {/* border-blue-500 */}
      <div className=" container mx-auto text-blue-800 border-2 border-white border-opacity-25 shadow-md bg-indigo-200 md:w-3/5 rounded-lg p-8 text-center">
        <p className="font-bold">
          {weather.location.name}, {weather.location.country}
        </p>
        <p>{weather.current.condition.text}</p>
        <p>{moment(weather.location.localtime).format("LLLL ")}</p>
        <div className="grid grid-rows-2 ">
          <div className=" flex inline-flex place-content-center gap-10">
            <div className="">
              <span className="font-bold"> Current: </span>
              <p>
                {weather.current.temp_f}&#176;F / {weather.current.temp_c}
                &#176;C{" "}
              </p>
            </div>
            <div className="">
              <span className="font-bold">Feels like:</span>
              <p>
                {Math.round(weather.current.feelslike_f)}&#176;F /{" "}
                {Math.round(weather.current.feelslike_c)}&#176;C &nbsp;
              </p>
            </div>
          </div>
          <div className=" flex inline-flex place-content-center gap-10">
            <div>
              <span className="font-bold">Humidity:</span>
              <p>{weather.current.humidity}%</p>
            </div>
            <div>
              <span className="font-bold ">Wind:</span>
              <p>
                &nbsp;&nbsp;{weather.current.wind_dir}{" "}
                {Math.round(weather.current.wind_mph)}mph
              </p>
            </div>
          </div>
        </div>
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
