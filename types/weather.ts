export interface WeatherData {
  name: string;

  main: {
    temp: number;
    humidity: number;
    feels_like: number;
  };

  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];

  wind: {
    speed: number;
  };
}
