import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BladeSeries from './pages/tennis/wilson/bladeSeries/BladeSeries';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/wilson/bladeseries" element={<BladeSeries />} />
    </Routes>
  );
}

export default App;
