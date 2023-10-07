/* eslint-disable react/prop-types */
import CountryName from "./CountryName";

const ShowCountryNames = ({countryNames}) => {
  if(!countryNames){
    return null;
  }
  return(
    <>
      {
        (countryNames.length > 10)
          ?
          <p>Too many matches, specify another filter...</p>
          :
            (countryNames.length > 1)
              ?
              countryNames.map(countryName => (<CountryName key={countryName} name={countryName} />))
              :
              <p>No match found...</p>  
      }
    </>
  );

}

export default ShowCountryNames;