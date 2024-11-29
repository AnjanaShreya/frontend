import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; 
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import Content2 from "./components/Content2";
import Login from './components/Login';
import axios from 'axios';

function App() {
  return (
    <Router> 
      <Header />
      <p className='content'>
        <Link to='/content'>Home</Link> | <Link to='/cart'>Cart</Link>
      </p>
      <Routes>
        <Route index element={<Content />} />
        <Route path='content' element={<Content />} />
        <Route path='cart' element={<Content2 />} />
        <Route path='login' element={<Login />} />
      </Routes>
      <Footer />
    </Router> 
  );
}

export default App;
