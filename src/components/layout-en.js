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
    query siteTitleQueryAndSiteTitleQuery {
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
            <li>© {new Date().getFullYear()} Conde House Style Event Website</li>
            <a href="https://condehouse.com" alt="conde house official site"><li>→ Conde House Official Website</li></a>
            <a href="https://www.facebook.com/condehouse/" alt="Condehouse Facebook"><li>→ Facebook</li></a>
            <a href="https://www.instagram.com/condehouse_official/" alt="Conde House Instagram"><li>→ Instagram</li></a>
            <Link to="/" ><li>→ 日本語</li></Link>
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
