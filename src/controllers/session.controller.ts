import { RequestHandler } from "express";
import * as userService from "../services/user.service";
import {
  CreateSessionBody,
  SessionResponse,
} from "../interfaces/session.interfaces";
import { decodeToken, generateToken } from "../utils/jwt";
import env from "../utils/env";
import { CustomJwtPayload } from "../interfaces/jwt.interfaces";

export const createSession: RequestHandler<
  unknown,
  SessionResponse,
  CreateSessionBody,
  unknown
> = async (req, res, next) => {
  try {
    const user = await userService.findUserByEmailAndPassword(req.body);
    const token = generateToken(user);
    res.cookie("token", token, {
      httpOnly: true,
      secure: env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    res.sendStatus(201);
  } catch (error) {
    next(error);
  }
};

export const checkStatus: RequestHandler = async (req, res, next) => {
  const token = req.cookies.token;
  const decodedToken = decodeToken(token) as CustomJwtPayload;
  console.log("aaa");
  console.log(decodedToken.user);
  try {
    res.status(200).json(decodedToken);
  } catch (error) {
    next(error);
  }
};
