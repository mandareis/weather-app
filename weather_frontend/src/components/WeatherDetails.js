import React from "react";

function WeatherDetails({ currentCondition }) {
  console.log(currentCondition);

  return (
    <div>
      <div className="current-cond-container">
        <p>
          {currentCondition.name},{currentCondition.sys.country}
        </p>
        <p>{currentCondition.weather[0].description}</p>
        <p>Local Time will go here {currentCondition.dt}</p>
        <p>Current: {Math.round(currentCondition.main.temp)}&#176;</p>
        <p>
          Feels like: {Math.round(currentCondition.main.feels_like)}
          &#176; &nbsp; Low: {Math.round(currentCondition.main.temp_min)}&#176;
          &nbsp; High: {Math.round(currentCondition.main.temp_max)}&#176;
        </p>
        <p>Humidity: {currentCondition.main.humidity}%</p>
        <p>Wind: {Math.round(currentCondition.wind.speed)} mph</p>
      </div>
    </div>
  );
}

export default WeatherDetails;
