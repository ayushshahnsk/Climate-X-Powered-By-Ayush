"use client";

import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import { useWeather } from "../hooks/useWeather";

export default function Home() {
  const { weather, loading, error, fetchWeather } = useWeather();

  return (
    <main style={{ padding: "2rem", maxWidth: "600px", margin: "auto" }}>
      <h1>Ayush Climate X 🌦️</h1>

      <SearchBar onSearch={fetchWeather} />

      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {weather && <WeatherCard data={weather} />}
    </main>
  );
}
