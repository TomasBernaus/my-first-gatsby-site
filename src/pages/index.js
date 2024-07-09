// home page

import * as React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/Layout/layout'
import Seo from '../components/seo'

const IndexPage = ({ data }) => {
  const homePage = data.allNodePage.edges.find(edge => edge.node.title === "Home");

  if (!homePage) {
    return (
      <Layout pageTitle="Home">
        <p>No s'ha trobat la página "Home".</p>
      </Layout>
    );
  }

  const { id, title, body } = homePage.node;

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

export const Head = () => <Seo title="Home" />

export default IndexPage
