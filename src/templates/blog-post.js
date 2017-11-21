import React from 'react'
import feather from 'feather-icons'
import Helmet from 'react-helmet'

export default ({ data, pathContext }) => {
  const post = data.markdownRemark
  const { date, slug } = pathContext
  const link = encodeURIComponent(`https://camaleon.singuerinc.com/${slug}`);
  const hashtag = encodeURIComponent(`#bashtards`);
  return (
    <article>
      <Helmet
      title={`${post.frontmatter.title} > Bashtards`}
      meta={[
        { property: 'og:url', content: `https://camaleon.singuerinc.com/${slug}` },
        { name: 'twitter:url', content: `https://camaleon.singuerinc.com/${slug}` },
      ]}
    />
      <header className="mb5">
        <span className="fw3 gray f5">{date}</span>
        <span className="fw3 dark-gray f6"> by {post.frontmatter.author}</span>
        <h1 className="f1 fw2 mv1 db green">
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
        <h4 className="ma0 mt4 pa0 tc">Share this bashtard</h4>
        <div className="flex justify-center pv3">
          <a className="dib link dim dark-gray mr3 tr" href={`https://www.facebook.com/sharer/sharer.php?u=${link}+${hashtag}`} target="_blank"><span dangerouslySetInnerHTML={{ __html: feather.icons.facebook.toSvg() }} /></a>
          <a className="dib link dim dark-gray ml3 tl" href={`https://twitter.com/home?status=${link}+${hashtag}`} target="_blank"><span dangerouslySetInnerHTML={{ __html: feather.icons.twitter.toSvg() }} /></a>
        </div>
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
