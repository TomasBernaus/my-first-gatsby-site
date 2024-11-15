import React from "react";
// import { connect } from "react-redux";
import { getQuote } from "../../actions/index";
import Notifications, { notify } from "react-notify-toast";

class HeroSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      subject: "",
      company: "",
      message: "",
      isAgreed: false,
      disableBtn: false,
      btnText: "PEDIR PRESUPUESTO",
      loading: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  changeBtnText = btnText => {
    this.setState({ btnText });
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

    console.log(this.state);

    // disable the button
    this.setState({ disableBtn: true, loading: true });

    // get action
    const quoteAction = getQuote(this.state);

    // Dispatch the contact form data
    this.props.dispatch(quoteAction);
    // Pass it to .env
    const templateId = this.props.templateId_emailjs;
    // Send email using EmailJS
    this.sendFeedback(templateId, {
      message_html: this.state.message,
      name: this.state.name,
      phone: this.state.phone,
      email: this.state.email,
      form_subject: this.state.subject,
      company: this.state.company
    });

    // added delay to change button text to previous
    setTimeout(
      function () {
        // enable the button
        this.setState({ disableBtn: false, loading: false });

        // change to button name
        this.changeBtnText("PEDIR PRESUPUESTO");

        // get action again to update state
        const quoteAction = getQuote(this.state);

        // Dispatch the contact form data
        this.props.dispatch(quoteAction);

        // clear form data
        this.setState({
          name: "",
          email: "",
          phone: "",
          subject: "",
          company: "",
          message: "",
          isAgreed: false
        });
      }.bind(this),
      3000
    );
  }

  sendFeedback(templateId, variables) {
    console.log(templateId);
    window.emailjs
      .send("default_service", templateId, variables)
      .then(res => {
        console.log("Tu pedido de presupuesto ha sido enviado. ¡Gracias!");
        this.props.navigate(this.props.form_redirect_page, {
          state: { response: res, variables: variables }
        });
      })
      // Handle errors here however you like, or use a React error boundary
      .catch(err =>
        notify.show(
          `Oh well, you failed. Here are some thoughts on the error that occurred: ${err}`,
          "error",
          5000
        )
      );
  }

  render() {
    return (
      <React.Fragment>
        <section
          className="hero-section hero-itdo ptb-100 background-img"
          style={{
            background: this.props.img_background,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover"
          }}
        >
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-md-6 col-lg-6">
                <div className="hero-content-left text-white mt-lg-0 mt-md-0 mt-5">
                  <h1 className="text-white mb-50">{this.props.title}</h1>
                  <p
                    className="lead"
                    dangerouslySetInnerHTML={{ __html: this.props.description }}
                  ></p>
                  <Notifications options={{ zIndex: 200 }} />

                  <div className="client-section-wrap mt-5 d-none d-sm-block">
                    <p dangerouslySetInnerHTML={{ __html: this.props.trusted_title }}></p>
                    <ul
                      className="list-inline row"
                      dangerouslySetInnerHTML={{ __html: this.props.trusted_list }}
                    ></ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-5">
                <div className="sign-up-form-wrap position-relative rounded p-5 gray-light-bg mt-5">
                  <div className="sign-up-form-header text-center mb-4">
                    <h4 className="mb-0">Presupuesto personalizado</h4>
                    <p>Te lo enviamos en un máximo de 24h</p>
                  </div>
                  <form
                    method="post"
                    className="sign-up-form"
                    onSubmit={this.handleSubmit}
                    id="top-form"
                  >
                    <div className="form-group input-group">
                      <label htmlFor="name">Tu nombre o empresa*</label>
                      <input
                        value={this.state.name}
                        onChange={e => this.handleFormValueChange("name", e)}
                        type="text"
                        name="name"
                        id="name"
                        className="form-control"
                        required
                      />
                    </div>
                    <div className="form-group input-group">
                      <label htmlFor="email">Email de contacto</label>
                      <input
                        value={this.state.email}
                        onChange={e => this.handleFormValueChange("email", e)}
                        type="email"
                        name="email"
                        id="email"
                        className="form-control"
                      />
                    </div>
                    <div className="form-group input-group">
                      <label htmlFor="email">Teléfono de contacto</label>
                      <input
                        value={this.state.phone}
                        onChange={e => this.handleFormValueChange("phone", e)}
                        type="text"
                        name="phone"
                        id="phone"
                        className="form-control"
                      />
                    </div>
                    <div className="form-check d-flex align-items-center text-center">
                      <input
                        checked={this.state.isAgreed}
                        onChange={e => this.handleFormValueChange("isAgreed", e)}
                        type="checkbox"
                        name="isAgreed"
                        className="form-check-input mt-0 mr-3"
                        id="ckbAgree"
                      />
                      <label
                        className="form-check-label copyright-text"
                        htmlFor="ckbAgree"
                      >
                        He leído y estoy de acuerdo con la{" "}
                        <a
                          href="https://www.itdo.com/blog/politica-de-privacidad/"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          política de privacidad
                        </a>
                      </label>
                    </div>
                    <div className="form-group mt-10">
                      <input
                        onClick={() => {
                          this.changeBtnText("Enviando...");
                        }}
                        disabled={this.state.disableBtn}
                        type="submit"
                        name="submit"
                        id="submit"
                        className="btn solid-btn btn-block"
                        value={this.state.btnText}
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <a className="icon-scroll page-scroll" href={"#desarrollo"}>Ver más</a>
        </section>
      </React.Fragment>
    );
  }
}

// export default connect(state => ({
//   state
// }))(HeroSection);

export default HeroSection;