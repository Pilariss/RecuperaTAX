import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { useLoading } from '../context/LoadingContext';
import Loader from "../components/Loader";
import '../styles/login.css';

function Login() {
  const { login } = useContext(AuthContext);
  const { isLoading, setIsLoading } = useLoading();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      const success = await login(email, password);
      if (success) {
        navigate('/companieslist');
      } else {
        setError('Credenciais inválidas.');
      }
    } catch (err) {
      setError(err.message);
    }

    setIsLoading(false);
  };

  return (
    <div className="login-container">
      <Loader isLoading={isLoading} />
      <div className="login">
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit" disabled={isLoading}>Entrar</button>
        </form>
        {error && <p className="error">{error}</p>}
        <p>Não tem uma conta? <a href="/register">Cadastre-se</a></p>
      </div>
    </div>
  );
}

export default Login;