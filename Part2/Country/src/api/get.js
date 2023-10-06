import axios from "axios";

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

export {getCountryNames, getCountryDetail}