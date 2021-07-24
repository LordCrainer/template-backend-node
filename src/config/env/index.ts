import dotenv from "dotenv";

import { DefineType, IEnvType } from "./env.type";
import production from "./production";
import development from "./development";

const enviroment: DefineType<IEnvType> = {
  development,
  production,
};

const { NODE_ENV } = process.env;

const envFound = dotenv.config({path: `.env.${NODE_ENV}`});
if (envFound.error) throw new Error("⚠️  Couldn't find .env file  ⚠️");
const env = NODE_ENV || "development";

const currentEnv = enviroment[env];

// currentEnv = [NODE_ENV] || development;
// NODE_ENV === "production" ? production : development;

export default currentEnv;
