import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout/layout'
import Seo from '../../components/seo'

const IndexPage = ({ data }) => {
  return (
    <Layout pageTitle="Projectes">
      {
        data.allNodeProjecte.nodes.map(node => (
          <article key={node.id}>
            <h2>
              <Link to={node.path.alias}>
                {node.title}
              </Link>
            </h2>
          </article>
        ))
      }
    </Layout>
  )
}

export const query = graphql`
query MyQuery {
  allNodeProjecte {
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
  }
}
`

export const Head = () => <Seo title="Projectes" />

export default IndexPage