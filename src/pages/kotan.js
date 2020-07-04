import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Kotan from "../images/kotan_01.jpg"
import SEO from "../components/seo"
import Helmet from 'react-helmet'

const IndexPage = () => (
  <Layout>
    <SEO title="Conde House Style 2020 登録フォーム" />
    <section className="product-section">
      <div>
        <img src={ Kotan } />
      </div>
    </section>
  </Layout>
)

export default IndexPage
