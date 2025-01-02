import { RequestHandler } from "express";
import { RoleResponse } from "../interfaces/role.interfaces";
import * as roleService from "../services/role.service";

export const getRoles: RequestHandler<
  unknown,
  RoleResponse[],
  unknown,
  unknown
> = async (req, res, next) => {
  try {
    const roles = await roleService.getRoles();
    res.status(200).json(roles);
  } catch (error) {
    next(error);
  }
};
