const express = require("express");
const {
  registerUser,
  searchchUser,
  fetchAllUsers,
  fetchUser,
  authenticateUser,
} = require("./../Controllers/userControllers");

const router = express.Router();

router.route("/auth").post(authenticateUser);
router.route("/").get(fetchAllUsers);
router.route("/").post(registerUser);
router.route("/search/:searchText").get(searchchUser);
router.route("/:userId").get(fetchUser);

module.exports = router;
