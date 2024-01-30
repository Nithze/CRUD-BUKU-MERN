const Buku = require("../Models/bukuModel");

const mongoose = require("mongoose");

//function untuk ngambil data buku
const getSemuaBuku = async (req, res) => {
	try {
		const buku = await Buku.find({}).sort({ createdAt: -1 });

		if (!buku) {
			return res.status(404).json({ status: "404, ga ada buku bwang" });
		}

		res.status(200).json(buku);
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
};

//function untuk mengambil satu data buku
const getBuku = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(400).json({ message: "Invalid ID" });
	}

	try {
		const buku = await Buku.findById(id);

		if (!buku) {
			return res.status(404).json({ message: "Buku tidak ditemukan" });
		}

		res.status(200).json(buku);
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
};

const tambahBuku = async (req, res) => {
	const { judul, penulis, penerbit, harga, stok } = req.body;

	try {
		const addBuku = await Buku.create({
			judul,
			penulis,
			penerbit,
			harga,
			stok,
		});
		res.status(200).json(addBuku);
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
};

const deleteBuku = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(400).json({ message: "Invalid ID" });
	}

	try {
		const buku = await Buku.findByIdAndDelete(id);

		if (!buku) {
			return res.status(404).json({ message: "Buku tidak ditemukan" });
		}

		res.status(200).json({ message: "buku dihapus", buku });
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
};

const updateBuku = async (req, res) => {
	const { id } = req.params;
	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(400).json({ message: "Invalid ID" });
	}

	try {
		const buku = await Buku.findByIdAndUpdate(
			{ _id: id },
			{
				...req.body,
			}
		);

		if (!buku) {
			return res.status(404).json({ message: "Buku tidak ditemukan" });
		}

		res.status(200).json({ message: "Buku berhasil di-update", buku });
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
};

module.exports = {
	getSemuaBuku,
	getBuku,
	tambahBuku,
	updateBuku,
	deleteBuku,
};
