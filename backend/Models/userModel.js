const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: String,
    email: String,
    password: String,
  },
  { timestamps: true }
);

const userModel = mongoose.model("user", userSchema);

module.exports = { userModel };
