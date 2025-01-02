import { Types } from "mongoose";

export interface CreateUserBody {
  name?: string;
  email?: string;
  password?: string;
}

export interface UserResponse {
  userId: Types.ObjectId;
  name: string;
  email: string;
}
