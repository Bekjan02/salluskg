import React from 'react';
import './styles.scss';
import { useApplicationContext } from '../../provider/ApplicationModal';
import { Modal } from '../../common/ui';
import { Applications } from '../Applications';

export const ConsultationCTA = () => {
  const { openModal, isModalOpen, closeModal } = useApplicationContext();

  return (
    <section className="consultation-cta">
      <div className="container">
        <div className="px-4 lg-md:flex gap-8 items-end">
          <h2>Чтобы получить консультацию, свяжитесь с нами</h2>
          <button onClick={openModal}>Связаться</button>
        </div>
      </div>
      <Modal closeModal={closeModal} isModalOpen={isModalOpen}>
        <div className="xl:max-w-5xl xl:mx-auto">
          <Applications />
        </div>
      </Modal>
    </section>
  );
};
