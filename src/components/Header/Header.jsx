import { useState } from 'react';
import { BurgerMenu } from './BurgerMenu/BurgerMenu';
import PhoneSvf from '@assets/icons/phone.svg?react';
import { menuItems } from './BurgerMenu/BurgerMenu.helper';
import { Dropdown } from '../../common/ui';
import { useApplicationContext } from '../../provider/ApplicationModal';
import './styles.scss';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState('aboutUs');
  const { openModal } = useApplicationContext();

  const options = [
    {
      label: 'Русский (РУ)',
      value: 'РУ',
    },
    {
      label: 'English (EN)',
      value: 'EN',
    },
    {
      label: 'العربية (AR)',
      value: 'AR',
    },
    {
      label: 'Türkçe (TR)',
      value: 'TR',
    },
    {
      label: '中文 (CN)',
      value: 'CN',
    },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-opacity-5 lg-md:absolute">
        {/* top header */}
        <div className="hidden lg-md:block bg-dark px-4 py-4 ">
          <div className="container flex justify-end gap-6 text-white">
            <a
              href=""
              className="header-top underline flex items-center gap-2 fill-white"
            >
              <PhoneSvf />
              (+996) 000 00 00 00
            </a>
            <a
              href=""
              className="header-top underline flex items-center gap-2 fill-white"
            >
              {PhoneSvf()}
              (+996) 000 00 00 00
            </a>
          </div>
        </div>
        {/* bot header */}
        <div className="header px-4 py-4 ">
          <div className="container flex justify-between lg-md:justify-normal">
            <img
              src="/src/assets/icons/logo.svg"
              className="lg-md:w-28 xl:w-40"
            />
            <img
              className="lg-md:hidden"
              onClick={() => setIsOpen(!isOpen)}
              src="/src/assets/icons/burger-menu.svg"
            />
            <div className="hidden lg-md:flex ml-auto">
              <ul className="flex gap-4 items-center">
                {menuItems.map(({ label, value }) => (
                  <li onClick={() => setActive(value)} key={value}>
                    <a
                      className={`${value === active && 'active'}`}
                      href={`#${value}`}
                    >
                      {label}
                    </a>
                  </li>
                ))}
                <li>
                  <Dropdown options={options} />
                </li>
              </ul>
              <button onClick={openModal} className="btn-filled px-3 ml-3">
                Связаться
              </button>
            </div>
          </div>
        </div>
        <BurgerMenu isOpen={isOpen} />
      </header>
    </>
  );
};
