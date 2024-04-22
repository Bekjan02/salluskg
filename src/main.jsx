import React from 'react';
import ReactDOM from 'react-dom/client';
import 'swiper/css';
import App from './App.jsx';
import { ApplicationProvider } from './provider/ApplicationModal.jsx';
import { NotifyProvider } from './provider/NotifyProvider.jsx';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApplicationProvider>
      <NotifyProvider>
        <App />
      </NotifyProvider>
    </ApplicationProvider>
  </React.StrictMode>
);
