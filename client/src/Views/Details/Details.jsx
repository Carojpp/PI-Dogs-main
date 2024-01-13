import React, { useState, useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar.jsx";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./details.css";

function DogDetails() {
  const navigate = useNavigate();
  const [dog, setDog] = useState(null);
  const [img, setImg] = useState(null);
  const { id } = useParams();

  const fetchDogDetails = async () => {
    const response = await fetch(`https://api.thedogapi.com/v1/breeds/${id}`);
    const data = await response.json();

    const response_img = await fetch(`https://api.thedogapi.com/v1/images/${data.reference_image_id}`);
    const data_img = await response_img.json();
    setImg(data_img.url)
    setDog(data);
  };

  useEffect(() => {
    fetchDogDetails();
  }, []);

  return (
    <>
      <Navbar />
      {dog && (
        <div className="details_inf">
          <h2>{dog.name}</h2>
          <div className="details_img" alt={dog.name} style={{
            backgroundImage: `url(${img})`
          }}/>
          <p>ID: {dog.id}</p>
          <p>Altura: {dog.height.metric} cm</p>
          <p>Peso: {dog.weight.metric} kg</p>
          <p>Temperamentos: {dog.temperament}</p>
          <p>Años de vida: {dog.life_span}</p>
        </div>
      )}
    </>
  );
}

export default DogDetails;
