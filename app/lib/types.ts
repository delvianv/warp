export interface Location {
  name: string;
  state?: string;
  country: string;
  lat: number;
  lon: number;
}

export interface Weather {
  name: string;
  main: {
    temp: number;
  };
  weather: {
    main: string;
    description: string;
    icon: string;
  }[];
}

export interface LocationResponse {
  status: string;
  data: Location[] | string;
}

export interface WeatherResponse {
  status: string;
  data: Weather | string;
}
