import React, { useCallback, useEffect, useRef } from 'react';
import './styles.scss';

export const Modal = ({ isModalOpen, closeModal, children }) => {
  const modalRef = useRef(null);

  const handleOverlayClick = (e) => {
    if (e.target.id === 'modal-overlay') {
      closeModal();
    }
  };

  const handleClickOutside = useCallback(
    (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    },
    [closeModal]
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

  if (!isModalOpen) {
    console.log('not opened');
    return null;
  }

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
