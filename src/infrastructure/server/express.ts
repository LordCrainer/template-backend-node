import express from "express";
const app = express();
import http from "http";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import Logger from "../lib/Logger";
// import fileUpload from 'express-fileupload'
import path from "path";
import apiResponse from "../../utils/apiResponse";
import helmet from "helmet";
import config from "./../../config/env/index";
import morganMiddleware from "./../middleware/morgan";

require("dotenv").config({ path: `.env.${app.get("env")}` });

app.use(cors(config.cors));
app.use(express.json());
app.use(helmet());
app.use(morganMiddleware);
app.use("*", (req, res, next) => {
  apiResponse.error(res, 404, { message: "Page not found!!" });
  // res.status(404).send({ apiResponse: "API SERVICE: NOT FOUND PATH!!" });
});

export default app;
