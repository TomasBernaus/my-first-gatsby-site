import React, { useEffect, useState } from "react";
import _data from "../../data"; 

const HeroSectionQuote = ({ backgroundImage = 'https://ik.imagekit.io/itdo/ITDO-freelance6_xH56McWwC.jpg', description, title }) => {
  const [hero, setHero] = useState({});
  const [hero2, setHero2] = useState({});

  useEffect(() => {
    // Simula la llamada AJAX para obtener datos
    setHero(_data.heroAboutUs);
    setHero2(_data.hero2);
  }, []);

  return (
    <section
      className="hero-section hero-quote background-img pt-100"
      style={{
        background: `url(${backgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "0 -400px",
        backgroundSize: "center / cover",
        backgroundAttachment: ""
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-7">
            <div className="page-header-content text-white text-center pt-5">
              <h1 className="text-white mb-1">{title || hero.title}</h1>
              <p className="description lead">{description}</p>
            </div>
          </div>
          <ul className="list-inline counter-wrap items-contact ">
            <li className="list-inline-item">
              <div className="single-counter text-center">
                <span className="icon-span"><a href="tel:931004545"><i className="ti-mobile"></i></a></span>
                <h4><a href="tel:931004545">93 100 45 45</a></h4>
              </div>
            </li>
            <li className="list-inline-item">
              <div className="single-counter text-center">
                <a href="https://wa.me/34931004545" target="_blank" rel="noopener noreferrer"><img src="https://ik.imagekit.io/itdo/iconfinder_whatsapp_115679_BqfEbosDd.png" alt="WhatsAPP ITDO" title="WhatsAPP ITDO" height="50" className="mb--3" /></a>
                <h4><a href="https://wa.me/34931004545" target="_blank" rel="noopener noreferrer">WhatsApp</a></h4>
              </div>
            </li>
            <li className="list-inline-item">
              <div className="single-counter text-center">
                <span className="icon-span"><a href="mailto:aloha@itdo.com"><i className="ti-email"></i></a></span>
                <h4><a href="mailto:aloha@itdo.com">aloha@itdo.com</a></h4>
              </div>
            </li>
            <li className="list-inline-item">
              <div className="single-counter text-center">
                <span className="icon-span"><a href="#chat" className="drift-open-chat"><i className="ti-comments"></i></a></span>
                <h4><a href="#chat" className="drift-open-chat">Chat en línea</a></h4>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionQuote;
