import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar/navbar';
import ListaClientes from '../Components/ListaCliente/listacliente';
import './home.css';

import firebase from '../Config/firebase';

function Home() {

  const [clientes, setClientes] = useState([]);
  const [texto, setTexto] = useState('');
  const [busca, setBusca] = useState('');

  let listaCli = [];

  //useEffect(function () { Função }, [ quando chamar ]); por padrao [] vem em branco ou seja, vai excutar só quando abri a pag.
  useEffect(function () {
    firebase.firestore().collection('clientes').get().then(async function (resultado) {
      await resultado.docs.forEach(function (doc) { //await força a useEffect esperar o termino do forEach
        if (doc.data().nome.indexOf(busca) >= 0) {
          listaCli.push({
            id: doc.id,
            nome: doc.data().nome,
            email: doc.data().email,
            fone: doc.data().fone
          });
        }
      })

      setClientes(listaCli);
    })
  }, [busca]);

  return <div>
    <Navbar />
    <div className="container-fluid titulo">
      <h1>Cadastro de Clientes</h1>

      <div className="row">
        <div className="col-4">
          <Link to='/app/novocliente' className="btn btn-primary" type="button"><i className="fas fa-plus"></i> Cliente</Link>
        </div>

        <div className="col-8">
          <div className="input-group mb-3">
            <input onChange={(t) => setTexto(t.target.value)} type="text" className="form-control" placeholder="Pesquisar por nome" aria-describedby="button-addon2" />
            <button onClick={(e) => setBusca(texto)} className="btn btn-primary" type="button" id="button-addon2"><i className="fas fa-search"></i> Pesquisar</button>
          </div>
        </div>
      </div>

      <ListaClientes arrayClientes={clientes} />
    </div>
  </div>
}

export default Home;