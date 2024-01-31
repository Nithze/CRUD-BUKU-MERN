const User = require("../Models/userModel");

//login
const loginUser = async (req, res) => {
	res.json({ success });
};

//signup
const signupUser = async (req, res) => {
	const { username, password, nama, ProfilePicture } = req.body;

	try {
		const user = await User.signup(username, password, nama, ProfilePicture);
		res.status(200).json({ username, user, message: "berhasil sign-up" });
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
};

module.exports = {
	loginUser,
	signupUser,
};
