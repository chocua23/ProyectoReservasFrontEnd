import React from "react";
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';

function isValidEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}




function Confirmation({ formData, setFormData }) {

  const handleChange = event => {
    if (!isValidEmail(event.target.value)) {
      alert('Email is invalid');
    } 
  
    setFormData({ ...formData, email: event.target.value });
  };
  
  return (  
    
    <div className="personal-info-container">      
      <label for="test">Test</label>
      <select id="iDestination" value={formData.destination} disabled={true} >
        <option value="Argentina">Argentina</option>
        <option value="Chile">Chile</option>
        <option value="Peru">Perú</option>
      </select>
      <DatePicker value={formData.bookingDate} disabled={true}/>
      <input
        type="number"
        placeholder="Numero de pasajeros"
        value={formData.seats}
        disabled={true}
      />   
      <input
        type="text"
        placeholder="Pasaporte"
        value={formData.passportNumber}
        disabled={true}
      />
      <input
        type="text"
        placeholder="Nombre"
        value={formData.name}
        disabled={true}
      />
      <input
        type="text"
        placeholder="Apellido"
        value={formData.lastName}
        disabled={true}
      />
      <input
        type="text"
        placeholder="Email"
        value={formData.email}
        disabled={true}
      />   
      <input
        type="text"
        placeholder="Número de teléfono"
        value={formData.phone}
        disabled={true}
      />   
    </div>
  );
}

export default Confirmation;
