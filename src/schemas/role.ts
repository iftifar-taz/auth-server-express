import { InferSchemaType, model, models, Schema } from "mongoose";

const roleSchema = new Schema(
  {
    name: { type: String, required: true },
    key: { type: String, required: true },
  },
  { timestamps: true }
);

export type Role = InferSchemaType<typeof roleSchema>;

export default models.Role || model<Role>("Role", roleSchema);
