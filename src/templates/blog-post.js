import React from 'react'
import feather from 'feather-icons'
import Helmet from 'react-helmet'

export default ({ data, pathContext }) => {
  const post = data.markdownRemark
  const { date, slug } = pathContext
  const link = encodeURIComponent(`https://camaleon.singuerinc.com/${slug}`);
  return (
    <article>
      <Helmet
      title="> Bashtards"
      meta={[
        { property: 'og:url', content: `https://camaleon.singuerinc.com/${slug}` },
        { name: 'twitter:url', content: `https://camaleon.singuerinc.com/${slug}` },
      ]}
    />
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
      <sections>
        <ul className="ma0 pa0 list">
          <li className="ma2 dib"><a className="link dim dark-gray" href={`https://www.facebook.com/sharer/sharer.php?u=${link}`} target="_blank"><span dangerouslySetInnerHTML={{ __html: feather.icons.facebook.toSvg() }} /></a></li>
          <li className="ma2 dib"><a className="link dim dark-gray" href={`https://twitter.com/home?status=${link}`} target="_blank"><span dangerouslySetInnerHTML={{ __html: feather.icons.twitter.toSvg() }} /></a></li>
        </ul>
      </sections>
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
