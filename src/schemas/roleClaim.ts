import { InferSchemaType, model, models, Schema } from "mongoose";

const roleClaimSchema = new Schema({
  role: { type: Schema.Types.ObjectId, ref: "Role" },
  claim: { type: Schema.Types.ObjectId, ref: "Claim" },
});

export type RoleClaim = InferSchemaType<typeof roleClaimSchema>;

export default models.RoleClaim ||
  model<RoleClaim>("RoleClaim", roleClaimSchema);
