import { InferSchemaType, model, models, Schema } from "mongoose";

const userRoleSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  role: { type: Schema.Types.ObjectId, ref: "Role" },
});

export type UserRole = InferSchemaType<typeof userRoleSchema>;

export default models.UserRole || model<UserRole>("UserRole", userRoleSchema);
