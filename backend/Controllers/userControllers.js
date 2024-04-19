const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const Joi = require("joi");
const { userModel } = require("../Models/userModel");

const registerUser = asyncHandler(async (req, res) => {
  let user = await userModel.findOne({ email: req.body.email });
  if (user) {
    return res.status(400).send("User already exisits. Please sign in");
  } else {
    try {
      const salt = await bcrypt.genSalt(10);
      const password = await bcrypt.hash(req.body.password, salt);
      const user = new userModel({
        userName: req.body.userName,
        email: req.body.email,
        password: password,
      });
      await user.save();
      return res.status(201).json(user);
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  }
});

const searchchUser = asyncHandler(async (req, res) => {
  const searchText = req.params.searchText;
  try {
    let users = await userModel.find({
      $or: [
        { userName: { $regex: new RegExp(searchText, "i") } },
        { email: { $regex: new RegExp(searchText, "i") } },
      ],
    });

    if (users) {
      return res.status(200).send(users);
    } else {
      return res.status(404).send("There are no any users");
    }
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
});

const fetchAllUsers = asyncHandler(async (req, res) => {
  try {
    let users = await userModel.find().exec();
    if (users) {
      return res.status(200).send(users);
    } else {
      return res.status(200).send("There are no any users");
    }
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
});

const fetchUser = asyncHandler(async (req, res) => {
  const userId = req.params.userId;
  try {
    let users = await userModel.findById(userId);
    if (users) {
      return res.status(200).send(users);
    } else {
      return res.status(200).send("There are no any users");
    }
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
});

const authenticateUser = asyncHandler(async (req, res) => {
  try {
    const schema = Joi.object({
      email: Joi.string().required().email(),
      password: Joi.string().min(8).required(),
    });
    const result = schema.validate(req.body);
    if (result.error) {
      res
        .status(400)
        .send(
          "Json object validation failed..",
          result.error.details[0].message
        );
      return;
    }

    let user = await userModel.findOne({ email: req.body.email });
    if (!user) {
      return res
        .status(400)
        .send(
          `Cannot find user having "${req.body.email}" as their email address in the database!`
        );
    }

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword) {
      return res
        .status(400)
        .send(
          `${req.body.password} is not ${user.firstName} ${user.lastName}'s password!`
        );
    }
    return res.status(200).send(user);
  } catch (error) {
    return res.status(500).send(`Error is in authenitication: ${error}`);
  }
});

module.exports = {
  registerUser,
  fetchUser,
  searchchUser,
  fetchAllUsers,
  authenticateUser,
};
