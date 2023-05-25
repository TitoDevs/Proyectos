import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/1/Navbar';
import Button from './components/Buttons/Share/1/Button';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Button />
    </BrowserRouter>
  );
}

export default App;
