import React, { useState, useEffect } from "react";

const About2 = () => {
  const [aboutUs, setAboutUs] = useState({});

  useEffect(() => {
    // Simulación de obtención de datos, si fuera necesario
    setAboutUs(""); // Aquí se puede agregar la lógica para obtener datos.
  }, []);

  return (
    <section id="por-que-itdo-en-el-desarrollo" className="about-us ptb-100 white">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="about-content-left">
              <h2>¿Por qué ITDO?</h2>
              <p className="lead">
                Nuestro equipo de expertos se enfoca en la{" "}
                <strong>satisfacción del cliente y en tu objetivo comercial</strong>. Esta es una
                de las muchas razones por las cuales nuestro trabajo es aclamado y reconocido a
                nivel mundial.
              </p>
              <p className="lead">
                Desarrollamos páginas web centradas en personificar tu marca, ofreciendo soluciones
                web de primera calidad para empresas que buscan un trabajo excelente con
                interacciones complejas, tiempo de respuesta y rendimiento.
              </p>
              <a className="btn solid-btn" href="/desarrollo-web">
                PEDIR PRESUPUESTO
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <div className="counter">
              <div className="single-card box-animation-1 icon-color-2" key="1">
                <span className="ti-announcement"></span>
                <p>Atraerás a nuevos clientes</p>
              </div>
              <div className="single-card box-animation-2 icon-color-2" key="2">
                <span className="ti-user"></span>
                <p>Web centrada en las personas, tus clientes</p>
              </div>
              <div className="single-card box-animation-3 icon-color-2" key="3">
                <span className="ti-stats-up"></span>
                <p>Aumentarás tu audiencia</p>
              </div>
              <div className="single-card box-animation-4 icon-color-2" key="4">
                <span className="ti-face-smile"></span>
                <p>Reforzarás tu marca en internet</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About2;
