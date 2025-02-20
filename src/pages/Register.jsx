import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
// import GoogleIcon from "../assets/icon/Google__G__logo.svg";
import "../styles/register.css";

function Register() {
  const { register } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError(null);

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

  // const handleGoogleLogin = async () => {
  //   const success = await loginWithGoogle();
  //   if (success) {
  //     console.log("Usuário cadastrado, realize o seu primeiro acesso!");
  //     navigate("/");
  //   } else {
  //     setError("Erro ao autenticar com o Google.");
  //   }
  // };

  return (
    <div className="register">
      <h1>Cadastro</h1>
      <form className="register-form" onSubmit={handleRegister}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
        <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} required/>
        <div className="register-buttons">
          {/* <button onClick={handleGoogleLogin}>
            <img src={GoogleIcon} alt="Gooogle Logo" className="google-logo"/>
            <span className="google-text">Google</span>
          </button> */}
          <button type="submit">Cadastrar</button>
        </div>
      </form>
      {error && <p className="error">{error}</p>}
      <p>
        Já tem uma conta? <a href="/login">Faça login</a>
      </p>
    </div>
  );
}

export default Register;