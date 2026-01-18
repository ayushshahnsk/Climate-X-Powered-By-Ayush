import { WeatherData } from "../types/weather";
import WeatherIcon from "./WeatherIcon";

interface Props {
  data: WeatherData;
}

function formatTime(unix: number, tz: number) {
  return new Date((unix + tz) * 1000).toUTCString().slice(17, 22);
}

export default function WeatherCard({ data }: Props) {
  return (
    <div className="weather-card">
      {/* Header */}
      <div className="weather-header">
        <div>
          <h2>{data.name}</h2>
          <p className="condition">
            {data.weather[0].description.toUpperCase()}
          </p>
        </div>
        <WeatherIcon icon={data.weather[0].icon} />
      </div>

      {/* Temperature */}
      <div className="temp">
        {Math.round(data.main.temp)}°C
      </div>

      {/* Min / Max */}
      <div className="minmax">
        <span>⬆ {Math.round(data.main.temp_max)}°</span>
        <span>⬇ {Math.round(data.main.temp_min)}°</span>
      </div>

      {/* Stats Grid */}
      <div className="weather-grid">
        <Stat label="Feels Like" value={`${Math.round(data.main.feels_like)}°C`} />
        <Stat label="Humidity" value={`${data.main.humidity}%`} />
        <Stat label="Pressure" value={`${data.main.pressure} hPa`} />
        <Stat label="Wind Speed" value={`${data.wind.speed} m/s`} />
        <Stat label="Wind Dir" value={`${data.wind.deg}°`} />
        <Stat label="Visibility" value={`${data.visibility / 1000} km`} />
      </div>

      {/* Sun */}
      <div className="sun">
        <div>🌅 Sunrise: {formatTime(data.sys.sunrise, data.timezone)}</div>
        <div>🌇 Sunset: {formatTime(data.sys.sunset, data.timezone)}</div>
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="stat">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}