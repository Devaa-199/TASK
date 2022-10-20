import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Comp/Home'
import Login from './Comp/Login'
import Navbar from './Comp/layout/Navbar'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <h1>Hello App</h1> */}
        <Navbar />
        {/* <Home /> */}
        {/* <Login /> */}
        <Routes>
          <Route path="/Login" element={<Login />} />
          {/* <Login /> */}
          <Route path="/Home" element={<Home />} />
        </Routes>
        {/* <Login /> */}


        {/* <Routes>
        <Route path="/" element={<Home />} />
      </Routes> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
