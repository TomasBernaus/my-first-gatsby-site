import React, { useEffect, useState } from "react";

const About2 = () => {
  const [aboutUs, setAboutUs] = useState({});

  useEffect(() => {
    // Aquí puedes realizar tu llamada a la API para obtener datos de Drupal
    const fetchData = async () => {
      try {
        // Reemplaza esta URL con la de tu endpoint de Drupal
        const response = await fetch('https://tu-drupal-site.com/api/about-us');
        const data = await response.json();
        setAboutUs(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {/* start header section */}
      <section id="por-que-itdo-en-el-desarrollo" className="about-us ptb-100 white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="about-content-left">
                <h2>¿Por qué ITDO?</h2>
                <p className="lead">
                  Nuestro equipo competente de desarrolladores de aplicaciones móviles posee una gran experiencia obtenida a través del trabajo continuo y la entrega de diversas aplicaciones móviles que satisfacen las diversas necesidades de diferentes sectores.
                </p>
                <p className="lead">
                  Como organización profesional, nos aseguramos de cumplir siempre con los estándares de calidad de la industria siguiendo los estándares de codificación y los protocolos definidos por la industria. Nuestra UI / UX proporciona una experiencia digital atractiva a tus usuarios finales.
                </p>
                <p className="lead">
                  No todos los negocios necesitan lo mismo, ni todas las APPs cuestan lo mismo. Nuestros planes te permiten ahorrar y pagar sólo en función de las características que necesitas.
                </p>
                <a className="btn solid-btn" href="/desarrollo-app">PEDIR PRESUPUESTO</a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="counter">
                <div className="single-card box-animation-1 icon-color-2" key="1">
                  <span className="ti-user"></span>
                  <p>Equipo experimentado</p>
                </div>
                <div className="single-card box-animation-2 icon-color-2" key="2">
                  <span className="ti-mobile"></span>
                  <p>Interacción cara a cara</p>
                </div>
                <div className="single-card box-animation-3 icon-color-2" key="3">
                  <span className="ti-link"></span>
                  <p>Metodología Ágil</p>
                </div>
                <div className="single-card box-animation-4 icon-color-2" key="4">
                  <span className="ti-flag-alt"></span>
                  <p>10 años de Experiencia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end header section */}
    </>
  );
};

export default About2;
