import React, { useState, useEffect } from "react";
// import { connect } from "react-redux";
// import { withRouter } from "react-router-dom";
import { Helmet } from "react-helmet";

const Header = (props) => {
  const [pageTitle, setPageTitle] = useState("");
  const [pageDescription, setPageDescription] = useState("");
  const url_what = "/#por-que-itdo-en-el-desarrollo";
  const url_price = "/#precios-desarrollo";
  const url_cta = "/pedir-presupuesto/desarrollo-web";

  useEffect(() => {
    getPageTitle();
    getPageDescription();
  }, [props.location, props.title, props.description]);

  const getPageTitle = () => {
    const { location = {}, title = null } = props;
    const { pathname = "/" } = location;

    if (title) {
      setPageTitle(title);
      return;
    }

    let output = "Desarrollo Web | Páginas web profesionales | itdo.com";
    switch (pathname) {
      case "/":
        output = "Desarrollo Web | Páginas web profesionales | itdo.com";
        break;
      case "/desarrollo-app":
        output = "Desarrollo APP | Pide un presupuesto | itdo.com";
        break;
      case "/pedir-presupuesto/desarrollo-web":
        output = "Desarrollo Web | Pide un presupuesto | itdo.com";
        break;
      case "/contratar-desarrollo-web/Básico":
        output = "Desarrollo Web | Pide un presupuesto Básico | itdo.com";
        break;
      case "/contratar-desarrollo-web/Avanzado":
        output = "Desarrollo Web | Pide un presupuesto Avanzado | itdo.com";
        break;
      case "/contratar-desarrollo-web/Profesional":
        output = "Desarrollo Web | Pide un presupuesto Profesional | itdo.com";
        break;
      case "/blog":
        output = "Desarrollo Web | Blog | itdo.com";
        break;
      case "/pedir-presupuesto/desarrollo-web-a-medida":
        output = "Desarrollo Web a medida | Pide un presupuesto | itdo.com";
        break;
      case "/pedir-presupuesto/desarrollo-app":
        output = "Desarrollo APP | Pide un presupuesto | itdo.com";
        break;
      case "/pedir-presupuesto/automatizacion-erp-crm":
        output = "Automatización: Integración ERP y/o CRM | Pide un presupuesto | itdo.com";
        break;
      case "/pedir-presupuesto/diseno-web-ui-ux":
        output = "Diseño web UI/UX | Pide un presupuesto | itdo.com";
        break;
      case "/pedir-presupuesto/por-que-no-posiciona-mi-web":
        output = "¿Por qué no posiciona mi web? | Pide un presupuesto | itdo.com";
        break;
      case "/pedir-presupuesto/auditoria-posicionamiento-SEO":
        output = "Auditoria y posicionamiento SEO | Pide un presupuesto | itdo.com";
        break;
      case "/pedir-presupuesto/analisis-redes-sociales":
        output = "Análisis de Redes Sociales | Pide un presupuesto | itdo.com";
        break;
      case "/pedir-presupuesto/captacion-fidelizacion-clientes-CRM":
        output = "Captación y fidelización de clientes CRM | Pide un presupuesto | itdo.com";
        break;
      default:
        output = "Desarrollo Web | Páginas web profesionales | itdo.com";
        break;
    }

    setPageTitle(output);
  };

  const getPageDescription = () => {
    const { location = {}, description = null } = props;
    const { pathname = "/" } = location;

    if (description) {
      setPageDescription(description);
      return;
    }
    let output =
      "Somos una empresa de desarrollo, expertos en creación de páginas web y APPs. ¡Pide tu presupuesto a medida!";
    switch (pathname) {
      case "/":
      case "/pedir-presupuesto/desarrollo-web":
        output =
          "Somos una empresa de desarrollo, expertos en creación de páginas web y APPs. ¡Pide tu presupuesto a medida!";
        break;
      case "/contratar-desarrollo-web/Básico":
        output = "Necesitas un sitio web básico ¡Pide tu presupuesto ahora!";
        break;
      case "/contratar-desarrollo-web/Avanzado":
        output = "Necesitas un sitio avanzado. ¡Pide tu presupuesto ahora!";
        break;
      case "/contratar-desarrollo-web/Profesional":
        output =
          "Necesitas un sitio web profesional ¡Pide tu presupuesto a ahora!";
        break;
      case "/contacto":
        output =
          "Necesitas un sitio web o APP profesional ¡Pide tu presupuesto a ahora!";
        break;
      case "/blog":
        output = "Desarrollo Web | Blog | itdo.com";
        break;
      default:
        output =
          "Somos una empresa de desarrollo, expertos en creación de páginas web y APPs. ¡Pide tu presupuesto a medida!";
        break;
    }

    setPageDescription(output);
  };

  return (
    <React.Fragment>
      {/* start header section */}
      <Helmet>
        <html lang="es" />
        <meta name="author" content="ITDO" />
        <title>{pageTitle}</title>
        <meta name="title" content={pageTitle} />
        <meta name="description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.itdo.com/" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta
          property="og:image"
          content="https://ik.imagekit.io/itdo/ITDO-freelance6_xH56McWwC.jpg"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.itdo.com/" />
        <meta property="twitter:title" content={pageTitle} />
        <meta property="twitter:description" content={pageDescription} />
        <meta
          property="twitter:image"
          content="https://ik.imagekit.io/itdo/ITDO-freelance6_xH56McWwC.jpg"
        />
        {/* <link
          rel="canonical"
          href={`http://www.itdo.com${props.location.pathname}`}
        /> */}
      </Helmet>
      <header className="header">
        <nav className="navbar navbar-expand-lg fixed-top bg-transparent">
          <div className="container">
            <a className="navbar-brand" href="/">
              <img
                src="/img/logo-wf.png"
                width="100"
                alt="logo"
                className="img-fluid"
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="ti-menu" />
            </button>

            <div
              className="collapse navbar-collapse main-menu"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link page-scroll dropdown-toggle"
                    href="/#"
                    id="navbarDropdownHome"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Servicios
                  </a>
                  <div
                    className="dropdown-menu submenu"
                    aria-labelledby="navbarDropdownHome"
                  >
                    <div className="content">
                      <div className="col-md-12">
                        <span
                          className="dropdown-item text-center"
                          href="/desarrollo-app"
                        >
                          <a href="/desarrollo-app">Desarrollo App</a>
                        </span>
                        <span
                          className="dropdown-item text-center"
                          href="/pedir-presupuesto/desarrollo-web"
                        >
                          <a href="/pedir-presupuesto/desarrollo-web">
                            Desarrollo Web
                          </a>
                        </span>
                        <span
                          className="dropdown-item text-center"
                          href="/pedir-presupuesto/desarrollo-web-a-medida"
                        >
                          <a href="/pedir-presupuesto/desarrollo-web-a-medida">
                            Desarrollo Web a Medida
                          </a>
                        </span>
                        <span
                          className="dropdown-item text-center"
                          href="/pedir-presupuesto/automatizacion-erp-crm"
                        >
                          <a href="/pedir-presupuesto/automatizacion-erp-crm">
                            Automatización ERP / CRM
                          </a>
                        </span>
                        <span
                          className="dropdown-item text-center"
                          href="/pedir-presupuesto/diseno-web-ui-ux"
                        >
                          <a href="/pedir-presupuesto/diseno-web-ui-ux">
                            Diseño Web UI/UX
                          </a>
                        </span>
                        <span
                          className="dropdown-item text-center"
                          href="/pedir-presupuesto/por-que-no-posiciona-mi-web"
                        >
                          <a href="/pedir-presupuesto/por-que-no-posiciona-mi-web">
                            ¿Por qué no posiciona mi web?
                          </a>
                        </span>
                        <span
                          className="dropdown-item text-center"
                          href="/pedir-presupuesto/auditoria-posicionamiento-SEO"
                        >
                          <a href="/pedir-presupuesto/auditoria-posicionamiento-SEO">
                            Auditoría y posicionamiento SEO
                          </a>
                        </span>
                        <span
                          className="dropdown-item text-center"
                          href="/pedir-presupuesto/analisis-redes-sociales"
                        >
                          <a href="/pedir-presupuesto/analisis-redes-sociales">
                            Análisis de Redes Sociales
                          </a>
                        </span>
                        <span
                          className="dropdown-item text-center"
                          href="/pedir-presupuesto/captacion-fidelizacion-clientes-CRM"
                        >
                          <a href="/pedir-presupuesto/captacion-fidelizacion-clientes-CRM">
                            Captación y fidelización de clientes CRM
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link page-scroll" href={url_what}>
                    ¿Por qué ITDO?
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link page-scroll" href={url_price}>
                    Precios
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link page-scroll" href={url_cta}>
                    Presupuesto
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link page-scroll" href="/blog">
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link page-scroll" href="/contacto">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      {/* End header section */}
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  title: state.common.title,
  description: state.common.description,
});

// export default withRouter(connect(mapStateToProps, null)(Header));
export default Header;