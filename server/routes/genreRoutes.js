const express = require("express");
const router = express.Router();
const {
  getAllGenres
} = require("../controller/authController");

router.get("/", getAllGenres);

export default router
