import React from 'react';
import GoogleLogin from '../features/login/GoogleLogin'
import SignIn from '../features/login/SignIn';
import './Login.css'

export default function Login () {
    return (
        <div className="Login">
        <header className="Login-header">
          <GoogleLogin/>
          <SignIn/>
        </header>
      </div>
    )
}


