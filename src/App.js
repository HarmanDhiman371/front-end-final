// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Tickets from './components/tickets';
import Destination from './components/Destination';
import Hotel from './components/Hotel';
// import Destination from './components/Destination';  // Import the Destination component

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/tickets" element={<Tickets/>} />
        <Route path="/Destination" element={<Destination/>} />
        <Route path="/hotel" element={<Hotel/>} />
        {/* <Route path="/Destination" element={<Destination />} />  // Add the route for Destination */}
      </Routes>
    </Router>
  );
}

export default App;
