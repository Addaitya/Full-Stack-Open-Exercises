/* eslint-disable react/prop-types */
import { useState } from "react";

const AddEntry = ({addNewEntry}) => {
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleName = (event) =>{
    setNewName(event.target.value)
  }

  const handleNewNumber = (event) =>{
    setNewNumber(event.target.value)
  }

  const handleAddPerson = (event) =>{
    event.preventDefault();

    const newPerson ={
      name: newName,
      number: newNumber,
    }

    if(addNewEntry(newPerson)){
      setNewName('')
      setNewNumber('')
    }
  }

  return(
    <div>
      <form onSubmit={handleAddPerson}>
        <label>
          Name: <input type='text' value={newName} onChange={handleName} />
        </label>

        <br /><br />

        <label>
          Phone No: <input type='text' value={newNumber} onChange={handleNewNumber} />
        </label>

        <br /><br />

        <button type="submit">Add</button>
      </form>
    </div>
  )
}

export default AddEntry;