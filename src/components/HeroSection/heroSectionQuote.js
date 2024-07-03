import React, { useState, useEffect } from "react";
import _data from "../../data";

const HeroSectionQuote = ({ backgroundImage = 'https://ik.imagekit.io/itdo/ITDO-freelance6_xH56McWwC.jpg', description, title }) => {
  const [hero, setHero] = useState({});

  useEffect(() => {
    setHero(_data.heroAboutUs);
  }, []);

  return (
    <React.Fragment>
      <section
        className="hero-section hero-quote background-img ptb-100"
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
                <h1 className="text-white mb-1">{title ? title : hero.title}</h1>
                <p className="description lead"> {description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default HeroSectionQuote;
