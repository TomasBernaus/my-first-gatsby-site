import React from 'react';
import HeroSection from '../../components/HeroSection/heroSectionITDO';
import Portafolio1 from './Portafolio1';
import Portafolio2 from './Portafolio2';
import Portafolio3 from './Portafolio3';
import Portafolio4 from './Portafolio4';
import Portafolio5 from './Portafolio5';
import Portafolio6 from './Portafolio6';
import Portafolio7 from './Portafolio7';
import Portafolio8 from './Portafolio8';
import Portafolio9 from './Portafolio9';
import Portafolio10 from './Portafolio10';
import Portafolio11 from './Portafolio11';
import Portafolio12 from './Portafolio12';
import Portafolio13 from './Portafolio13';
import Portafolio14 from './Portafolio14';
import Portafolio15 from './Portafolio15';
import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';
import CTA from '../../components/ActionToCall/CTA';
// import Blog from '../components/Blog/index';



const PortafolioPage = () => {
  return (
    <div>
    <Header />
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
      <Portafolio1 />
      <Portafolio2 />
      <Portafolio3 />

      <CTA
						title="Genera la confianza online que se merece tu marca"
						description="Explícanos que necesitas y te diremos cómo podemos ayudarte. Sin ningún compromiso."
						id="call-action-app-2"
						cta_text="PEDIR PRESUPUESTO"
						cta_url="/Contact"
					/>

      <Portafolio4 />
      <Portafolio5 />
      <Portafolio6 />

      {/* <Blog filtre={`&filter=tag:diseno-web`} /> */}


      <Portafolio7 />
      <Portafolio8 />
      <Portafolio9 />

      <CTA
						title="Pide tu presupuesto ahora sin compromiso."
						description="¿Preparado para el siguiente nivel? Es hora de despegar."
						id="call-action-1"
						cta_text="PEDIR PRESUPUESTO"
						cta_url="/desarrollo-app"
					/>

      <Portafolio10 />
      <Portafolio11 />
      <Portafolio12 />

      <CTA
						title="Hacemos grandes sitios web. ¿Te apuntas?"
						description="Explícanos que necesitas y te diremos cómo podemos ayudarte sin ningún compromiso."
						id="call-action-app-3"
						cta_text="PEDIR PRESUPUESTO"
						cta_url="/pedir-presupuesto/por-que-no-posiciona-mi-web/"
					/>

      <Portafolio13 />
      <Portafolio14 />
      <Portafolio15 />
    <Footer />
    </div>
  );
}

export default PortafolioPage;
