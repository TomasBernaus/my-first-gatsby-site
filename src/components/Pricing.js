import React from "react";

class Pricing extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section id="precios-desarrollo" className={"package-section ptb-100 " + (this.props.bgColor && this.props.bgColor === 'white' ? '' : 'gray-light-bg')}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="section-heading text-center mb-5">
                  <h2>Planes de desarrollo web</h2>
                  <p className="lead">Elige el plan de desarrollo de páginas web adecuado a tus necesidades o pide tu presupuesto personalizado. Te lo enviamos en un máximo de 24h.</p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-3 col-md-6 pr-0 mt-10" key="0">
                <div className="card text-center single-pricing-pack">
                  <div className="card-header py-5 border-0 pricing-header pb-20">
                    <div className="h1 text-center mb-0">
                      <span className="price font-weight-bolder">299€</span>
                    </div>
                    <span className="h6 text-muted">Básico</span>
                    <div className="h6 text-muted mt-10">
                      <a
                        href='/contratar-desarrollo-web/Básico'
                        className="mb-3"
                      >Contratar</a>
                    </div>
                  </div>
                  <div className="card-body">
                    <ul className="list-unstyled text-sm mb-4 pricing-feature-list">
                      <li>3 páginas</li>
                      <li>Posicionamiento en Google SEO</li>
                      <li>Diseño e imagen de tu página web</li>
                      <li>Imágenes de stock</li>
                      <li>Adaptada a móviles y 100% responsive</li>
                      <li>1 idioma</li>
                      <li>CMS Autogestionable</li>
                      <li>Leyes obligatorias web (LSSI, RGPD y Cookies)</li>
                      <li>Sitio web seguro (HTTPS)</li>
                      <li>Página web o blog</li>
                      <li><br /></li>
                      <li><br /></li>
                      <li><br /></li>
                    </ul>
                    <a
                      href='/contratar-desarrollo-web/Básico'
                      className="btn mb-3 primary-solid-btn"
                    >
                      Contratar
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 pr-0 mt-10" key="1">
                <div className="card text-center single-pricing-pack">
                  <div className="card-header py-5 border-0 pricing-header pb-20">
                    <div className="h1 text-center mb-0">
                      <span className="price font-weight-bolder">499€</span>
                    </div>
                    <span className="h6 text-muted">Avanzado</span>
                    <div className="h6 text-muted mt-10">
                      <a
                        href='/contratar-desarrollo-web/Avanzado'
                        className="mb-3"
                      >Contratar</a>
                    </div>
                  </div>
                  <div className="card-body">
                    <ul className="list-unstyled text-sm mb-4 pricing-feature-list">
                      <li><strong>5 páginas</strong></li>
                      <li>Posicionamiento en Google SEO</li>
                      <li>Diseño e imagen de tu página web</li>
                      <li>Imágenes de stock</li>
                      <li>Adaptada a móviles y 100% responsive</li>
                      <li><strong>2 idiomas</strong></li>
                      <li>CMS Autogestionable</li>
                      <li>Leyes obligatorias web (LSSI, RGPD y Cookies)</li>
                      <li>Sitio web seguro (HTTPS)</li>
                      <li>Página web o blog</li>
                      <li><br /></li>
                      <li><br /></li>
                      <li><br /></li>
                    </ul>
                    <a
                      href='/contratar-desarrollo-web/Avanzado'
                      className="btn mb-3 primary-solid-btn"
                    >
                      Contratar
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 pr-0 mt-10" key="1">
                <div className="card text-center single-pricing-pack">
                  <div className="card-header py-5 border-0 pricing-header pb-20">
                    <div className="h1 text-center mb-0">
                      <span className="price font-weight-bolder">799€</span>
                    </div>
                    <span className="h6 text-muted">Profesional</span>
                    <div className="h6 text-muted mt-10">
                      <a
                        href='/contratar-desarrollo-web/Profesional'
                        className="mb-3"
                      >Contratar</a>
                    </div>
                  </div>
                  <div className="card-body">
                    <ul className="list-unstyled text-sm mb-4 pricing-feature-list">
                      <li><strong>10 páginas</strong></li>
                      <li>Posicionamiento en Google SEO</li>
                      <li>Diseño e imagen de tu página web</li>
                      <li>Imágenes de stock</li>
                      <li>Adaptada a móviles y 100% responsive</li>
                      <li><strong>2 idiomas</strong></li>
                      <li>CMS Autogestionable</li>
                      <li>Leyes obligatorias web (LSSI, RGPD y Cookies)</li>
                      <li>Sitio web seguro (HTTPS)</li>
                      <li>Página web o blog</li>
                      <li><strong>Chat de contacto</strong></li>
                      <li><br /></li>
                      <li><br /></li>
                    </ul>
                    <a
                      href='/contratar-desarrollo-web/Profesional'
                      className="btn mb-3 primary-solid-btn"
                    >
                      Contratar
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 pr-0 mt-10">
                <div className="card text-center single-pricing-pack primary-bg">
                  <div className="card-header py-5 border-0 pricing-header pb-20 text-white">
                    <div className="h1 text-center mb-0">
                      <span className="price font-weight-bolder">Premium</span>
                    </div>
                    <span className="h6 text-white">a partir de 899€</span>
                    <div className="h6 text-muted mt-10">
                      <a
                        href='/pedir-presupuesto/desarrollo-web'
                        className="mb-3 text-action"
                      >Pedir presupuesto</a>
                    </div>
                  </div>
                  <div className="card-body">
                    <ul className="list-unstyled text-sm mb-4 pricing-feature-list text-white">
                      <li><strong>Desarrollo web a medida</strong></li>
                      <li>Posicionamiento en Google SEO</li>
                      <li>Diseño e imagen de tu página web</li>
                      <li><strong>Imágenes de stock o fotógrafo</strong></li>
                      <li>Adaptada a móviles y 100% responsive</li>
                      <li><strong>Multidioma</strong></li>
                      <li>CMS Autogestionable</li>
                      <li>Leyes obligatorias web (LSSI, RGPD y Cookies)</li>
                      <li>Sitio web seguro (HTTPS)</li>
                      <li><strong>Página web, blog o tienda online</strong></li>
                      <li><strong>Chat de contacto</strong></li>
                      <li><strong>Textos de calidad</strong></li>
                      <li><strong>Importación de tu actual web</strong></li>
                    </ul>
                    <a
                      href='/pedir-presupuesto/desarrollo-web'
                      className="btn mb-3 solid-btn"
                    >
                      PEDIR PRESUPUESTO
                    </a>
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
