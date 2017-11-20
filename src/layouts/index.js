import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import 'tachyons'
import 'syntax-highlighting/assets/css/prism/prism-base16-ateliercave.light.css'
import './index.css'

const Header = () => (
  <div>
    <div>
      <h1 className="f-subheadline-ns f1 lh-solid fw3 mt4 mb1">
        <Link to="/" className="blog__title">
          Camale&oacute;n
        </Link>
      </h1>
      <h2 className="f4 fw3 white-50 ma0">A blog about themes, wallpapers, fonts and editors for coders.</h2>
      <h3 className="f6 fw4 ma0 mt1">Written by <a className="link dim dark-gray" href="https://twitter.com/singuerinc" target="_blank">Nahuel</a> and Ricardo, who are always disappointed with their setups.</h3>
    </div>
  </div>
)

const TemplateWrapper = ({ children }) => (
  <div className="sans-serif dark-gray mh4 mh3 mw-100 mw7-l center-l">
    <Helmet
      title="camaleon | blog"
      meta={[
        {
          name: 'description',
          content:
            'Written by Nahuel and Ricardo who are always disappointed with their setups.',
        },
        { name: 'author', content: 'Nahuel Scotti' },
        { name: 'author', content: 'Ricardo Saiz' },
        {
          property: 'og:image',
          content:
            '',
        },
        { property: 'og:image:type', content: 'image/jpg' },
        { property: 'og:image:width', content: '816" ' },
        { property: 'og:image:height', content: '386" ' },
        { property: 'og:locale', content: 'en_US' },
        { property: 'og:type', content: 'article' },
        { property: 'og:title', content: 'Camaleon' },
        {
          property: 'og:description',
          content:
            'Written by Nahuel and Ricardo who are always disappointed with their setups.',
        },
        { property: 'og:url', content: '' },
        { property: 'og:site_name', content: 'Camaleon' },
        { property: 'fb:app_id', content: '1774104969502286' },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:site', content: 'Camaleon' },
        { name: 'twitter:title', content: 'Camaleon' },
        {
          name: 'twitter:description',
          content:
            'Written by Nahuel and Ricardo who are always disappointed with their setups.',
        },
        { name: 'twitter:url', content: '' },
      ]}
    />
    <Header />
    <div className="mv4">{children()}</div>
    <div className="bg-white-10 w-100 db" style={{height: '1px'}}></div>
    <footer className="tc mv4">
      saaaape! - 2017
    </footer>
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-881783-19"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'UA-881783-19');
    </script>

  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
