/* eslint-disable react/prop-types */
import { useState } from 'react';
import ShowPersons from './ShowPersons';

const Filter = ({persons}) =>{
  
  const [searchName, setSearchName] = useState('');
  const [filteredPersons, setFilteredPersons] = useState([]);
  
  const handleSearchName = (event) =>{
    setSearchName(event.target.value);
    filterNames(event.target.value.toLowerCase().trim());
  }

  const filterNames = (name) =>{
    setFilteredPersons(persons.filter((person) => person.name.toLowerCase().includes(name)))
  }

  return(
    <div>
      <label>
        Filter: <input type='text' value={searchName} onChange={handleSearchName} />
      </label>
      <ShowPersons persons={filteredPersons} />
    </div>
  )
}

export default Filter