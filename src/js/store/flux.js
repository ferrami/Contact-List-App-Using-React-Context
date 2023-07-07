const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			agenda: [],
			currentAgendaSlug: "ferchoRam",
			contactList: "",
			contactSelected: {},
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Get contact function
			getContacts: async () => {
				try {
					const { currentAgendaSlug } = getStore();
					const response = await fetch(`https://assets.breatheco.de/apis/fake/contact/agenda/${currentAgendaSlug}`);
					const data = await response.json();
					setStore({ agenda: data });
				} catch (error) {
					console.error("Error getting contacts:", error);
				}
			},

			// Add contact function
			addContact: async (newContact) => {
				try {
					const response = await fetch("https://assets.breatheco.de/apis/fake/contact/", {
						method: "POST",
						body: JSON.stringify(newContact),
						headers: {
							"Content-Type": "application/json"
						}
					});
					const data = await response.json();
					const store = getStore();
					setStore({ agenda: [...store.agenda, data] });
					console.log("Contact has been added:", data);
				} catch (error) {
					console.error("Error adding contact:", error);
				}
			},

			// update contact function
			updateContact: async (id, updatedContact) => {
				try {
					const response = await fetch(`https://assets.breatheco.de/apis/fake/contact/${id}`, {
						method: "PUT",
						body: JSON.stringify(updatedContact),
						headers: {
							"Content-Type": "application/json"
						}
					});
					const data = await response.json();
					const store = getStore();
					const updatedAgenda = store.agenda.map(contact => {
						if (contact.id === id) {
							return { ...contact, ...updatedContact };
						}
						return contact;
					});
					setStore({ agenda: updatedAgenda });
					console.log("Contact has been updated:", data);
				} catch (error) {
					console.error("Error updating contact:", error);
				}
			},

			// Delete contact function
			deleteContact: async (id) => {
				try {
					const response = await fetch(`https://assets.breatheco.de/apis/fake/contact/${id}`, {
						method: "DELETE"
					});
					const data = await response.json();
					const store = getStore();
					const updatedAgenda = store.agenda.filter((contact) => contact.id !== id);
					setStore({ agenda: updatedAgenda });
					console.log("Contact has been deleted:", data);
				} catch (error) {
					console.error("Error deleting contact:", error);
				}
			},
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				// fetch().then().then(data => setStore({ "foo": data.bar }))
			},
			changeColor: (index, color) => {
				const store = getStore();
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
