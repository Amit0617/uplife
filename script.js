const express = require('express')
const app = globExpjs()
let serveStatic = require('serve-static')
const port = 3000


app.use("/", serveStatic('public/', { index: 'index.html' }));
app.use("/login", serveStatic('public/', { index: 'login.html' }));
app.use("/8a1f8fd855871d063c8bc65dcb765f85769c4f76", serveStatic('public/', { index: 'whrsb.html' }));


// app.use(serveStatic(path.join(__dirname, 'public')))

app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
});

function globExpjs() {
    return express();
}
