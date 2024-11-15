import React from "react"
import Header from "../components/Header/header"
import HeroSectionThanks from "../components/HeroSection/heroSectionThanks"
import PromoSection from "../components/PromoSection/Thanks"
import Footer from "../components/Footer/footer"

const ThanksPage = ({ location }) => {
  const { state } = location

  return (
    <div>
      <Header />
      <HeroSectionThanks
        title={`¡Muchas gracias ${state?.variables?.name || "Cliente"}!`}
        description="En breve nos pondremos en contacto contigo."
        backgroundImage="/img/ITDO-freelance5.jpg"
      />
      <PromoSection
        items={[
          {
            title: "Nos pondremos en contacto",
            description:
              "En un máximo de 24h nos pondremos en contacto para atender tus necesidades lo más rápido posible.",
            image: "ti-alarm-clock text-white",
          },
          {
            title: "Analizaremos requisitos",
            description:
              "Realizaremos una revisión gratuita de las necesidades del proyecto, concretando contigo las ideas.",
            image: "ti-search text-white",
          },
          {
            title: "Prepararemos el proyecto",
            description:
              "Nuestro equipo aterrizará y concretará la planificación, diseño y desarrollo de tu nueva página web.",
            image: "ti-agenda text-white",
          },
        ]}
      />
      <Footer />
    </div>
  )
}

export default ThanksPage

export const Head = () => <title>¡Muchas gracias!</title>
