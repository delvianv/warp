const locationAPI = "http://api.openweathermap.org/geo/1.0/direct";
const weatherAPI = "https://api.openweathermap.org/data/2.5/weather";
const apiKey = process.env.API_KEY;

export async function fetchLocation(city: string) {
  const response = await fetch(
    `${locationAPI}?q=${city}&appid=${apiKey}&limit=5`
  );
  const data = await response.json();
  return data;
}

export async function fetchWeather(lat: number, lon: number) {
  const response = await fetch(
    `${weatherAPI}?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
  );
  const data = await response.json();
  return data;
}
