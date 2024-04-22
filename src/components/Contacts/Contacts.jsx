import React from 'react';
import './styles.scss';

export const Contacts = () => {
  return (
    <div className="contacts mt-16">
      <h2 className="section__title">Контакты</h2>
      <div>
        <div className="numbers">
          <a href="tel:(+996) 000 00 00 00">
            <img src="/src/assets/icons/phone.svg" alt="Phone" />
            (+996) 000 00 00 00
          </a>
          <a href="tel:(+996) 000 00 00 00">
            <img src="/src/assets/icons/phone.svg" alt="Phone" />
            (+996) 000 00 00 00
          </a>
        </div>
        <div className="socials">
          <a href="" target="_blank">
            <img src="/src/assets/icons/socials/facebook.svg" alt="facebook" />
          </a>
          <a href="" target="_blank">
            <img
              src="/src/assets/icons/socials/instagram.svg"
              alt="instagram"
            />
          </a>
          <a href="" target="_blank">
            <img src="/src/assets/icons/socials/whatsapp.svg" alt="whatsapp" />
          </a>
          <a href="" target="_blank">
            <img src="/src/assets/icons/socials/telegram.svg" alt="telegram" />
          </a>
          <a href="" target="_blank">
            <img src="/src/assets/icons/socials/gmail.svg" alt="gmail" />
          </a>
        </div>
        <div className="timetable">
          <h2>График работы</h2>
          <p>
            Пн-Пт: <span>09:00-19:30</span>
          </p>
          <p>
            Сб-Вс: <span>Выходной</span>
          </p>
        </div>
        <div className="geo">
          <img src="/src/assets/icons/map-pin.svg" alt="Map Pin" />
          <h2>Посмотреть адрес на карте</h2>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2923.7566041603823!2d74.5850497752938!3d42.87798120222505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec81f4a0a30a7%3A0xebed4865356709e4!2z0JrRi9GA0LPRi9C30YHQutCw0Y8g0LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3QsNGPINGE0LjQu9Cw0YDQvNC-0L3QuNGPINC40LwuINCiLiDQodCw0YLRi9C70LPQsNC90L7QstCw!5e0!3m2!1sru!2skg!4v1713770579859!5m2!1sru!2skg"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
