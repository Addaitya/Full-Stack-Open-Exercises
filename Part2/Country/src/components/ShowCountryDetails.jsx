/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { getCountryDetail, getWeatherDetails } from "../api/get";

const ShowCountryDetails = ({name}) => {
  const [countryDetail, setCountryDetail] = useState(null);
  const [weatherDetail, setWeatherDetail] = useState(null);

  useEffect(() => {
      getCountryDetail(name)
        .then(data =>
          setCountryDetail(
            {
              name: data.name.common, // str
              capitals: data.capital, // array
              area: data.area, // number or str
              languages: data.languages, // obj
              flag: data.flags.png, // image link
            }
          ))
  }, []);

  // For loading weather detail of the country
  useEffect(() => {
    if(countryDetail){
      getWeatherDetails(countryDetail.capitals[0])
        .then(data => {
          setWeatherDetail(
            {
              city:  data.name,
              temperature: data.main.temp, // str or int
              icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`, // str icon link
              windSpeed: data.wind.speed // str or int
            }
          );
        })
    }
  }, [countryDetail]);

  return(
    <>
      {
          (!countryDetail)
            ?
            <p>Loading country details...</p>
            :
            <div>
              <h1>{countryDetail.name}</h1>
              <div>
                Capital:
                {countryDetail.capitals.map(capital => (<p key={capital}> {capital} </p>))}
              </div>
              <p>Area: {countryDetail.area}</p>
              <h2>Languages:</h2>
              <ul>
                {Object.keys(countryDetail.languages).map(key => (<li key={key}>{countryDetail.languages[key]}</li>))}
              </ul>
              <img src={countryDetail.flag} />
            </div>
      }
      {/* Shows weather details */}
      {
        (countryDetail)
        &&
          (
            (!weatherDetail)
            ?
            <h2>Weather loading...</h2>
            :
            <div>
              <h2>Weather in {weatherDetail.city}</h2>
              <p>Temperature: {weatherDetail.temperature} Celsius</p>
              <img src={weatherDetail.icon} />
              <p>Wind: {weatherDetail.windSpeed}</p>
            </div>
          )
      }
    </>
  )
}

export default ShowCountryDetails;