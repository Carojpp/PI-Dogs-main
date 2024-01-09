import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import './dogs.css'

const  Dogs = ({page})=> {
  const [dogs, setDogs] = useState([]);

  const fetchDogs = async () => {
    const response = await fetch(`https://api.thedogapi.com/v1/breeds?limit=8&page=${page}`);
    const data = await response.json();
    setDogs(data);
  };

  useEffect(() => {
    fetchDogs();
  }, [page]);

  return (
    <div className='breeds'>
      {dogs.map((dog, index) => (
        <div className='breed'key={index} style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
          <div className='img' alt={dog.name} />
          <h2>{dog.name}</h2>
          <p>{dog.temperament}</p>
          <p>Peso: {dog.weight.metric} kg</p>
          <Link className='link'to={`/detail/${dog.id}`}>view dog</Link>
        </div>
      ))}
    </div>
  );
}

export default Dogs;