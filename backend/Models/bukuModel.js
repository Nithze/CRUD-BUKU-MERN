const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BukuSchema = new Schema(
	{
		judul: {
			type: String,
			required: true,
		},
		penulis: {
			type: String,
			required: true,
		},
		penerbit: {
			type: String,
			required: true,
		},
		harga: {
			type: Number,
			required: true,
		},
		stok: {
			type: Number,
			required: true,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Buku", BukuSchema);
