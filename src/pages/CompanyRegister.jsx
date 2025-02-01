import React, { useState } from 'react';
import { createDocument } from '../services/crud';
import '../styles/companyRegister.css';
import CNPJInput from '../components/CNPJInput';

function CompanyRegister() {
  const [form, setForm] = useState({
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
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: name === 'number' ? value.replace(/\D/g, '') : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await createDocument('empresas', form);
    alert(`Empresa ${form.name} cadastrada com sucesso!`);

    setForm({
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
    });
  };

  return (
    <div className="company-register">
      <h1>Cadastrar Empresa</h1>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}

export default CompanyRegister;