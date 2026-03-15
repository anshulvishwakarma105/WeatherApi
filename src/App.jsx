import React, { useState } from 'react'
import SearchBar from "./components/SearchBar";
import Loader from "./components/Loader";
import WeatherCard from "./components/WeatherCard";
import CurrentDateTime from "./components/CurrentDateTime";
import WeatherNews from "./components/weatherNews";
import "./App.css"

const API_KEY = "be37f7b03fc238aaf8ad280a6addc066"

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeather = async (city) => {
    try {
      setLoading(true);
      setError('');

      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}`
      );

      if (!res.ok) {
        throw new Error("City Not Found");
      }

      const data = await res.json();
      setWeather(data);

    } catch (err) {
      setWeather(null);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className='app'>
      <div className="header">
        <h1>Weather App</h1>
        <CurrentDateTime />
      </div>

      <SearchBar onSearch={fetchWeather} />

      <div className="weather-section">
        {loading && <Loader />}
        {error && <p className="error">{error}</p>}
        {weather && <WeatherCard weather={weather} />}
      </div>

      {weather && <WeatherNews city={weather.name} />}

    </div>
  )
}

export default App