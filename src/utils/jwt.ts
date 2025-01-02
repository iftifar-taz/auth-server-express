import { JwtPayload, sign, verify } from "jsonwebtoken";
import env from "../utils/env";
import { UserResponse } from "../interfaces/user.interfaces";

export const generateToken = (user: UserResponse): string => {
  return sign({ user: user }, env.JWT_SECRET, { expiresIn: "1h" });
};

export const decodeToken = (token: string): JwtPayload | string => {
  return verify(token, env.JWT_SECRET);
};
