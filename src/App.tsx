// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './components/pages/LoginPage'; 
import HomePage from './components/pages/HomePage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage/>} />
        {/* Redireciona o caminho root ("/") para a página de login */}
        <Route path="/" element={<Navigate to="/login"/>} />
        <Route path="/home" element={<HomePage/>} />
      </Routes>
    </Router>
  );
};

export default App;