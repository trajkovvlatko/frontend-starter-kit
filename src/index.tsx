import React from 'react';
import ReactDOM from 'react-dom';
import MainLayout from 'layouts/Main/MainLayout';
import {SidebarStateProvider} from 'contexts/SidebarStateContext';
import * as serviceWorker from './serviceWorker';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <SidebarStateProvider>
      <MainLayout />
    </SidebarStateProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();