import React from "react";

class Pricing extends React.Component {
  render() {
    const pricingPlans = [
      {
        price: "299€",
        title: "Básico",
        features: [
          "3 páginas",
          "Posicionamiento en Google SEO",
          "Diseño e imagen de tu página web",
          "Imágenes de stock",
          "Adaptada a móviles y 100% responsive",
          "1 idioma",
          "CMS Autogestionable",
          "Leyes obligatorias web (LSSI, RGPD y Cookies)",
          "Sitio web seguro (HTTPS)",
          "Página web o blog",
        ],
        link: '/contratar-desarrollo-web/Básico',
      },
      {
        price: "499€",
        title: "Avanzado",
        features: [
          "5 páginas",
          "Posicionamiento en Google SEO",
          "Diseño e imagen de tu página web",
          "Imágenes de stock",
          "Adaptada a móviles y 100% responsive",
          "2 idiomas",
          "CMS Autogestionable",
          "Leyes obligatorias web (LSSI, RGPD y Cookies)",
          "Sitio web seguro (HTTPS)",
          "Página web o blog",
        ],
        link: '/contratar-desarrollo-web/Avanzado',
      },
      {
        price: "799€",
        title: "Profesional",
        features: [
          "10 páginas",
          "Posicionamiento en Google SEO",
          "Diseño e imagen de tu página web",
          "Imágenes de stock",
          "Adaptada a móviles y 100% responsive",
          "2 idiomas",
          "CMS Autogestionable",
          "Leyes obligatorias web (LSSI, RGPD y Cookies)",
          "Sitio web seguro (HTTPS)",
          "Página web o blog",
          "Chat de contacto",
        ],
        link: '/contratar-desarrollo-web/Profesional',
      },
      {
        price: "Premium",
        title: "a partir de 899€",
        features: [
          "Desarrollo web a medida",
          "Posicionamiento en Google SEO",
          "Diseño e imagen de tu página web",
          "Imágenes de stock o fotógrafo",
          "Adaptada a móviles y 100% responsive",
          "Multidioma",
          "CMS Autogestionable",
          "Leyes obligatorias web (LSSI, RGPD y Cookies)",
          "Sitio web seguro (HTTPS)",
          "Página web, blog o tienda online",
          "Chat de contacto",
          "Textos de calidad",
          "Importación de tu actual web",
        ],
        link: '/desarrollo-web',
        isPremium: true,
      },
    ];

    return (
      <React.Fragment>
        <section id="precios-desarrollo" className={`package-section ptb-100 ${this.props.bgColor === 'white' ? '' : 'gray-light-bg'}`}>
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
              {pricingPlans.map((plan, index) => (
                <div className={`col-lg-3 col-md-6 pr-0 mt-10`} key={index}>
                  <div className={`card text-center single-pricing-pack ${plan.isPremium ? 'primary-bg' : ''}`}>
                    <div className={`card-header py-5 border-0 pricing-header pb-20 ${plan.isPremium ? 'text-white' : ''}`}>
                      <div className="h1 text-center mb-0">
                        <span className="price font-weight-bolder">{plan.price}</span>
                      </div>
                      <span className="h6 text-muted">{plan.title}</span>
                      <div className="h6 text-muted mt-10">
                        <a href={plan.link} className="mb-3">Contratar</a>
                      </div>
                    </div>
                    <div className="card-body">
                      <ul className="list-unstyled text-sm mb-4 pricing-feature-list">
                        {plan.features.map((feature, i) => (
                          <li key={i}><strong>{feature}</strong></li>
                        ))}
                      </ul>
                      <a href={plan.link} className="btn mb-3 primary-solid-btn">Contratar</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Pricing;
