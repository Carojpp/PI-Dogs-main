import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { getDogs, dogsPage, loadingDogs } from "../../Redux/Actions/index.js";
import Navbar from "../../Components/Navbar/Navbar.jsx";
import Dogs from "../../Components/Dogs/Dogs.jsx";
import "./home.css";

const Home = () => {
  // const dispatch = useDispatch();
  // const dogs = useSelector((state) => state.dogsPage);
  // const dogfilter = useSelector((state) => state.dogfilter);
  // const loading = useSelector((state) => state.loadingDogs);
  // const filter = useSelector((state) => state.filter);
  const loading = false;
  const filter = null;
  const [paginate, setPaginate] = useState(1);

  // useEffect(() => {
  //   dispatch(loadingDogs(true));
  //   dispatch(getDogs());
  // }, []);

  return (
    <div className="total">
      <Navbar/>

      <div className={filter ? "div-container-filter" : "div-container"}>
        {loading ? (
          <>
            <div className="div-loading">
              <img
                className="loading-img"
                src="https://media.tenor.com/E5bC1OkrgeoAAAAi/perro-corriendo.gif"
                alt="Loading..."
              />
            </div>
          </>
        ) : (
          <>
            <Dogs page={paginate} />
            {filter ? (
              <></>
            ) : (
              <>
                <div className="div-buttons">
                  <button
                    onClick={() => setPaginate(paginate - 1)}
                    name="prev"
                    className="left"
                  >
                    prev
                  </button>
                  <button
                    onClick={() => setPaginate(paginate + 1)}
                    name="next"
                    className="right"
                  >
                    next
                  </button>
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
