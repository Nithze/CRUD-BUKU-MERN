import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "../css/form.css"; // Make sure to import your form styles

const Form = () => {
	const [formData, setFormData] = useState({
		judul: "",
		penulis: "",
		penerbit: "",
		harga: "",
		stok: "",
	});

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
			// Send POST request using Axios
			const response = await axios.post(
				"http://localhost:7777/buku/add",
				formData
			);

			// Check if the request was successful
			if (response.status === 200) {
				// Display SweetAlert2 success alert
				Swal.fire({
					icon: "success",
					title: "Data Added Successfully!",
					text: "The book has been added to the catalogue.",
				}).then(() => {
					window.location.href = "/catalogue-buku";
				});
			} else {
				// Display SweetAlert2 error alert for unexpected response status
				Swal.fire({
					icon: "error",
					title: "Error",
					text: "An unexpected error occurred while adding the book.",
				});
			}
		} catch (error) {
			console.error("Error adding data:", error);

			// Display SweetAlert2 error alert
			Swal.fire({
				icon: "error",
				title: "Error",
				text: "An error occurred while adding the book.",
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
			{/* <Link to={"/catalogue-buku"}>
				<button className="add-data-btn">Submit</button>
			</Link> */}
		</form>
	);
};

export default Form;
