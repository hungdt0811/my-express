
const requestHandlers = (req, res) => {
    const url = req.url;
    const method = req.method;
    if(url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write(` <html>
                        <head>
                            <title>Home page</title>
                        </head>
                        <body>
                            <h1>This is home page</h1>
                            <form action="/create-user" method="POST">
                                <input type="text" name="username">
                                <button type="submit">Send</button>
                            </form>
                        </body>
                    </html>

        `)
        res.end();
    }
    else if(url === '/users') {
        res.setHeader('Content-Type', 'text/html');
        res.write(` <html>
                        <head>
                            <title>About page</title>
                        </head>
                        <body>
                            <h1>User list</h1>
                            <ul>
                                <li>User 1</li>
                                <li>User 2</li>
                                <li>User 3</li>
                                <li>User 4</li>
                            </ul>
                        </body>
                    </html>

        `)
        res.end();
    }
    else if(url === '/create-user' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        })
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const username = parsedBody.split('=')[1];
            console.log(username);
            return res.end();
        })
    }
    else {
        res.setHeader('Content-Type', 'text/html');
        res.write(`<h1>Page is not found</h1>`);
        res.end();
    }
}

module.exports = requestHandlers;