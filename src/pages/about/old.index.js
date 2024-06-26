import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

const IndexPage = ({ data }) => {
  const quiSomPage = data.allNodePage.edges.find(edge => edge.node.title === "Qui som");

  if (!quiSomPage) {
    return (
      <Layout pageTitle="About us">
        <p>No s'ha trobat la página "Qui som".</p>
      </Layout>
    );
  }

  const { id, title, body } = quiSomPage.node;

  return (
    <Layout pageTitle={title}>
      <article key={id}>
        <h2>
          {title}
        </h2>
        <div dangerouslySetInnerHTML={{ __html:body.processed}}/>
      </article>
    </Layout>
  );
}

export const query = graphql`
  query MyQuery {
    allNodePage {
      edges {
        node {
          id
          title
          body {
            processed
          }
        }
      }
    }
  }
`

export const Head = () => <Seo title="Qui som" />

export default IndexPage
