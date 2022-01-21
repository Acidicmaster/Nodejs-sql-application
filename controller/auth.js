const { sequelize, User } = require('../models');
const crypto = require("crypto");
const asyncHandler = require("../middleware/async");
const cron = require("node-cron");
const createError = require("../utilis/createError");

const RegisterUser = asyncHandler(async (req, res, next) => {
  
    const newUser = await User.create({ ...req.body });
  
    res.status(200).send({ status: "success", data: newUser });
  });