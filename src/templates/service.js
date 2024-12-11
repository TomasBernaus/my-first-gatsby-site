import React from 'react';
import { graphql } from 'gatsby';
import Header from '../components/Header/header';
import Footer from '../components/Footer/footer';
import HeroSection from '../components/HeroSection/heroSectionQuoteContact';
import RequestQuoteSection from '../pages/Quote/Contact';



const PlantillaService = ({ data }) => {
  const { title, field_description, field_bgimg } = data.nodeServices;
  const description = field_description;
  const backgroundImage = field_bgimg; 

  return (
    <div>
      <Header title={title} />
        <HeroSection 
          title={`Pide un presupuesto para ${title}`} 
          description={description || 'Rellena este formulario y tendrás tu presupuesto en menos de 24h'} 
          backgroundImage={backgroundImage}
        />
        <section className="contact-us-section ptb-100-none gray-light-bg" >
            <div className="container">
                <div className="row justify-content-between align-items-center">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <RequestQuoteSection />
                        <p className="form-message" />
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>
        </section>
        <Footer />
    </div>
  );
};

export const query = graphql`
  query($id: String!) {
    nodeServices(id: { eq: $id }) {
        id
        title
        field_url
        field_bgimg
        field_description
    }
  }
`;

export default PlantillaService;
