import React from 'react';
import { BrowserRouter as Route, Routes, BrowserRouter } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import Leaderboard from './components/Leaderboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
