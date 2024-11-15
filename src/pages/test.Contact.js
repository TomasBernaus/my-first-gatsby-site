// import React, { useState, useRef } from "react";
// import HeroSectionQuote from "../../components/HeroSection/heroSectionQuote";
// import emailjs from '@emailjs/browser';
// import { navigate } from 'gatsby';
// // import Layout from '../components/Layout/layout'
// import Header from '../components/Header/header'
// import Footer from '../components/Footer/footer'

// const Contact = () => {
//   const form = useRef();
  
//   const [formState, setFormState] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     company: "",
//     subject: "",
//     message: "",
//     isAgreed: false,
//     btnText: "CONTACTAR",
//     disableBtn: false,
//     loading: false
//   });

//   const handleFormValueChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormState({
//       ...formState,
//       [name]: type === "checkbox" ? checked : value,
//     });
//   };

//   const changeBtnText = (btnText) => {
//     setFormState({ ...formState, btnText });
//   };

//   const isFormValid = () => {
//     const { name, email, phone, isAgreed } = formState;
//     return name.trim() !== "" && email.trim() !== "" && phone.trim() !== "" && isAgreed;
//   };

//   const sendEmail = (e) => {
//     e.preventDefault();

//     if (!isFormValid()) {
//       alert("Por favor, completa todos los campos requeridos y acepta la política de privacidad.");
//       return;
//     }

//     setFormState({ ...formState, disableBtn: true, loading: true });
//     const templateId = "welcome_to_costumer_contact"; 

//     emailjs
//       .sendForm('default_service', templateId, form.current, 'user_8hi9sjBrVRZpUTE65DsVQ')
//       .then(
//         (result) => {
//           console.log("SUCCESS!", result);
//           navigate('/muchas-gracias', { state: { response: result } });
//         },
//         (error) => {
//           console.log("FAILED...", error.text);
//         }
//       )
//       .finally(() => {
//         setTimeout(() => {
//           setFormState({
//             name: "",
//             email: "",
//             phone: "",
//             company: "",
//             subject: "",
//             message: "",
//             isAgreed: false,
//             btnText: "CONTACTAR",
//             disableBtn: false,
//             loading: false
//           });
//         }, 3000);
//       });
//   };

//   return (
//     <div>
//     <Header />
//       <section>
//         <HeroSectionQuote
//       backgroundImage="https://ik.imagekit.io/itdo/ITDO-freelance6_xH56McWwC.jpg"
//       title="Bienvenido a ITDO"
//       description="Expertos en soluciones digitales"
//     />
//         <div className="container">
//           <div className="row align-items-center justify-content-between">
//             <div className="col-md-12 col-lg-12">
//               <div className="sign-up-form-wrap position-relative rounded p-5 gray-light-bg mt-50">
//                 <div className="sign-up-form-header text-center mb-4 hide">
//                   <h4 className="mb-0">Contacto</h4>
//                   <p>Rellena este formulario y tendrás tu presupuesto en menos de 24h</p>
//                 </div>
//                 <form ref={form} className="sign-up-form" onSubmit={sendEmail}>
//                   <div className="form-group input-group">
//                     <label htmlFor="name">Tu nombre o empresa*</label>
//                     <input
//                       value={formState.name}
//                       onChange={handleFormValueChange}
//                       type="text"
//                       name="name"
//                       id="name"
//                       className="form-control"
//                       required
//                     />
//                   </div>
//                   <div className="form-group input-group">
//                     <label htmlFor="email">Email de contacto</label>
//                     <input
//                       value={formState.email}
//                       onChange={handleFormValueChange}
//                       type="email"
//                       name="email"
//                       id="email"
//                       className="form-control"
//                     />
//                   </div>
//                   <div className="form-group input-group">
//                     <label htmlFor="phone">Teléfono de contacto</label>
//                     <input
//                       value={formState.phone}
//                       onChange={handleFormValueChange}
//                       type="text"
//                       name="phone"
//                       id="phone"
//                       className="form-control"
//                     />
//                   </div>
//                   <div className="form-check d-flex align-items-center text-center">
//                     <input
//                       checked={formState.isAgreed}
//                       onChange={handleFormValueChange}
//                       type="checkbox"
//                       name="isAgreed"
//                       className="form-check-input mt-0 mr-3"
//                       id="ckbAgree"
//                       required
//                     />
//                     <label
//                       className="form-check-label copyright-text"
//                       htmlFor="ckbAgree"
//                     >
//                       He leído y estoy de acuerdo con la{" "}
//                       <a
//                         href="https://www.itdo.com/blog/politica-de-privacidad/"
//                         rel="noopener noreferrer"
//                         target="_blank"
//                       >
//                         política de privacidad
//                       </a>
//                     </label>
//                   </div>
//                   <div className="form-group mt-10">
//                     <input
//                       disabled={formState.disableBtn}
//                       type="submit"
//                       name="submit"
//                       className="btn solid-btn btn-block request-quote"
//                       value={formState.btnText}
//                       onClick={() => {
//                         if (isFormValid()) {
//                           changeBtnText("Enviando...");
//                         }
//                       }}
//                     />
//                     {/* <a href="/muchas-gracias">simula</a> */}
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     <Footer />
//     </div>

//   );
// };

// export default Contact;