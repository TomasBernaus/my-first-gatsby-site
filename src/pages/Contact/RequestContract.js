import React, { Component } from "react";
// import { connect } from "react-redux";
import { submitContact } from "../../actions";
// import Notifications, { notify } from "react-notify-toast";
import { toast } from 'react-toastify'; 
import emailjs from 'emailjs-com';
import Contract from '../Quote/Contact';

class RequestContract extends Component {
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

    const templateId = this.props.email_template;

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
  //       window.location.replace(this.props.url_success_form);
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
        <section className="contact-us-section ptb-100-none gray-light-bg">
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-md-2"></div>
              <div className="col-md-8">
                <Contract 
                  title='Pide un presupuesto' 
                  description='Rellena este formulario y tendrás tu presupuesto en menos de 24h' 
                  url_success_form={this.props.url_success_form}
                  email_template={this.props.email_template} 
                />
                <p className="form-message" />
              </div>
              <div className="col-md-2"></div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

// export default connect(state => ({
//   state
// }))(RequestContract);

export default RequestContract;