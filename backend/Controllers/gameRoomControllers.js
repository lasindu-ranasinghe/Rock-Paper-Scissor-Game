const asyncHandler = require("express-async-handler");
const { gameRoomModel } = require("../Models/gameRoomModel");

const createGameRoom = asyncHandler(async (req, res) => {
  try {
    const room = new gameRoomModel({
      admin: req.body.my_id,
    });
    await room.save();
    return res.status(201).json(room);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
});
const joinGameRoom = asyncHandler(async (req, res) => {
  try {
    const result = await User.findByIdAndUpdate(
      req.body.room_id,
      { $push: { users: req.body.user_id } },
      { new: true, useFindAndModify: false }
    );
    return res.status(201).json(result);
  } catch (error) {
    res.status(404).send("Can not find any room related to that room id");
  }
});

module.exports = {
  createGameRoom,
  joinGameRoom,
};
