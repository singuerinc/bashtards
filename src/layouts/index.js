import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import feather from 'feather-icons'

import { siteMetadata } from '../../gatsby-config';
import 'tachyons'
import 'syntax-highlighting/assets/css/prism/prism-base16-ateliercave.light.css'
import './index.css'

const Header = () => (
  <div>
    <div className="tc">
      <h1 className="f-subheadline-ns f1 lh-solid fw3 mt4 mb1">
        <Link to="/" className="silver link dim">
          &gt; Bashtards <span className="cursor-bashtard">|</span>
        </Link>
      </h1>
      <h2 className="f4 fw3 white-30 ma0">{siteMetadata.description}</h2>
    </div>
    <div>
      <nav className="list mt4 pa0 flex justify-center">
        <a href="/" target="_self" className="link dim dib light-silver pa0 mr2">All</a>
        <a href="/themes" target="_self" className="link dim dib light-silver pa0 mr2">Themes</a>
        <a href="/icons" target="_self" className="link dim dib light-silver pa0 mr2">Icons</a>
        <a href="/fonts" target="_self" className="link dim dib light-silver pa0 mr2">Fonts</a>
        <a href="/wallpapers" target="_self" className="link dim dib light-silver pa0 mr2">Wallpapers</a>
      </nav>
    </div>
  </div>
)
const TemplateWrapper = (props) => {
  const { location, children } = props
  const { siteUrl, description, title } = siteMetadata;
  return (
    <div className="sans-serif dark-gray mh4 mh3 mw-100 mw7-l center-l">
      <Helmet
        title={title}
        meta={[
          { name: 'description', content: description },
          { name: 'author', content: 'Nahuel Scotti' },
          { name: 'author', content: 'Ricardo Saiz' },
          // FIXME: Add common image
          { property: 'og:image', content: '' },
          { property: 'og:image:type', content: 'image/jpg' },
          { property: 'og:image:width', content: '816' },
          { property: 'og:image:height', content: '386' },
          { property: 'og:locale', content: 'en_US' },
          { property: 'og:type', content: 'article' },
          { property: 'og:title', content: title },
          { property: 'og:description', content: description },
          { property: 'og:url', content: siteUrl },
          { property: 'og:site_name', content: title },
          { property: 'fb:app_id', content: '1774104969502286' },
          { name: 'twitter:card', content: 'summary' },
          { name: 'twitter:site', content: title },
          { name: 'twitter:title', content: title },
          { name: 'twitter:description', content: description },
          { name: 'twitter:url', content: siteUrl },
        ]}
      />
      <Header />
      <div className="mt4 mb2">{children()}</div>
      <div className="bg-white-10 w-100 db" style={{height: '1px'}}></div>
      <footer className="tc mv4">
          <h3 className="f6 fw4 silver ma0 mt1">Written by <a className="link dim silver" href="https://twitter.com/singuerinc" target="_blank">Nahuel</a> and Ricardo, who are always disappointed with their setups.</h3>
          <h4 className="f6 fw4 dark-silver">&copy; 2017 // saaaape!</h4>
      </footer>
    </div>
  )
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
