import React from 'react';

class CTA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      CTA: {}
    };
  }

  render() {
    return (
      <div className="call-action-1">
        <section className="call-to-action ptb-100 background-img lazy" id={this.props.id}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-11 mb-3">
                <div className="call-to-action-content text-center text-white">
                  <h2 className="text-white">{this.props.title}</h2>
                  <p dangerouslySetInnerHTML={{ __html: this.props.description }}></p>
                </div>
              </div>
              <div className="col-11">
                <div className="call-to-action-btn text-center">
                  <a href={this.props.cta_url} className="btn solid-btn">{this.props.cta_text}</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default CTA;
