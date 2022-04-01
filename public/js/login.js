
window.onload = async () => {
    const { AuthProvider, SocialLoginType } = window.arcana.auth;

    //secret const appId =;

    const auth = await AuthProvider.init({
        appID: `${appId}`, //secret :)
        flow: 'popup',
        redirectUri: 'http://localhost:3000/'
    });

    function loggedIn() {
        if (auth.isLoggedIn()) {
            //remove sign in button and sign up CTA
            const not_required = document.getElementsByTagName('a');
            not_required[0].parentNode.remove(not_required);
            document.getElementsByTagName('span')[1].parentNode.removeChild(document.getElementsByTagName('span')[1]);

            // get data from sign up
            const info = auth.getUserInfo();
            //console.log(info);

            // create image for user photo from gmail
            const userPic = document.createElement('img');
            userPic.src = info.userInfo.picture;

            //put into navbar
            const navBar = document.getElementById('navBar');
            navBar.appendChild(userPic);

            //align to right corner
            userPic.classList.add('userPic');

        }
    }

    //try running log in function if already logged in
    loggedIn();

    // user flow for log in
    if (!auth.isLoggedIn()) {
        const googleLoginBtn = document.getElementById('googleBtn');
        googleLoginBtn.addEventListener('click', async () => {
            await auth.loginWithSocial(SocialLoginType.google);
            loggedIn();
            window.location.reload();
        })
    }
}
