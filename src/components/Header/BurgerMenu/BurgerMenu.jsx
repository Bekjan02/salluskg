import './styles.scss';
import { menuItems } from './BurgerMenu.helper';
import { useState } from 'react';
import { Dropdown } from '../../../common/ui';
import cn from 'classnames';

export const BurgerMenu = ({ isOpen }) => {
  const [active, setActive] = useState('aboutUs');

  const options = [
    {
      label: 'Русский (РУ)',
      value: 'RU',
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
    <div
      className={cn(
        'burgerMenu fixed bottom-0 right-0 w-screen bg-white shadow-lg transition-transform duration-300 ease-in-out',
        {
          'translate-x-full': !isOpen,
          'translate-x-0': isOpen,
        }
      )}
    >
      <div>
        <ul>
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
      </div>
    </div>
  );
};
