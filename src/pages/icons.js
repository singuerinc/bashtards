import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/layout";
import PostList from "../components/PostList";

export default ({ data }) => {
  return (
    <Layout>
      <PostList data={data} themeColor="light-purple" />
    </Layout>
  );
};

export const query = graphql`
  query IconsQuery {
    allMarkdownRemark(
      filter: { frontmatter: { categories: { eq: "icon" } } }
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
