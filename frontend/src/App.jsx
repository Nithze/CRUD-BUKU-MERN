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
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const checkAuthentication = async () => {
			const userToken = JSON.parse(localStorage.getItem("user"));

			if (userToken && userToken.token) {
				setAuthenticated(true);
			}

			setLoading(false);
		};

		checkAuthentication();
	}, []); // Empty dependency array to run the effect only once

	// Show loading indicator or other UI while checking authentication
	if (loading) {
		return <div>Loading...</div>;
	}

	return (
		<>
			<BrowserRouter>
				{authenticated && <Navbar />}
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
