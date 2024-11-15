import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Header from '../components/Header/header'
import Footer from '../components/Footer/footer'

const IndexPage = ({ data }) => {
  return (
    <div>
      <br/><br/>

      <Header />
      {
        data.allNodeServices.edges.map(({ node }) => (
          <div key={node.id}>
            <h2>
              <Link to={`/pedir-presupuesto/${node.field_url}`}> 
                {node.title}
              </Link>
            </h2>
          </div>
        ))
      }
      <Footer />
    </div>
  )
}

export const query = graphql`
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
`

export default IndexPage
