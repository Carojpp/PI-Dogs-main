import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar.jsx";
import "./createBreed.css";

function CreateTemperament() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleInputChange = (event, setState) => {
    setState(event.target.value);
    setMessage("");
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Add your validation logic here
    // If everything is valid, do something with the form data

    if (name.trim() == "") {
      setMessage("Error: All fields are required");
      return;
    }

    const breedData = {
      name,
    };

    fetch("http://localhost:3001/createtemperament", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(breedData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data here
        console.log("Success:", data);
        setMessage(data.mensaje);
        setName("");
      })
      .catch((error) => {
        console.error("Error:", error);
        setMessage("Error: Temperament was not created");
      });
  };

  return (
    <>
      <Navbar />
      <form onSubmit={handleFormSubmit} className="form">
        <input
          type="text"
          value={name}
          onChange={(event) => handleInputChange(event, setName)}
          placeholder="Name"
          className="input"
        />

        <button type="submit" className="input">
          Create Temperament
        </button>
        {message != "" && <p className="message">{message}</p>}
      </form>
    </>
  );
}

export default CreateTemperament;
