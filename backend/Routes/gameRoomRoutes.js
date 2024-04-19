const express = require("express");
const {
  joinGameRoom,
  createGameRoom,
} = require("./../Controllers/gameRoomControllers");

const router = express.Router();

router.route("/").post(createGameRoom);
router.route("/join").post(joinGameRoom);

module.exports = router;
