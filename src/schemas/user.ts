import { InferSchemaType, model, models, Schema } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema(
  {
    firstName: { type: String },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, unique: true },
    passwordHash: { type: String, required: true, select: false },
    accessFailedCount: { type: Number },
    isLocked: { type: Boolean },
    emailConfirmed: { type: Boolean },
    phoneConfirmed: { type: Boolean },
    resetPasswordToken: { type: String, select: false },
    resetPasswordExpiresAt: { type: Date, select: false },
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

export default models.User || model<User>("User", userSchema);
