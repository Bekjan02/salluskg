import { useContext, useState } from 'react';
import { createContext } from 'react';

const ApplicationContext = createContext(null);

export const useApplicationContext = () => {
  const context = useContext(ApplicationContext);
  if (!context) {
    console.log('Ничего нет');
  }
  return context;
};

export const ApplicationProvider = ({ children }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <ApplicationContext.Provider value={{ isModalOpen, openModal, closeModal }}>
      {children}
    </ApplicationContext.Provider>
  );
};
