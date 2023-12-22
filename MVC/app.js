const path = require('node:path');
const express = require('express');

const rootNode = require('./util/root-node')
const app = express();

const get_router = require('./routes/get-routes');
const post_router = require('./routes/post-routes');

app.set('view engine', 'ejs');
app.set('views', path.join(rootNode, 'views'));
app.use(express.static(path.join(rootNode, 'public')));
app.use(express.urlencoded({ extended: false }));

app.use(get_router);
app.use(post_router);

app.use((req, res, next) => {
    res.render('404', {
        title: 'Page not found!',
        path: ''
    });
})

app.listen(3000, () => {
    console.log(`Server is running on http://localhost:3000`);
})

