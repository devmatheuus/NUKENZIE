import './style.css'
import empty from './images/empty.svg'
import ItemLista from '../ItemLista/ItemLista'

const Lista  = ({Empty,listTransactions, setFilterTransactions, setListTransactions, filterTransactions}) =>{ 

  const changeFilter  = (type) => setFilterTransactions(listTransactions.filter(({typeOption})=> typeOption === type))

  return(
    <div className='listaContainer'>
      {Empty ? (
        <img src={empty} alt="" className='img'/>  
      ) :
      (
        <>
          <div className='lista-cabecalho'>
          
            <div>
              <h2>Resumo Financeiro</h2>
            </div>
          
              <div className='botoesLista'>
                <button className='lista-botao' onClick={() => setFilterTransactions([])}>Todos</button>
                <button className='lista-botao' onClick={() => changeFilter('Entrada')}>Entradas</button>
                <button className='lista-botao' onClick={() => changeFilter('Despesa')}>Despesas</button>
              </div>
          
          </div>
          
          <ul className='lista'> 

          {(filterTransactions.length > 0 ? filterTransactions : listTransactions).map((item)=>(
            <ItemLista
            description={item.description}
            value={item.value}
            typeOption ={item.typeOption}
            key={item.id}
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
            item={item}
            setFilterTransactions={setFilterTransactions}
            />
          ))} 
          </ul>
    
        </>
      )
    
    }  
    </div>
  )
}
export default Lista