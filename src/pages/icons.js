import React from 'react'
import PostList from '../components/PostList';

export default ({ data }) => {
  return (<PostList data={data} themeColor="light-purple" />)
}

export const query = graphql`
  query IconsQuery {
    allMarkdownRemark(
      filter: { frontmatter: {categories: {eq: "icon" }}},
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
