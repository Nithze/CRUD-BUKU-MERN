import Navbar from "./components/navbar";
import DataTables from "./components/datatables";
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
					</Routes>
				</div>
			</BrowserRouter>
		</>
	);
}

export default App;

//test fugitive
