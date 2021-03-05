import React from "react";
import moment from "moment";

function Forecast({ weather }) {
  return (
    <div className="container inline-flex text-center place-content-center space-x-5 ">
      {weather.forecast.forecastday.map((day, idx) => {
        return (
          <div
            className="transition duration-500 py-2 ease-in-out rounded-md border-4 md:h-full w-4/5 lg:h-60 xl:h-60 border-blue-500 border-opacity-25 hover:border-indigo-400 border-opacity-25 dark:border-gray-500 dark:opacity-25 dark:hover:border-gray-400 shadow-md text-xs md:text-lg text-blue-800 dark:text-white transform hover:-translate-y-1 hover:scale-110 hover:bg-white hover:bg-opacity-25 dark:hover:bg-gray-200 dark:hover:bg-opacity-25 lg:ml-6"
            key={idx}
          >
            <div className="flex place-content-center">
              <img
                src={day.day.condition.icon}
                alt="icon"
                style={{ height: "60px" }}
              />
            </div>
            <p>{moment(day.date).format("ddd DD ")}</p>
            <p>
              {Math.round(day.day.avgtemp_f)}&#176;F /{" "}
              {Math.round(day.day.avgtemp_c)}
              &#176;C
            </p>
            <p>{day.day.condition.text}</p>
            <p>Rain: {day.day.daily_chance_of_rain}%</p>
            <p>Wind: {Math.round(day.day.maxwind_mph)} mph</p>
          </div>
        );
      })}
    </div>
  );
}
export default Forecast;
