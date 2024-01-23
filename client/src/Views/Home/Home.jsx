import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar.jsx";
import Dogs from "../../Components/Dogs/Dogs.jsx";
import "./home.css";

const Home = () => {
  const [paginate, setPaginate] = useState(1);

  return (
    <div className="total">
      <Navbar />

      <div className="div-container">
          <Dogs page={paginate} />
              <div className="div-buttons">
                <button
                  onClick={() => setPaginate(paginate - 1)}
                  name="prev"
                  className="left"
                >
                  prev
                </button>
                <span className="page-number">{paginate}</span>
                <button
                  onClick={() => setPaginate(paginate + 1)}
                  name="next"
                  className="right"
                >
                  next
                </button>
              </div>
       
      </div>
    </div>
  );
};

export default Home;
