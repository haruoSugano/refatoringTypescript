import { useState } from 'react';
import { Header } from './components/Header';
import { NewFoodModal } from './components/Modal';
import { Dashboard } from './pages/Dashboard';

import GlobalStyle from './styles/global';

export function App() {

  const [isNewFoodModalOpen, setIsNewFoodModalOpen] = useState(false);

  function handleOpenNewFoodModal() {
    setIsNewFoodModalOpen(true);
  }

  function handleCloseNewFoodModal() {
    setIsNewFoodModalOpen(false);
  }

  return (
    <>
      <Header onOpenNewFoodModal={handleOpenNewFoodModal}/>
      <Dashboard />
      <NewFoodModal 
        isOpen={isNewFoodModalOpen}
        onRequestClose={handleCloseNewFoodModal}
      />
      <GlobalStyle />
    </>
  );
}
