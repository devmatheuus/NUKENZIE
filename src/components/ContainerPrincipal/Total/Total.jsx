import './style.css'
const Total = ({listTransactions}) =>{

  return (
    <div className='containerTotal'>
      <div className="textos">
        <h2>Valor Total</h2>
        <p>O valor se refere ao saldo</p>
      </div>

      <div className='valor'>
        <h2>R$ {listTransactions.reduce((acc, {value})=> acc + value, 0)}</h2>
      </div>
    </div>
  )
}
export default Total