import createHttpError from "http-errors";
import { CreateUserBody, UserResponse } from "../interfaces/user.interfaces";
import UserSchema from "../schemas/user";
import bcrypt from "bcrypt";
import { CreateSessionBody } from "../interfaces/session.interfaces";
import { Types } from "mongoose";
import { decodeToken } from "../utils/jwt";
import { CustomJwtPayload } from "../interfaces/jwt.interfaces";

export const createUser = async (body: CreateUserBody): Promise<void> => {
  const { lastName, email, password } = body;

  if (!lastName || !email || !password) {
    throw createHttpError(400, "Parameters missing");
  }

  const existingEmail = await UserSchema.findOne({ email: email }).exec();

  if (existingEmail) {
    throw createHttpError(
      409,
      "A user with this email address already exists. Please log in instead."
    );
  }

  await UserSchema.create({
    lastName: lastName,
    email: email,
    password: password,
  });
};

export const getUsers = async (): Promise<UserResponse[]> => {
  const users = await UserSchema.find().exec();
  return users.map((x) => {
    return {
      userId: x._id,
      lastName: x.lastName,
      email: x.email,
    };
  });
};

export const getAuthenticatedUser = async (
  token: string
): Promise<UserResponse> => {
  const decodedToken = decodeToken(token) as CustomJwtPayload;
  const user = await UserSchema.findById(decodedToken.user.userId).exec();

  if (!user) {
    throw createHttpError(404, "User not found");
  }

  return {
    userId: user._id,
    lastName: user.lastName,
    email: user.email,
  };
};

export const findUserByEmailAndPassword = async (
  body: CreateSessionBody
): Promise<UserResponse> => {
  const { email, password } = body;

  if (!email || !password) {
    throw createHttpError(400, "Parameters missing");
  }

  const user = await UserSchema.findOne({ email })
    .select("+password +email")
    .exec();

  if (!user) {
    throw createHttpError(401, "Invalid credentials");
  }

  const passwordMatch = await bcrypt.compare(password, user.passwordHash);

  if (!passwordMatch) {
    throw createHttpError(401, "Invalid credentials");
  }

  return {
    userId: user._id as Types.ObjectId,
    lastName: user.lastName,
    email: user.email,
  };
};
