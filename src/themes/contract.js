import React from 'react';
// import Layout from '../components/Layout/layout'
import Header from '../components/Header/header'
import Footer from '../components/Footer/footer'
import HeroSection from '../components/HeroSection/heroSectionQuote';
import RequestContract from '../pages/Contact/RequestContract';

const ContractPage = ({ data }) => {
    const plan = data.params.plan;
    const description = data.description || 'Rellena este formulario y nos ponemos de inmediato en contacto';
    return (
        <div>
          <Header />
            <HeroSection title={`Plan de desarrollo web ${plan}`} description={description} backgroundImage='https://ik.imagekit.io/itdo/ITDO-freelance6_xH56McWwC.jpg' />
            <RequestContract
                url_success_form="/muchas-gracias-desarrollo-web"
                email_template="welcome_to_costumer_web"
            />
            <Footer />
          </div>
    );
};

export default ContractPage;
