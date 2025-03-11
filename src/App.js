import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MountainList from './pages/MountainList';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mountains" element={<MountainList />} />
      </Routes>
    </Router>
  );
}

export default App;