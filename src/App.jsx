// src/App.jsx

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import EmployeeTable from './components/EmployeeTable';

const App = () => {
  const [employees, setEmployees] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login setEmployees={setEmployees} employees={employees} />} />
        <Route path="/employees" element={<EmployeeTable employees={employees} />} />
      </Routes>
    </Router>
  );
};

export default App;
