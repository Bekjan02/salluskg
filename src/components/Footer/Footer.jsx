import React from 'react';
import './styles.scss';
import { items } from './Footer.helpers';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <ul className="links">
          {items.map(({ label, value }) => (
            <li key={value}>
              <a href={`#${value}`}>{label}</a>
            </li>
          ))}
        </ul>
        <ul className="socials">
          <li>
            <a href="" target="_blank">
              <img
                src="/src/assets/icons/socials-mono/facebook.svg"
                alt="Facebook"
              />
            </a>
          </li>
          <li>
            <a href="" target="_blank">
              <img
                src="/src/assets/icons/socials-mono/instagram.svg"
                alt="Instagram"
              />
            </a>
          </li>
          <li>
            <a href="" target="_blank">
              <img
                src="/src/assets/icons/socials-mono/whatsapp.svg"
                alt="Telegram"
              />
            </a>
          </li>
          <li>
            <a href="" target="_blank">
              <img
                src="/src/assets/icons/socials-mono/telegram.svg"
                alt="Telegram"
              />
            </a>
          </li>
          <li>
            <a href="" target="_blank">
              <img
                src="/src/assets/icons/socials-mono/tiktok.svg"
                alt="Telegram"
              />
            </a>
          </li>
          <li>
            <a href="" target="_blank">
              <img src="/src/assets/icons/socials-mono/gmail.svg" alt="Gmail" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
