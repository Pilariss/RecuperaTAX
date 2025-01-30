const STORAGE_KEY = 'companies';

export const getCompanies = () => {
  const companies = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  return companies;
};

export const createCompany = (companyData) => {
  const companies = getCompanies();
  const newCompany = { id: String(companies.length + 1), ...companyData };
  const updatedCompanies = [...companies, newCompany];

  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedCompanies));
  return newCompany;
};