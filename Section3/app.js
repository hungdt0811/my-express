const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Enter Message</title><head>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
    res.write('</html>');
    return res.end();
  }
  if (url === '/message' && method === 'POST') {
    const body = [];

    // Khi dữ liệu được gửi từ client đến server, sự kiện 'data' sẽ được kích hoạt.
    req.on('data', (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    // Khi toàn bộ dữ liệu đã được gửi từ client đến server, sự kiện 'end' sẽ được kích hoạt.
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      fs.writeFileSync('message.txt', message); // Tạo file message.txt và ghi dữ liệu nhận được vào file
      res.statusCode = 302;   // mã điều hướng web
      res.setHeader('Location', '/'); // Điều hướng trang hiện tại về /
      return res.end();
    });
  }
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title><head>');
  res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
  res.write('</html>');
  res.end();
});

server.listen(3000);
