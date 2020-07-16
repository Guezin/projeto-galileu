import React, { useState } from 'react';
import { motion } from "framer-motion";

import './styles.css';

const Login = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	return (
		<motion.div initial={{ x: '100%' }} animate={{ x: 'calc(100vw - 100%)' }} transition={{ duration: 1 }}>
			<div className="register-container">
				<section className="form">
					<p>Cadastre-se</p>
					<form>
						<input type="text" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} />

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
							<button className="button">Cadastrar</button>
						</div>
					</form>
				</section>
			</div>
		</motion.div>
	);
};

export default Login;
