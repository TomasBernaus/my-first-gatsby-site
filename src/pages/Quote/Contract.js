import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getQuote } from "../../actions/index";
import Notifications, { notify } from "react-notify-toast";
import emailjs from 'emailjs-com';
import { useHistory } from 'react-router-dom';

const ContractSection = ({ email_template, url_success_form, title = 'Píde un presupuesto', description = 'Rellena este formulario y tendrás tu presupuesto en menos de 24h' }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
        isAgreed: false,
        disableBtn: false,
        btnText: "CONTRATAR",
        loading: false
    });

    const dispatch = useDispatch();
    const history = useHistory();

    const changeBtnText = (btnText) => {
        setFormData(prevState => ({ ...prevState, btnText }));
    };

    const handleFormValueChange = (inputName, event) => {
        const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
        setFormData(prevState => ({ ...prevState, [inputName]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        setFormData(prevState => ({ ...prevState, disableBtn: true, loading: true }));

        const quoteAction = getQuote(formData);

        sendFeedback(email_template, {
            message_html: formData.message,
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            company: formData.company,
            phone: formData.phone
        });

        dispatch(quoteAction);

        setTimeout(() => {
            setFormData({
                name: "",
                email: "",
                phone: "",
                company: "",
                subject: "",
                message: "",
                isAgreed: false,
                disableBtn: false,
                btnText: "CONTRATAR",
                loading: false
            });
        }, 3000);
    };

    const sendFeedback = (templateId, variables) => {
        emailjs.send("default_service", templateId, variables)
            .then(res => {
                console.log("Tu pedido de presupuesto ha sido enviado. ¡Gracias!");
                history.push(url_success_form, { response: res, variables: variables });
            })
            .catch(err => notify.show(`Oh well, you failed. Here some thoughts on the error that occured: ${err}`, "error", 5000));
    };

    return (
        <React.Fragment>
            <section>
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-md-12 col-lg-12">
                            <Notifications options={{ zIndex: 200 }} />
                            <div className="sign-up-form-wrap position-relative rounded p-5 gray-light-bg mt-minus50">
                                <div className="sign-up-form-header text-center mb-4 hide">
                                    <h4 className="mb-0">{title}</h4>
                                    <p>{description}</p>
                                </div>
                                <form
                                    method="post"
                                    className="sign-up-form"
                                    onSubmit={handleSubmit}
                                    id="top-form"
                                >
                                    <div className="form-group input-group">
                                        <label htmlFor="name">Tu nombre o empresa*</label>
                                        <input
                                            value={formData.name}
                                            onChange={e => handleFormValueChange("name", e)}
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
                                            value={formData.email}
                                            onChange={e => handleFormValueChange("email", e)}
                                            type="email"
                                            name="email"
                                            id="email"
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="form-group input-group">
                                        <label htmlFor="phone">Teléfono de contacto</label>
                                        <input
                                            value={formData.phone}
                                            onChange={e => handleFormValueChange("phone", e)}
                                            type="text"
                                            name="phone"
                                            id="phone"
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="form-check d-flex align-items-center text-center">
                                        <input
                                            checked={formData.isAgreed}
                                            onChange={e => handleFormValueChange("isAgreed", e)}
                                            type="checkbox"
                                            name="isAgreed"
                                            className="form-check-input mt-0 mr-3"
                                            id="ckbAgree"
                                            required
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
                                                changeBtnText("Enviando...");
                                            }}
                                            disabled={formData.disableBtn}
                                            type="submit"
                                            name="submit"
                                            id="submit"
                                            className="btn solid-btn btn-block request-quote"
                                            value={formData.btnText}
                                        />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default ContractSection;
