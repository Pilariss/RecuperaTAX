import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useLoading } from '../context/LoadingContext';
import Loader from "../components/Loader";
import "../styles/register.css";

function Register() {
  const { register } = useContext(AuthContext);
  const { isLoading, setIsLoading } = useLoading();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    if (password.length < 6) {
      setError("A senha deve ter pelo menos 6 caracteres.");
      return;
    }

    try {
      const success = await register(email, password);
      if (success) {
        console.log("Usuário cadastrado, você será redirecionado para a tela de login!");
        navigate('/');
      } else {
        setError('Erro ao criar conta, tente novamente.');
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <Loader isLoading={isLoading} />
      <div className="register">
        <h1>Cadastro</h1>
        <form className="register-form" onSubmit={handleRegister}>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button className="register-button" type="submit">Cadastrar</button>
        </form>
        {error && <p className="error">{error}</p>}
        <p>Já tem uma conta? <button className="link-button" onClick={() => { navigate('/login') }}>Faça login</button></p>
      </div>
    </div>
  );
}

export default Register;