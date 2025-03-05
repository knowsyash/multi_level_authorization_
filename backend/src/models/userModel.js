const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["admin", "manager", "user"], // Fixed: Added role field with valid values
      default: "user", // Default role is "user"
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
