const fs = require('node:fs');

module.exports = (req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head>');
        res.write('<title>Home page</title>');
        res.write('</head>');
        res.write('<body>');
        res.write(`<h1>Home page</h1>`);
        res.write(` <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/input">Input</a></li>
                    </ul>`);
        res.write('</body>');
        res.write('</html>');

        return res.end();
    }

    if (url === '/about') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head>');
        res.write('<title>About page</title>');
        res.write('</head>');
        res.write('<body>');
        res.write(`<h1>About page</h1>`);
        res.write(` <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/input">Input</a></li>
                    </ul>`);
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
    if(url === '/input') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head>');
        res.write('<title>Input page</title>');
        res.write('</head>');
        res.write('<body>');
        res.write(`<h1>About page</h1>`);
        res.write(` <form action="/message" method="POST">
                        <input type="text" name="mess">
                        <button type="submit">Send</button>
                    </form>`);
        res.write(` <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/input">Input</a></li>
                    </ul>`);
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
    if(url === '/message' && method === "POST") {
        const body = [];

        req.on('data', (chunk) => {
            body.push(chunk);
        })

        return req.on('end', () => {
            const parseBody = Buffer.concat(body).toString();
            const message = parseBody.split('=')[1];
            fs.writeFile("message.txt", message, (err) => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            })
        })
    }

    res.write('<h1>Page is not find</h1>');
    res.end();
}

