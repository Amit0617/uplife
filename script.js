const express = require('express')
const app = globExpjs()
let serveStatic = require('serve-static')
const port = 3000


app.use("/", serveStatic('public/', { index: 'homepage.html' }));
app.use("/login", serveStatic('public/', { index: 'login.html' }));

// app.use(serveStatic(path.join(__dirname, 'public')))

app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
});

function globExpjs() {
    return express();
}
