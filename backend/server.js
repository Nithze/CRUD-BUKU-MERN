require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

//routes
const BukuRoutes = require("./Routes/BukuRoutes");

const app = express();
app.use(cors());

mongoose.connect(process.env.MONGODB_URI).then(() => {
	app.listen(process.env.PORT, () => {
		console.log(
			`server connected to  db & listening on port http://localhost:${process.env.PORT}`
		);
	});

	app.use(express.json());

	app.use((req, res, next) => {
		console.log(req.path, req.method);
		next();
	});

	app.get("/", (req, res) => {
		res.json({ message: "ITS RUNNING BIETCH!" });
	});

	app.use("/buku", BukuRoutes);
});
