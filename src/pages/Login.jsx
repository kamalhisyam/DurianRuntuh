import React from 'react';
import shoppingCart from '../shopping-cart.svg';
import GoogleLogin from '../features/login/GoogleLogin'
import SignIn from '../features/login/SignIn';
import './Login.css'

export default function Login () {
    return (
        <div className="Login">
        <header className="Login-header">
          <img src={shoppingCart} className="Login-logo" alt="logo" />
          <GoogleLogin/>
          <SignIn/>
        </header>
      </div>
    )
}


