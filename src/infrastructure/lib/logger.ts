import winston from "winston";
import * as winstonDaily from "winston-daily-rotate-file";

const timezoned = () =>
  new Date().toLocaleString("en-GB", {
    timeZone: "America/Guayaquil",
  });

const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4,
};

const colors = {
  error: "red",
  warn: "yellow",
  info: "green",
  http: "magenta",
  debug: "white",
};
const level = () => {
  const env = process.env.NODE_ENV || "development";
  const isDevelopment = env === "development";
  return isDevelopment ? "debug" : "warn";
};
winston.addColors(colors);

const format = winston.format.combine(
  winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss:ms" }),
  winston.format.colorize({ all: true }),
  winston.format.printf(
    (info) => `${info.timestamp} ${info.level}: ${info.message}`
  )
);
const options = {
  file: {
    info: {
      level: "info",
      filename: `${__dirname}/../../../logs/app.log`,
      handleExceptions: true,
      json: true,
      maxsize: 5242880, // 5MB
      maxFiles: 1,
    },
    error: {
      filename: `${__dirname}/../../../logs/error.log`,
      level: "error",
    },
  },
  console: {
    level: "debug",
    handleExceptions: true,
    json: false,
    colorize: true,
  },
};

const transports = [
  new winston.transports.Console(options.console),
  new winston.transports.File(options.file.info),
  new winston.transports.File(options.file.error),
];

const Logger = winston.createLogger({
  level: level(),
  levels,
  format,
  transports,
});

export default Logger;
