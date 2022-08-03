import './style.css'
import trash from'./images/trash.svg'

const ItemLista = ({description, value, typeOption, listTransactions, setListTransactions, item, setFilterTransactions}) =>{

    const handleItem = (itens) =>{
    setListTransactions([...listTransactions.filter(elemento=> elemento !== itens)]);
    setFilterTransactions([])
  }
  return(
    <>
      <li  
       className='listItem'
       style= {{borderLeftColor: typeOption === 'Entrada' ? "#03b898" : "#E9ECEF"}}
       >
        <div className='textos'>
          <h2>{description}</h2>
          <p>{typeOption}</p>
        </div>

        <div className='valorList'>
          <p>R$ {value}</p>
          <img onClick={() => handleItem(item)} src={trash} alt="lixeira" />
        </div>
      </li>
    
    </>
  )
}
export default ItemLista