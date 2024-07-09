import React, { useState, useEffect } from "react";
import _data from "../../data";

const Portafolio5 = () => {
  const [aboutUs, setAboutUs] = useState({});

  useEffect(() => {
    setAboutUs(_data.ITDOaboutUs1);
  }, []);

  return (
    <section id="Portafolio5" className="imageblock-section switchable switchable-content pt-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 col-md-5">
            <div className="about-content ml-20">
              <div className="img-logo">
                <img
                  src="https://ik.imagekit.io/tbernaus/itdo%20portafolio/logos/kycredit%20logo.png?updatedAt=1700487129186"
                  alt="KyCredit"
                  className="img-fluid"
                />
              </div>
              <p>
                <a href="https://check.kycredit.com/">Check by KyCredit </a> es una plataforma de networking inteligente.
                Analiza, compara y elige proveedores, clientes o socios comerciales solventes con nuestra herramienta de
                análisis diseñada para negocios de cualquier sector y tamaño. Desarrollado en WordPress con un enfoque en
                programación a medida para integrar la plataforma de networking, diseñado exclusivamente para KyCredit.
              </p>
            </div>
          </div>
          <div className="col-lg-7 col-md-7 order-first order-md-last">
            <img
              src="https://ik.imagekit.io/tbernaus/itdo%20portafolio/kycredit.png?updatedAt=1700230909195"
              alt="KyCredit"
              className="img-fluid img-with-shadow-br"
              width="100%"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portafolio5;
