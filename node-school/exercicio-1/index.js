const http = require('http');

const rotas = require('./rotas');

const server = http.createServer(rotas);

server.listen(4000);
