import { useState } from "react";
import "../css/Navbar.css";

const Navbar = () => {
	const [isMenuOpen, setMenuOpen] = useState(false);

	const handleToggleMenu = () => {
		setMenuOpen(!isMenuOpen);
	};

	return (
		<>
			<nav>
				<div className="logo">
					<h1>BUKU-TOD!</h1>
				</div>
				<ul className={isMenuOpen ? "nav-links active" : "nav-links"}>
					<li>
						<a href="/">Home</a>
					</li>
					<li>
						<a href="/catalogue-buku">Buku</a>
					</li>
					<li>
						<a href="#">Petugas</a>
					</li>
					<li>
						<a href="#">Peminjaman</a>
					</li>
					<li>
						<a href="#">Profil</a>
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
							<a href="#">Home</a>
						</li>
						<li>
							<a href="#">Buku</a>
						</li>
						<li>
							<a href="#">Petugas</a>
						</li>
						<li>
							<a href="#">Peminjaman</a>
						</li>
						<li>
							<a href="#">Profil</a>
						</li>
					</ul>
				</div>
			)}
		</>
	);
};

export default Navbar;
