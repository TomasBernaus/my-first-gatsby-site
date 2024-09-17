import React from "react";
import _data from "../../data";

class AboutUsITDO1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      aboutUs: {}
    };
  }

  componentDidMount() {
    this.setState({
      aboutUs: _data.ITDOaboutUs1
    });
  }

  render() {
    return (
      <React.Fragment>
        <section
          id="desarrollo"
          className="imageblock-section switchable switchable-content gray-light-bg"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-md-5">
                <div className="about-content ptb-100 ml-20">
                  <p className="color-secondary">
                    <strong>Desarrollo de páginas web</strong>
                  </p>
                  <h2>Contamos tu historia con una atractiva página web, tienda online o blog</h2>
                  <p>Nuestros diseños y desarrollos web aseguran una experiencia digital atractiva para que tu negocio conecte con las personas. </p>  
                  <a className="btn solid-btn" href="/pedir-presupuesto/desarrollo-web">PEDIR PRESUPUESTO</a>                
                </div>
              </div>
              <div className="col-lg-1 col-md-1"></div>
              <div className="col-lg-6 col-md-6">
                <div className="row ptb-100">
                  <div className="col-lg-6 col-md-12 single-feature mb-4">
                    <div className="d-flex align-items-center mb-2">
                      <span className="rounded mr-3 icon icon-color-2">1</span>
                      <h5 className="mb-0">Definición</h5>
                    </div>
                    <p>Simplificamos y concretamos contigo las ideas que tienes para tu página web, entendiendo todas las necesidades.</p>
                  </div>
                  <div className="col-lg-6 col-md-12 single-feature mb-4">
                    <div className="d-flex align-items-center mb-2">
                      <span className="rounded mr-3 icon icon-color-2">2</span>
                      <h5 className="mb-0">Diseño</h5>
                    </div>
                    <p>Nos ponemos en la piel de tus clientes, a fin de llevar a cabo un diseño que refuerce tu marca. Creamos un prototipo interactivo para testear.</p>
                  </div>
                  <div className="col-lg-6 col-md-12 single-feature mb-4">
                    <div className="d-flex align-items-center mb-2">
                      <span className="rounded mr-3 icon icon-color-2">3</span>
                      <h5 className="mb-0">Desarrollo</h5>
                    </div>
                    <p>¡Le damos vida al prototipo! Desarrollamos y ultimamos el producto final, optando por la tecnología que mejor se adapta a tus necesidades.</p>
                  </div>
                  <div className="col-lg-6 col-md-12 single-feature mb-4">
                    <div className="d-flex align-items-center mb-2">
                      <span className="rounded mr-3 icon icon-color-2">4</span>
                      <h5 className="mb-0">Lanzamiento</h5>
                    </div>
                    <p>Después de que tu página web finalmente se vea y se sienta tal como esperabas, la hacemos visible al público, brindándote todo el soporte, para el éxito a largo plazo.</p>
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

export default AboutUsITDO1;
