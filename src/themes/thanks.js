// import React from 'react';
// import { useLocation } from '@reach/router';
// import Layout from '../components/Layout/layout'
import Header from '../components/Header/header'
import Footer from '../components/Footer/footer'
// import HeroSection from '../components/HeroSection/heroSectionThanks';
// import PromoSection from '../components/PromoSection/Thanks';

const ThanksPage = () => {
    const location = useLocation();
    const { name } = location.state.variables;

    return (
        <div>
          <Header />
            <HeroSection title={`¡Muchas gracias ${name}!`} description='En breve nos pondremos en contacto contigo.' backgroundImage='/img/ITDO-freelance5.jpg' />
            <PromoSection items={[
                {
                    title: "Analizaremos su web actual",
                    description: "Realizaremos una revisión gratuita de tu página web si ya tiene un sistema existente o parte de él.",
                    image: "ti-search text-white"
                },
                {
                    title: "Nos pondremos en contacto",
                    description: "En un máximo de 24h nos pondremos en contacto para atender tus necesidades lo más rápido posible.",
                    image: "ti-alarm-clock text-white"
                },
                {
                    title: "Prepararemos el proyecto",
                    description: "Nuestro equipo aterrizará y concretará la planificación, diseño y desarrollo de tu nueva página web. ",
                    image: "ti-agenda text-white"
                }
            ]} />
            <Footer />
          </div>
    );
};

export default ThanksPage;
