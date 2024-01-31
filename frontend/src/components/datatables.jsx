import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import "../css/datatable.css";

const formatRupiah = (price) => {
	return new Intl.NumberFormat("id-ID", {
		style: "currency",
		currency: "IDR",
	}).format(price);
};

const DataTable = () => {
	const [books, setBooks] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get("http://localhost:7777/buku");
				setBooks(response.data);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchData();
	}, []);

	const handleDelete = async (_id) => {
		const result = await Swal.fire({
			title: "Apa anda yakin?",
			text: "Tindakan ini tidak bisa diualang.",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes",
		});

		if (result.isConfirmed) {
			try {
				await axios.delete(`http://localhost:7777/buku/delete/${_id}`);
				setBooks(books.filter((book) => book._id !== _id));
				Swal.fire("Deleted!", "Buku telah dihapus dari muka bumi.", "success");
			} catch (error) {
				console.error("Error deleting data:", error);
				Swal.fire(
					"Error!",
					"An error occurred while deleting the book.",
					"error"
				);
			}
		}
	};

	return (
		<div className="data-table">
			<Link to="/catalogue-buku/add">
				<button
					className="add-data-btn"
					onClick={() => console.log("Tambah Data Buku")}
				>
					+
				</button>
			</Link>

			<table className="table">
				<thead className="table-header">
					<tr>
						<th className="header__item">Judul</th>
						<th className="header__item">Penulis</th>
						<th className="header__item">Penerbit</th>
						<th className="header__item">Harga</th>
						<th className="header__item">Stok</th>
						<th className="header__item">Aksi</th>
					</tr>
				</thead>
				<tbody>
					{books.map((book) => (
						<tr key={book._id} className="table-row">
							<td className="table-data">{book.judul}</td>
							<td className="table-data">{book.penulis}</td>
							<td className="table-data">{book.penerbit}</td>
							<td className="table-data">{formatRupiah(book.harga)}</td>
							<td className="table-data">{book.stok}</td>
							<td className="table-data table-actions">
								<button onClick={() => console.log("Edit", book._id)}>
									Edit
								</button>
								<button onClick={() => handleDelete(book._id)}>Delete</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default DataTable;
