import mongoose, { InferSchemaType, model, models, Schema } from "mongoose";

const claimSchema = new Schema(
  {
    name: { type: String, required: true },
    key: { type: String, required: true },
  },
  { timestamps: true }
);

export type Claim = InferSchemaType<typeof claimSchema>;

export default models.Claim || model<Claim>("Claim", claimSchema);
