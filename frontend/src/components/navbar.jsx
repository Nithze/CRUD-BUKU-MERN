import { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";

// eslint-disable-next-line react/prop-types
const Navbar = ({ onLogout }) => {
	const [isMenuOpen, setMenuOpen] = useState(false);

	const handleToggleMenu = () => {
		setMenuOpen(!isMenuOpen);
	};

	const handleLogout = () => {
		if (onLogout) {
			onLogout().then(() => {
				window.location.href = "/login";
			});
		}
	};

	return (
		<>
			<nav>
				<div className="logo">
					<h1>BUKU-TOD!</h1>
				</div>
				<ul className={isMenuOpen ? "nav-links active" : "nav-links"}>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/catalogue-buku">Buku</Link>
					</li>
					<li>
						<Link to="#">Petugas</Link>
					</li>
					<li>
						<Link to="#">Peminjaman</Link>
					</li>
					<li>
						<Link to="#">Profil</Link>
					</li>
					<li>
						<button onClick={handleLogout}>Log-Out</button>
					</li>
				</ul>
				<div className="hamburger" onClick={handleToggleMenu}>
					<span className="line"></span>
					<span className="line"></span>
					<span className="line"></span>
				</div>
			</nav>

			{isMenuOpen && (
				<div className="menubar">
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/catalogue-buku">Buku</Link>
						</li>
						<li>
							<Link to="#">Petugas</Link>
						</li>
						<li>
							<Link to="#">Peminjaman</Link>
						</li>
						<li>
							<Link to="#">Profil</Link>
						</li>
					</ul>
				</div>
			)}
		</>
	);
};

export default Navbar;
