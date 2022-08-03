import { useState } from 'react';
import Header from './components/HeaderContainer/Header/Header';
import Logo from './components/HeaderContainer/Logo/Logo';
import ButtonLogout from './components/HeaderContainer/ButtonLogout/ButtonLogout';
import Main from './components/ContainerPrincipal/Main/Main';
import FormContainer from './components/ContainerPrincipal/FormContainer/FormContainer';
import Form from './components/ContainerPrincipal/Form/Form';
import Total from './components/ContainerPrincipal/Total/Total';
import Lista from './components/ContainerPrincipal/Lista/Lista';
import MainHome from './components/HomePage/Main/Main';
import SectionContainerImg from './components/HomePage/SectionContainerImg/SectionContainerImg';
import SectionContainerTextos from './components/HomePage/SectionContainerTextos/ContainerTextos';

function App() {
  const [listTransactions, setListTransactions] = useState([]);
  const [Empty, setEmpty] = useState(true);
  const [filterTransactions, setFilterTransactions] = useState([]);
  const [click, setClick] = useState(true);

  return (
    <>
      {click ? (
        <MainHome>
          <SectionContainerTextos setClick={setClick} />
          <SectionContainerImg />
        </MainHome>
      ) : (
        <>
          <Header>
            <Logo />
            <ButtonLogout setClick={setClick} />
          </Header>
          <Main>
            <FormContainer>
              <Form
                listTransactions={listTransactions}
                setListTransactions={setListTransactions}
                setEmpty={setEmpty}
                setFilterTransactions={setFilterTransactions}
              />
              <Total listTransactions={listTransactions} />
            </FormContainer>
            <Lista
              Empty={Empty}
              setFilterTransactions={setFilterTransactions}
              setListTransactions={setListTransactions}
              listTransactions={listTransactions}
              filterTransactions={filterTransactions}
            />
          </Main>
        </>
      )}
    </>
  );
}

export default App;
