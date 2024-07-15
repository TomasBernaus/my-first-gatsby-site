import React from "react";
import _data from "../../data";

class About extends React.Component {
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
                <p>Nuestros diseños y desarrollos web aseguran una experiencia digital atractiva para que tu negocio conecte con las personas.</p>  
                <a className="btn solid-btn" href="/pedir-presupuesto/desarrollo-web">PEDIR PRESUPUESTO</a>                
              </div>
            </div>
            <div className="col-lg-1 col-md-1"></div>
            <div className="col-lg-6 col-md-6">
              <div className="row ptb-100">
                {this?.state?.aboutUs?.steps?.map((step, index) => (
                  <div className="col-lg-6 col-md-12 single-feature mb-4" key={index}>
                    <div className="d-flex align-items-center mb-2">
                      <span className="rounded mr-3 icon icon-color-2">{step.number}</span>
                      <h5 className="mb-0">{step.title}</h5>
                    </div>
                    <p>{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
