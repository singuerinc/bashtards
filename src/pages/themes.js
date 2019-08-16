import { graphql } from "gatsby";
import React from "react";
import PostList from "../components/PostList";
import Layout from "../components/layout";

export default ({ data }) => {
  return (
    <Layout>
      <PostList data={data} themeColor="green" />
    </Layout>
  );
};

export const query = graphql`
  query ThemesQuery {
    allMarkdownRemark(
      filter: { frontmatter: { categories: { eq: "theme" } } }
      sort: { order: DESC, fields: [fields___date] }
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
`;
