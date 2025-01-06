import { InferSchemaType, model, models, Schema } from "mongoose";

const userClaimSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  claim: { type: Schema.Types.ObjectId, ref: "Claim" },
});

export type UserClaim = InferSchemaType<typeof userClaimSchema>;

export default models.UserClaim ||
  model<UserClaim>("UserClaim", userClaimSchema);
