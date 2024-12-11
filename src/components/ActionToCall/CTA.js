import React from 'react';
import { Link } from 'gatsby';
import { graphql, useStaticQuery } from 'gatsby';
const CTA = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allNodeServices {
        edges {
          node {
            id
            title
            field_url
            field_bgimg
            field_description
          }
        }
      }
    }
  `);
  
  if (!data || !data.allNodeServices || !data.allNodeServices.edges.length) {
    return <div>Cargando...</div>; 
  }

  const services = data.allNodeServices.edges.map(edge => edge.node);
  const service = services[0]; 

  return (
    <div className="call-action-1">
      <section
        className="call-to-action ptb-100 background-img lazy"
        style={{
          backgroundImage: `url(${service.field_bgimg?.localFile?.childImageSharp?.gatsbyImageData?.images?.fallback?.src})`,
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-11 mb-3">
              <div className="call-to-action-content text-center text-white">
                <h2 className="text-white">{service.title}</h2>
                <div dangerouslySetInnerHTML={{ __html: service.field_description?.processed }} />
              </div>
            </div>
            <div className="col-11">
              <div className="call-to-action-btn text-center">
                <Link to={service.field_url} className="btn solid-btn">
                  Más información
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CTA;