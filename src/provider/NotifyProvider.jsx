import { createContext, useContext, useState } from 'react';

const NotifyContext = createContext(null);

export const useNotify = () => {
  const context = useContext(NotifyContext);
  if (!context) {
    console.log('Ничего нет');
  }
  return context;
};

export const NotifyProvider = ({ children }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  return (
    <NotifyContext.Provider value={{ isModalOpen, openModal, closeModal }}>
      {children}
    </NotifyContext.Provider>
  );
};
