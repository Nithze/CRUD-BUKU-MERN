import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// eslint-disable-next-line react/prop-types
const LoginForm = ({ onLogin }) => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleUsernameChange = (event) => {
		setUsername(event.target.value);
	};

	const handlePasswordChange = (event) => {
		setPassword(event.target.value);
	};

	const navigate = useNavigate();

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			const response = await axios.post("http://localhost:7777/auth/login", {
				username: username,
				password: password,
			});

			if (response.status === 200) {
				console.log("Login successful");

				if (onLogin) {
					onLogin();
				}

				navigate("/");
			} else {
				console.error("Login failed");
			}
		} catch (error) {
			console.error("Error during login:", error);
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
						onChange={handleUsernameChange}
					/>
				</div>
				<div>
					<label htmlFor="password">Password:</label>
					<input
						type="password"
						id="password"
						name="password"
						value={password}
						onChange={handlePasswordChange}
					/>
				</div>
				<a href="/signup">Ga punya akun? yuk Sign-Up</a>
				<div>
					<button type="submit">Login</button>
				</div>
			</form>
		</div>
	);
};

export default LoginForm;
