import * as React from 'react'
import { Link, graphql } from 'gatsby'
// import Layout from '../../components/Layout/layout';
import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';
import Seo from '../../components/seo';
import HeroSection from '../../components/HeroSection/heroSectionITDO';

const IndexPage = ({ data }) => {
  return (
    <div 
    // pageTitle="Articles"
    >
      <Header />
      <HeroSection
						title="Agencia de desarrollo avanzado a medida de proyectos web"
						description="Somos una empresa de desarrollo de software, expertos en creación de páginas web y APPs con <strong>la tecnología más avanzada</strong> para ofrecer una <strong>experiencia digital atractiva para que tu negocio conecte con las personas</strong>.<br>
<strong><a href='/desarrollo-web'>Desarrollamos tu sitio web a tu medida.</a></strong>"
						img_background="url(https://ik.imagekit.io/itdo/flutter-app-desarrollo-itdo_9CmrKfjao.jpg)"
						trusted_title="Con la confianza de empresas como:"
						trusted_list="<li class='list-inline-item col-md-5 col-lg-3 mr-0'><img src='https://ik.imagekit.io/itdo/forcadell_AlmKOrxiC.png' width='140' alt='client' class='img-fluid mb-5px'></li><li class='list-inline-item col-md-5 col-lg-3 mr-0'><img src='https://ik.imagekit.io/itdo/uab_Kd1KofHgu.png' width='90' alt='client' class='img-fluid'></li><li class='list-inline-item col-md-5 col-lg-3 mr-0'><img src='https://ik.imagekit.io/itdo/apadrina_uiTsjFdxa.png' width='150' alt='client' class='img-fluid'></li><li class='list-inline-item col-md-5 col-lg-3 mr-0'><img src='https://ik.imagekit.io/itdo/cafesam-w_9VwrGGJaTl.png' width='120' alt='client' class='img-fluid'></li>"
						templateId_emailjs="welcome_to_costumer_web"
						form_redirect_page="/muchas-gracias-desarrollo-web"
					/>
      {
        data.allNodeArticle.nodes.map(node => (
          <article key={node.id}>
            <h2>
              <Link to={node.path.alias}>
                {node.title}
              </Link>
            </h2>
          </article>
        ))
      }
      <Footer />
    </div>
  )
}

export const query = graphql`
query MyQuery {
  allNodeArticle {
    nodes {
      id
      title
      body {
        processed
      }
      path {
        alias
      }
    }
    edges {
      node {
        relationships {
          field_image {
            url
          }
        }
      }
    }
  }
}
`

export const Head = () => <Seo title="Blog" />

export default IndexPage