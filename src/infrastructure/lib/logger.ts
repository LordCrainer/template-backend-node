import winston from "winston";
import * as winstonDaily from "winston-daily-rotate-file";

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

/* const logger = winston.createLogger({
  transports: [
    new winston.transports.File(options.file),
    new winston.transports.Console(options.console),
    transport,
  ],
  format: winston.format.combine(
    winston.format.simple(),
    winston.format.colorize(),
    winston.format.timestamp({
      format: timezoned,
    }),
    winston.format.printf(
      (info) => `[${info.timestamp}] ${info.level}: ${info.message}`
    )
  ),
  exitOnError: false,
}); */
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

/**
 * Transport to logger
 * @type {DailyRotateFile}
 */
/* const transport = new winston.transports.DailyRotateFile({
  filename: `${__dirname}/../logs/application-%DATE%.log`,
  datePattern: "DD-MM-YYYY",
  zippedArchive: false,
  maxSize: "20m",
  maxFiles: "30d",
}); */

/**
 * Set timezone to logger
 * @returns {string}
 */
const timezoned = () =>
  new Date().toLocaleString("en-GB", {
    timeZone: process.env.TIMEZONE_SERVER,
  });

/**
 * Options for logger object
 * @type {{console: {handleExceptions: boolean, colorize: boolean, level: string, json: boolean},
 * file: {filename: string, handleExceptions: boolean, level: string, json: boolean,
 * maxsize: number, maxFiles: number}}}
 */
/* const options = {
  file: {
    level: "info",
    filename: `${__dirname}/../logs/app.log`,
    handleExceptions: true,
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 1,
  },
  console: {
    level: "debug",
    handleExceptions: true,
    json: false,
    colorize: true,
  },
}; */

/**
 * Logger object with above defined options
 * @type {winston.Logger}
 */
/* const logger = winston.createLogger({
  transports: [
    new winston.transports.File(options.file),
    new winston.transports.Console(options.console),
    transport,
  ],
  format: winston.format.combine(
    winston.format.simple(),
    winston.format.colorize(),
    winston.format.timestamp({
      format: timezoned,
    }),
    winston.format.printf(
      (info) => `[${info.timestamp}] ${info.level}: ${info.message}`
    )
  ),
  exitOnError: false,
}); */

/* const stream = {
  write(message: string) {
    logger.info(
      message.replace(/(\r\n|\n|\r)/gm, "").replace(/ *\[[^\]]*]/, "")
    );
  },
}; */

/**
 * Writing file
 * @type {{write(*): void}}
 */
/* logger.stream = () => new Stream.Duplex(stream);
 */
/**
 * Logger
 * @param message Message to save log
 */
/* const i = (message: string) => {
  logger.stream();
}; */

/* export = {
  logger,
  i,
}; */
