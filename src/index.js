import React from 'react';
import ReactDOM from 'react-dom';
import './CSS/index.css';
import App from './App';
import { NewsContextProvider } from './News/NewsAPIContext';
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
import ru from 'javascript-time-ago/locale/ru'

TimeAgo.addDefaultLocale(en)
TimeAgo.addLocale(ru)


ReactDOM.render(
  <React.StrictMode>
      <NewsContextProvider>
      <App />
      </NewsContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);