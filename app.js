const http = require('http');
const routes = require('./routes');

const { log } = require('console');
console.log(routes.someText)
const server = http.createServer(routes.handler);


server.listen(3000);
