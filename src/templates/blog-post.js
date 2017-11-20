import React from 'react'

export default ({ data, pathContext }) => {
  console.log(pathContext)
  const post = data.markdownRemark
  const { date } = pathContext
  return (
    <article>
      <header>
        <span className="fw3 gray f5">{date}</span>
        <h1 className="f3 fw3 f2-m fw2-m f2-l fw2-l mv1 db light-purple">
          {post.frontmatter.title}{' '}
        </h1>
        <span className="f6 gray">
          {post.frontmatter.categories.join(', ')}
        </span>
        <hr className="mv4 bb b--white-10" />
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
        categories
      }
    }
  }
`
