import React from 'react';
import Layout from '../components/Layout/layout'
import HeroSection from '../components/HeroSection/heroSectionQuote';
// import RequestQuoteSection from '../pages/Contact/RequestQuote';

const QuotePage = ({ description }) => {
    return (
        <Layout>
            <HeroSection title='Pide un presupuesto' description={description || 'Rellena este formulario y tendrás tu presupuesto en menos de 24h'} backgroundImage='https://ik.imagekit.io/itdo/ITDO-freelance6_xH56McWwC.jpg' />
            {/* <RequestQuoteSection /> */}
        </Layout>
    );
};

export default QuotePage;
