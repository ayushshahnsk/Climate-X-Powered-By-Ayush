interface Props {
  icon: string;
}

export default function WeatherIcon({ icon }: Props) {
  return (
    <img
      src={`/icons/weather/${icon}.png`}
      alt="weather icon"
      width={50}
      height={50}
    />
  );
}
