import React from 'react';
import './styles.scss';
import { useApplicationContext } from '../../provider/ApplicationModal';
import { Modal } from '../../common/ui';
import { Applications } from '../Applications';

export const ConsultationCTA = () => {
  const { openModal, isModalOpen, closeModal } = useApplicationContext();

  return (
    <section className="consultation-cta container">
      <div>
        <h2>Чтобы получить консультацию, свяжитесь с нами</h2>
        <button onClick={openModal}>Связаться</button>
      </div>
      <Modal closeModal={closeModal} isModalOpen={isModalOpen}>
        <Applications />
      </Modal>
    </section>
  );
};
