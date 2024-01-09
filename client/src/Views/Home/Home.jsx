import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { getDogs, dogsPage, loadingDogs } from "../../Redux/Actions/index.js";
import "./home.css";

const Home = () => {
  // const dispatch = useDispatch();
  // const dogs = useSelector((state) => state.dogsPage);
  // const dogfilter = useSelector((state) => state.dogfilter);
  // const loading = useSelector((state) => state.loadingDogs);
  // const filter = useSelector((state) => state.filter);
  const loading = false
  const filter = null;
  const paginate =0;
  // const paginate = (event) => {
  //   dispatch(dogsPage(event.target.name));
  // };

  
  // useEffect(() => {
  //   dispatch(loadingDogs(true));
  //   dispatch(getDogs());
  // }, []);

  return (
    <div className="total">
      {/* <Searchbar/> */}
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
            {/* <Dogs nameOfClass={filter?'no-div':'div'}dogs={filter?dogfilter:dogs}></Dogs> */}
            {filter ? (
              <></>
            ) : (
              <>
                <div className="div-buttons">
                  <button onClick={paginate} name="prev" className="left">
                    ⇦qq
                  </button>
                  <button onClick={paginate} name="next" className="right">
                    ⇨
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
