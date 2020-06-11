import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./sass/mixin.scss"
import "./sass/style.sass"
import "./sass/form.sass"



const Header = ({ siteTitle }) => (
  <header className="header-style"
    style={{
      background: `#cc0000`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        padding: `1rem 1.0875rem`,
      }}
    >
      <h1 className="chs-title" style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <div className="headermenu">
        <ul>
          <li><Link
            to="/english"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            English
          </Link>
          </li>
          <li><Link
            to="/about"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            カンディハウスについて
          </Link>
          </li>
          <li><Link
            to="/about"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            About
          </Link>
          </li>
        </ul>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
