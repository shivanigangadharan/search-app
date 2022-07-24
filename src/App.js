import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import ProductListing from './pages/ProductListing/ProductListing';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<LandingPage />} path="/" />
          <Route element={<ProductListing />} path="/productListing" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
