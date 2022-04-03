const express = require('express')
// import express from 'express'
const app = express();
let serveStatic = require('serve-static')
// import serveStatic from 'serve-static';
const port = 3000
const MetaMaskOnboarding = require('@metamask/onboarding')

app.use("/", serveStatic('public/', { index: 'index.html' }));
app.use("/learnmore", serveStatic('public/', { index: 'about.html'}));
app.use("/dd7a38e1e51d5c29ba251d44f94492359271a13d", serveStatic('public/', { index: 'whrsb.html' }));
app.use("/8a1f8fd855871d063c8bc65dcb765f85769c4f76", serveStatic('public/', { index: 'whrsb1.html' }));
app.use("/ad528d796489545fc8429e763c4f7d4c0bf4afbc", serveStatic('public/', { index: 'whrsb2.html' }));
app.use("/435a6fe924c841d595ca7467fee1fb0179632acb", serveStatic('public/', { index: 'whrsb3.html' }));
app.use("/b3d806ea7039960d7dfe0bc80a9a4736b62b99f0", serveStatic('public/', { index: 'whrsb4.html' }));



exports.MetaMaskOnboarding = MetaMaskOnboarding;
// app.use(serveStatic(path.join(__dirname, 'public')))

app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
});

