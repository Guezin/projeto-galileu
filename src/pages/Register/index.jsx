import React, { useState } from "react";

import "./styles.css";

const Login = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

  return (
    <div className="register-container">
      <section className="form">
          <p>Cadastre-se</p>
          <form>
              <input 
                type="text" 
                placeholder="Nome" 
                value={name} 
                onChange={e => setName(e.target.value)} 
              />

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
                <button className="button">Cadastrar</button>
              </div>
          </form>
      </section>
    </div>
  );
};

export default Login;
