import React from 'react';
import '../styles/spreadsheetList.css';

const spreadsheets = [
  { id: '1', name: 'Relatório Financeiro 2024', url: '#' },
  { id: '2', name: 'Cadastro de Clientes', url: '#' },
];

function SpreadsheetList() {
  return (
    <div className="spreadsheet-list">
      <h1>Listagem de Planilhas</h1>
      <ul>
        {spreadsheets.map((spreadsheet) => (
          <li key={spreadsheet.id}>
            <a href={spreadsheet.url} target="_blank" rel="noopener noreferrer">
              {spreadsheet.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SpreadsheetList;