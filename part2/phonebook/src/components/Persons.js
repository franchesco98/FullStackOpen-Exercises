const Persons = ({ filter, persons }) => {
    return (
        <>
            {filter !== '' ? 
                persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
                    .map(person => <Person person={person} />): 
                persons.map(person => <Person person={person} />)
            }
        </>
    )
}

const Person = ({ person }) => {
    return (
        <div key={person.name}>{person.name} {person.number}</div>
    )
}

export default Persons