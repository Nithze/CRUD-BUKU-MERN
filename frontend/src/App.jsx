import Navbar from "./components/navbar";
import DataTables from "./components/datatables";
import BukuAddForm from "./components/addBuku";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./app.css";

function App() {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<div className="pages">
					<Routes>
						<Route path="/catalogue-buku" element={<DataTables />} />
						<Route path="/catalogue-buku/add" element={<BukuAddForm />} />
					</Routes>
				</div>
			</BrowserRouter>
		</>
	);
}

export default App;

//test fugitive
