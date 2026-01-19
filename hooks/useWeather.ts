import { useState } from "react";
import { WeatherData } from "../types/weather";
import { getWeatherByCity } from "../lib/weather";

export function useWeather() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeather = async (city: string) => {
    if (!city) return;

    setLoading(true);
    setError("");

    try {
      const data = await getWeatherByCity(city);
      setWeather(data);
    } catch {
      setError("City not found");
    } finally {
      setLoading(false);
    }
  };

  return { weather, loading, error, fetchWeather };
}