import React, { useEffect, useState } from "react";
import _data from "../../data"; 

const About2 = () => {
  const [aboutUs, setAboutUs] = useState({});

  useEffect(() => {
    setAboutUs(_data.ITDOaboutUs2);

    const videoElement = document.getElementById("vid");
    if (videoElement) {
      videoElement.play();
    }
  }, []);

  return (
    <>
      <section id="about3-app" className="about-us ptb-100 gray-light-bg imageblock-section switchable">
        <div className="container">
          <div className="row align-items-center ptb-100">
            <div className="col-md-6 ">
              <div className="about-content-left">
                <h2>Empresa de Desarrollo de Aplicaciones con React Native</h2>
                <p className="lead">
                  <strong>A medida que más negocios se centran en brindar el “máximo valor en un tiempo mínimo”</strong>, las aplicaciones multiplataforma ganan más relevancia.
                </p>
                <p className="lead">
                  Nuestro conocimiento en React Native nos permite usar el mismo código base para crear aplicaciones específicas para cada plataforma, con un ciclo de desarrollo reducido.
                </p>
                <p className="lead">
                  En ITDO, tenemos como uno de los principales objetivos desarrollar y entregar aplicaciones multiplataforma con diseños de alta calidad e infraestructura backend en el cloud altamente escalable.
                </p>
                <div className="row ">
                  <div className="col-lg-6 col-md-12 single-feature mb-4">
                    <div className="d-flex align-items-center mb-2">
                      <span className="rounded mr-3 icon icon-color-2"> 1 </span>
                      <h5 className="mb-0">Multiplataforma</h5>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 single-feature mb-4">
                    <div className="d-flex align-items-center mb-2">
                      <span className="rounded mr-3 icon icon-color-2"> 2 </span>
                      <h5 className="mb-0">Desarrollo web usando React Native</h5>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 single-feature mb-4">
                    <div className="d-flex align-items-center mb-2">
                      <span className="rounded mr-3 icon icon-color-2"> 3 </span>
                      <h5 className="mb-0">Desarrollo más rápido</h5>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 single-feature mb-4">
                    <div className="d-flex align-items-center mb-2">
                      <span className="rounded mr-3 icon icon-color-2"> 4 </span>
                      <h5 className="mb-0">Desarrollo de plugins</h5>
                    </div>
                  </div>
                </div>
                <a className="btn solid-btn" href="/desarrollo-app">PEDIR PRESUPUESTO</a>
              </div>
            </div>
          </div>
        </div>
        <div className="imageblock-section-img col-md-6">
          <video muted loop id="vid">
            <source src="/img/cemcat-app.mp4" type="video/mp4" />
          </video>
        </div>
      </section>
    </>
  );
};

export default About2;
