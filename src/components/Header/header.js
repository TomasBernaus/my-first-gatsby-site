import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Helmet } from "react-helmet";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageTitle: "",
      pageDescription: "",
      url_what: "/#por-que-itdo-en-el-desarrollo",
      url_price: "/#precios-desarrollo",
      url_cta: "/pedir-presupuesto/desarrollo-web",
    };
    this.getPageTitle = this.getPageTitle.bind(this);
    this.getPageDescription = this.getPageDescription.bind(this);
  }

  componentDidMount() {
    this.getPageTitle();
    this.getPageDescription();
  }

  getPageTitle = () => {
    const { location, title = null } = this.props;
    const { pathname } = location;

    if (title) {
      this.setState({
        pageTitle: title,
      });
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

    this.setState({
      pageTitle: output,
    });
  };

  getPageDescription = () => {
    const { location, description = null } = this.props;
    const { pathname } = location;

    if (description) {
      this.setState({
        pageDescription: description,
      });
      return;
    }
    let output =
      "Somos una empresa de desarrollo, expertos en creación de páginas web y APPs. ¡Pide tu presupuesto a medida!";
    switch (pathname) {
      case "/":
        output =
          "Somos una empresa de desarrollo, expertos en creación de páginas web y APPs. ¡Pide tu presupuesto a medida!";
        break;
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

    this.setState({
      pageDescription: output,
    });
  };

  render() {
    return (
      <React.Fragment>
        {/* start header section */}
        <Helmet>
          <html lang="es" />
          <meta name="author" content="ITDO" />
          <title>{this.state.pageTitle}</title>
          <meta name="title" content={this.state.pageTitle} />
          <meta name="description" content={this.state.pageDescription} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.itdo.com/" />
          <meta property="og:title" content={this.state.pageTitle} />
          <meta
            property="og:description"
            content={this.state.pageDescription}
          />
          <meta
            property="og:image"
            content="https://ik.imagekit.io/itdo/ITDO-freelance6_xH56McWwC.jpg"
          />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://www.itdo.com/" />
          <meta property="twitter:title" content={this.state.pageTitle} />
          <meta
            property="twitter:description"
            content={this.state.pageDescription}
          />
          <meta
            property="twitter:image"
            content="https://ik.imagekit.io/itdo/ITDO-freelance6_xH56McWwC.jpg"
          />
          <link
            rel="canonical"
            href={`http://www.itdo.com${this.props.location.pathname}`}
          />
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
                          <span className="head-sub-menu">
                            Desarrollo personalizado "Concierge"
                          </span>
                          <a
                            className="dropdown-item page-scroll"
                            href={
                              this.props.location.pathname === "/"
                                ? "/#desarrollo"
                                : "/"
                            }
                          >
                            Desarrollo de páginas web{" "}
                          </a>
                          <a
                            className="dropdown-item"
                            href={
                              this.props.location.pathname === "/desarrollo-web-avanzado-a-medida"
                                ? "/desarrollo-web-avanzado-a-medida/#desarrollo"
                                : "/desarrollo-web-avanzado-a-medida"
                            }
                          >
                            Desarrollo Web a medida
                          </a>
                          <a
                            className="dropdown-item"
                            href={
                              this.props.location.pathname === "/desarrollo-app"
                                ? "/desarrollo-app/#desarrollo"
                                : "/desarrollo-app"
                            }
                          >
                            Desarrollo APP
                          </a>
                          <a
                            className="dropdown-item"
                            href="/pedir-presupuesto/automatizacion-erp-crm"
                          >
                            Automatización: Integración ERP y/o CRM
                          </a>
                          <a
                            className="dropdown-item"
                            href="/pedir-presupuesto/diseno-web-ui-ux"
                          >
                            Diseño web UI/UX
                          </a>
                        </div>
                        <div className="col-md-12">
                          <span className="head-sub-menu">
                            Consultoría y posicionamiento
                          </span>
                          <a
                            className="dropdown-item"
                            href="/pedir-presupuesto/por-que-no-posiciona-mi-web"
                          >
                            ¿Por que no posiciona mi web?{" "}
                          </a>
                          <a
                            className="dropdown-item"
                            href="/pedir-presupuesto/transformacion-digital"
                          >
                            Transformación digital de tu negocio
                          </a>
                          <a
                            className="dropdown-item"
                            href="/pedir-presupuesto/auditoria-posicionamiento-SEO"
                          >
                            Auditoria y posicionamiento SEO
                          </a>
                          <a
                            className="dropdown-item"
                            href="/pedir-presupuesto/analisis-redes-sociales"
                          >
                            Análisis de Redes Sociales
                          </a>
                          <a
                            className="dropdown-item"
                            href="/pedir-presupuesto/captacion-fidelizacion-clientes-CRM"
                          >
                            Captación y fidelización de clientes CRM
                          </a>
                          <a
                            className="dropdown-item"
                            href="/portafolio"
                          >
                            Portafolio
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link page-scroll"
                      href={
                        this.props.location.pathname.includes("desarrollo-app")
                          ? "/desarrollo-app#por-que-itdo-en-el-desarrollo"
                          : this.state.url_what
                      }
                    >
                      ¿Por qué ITDO?
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link page-scroll"
                      href={
                        this.props.location.pathname.includes("desarrollo-app")
                          ? "/desarrollo-app#precios-desarrollo"
                          : this.state.url_price
                      }
                    >
                      Planes & Precios
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/blog/">
                      Blog
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link page-scroll" href="/contacto">
                      Contacto
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link search-item" href="#search-modal">
                      <img src="/img/search.png" alt="Search" />
                    </a>
                  </li>
                  <li className="nav-item mt--5">
                    <a
                      className="btn solid-btn btn-block menu-presupuesto"
                      href={
                        this.props.location.pathname.includes("desarrollo-app")
                          ? "/pedir-presupuesto/desarrollo-app"
                          : this.state.url_cta
                      }
                    >
                      PEDIR PRESUPUESTO
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
        {/* end header section */}
      </React.Fragment>
    );
  }
}

export default connect(state => ({}))(withRouter(Header));
