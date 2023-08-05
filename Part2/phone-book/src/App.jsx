import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')

  const handleName = (event) =>{
    setNewName(event.target.value)
  }

  const addName = (event) => {
    event.preventDefault()
    const newPerson = {
      name: newName,
      id: persons.length
    }
    setPersons(persons.concat(newPerson))
    setNewName('')
    console.log(persons.concat(newPerson))
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input type="text" value={newName} onChange={handleName}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map((person) => (
          <p key={person.id}>{person.name}</p>
        ))}
      </div>
    </div>
  )
}

export default App