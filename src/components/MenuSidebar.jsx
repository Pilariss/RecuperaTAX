import React, { useContext } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import './MenuSidebar.css';

function MenuSidebar() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const isLoginPage = location.pathname === '/';

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  if (isLoginPage) {
    return null;
  }

  return (
    <div className="menu-sidebar">
      <h2>Menu</h2>
      <ul>
        {user && (
          <>
            <li><Link to="/companyregister">Cadastrar Empresa</Link></li>
            <li><Link to="/companieslist">Listar Empresas</Link></li>
            <li><Link to="/spreadsheets">Listar Planilhas</Link></li>
            <li><button className="logout-button" onClick={handleLogout}>Sair</button></li>
          </>
        )}
      </ul>
    </div>
  );
}

export default MenuSidebar;