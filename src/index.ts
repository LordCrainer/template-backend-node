import Logger from "./infrastructure/lib/logger";
import app from "./infrastructure/server/express";
import config from "./config/env/index";

const { server } = config;

app(config).listen(server.port, () =>
  Logger.info(`http://${server.host}:${server.port}`)
);
