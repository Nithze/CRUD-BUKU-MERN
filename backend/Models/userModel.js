const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;
const UserSchema = new Schema({
	username: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	nama: {
		type: String,
		required: true,
	},
	ProfilePicture: {
		type: String,
	},
});

UserSchema.statics.signup = async function (
	username,
	password,
	nama,
	ProfilePicture
) {
	const exist = await this.findOne({ username });

	if (exist) {
		throw Error(`User ${username} already exists`);
	}

	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(password, salt);

	const newUser = await this.create({
		username,
		password: hashedPassword,
		nama,
		ProfilePicture,
	});

	return newUser;
};
module.exports = mongoose.model("User", UserSchema);
