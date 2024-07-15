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
      aboutUs: _data.ITDOaboutUs2
    });
  }

  render() {
    return (
      <section id="por-que-itdo-en-el-desarrollo" className="about-us ptb-100 white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="about-content-left">
                <h2>¿Por qué ITDO?</h2>
                <p className="lead">{this.state.aboutUs.description1}</p>
                <p className="lead">{this.state.aboutUs.description2}</p>
                <p className="lead">{this.state.aboutUs.description3}</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="about-content-right">
                <img
                  src={this.state.aboutUs.image}
                  className="img-fluid rounded"
                  alt="about us"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
