import React from 'react'

export default ({ data, pathContext }) => {
  console.log(pathContext)
  const post = data.markdownRemark
  const { date } = pathContext
  return (
    <article>
      <header className="mb5">
        <span className="fw3 gray f5">{date}</span>
        <span className="fw3 dark-gray f6"> by {post.frontmatter.author}</span>
        <h1 className="f1 fw3 mv1 db red">
          {post.frontmatter.title}{' '}
        </h1>
        <span className="f6 gray">
          {post.frontmatter.categories.join(', ')}
        </span>
      </header>
      <section>
        <div
          className="post__body light-silver"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </section>
    </article>
  )
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        author
        categories
      }
    }
  }
`
