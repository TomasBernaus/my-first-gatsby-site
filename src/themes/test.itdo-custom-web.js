import React from 'react';
import Layout from '../components/Layout/layout'
// import HeroSection from '../components/HeroSection/heroSectionITDO';
// import About1 from '../components/About-WEB/About1';
// import About2 from '../components/Portafolio/Portafolio2';
// import About3 from '../components/About-WEB/About3';
// import Blog from '../components/Blog/index';
// import CTA from '../components/ActionToCall/CTA';
// import Business from '../components/Business';

const ThemeITDOCustomWebPage = () => {
    return (
        <Layout>
            <HeroSection
                title="Agencia de desarrollo avanzado a medida de proyectos web"
                description="Somos una empresa de desarrollo de software, expertos en creación de páginas web y APPs con <strong>la tecnología más avanzada</strong> para ofrecer una <strong>experiencia digital atractiva para que tu negocio conecte con las personas</strong>.<br>
<strong><a href='/desarrollo-web'>Desarrollamos tu sitio web a tu medida.</a></strong>"
                img_background="url(https://ik.imagekit.io/itdo/flutter-app-desarrollo-itdo_9CmrKfjao.jpg)"
                trusted_title="Con la confianza de empresas como:"
                trusted_list="<li class='list-inline-item col-md-5 col-lg-3 mr-0'><img src='https://ik.imagekit.io/itdo/forcadell_AlmKOrxiC.png' width='140' alt='client' class='img-fluid mb-5px'></li><li class='list-inline-item col-md-5 col-lg-3 mr-0'><img src='https://ik.imagekit.io/itdo/uab_Kd1KofHgu.png' width='90' alt='client' class='img-fluid'></li><li class='list-inline-item col-md-5 col-lg-3 mr-0'><img src='https://ik.imagekit.io/itdo/apadrina_uiTsjFdxa.png' width='150' alt='client' class='img-fluid'></li><li class='list-inline-item col-md-5 col-lg-3 mr-0'><img src='https://ik.imagekit.io/itdo/cafesam-w_9VwrGGJaTl.png' width='120' alt='client' class='img-fluid'></li>"
                templateId_emailjs="welcome_to_costumer_web"
                form_redirect_page="/muchas-gracias-desarrollo-web"
            />
            <About1 />
            <About2 />
            <CTA
                title="Genera la confianza online que se merece tu marca"
                description="Explícanos que necesitas y te diremos cómo podemos ayudarte. Sin ningún compromiso."
                id="call-action-app-2"
                cta_text="PEDIR PRESUPUESTO"
                cta_url="/desarrollo-web"
            />
            <About3 />
            <Business />
            <CTA
                title="Pide tu presupuesto ahora sin compromiso."
                description="¿Preparado para el siguiente nivel?  Es hora de despegar."
                id="call-action-1"
                cta_text="PEDIR PRESUPUESTO"
                cta_url="/desarrollo-web"
            />
            <Blog
                filtre={`&filter=tag:seo`}
                titol={`Artículos sobre desarrollo de páginas web, APPs móviles, transformación y experiencia digital.`}
            />
            <CTA
                title="Hacemos grandes sitios web. ¿Te apuntas?"
                description="Explícanos que necesitas y te diremos cómo podemos ayudarte sin ningún compromiso."
                id="call-action-app-3"
                cta_text="PEDIR PRESUPUESTO"
                cta_url="/desarrollo-web"
            />
        </Layout>
    );
};

export default ThemeITDOCustomWebPage;
