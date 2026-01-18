export interface WeatherData {
  name: string;
  timezone: number;

  coord: {
    lat: number;
    lon: number;
  };

  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
    pressure: number;
  };

  visibility: number;

  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];

  wind: {
    speed: number;
    deg: number;
  };

  sys: {
    sunrise: number;
    sunset: number;
  };
}