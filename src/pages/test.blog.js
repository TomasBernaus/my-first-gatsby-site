// import * as React from 'react'
// import { Link, graphql } from 'gatsby'
// // import Seo from '../components/seo'
// import Header from '../components/Header/header'
// import Footer from '../components/Footer/footer'

// const IndexPage = ({ data }) => {
//   return (
//     <div>
//       <Header />

//       {
//         data.allNodeArticle.nodes.map(node => (
//           <article key={node.id}>
//             <h2>
//               <Link to={node.path.alias}>
//                 {node.title}
//               </Link>
//             </h2>
//           </article>
//         ))
//       }
//       <Footer />
//     </div>
//   )
// }

// export const query = graphql`
// query MyQuery {
//   allNodeArticle {
//     nodes {
//       id
//       title
//       body {
//         processed
//       }
//       path {
//         alias
//       }
//     }
//     edges {
//       node {
//         relationships {
//           field_image {
//             url
//           }
//         }
//       }
//     }
//   }
// }
// `

// export const Head = () => <Seo title="Blog" />

// export default IndexPage