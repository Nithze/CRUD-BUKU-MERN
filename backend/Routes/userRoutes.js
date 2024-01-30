const express = require("express");
const router = express.Router();

const {
    getsemuauser,
} =require("../Controllers/userController.js");


router.get("/", getsemuauser);

module.exports = router;

