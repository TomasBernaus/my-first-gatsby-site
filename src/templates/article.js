import * as React from 'react';
import { propTypes } from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/layout';

const PlantillaArticle = ({data}) => {
  const post = data.nodeArticle;

  return (
    <Layout>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html:post.body.processed}}/>
      {post.relationships && post.relationships.field_image 
      // && (
        // <img
        //   src={post.relationships.field_image.publicUrl}
        //   alt={post.field_image.alt} 
        //   style={{ maxWidth: '100%', height: 'auto' }}
        // />
      // )
      }
    </Layout>
  )
};

export const query = graphql`
query($ArticleId: String!) {
  nodeArticle(id: {eq: $ArticleId}) {
    id
    title
    body {
      processed
    }
  }
}
`;

export default PlantillaArticle;