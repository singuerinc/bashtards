import React from 'react'
import PostList from '../components/PostList';

export default ({ data }) => {
  return (<PostList data={data} themeColor="green" />)
}

export const query = graphql`
  query ThemesQuery {
    allMarkdownRemark(
      filter: { frontmatter: {categories: {eq: "theme" }}},
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
