import React from 'react';
import Layout from '../../components/Layout/layout'
import Portafolio1 from './Portafolio1';
import Portafolio2 from './Portafolio2';
import Portafolio3 from './Portafolio3';
import Portafolio4 from './Portafolio4';
import Portafolio5 from './Portafolio5';

const PortafolioPage = () => {
  return (
    <Layout pageTitle="Portafolio">
      <Portafolio1 />
      <Portafolio2 />
      <Portafolio3 />
      <Portafolio4 />
      <Portafolio5 />
    </Layout>
  );
}

export default PortafolioPage;
