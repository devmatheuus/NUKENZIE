import './style.css'

const ButtonLogout = ({setClick}) =>{
  
  const handleClick = () => setClick(true)
  
  return(
    <button onClick={handleClick} className='button'>Inicio</button>
  )
}
export default ButtonLogout