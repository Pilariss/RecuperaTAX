import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { createDocument, readDocumentById, updateDocument } from '../services/crud';
import { useLoading } from '../context/LoadingContext';
import CNPJInput from '../components/CNPJInput';
import Loader from "../components/Loader";
import '../styles/companyRegister.css';

const emptyForm = {
  cnpj: '',
  name: '',
  fantasyName: '',
  contact: '',
  email: '',
  zipCode: '',
  district: '',
  road: '',
  number: '',
  complement: '',
  state: '',
  city: '',
  country: ''
};

function CompanyRegister() {
  const { isLoading, setIsLoading } = useLoading();
  const { companyId } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState(emptyForm);

  useEffect(() => {
    if (companyId) {
      const fetchCompanyData = async () => {
        setIsLoading(true);
        try {
          const companyData = await readDocumentById('empresas', companyId);
          setForm(companyData);
        } catch (error) {
          console.log('Erro ao carregar dados da empresa: ', error);
        }
        setIsLoading(false);
      };
      fetchCompanyData();
    } else {
      setForm(emptyForm);
    }
  }, [companyId, setIsLoading]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: name === 'number' ? value.replace(/\D/g, '') : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (companyId) {
        await updateDocument('empresas', companyId, form);
        console.log(`Empresa ${form.name} atualizada com sucesso!`);
      } else {
        await createDocument('empresas', form);
        console.log(`Empresa ${form.name} cadastrada com sucesso!`);
      }
      navigate('/companieslist');
    } catch (error) {
      console.error("Erro ao salvar empresa:", error);
    }

    setIsLoading(false);
  };

  return (
    <div>
      <Loader isLoading={isLoading} />
      <div className="company-register">
        <h1>{companyId ? "Editar Empresa" : "Cadastrar Empresa"}</h1>
        <form className="company-form" onSubmit={handleSubmit}>
          <div className="form-section">
            <div className="form-group">
              <label htmlFor="cnpj">CNPJ</label>
              <CNPJInput id="cnpj" name="cnpj" value={form.cnpj} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="name">Nome</label>
              <input id="name" type="text" name="name" value={form.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="fantasyName">Nome Fantasia</label>
              <input id="fantasyName" type="text" name="fantasyName" value={form.fantasyName} onChange={handleChange} required />
            </div>
          </div>

          <div className="form-section">
            <div className="form-group">
              <label htmlFor="contact">Contato</label>
              <input id="contact" type="text" name="contact" value={form.contact} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="email">E-mail</label>
              <input id="email" type="email" name="email" value={form.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="zipCode">CEP</label>
              <input id="zipCode" type="text" name="zipCode" value={form.zipCode} onChange={handleChange} required />
            </div>
          </div>
          <div className="form-section">
            <div className="form-group">
              <label htmlFor="road">Rua</label>
              <input id="road" type="text" name="road" value={form.road} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="number">Número</label>
              <input id="number" type="text" name="number" value={form.number} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="district">Bairro</label>
              <input id="district" type="text" name="district" value={form.district} onChange={handleChange} required />
            </div>
          </div>
          <div className="form-section">
            <div className="form-group">
              <label htmlFor="country">País</label>
              <input id="country" type="text" name="country" value={form.country} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="state">Estado</label>
              <input id="state" type="text" name="state" value={form.state} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="city">Cidade</label>
              <input id="city" type="text" name="city" value={form.city} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="complement">Complemento</label>
              <input id="complement" type="text" name="complement" value={form.complement} onChange={handleChange} />
            </div>
          </div>
          <button className="company-button" type="submit" disabled={isLoading}>Salvar</button>
        </form>
      </div>
    </div>
  );
}

export default CompanyRegister;