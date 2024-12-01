import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Home = () => {

	const { store, actions } = useContext(Context);
	const contactList = Array.isArray(store.contacts) ? store.contacts : [];

	useEffect(() => {
		actions.loadContacts();
	}, []);

	function handleDelete(id) {
		actions.deleteContact(id);
	}

	return (
		<div className="container mt-4">
			<div className="row justify-content-center">
				<div className="col-12 col-md-8">
					<h1 className="mb-4 text-center">Lista de Contactos</h1>
					<div className="row my-3">
						<div className="col-12 text-center">
							<Link to="/new-contact">
								<button className="btn btn-success">Crear nuevo contacto</button>
							</Link>
						</div>
					</div>
					{(contactList.map((contact, index) => (
						<div key={index} className="card mb-3">
							<div className="card-body d-flex justify-content-between align-items-center">
								<div>
									<h5 className="card-title">{contact.name}</h5>
									<p className="card-text">
										<i className="fas fa-home" /> <strong>Dirección:</strong> {contact.address} <br />
										<i className="fas fa-phone" /> <strong>Teléfono:</strong> {contact.phone} <br />
										<i className="fas fa-envelope" /> <strong>Correo:</strong> {contact.email}
									</p>
								</div>
								<div>
									<Link to={`/edit-contact/${contact.id}`}>
										<button className="btn btn-warning me-2">
											<i className="fas fa-pencil-alt"></i>
										</button>
									</Link>
									<button
										className="btn btn-danger"
										onClick={() => handleDelete(contact.id)}>
										<i className="fas fa-trash"></i>
									</button>
								</div>
							</div>
						</div>
					))
					)}
				</div>
			</div>
		</div>
	);
};