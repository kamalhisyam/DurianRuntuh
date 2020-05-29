import React from 'react';
import googleButtonImage from './google-btn/btn_google_light_normal_ios.svg';
import './Login.css'

export function GoogleLogin() {
    return (
        <div>
                        <div>
                <button class="btn">
                <img src={googleButtonImage} alt="Google Sign in Button"/>
                Sign in with Google
                </button>   
            </div>
            <div class="fb-login-button" data-size="large" data-button-type="login_with" data-layout="default" data-auto-logout-link="false" data-use-continue-as="false" data-width=""></div>   
        </div>


    );

}