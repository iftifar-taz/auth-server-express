import { InferSchemaType, model, Schema } from "mongoose";

const roleSchema = new Schema(
  {
    name: { type: String, required: true },
    users: [{ type: Schema.Types.ObjectId, ref: "User" }],
    claims: [{ type: Schema.Types.ObjectId, ref: "Claim" }],
  },
  { timestamps: true }
);

export type Role = InferSchemaType<typeof roleSchema>;

export default model<Role>("Role", roleSchema);
