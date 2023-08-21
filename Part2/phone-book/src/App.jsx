import { useState, useEffect } from 'react';
import AddEntry from './components/AddEntry';
import ShowPersons from './components/ShowPersons';
import handleBackend from './service/handleBackend';
import Filter from './components/Filter'; 

const App = () => {
  const [persons, setPersons] = useState([]) 
  

  const personExist = (newPerson) => {
    return !!persons.find((person) => person.name.toLowerCase() === newPerson.name.toLowerCase())
  }

  // return true if entry added successfully
  const addNewEntry = (newPerson) =>{
    if(personExist(newPerson)){
      alert(`${newPerson.name} already exist in phonebook`);
      return false;
    }

    handleBackend
      .addPerson(newPerson)
      .then((includePerson) => setPersons(persons.concat(includePerson)))

    return true;
  }
   
  useEffect(() => {
    handleBackend
      .getPersons()
      .then((includePersons) => setPersons(includePersons))
  }, [])

  return (
    <div>
      <Filter persons={persons} />
      <h2>Phonebook</h2>
      <AddEntry addNewEntry={addNewEntry} />
      <h2>Numbers</h2>
      <ShowPersons persons={persons} />
    </div> 
  )
}

export default App