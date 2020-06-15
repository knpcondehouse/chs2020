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
    <div className="flex-right">
      <a href="http://eepurl.com/g6ZSeL" >エントリーフォーム</a>
    </div>
  </div>
  </Layout>
)

export default IndexPage
