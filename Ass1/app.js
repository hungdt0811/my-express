const http = require('node:http');
const handler = require('./routers');

const server = http.createServer(handler);

server.listen(3000);