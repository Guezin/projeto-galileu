import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./styles.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login-container">
      <section className="form">
          <p>Faça o seu Login</p>
          <form>
              <input 
                type="text" 
                placeholder="E-mail" 
                value={email} 
                onChange={e => setEmail(e.target.value)} 
              />

              <input 
                type="password" 
                placeholder="Senha" 
                value={password} 
                onChange={e => setPassword(e.target.value)} 
              />
              
              <div className="button-options">
                <button className="button">Entrar</button>
                <Link className="button" to="/new" >Cadastrar</Link>
              </div>
          </form>
      </section>
    </div>
  );
};

export default Login;
