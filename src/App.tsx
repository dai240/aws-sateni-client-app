import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TopPage from './pages/TopPage';
import BladeSeries from './pages/Wilson/BladeSeries/BladeSeries';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<TopPage />} />
      <Route path="/wilson/bladeseries" element={<BladeSeries />} />
    </Routes>
  );
}

export default App;
