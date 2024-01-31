const user = require("../Models/userModel.js");

const mongoose = require("mongoose");

//untuk mengambil semua data user
const getsemuauser = async (req, res) => {
	try {
		const User = await user.find({});
		if (!user) {
			res.status(404).json({ status: "404, tidak ada user" });
		}
		res.status(200).json(User);
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
};

const tambahuser = async (req, res) => {};

module.exports = {
	getsemuauser,
	tambahuser,
};
