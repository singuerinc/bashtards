import React from 'react'
import PostList from '../components/PostList';

export default ({ data }) => {
  return (<PostList data={data} themeColor="orange" />)
}

export const query = graphql`
  query FontsQuery {
    allMarkdownRemark(
      filter: { frontmatter: {categories: {eq: "font" }}},
      sort:{ order: DESC, fields: [fields___date] }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            author
            categories
          }
          fields {
            slug
            date
          }
        }
      }
    }
  }
`
