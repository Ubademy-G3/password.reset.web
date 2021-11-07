import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ResetPassword from './ResetPassword';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/:userId/:token" element={<ResetPassword />} />
      </Routes>
    </div>
  );
}

export default App;
