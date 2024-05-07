import * as React from 'react';
import { propTypes } from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/layout';

const PlantillaProjecte = ({data}) => {
  const post = data.nodeProjecte;

  return (
    <Layout>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html:post.body.processed}}/>
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
    field_imatge {
      alt
    }
    relationships {
      field_imatge {
        publicUrl
      }
    }
  }
}
`;

export default PlantillaProjecte;