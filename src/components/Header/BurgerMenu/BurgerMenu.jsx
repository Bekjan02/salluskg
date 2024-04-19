import './styles.scss';
import { menuItems } from './BurgerMenu.helper';
import { useState } from 'react';
import { Dropdown } from '../../../common/ui';

export const BurgerMenu = ({ isOpen }) => {
  const [active, setActive] = useState('aboutUs');
  //   <option value="KG">Кыргызча (KG)</option>
  //         <option value="EN">English (EN)</option>
  //         <option value="AR">العربية (AR)</option>
  //         <option value="TR">Türkçe (TR)</option>
  //         <option value="CN">中文 (CN)</option>
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
    <div className={`burgerMenu fixed bottom-0 w-screen`}>
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
            <Dropdown />
          </li>
        </ul>
      </div>
    </div>
  );
};
