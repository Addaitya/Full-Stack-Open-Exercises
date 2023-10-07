import axios from "axios";
const apikey = import.meta.env.VITE_WEATHER_KEY;

const url = axios.create(
  {
    baseURL: "https://studies.cs.helsinki.fi/restcountries/api"
  }
)

const getCountryNames = () => {
  const request = url.get('/all');
  return request.then(response => response.data);
}

const getCountryDetail = (name) => {
  const request = url.get(`/name/${name}`);
  return request.then(response => response.data)
}

const getWeatherDetails = (cityName) => {
  const request = axios(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apikey}`)
  return request.then(response =>  response.data)
}
export {getCountryNames, getCountryDetail, getWeatherDetails}