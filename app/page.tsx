"use client";

import { useEffect } from "react";
import { useWeather } from "../hooks/useWeather";
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";
import ErrorMessage from "../components/ErrorMessage";

export default function Home() {
  const { weather, loading, error, fetchWeather } = useWeather();

  // 🌦️ Change background based on weather
  useEffect(() => {
    if (!weather) return;

    const weatherType = weather.weather[0].main.toLowerCase();

    document.body.className = ""; // reset
    document.body.classList.add(`weather-${weatherType}`);
  }, [weather]);

  return (
    <main>
      <h1 className="app-title">🌦️Climate X - Powered By Ayush</h1>

      <div className="search-container">
        <SearchBar onSearch={fetchWeather} />
        {weather && (
          <button title="Refresh weather" onClick={() => fetchWeather(weather.name)}>
            🔄
          </button>
        )}
      </div>

      {loading && <p className="loading">Fetching weather data…</p>}

      {error && <ErrorMessage message={error} />}

      {weather && <WeatherCard data={weather} />}
    </main>
  );
}