import React from 'react';

function Features() {
  return <section id="features">
    <div className="container">
      <div className="row">

        <div className="col-lg-4 features-box">
          <i className="fa fa-heart fa-2x icon" aria-hidden="true"></i>
          <h3>Fácil de usar</h3>
          <p>O sistema possui um interface muito simples e fácil de utilizar</p>
        </div>

        <div className="col-lg-4 features-box">
          <i className="fa fa-globe fa-2x icon" aria-hidden="true"></i>
          <h3>Em qualquer lugar</h3>
          <p>Gerencie seu fluxo de negócios de forma eficiente, onde quere que você esteja.</p>
        </div>

        <div className="col-lg-4 features-box">
          <i className="fa fa-columns fa-2x icon" aria-hidden="true"></i>
          <h3>Organização é tudo</h3>
          <p>Tenha sua carteira de clientes sempre muito bem organizada.</p>
        </div>

      </div>
    </div>
  </section>;

}

export default Features;