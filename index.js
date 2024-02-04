const jsonServer = require("json-server");
//console.log(module.paths);
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8001;

server.use(middlewares);
server.use(router);

server.listen(port);