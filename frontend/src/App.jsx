import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/navbar";
import DataTables from "./components/datatables";
import BukuAddForm from "./components/addBuku";
import Dashboard from "./pages/dashboard";
import LoginForm from "./pages/login";
import SignupForm from "./pages/signup";
import "./App.css";

function App() {
	const [authenticated, setAuthenticated] = useState(false);

	useEffect(() => {
		// Check if the user is authenticated
		const token = localStorage.getItem("token");
		if (token) {
			setAuthenticated(true);
		} else {
			setAuthenticated(false);
		}
	}, []);

	const logout = () => {
		// Clear the token from localStorage on logout
		localStorage.removeItem("token");
		setAuthenticated(false);
	};

	return (
		<>
			<BrowserRouter>
				{authenticated && <Navbar onLogout={logout} />}
				<div className="pages">
					<Routes>
						<Route
							path="/"
							element={authenticated ? <Dashboard /> : <Navigate to="/login" />}
						/>
						<Route
							path="/catalogue-buku"
							element={
								authenticated ? <DataTables /> : <Navigate to="/login" />
							}
						/>
						<Route
							path="/catalogue-buku/add"
							element={
								authenticated ? <BukuAddForm /> : <Navigate to="/login" />
							}
						/>
						<Route
							path="/login"
							element={<LoginForm onLogin={() => setAuthenticated(true)} />}
						/>
						<Route path="/signup" element={<SignupForm />} />
					</Routes>
				</div>
			</BrowserRouter>
		</>
	);
}

export default App;
