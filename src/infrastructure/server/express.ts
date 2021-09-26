import express from "express";
import * as Middleware from "../middleware/middleware";
import apiRouter from "../../adapter/routes";
import { IEnvConfig } from "../env/env.type";

const appServer = (config: IEnvConfig) => {
  /**
   * @constant {express.Application}
   */
  const app: express.Application = express();
  /**
   * @constructs express.Application Middleware
   */
  Middleware.configure(app);

  /**
   * @constructs express.Application Error Handler
   */
  //Middleware.initErrorHandler(app);
  // APP PORT
  app.set("port", config.server.port);

  // ROUTES
  app.use(`${config.server.route}`, apiRouter());

  /*   // MODULES
  app.use(cors(config.cors));
  app.use(express.json());
  app.use(helmet());
  app.use(morganMiddleware);
  app.use("*", (req, res, next) => {
    const message = "Route not found !!";
    apiResponse.error(res, 404, { message });
  }); */
  return app;
};
export default appServer;
