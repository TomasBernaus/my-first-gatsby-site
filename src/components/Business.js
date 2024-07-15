import React, { Component } from "react";
import _data from "../data";

class Business extends Component {
  constructor(props) {
    super(props);
    this.state = {
      testimonial: {}
    };
  }

  componentDidMount() {
    this.setState({
      testimonial: _data.testimonial
    });
  }

  render() {
    return (
      <React.Fragment>
        <section className="gray-light-bg switchable switchable-content">
          <div className="about-content imageblock-section-img col-lg-7 col-md-7">
            <img data-src="https://ik.imagekit.io/itdo/FLEXES_v7NQ2kQBQ.png" src="https://ik.imagekit.io/itdo/FLEXES_v7NQ2kQBQ.png" alt="FLEXES página web" className="img-fluid" />
          </div>
          <div className="container">
            <div className="about-content ptb-100">
              <p className="color-secondary"><strong>Último proyecto</strong></p>
              <h2>FLEXES <span>by Forcadell</span></h2>
              <p className="text-justify">
                Junto al equipo de Forcadell hemos dado luz a <a href="https://www.myflexes.com/" target="_blank" rel="noopener noreferrer">FLEXES</a>, creando una plataforma web atractiva que acompaña a los clientes de Forcadell en el proceso de búsqueda de espacios Coworking en Barcelona.
              </p>
              <div className="pb-100"></div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Business;
