import React from 'react'
import PostList from '../components/PostList';

export default ({ data }) => {
  return (<PostList data={data} themeColor="blue" />)
}

export const query = graphql`
  query WallpapersQuery {
    allMarkdownRemark(
      filter: { frontmatter: {categories: {eq: "wallpaper" }}},
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
