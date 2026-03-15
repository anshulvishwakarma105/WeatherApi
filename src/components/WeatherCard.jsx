import React from 'react'
import { WiThermometer, WiHumidity, WiStrongWind } from "react-icons/wi";

export default function WeatherCard({ weather }) {
    const {
        name,
        main: { temp, humidity },
        weather: weatherInfo,
        wind,
    } = weather;
    const icon = weatherInfo[0].icon;
    const celsius = (temp - 273.15).toFixed(2);


    return (
        <div className='weatherCard'>
            <h2>{name}</h2>
            <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="weather icon" />
            <h3>{weatherInfo[0].main}</h3>
            <p><WiThermometer /> Teamprature: {celsius}°C</p>
            <p> <WiHumidity /> Humidity: {humidity}%</p>
            <p> <WiStrongWind /> Wind Speed: {wind.speed}m/s</p>
        </div>
    );
}
