import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      {
        data.allNodeProjecte.edges.map(({ node }) => (
          <article key={node.id}>
            <h2>
              <Link to={`${node.path.alias}`}>
                {node.title}
              </Link>
            </h2>
            <p>{node.body.summary}</p>
          </article>
        ))
      }
    </Layout>
  )
}

export const query = graphql`
  query {
    allNodeProjecte {
      edges {
        node {
          body {
            summary
          }
          path {
            alias
          }
          title
          id
        }
      }
    }
  }
`

export const Head = () => <Seo title="My Blog Posts" />

export default BlogPage
