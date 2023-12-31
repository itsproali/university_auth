import { Request, Response, NextFunction, RequestHandler } from "express";

// Catch Async Errors
type IFunction = (
  req: Request,
  res: Response,
  next?: NextFunction
) => Promise<void>;

const asyncHandler = (fn: IFunction): RequestHandler => {
  return (req: Request, res: Response, next?: NextFunction) => {
    fn(req, res, next).catch(next);
  };
};

export default asyncHandler;
