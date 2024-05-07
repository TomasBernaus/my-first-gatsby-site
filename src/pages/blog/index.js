import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

const IndexPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <h1>Projectes</h1>
      {
        data.allNodeProjecte.nodes.map(node => (
          <article key={node.id}>
            <h2>
              <Link to={`/blog${node.path.alias}`}>
                {node.title}
              </Link>
            </h2>
          </article>
        ))
      }
      <h1>Articles</h1>
      {
        data.allNodeArticle.nodes.map(node => (
          <article key={node.id}>
            <h2>
              <Link to={`/blog${node.path.alias}`}>
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
      field_image {
        alt
        title
        drupal_internal__target_id
      }
    }
  }
}
`

export const Head = () => <Seo title="My Blog Posts" />

export default IndexPage