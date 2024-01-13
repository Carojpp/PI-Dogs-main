import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./dogs.css";

const Dogs = ({ page }) => {
  const [dogs, setDogs] = useState([]);
  const [api, setApi] = useState("dogs");

  const fetchDogs = async () => {
    const response = await fetch(
      `http://localhost:3001/${api}?limit=8&page=${page}`
    );
    const data = await response.json();
    setDogs(data);
  };

  const fetchImg = async (image_id) => {
    const response_img = await fetch(
      `https://api.thedogapi.com/v1/images/${image_id}`
    );
    const data_img = await response_img.json();
    return data_img.url;
  };

  useEffect(() => {
    fetchDogs();
  }, [page,api]);

  return (
    <>
      {/* add btns to changes between local api o external api */}
      <button onClick={() => setApi("local")}>Local</button>
      <button onClick={() => setApi("dogs")}>Api</button>
      <div className="breeds">
        {dogs.map((dog, index) => (
          <div
            className="breed"
            key={index}
            style={{
              border: "1px solid black",
              margin: "10px",
              padding: "10px",
            }}
          >
            {dog && dog.reference_image_id && (
              <ImgDog image_id={dog.reference_image_id} />
            )}
            <h2>{dog.name}</h2>
            <p>{dog.temperament}</p>
            <p>Peso: {dog.weight.metric ? dog.weight.metric : dog.weight} kg</p>
            <Link className="link" to={`/detail/${dog.id}`}>
              view dog
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Dogs;

const ImgDog = ({ image_id }) => {
  const [img, setImg] = useState(null);

  const fetchImg = async (image_id) => {
    const response_img = await fetch(
      `https://api.thedogapi.com/v1/images/${image_id}`
    );
    const data_img = await response_img.json();
    setImg(data_img.url);
  };

  useEffect(() => {
    fetchImg(image_id);
  }, [image_id]);

  return (
    <div
      className="img"
      style={{
        backgroundImage: `url(${img})`,
      }}
    />
  );
};
