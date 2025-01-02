import { Types } from "mongoose";

export interface CreateUserBody {
  lastName?: string;
  email?: string;
  password?: string;
}

export interface UserResponse {
  userId: Types.ObjectId;
  lastName: string;
  email: string;
}
