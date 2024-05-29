import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage';
import LeaderBoard from './Leaderboard';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/leaderboard" element={<LeaderBoard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

const rootElement = document.getElementById('root');
if (!rootElement._reactRootContainer) {
  const root = createRoot(rootElement);
  root.render(<App />);
} else {
  rootElement._reactRootContainer.render(<App />);
}