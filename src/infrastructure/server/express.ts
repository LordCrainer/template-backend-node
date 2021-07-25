import express from "express";
const app = express();
import http from "http";
import mongoose from "mongoose";
import cors from "cors";
import Logger from "../lib/logger";
// import fileUpload from 'express-fileupload'
import apiResponse from "../../utils/apiResponse";
import apiRouter from "../../adapter/routes";

import helmet from "helmet";
import morganMiddleware from "./../middleware/morgan";
import { IEnvConfig } from "./../../config/env/env.type";

const appServer = (config: IEnvConfig) => {
  // APP PORT
  app.set("port", config.server.port || 3333);

  // ROUTES
  app.use(`${config.server.route}`, apiRouter());

  // MODULES
  app.use(cors(config.cors));
  app.use(express.json());
  app.use(helmet());
  app.use(morganMiddleware);
  app.use("*", (req, res, next) => {
    const message = "Route not found !!";
    apiResponse.error(res, 404, { message });
  });
  return app;
};
export default appServer;
