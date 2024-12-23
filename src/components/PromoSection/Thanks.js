import React from "react"

const PromoSectionThanks = ({ items = [] }) => {
  return (
    <section className="promo-section pb-100 mt--120">
      <div className="container">
        <div className="row equal">
          {items.map((item, index) => (
            <div className="col-md-4 col-lg-4" key={index}>
              <div className="single-promo single-promo-hover single-promo-1 rounded text-center white-bg p-5 h-100">
                <div className="circle-icon mb-5">
                  <span className={item.image}></span>
                </div>
                <h5>{item.title}</h5>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PromoSectionThanks
