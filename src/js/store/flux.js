const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: []
		},
		actions: {
			loadContacts: () => {
				fetch("https://playground.4geeks.com/contact/agendas/alex5perez")
					.then(response => {
						if (response.ok) {
							return response.json();
						} else if (response.status === 404) {
							return getActions().createAgenda().then(() => getActions().loadContacts());
						}
					})
					.then(data => {
						if (data && data.contacts) {
							setStore({ contacts: data.contacts });
						}
					})
					.catch(err => err);
			},

			createAgenda: () => {
				return fetch("https://playground.4geeks.com/contact/agendas/alex5perez", {
					method: "POST",
					body: JSON.stringify([]),
					headers: { "Content-Type": "application/json" }
				}).catch(err => err);
			},

			createContact: (contactData) => {
				fetch("https://playground.4geeks.com/contact/agendas/alex5perez/contacts", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(contactData)
				})
					.then(response => response.json())
					.then(data => {
						const store = getStore();
						setStore({ contacts: [...store.contacts, data] });
					})
					.catch(err => console.error(err));
			},

			editContact: (id, contactData) => {
				fetch(`https://playground.4geeks.com/contact/agendas/alex5perez/contacts/${id}`, {
					method: "PUT",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(contactData)
				})
					.then(() => getActions().loadContacts())
					.catch(err => console.error(err));
			},

			handleChange: (e, currentData, setData) => {
				setData({
					...currentData,
					[e.target.id]: e.target.value
				});
			},

			deleteContact: (id) => {
				fetch(`https://playground.4geeks.com/contact/agendas/alex5perez/contacts/${id}`, {
					method: "DELETE",
					headers: { "Content-Type": "application/json" }
				})
					.then(() => {
						const store = getStore();
						setStore({ contacts: store.contacts.filter(contact => contact.id !== id) });
					})
					.catch(err => console.error(err));
			},
		}
	};
};

export default getState;
