/* eslint-disable react/prop-types */
import ShowCountryDetails from './ShowCountryDetails'
import { useState } from 'react'

const CountryName = ({name}) => {
  const [showDetail, setShowDetail] = useState(false);
  
  const handleShow = () =>{
    setShowDetail(!showDetail)
  }

  return(
    <>
      <p>{name}</p>
      {
        (showDetail)
        &&
          <ShowCountryDetails name={name} />
      }
      <button onClick={handleShow}>{(showDetail)?'Close':'Show'}</button>
    </>
  )
}

export default CountryName;