import "../styles/Contact.css";
import { useState, useRef } from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Contact = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [subject, setSubject] = useState();
  const [message, setMessage] = useState();

  // const userCollectionRef = collection(db, "contactdata");

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   addDoc(userCollectionRef, {
  //     name: name,
  //     email: email,
  //     subject: subject,
  //     message: message,
  //   })
  //     .then(() => {
  //       alert("form submitted Successfully");
  //     })
  //     .catch((error) => {
  //       alert(error.message);
  //     });
  // };

  const mapRef = useRef(null);

  return (
    <div className="contactMain">
      <div className="contactDiv1">
        <h1>
          Contact <span style={{ color: "#ff00a2" }}>me</span>
        </h1>
        <h3>
          I am interested in freelance opportunities - especially on ambitious
          or large projects. However, if you have any other requests or
          questions, don't hesitate to contact me using below form either.
        </h3>
        <div className="contactDiv11">
          <div className="contactDiv111">
            <input
              placeholder="Name"
              type="text"
              name="name"
              onChange={(event) => {
                setName(event.target.value);
              }}
              required
            />
            <input
              placeholder="Email"
              type="email"
              name="email"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              required
            />
          </div>
          <div className="contactDiv112">
            <input
              placeholder="Subject"
              type="text"
              name="subject"
              onChange={(event) => {
                setSubject(event.target.value);
              }}
              required
            />
          </div>
          <div className="contactDiv113">
            <textarea
              placeholder="Message"
              name="message"
              onChange={(event) => {
                setMessage(event.target.value);
              }}
              required
            ></textarea>
          </div>
          <div className="contactDiv114">
            <button className="flat-button"> Submit </button>
          </div>
        </div>
      </div>

      <MapContainer
        center={[4.804597, 6.932498]}
        zoom={13}
        ref={mapRef}
        className="map"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* Additional map layers or components can be added here */}
      </MapContainer>
    </div>
  );
};

export default Contact;
