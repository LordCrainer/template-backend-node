import { CorsOptions } from "cors";

export interface IEnvConfig {
  server: {
    host: string;
    port: number | string;
  };
  cors: CorsOptions;
}

export interface IEnvType {
  development: IEnvConfig;
  production: IEnvConfig;
}

export type DefineType<Type> = {
  [key in keyof Type as string]: Type[key];
};

const b = "development";
const selecting = <DefineType<IEnvType>>{};
const c = selecting[b];
