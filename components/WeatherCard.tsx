import { WeatherData } from "../types/weather";

interface Props {
  data: WeatherData;
}

export default function WeatherCard({ data }: Props) {
  return (
    <div>
      <h2>{data.name}</h2>
      <p>Temperature: {data.main.temp}°C</p>
      <p>Humidity: {data.main.humidity}%</p>
      <p>Condition: {data.weather[0].description}</p>
    </div>
  );
}
