/* eslint-disable react/prop-types */
const ShowPersons = ({persons}) =>{

  return(
      <div>
        {persons.map((person) => (
          <p key={person.id}>{person.name} {person.number}</p>
        ))}
      </div>
  )
}

export default ShowPersons