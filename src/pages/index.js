import React from 'react'
import Link from 'gatsby-link'

const getClassNameByPostIndex = (index) => {
  const indexZeroClasses = "f1"
  const indexAnyClasses = "f2"

  return index === 0 ? indexZeroClasses  : indexAnyClasses
}

export default ({ data }) => {
  return (
    <div>
      {data.allMarkdownRemark.edges.map(({ node }, index) => (
        <article key={node.id} className="mb4">
          <header>
            <span className="fw3 gray f5">{node.fields.date}</span>
          </header>
          <section>
            <Link
              to={node.fields.slug}
              className={"red link fw3 fw2-m fw2-l mv1 db dim " + getClassNameByPostIndex(index)}
            >
              {node.frontmatter.title}{' '}
            </Link>
          </section>
          <footer>
            <span className="f6 white-10">
              {node.frontmatter.categories.join(', ')}
            </span>
          </footer>
        </article>
      ))}
    </div>
  )
}

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [fields___date] }) {
      edges {
        node {
          id
          frontmatter {
            title
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
