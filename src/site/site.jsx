import React from 'react';
import Menu from './componentes/menu';
import Banner from './componentes/banner';
import Features from './componentes/features';
import Testemunho from './componentes/testemunho';
import Precos from './componentes/precos';
import Footer from './componentes/footer';

function Site() {
  return <>
    <Menu />
    <Banner />
    <Features />
    <Testemunho />
    <Precos />
    <Footer />
  </>
}


export default Site;