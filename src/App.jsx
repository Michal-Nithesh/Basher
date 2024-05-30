// src/App.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import LoginPage from './LoginPage';
import LeaderBoard from './Leaderboard';

function App() {
  const leaderboard = true; // Assuming leaderboard is a boolean
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/leaderboard" element={<LeaderBoard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);