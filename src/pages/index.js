import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout/layout';
import Seo from '../components/seo';

// import Header from '../components/Header/header';
// import HeroSection from '../components/HeroSection/heroSectionITDO';
import AboutSection1 from '../components/AboutUs/AboutUsITDO1.js';
import AboutSection2 from '../components/AboutUs/AboutUsITDO2.js';
import Pricing from '../components/Pricing.js';
// import Blog from '../components/Blog';
import ActionToCall1 from '../components/ActionToCall/ActionToCall1.js';
import ActionToCall2 from '../components/ActionToCall/ActionToCall2.js';
import ActionToCall3 from '../components/ActionToCall/ActionToCall3.js';
// import Footer from '../components/Footer/footer';
import LazyContent from '../components/LazyContent.js';
import TeamMember from '../components/TeamMember';
import Business from '../components/Business.js';

const IndexPage = ({ data }) => {
  const homePage = data.allNodePage.edges.find(edge => edge.node.title === "Home");

  if (!homePage) {
    return (
      <Layout pageTitle="Home">
        <p>No s'ha trobat la página "Home".</p>
      </Layout>
    );
  }

  const { id, title, body } = homePage.node;

  return (
    <Layout>
      {/* ^ layout gatsby */}
      {/* v header itdo */}
      {/* <Header bg='blue'/> */}
      <div className="main">
        {/* <HeroSection
          title="Agencia especializada en desarrollar páginas web"
          description="Somos una empresa de desarrollo, expertos en creación de páginas web y APPs. Te ayudamos a crear tu página web con <strong><a href='/pedir-presupuesto/desarrollo-web'>la mejor relación calidad-precio</a></strong>, creando una <strong><a href='/pedir-presupuesto/desarrollo-web'>experiencia digital atractiva para que tu negocio conecte con las personas</a>.</strong>"
          img_background="url(https://ik.imagekit.io/itdo/ITDO-freelance6_xH56McWwC.jpg)"
          trusted_title="Con la confianza de empresas como:"
          trusted_list="<li class='list-inline-item col-md-5 col-lg-3 mr-0'><img src='https://ik.imagekit.io/itdo/forcadell_AlmKOrxiC.png' width='140' alt='client' class='img-fluid mb-5px' /></li><li class='list-inline-item col-md-5 col-lg-3 mr-0'><img src='https://ik.imagekit.io/itdo/uab_Kd1KofHgu.png' width='100' alt='client' class='img-fluid' /></li><li class='list-inline-item col-md-5 col-lg-3 mr-0'><img src='https://ik.imagekit.io/itdo/vhir_O0NNmuo2k.png' width='100' alt='client' class='img-fluid' /></li><li class='list-inline-item col-md-5 col-lg-3 mr-0'><img src='https://ik.imagekit.io/itdo/cafesam-w_9VwrGGJaTl.png' width='120' alt='client' class='img-fluid' /></li>"
          templateId_emailjs="welcome_to_costumer_web"
          form_redirect_page="/muchas-gracias-desarrollo-web"
        /> */}
        <AboutSection1 />
        <ActionToCall1 />
        <AboutSection2 />
        <Business />
        <ActionToCall3 />
        <Pricing bgColor="white" />
        {/* <Blog
          titol="Artículos sobre desarrollo de páginas web, APPs móviles, transformación y experiencia digital."
        /> */}
        <LazyContent />
        <TeamMember />
        <ActionToCall2 />
      </div>
      {/* <Footer /> */}
    </Layout>
  );
};

export const query = graphql`
  query MyQuery {
    allNodePage {
      edges {
        node {
          id
          title
          body {
            processed
          }
        }
      }
    }
  }
`;

export const Head = () => <Seo title="Home" />;

export default IndexPage;
