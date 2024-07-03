import * as React from 'react';
import { graphql } from 'gatsby';
import Seo from '../components/seo';
import Layout from '../components/Layout/layout';

const PlantillaArticle = ({ data }) => {
  const post = data.nodeArticle;

  return (
    <Layout>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.body.processed }} />
      {post.relationships && post.relationships.field_image && (
        <img
          src={post.relationships.field_image.url}
          alt={post.relationships.field_image.alt || 'Article Image'}
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      )}
    </Layout>
  );
};

export const query = graphql`
query($ArticleId: String!) {
  nodeArticle(id: {eq: $ArticleId}) {
    id
    title
    body {
      processed
    }
    relationships {
      field_image {
        url
      }
    }
  }
}
`;

export const Head = ({ pageContext }) => <Seo title={pageContext.title} />;
export default PlantillaArticle;
