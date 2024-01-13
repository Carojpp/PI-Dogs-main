import './App.css';
import { BrowserRouter as Router, Routes, Route,Link, Outlet} from 'react-router-dom';

import Home from "./Views/Home/Home.jsx"
import Details from "./Views/Details/Details.jsx"
import Landing from "./Views/Landing/Landing.jsx"
import CreateBreed from "./Views/Create/CreateBreed.jsx"
import CreateTemperament from "./Views/Create/CreateTemperament.jsx"
// import { useLocation } from 'react-router-dom';

export default function App() {
  
  // const path = useLocation().pathname
  return (
    <div>
      <Router>
        {/* {path !== '/' && <Navbar/>} */}
      <Routes>
        <Route path='/' element = {<Landing/>}/>
        <Route path='/home' element = { <Home/>}/>
        <Route path='/create-breed' element = { <CreateBreed/>}/>        
        <Route path='/Create-temperament' element = { <CreateTemperament/>}/>        
        <Route path='/detail/:id' element = { <Details/>}/>
      </Routes>
      </Router>
    </div>
  );
}
