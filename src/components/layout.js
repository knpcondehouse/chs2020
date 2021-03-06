/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import "./layout.css"
import { Link } from "gatsby"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>
        <main>{children}</main>
        <footer>
          <ul className="footermenu">
            <li>© {new Date().getFullYear()} Conde House Style 特設サイト</li>
            <a href="https://condehouse.co.jp" alt="conde house official site"><li>→ Conde House 公式サイト</li></a>
            <a href="https://www.facebook.com/condehouse/" alt="Condehouse Facebook"><li>→ Facebook</li></a>
            <a href="https://www.instagram.com/condehouse_official/" alt="Conde House Instagram"><li>→ Instagram</li></a>
            <Link to="/en"><li>→ English Page</li></Link>
            <span className="clear"></span>
          </ul>

        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
