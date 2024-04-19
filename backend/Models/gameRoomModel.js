const mongoose = require("mongoose");

const gameRoomSchema = new mongoose.Schema(
  {
    admin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    users: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
      },
    ],
  },
  { timestamps: true }
);

const gameRoomModel = mongoose.model("gameRoom", gameRoomSchema);

module.exports = { gameRoomModel };
