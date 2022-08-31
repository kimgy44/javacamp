import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AuthService from './service/auth_service';
import { firebaseApp } from './service/firebase';

const root = ReactDOM.createRoot(document.getElementById('root'));
const AuthService = new AuthService(firebaseApp);
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App AuthService={AuthService} />
    
    </BrowserRouter>
  </React.StrictMode>
);
