import { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

export const useSignup = () => {
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(null);
	const { dispatch } = useContext(AuthContext);

	const signup = async (username, password, nama) => {
		setIsLoading(true);
		setError(null);

		try {
			const response = await axios.post(
				"http://localhost:7777/auth/signup",
				{
					username: username,
					password: password,
					nama: nama,
				},
				{
					responseType: "json",
				}
			);

			const json = response.data;

			if (response.status !== 200) {
				setIsLoading(false);
				setError(json.error);
			} else {
				localStorage.setItem("user", JSON.stringify(json));

				dispatch({ type: "LOGIN", payload: json });

				setIsLoading(false);
			}
		} catch (error) {
			setIsLoading(false);
			setError("An error occurred during signup.");
		}
	};

	return { signup, isLoading, error };
};
