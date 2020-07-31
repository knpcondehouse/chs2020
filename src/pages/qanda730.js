import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Motion from "../images/motion.mp4"
import SEO from "../components/seo"
import VS from "../images/virtualshop.jpg"
import Vs1 from "../images/asahikawa.png"
import Vs2 from "../images/tokyo.jpg"
import Vs3 from "../images/osaka.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="virtualshop qanda">
      <div className="cap vstext">
        <div className="vstext-box">
          <h3 className="redunderbar">CONDE HOUSE STYLE <br />Question and Answer</h3>
          <p className="topmargin">7月30新作プレビュー for ビジネスにていただいたご質問の回答を以下に紹介します。</p>
          <p>デザイナーより、カタログでは語られていない開発エピソードもございますのでぜひ御覧ください。（一部抜粋した内容になります）</p>
          <h4>7月30日開催 新作プレビュー for ビジネス CLテーブル・TLテーブル（20）について</h4>
          <p className="question"><span className="qicon"></span>CLテーブルの重量感を伺いたいです。</p>
          <p><span className="aicon"></span>180×90　H71サイズ　35㎏程度です。</p>
          <p className="question"><span className="qicon"></span>どこで購入できますか？青山のショップだけでしょうか。</p>
          <p><span className="aicon"></span>海外含めて7月4日より発売となります。展示は全国のショップに展開しています（京都を除く）。</p>
          <p className="question"><span className="qicon"></span>CLテーブルのジョイントシステムの金物を使わないとは、どういう構造ですか？</p>
          <p><span className="aicon"></span>市販のジョイントシステム金物の緩みを避けるため、代わりにシンプルなネジ込み式取付方法を採用。　本来は難しい、ネジ込みの四隅脚を実現するために、天板と脚のすり合わせにひと手間加えて滑らかな仕上がりを実現しました。</p>
          <p className="question"><span className="qicon"></span>ウォルナット材は輸入ですか?</p>
          <p><span className="aicon"></span>ウォルナット材は主に北アメリカからの輸入品となります。</p>
          <p className="question"><span className="qicon"></span>イージーオーダーとは納期はどれくらい必要ですか？</p>
          <p><span className="aicon"></span>CLテーブルとTLテーブルのご注文後の納期は155×85、165×85、180×90の3サイズについて約1か月後の出荷を目指します。その他のサイズは1か月半後の出荷が目安です。ただし、初回製作は3サイズの場合9月25日（金）、その他サイズは10月5日（月）出荷となりますことご了承ください。</p>

          <h4>7月30日開催 新作プレビュー for ビジネス WING LUX LD（背張り）チェアについて</h4>
          <p className="question"><span className="qicon"></span>チェアーの背と座の色は変える事出来るか、出来る場合の金額はどうなるか。</p>
          <p><span className="aicon"></span>背と座の張分けは設定しておりません。</p>
          <p className="question"><span className="qicon"></span>佐戸川さんへ、WING LUXのデザインは、どのように発想されたのでしょうか？</p>
          <p><span className="aicon"></span> 佐戸川氏：メーカーからの要望で始まったデザインです。幅広い情報をもとに、まず女性的であることを大切にしました。サイドチェアーの肘のアイディアは立ち振る舞いと肘の利便性を両立することができました。WINGのネーミングは動植物の美しさ、滑らかなラインを表現しています。</p>
          <p className="question"><span className="qicon"></span>佐戸川さんが家具をデザインするうえで根幹となっていることは？</p>
          <p><span className="aicon"></span>佐戸川氏：自分自身が心地よい座り心地を感じることができる。使い勝手が良く、好きになることができることです。また同じ世代の大勢の方に支持されるということは大事です。永く使い続けることができるデザインを追求したいと思っています。</p>
        </div>
      </div>
    </section>
      <Link to="/"></Link>
  </Layout>
)

export default IndexPage
