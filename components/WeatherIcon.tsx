interface Props {
  icon: string;
}

export default function WeatherIcon({ icon }: Props) {
  return (
    <img
    className="weather-icon"   // ✅ ADD THIS
      src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
      alt="weather icon"
      width={50}
      height={50}
      style={{ objectFit: "contain" }}
    />
  );
}