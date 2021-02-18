import React from "react";
import moment from "moment";

function Forecast({ weather }) {
  return (
    <div className="container mx-auto inline-flex space-x-6">
      {weather.forecast.forecastday.map((day, idx) => {
        return (
          <div
            //how to add a fixed size to these divs
            //find a way to make text smaller when on mobile
            className="p-4 box-content border-2"
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
