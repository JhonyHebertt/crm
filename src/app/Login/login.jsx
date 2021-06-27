import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './login.css';

import firebase from '../Config/firebase';
import 'firebase/auth';


function Login() {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [sucesso, setSucesso] = useState('');

  function pegaEmail(event) {
    setEmail(event.target.value);
  }

  function pegaSenha(event) {
    setSenha(event.target.value);
  }

  function LoginUsuario() {
    firebase.auth().signInWithEmailAndPassword(email, senha)
      .then(function (firebaseUser) {
        setSucesso('S');
      })
      .catch(function (error) {
        setSucesso('N');
      });
  }

  return <div className="d-flex align-items-center text-center form-container">
    <form className="form-signin">
      <img className="mb-4" src="Images/logo-small2.png" alt="login" />
      <h1 className="h3 mb-3 fw-normal">Login</h1>

      <div className="form-floating">
        <input onChange={pegaEmail} type="email" className="form-control" id="floatingInput" placeholder="E-mail" />
        <label htmlFor="floatingInput">E-mail</label>
      </div>

      <div className="form-floating">
        <input onChange={pegaSenha} type="password" className="form-control" id="floatingPassword" placeholder="Senha" />
        <label htmlFor="floatingPassword">Senha</label>
      </div>

      <button onClick={LoginUsuario} className="w-100 btn btn-lg btn-primary" type="button">Acessar</button>

      {sucesso === 'N' ? <div className="alert alert-danger mt-2" role="alert">E-mail ou senha inválida.</div> : null}
      {sucesso === 'S' ? <Redirect to='/app/home' /> : null}

      <div className="login-links mt-5">
        <Link to="/app/resetsenha" className="mx-3">Esqueci minha senha</Link>
        <Link to="/app/novaconta" className="mx-3">Criar uma conta</Link>
      </div>

      <p className="mt-5 mb-3 text-muted">&copy; Desenvolvido por JHC Sistemas</p>
    </form>
  </div>
}

export default Login;