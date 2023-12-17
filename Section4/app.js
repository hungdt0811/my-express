const http = require("node:http");
const requestHandler = require('./routers');

const server = http.createServer(requestHandler);

server.listen(3000, () => {
    console.log('listening to port 3000');
})