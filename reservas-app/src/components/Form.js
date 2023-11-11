import React, { useState } from "react";
import Confirmation from "./Confirmation";
import BookDetail from "./BookDetail";
import BookClient from "./BookClient";

function Form() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    email: "",
    passportNumber:"",
    name: "",
    lastName: "",
    destination: "Argentina",
    bookingDate:"",
    seats:0,
    phone:"",
    clientid:0,
    bookingId:0
  });

  const FormTitles = ["Detalles de reserva", "Información del cliente", "Confirmación de la reservación"];

  const PageDisplay = () => {
    if (page === 0) {
      return <BookDetail formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <BookClient formData={formData} setFormData={setFormData} />;
    } else if (page === 2) {
      return <Confirmation formData={formData} setFormData={setFormData} />;
    } 
  };

  let saveClient = async (e) => {
  
    try {
      let res = await fetch("https://bookingdest.azurewebsites.net/Client", {
        method: "POST",
        headers: {
          'Accept': 'application/json, text/plain',
          'Content-Type': 'application/json;charset=UTF-8'
      },
        body: JSON.stringify({
          passportNumber: formData.passportNumber,
          name: formData.name,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone       
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        formData.clientid = resJson.id ;    
        console.log(JSON.stringify({formData }));    
        saveBooking();
      } else {
        alert("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  let saveBooking = async (e) => {
  
    try {
      let res = await fetch("https://bookingdest.azurewebsites.net/Booking", {
        method: "POST",
        headers: {
          'Accept': 'application/json, text/plain',
          'Content-Type': 'application/json;charset=UTF-8'
      },
      body: JSON.stringify({
        BookingDate: formData.bookingDate,
        ClientId: formData.clientid,
        Destination: formData.destination,
        Seats: formData.seats     
      }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        formData.bookingId = resJson.id ;    
        setPage((currPage) => currPage + 1);
      } else {
        alert("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <div className="form">
      <div className="progressbar">
        <div
          style={{ width: page === 0 ? "33.3%" : page == 1 ? "66.6%" : "100%" }}
        ></div>
      </div>
      <div className="form-container">
        <div className="header">
          <h1>{FormTitles[page]}</h1>
        </div>
        <div className="body">{PageDisplay()}</div>
        <div className="footer">
          <button
            disabled={page == 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Regresar
          </button>
          <button
            onClick={() => {
              if (page === FormTitles.length - 3) {
               setPage((currPage) => currPage + 1); 
              }
              else if (page === FormTitles.length - 2) {
                saveClient();
                console.log(JSON.stringify({formData }));
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          >
            {page === FormTitles.length - 2 ? "Reservar" : "Siguiente"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;
