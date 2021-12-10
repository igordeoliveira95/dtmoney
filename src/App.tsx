import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal';
import { useState } from 'react';
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";

Modal.setAppElement('#root');

export default function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal () {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal () {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard/>
      <Modal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
        >
          <h2>Cadastrar transação</h2>
        </Modal>
      <GlobalStyle/>
    </>
  );
}