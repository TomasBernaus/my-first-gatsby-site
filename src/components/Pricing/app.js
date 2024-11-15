import React from "react";
import { Link } from "gatsby"; 

class Pricing extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section id="precios-desarrollo" className={"package-section ptb-100 " + (this.props.bgColor && this.props.bgColor === 'white' ? '' : 'gray-light-bg')}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="section-heading text-center mb-5">
                  <h2>Planes de desarrollo de APPs</h2>
                  <p className="lead">
                    Elige el plan de desarrollo de APPs adecuado a tus necesidades o pide tu presupuesto personalizado, ¡Te lo enviamos en un máximo de 24h!
                  </p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 pr-0 mt-10" key="0">
                <div className="card text-center single-pricing-pack">
                  <div className="card-header py-5 border-0 pricing-header pb-20">
                    <div className="h1 text-center mb-0">
                      <span className="price font-weight-bolder">99€</span>
                      <span className="subtext">/mes</span>
                    </div>
                    <span className="h6 text-muted"><strong>Básico Android o iOS</strong></span>
                    <div className="h6 text-muted mt-10">
                      <Link to="/contratar-desarrollo-app/Básico" className="mb-3">
                        Contratar
                      </Link>
                    </div>
                  </div>
                  <div className="card-body">
                    <ul className="list-unstyled text-sm mb-4 pricing-feature-list">
                      <li>APP iOS</li>
                      <li>Interfaz sencilla</li>
                      <li>Perfil de usuarios con email</li>
                      <li>Panel de administración para gestionar la APP</li>
                      <li>Push Notifications</li>
                      <li>1 idioma</li>
                      <li> <br /> </li>
                      <li> <br /> </li>
                    </ul>
                    <Link to="/contratar-desarrollo-app/Básico" className="btn mb-3 primary-solid-btn">
                      Contratar
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 pr-0 mt-10" key="1">
                <div className="card text-center single-pricing-pack">
                  <div className="card-header py-5 border-0 pricing-header pb-20">
                    <div className="h1 text-center mb-0">
                      <span className="price font-weight-bolder">149€</span>
                      <span className="subtext">/mes</span>
                    </div>
                    <span className="h6 text-muted"><strong>Avanzado iOS y Android</strong></span>
                    <div className="h6 text-muted mt-10">
                      <Link to="/contratar-desarrollo-app/Avanzado" className="mb-3">
                        Contratar
                      </Link>
                    </div>
                  </div>
                  <div className="card-body">
                    <ul className="list-unstyled text-sm mb-4 pricing-feature-list">
                      <li>APP iOS + Android</li>
                      <li>Interfaz avanzada</li>
                      <li>Perfil de usuarios con redes sociales y/o email</li>
                      <li>Panel de administración para gestionar la APP</li>
                      <li>Push Notifications</li>
                      <li>1 idioma</li>
                      <li> <br /> </li>
                      <li> <br /> </li>
                    </ul>
                    <Link to="/contratar-desarrollo-app/Avanzado" className="btn mb-3 primary-solid-btn">
                      Contratar
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 pr-0 mt-10">
                <div className="card text-center single-pricing-pack primary-bg">
                  <div className="card-header py-5 border-0 pricing-header pb-20 text-white">
                    <div className="h1 text-center mb-0">
                      <span className="price font-weight-bolder">Personalizado</span>
                    </div>
                    <span className="h6 text-white">a partir de 149€</span>
                    <span className="subtext">/mes + *integración</span>
                    <div className="h6 text-muted mt-10">
                      <Link to="/desarrollo-app" className="mb-3 text-action">
                        Pedir presupuesto
                      </Link>
                    </div>
                  </div>
                  <div className="card-body">
                    <ul className="list-unstyled text-sm mb-4 pricing-feature-list text-white">
                      <li>APP iOS + Android</li>
                      <li>Interfaz personalizada</li>
                      <li>Perfil de usuarios con redes sociales y/o email</li>
                      <li>Panel de administración para gestionar la APP</li>
                      <li>Push Notifications, Geolocalización, Cámara, Micrófono, otros.</li>
                      <li>Multidioma</li>
                      <li>* Integración con otros sistemas Web, ERP, CRM</li>
                      <li>Registro propiedad intelectual para tu empresa</li>
                    </ul>
                    <Link to="/desarrollo-app" className="btn mb-3 solid-btn">
                      PEDIR PRESUPUESTO
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Pricing;
