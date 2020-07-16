import React, { useState, useCallback } from "react";
import { Link, useHistory } from "react-router-dom";
import { motion } from "framer-motion";

import api from "../../services/api";

import "./styles.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory(null);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      try {
        await api.post("/sessions", {
          email,
          password,
        });

        history.push("/home");
      } catch {
        alert("Erro ao tentar fazer login, verique suas credendias!");
      }
    },
    [email, history, password]
  );

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: "calc(100vw - 100%)" }}
      transition={{ duration: 1 }}
    >
      <div className="login-container">
        <section className="form">
          <p>Faça o seu Login</p>
          <form>
            <input
              type="text"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="button-options">
              <button className="button" onClick={(e) => handleSubmit(e)}>
                Entrar
              </button>
              <Link className="button" to="/new">
                Cadastrar
              </Link>
            </div>
          </form>
        </section>
      </div>
    </motion.div>
  );
};

export default Login;
