import React, { useState } from "react";
// import { connect } from "react-redux";
// import { submitContact } from "../../actions/index";
// import Notifications, { notify } from "react-notify-toast";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Contract from '../Quote/Contract';

const RequestContract = ({ dispatch, url_success_form, email_template }) => {
  const [state, setState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    disableContactBtn: false,
    contactBtnText: "Send Message",
    loading: false
  });

  const handleFormValueChange = (inputName, event) => {
    setState({
      ...state,
      [inputName]: event.target.type === "checkbox" ? event.target.checked : event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setState({ ...state, disableContactBtn: true, loading: true });

    const contactAction = submitContact(state);
    const templateId = email_template;

    sendFeedback(templateId, {
      message_html: state.message,
      from_name: state.name,
      reply_to: state.email,
      from_company: state.company,
      from_phone: state.phone
    });

    dispatch(contactAction);

    setTimeout(() => {
      setState({ ...state, disableContactBtn: false, loading: false });
      const contactAction = submitContact(state);
      dispatch(contactAction);

      setState({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: ""
      });
    }, 3000);
  };

  // const sendFeedback = (templateId, variables) => {
  //   window.emailjs
  //     .send("gmail", templateId, variables)
  //     .then(res => {
  //       console.log("Message successfully sent!");
  //       window.location.replace(url_success_form);
  //       notify.show("Message successfully sent!", "success", 5000);
  //     })
  //     .catch(err =>
  //       notify.show(
  //         `Oh well, you failed. Here some thoughts on the error that occurred: ${err}`,
  //         "error",
  //         5000
  //       )
  //     );
  // };
  const sendFeedback = (templateId, variables) => {
    const history = useHistory();
  
    emailjs
      .send("gmail", templateId, variables)
      .then((res) => {
        console.log("Message successfully sent!");
        history.push('/muchas-gracias-desarrollo-web', { response: res, variables: variables });
        toast.success("¡Mensaje enviado con éxito!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      })
      .catch((err) => {
        toast.error(`Hubo un error al enviar el mensaje: ${err.message}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      });
  };
  
  return (
    <React.Fragment>
      <section className="contact-us-section ptb-100-none gray-light-bg">
        <Notifications options={{ zIndex: 200 }} />
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-md-2"></div>
            <div className="col-md-8">
              <Contract
                title='Pide un presupuesto'
                description='Rellena este formulario y tendrás tu presupuesto en menos de 24h'
                url_success_form={url_success_form}
                email_template={email_template}
              />
              <p className="form-message" />
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

// export default connect(state => ({
//   state
// }))(RequestContract);
export default RequestContract;