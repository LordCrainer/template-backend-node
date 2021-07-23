import express from "express";
const app = express();
import http from "http";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import logger from "morgan";
import winston from "../middleware/winston";
// import fileUpload from 'express-fileupload'
import path from "path";
import apiResponse from "utils/apiResponse";
import helmet from "helmet";
import config from "./../../config/env/index";

require("dotenv").config({ path: `.env.${app.get("env")}` });

app.use(cors(config.cors));
app.use(express.json());
app.use(helmet());
app.use(
  logger(
    ":user :method :url :status :res[content-length] - :response-time ms",
    {
      stream: {
        write(message: string) {
          winston.i(
            message.replace(/(\r\n|\n|\r)/gm, "").replace(/ *\[[^\]]*]/, "")
          );
        },
      },
    }
  )
);
app.use("*", (req, res, next) => {
  apiResponse.error(res, 404, { message: "Page not found!!" });
  // res.status(404).send({ apiResponse: "API SERVICE: NOT FOUND PATH!!" });
});

export default app;
