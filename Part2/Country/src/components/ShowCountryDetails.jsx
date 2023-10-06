/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { getCountryDetail } from "../api/get";

const ShowCountryDetails = ({name}) => {
  const [countryDetail, setCountryDetail] = useState(null);

  useEffect(() => {
    getCountryDetail(name)
      .then(data =>
        setCountryDetail(
          {
            name: data.name.common, // str
            capitals: data.capital, // array
            area: data.area, // number or str
            languages: data.languages, // obj
            flag: data.flags.png // image link
          }
        ))
  }, [])

  if(!name){
    return null;
  }

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
    </>
  )
}

export default ShowCountryDetails;