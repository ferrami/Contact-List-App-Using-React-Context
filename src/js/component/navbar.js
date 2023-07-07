import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-dark mb-3">
			<Link className="text-decoration-none" to="/">
				<span className="navbar-brand mx-4 text-decoration-none h1">Contact List</span>
			</Link>
			<div className="ml-auto">
				<Link to="/addContact">
					<button className="btn btn-outline-success mx-4">Add a New Contact</button>
				</Link>
			</div>
		</nav>
	);
};
