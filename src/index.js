import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import { App } from './components';
import { ToastProvider } from 'react-toast-notifications';
import { AuthProvider } from './providers/AuthProvider'
ReactDOM.render(
  <React.StrictMode>
    <ToastProvider autoDismiss={true} autoDismissTimeout={5000} placement="top-right">
    <AuthProvider>
    <App />
    </AuthProvider>
    </ToastProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
