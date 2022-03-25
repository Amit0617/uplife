// const { process_params } = require("express/lib/router");
// require('dotenv').config();

const { AuthProvider, SocialLoginType } = window.arcana.auth;

// if(process.env.APPID){
//    let appID = process.env.APPID;
// }

window.onload = async () => {
    const auth = await AuthProvider.init({
        appID: `$appID`, //secret :)
        flow: 'popup',
        //   redirectUri:'login.html' 
    });

    const googleLoginBtn = document.getElementById('googleBtn');
    
    if (!auth.isLoggedIn()) {
        googleLoginBtn.addEventListener('click', async () => {
            await auth.loginWithSocial(SocialLoginType.google);
        })
    }

    if (auth.isLoggedIn()){
        document.getElementsByTagName('a')
    }

    const info = auth.getUserInfo();
    console.log(info);
    const userPic = document.createElement('img');
    userPic.src = info.userInfo.picture;
    const navBar = document.getElementById('navBar');
    navBar.appendChild(userPic);
    userPic.classList.add('userPic');
    

}