import React from "react";
import moment from "moment";

function Forecast({ weather }) {
  return (
    <div className="container inline-flex place-content-center text-center gap-4 pt-4">
      {weather.forecast.forecastday.map((day, idx) => {
        return (
          <div
            //how to add a fixed size to these divs
            //find a way to make text smaller when on mobile
            className="transition duration-500 ease-in-out  p-2 md:p-4 rounded-md border-4 h-auto w-auto  md:h-48 md:w-48 border-blue-500 border-opacity-25 hover:border-indigo-400 relative border-opacity-25 hover:shadow-md text-sm md:text-lg transform hover:-translate-y-1 hover:scale-110"
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
