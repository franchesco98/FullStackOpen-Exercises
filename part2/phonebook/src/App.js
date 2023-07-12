import React, { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-1234567' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filter, setFilter ] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const names = persons.map(person => person.name)
    
    if(names.includes(newName)) {
      alert(`${newName} is already added to phonebook`)
      return
    }
    
    const newPerson = {
      name: newName,
      number: newNumber
    }

    setPersons([
      ...persons,
      newPerson
    ])
    setNewName('')
    setNewNumber('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} onChange={(event) => setFilter(event.target.value)}/>
      
      <h2>Add a new</h2>
      <PersonForm 
        name={newName} 
        number={newNumber} 
        onSubmit={addPerson}
        onChangeName={(event) => setNewName(event.target.value)}
        onChangeNumber={(event) => setNewNumber(event.target.value)}/> 
      
      <h2>Numbers</h2>
      <Persons filter={filter} persons={persons} />
    </div>
  )
}

export default App