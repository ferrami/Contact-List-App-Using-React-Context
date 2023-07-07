import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Modal, Button } from "react-bootstrap";

const ContactCard = ({ id, full_name, email, address, phone }) => {
	const { store, actions } = useContext(Context);
	const [showModal, setShowModal] = useState(false);
	const [showUpdateModal, setShowUpdateModal] = useState(false);

	const [fullName, setFullName] = useState(full_name);
	const [inputEmail, setInputEmail] = useState(email);
	const [inputPhone, setInputPhone] = useState(phone);
	const [inputAddress, setInputAddress] = useState(address);

	const handleShowModal = () => {
		setShowModal(true);
	};

	const handleCloseModal = () => {
		setShowModal(false);
	};

	const handleDeleteContact = () => {
		actions.deleteContact(id);
		setShowModal(false);
	};

	//This another MODAL fo editing:
	const handleShowUpdateModal = () => {
		setShowUpdateModal(true);
	};

	const handleCloseUpdateModal = () => {
		setShowUpdateModal(false);
	};

	const handleUpdateContact = () => {
		actions.updateContact(id, {
			"full_name": fullName,
			"email": inputEmail,
			"phone": inputPhone,
			"address": inputAddress,
			"agenda_slug": store.currentAgendaSlug,
		});
		setShowUpdateModal(false);
	};


	const randomImg = `https://robohash.org/${full_name}`;

	return (
		<div className="card border-success w-75 mb-3">

			{/* Modal para confirmar la eliminación del contacto */}
			<Modal show={showModal} onHide={handleCloseModal}>
				<Modal.Header closeButton>
					<Modal.Title>Delete Contact</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<p>You are about to DELETE a contact</p>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleCloseModal}>
						Cancel
					</Button>
					<Button variant="danger" onClick={handleDeleteContact}>
						Delete
					</Button>
				</Modal.Footer>
			</Modal>

			{/* Modal para actualizar el contacto */}
			<Modal show={showUpdateModal} onHide={handleCloseUpdateModal}>
				<Modal.Header closeButton>
					<Modal.Title>Update Contact</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<form>
						<div className="form-group">
							<label className="fs-4">Contact Name</label>
							<input
								type="text"
								className="form-control"
								placeholder="Enter full Name"
								onChange={(e) => setFullName(e.target.value)}
								value={fullName}
							/>
						</div>
						<div>
							<label className="fs-4">Email</label>
							<input
								type="email"
								className="form-control"
								placeholder="Enter email"
								onChange={(e) => setInputEmail(e.target.value)}
								value={inputEmail}
							/>
						</div>
						<div className="form-group">
							<label className="fs-4">Phone:</label>
							<input
								type="text"
								className="form-control"
								placeholder="Enter phone"
								onChange={(e) => setInputPhone(e.target.value)}
								value={inputPhone}
							/>
						</div>
						<div className="form-group">
							<label className="fs-4">Address:</label>
							<input
								type="address"
								className="form-control"
								placeholder="Enter address"
								onChange={(e) => setInputAddress(e.target.value)}
								value={inputAddress}
							/>
						</div>
					</form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleCloseUpdateModal}>
						Cancel
					</Button>
					<Button variant="primary" onClick={handleUpdateContact}>
						Update
					</Button>
				</Modal.Footer>
			</Modal>

			<div className="row">
				<div className="col-md-4">
					<img src={randomImg} className="img-fluid rounded-circle border border-dark m-2" alt="..." />
				</div>
				<div className="col-md-4">
					<div className="card-body">
						<h2 className="card-title">{full_name}</h2>
						<p className="card-text"><i className="fa fa-solid fa-phone"></i> {phone}</p>
						<p className="card-text"><span className="fa fa-solid fa-envelope"></span> <small className="text-muted">{email}</small></p>
						<p className="card-text"><span className="fa fa-solid fa-map-pin"></span> <small className="text-muted">{address}</small></p>
					</div>
				</div>
				<div className="col-md-4">
					<Link to="/">
						<button
							type="button"
							className="m-3 btn btn-outline-primary"
							onClick={() => handleShowUpdateModal()}
						>
							<i className="fa fa-solid fa-pen"></i>
						</button>
					</Link>
					<Link to="/">
						<button type="button" className="m-3 btn btn-outline-danger" onClick={() => handleShowModal()}><i className="fa fa-solid fa-trash"></i></button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ContactCard;