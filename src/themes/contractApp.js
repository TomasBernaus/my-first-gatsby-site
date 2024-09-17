import React from 'react';
import Layout from '../components/Layout/layout'
import HeroSection from '../components/HeroSection/heroSectionQuote';
import RequestContract from '../pages/Contact/RequestContract';

const ContractAppPage = ({ data }) => {
    const plan = data.params.plan;
    const description = data.description || 'Rellena este formulario y nos ponemos de inmediato en contacto';
    return (
        <Layout>
            <HeroSection title={`Plan de desarrollo app ${plan}`} description={description} backgroundImage='https://ik.imagekit.io/itdo/itdo-app_s5lr3j6uU.jpeg' />
            <RequestContract
                url_success_form="/muchas-gracias-desarrollo-app"
                email_template="welcome_to_costumer_app"
            />
        </Layout>
    );
};

export default ContractAppPage;
