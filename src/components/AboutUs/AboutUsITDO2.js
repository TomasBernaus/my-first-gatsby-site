import React from "react";
import _data from "../../data";

class AboutUsITDO2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      aboutUs: {}
    };
  }

  componentDidMount() {
    this.setState({
      aboutUs: _data.ITDOaboutUs2
    });
  }

  render() {
    return (
      <React.Fragment>
        <section id="por-que-itdo-en-el-desarrollo" className={"about-us ptb-100 white"}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="about-content-left">
                  <h2>¿Por qué ITDO?</h2>
                  <p className="lead"> Nuestro equipo de expertos se enfoca en la <strong>satisfacción del cliente y en tu objetivo comercial</strong>.</p>
                  <p className="lead"> Desarrollamos páginas web centradas en personificar tu marca, ofreciendo soluciones web de primera calidad para empresas que buscan un excelente tiempo de respuesta.</p> 
                  <p className="lead"> No todos los negocios necesitan lo mismo, ni todas las páginas web cuestan lo mismo. Nuestros planes te permiten ahorrar y pagar sólo en función de las características que necesites.</p>
                  <a className="btn solid-btn" href="/desarrollo-web">PEDIR PRESUPUESTO</a>                
                </div>
              </div>
              <div className="col-md-6">
                <div className="counter">
                  {(this.state.aboutUs.counts || []).map(item => {
                    return (
                      <div className={item.boxClass} key={item.title}>
                        <span className={item.icon}></span>
                        <h3>{item.count}</h3>
                        <p>{item.title}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default AboutUsITDO2;
