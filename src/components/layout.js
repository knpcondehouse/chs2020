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
import Facebookimg from "../images/facebook.png"
import "./layout.css"

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
            <a href="https://condehouse.co.jp" alt="conde house official site"><li>Conde House 公式サイト</li></a>
            <a href="https://www.facebook.com/condehouse/" alt=""><li><img src="{Facebookimg}" alt="facebook logo"/></li></a>
            <a href="https://goole.com" alt=""><li></li></a>
            <a href="https://goole.com" alt=""><li>© {new Date().getFullYear()} Conde House</li></a>
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
