import React from 'react';
import Button from '@material-ui/core/Button';
import googleButtonImage from './google-btn/btn_google_light_normal_ios.svg';
import SvgIcon from '@material-ui/core/SvgIcon';

export function GoogleLogin() {
    return (
        <div>
            <div>
                <Button variant="contained"
                        
                >
                Sign in with Google
                </Button>   
            </div>
            <div class="fb-login-button" data-size="large" data-button-type="login_with" data-layout="default" data-auto-logout-link="false" data-use-continue-as="false" data-width=""></div>   
        </div>


    );

}




