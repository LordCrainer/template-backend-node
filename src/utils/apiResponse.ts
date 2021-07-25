import { IOverrideRequest } from "../Types/utils/IapiResponse";
import { Response } from "express";
import httpStatusCodes from "http-status-codes";
import Logger from "./../infrastructure/lib/logger";

const result = (
  res: Response,
  status: number = 200,
  message: string | Object,
  cookie?: any
): void => {
  res.status(status).json({ message, success: true });
  Logger.debug(message);
};
const error = (
  res: Response,
  status: number = 404,
  error = {
    message: httpStatusCodes.getStatusText(status),
  },
  override?: IOverrideRequest
): void => {
  const data = { error, success: false, override };
  res.status(status).json(data);
  Logger.error(JSON.stringify(data));
};

export default {
  result,
  error,
};
/* export default class ApiResponse {
  static result = (res: Response, data: object,
                   status: number = 200,
                   cookie: ICookie = null) => {
    res.status(status);
    if (cookie) {
      res.cookie(cookie.key, cookie.value);
    }
    res.json({
      data,
      success: true,
    });
  }

  static error = (res: Response,
                  status: number = 400,
                  error: string = httpStatusCodes.getStatusText(status),
                  override: IOverrideRequest = null) => {
    res.status(status).json({
      override,
      error: {
        message: error,
      },
      success: false,
    });
  }

  static setCookie = (res: Response, key: string, value: string) => {
    res.cookie(key, value);
  }
} */
