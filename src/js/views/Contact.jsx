import React, { useState, useEffect, useContext } from "react";

import { Context } from "../store/appContext.js";

import ContactCard from "../component/ContactCard.jsx"




export const Contact = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		getContactList();
	}, []);

	const getContactList = () => {
		actions.getContacts();
	}


	return (
		<div className="container">


			{
				store.agenda.map((item, index) => (
					<ContactCard key={index} {...item} />
				))
			}

		</div>
	);
};

