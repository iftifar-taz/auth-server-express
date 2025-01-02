import { RequestHandler } from "express";
import { decodeToken } from "../utils/jwt";
import createHttpError from "http-errors";

export const authenticated: RequestHandler = (req, res, next) => {
  const token = req.cookies?.token;
  if (!token) {
    next(createHttpError(401, "Unauthorized - no token provided"));
  }
  try {
    const decodedToken = decodeToken(token);
    if (!decodedToken) {
      next(createHttpError(401, "Unauthorized - invalid token"));
    }
    next();
  } catch (error) {
    next(error);
  }
};
