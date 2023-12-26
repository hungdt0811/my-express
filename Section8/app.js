const path = require('node:path');
const express = require('express');

const adminRoute = require('./routes/admin');
const shopRoute = require('./routes/shop');
const mainRoute = require('./routes/main-route');

const rootNode = require('./util/root-node');

// Create an Express application.
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(rootNode, 'views'));
app.use(express.static(path.join(rootNode, 'public')));
app.use(express.urlencoded({extended: false}))

app.use('/admin', adminRoute);
app.use(shopRoute);

app.use(mainRoute);


app.listen(3000, () => {
    console.log("Server is running on port 3000");
});