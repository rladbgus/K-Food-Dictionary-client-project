import React from 'react';
import ReactDOM from 'react-dom';
import Nav from "./pages/Nav";
import App from "./App";
import "./style.css";
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

// index 에서는 App 렌더링과 Nav 렌더링을 합니다.

ReactDOM.render(
  <div>
    <BrowserRouter>
      <Nav></Nav>
      <App></App>
    </BrowserRouter>
  </div>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
