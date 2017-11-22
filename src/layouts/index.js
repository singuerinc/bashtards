import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import feather from 'feather-icons'

import 'tachyons'
import 'syntax-highlighting/assets/css/prism/prism-base16-ateliercave.light.css'
import './index.css'

const Header = () => (
  <div>
    <div>
      <h1 className="f-subheadline-ns f1 lh-solid fw3 mt4 mb1">
        <Link to="/" className="silver link dim">
          &gt; Bashtards
        </Link>
      </h1>
      <h2 className="f4 fw3 white-50 ma0">A blog about themes, wallpapers, fonts and editors for coders.</h2>
      <h3 className="f6 fw4 ma0 mt1">Written by <a className="link dim dark-gray" href="https://twitter.com/singuerinc" target="_blank">Nahuel</a> and Ricardo, who are always disappointed with their setups.</h3>

      <nav className="list mt4 pa0">
        <a href="/themes" target="_self" className="link dim dib green pa0 mr2">Themes</a>
        <a href="/icons" target="_self" className="link dim dib green pa0 mr2">Icons</a>
        <a href="/fonts" target="_self" className="link dim dib green pa0 mr2">Fonts</a>
        <a href="/wallpapers" target="_self" className="link dim dib green pa0 mr2">Wallpapers</a>
      </nav>
    </div>
  </div>
)
const TemplateWrapper = ({ children }) => {
  const home = `https://www.bashtards.com`;

  return (
    <div className="sans-serif dark-gray mh4 mh3 mw-100 mw7-l center-l">
      <Helmet
        title="> Bashtards"
        meta={[
          {
            name: 'description',
            content:
              'A blog about themes, wallpapers, fonts and editors for coders.',
          },
          { name: 'author', content: 'Nahuel Scotti' },
          { name: 'author', content: 'Ricardo Saiz' },
          // FIXME: Add common image
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
          { property: 'og:title', content: '> Bashtards' },
          {
            property: 'og:description',
            content:
              'A blog about themes, wallpapers, fonts and editors for coders.',
          },
          { property: 'og:url', content: home },
          { property: 'og:site_name', content: '> Bashtards' },
          { property: 'fb:app_id', content: '1774104969502286' },
          { name: 'twitter:card', content: 'summary' },
          { name: 'twitter:site', content: '> Bashtards' },
          { name: 'twitter:title', content: '> Bashtards' },
          {
            name: 'twitter:description',
            content:
              'A blog about themes, wallpapers, fonts and editors for coders.',
          },
          { name: 'twitter:url', content: home },
        ]}
      />
      <Header />
      <div className="mt5 mb2">{children()}</div>
      <div className="bg-white-10 w-100 db" style={{height: '1px'}}></div>
      <footer className="tc mv4">
          <div className="f5">saaaape! - 2017</div>
      </footer>
    </div>
  )
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
