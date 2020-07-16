import React, { useState, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";

import api from "../../services/api";

import "./styles.css";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory(null);

  const handleRegisterUser = useCallback(
    async (e) => {
      e.preventDefault();

      try {
        await api.post("/users", {
          name,
          email,
          password,
        });

        setName("");
        setEmail("");
        setPassword("");

        history.push("/");
      } catch {
        alert("Erro ao se cadastrar, verifique seus dados!");
      }
    },
    [email, history, name, password]
  );

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: "calc(100vw - 100%)" }}
      transition={{ duration: 1 }}
    >
      <div className="register-container">
        <section className="form">
          <p>Cadastre-se</p>
          <form>
            <input
              type="text"
              placeholder="Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

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
              <button className="button" onClick={(e) => handleRegisterUser(e)}>
                Cadastrar
              </button>
            </div>
          </form>
        </section>
      </div>
    </motion.div>
  );
};

export default Login;
