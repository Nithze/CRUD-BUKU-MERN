import { useState } from "react";
import { useLogin } from "../hooks/useLogin";

const LoginForm = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const { login, error, isLoading } = useLogin();

	const handleUsernameChange = (event) => {
		setUsername(event.target.value);
	};

	const handlePasswordChange = (event) => {
		setPassword(event.target.value);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			await login(username, password);
			window.location.href = "/";
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className="login-container">
			<form className="login-form" onSubmit={handleSubmit}>
				<div>
					<label htmlFor="username">Username</label>
					<input
						type="text"
						id="username"
						name="username"
						value={username}
						onChange={handleUsernameChange}
					/>
				</div>
				<div>
					<label htmlFor="password">Passphrase</label>
					<input
						type="password"
						id="password"
						name="password"
						value={password}
						onChange={handlePasswordChange}
					/>
				</div>
				<div>
					<button type="submit" disabled={isLoading}>
						Login
					</button>
					{error && <div className="error">{error}</div>}
				</div>
				<a className="link" href="/signup">
					Ga punya akun? yuk Sign-Up
				</a>
			</form>
		</div>
	);
};

export default LoginForm;
