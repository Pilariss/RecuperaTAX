import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { useLoading } from '../context/LoadingContext';
import GoogleIcon from "../assets/icon/Google__G__logo.svg";
import Loader from "../components/Loader";
import '../styles/login.css';

function Login() {
  const { login, loginWithGoogle } = useContext(AuthContext);
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

  const handleGoogleLogin = async () => {
    const success = await loginWithGoogle();
    if (success) {
      console.log("Usuário cadastrado, realize o seu primeiro acesso!");
      navigate("/companieslist");
    } else {
      setError("Erro ao autenticar com o Google.");
    }
  };

  return (
    <div className="login-container">
      <Loader isLoading={isLoading} />
      <div className="login">
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <div className="login-buttons">
            <button onClick={handleGoogleLogin}>
              <img src={GoogleIcon} alt="Gooogle Logo" className="google-logo"/>
              <span className="google-text">Google</span>
            </button>
            <button type="submit">Entrar</button>
          </div>
        </form>
        {error && <p className="error">{error}</p>}
        <p>Não tem uma conta? <a href="/register">Cadastre-se</a></p>
      </div>
    </div>
  );
}

export default Login;