import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { submitContact } from "../../actions/index";
import _data from "../../data";

const Contact = ({ bgColor }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    disableContactBtn: false,
    contactBtnText: "Send Message"
  });
  const [contact, setContact] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    setContact(_data.contact);
  }, []);

  const changeBtnText = (contactBtnText) => {
    setFormData(prevState => ({ ...prevState, contactBtnText }));
  };

  const handleFormValueChange = (inputName, event) => {
    const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
    setFormData(prevState => ({ ...prevState, [inputName]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setFormData(prevState => ({ ...prevState, disableContactBtn: true }));

    const contactAction = submitContact(formData);

    dispatch(contactAction);

    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
        disableContactBtn: false,
        contactBtnText: "Send Message"
      });
    }, 3000);
  };

  return (
    <React.Fragment>
      <section id="contact" className={`contact-us ptb-100 ${bgColor && bgColor === 'white' ? '' : 'gray-light-bg'}`}>
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="section-heading">
                <h3>{contact.title}</h3>
                <p>{contact.description}</p>
              </div>
              <div className="footer-address">
                <h6>
                  <strong>{contact.office}</strong>
                </h6>
                <p>{contact.address}</p>
                <ul>
                  <li>
                    <span>Phone: {contact.phone}</span>
                  </li>
                  <li>
                    <span>
                      Email :{" "}
                      <a href="mailto:hello@yourdomain.com">
                        {contact.email}
                      </a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-7">
              <form
                method="POST"
                id="contactForm1"
                className="contact-us-form"
                noValidate="novalidate"
                onSubmit={handleSubmit}
              >
                <h5>Reach us quickly</h5>
                <div className="row">
                  <div className="col-sm-6 col-12">
                    <div className="form-group">
                      <input
                        value={formData.name}
                        onChange={e => handleFormValueChange("name", e)}
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
                        value={formData.email}
                        onChange={e => handleFormValueChange("email", e)}
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Enter email"
                        required="required"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6 col-12">
                    <div className="form-group">
                      <input
                        value={formData.phone}
                        onChange={e => handleFormValueChange("phone", e)}
                        type="text"
                        name="phone"
                        className="form-control"
                        id="phone"
                        placeholder="Your Phone"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6 col-12">
                    <div className="form-group">
                      <input
                        value={formData.company}
                        onChange={e => handleFormValueChange("company", e)}
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
                  <div className="col-12">
                    <div className="form-group">
                      <textarea
                        onChange={e => handleFormValueChange("message", e)}
                        value={formData.message}
                        name="message"
                        id="message"
                        className="form-control"
                        rows="7"
                        cols="25"
                        placeholder="Message"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 mt-3">
                    <button
                      type="submit"
                      className="btn primary-solid-btn"
                      id="btnContactUs"
                      disabled={formData.disableContactBtn}
                      onClick={() => {
                        changeBtnText("Sending...");
                      }}
                    >
                      {formData.contactBtnText}
                    </button>
                  </div>
                </div>
              </form>
              <p className="form-message"></p>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Contact;
