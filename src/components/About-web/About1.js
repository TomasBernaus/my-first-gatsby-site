import React, { useState, useEffect } from "react";
import _data from "../../data";

const About = () => {
  const [aboutUs, setAboutUs] = useState({});

  useEffect(() => {
    setAboutUs(_data.ITDOaboutUs1);
  }, []);

  return (
    <section
      id="desarrollo"
      className="imageblock-section switchable switchable-content pt-5"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-5">
            <div className="about-content ml-20">
              <p className="color-secondary">
                <strong>Desarrollo web Avanzado</strong>
              </p>
              <p>
                <strong>Te ayudamos a llevar tu sitio web al siguiente nivel</strong>. Desarrollamos tu sitio web con el objetivo de aportar valor a tu empresa a través de herramientas digitales como Symfony PHP, sitios web avanzados con Drupal, Node.js, Reac.js, diseño y desarrollo de APIs y mucho más.
              </p>
              <p>
                Desde la fase de descubrimiento al prototipo, trabajamos contigo para transformar ideas en tareas accionables, características de productos y resultados medibles de tu presencia en internet.
              </p>
              <p>
                Te ayudamos con la definición del proyecto, el descubrimiento, la estrategia técnica, la estrategia de contenidos y la estrategia digital.
              </p>
            </div>
          </div>
          <div className="col-lg-7 col-md-7 order-first order-md-last">
            <img
              src="https://ik.imagekit.io/itdo/about-web_YuC_cYNqMt.jpg"
              alt="ITDO Te ayudamos a llevar tu sitio web al siguiente nivel."
              width="100%"
            />
          </div>
        </div>
        <div className="pt-5 text-center">
          <h2>¿Cómo hacemos tu desarrollo web Avanzado? ¡En 6 pasos!</h2>
        </div>
      </div>
    </section>
  );
};

export default About;
