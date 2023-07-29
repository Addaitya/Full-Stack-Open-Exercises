const Header = (props) =>{
  return(
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  return(
    <div>
      <p>{props.part} {props.exercises}</p>
    </div>
  )
}

const Content = ({parts}) =>{
  const p = parts.map(part => (
    <Part key={part.id} part={part.name} exercises={part.exercises} />
  ));

  return(
    <div>
      {p}
    </div>
  )
}

const Total = ({parts}) => {
  let total = 0;

  parts.forEach(part => (
    total += part.exercises
  ))
  return(
    <div>
      <p>{total}</p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        id: 0,
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        id: 1,
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        id: 2,
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App;
