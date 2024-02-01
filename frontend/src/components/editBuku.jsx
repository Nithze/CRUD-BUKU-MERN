import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import "../css/form.css";

const BukuEditForm = () => {
	const { id } = useParams(); // Get the book ID from the route params
	const [formData, setFormData] = useState({
		judul: "",
		penulis: "",
		penerbit: "",
		harga: "",
		stok: "",
	});

	useEffect(() => {
		// Fetch book data only if editing (ID is present)
		if (id) {
			const fetchBookData = async () => {
				try {
					const response = await axios.get(`http://localhost:7777/buku/${id}`);
					const bookData = response.data;

					// Set form data with the fetched book data
					setFormData({
						judul: bookData.judul || "",
						penulis: bookData.penulis || "",
						penerbit: bookData.penerbit || "",
						harga: bookData.harga || "",
						stok: bookData.stok || "",
					});
				} catch (error) {
					console.error("Error fetching book data:", error);
				}
			};

			// Call the fetchBookData function
			fetchBookData();
		}
	}, [id]); // Run the effect whenever the book ID changes

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await axios.patch(
				`http://localhost:7777/buku/patch/${id}`,
				formData // Pass the updated book data in the request body
			);

			if (response.status === 200) {
				Swal.fire({
					icon: "success",
					title: "BERHASIL!",
					text: "Buku telah diedit, yee....",
				}).then(() => {
					window.location.href = "/catalogue-buku";
				});
			} else {
				Swal.fire({
					icon: "error",
					title: "Error",
					text: "An unexpected error occurred while adding/editing the book.",
				});
			}
		} catch (error) {
			console.error("Error adding/editing data:", error);

			Swal.fire({
				icon: "error",
				title: "Error",
				text: "An error occurred while adding/editing the book.",
			});
		}
	};

	return (
		<form className="form" onSubmit={handleSubmit}>
			<label>
				Judul:
				<input
					type="text"
					name="judul"
					value={formData.judul}
					onChange={handleChange}
				/>
			</label>
			<label>
				Penulis:
				<input
					type="text"
					name="penulis"
					value={formData.penulis}
					onChange={handleChange}
				/>
			</label>
			<label>
				Penerbit:
				<input
					type="text"
					name="penerbit"
					value={formData.penerbit}
					onChange={handleChange}
				/>
			</label>
			<label>
				Harga:
				<input
					type="text"
					name="harga"
					value={formData.harga}
					onChange={handleChange}
				/>
			</label>
			<label>
				Stok:
				<input
					type="text"
					name="stok"
					value={formData.stok}
					onChange={handleChange}
				/>
			</label>
			<button type="submit" className="add-data-btn">
				Submit
			</button>
		</form>
	);
};

export default BukuEditForm;
