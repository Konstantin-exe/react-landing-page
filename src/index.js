import { css, Global } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const globalStyles = css`
  html {
    font-family: -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    background-color: #1d1e1f;
    line-height: 1;
  }
  body {
    background-color: #17171d;
    width: 1280px;
    margin: 0 auto;
    box-shadow: 0px 0px 10px rgb(0 0 0 / 40%);
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <Global styles={globalStyles} />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
