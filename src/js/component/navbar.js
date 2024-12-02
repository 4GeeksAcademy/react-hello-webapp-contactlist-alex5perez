import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
			<Link to="/" className="navbar-brand">
				<i className="fas fa-home me-2"></i>INICIO
			</Link>
			<div className="ms-auto dropdown">
				<button className="btn btn-primary dropdown-toggle" id="menuDropdown" data-bs-toggle="dropdown" aria-expanded="false">Menu
				</button>
				<ul className="dropdown-menu dropdown-menu-end" aria-labelledby="menuDropdown">
					<li>
						<Link className="dropdown-item">Aun no has desbloqueado esta parte del mapa.</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};
