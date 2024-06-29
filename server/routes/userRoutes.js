const express = require("express");
const router = express.Router();
const {
    updateUser,
  deleteUser

} = require("../controller/authController");

router.delete("/:userId",deleteUser)
router.patch("/:userId",updateUser) 


export default router
