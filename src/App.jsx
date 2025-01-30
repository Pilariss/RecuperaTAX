import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './routes/PrivateRoute';

import Login from './pages/Login';
import CompanyRegister from './pages/CompanyRegister';
import CompanyList from './pages/CompanyList';
import SpreadsheetList from './pages/SpreadsheetList';
import MenuSidebar from './components/MenuSidebar';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="app">
          <MenuSidebar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/register" element={<PrivateRoute><CompanyRegister /></PrivateRoute>} />
              <Route path="/companies" element={<PrivateRoute><CompanyList /></PrivateRoute>} />
              <Route path="/spreadsheets" element={<PrivateRoute><SpreadsheetList /></PrivateRoute>} />
              <Route path="*" element={ <Navigate to='/' /> } />
            </Routes>
          </div>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;