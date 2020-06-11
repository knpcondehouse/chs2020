import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Conde House Style 2020 登録フォーム" />

    <form name="CHS2020 Contact Form" method="POST" data-netlify="true" action="/thankyou" className="cap chs-form">
      <input type="hidden" name="form-name" value="CHS2020 Contact Form" />
      <div>
        <label>お名前:</label>
        <input type="text" name="name" />
      </div>
      <div>
        <label>会社名:</label>
        <input type="text" name="company" />
      </div>
      <div>
        <label>部署・役職:</label>
        <input type="text" name="position" />
      </div>
      <div>
        <label>Eメールアドレス:</label>
        <input type="email" name="email" />
      </div>
      <div>
        <select id="nearest-store" name="nearest-store">
          <option value="tokyo">東京</option>
          <option value="sapporo">札幌</option>
          <option value="sendai">仙台</option>
          <option value="kanazawa">金沢</option>
        </select>
      </div>
      {/* event radio*/}
      <div>
        <input type="radio" id="male" name="male" value="male" />
        <label for="male">Male</label>

        <input type="radio" id="female" name="female" value="female" />
        <label for="female">Female</label>

        <input type="radio" id="other" name="other" value="other" />
        <label for="other">Other</label>
      </div>
      <div>
        <label>メッセージ:</label>
        <textarea name="message" placeholder="ご質問やご要望がある方は、こちらにご記入ください。" />
      </div>
      <button type="submit">Send</button>
    </form>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
