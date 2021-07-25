import { IEnvConfig } from "./env.type";

const configuration: IEnvConfig = {
  server: {
    host: "localhost",
    port: process.env.PORT || 3002,
    route: process.env.API_ROUTE || "api/services/",
  },
  cors: {
    origin: "*",
  },
};

export default configuration;
