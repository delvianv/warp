const locationAPI = "http://api.openweathermap.org/geo/1.0/direct";
const apiKey = process.env.API_KEY;

export async function fetchLocation(city: string) {
  const response = await fetch(
    `${locationAPI}?q=${city}&appid=${apiKey}&limit=5`
  );
  const data = await response.json();
  return data;
}
