import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";


import { Context } from "../store/appContext";


export const AddContact = () => {

    const { store, actions } = useContext(Context);

    const [full_Name, setFull_Name] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

    const addContact = () => {

        if (full_Name === '' || email === '' || phone === '' || address === '') {
            alert("Details cannot be empty! :)");
            return;
        }
        const newContact = {
            "full_name": full_Name,
            "email": email,
            "agenda_slug": store.currentAgendaSlug,
            "address": address,
            "phone": phone,
        };

        console.log(newContact);
        actions.addContact(newContact);
    };

    return (
        <div className="container">
            <div className="card border-success mb-3">
                <div className="p-3">
                    <h1 className="text-center mt-5">Add a new contact</h1>
                    <form className="needs-validation">
                        <div className="form-group">
                            <label className="fs-4">Contact Name</label>
                            <input type="text" className="form-control" placeholder="Enter full Name" onChange={(e) => setFull_Name(e.target.value)}
                                value={full_Name} required />
                        </div>
                        <div>
                            <label className="fs-4">Email</label>
                            <input type="email" className="form-control" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}
                                value={email} required />
                        </div>
                        <div className="form-group">
                            <label className="fs-4">Phone:</label>
                            <input type="text" className="form-control" placeholder="Enter phone"
                                onChange={(e) => setPhone(e.target.value)}
                                value={phone} required
                            />
                        </div>
                        <div className="form-group">
                            <label className="fs-4">Address:</label>
                            <input type="address" className="form-control" placeholder="Enter address"
                                onChange={(e) => setAddress(e.target.value)}
                                value={address} required
                            />
                        </div>
                        <Link to="/">
                            <button type="button" className="btn btn-success m-3" onClick={() => addContact()}>Save Contact</button>
                        </Link>
                        <Link to="/">
                            <button type="button" className="btn btn-link">Back to Contact List</button>
                        </Link>

                    </form>
                </div>
            </div>
        </div>
    )
}