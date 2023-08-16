import React from "react";
import { useState, useEffect } from "react";
import Clear from "./image/Clear.png";
import Cloudy from "./image/Cloudy.png";
import LightRain from "./image/LightRain.png";
import PartlyCloudy from "./image/PartlyCloudy.png";

import speed from "./image/speed.png";
import Pressure from "./image/Pressure.png";
import Humidity from "./image/Humidity.png";

import "./Weather.css";

const Weather = ({ formattedDate, formattedFutureDateTime }) => {
  const [weatherData, setWeatherData] = useState(null);
  const apiKey = "16204f83111c4fed9e691403231408";
  const city = "Agra";

  useEffect(() => {
    fetch(
      `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`
    )
      .then((response) => response.json())
      .then((data) => setWeatherData(data))
      .catch((error) => console.error("Error fetching weather data:", error));
  }, []);

  const weatherIcons = {
    "Partly cloudy": "PartlyCloudy.png",
    Clear: "Clear.png",
    Cloudy: "Cloudy.png",
    "Light rain": "LightRain.png",
    // Add more mappings as needed
  };

  const getWeatherIcon = (condition) => {
    const iconFileName = weatherIcons[condition];
    if (iconFileName) {
      switch (iconFileName) {
        case "Clear.png":
          return Clear;
        case "Cloudy.png":
          return Cloudy;
        case "PartlyCloudy.png":
          return PartlyCloudy;
        case "LightRain.png":
          return LightRain;

        default:
          return null;
      }
    }
    return null;
  };

  return (
    <div>
      <div className="Date">
        <p className="date_format">{formattedDate}</p>
        <p className="time_format"> {formattedFutureDateTime}</p>
      </div>
      <div className="">
        {weatherData && (
          <div className="weather_info">
            <div>
              <p className="temp">{weatherData.current.temp_c}°C</p>
              <p className="pressure">{weatherData.current.pressure_mb}</p>
              <img src={Pressure} alt="not found" />
            </div>
            <div>
              <p className="condition"> {weatherData.current.condition.text}</p>
              <img className="view"
                src={getWeatherIcon(weatherData.current.condition.text)}
                alt="Weather Icon"
              />
            </div>
            <div>
              <p className="humidity">{weatherData.current.humidity}</p>
              <img src={Humidity} alt="" />
              <p className="speed"> {weatherData.current.wind_kph}</p>
              <img src={speed} alt="" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;
