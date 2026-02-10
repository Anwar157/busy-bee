import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    uid: {
      type: String,
      required: true,
      unique: true,
    },
    name: String,
    email: {
      type: String,
      unique: true,
    },
    role: {
      type: String,
      enum: ["worker", "client", "admin"],
      default: null, // 👈 role select না করা পর্যন্ত null
    },
  },
  { timestamps: true }
);

export default mongoose.models.User ||
  mongoose.model("User", userSchema);
