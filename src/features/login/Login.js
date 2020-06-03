import React from 'react';
import Button from '@material-ui/core/Button';

export function GoogleLogin() {
    return (
        <div>
            <div>
                <Button variant="contained"
                        disableElevation
                >
                Sign in with Google
                </Button>   
            </div>
            <div class="fb-login-button" data-size="large" data-button-type="login_with" data-layout="default" data-auto-logout-link="false" data-use-continue-as="false" data-width=""></div>   
        </div>


    );

}




