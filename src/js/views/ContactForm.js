import React from "react";

export const ContactForm = ({ contactData, handleChange, onSubmit, buttonLabel }) => {
    return (
        <form onSubmit={onSubmit}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Nombre</label>
                <input type="text" id="name" className="form-control" placeholder="Ingresa el nombre" value={contactData.name || ""} onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="phone" className="form-label">Teléfono</label>
                <input type="text" id="phone" className="form-control" placeholder="Ingresa el teléfono" value={contactData.phone || ""} onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Correo Electrónico</label>
                <input type="email" id="email" className="form-control" placeholder="Ingresa el correo" value={contactData.email || ""} onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="address" className="form-label">Dirección</label>
                <input type="text" id="address" className="form-control" placeholder="Ingresa la dirección" value={contactData.address || ""} onChange={handleChange} />
            </div>
            <div className="d-flex justify-content-center">
                <button type="submit" className="btn btn-primary">{buttonLabel}</button>
            </div>
        </form>
    );
};