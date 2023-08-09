/* eslint-disable react/prop-types */
import { useState } from 'react'

const Filter = ({persons, setFilteredPersons}) =>{
  
  const [searchName, setSearchName] = useState('');

  const handleSearchName = (event) =>{
    setSearchName(event.target.value);
    filter(event.target.value.toLowerCase());
  }

  const filter = (name) =>{
    const finalPersons = []
    persons.forEach((person) => {

        if(person.name.toLowerCase().includes(name)){
          (finalPersons.push(person));
        }
    })
    console.log("finalPersons",finalPersons)
    console.log(finalPersons)
    setFilteredPersons(finalPersons)
  }

  return(
    <div>
      <label>
        Filter: <input type='text' value={searchName} onChange={handleSearchName} />
      </label>
    </div>
  )
}

export default Filter