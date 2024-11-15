import React from "react"

const HeroSectionThanks = ({ backgroundImage, title, description }) => {
  return (
    <section
      className="hero-section hero-thanks ptb-120 background-img"
      style={{
        background: `url(${backgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "center / cover",
      }}
    >
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-sm-9 col-md-10 col-lg-7">
            <div className="hero-content-left text-white text-center ptb-100">
              <h1>
                <span className="ti-check text-white border-round"></span>
              </h1>
              <h1 className="text-white">{title}</h1>
              <p className="lead">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSectionThanks
