import { useState, useEffect } from 'react';
import AddEntry from './components/AddEntry';
import ShowPersons from './components/ShowPersons';
import handleBackend from './service/handleBackend';
import Filter from './components/Filter'; 

const App = () => {
  const [persons, setPersons] = useState([]) 
  
  const personExist = (newPersonName) => {
    const oldPerson = persons.find((person) => person.name.toLowerCase() === newPersonName.toLowerCase());
    if(oldPerson != undefined){
      return oldPerson.id;
    }
    return -1;
  }

  // true means person updated.
  const updatePerson = (newPerson, id) =>{
    if(window.confirm(`${newPerson.name} already exit, replace old number with new?`)){
      handleBackend
        .update(newPerson, id)
        .then((includePerson) => setPersons(persons.map((person) => (person.id === includePerson.id)?includePerson: person)))
        .catch(error => console.log(`Error in updating person ${error}`));
      return true;
    }
    return false;
  }
  // return true if entry added successfully
  const addNewEntry = (newPerson) =>{

    const oldPersonId = personExist(newPerson.name);
    if(oldPersonId >= 0){
      return updatePerson(newPerson, oldPersonId)
    }

    handleBackend
      .addPerson(newPerson)
      .then((includePerson) => setPersons(persons.concat(includePerson)))
      .catch(error => console.log(`Error in adding new Person ${error}`));

    return true;
  }

  const deletePerson = (id) =>{
    const toDeletePerson = persons.find((person) => person.id === id)

    if(!window.confirm(`Delete ${toDeletePerson.name} ?`)){
      return;
    }
    
    handleBackend
      .del(id)
      .then(() => {
        setPersons(persons.filter((person) => person.id !== id))
      })
      .catch(error => console.log(`Error in backend deletion ${error}\n `))
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
      <ShowPersons persons={persons} deletePerson={deletePerson}/>
    </div> 
  )
}

export default App