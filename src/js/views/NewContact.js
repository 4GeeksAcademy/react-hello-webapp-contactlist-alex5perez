import React, { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { ContactForm } from "./ContactForm";

export const NewContact = () => {

  const [contactData, setContactData] = useState({ name: "", phone: "", email: "", address: "" });
  const { actions } = useContext(Context);
  const navigate = useNavigate();

  const handleChange = (e) => {
    actions.handleChange(e, contactData, setContactData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    actions.createContact(contactData);
    navigate("/");
  };

  return (
    <div className="container text-center mt-4">
      <h2>Nuevo Contacto</h2>
      <ContactForm contactData={contactData} handleChange={handleChange} onSubmit={handleSubmit} buttonLabel="Crear Usuario" />
    </div>
  );
};
