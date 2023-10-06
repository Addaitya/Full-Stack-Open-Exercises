import { useEffect, useState } from 'react'
import { getCountryNames } from "./api/get"
import ShowCountryNames from './components/ShowCountryNames';
import ShowCountryDetails from './components/ShowCountryDetails';

function App() {
  const [countryNames, setCountryNames] = useState(null);
  const [searchValue, setSearchValue] = useState('');
  const [filteredCountries, setFilteredCountries] = useState(null);

  useEffect(() => {
    getCountryNames()
      .then(countries => setCountryNames(countries.map(country => country.name.common)));
  }, [])

  const handleSearch = (event) => {
    setSearchValue(event.target.value);
    filterCountryNames(event.target.value);
  }
  
  const clearSearch = () => {
    setSearchValue('');
    filterCountryNames('');
  }

  const filterCountryNames = (name) => {
    if(name === ''){
      setFilteredCountries(null);
      return;
    }
    name = name.toLowerCase();
    const countries = countryNames.filter(countryName =>  countryName.toLowerCase().includes(name))
    setFilteredCountries(countries);
  }
  
  return(
    <>
      <label>
        find countries <input type='text' placeholder='Search...' value={searchValue} onChange={handleSearch} />
      </label>
      <button onClick={clearSearch}>Clear</button>
      {
        (filteredCountries && filteredCountries.length === 1)
          ?
          <ShowCountryDetails name={filteredCountries[0]} /> 
          :
          <ShowCountryNames countryNames={filteredCountries} />
      }
    </>
  )
}

export default App
