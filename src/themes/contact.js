import React from 'react';
// import Layout from '../components/Layout/layout';
import HeroSection from '../components/HeroSection/heroSectionContact';
import Contacto from '../components/Quote/Contacto';

const ContactPage = () => {
    return (
        <Layout>
            <HeroSection title='Contacto' description={''} backgroundImage='https://ik.imagekit.io/itdo/ITDO-freelance6_xH56McWwC.jpg' />
            <div className="container contact-page ">
                <div className="row justify-content-between align-items-center">
                    <div className="col-md-6 ubicaciones">
                        <h4>Dirección</h4>
                        <ul className="list-unstyled row">
                            <li className="mb-2 col-md-12 col-lg-6 ">
                                <i className="ti-arrow-circle-right mr-2"></i>
                                <strong>Barcelona, Spain:</strong><br />
                                <a href="https://goo.gl/maps/eMuSJkwHEeqc2Qp99" target="_blank" rel="noopener noreferrer">HUB Terrassa. Av. Jaume I, 95, 08226 Terrassa, Barcelona, Spain</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6 form-contact">
                        <Contacto title="Contacto" />
                        <p className="form-message" />
                    </div>
                    <div className="col-md-3"> </div>
                </div>
            </div>
        </Layout>
    );
};

export default ContactPage;
