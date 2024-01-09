import './App.css';
import { BrowserRouter as Router, Routes, Route,Link, Outlet} from 'react-router-dom';

import Home from "./Views/Home/Home.jsx"
import Landing from "./Views/Landing/Landing.jsx"
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
      </Routes>
      </Router>
    </div>
  );
}
