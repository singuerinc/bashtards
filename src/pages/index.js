import React from 'react'
import PostList from '../components/PostList';

export default ({ data }) => {
  return (<PostList data={data} themeColor="red" />)
}

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [fields___date] }) {
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
