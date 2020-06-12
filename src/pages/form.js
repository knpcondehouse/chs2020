import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Kyobashi from "../images/kyobashi.jpg"
import Helmet from 'react-helmet'

const IndexPage = () => (
  <Layout>
    <SEO title="Conde House Style 2020 登録フォーム" />
  <div className="form-wrap">
    <div className="flex-left">
      <div className="event-title">
        <h4>KYOBASHI/KOTAN プレビュー for プレス</h4>
        <h4>7月2日 14:00 〜 15:00</h4>
        <h4>ゲスト出演　米谷ひろし / 深澤直人</h4>
      </div>
      <img src={Kyobashi} data-sal="slide-right" data-sal-duration="500" data-sal-delay="500" data-sal-easing="ease" className="light-shadow" />
      <div className="event-description">
        <p>プレゼンテーション　カンディハウス  代表取締役社長　藤田哲也</p>
        <p>7月4日に発売となる2つの新作・新提案について、プレスの皆さまに一足早くご紹介するプレスプレビューを開催。WEB会議ツールを利用し、プレゼンテーションやデザイナーインタビューを配信します。当日はご参加の皆さまからライブで質問を受けるデザイナー質疑応答の場も設けておりますので、ぜひパソコン・スマホからご参加いただき、カンディハウスの新作・新提案にご注目ください。</p>
        <p>※WEB会議ツールはZoomのウェビナーを使用いたします。</p>
        <p>〈Zoomウェビナー参加方法はこちら〉</p>
        <p>「エントリーフォーム」に必要事項をご入力ください。</p>
      </div>
    </div>
    <div className="flex-right shadow" data-sal="slide-left" data-sal-duration="1500" data-sal-delay="500" data-sal-easing="ease">
      <form name="CHS2020 Contact Form" method="POST" data-netlify="true" action="/thankyou" className="cap chs-form">
        <input type="hidden" name="form-name" value="CHS2020 Contact Form" />
        <h5><span className="registration" ></span>エントリーフォーム</h5>
        <small>*媒体名以外は必須項目です。法人以外の方はその他と記載してください。</small>
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
            <label>フリガナ（姓）</label>
            <input type="text" name="lastname-kana" />
          </p>
          <p>
            <label>フリガナ（名）</label>
            <input type="text" name="firstname-kana" />
          </p>
        </div>
        <div>
          <p><label>会社名</label>
          <input type="text" name="company" /></p>
        </div>
        <div>
          <p><label>部署</label>
          <input type="text" name="部署" /></p>
        </div>
        <div>
          <p><label>媒体名</label>
          <input type="text" name="媒体名" /></p>
        </div>
        <div>
          <p><label>Eメールアドレス</label>
          <input type="email" name="email" id="email" /></p>
        </div>
        <div>
          <p><label>参加日時を選択してください。</label>
          <select id="event-to-attend" name="参加予定">
            <option value="2nd">7/2 (14:00〜15:00)</option>
            <option value="3rd">7/3（13:00〜13:30）</option>
            <option value="both">7/2 & 7/3（13:00〜13:30）</option>
          </select></p>
          </div>
        <button className="chs-send-button" type="submit">参加予約を送信</button>
      </form>
    </div>
    </div>
  </Layout>
)

export default IndexPage
