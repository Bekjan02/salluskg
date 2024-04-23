import { useNotify } from '../../provider/NotifyProvider';
import './styles.scss';

export const Applications = () => {
  const { openModal } = useNotify();
  return (
    <div className="applications">
      <h2 className="section__title">Заявка</h2>
      <div className="main py-12 px-[19px] lg-md:flex lg-md:gap-5 lg-md:items-end">
        <div className="lg-md:w-2/3">
          <h3 className="text-white text-2xl font-bold leading-6 sm:text-[26px]">
            Для получения консультации оставьте заявку, и мы свяжемся с вами.
          </h3>
          <form className="form lg-md:w-4/5" action="">
            <input
              className="border border-[#868686]"
              type="text"
              placeholder="Ваше имя"
            />
            <input
              className="border border-[#868686]"
              type="email"
              placeholder="Адрес электронной почты"
            />
            <input
              className="border border-[#868686]"
              type="tel"
              placeholder="Номер телефона"
            />
            <input
              className="border border-[#868686]"
              type="text"
              placeholder="Ваше сообщение"
            />
            <button onClick={openModal} className="w-full py-2" type="submit">
              Отправить заявку
            </button>
          </form>
        </div>
        <div className="call">
          <h3>Так же вы можете связаться с нами по телефону</h3>
          <a href="tel:(+996) 000 00 00 00">
            <img src="/src/assets/icons/phone.svg" alt="Phone" />
            (+996) 000 00 00 00
          </a>
          <a href="tel:(+996) 000 00 00 00">
            <img src="/src/assets/icons/phone.svg" alt="Phone" />
            (+996) 000 00 00 00
          </a>
        </div>
      </div>
    </div>
  );
};
