import "../css/login.css";
import { useState } from "react";
import axios from "axios";

const SignupForm = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [nama, setNama] = useState("");

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			const response = await axios.post("http://localhost:7777/auth/signup", {
				username: username,
				password: password,
				nama: nama,
			});

			if (response.status === 200) {
				window.location.href = "/login";
				console.log("Signup successful");
			} else {
				// Handle error
				console.error("Signup failed");
			}
		} catch (error) {
			// Handle error
			console.error("Error during signup:", error);
		}
	};

	return (
		<div className="login-container">
			<form className="login-form" onSubmit={handleSubmit}>
				<div>
					<label htmlFor="username">Username:</label>
					<input
						type="text"
						id="username"
						name="username"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
				</div>
				<div>
					<label htmlFor="password">Password:</label>
					<input
						type="password"
						id="password"
						name="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<div>
					<label htmlFor="nama">Nama:</label>
					<input
						type="text"
						id="nama"
						name="nama"
						value={nama}
						onChange={(e) => setNama(e.target.value)}
					/>
				</div>
				<div>
					<button type="submit">Signup</button>
				</div>
			</form>
		</div>
	);
};

export default SignupForm;
