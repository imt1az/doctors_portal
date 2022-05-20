import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Reviews from './Pages/Reviews/Reviews';
import Contact from './Pages/Shared/Contact';
import Login from './Pages/Login/Login';
import Footer from './Pages/Shared/Footer';
import Register from './Pages/Register/Register';
import RequireAuth from './Pages/Login/RequireAuth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function App() {
  
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/about" element={<About></About>} />
        <Route path="/appointment" element={<RequireAuth>
          <Appointment></Appointment>
        </RequireAuth>} />
        <Route path="/reviews" element={<Reviews></Reviews>} />
        <Route path="/contact" element={<Contact></Contact>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/register" element={<Register></Register>} />
        
        
        
      </Routes>
     
      <ToastContainer />
    </div>
  );
}

export default App;
