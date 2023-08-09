import { useState } from 'react'
import AddEntry from './components/AddEntry'
import ShowPersons from './components/ShowPersons'
import Filter from './components/Filter'

const App = () => {
  const [persons, setPersons] = useState([]) 
  
  const [filteredPersons, setFilteredPersons] = useState(persons)

  const personExist = (newPerson) => {
    return !!persons.find((person) => person.name.toLowerCase() === newPerson.name.toLowerCase())
  }

  // return true if entry added successfully
  const addNewEntry = (newPerson) =>{
    if(personExist(newPerson)){
      alert(`${newPerson.name} already exist in phonebook`);
      return false;
    }

    const newEntry = {id: persons.length, ...newPerson}
    setPersons(persons.concat(newEntry))
    setFilteredPersons(persons.concat(newEntry))
    return true;
  }

  return (
    <div>
      <Filter persons={persons} setFilteredPersons={setFilteredPersons} />
      <h2>Phonebook</h2>
      <AddEntry addNewEntry={addNewEntry} />
      <h2>Numbers</h2>
      <ShowPersons persons={filteredPersons} />
    </div> 
  )
}

export default App