import { request, response, NextFunction } from "express";

export interface IController {
  (req: Request, res: Response, next: NextFunction): void;
}
