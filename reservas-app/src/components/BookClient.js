import React from "react";
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';

function isValidEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}




function BookClient({ formData, setFormData }) {

  const handleChange = event => {
    if (!isValidEmail(event.target.value)) {
      alert('Email is invalid');
    } 
  
    setFormData({ ...formData, email: event.target.value });
  };
  
  return (
    <div className="personal-info-container">
      <select value={formData.destination} disabled={true} >
        <option value="Argentina">Argentina</option>
        <option value="Chile">Chile</option>
        <option value="Peru">Perú</option>
      </select>
      <DatePicker value={formData.bookingDate} disabled={true}/>
      <input
        type="number"
        placeholder="Numero de pasajeros"
        value={formData.seats}
        onChange={(e) => {
          setFormData({ ...formData, seats: e.target.value });
        }}
        disabled={true}
      />   
      <input
        type="text"
        placeholder="Pasaporte"
        value={formData.passportNumber}
        onChange={(e) => {
          setFormData({ ...formData, passportNumber: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Nombre"
        value={formData.name}
        onChange={(e) => {
          setFormData({ ...formData, name: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Apellido"
        value={formData.lastName}
        onChange={(e) => {
          setFormData({ ...formData, lastName: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Email"
        value={formData.email}
       /* onChange={handleChange}*/
       onChange={(e) => {
        setFormData({ ...formData, email: e.target.value });
      }}
      />   
      <input
        type="text"
        placeholder="Número de teléfono"
        value={formData.phone}
        onChange={(e) => {
          setFormData({ ...formData, phone: e.target.value });
        }}
      />   
    </div>
  );
}

export default BookClient;
