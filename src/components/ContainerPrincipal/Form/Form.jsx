import { useState } from 'react';
import './style.css';

const Form = ({
  listTransactions,
  setListTransactions,
  setEmpty,
  setFilterTransactions
}) => {
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const [typeOption, setTypeOption] = useState('');
  const [counter, setCounter] = useState(0);

  const handleListTransaction = e => {
    if (description && value && typeOption !== '' && description !== 'Tipo') {
      if (typeOption === 'Despesa') {
        const LIST = {
          description,
          value: Number(-value),
          typeOption,
          id: counter
        };
        setListTransactions([...listTransactions, LIST]);
        setEmpty(false);
      } else {
        const LIST = {
          description,
          value: Number(value),
          typeOption,
          id: counter
        };

        setListTransactions([...listTransactions, LIST]);
        setEmpty(false);
      }
    }

    setCounter(counter + 1);
    setFilterTransactions([]);
  };

  return (
    <form className="form">
      <label htmlFor="description">Descrição</label>
      <input
        required
        type="text"
        name="description"
        placeholder="Digite aqui sua descrição"
        maxLength={33}
        onChange={event => setDescription(event.target.value)}
      />
      <small>Ex: Compra de roupas</small>

      <label htmlFor="valor">Valor</label>
      <div className="containerCentral">
        <div className="containerValor">
          <input
            required
            name="valor"
            type="number"
            placeholder="1"
            onChange={event => setValue(event.target.value)}
          />
          <p>R$</p>
        </div>

        <div className="containerOpcoes">
          <select
            required
            name="escolha"
            onChange={event => setTypeOption(event.target.value)}
          >
            <option>Entrada</option>
            <option>Despesa</option>
          </select>
        </div>
      </div>
      <button onClick={e => handleListTransaction} className="buttonForm">
        Inserir Valor
      </button>
    </form>
  );
};
export default Form;
