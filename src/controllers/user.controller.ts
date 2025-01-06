import { RequestHandler } from "express";
import { CreateUserBody, UserResponse } from "../interfaces/user.interfaces";
import * as userService from "../services/user.service";

export const createUser: RequestHandler<
  unknown,
  unknown,
  CreateUserBody,
  unknown
> = async (req, res, next) => {
  try {
    await userService.createUser(req.body);
    res.sendStatus(201);
  } catch (error) {
    next(error);
  }
};

export const getAuthenticatedUser: RequestHandler<
  unknown,
  UserResponse,
  unknown,
  unknown
> = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    const user = await userService.getAuthenticatedUser(token);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

export const getUsers: RequestHandler<
  unknown,
  UserResponse[],
  unknown,
  unknown
> = async (req, res, next) => {
  try {
    const users = await userService.getUsers();
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};
