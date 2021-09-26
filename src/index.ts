import * as http from "http";
import Logger from "./infrastructure/lib/logger";
import app from "./infrastructure/server/express";
import config from "./infrastructure/env/index";

const { server } = config;

/* app(config).listen(server.port, () =>
  Logger.info(`http://${server.host}:${server.port}`)
); */
const Server: http.Server = http.createServer(app(config));

Server.listen(server.port, () =>
  Logger.info(`http://${server.host}:${server.port}`)
);
