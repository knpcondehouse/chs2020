import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../images/yoneyatonerico.jpg"
import Image2 from "../images/naotofukasawa.jpg"
import Video1 from "../images/kotan_HD.mp4"
import Video2 from "../images/kyobashi_HD.mp4"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="motiongraphic">
      <h3>This is where the graphics appear</h3>
    </div>
    <section data="eventinfo" className="chs-intro cap">
      <h3>conde house style 2020<br/> online project</h3>
      <p>新たな発信「CONDE HOUSE STYLE 2020 JULY」開催。</p>
      <p>7月のこの一ヶ月間は数回に渡り、木の魅力を引き出した、心地よい新作家具・新提案をオンラインにて発表いたします。</p>
      <p>オフィスや家での過ごし方が見直され、生活スタイルや働き方が多様化する現代、カンディハウスはお客さまとともに、より豊かなくらしを考えて参ります。</p>
      <p>国内外含めた世界同時配信にてお届けしますので、ぜひご期待ください。</p>
    </section>
    <section data="item-videos" className="items-container">
      <h3>New Item Debut</h3>
      <div>
        <div className="kotan-box widecap">
          <div className="videobox">
            <video preload='auto' loop autoPlay muted>
              <source src={Video1} type="video/mp4" />
           Your browser does not support HTML5 video.
           </video>
          </div>
          <div className="column-text">
            <h4>KOTAN</h4>
            <p>「次代のロングライフプロダクト」を目指して深澤直人氏と開発したシリーズ「KOTAN」。椅子の発売から1年が経ち、この度テーブルやハイチェアーや異素材とのコンビネーション、空間提案の幅を広げる多くのアイテムを追加発表いたします。</p>
          </div>
        </div>
      </div>
      <div>
        <div className="kotan-box widecap">
          <div className="column-text">
            <h4>KYOBASHI</h4>
            <p>旧ブリヂストン美術館が館名変更し、2020年1月に新しく「アーティゾン美術館」として開館。トネリコ 米谷ひろし氏が美術館のためにデザインしたアームチェアー・サイドチェアーをカンディハウスオリジナルとして発表します。更に洗練された新提案をご覧ください。</p>
          </div>
          <div className="videobox">
            <video preload='auto' loop autoPlay muted>
              <source src={Video2} type="video/mp4" />
           Your browser does not support HTML5 video.
           </video>
          </div>
        </div>
      </div>
    </section>

    <section data="dates" className="chs-dates">
      <h2 className="date">2020.7.2<span className="innerspan">thu</span>14:00 - 15:00</h2>
      <h2>新作プレスプレビュー<br />Press Preview</h2>
      <p className="cap">新たな発信「CONDE HOUSE STYLE 2020 JULY」開催。7月のこの一ヶ月間は数回に渡り、木の魅力を引き出した、心地よい新作家具・新提案をオンラインにて発表いたします。オフィスや家での過ごし方が見直され、生活スタイルや働き方が多様化する現代、カンディハウスはお客さまとともに、より豊かなくらしを考えて参ります。国内外含めた世界同時配信にてお届けしますので、ぜひご期待ください。</p>
      <div className="designers widecap">
        <div><img src={Image} alt="Tonerico" /></div>
        <div className="column-text"><p>デザイン　<br />TONERICO:INC.<br />米谷ひろし</p></div>
        <div><img src={Image2} alt="Naoto Fukasawa"/></div>
        <div className="column-text"><p>デザイン <br />深澤直人</p></div>
      </div>
      <h2 className="date">2020.7.2<span className="innerspan">thu</span>15:00 -</h2>
      <h2>販売区分別営業プレゼンテーション</h2>
      <p className="cap">新たな発信「CONDE HOUSE STYLE 2020 JULY」開催。7月のこの一ヶ月間は数回に渡り、木の魅力を引き出した、心地よい新作家具・新提案をオンラインにて発表いたします。オフィスや家での過ごし方が見直され、生活スタイルや働き方が多様化する現代、カンディハウスはお客さまとともに、より豊かなくらしを考えて参ります。国内外含めた世界同時配信にてお届けしますので、ぜひご期待ください。</p>
    </section>
    <section data="sales pitch" className="chs-sales">
      <h2 className="date">2020.7.2<span className="innerspan">thu</span>14:00 - 15:00</h2>
      <h2>新作プレスプレビュー<br />Press Preview</h2>
      <p className="cap">新たな発信「CONDE HOUSE STYLE 2020 JULY」開催。7月のこの一ヶ月間は数回に渡り、木の魅力を引き出した、心地よい新作家具・新提案をオンラインにて発表いたします。オフィスや家での過ごし方が見直され、生活スタイルや働き方が多様化する現代、カンディハウスはお客さまとともに、より豊かなくらしを考えて参ります。国内外含めた世界同時配信にてお届けしますので、ぜひご期待ください。</p>
      <div className="designers cap">
        <div><img src={Image} alt="Tonerico" /></div>
        <div><p>デザイナー名前</p></div>
        <div><img src={Image2} alt="Naoto Fukasawa"/></div>
        <div><p>デザイナー名前</p></div>
      </div>
      <h2 className="date">2020.7.2<span>thu</span>15:00 -</h2>
      <h2>販売区分別営業プレゼンテーション</h2>
      <p className="cap">新たな発信「CONDE HOUSE STYLE 2020 JULY」開催。7月のこの一ヶ月間は数回に渡り、木の魅力を引き出した、心地よい新作家具・新提案をオンラインにて発表いたします。オフィスや家での過ごし方が見直され、生活スタイルや働き方が多様化する現代、カンディハウスはお客さまとともに、より豊かなくらしを考えて参ります。国内外含めた世界同時配信にてお届けしますので、ぜひご期待ください。</p>
    </section>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
