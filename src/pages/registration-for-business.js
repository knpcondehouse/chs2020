import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Kyobashi from "../images/kyobashi.jpg"

const IndexPage = () => (
  <Layout>
    <SEO title="Conde House Style 2020 登録フォーム" />
    <div className="form-wrap">
      <div className="flex-left">
        <img src={Kyobashi} data-sal="slide-right" data-sal-duration="500" data-sal-delay="500" data-sal-easing="ease" />
        <h3>KYOBASHI/KOTAN <br />プレビュー for プレス<br />7月2日 14:00 〜 15:00<br />ゲスト出演　<br />米谷ひろし / 深澤直人</h3>
    <p>プレゼンテーション　カンディハウス  代表取締役社長　藤田哲也</p>

    <p>7月4日に発売となる2つの新作・新提案について、プレスの皆さまに一足早くご紹介するプレスプレビューを開催。WEB会議ツールを利用し、プレゼンテーションやデザイナーインタビューを配信します。当日はご参加の皆さまからライブで質問を受けるデザイナー質疑応答の場も設けておりますので、ぜひパソコン・スマホからご参加いただき、カンディハウスの新作・新提案にご注目ください。</p>
    <p>※WEB会議ツールはZoomのウェビナーを使用いたします。</p>
    <p>〈Zoomウェビナー参加方法はこちら〉</p>
      <p>下記「エントリーフォーム」に必要事項をご入力ください。</p>
    </div>
    <div className="flex-right" data-sal="slide-left" data-sal-duration="500" data-sal-delay="500" data-sal-easing="ease">
      <form name="CHS2020 Contact Form" method="POST" data-netlify="true" action="/thankyou" className="cap chs-form">
        <input type="hidden" name="form-name" value="CHS2020 Contact Form" />
        <h4><span className="registration" ></span>事前登録</h4>
        <div>
          <p>
            <label>姓　</label>
            <input type="text" name="lastname" />
          </p>
          <p>
            <label>名　</label>
            <input type="text" name="firstname" />
          </p>
        </div>
        <div>
          <p>
            <label>読み（姓）　</label>
            <input type="text" name="lastname-kana" />
          </p>
          <p>
            <label>読み（名）　</label>
            <input type="text" name="firstname-kana" />
          </p>
        </div>

        <div>
          <label>会社名</label>
          <input type="text" name="company" />
        </div>

        <div>
          <label>役職</label>
          <input type="text" name="役職" />
        </div>
        <div>
          <label>部署・役職:</label>
          <input type="text" name="position" />
        </div>
        <div>
          <label>Eメールアドレス</label>
          <input type="email" name="email" />
        </div>
        <div>
          <label>最寄りのConde House ショップ　</label>
          <select id="nearest-store" name="nearest-store">
            <option value="tokyo">東京</option>
            <option value="sapporo">札幌</option>
            <option value="sendai">仙台</option>
            <option value="kanazawa">金沢</option>
          </select>
        </div>
        <div>
          <label>参加日時を選択してください。</label>
          <select id="event-to-attend" name="参加予定">
            <option value="2nd">7/2 (13:00〜13:30)</option>
            <option value="3rd">7/3（13:00〜13:30）</option>
            <option value="both">7/2 & 7/3（13:00〜13:30）</option>
          </select>
          </div>
        <button className="chs-send-button" type="submit">参加予約を送信</button>
      </form>
    </div>
    </div>
  </Layout>
)

export default IndexPage
