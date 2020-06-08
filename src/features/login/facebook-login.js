/* eslint-disable no-undef */

window.fbAsyncInit = function() {
  FB.init({
    appId      : '955941594865244',
    cookie     : true,
    xfbml      : true,
    version    : 'v7.0'
  });
    
  FB.AppEvents.logPageView();   
    
};


// eslint-disable-next-line no-undef
FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
});

(function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "https://connect.facebook.net/en_US/sdk.js";
   fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'));

 function statusChangeCallback(response){
     // eslint-disable-next-line no-cond-assign
     if(response.status="connected"){
         console.log("Logged in and authenticated");
     }
     else{
         console.log("Not authenticated");
     }
 };

 