import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import SearchComponent from './components/SearchComponent';
import CountryDetails from './components/CountryDetails';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SearchComponent />} />
        <Route path="/country/:name" element={<CountryDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
