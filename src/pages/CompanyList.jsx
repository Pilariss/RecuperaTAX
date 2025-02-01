import React, { useState, useEffect } from 'react';
import { readDocuments } from '../services/crud';
import '../styles/companyList.css';

function CompanyList() {
  const [companies, setCompanies] = useState([]);

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

  return (
    <div className="company-list">
      <h1>Lista de Empresas</h1>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Nome Fantasia</th>
            <th>CNPJ</th>
            <th>Contato</th>
            <th>E-mail</th>
            <th>CEP</th>
            <th>Bairro</th>
            <th>Rua</th>
            <th>Número</th>
            <th>Complemento</th>
            <th>Estado</th>
            <th>Cidade</th>
            <th>País</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company) => (
            <tr key={company.id}>
              <td>{company.name}</td>
              <td>{company.fantasyName}</td>
              <td>{company.cnpj}</td>
              <td>{company.contact}</td>
              <td>{company.email}</td>
              <td>{company.zipCode}</td>
              <td>{company.district}</td>
              <td>{company.road}</td>
              <td>{company.number}</td>
              <td>{company.complement}</td>
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