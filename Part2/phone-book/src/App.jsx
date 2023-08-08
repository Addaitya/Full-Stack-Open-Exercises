import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newPhoneNo, setNewPhoneNo] = useState('')

  const handleName = (event) =>{
    setNewName(event.target.value)
  }

  const personExist = (persons, newName) => {
    return !!persons.find((person) => person.name.toLowerCase() === newName.toLowerCase())
  }

  const handlePhoneNo = (event) =>{
    setNewPhoneNo(event.target.value)
  }

  const addName = (event) => {
    event.preventDefault();
    if(personExist(persons, newName)){
      alert(`${newName} is already added to phonebook`);
      return;
    }

    const newPerson = {
      name: newName,
      phoneNo: newPhoneNo
    }
    
    setPersons(persons.concat(newPerson))
    setNewName('')
    setNewPhoneNo('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input type="text" value={newName} onChange={handleName}/>
        </div>
        <br />
        <div>
          phone no: <input type="text" value={newPhoneNo} onChange={handlePhoneNo}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map((person) => (
          <p key={person.name}>{person.name} {person.phoneNo}</p>
        ))}
      </div>
    </div>
  )
}

export default App