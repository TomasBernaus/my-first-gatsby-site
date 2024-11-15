import React, { useState } from "react";
// import { useDispatch } from "react-redux";
import { submitContact } from "../../actions/index";
import Notifications, { notify } from "react-notify-toast";
import Quote from '../Quote';
import { useHistory } from 'react-router-dom';
import emailjs from 'emailjs-com';

const RequestQuotePageSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    disableContactBtn: false,
    contactBtnText: "Send Message",
    loading: false,
  });

  // const dispatch = useDispatch();
  const history = useHistory();

  const changeBtnText = (contactBtnText) => {
    setFormData((prevState) => ({ ...prevState, contactBtnText }));
  };

  // const handleFormValueChange = (inputName, event) => {
  //   const value =
  //     event.target.type === "checkbox"
  //       ? event.target.checked
  //       : event.target.value;
  //   setFormData((prevState) => ({ ...prevState, [inputName]: value }));
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   setFormData((prevState) => ({ ...prevState, disableContactBtn: true, loading: true }));

  //   const contactAction = submitContact(formData);
  //   const templateId = "welcome_to_costumer_web";

  //   sendFeedback(templateId, {
  //     message_html: formData.message,
  //     from_name: formData.name,
  //     email: formData.email,
  //     from_company: formData.company,
  //     from_phone: formData.phone,
  //   });

  //   // dispatch(contactAction);

  //   setTimeout(() => {
  //     setFormData({
  //       name: "",
  //       email: "",
  //       phone: "",
  //       company: "",
  //       message: "",
  //       disableContactBtn: false,
  //       contactBtnText: "Send Message",
  //       loading: false,
  //     });
  //   }, 3000);
  // };

  const sendFeedback = (templateId, variables) => {
    emailjs
      .send("gmail", templateId, variables)
      .then((res) => {
        console.log("Message successfully sent!");
        history.push('/muchas-gracias-desarrollo-web', { response: res, variables: variables });
      })
      .catch((err) =>
        notify.show(
          `Oh well, you failed. Here some thoughts on the error that occured: ${err}`,
          "error",
          5000
        )
      );
  };

  return (
    <React.Fragment>
      <section className="contact-us-section ptb-100-none gray-light-bg">
        <Notifications options={{ zIndex: 200 }} />
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-md-2"></div>
            <div className="col-md-8">
              <Quote title='Pide un presupuesto' description='Rellena este formulario y tendrás tu presupuesto en menos de 24h' />
              <p className="form-message" />
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default RequestQuotePageSection;
