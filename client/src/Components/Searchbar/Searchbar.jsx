import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./searchbar.css";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const fetchDogBreeds = async () => {
    if (searchTerm.length < 2) {
      return;
    }
    const response = await fetch(
      "http://localhost:3001/searchdog?" +
        new URLSearchParams({
          search: searchTerm,
          limit: 10,
        })
    );

    console.log(response);
    const data = await response.json();
    console.log("data ", data);
    setSearchResults(data);
  };

  useEffect(() => {
    if (searchTerm) {
      fetchDogBreeds();
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  return (
    <div className="searchBar">
      <input
        type="text"
        placeholder="Buscar razas de perros"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      {searchResults.length > 0 ? (
        <ul>
          {searchResults.map((result, index) => (
            <li>
            <Link index className="link" to={`/detail/${result.id}`}>
              {result.name}
            </Link>
            </li>
          ))}
        </ul>
      ):
      searchTerm.length >1 &&(
        <div>Raza inexistente</div>
        )
        
      }
    </div>
  );
}

export default SearchBar;
