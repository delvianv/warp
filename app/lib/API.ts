const locationAPI = "http://api.openweathermap.org/geo/1.0/direct";
const weatherAPI = "https://api.openweathermap.org/data/2.5/weather";
const apiKey = process.env.API_KEY;

const icons = "https://openweathermap.org/img/wn";

interface Location {
  name: string;
  state: string;
  country: string;
  lat: number;
  lon: number;
}

export async function fetchLocation(city: string) {
  const response = await fetch(
    `${locationAPI}?q=${city}&appid=${apiKey}&limit=5`
  );
  const data: Location[] = await response.json();
  return data;
}

interface Weather {
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

export async function fetchWeather(lat: number, lon: number) {
  const response = await fetch(
    `${weatherAPI}?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
  );
  const data: Weather = await response.json();
  return data;
}

export function fetchIcon(icon: string) {
  return `${icons}/${icon}@2x.png`;
}
