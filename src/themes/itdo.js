import React from 'react';
import Layout from '../components/Layout/layout'
import HeroSection from '../components/HeroSection/heroSectionITDO';
// import AboutSection1 from '../components/AboutUs/AboutUsITDO1';
// import AboutSection2 from '../components/AboutUs/AboutUsITDO2';
// import Pricing from '../components/Pricing';
// import Blog from '../components/Blog';
// import ActionToCall1 from '../components/ActionToCall/ActionToCall1';
// import ActionToCall3 from '../components/ActionToCall/ActionToCall3';
// import ActionToCall4 from '../components/ActionToCall/ActionToCall4';
// import LazyContent from '../components/lazyContent';
// import TeamMember from '../components/TeamMember';
// import Business from '../components/Business';

const ThemeITDOPage = () => {
    return (
        <Layout>
            <HeroSection
                title="Agencia especializada en desarrollar páginas web"
                description="Somos una empresa de desarrollo, expertos en creación de páginas web y APPs. Te ayudamos a crear tu página web con <strong><a href='/pedir-presupuesto/desarrollo-web'>la mejor relación calidad-precio</a></strong>, creando una <strong><a href='/pedir-presupuesto/desarrollo-web'>experiencia digital atractiva para que tu negocio conecte con las personas</a>.</strong>"
                img_background="url(https://ik.imagekit.io/itdo/ITDO-freelance6_xH56McWwC.jpg)"
                trusted_title="Con la confianza de empresas como:"
                trusted_list="<li class='list-inline-item col-md-5 col-lg-3 mr-0'><img src='https://ik.imagekit.io/itdo/forcadell_AlmKOrxiC.png' width='140' alt='client' class='img-fluid mb-5px' /></li><li class='list-inline-item col-md-5 col-lg-3 mr-0'><img src='https://ik.imagekit.io/itdo/uab_Kd1KofHgu.png' width='100' alt='client' class='img-fluid' /></li><li class='list-inline-item col-md-5 col-lg-3 mr-0'><img src='https://ik.imagekit.io/itdo/vhir_O0NNmuo2k.png' width='100' alt='client' class='img-fluid' /></li><li class='list-inline-item col-md-5 col-lg-3 mr-0'><img src='https://ik.imagekit.io/itdo/cafesam-w_9VwrGGJaTl.png' width='120' alt='client' class='img-fluid' /></li>"
                templateId_emailjs="welcome_to_costumer_web"
                form_redirect_page="/muchas-gracias-desarrollo-web"
            />
            <AboutSection1 />
            <ActionToCall1 />
            <AboutSection2 />
            <Business />
            <ActionToCall4 />
            <Pricing bgColor="white" />
            <Blog
                titol={`Artículos sobre desarrollo de páginas web, APPs móviles, transformación y experiencia digital.`}
            />
            <LazyContent />
            <TeamMember />
            <ActionToCall3 />
        </Layout>
    );
};

export default ThemeITDOPage;
