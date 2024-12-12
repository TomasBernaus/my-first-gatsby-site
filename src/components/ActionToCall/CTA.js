import React from 'react';
import { Link } from 'gatsby';

class CTA extends React.Component {
  render() {
    const { id, title, description, cta_url, cta_text } = this.props;
    return (
      <div className="call-action-1">
        <section className="call-to-action ptb-100 background-img lazy" id={id}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-11 mb-3">
                <div className="call-to-action-content text-center text-white">
                  <h2 className="text-white">{title}</h2>
                  <p dangerouslySetInnerHTML={{ __html: description }}></p>
                </div>
              </div>
              <div className="col-11">
                <div className="call-to-action-btn text-center">
                  <Link to={cta_url} className="btn solid-btn">{cta_text}</Link>
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