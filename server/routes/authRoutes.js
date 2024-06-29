const express = require("express");
const router = express.Router();
const {
  register,
  login
} = require("../controller/authController");

router.post("/signUp", register);
router.post("/signIn", login);

export default router
