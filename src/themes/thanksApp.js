// import React from 'react';
// import { useLocation } from '@reach/router';
import Layout from '../components/Layout/layout'
// import HeroSection from '../components/HeroSection/heroSectionThanks';
// import PromoSection from '../components/PromoSection/Thanks';

const ThanksAppPage = () => {
    const location = useLocation();
    const { name } = location.state.variables;

    return (
        <Layout>
            <HeroSection title={`¡Muchas gracias ${name}!`} description='En breve nos pondremos en contacto contigo.' backgroundImage='/img/ITDO-freelance5.jpg' />
            <PromoSection items={[
                {
                    title: "Nos pondremos en contacto",
                    description: "En un máximo de 24h nos pondremos en contacto para atender tus necesidades lo más rápido posible.",
                    image: "ti-alarm-clock text-white"
                },
                {
                    title: "Analizaremos tu nueva APP",
                    description: "Realizaremos una revisión gratuita de tu APP si ya tiene un sistema existente o parte de ella.",
                    image: "ti-search text-white"
                },
                {
                    title: "Prepararemos el proyecto",
                    description: "Nuestro equipo aterrizará y concretará la planificación, diseño y desarrollo de tu nueva APP sin compromiso.",
                    image: "ti-agenda text-white"
                }
            ]} />
        </Layout>
    );
};

export default ThanksAppPage;
