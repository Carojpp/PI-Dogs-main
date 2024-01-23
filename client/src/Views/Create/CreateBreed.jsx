import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar.jsx";
import "./createBreed.css";

function CreateBreed() {
  const [name, setName] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [lifeSpan, setLifeSpan] = useState("");
  const [temperaments, setTemperaments] = useState([]);
  const [temperamentList, setTemperamentList] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/temperaments")
      .then((response) => response.json())
      .then((data) => {
        setTemperamentList(data.entidad);
      });
  }, []);

  const handleInputChange = (event, setState) => {
    setState(event.target.value);
    setMessage("");
  };

  const handleSelectChange = (event) => {
    setTemperaments(
      Array.from(event.target.selectedOptions, (option) => option.value)
    );
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
  

    if (
      name.trim() == "" ||
      height.trim() == "" ||
      weight.trim() == "" ||
      lifeSpan.trim() == ""
    ) {
      setMessage("Error: All fields are required");
      return;
    }

    const breedData = {
      name,
      height,
      weight,
      age: lifeSpan,
      temperaments,
    };

    fetch("http://localhost:3001/createdog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(breedData),
    })
      .then((response) => response.json())
      .then((data) => {
       
        console.log("Success:", data);
        setMessage(data.mensaje);

        setName("");
        setHeight("");
        setWeight("");
        setLifeSpan("");
        setTemperaments("");
      })
      .catch((error) => {
        console.error("Error:", error);
        setMessage("Error: Breed was not created");
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
        <input
          type="number"
          value={height}
          onChange={(event) => handleInputChange(event, setHeight)}
          placeholder="Height"
          className="input"
        />
        <input
          type="number"
          value={weight}
          onChange={(event) => handleInputChange(event, setWeight)}
          placeholder="Weight"
          className="input"
        />
        <input
          type="number"
          value={lifeSpan}
          onChange={(event) => handleInputChange(event, setLifeSpan)}
          placeholder="Life Span"
          className="input"
        />
        <select
          multiple={true}
          value={temperaments}
          onChange={handleSelectChange}
          className="input"
        >
          {temperamentList.map((temperament, index) => (
            <option key={index} value={temperament.name}>
              {temperament.name}
            </option>
          ))}
        </select>
        <button type="submit" className="input">
          Create Breed
        </button>
        {message != "" && <p className="message">{message}</p>}
      </form>
    </>
  );
}

export default CreateBreed;
