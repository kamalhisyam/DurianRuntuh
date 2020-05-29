import React from 'react';
import shoppingCart from './shopping-cart.svg';
import './App.css';

import { GoogleLogin } from './features/login/Login'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={shoppingCart} className="App-logo" alt="logo" />
        <GoogleLogin/>
      </header>
    </div>
  );
}

export default App;
