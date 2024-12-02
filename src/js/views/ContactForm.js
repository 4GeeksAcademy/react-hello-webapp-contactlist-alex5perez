import React from "react";
import { Link } from "react-router-dom";

export const ContactForm = ({ contactData, handleChange, onSubmit, buttonLabel }) => {
    return (
        <form onSubmit={onSubmit}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label text-start d-block">Nombre</label>
                <input type="text" id="name" className="form-control" placeholder="Ingresa el nombre" value={contactData.name || ""} onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="phone" className="form-label text-start d-block">Teléfono</label>
                <input type="text" id="phone" className="form-control" placeholder="Ingresa el teléfono" value={contactData.phone || ""} onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label text-start d-block">Correo Electrónico</label>
                <input type="email" id="email" className="form-control" placeholder="Ingresa el correo" value={contactData.email || ""} onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="address" className="form-label text-start d-block">Dirección</label>
                <input type="text" id="address" className="form-control" placeholder="Ingresa la dirección" value={contactData.address || ""} onChange={handleChange} />
            </div>
            <div className="d-flex justify-content-center gap-3">
                <button type="submit" className="btn btn-primary">{buttonLabel}</button>
                <Link to="/">
                    <button type="button" className="btn btn-success">Volver a contactos</button>
                </Link>
            </div>
        </form>
    );
};
