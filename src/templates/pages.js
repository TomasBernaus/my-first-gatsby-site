import * as React from 'react';
import { propTypes } from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/layout';

const Article = ({data}) => {
  const post = data.nodeProjecte;

  return (
    <Layout>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html:post.body.processed}}/>
    </Layout>
  )
};

export const query = graphql`
query($ArticleId: String!) {
  nodeProjecte(id: {eq: $ArticleId}) {
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

export default Article;