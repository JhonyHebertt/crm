import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar/navbar';
import './novocliente.css';

function NovoCliente() {
  return <div>
    <Navbar />
    <div className="container-fluid titulo">

      <div className="offset-lg-3 col-lg-6">
        <h1>Novo Cliente</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Nome</label>
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">E-mail</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Fone</label>
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>

          <div className="text-center">
            <Link to="/app/home" type="submit" className="btn btn-outline-primary btn-acao">Cancelar</Link>
            <button type="submit" className="btn btn-primary btn-acao">Salvar</button>
          </div>

        </form>
      </div>
    </div>
  </div>;
}

export default NovoCliente;