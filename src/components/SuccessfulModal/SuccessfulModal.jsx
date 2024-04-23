import { Modal } from '../../common/ui';
import { useApplicationContext } from '../../provider/ApplicationModal';
import { useNotify } from '../../provider/NotifyProvider';
import './styles.scss';

export const SuccessfulModal = () => {
  const { isModalOpen, closeModal } = useNotify();
  const { closeModal: applicationClose } = useApplicationContext();

  const handelClose = () => {
    closeModal();
    applicationClose();
  };

  return (
    <div className="successfulModal">
      <Modal closeModal={closeModal} isModalOpen={isModalOpen} closeIcon={true}>
        <div className="flex flex-col justify-center items-center text-center bg-white relative p-8 rounded-3xl lg-md:max-w-lg lg-md:mx-auto">
          <img
            onClick={closeModal}
            className="absolute top-5 right-5 cursor-pointer"
            src="/src/assets/icons/close.svg"
            alt="Close"
          />
          <img src="/src/assets/icons/circle_check.svg" alt="Check" />
          <h2 className="text-lg font-bold leading-6	text-dark">
            Ваша заявка успешно отправлена, ожидайте ответа!
          </h2>
          <button onClick={handelClose} className="modalBtn">
            Готов
          </button>
        </div>
      </Modal>
    </div>
  );
};
