import { WeatherData } from "../types/weather";
import { WEATHER_API_URL } from "./constants";

const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

if (!API_KEY) {
  throw new Error("Missing OpenWeather API key");
}

export async function getWeatherByCity(
  city: string
): Promise<WeatherData> {
  const response = await fetch(
    `${WEATHER_API_URL}?q=${city}&appid=${API_KEY}&units=metric`
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to fetch weather");
  }

  return data;
}
