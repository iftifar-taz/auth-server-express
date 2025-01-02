import { InferSchemaType, model, Schema } from "mongoose";

const claimSchema = new Schema(
  {
    name: { type: String, required: true },
    type: { type: String },
    users: [{ type: Schema.Types.ObjectId, ref: "User" }],
    roles: [{ type: Schema.Types.ObjectId, ref: "Role" }],
  },
  { timestamps: true }
);

export type Claim = InferSchemaType<typeof claimSchema>;

export default model<Claim>("Claim", claimSchema);
