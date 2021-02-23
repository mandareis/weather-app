import React from "react";
import moment from "moment";

function Forecast({ weather }) {
  return (
    <div
      className="container inline-flex place-content-center text-center  md:pt-14 "
      //   style={{ marginLeft: "0.5rem" }}
    >
      {weather.forecast.forecastday.map((day, idx) => {
        return (
          <div
            className="transition duration-500 ease-in-out p-2 md:p-4 rounded-md border-4 h-42 w-full md:h-48 md:w-48 border-blue-500 border-opacity-25 hover:border-indigo-400 border-opacity-25 dark:border-gray-500 dark:opacity-25 dark:hover:border-gray-400 shadow-md text-xs sm:text-lg text-blue-800 dark:text-white transform hover:-translate-y-1 hover:scale-110 hover:bg-white hover:bg-opacity-25 dark:hover:bg-gray-200 dark:hover:bg-opacity-25 "
            style={{
              marginLeft: "1rem",
            }}
            key={idx}
          >
            <p>{moment(day.date).format("ddd DD ")}</p>
            <p>
              {day.day.avgtemp_f}&#176;F / {Math.round(day.day.avgtemp_c)}
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
