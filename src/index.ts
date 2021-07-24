import Logger from "./infrastructure/lib/logger";
import app from "./infrastructure/server/express";
import currentEnv from "./config/env/index";

const { server } = currentEnv;

app.listen(app.get("port"), () =>
  Logger.info(`http://${server.host}:${server.port}`)
);
