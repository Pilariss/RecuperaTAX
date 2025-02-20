import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './routes/PrivateRoute';

import Login from './pages/Login';
import Register from './pages/Register';
import CompanyRegister from './pages/CompanyRegister';
import CompanyList from './pages/CompanyList';
import SpreadsheetList from './pages/SpreadsheetList';
import MenuSidebar from './components/MenuSidebar';
import { LoadingProvider } from './context/LoadingContext';
import Loader from './components/Loader';

function App() {
  return (
    <AuthProvider>
      <LoadingProvider>
        <Loader />
        <Router>
          <div className="app">
            <MenuSidebar />
            <div className="content">
            <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/companyregister/:companyId" element={<PrivateRoute><CompanyRegister /></PrivateRoute>} />
            <Route path="/companyregister" element={<PrivateRoute><CompanyRegister /></PrivateRoute>} />
            <Route path="/companieslist" element={<PrivateRoute><CompanyList /></PrivateRoute>} />
            <Route path="/spreadsheets" element={<PrivateRoute><SpreadsheetList /></PrivateRoute>} />
            <Route path="*" element={ <Navigate to='/' /> } />
          </Routes>
            </div>
          </div>
        </Router>
      </LoadingProvider>
    </AuthProvider>
  );
}

export default App;