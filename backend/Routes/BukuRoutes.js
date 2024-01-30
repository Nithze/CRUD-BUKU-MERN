const express = require("express");

const router = express.Router();

const {
	getSemuaBuku,
	getBuku,
	tambahBuku,
	updateBuku,
	deleteBuku,
} = require("../Controllers/bukuController");

router.get("/", getSemuaBuku);

router.get("/:id", getBuku);

router.post("/add", tambahBuku);

router.patch("/patch/:id", updateBuku);

router.delete("/delete/:id", deleteBuku);

module.exports = router;
