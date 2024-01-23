import React, { useState, useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar.jsx";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./details.css";

function DogDetails() {
  const navigate = useNavigate();
  const [dog, setDog] = useState(null);
  const [img, setImg] = useState(null);
  const { id } = useParams();

  const apiDogs = useSelector((state) => state.api);

  const fetchDogDetails = async () => {
    let data = null;
    let data_img = "";
    let response = null;
    if (apiDogs == "dogs") {
      response = await fetch(`https://api.thedogapi.com/v1/breeds/${id}`);
      data = await response.json();

      const response_img = await fetch(
        `https://api.thedogapi.com/v1/images/${data.reference_image_id}`
      );
      data_img = await response_img.json();
      setImg(data_img.url);
    } else if (apiDogs == "local") {
      response = await fetch(`http://localhost:3001/dogsDetail/${id}`);
      data = await response.json();
    }
    console.log(" data ", data);


    setDog({
      id: data.id,
      name: data.name,
      height: data.height&&data.height.metric ? data.height.metric : data.height,
      weight: data.weight&&data.weight.metric ? data.weight.metric : data.weight,
      temperament: data.temperament,
      life_span: data.life_span,
    });
  };

  useEffect(() => {
    if (apiDogs !== "") fetchDogDetails();
  }, [apiDogs]);

  return (
    <>
      <Navbar />
      {dog && (
        <div className="details_inf">
          <h2>{dog.name}</h2>
          <div
            className="details_img"
            alt={dog.name}
            style={{
              backgroundImage: `url(${img})`,
            }}
          />
          <p>ID: {dog.id}</p>
          <p>Altura: {dog.height} cm</p>
          <p>Peso: {dog.weight} kg</p>
          <p>Temperamentos: {dog.temperament}</p>
          <p>Años de vida: {dog.life_span}</p>
        </div>
      )}
    </>
  );
}

export default DogDetails;
