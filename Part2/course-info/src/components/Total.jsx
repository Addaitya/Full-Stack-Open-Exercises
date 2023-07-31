/* eslint-disable react/prop-types */
const Total = ({parts}) => {
  const total = parts.reduce((sum, part) => sum + part.exercises, 0)
  
  return(
    <div style={{fontWeight: "bold"}}>Total of {total} exercises</div>
  )
}

export default Total