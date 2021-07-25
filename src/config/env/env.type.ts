import { CorsOptions } from "cors";

export interface IEnvConfig {
  server: {
    host: string;
    port: number | string;
    route: string;
  };
  cors: CorsOptions;
}

export interface IEnvType {
  development: IEnvConfig;
  production: IEnvConfig;
}
type DefineType<Type> = {
  [key in keyof Type as string]: Type[key];
};

export type IEnviroment = DefineType<IEnvType>;
