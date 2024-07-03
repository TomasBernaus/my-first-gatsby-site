import React from 'react';
import Layout from '../components/Layout/layout'
import HeroSection from '../components/HeroSection/heroSectionQuoteContact';
import RequestQuoteSection from '../components/Quote/Contact';

const QuoteContactPage = ({ pageContext }) => {
    const { service, description } = pageContext;
    let output;
    let backgroundImage;
    switch (service) {
        case "desarrollo-web-a-medida":
            output = "Desarrollo Web a Medida";
            backgroundImage = 'https://ik.imagekit.io/itdo/ITDO-freelance6_xH56McWwC.jpg';
            break;
        case "desarrollo-app":
            output = "Desarrollo APP";
            backgroundImage = 'https://ik.imagekit.io/itdo/itdo-app_s5lr3j6uU.jpeg';
            break;
        case "automatizacion-erp-crm":
            output = "Automatización: Integración ERP y/o CRM";
            break;
        case "diseno-web-ui-ux":
            output = "Diseño web UI/UX";
            break;
        case "por-que-no-posiciona-mi-web":
            output = "¿Por que no posiciona mi web?";
            break;
        case "auditoria-posicionamiento-SEO":
            output = "Auditoria y posicionamiento SEO";
            break;
        case "analisis-redes-sociales":
            output = "Análisis de Redes Sociales";
            break;
        case "captacion-fidelizacion-clientes-CRM":
            output = "Captación y fidelización de clientes CRM";
            break;
        default:
            output = "";
            backgroundImage = 'https://ik.imagekit.io/itdo/ITDO-freelance6_xH56McWwC.jpg';
            break;
    }
    return (
        <Layout>
            <HeroSection title={`Pide un presupuesto ${output}`} description={description || 'Rellena este formulario y tendrás tu presupuesto en menos de 24h'} backgroundImage={backgroundImage} />
            <section className="contact-us-section ptb-100-none gray-light-bg" >
                {/* <Notifications options={{ zIndex: 200 }} /> */}
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
        </Layout>
    );
};

export default QuoteContactPage;
