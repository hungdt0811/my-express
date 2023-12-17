const http = require("node:http"); // import mododule http

// create server to handle request and response
const server = http.createServer((req, res) => {
    let method = req.method;
    if(req.url === "/input") {
        res.setHeader("Content-Type", 'text/html'); // Quy định response trả về là html
        let htmls = `<h1>Input page</h1>
                    <form action="/output" method="POST">
                        <input type="text" name="mess">
                        <button>Submit</button>
                    </form>`
        res.end(htmls);
    }
    else if(req.url === "/output" && method === "POST") {
        const body = [];
        // Khi dữ liệu được gửi từ client đến server, sự kiện 'data' sẽ được kích hoạt.
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk)
        })
        // Khi toàn bộ dữ liệu đã được gửi từ client đến server, sự kiện 'end' sẽ được kích hoạt.
        req.on('end', () => {
            const parseBody = Buffer.concat(body).toString();
            const message = parseBody.split("=")[1];
            console.log(body, message);
            res.setHeader("Content-Type", 'text/html'); // Quy định response trả về là html
            let htmls = `<h1>Kết quả nhận được từ input page: ${message}</h1>`
            res.end(htmls);
        })
    }
    else {
        res.setHeader("Content-Type", 'text/explain'); // Quy định response trả về là text
        res.end('Page not found');
    }
})

// create listener
server.listen(3000, () => {
    console.log('listening on port 3000');
})