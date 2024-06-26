import * as React from 'react';
import { propTypes } from 'prop-types';
import { graphql } from 'gatsby';
import Seo from '../components/seo'

import Layout from '../components/layout';

const PlantillaProjecte = ({data}) => {
  
  const post = data.nodeProjecte;
  return (
    <Layout>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html:post.body.processed}}/>
      {post.relationships && post.relationships.field_imatge
      //  && (
      //   <img
      //     src={post.relationships.field_imatge.publicUrl}
      //     alt={post.field_imatge.alt} 
      //     style={{ maxWidth: '100%', height: 'auto' }}
      //   />
      // )
      }
    </Layout>
  )
};

export const query = graphql`
query($ProjecteId: String!) {
  nodeProjecte(id: {eq: $ProjecteId}) {
    id
    title
    body {
      processed
    }
  }
}
`;

export const Head = ({ pageContext }) => <Seo title={pageContext.title} />;
export default PlantillaProjecte;