import React, { Component } from "react";
// import { connect } from "react-redux";
import { submitContact } from "../../actions";
import { toast } from 'react-toastify'; 
import emailjs from 'emailjs-com';

class ContactUsPageSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
      disableContactBtn: false,
      contactBtnText: "Send Message",
      loading: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  changeBtnText = contactBtnText => {
    this.setState({ contactBtnText });
  };

  handleFormValueChange(inputName, event) {
    let stateValue = {};
    stateValue[inputName] =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    this.setState(stateValue);
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({ disableContactBtn: true, loading: true });

    const contactAction = submitContact(this.state);

    const templateId = "contacto";

    this.sendFeedback(templateId, {
      message_html: this.state.message,
      from_name: this.state.name,
      reply_to: this.state.email,
      from_company: this.state.company,
      from_phone: this.state.phone
    });

    this.props.dispatch(contactAction);

    setTimeout(() => {
      this.setState({ disableContactBtn: false, loading: false });
      this.changeBtnText("Send Message");
      const contactAction = submitContact(this.state);
      this.props.dispatch(contactAction);
      this.setState({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: ""
      });
    }, 3000);
  }

  // sendFeedback(templateId, variables) {
  //   emailjs.send("gmail", templateId, variables)
  //     .then(res => {
  //       console.log("Message successfully sent!");
  //       window.location.replace("/muchas-gracias-desarrollo-web");
  //       notify.show("Message successfully sent!", "success", 5000);
  //     })
  //     .catch(err =>
  //       notify.show(
  //         `Oh well, you failed. Here some thoughts on the error that occured: ${err}`,
  //         "error",
  //         5000
  //       )
  //     );
  // }
  sendFeedback(templateId, variables) {
    emailjs.send("gmail", templateId, variables)
      .then(res => {
        console.log("Message successfully sent!");
        window.location.replace("/muchas-gracias-desarrollo-web");
        toast.success("Mensaje enviado con éxito!", {
          position: "top-right", 
          autoClose: 5000,     
          hideProgressBar: false, 
          closeOnClick: true,  
          pauseOnHover: true,   
          draggable: true,       
        });
      })
      .catch(err => {
        toast.error(`Hubo un error: ${err.message}`, {  
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      });
  }
  

  render() {
    return (
      <React.Fragment>
        <section className="contact-us-section ptb-100">
          <div className="container">
            <div className="row">
              <div className="col-md-9 col-lg-9">
                <div className="section-heading mb-4">
                  <h2>Reach us quickly</h2>
                  <p className="lead">
                    We provide professional services for grow your business and
                    increases sell digital product. Increase sales by showing
                    true dynamics of your website.
                  </p>
                </div>
              </div>
            </div>
            <div className="row justify-content-between align-items-center">
              <div className="col-md-6">
                <form
                  method="POST"
                  id="contactForm1"
                  className="contact-us-form"
                  noValidate="novalidate"
                  onSubmit={this.handleSubmit}
                >
                  <div className="row">
                    <div className="col-sm-6 col-12">
                      <div className="form-group">
                        <input
                          value={this.state.name}
                          onChange={e => this.handleFormValueChange("name", e)}
                          type="text"
                          className="form-control"
                          name="name"
                          placeholder="Enter name"
                          required="required"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6 col-12">
                      <div className="form-group">
                        <input
                          value={this.state.company}
                          onChange={e => this.handleFormValueChange("company", e)}
                          type="text"
                          name="company"
                          size="40"
                          className="form-control"
                          id="company"
                          placeholder="Your Company"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6 col-12">
                      <div className="form-group">
                        <input
                          value={this.state.email}
                          onChange={e => this.handleFormValueChange("email", e)}
                          type="email"
                          className="form-control"
                          name="email"
                          placeholder="Enter email"
                          required="required"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6 col-12">
                      <div className="form-group">
                        <input
                          value={this.state.phone}
                          onChange={e => this.handleFormValueChange("phone", e)}
                          type="text"
                          name="phone"
                          className="form-control"
                          id="phone"
                          placeholder="Your Phone"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="form-group">
                        <textarea
                          onChange={e => this.handleFormValueChange("message", e)}
                          value={this.state.message}
                          name="message"
                          id="message"
                          className="form-control"
                          rows="7"
                          cols="25"
                          placeholder="Message"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12 mt-3">
                      <button
                        type="submit"
                        className="btn primary-solid-btn"
                        id="btnContactUs"
                        disabled={this.state.disableContactBtn}
                        onClick={() => {
                          this.changeBtnText("Sending...");
                        }}
                      >
                        {this.state.contactBtnText}
                      </button>
                    </div>
                  </div>
                </form>
                <p className="form-message" />
              </div>
              <div className="col-md-5">
                <div className="contact-info-wrap">
                  <ul className="list-creative">
                    <li>
                      <dl className="list-terms-medium address">
                        <dt>Address</dt>
                        <dd>
                          <p>
                            212 Prospect Ave, Brooklyn, New York <br /> United
                            States{" "}
                          </p>
                        </dd>
                      </dl>
                    </li>
                    <li>
                      <dl className="list-terms-medium phone">
                        <dt>Phones</dt>
                        <dd>
                          <ul className="list-comma">
                            <li>
                              Support:{" "}
                              <a href="tel:+1-800-700-6200">+1-800-700-6200 </a>
                            </li>
                            <li>
                              Sales:{" "}
                              <a href="tel:+1-800-955-4567">+1-800-955-4567</a>
                            </li>
                          </ul>
                        </dd>
                      </dl>
                    </li>
                    <li>
                      <dl className="list-terms-medium email">
                        <dt>E-mails</dt>
                        <dd>
                          <ul className="list-comma">
                            <li>
                              Support:{" "}
                              <a href="mailto:support@yourdomain.com">
                                support@yourdomain.com
                              </a>
                            </li>
                            <li>
                              Query:{" "}
                              <a href="mailto:query@yourdomain.com">
                                query@yourdomain.com
                              </a>
                            </li>
                          </ul>
                        </dd>
                      </dl>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

// export default connect(state => ({
//   state
// }))(ContactUsPageSection);

export default ContactUsPageSection;