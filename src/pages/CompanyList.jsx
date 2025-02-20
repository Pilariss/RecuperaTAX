import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { readDocuments } from '../services/crud';
import '../styles/companyList.css';

function CompanyList() {
  const [companies, setCompanies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const data = await readDocuments("empresas");
        console.log(data);
        setCompanies(data);
      } catch (error) {
        console.error("Erro ao buscar empresas: ", error);
      }
    }

    fetchCompanies();
  }, []);

  const handleRowClick = (companyId) => {
    navigate(`/companyregister/${companyId}`);
  };

  return (
    <div className="company-list">
      <h1>Lista de Empresas</h1>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>CNPJ</th>
            <th>Contato</th>
            <th>E-mail</th>
            <th>Estado</th>
            <th>Cidade</th>
            <th>País</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company) => (
            <tr key={company.id} onClick={() => handleRowClick(company.id)} className='clickable-row'>
              <td>{company.name}</td>
              <td>{company.cnpj}</td>
              <td>{company.contact}</td>
              <td>{company.email}</td>
              <td>{company.state}</td>
              <td>{company.city}</td>
              <td>{company.country}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CompanyList;