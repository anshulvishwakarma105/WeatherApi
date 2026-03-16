import React from "react";
import { WiThermometer, WiHumidity, WiStrongWind } from "react-icons/wi";

export default function WeatherCard({ weather }) {

  const {
    name,
    main: { temp, humidity },
    weather: weatherInfo,
    wind,
  } = weather;

  const icon = weatherInfo[0].icon;
  const description = weatherInfo[0].description;
  const celsius = (temp - 273.15).toFixed(1);

  return (
    <div className="weatherCard">

      <h2 className="city">{name}</h2>

      <div className="weather-main">

        <img
          src={`https://openweathermap.org/img/wn/${icon}@4x.png`}
          alt="weather icon"
        />

        <div className="temperature">
          {celsius}°C
        </div>

      </div>

      <p className="weather-desc">{description}</p>

      <div className="weather-details">

        <div className="detail-box">
          <WiHumidity size={40} />
          <p>{humidity}%</p>
          <span>Humidity</span>
        </div> 

        <div className="detail-box">
          <WiStrongWind size={40} />
          <p>{wind.speed} m/s</p>
          <span>Wind</span>
        </div>

        <div className="detail-box">
          <WiThermometer size={40} />
          <p>{celsius}°C</p>
          <span>Temp</span>
        </div>

      </div>

    </div>
  );
}