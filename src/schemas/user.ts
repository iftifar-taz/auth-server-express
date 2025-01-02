import { InferSchemaType, model, Schema } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema(
  {
    firstName: { type: String },
    lastName: { type: String, required: true },
    userName: { type: String, unique: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, unique: true },
    passwordHash: { type: String, required: true, select: false },
    accessFailedCount: { type: Number },
    isLocked: { type: Boolean },
    emailConfirmed: { type: Boolean },
    phoneConfirmed: { type: Boolean },
    resetPasswordToken: { type: String, select: false },
    resetPasswordExpiresAt: { type: Date, select: false },
    roles: [{ type: Schema.Types.ObjectId, ref: "Role" }],
    claims: [{ type: Schema.Types.ObjectId, ref: "Claim" }],
  },
  { timestamps: true }
);

userSchema.index({ email: 1, userName: 1 });

userSchema.pre("save", async function (next) {
  if (this.isModified("passwordHash")) {
    this.passwordHash = await bcrypt.hash(this.passwordHash, 10);
  }
  next();
});

export type User = InferSchemaType<typeof userSchema>;

export default model<User>("User", userSchema);
