import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

const IndexPage = ({ data }) => {
  return (
    <Layout pageTitle="Articles">
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
    </Layout>
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
  }
}
`

export const Head = () => <Seo title="Blog" />

export default IndexPage