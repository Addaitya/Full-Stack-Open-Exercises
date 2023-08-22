/* eslint-disable react/prop-types */
const Notification = ({msg, makeMsgNull}) =>{
  
  const style = {
    color: 'green',
    background: 'lightgrey',
    border: 'solid 2px green',
    fontSize: '20px',
    width: '60%',
    position: 'fixed',
    top: '2rem',
    left: '20%',
    borderRadius: '10px',
    textAlign: 'center'
  }
  if (msg === null){
    return null
  }

  setTimeout(makeMsgNull, 3000)
  return(
    <p style={style}>{msg}</p>
  )
}

export default Notification;