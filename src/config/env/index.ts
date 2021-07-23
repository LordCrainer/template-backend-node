import { CorsOptions } from "cors";
import dotenv from "dotenv";
const envFound = dotenv.config();
if (envFound.error) {
  // This error should crash whole process
  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

import { DefineType, IEnvType } from "./env.type";
import production from "./production";
import development from "./development";

const enviroment: DefineType<IEnvType> = {
  development,
  production,
};

const { NODE_ENV } = process.env;
const env = NODE_ENV || "development";

const currentEnv = enviroment[env];

// currentEnv = [NODE_ENV] || development;
// NODE_ENV === "production" ? production : development;

export default currentEnv;
