import React from "react";
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';

function BookDetail({ formData, setFormData }) {
  return (
    <div className="personal-info-container">
      <select value={formData.destination} onChange={(e) => { setFormData({ ...formData, destination: e.target.value });}}>
        <option value="Argentina">Argentina</option>
        <option value="Chile">Chile</option>
        <option value="Peru">Perú</option>
      </select>
      <DatePicker value={formData.bookingDate} onChange={(date) => { setFormData({ ...formData, bookingDate: date });}}/>
      <input
        type="number"
        placeholder="Numero de pasajeros"
        value={formData.seats}
        onChange={(e) => {
          setFormData({ ...formData, seats: e.target.value });
        }}
      />      
    </div>
  );
}

export default BookDetail;
