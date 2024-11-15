import React from 'react';
import Layout from '../components/Layout/layout'
// import HeroSection from '../components/HeroSection/heroSectionITDO';
// import About1 from '../components/About-APP/About1';
// import About2 from '../components/About-APP/About2';
// import About3 from '../components/About-APP/About3';
// import Pricing from '../components/Pricing/app';
// import Blog from '../components/Blog/index';
// import CTA from '../components/ActionToCall/CTA';

const ThemeITDOAppPage = () => {
    return (
        <Layout>
            <HeroSection
                title="Agencia de desarrollo de software especializada en APPs móviles"
                description="Somos una empresa de desarrollo, expertos en la creación de APPs móviles. Te ayudamos a crear tu APP para móviles Android y iOS con la mejor relación calidad-precio. Desarrollamos <strong><a href='/desarrollo-app'>aplicaciones móviles robustas, fáciles de usar y preparadas para la integración empresarial</a>.</strong>"
                img_background="url(https://ik.imagekit.io/itdo/itdo-app_s5lr3j6uU.jpeg)"
                trusted_title="Con la confianza de empresas como:"
                trusted_list="<li class='list-inline-item col-md-5 col-lg-3 mr-0'><img src='https://ik.imagekit.io/itdo/vhir_O0NNmuo2k.png' width='100' alt='client' class='img-fluid' /></li><li class='list-inline-item col-md-5 col-lg-3 mr-0'><img src='https://ik.imagekit.io/itdo/cafesam-w_9VwrGGJaTl.png' width='120' alt='client' class='img-fluid' /></li>"
                templateId_emailjs="welcome_to_costumer_app"
                form_redirect_page="/muchas-gracias-desarrollo-app"
            />
            <About1 />
            <CTA
                title="Pide tu presupuesto gratuito ahora."
                description="Tu nueva APP te está esperando, es hora de despegar. Cuenta tu historia con una experiencia digital atractiva para que tu negocio conecte con las personas."
                id="call-action-app-1"
                cta_text="PEDIR PRESUPUESTO"
                cta_url="/desarrollo-app"
            />
            <About2 />
            <CTA
                title="¿Cuánto costará tu aplicación móvil?"
                description="Encuentra el mejor presupuesto para desarrollar tu nueva APP con nosotros."
                id="call-action-app-2"
                cta_text="PEDIR PRESUPUESTO"
                cta_url="/desarrollo-app"
            />
            <Pricing bgColor="white" />
            <About3 />
            <CTA
                title="¿Te gustaría crear un proyecto con nosotros?"
                description="Solicita presupuesto para tu página web. Consigue tener una presencia online que te haga sentir orgulloso."
                id="call-action-app-3"
                cta_text="PEDIR PRESUPUESTO"
                cta_url="/desarrollo-app"
            />
            <Blog
                filtre={`&filter=tag:desarrollo-applicaciones`}
                titol={`Artículos sobre desarrollo de páginas web, APPs móviles, transformación y experiencia digital.`}
            />
        </Layout>
    );
};

export default ThemeITDOAppPage;
