import React from 'react';
import {  BrowserRouter, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import './css/LoginPage.css';
import Leaderboard from './components/Leaderboard';
import './css/Leaderboard.css';

function App() {
  return (
      <BrowserRouter>
        <Route path="/" element={<LoginPage />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </BrowserRouter>
  );
}

export default App;