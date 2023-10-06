/* eslint-disable react/prop-types */
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
              countryNames.map(countryName => (<p key={countryName}>{countryName}</p>))
              :
              <p>No match found...</p>  
      }
    </>
  );

}

export default ShowCountryNames;