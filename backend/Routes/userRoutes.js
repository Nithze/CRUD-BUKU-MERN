const express = require("express");
const router = express.Router();

const {
    getsemuauser,
    tambahuser
} =require("../Controllers/userController.js");


router.get("/", getsemuauser);
router.post("/add",tambahuser);


module.exports = router;

