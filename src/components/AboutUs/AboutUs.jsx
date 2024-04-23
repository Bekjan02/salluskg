import React from 'react';
import './styles.scss';

export const AboutUs = () => {
  return (
    <div className="aboutUs">
      <h1 className="section__title">О нас</h1>
      <div className="lg-md:flex lg-md:flex-row-reverse lg-md:relative">
        <div className="image max-h-[324px] lg-md:max-h-none lg-md:w-4/5">
          <img
            src="/src/assets/images/about-us.png"
            alt=""
            className="lg-md:hidden"
          />
          <img
            src="/src/assets/images/about-us-desktop.png"
            alt=""
            className="hidden lg-md:block"
          />
        </div>
        <div className="info">
          <p>
            Наша компания предоставляет современную и удобную систему управления
            апартаментами для жильцов и собственников недвижимости. Мы стремимся
            обеспечить максимальный комфорт и безопасность нашим клиентам,
            предоставляя им возможность управлять своими апартаментами из любой
            точки мира
          </p>
          <p>
            Наша система позволяет легко контролировать температуру, освещение,
            безопасность и другие параметры в апартаментах через мобильное
            приложение или веб-портал. Мы также предлагаем возможность заказа
            дополнительных услуг, таких как уборка, обслуживание и транспортные
            услуги, прямо через нашу платформу.
          </p>
        </div>
      </div>
    </div>
  );
};
