import "../css/login.css";
import { useState } from "react";
import { useSignup } from "../hooks/useSignup";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [nama, setNama] = useState("");
	const { signup, error, isLoading } = useSignup();
	const navigate = useNavigate();

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			await signup(username, password, nama);
			navigate("/");
			window.location.reload();
		} catch (error) {
			console.error(error);
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
					<button type="submit" disabled={isLoading}>
						Signup
					</button>
					{error && <div className="error">{error}</div>}
				</div>
			</form>
		</div>
	);
};

export default SignupForm;
