const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../Models/userModel");

//membuat JWT token
const buatToken = (_id) => {
	return jwt.sign({ _id }, process.env.SECRETE_KEY, { expiresIn: "3d" });
};

// login
const loginUser = async (req, res) => {
	const { username, password } = req.body;

	try {
		const user = await User.findOne({ username });

		if (user) {
			const passwordMatch = await bcrypt.compare(password, user.password);

			if (passwordMatch) {
				const token = buatToken(user._id);

				res.status(200).json({
					username: user.username,
					token,
					message: "berhasil login",
				});
			} else {
				res.status(401).json({ message: "Wrong Password" });
			}
		} else {
			res.status(401).json({ message: "No user found" });
		}
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

//signup
const signupUser = async (req, res) => {
	const { username, password, nama, ProfilePicture } = req.body;

	try {
		const user = await User.signup(username, password, nama, ProfilePicture);
		const token = buatToken(user._id);
		res.status(200).json({ username, token, message: "berhasil sign-up" });
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
};

module.exports = { loginUser, signupUser, buatToken };
