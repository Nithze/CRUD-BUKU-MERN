const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../Models/userModel");

// login
const loginUser = async (req, res) => {
	const { username, password } = req.body;

	try {
		const user = await User.findOne({ username });

		if (user) {
			const passwordMatch = await bcrypt.compare(password, user.password);

			if (passwordMatch) {
				const token = jwt.sign({ username: user.username }, "your-secret-key", {
					expiresIn: "1h",
				});

				res.status(200).json({
					username: user.username,
					user,
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

const authenticateToken = (req, res, next) => {
	const token = req.header("Authorization");

	if (!token) {
		return res.status(401).json({ message: "Unauthorized - Missing token" });
	}

	jwt.verify(token, "your-secret-key", (err, user) => {
		if (err) {
			return res.status(403).json({ message: "Forbidden - Invalid token" });
		}

		req.user = user;
		next();
	});
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

module.exports = { loginUser, signupUser, authenticateToken };
