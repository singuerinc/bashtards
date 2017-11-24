import React from 'react'
import feather from 'feather-icons'
import Helmet from 'react-helmet'

export default ({ data, pathContext }) => {
  const { siteUrl, hashtag } = data.site.siteMetadata;
  const post = data.markdownRemark
  const { date, slug } = pathContext
  const title = encodeURIComponent(post.frontmatter.title);
  const link = encodeURIComponent(`${siteUrl}${slug}`);
  const htag = encodeURIComponent(hashtag);
  const shareTxt = `${title}+${link}+${htag}`;
  console.log(slug)
  return (
    <article>
      <Helmet
      title={`${post.frontmatter.title} > Bashtards`}
      meta={[
        { property: 'og:title', content: post.frontmatter.title },
        { property: 'og:url', content: `${siteUrl}${slug}` },
        { name: 'twitter:title', content: post.frontmatter.title },
        { name: 'twitter:url', content: `${siteUrl}${slug}` }
      ]}
    />
      <header className="mb4">
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
          <a className="dib link dim dark-gray mr3 tr" href={`https://www.facebook.com/sharer/sharer.php?u=${shareTxt}`} target="_blank"><span dangerouslySetInnerHTML={{ __html: feather.icons.facebook.toSvg() }} /></a>
          <a className="dib link dim dark-gray ml3 tl" href={`https://twitter.com/home?status=${shareTxt}`} target="_blank"><span dangerouslySetInnerHTML={{ __html: feather.icons.twitter.toSvg() }} /></a>
        </div>
      </sections>
    </article>
  )
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    site {
      siteMetadata {
        title
        description
        siteUrl
        hashtag
      }
    },
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
