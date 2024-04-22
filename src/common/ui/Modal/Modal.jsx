import React from 'react';
import './styles.scss';

export const Modal = ({ isModalOpen, closeModal, children }) => {
  if (!isModalOpen) {
    console.log('not opened');
    return null;
  }

  const handleOverlayClick = (e) => {
    if (e.target.id === 'modal-overlay') {
      closeModal();
    }
  };

  return (
    <>
      <div
        id="modal-overlay"
        className="modal fixed inset-0 flex justify-center items-center px-4 z-30"
        onClick={handleOverlayClick}
      >
        <div className="w-full">{children}</div>
      </div>
    </>
  );
};
