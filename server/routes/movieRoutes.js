const express = require("express");
const router = express.Router();
const {
  getAllMovies,
  getMovie,
  addMovie,
  updateMovie
} = require("../controller/authController");

router.post("/addMovie", addMovie);
router.get("/:movieId", getMovie);
router.get("/", getAllMovies);
router.patch("/:movieId", updateMovie)

export default router
