import { IEnvConfig } from "./env.type";

const configuration = <IEnvConfig>{
  server: {
    host: "localhost",
    port: process.env.PORT || 3002,
  },
};

export default configuration;
