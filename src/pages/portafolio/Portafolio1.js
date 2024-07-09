import React from "react";

const Portafolio1 = () => {
    return (
        <section
            id="Portafolio1"
            className="imageblock-section switchable switchable-content pt-5">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-5">
                        <div className="about-content ml-20">
                            <div className="img-logo">
                                <img
                                    data-src="https://ik.imagekit.io/tbernaus/itdo%20portafolio/logos/kas%20logo.png?updatedAt=1700487128923"
                                    src="https://ik.imagekit.io/tbernaus/itdo%20portafolio/logos/kas%20logo.png?updatedAt=1700487128923"
                                    alt="Kids And Us"
                                    className="img-fluid"
                                />
                            </div>

                            <p><a href="https://www.kidsandus.es/es">Kids&Us</a> es un centro de idiomas con un método que se basa en el proceso natural de
                                adquisición de la lengua materna, un camino de aprendizaje que sigue un orden lógico, natural y espontáneo. El sitio web ha
                                sido actualizado con GatsbyJS y Drupal como CMS mediante una metodología JAMStack y Devops,
                                <strong> mejorando el tiempo de compilación del sitio web</strong>, el performance <strong>y los costes de infraestructura.</strong>
                            </p>

                        </div>
                    </div>
                    <div className="col-lg-7 col-md-7 order-first order-md-last">
                        <img
                            data-src="https://ik.imagekit.io/tbernaus/itdo%20portafolio/kidsandus.png?updatedAt=1700223241621"
                            src="https://ik.imagekit.io/tbernaus/itdo%20portafolio/kidsandus.png?updatedAt=1700223241621"
                            alt="Kids&us"
                            className="img-fluid img-with-shadow-br"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Portafolio1;
