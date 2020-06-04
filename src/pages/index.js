import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../images/yoneyatonerico.jpg"
import Image2 from "../images/naotofukasawa.jpg"
import Video1 from "../images/kotan.mp4"
import Video2 from "../images/kyobashi.mp4"
import Motion from "../images/motion.mp4"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="motiongraphic">
      <video preload='auto' loop autoPlay muted>
        <source src={Motion} type="video/mp4" />
     Your browser does not support HTML5 video.
     </video>
    </div>
    <section data="eventinfo" className="chs-intro cap" data-sal="slide-up" data-sal-duration="500" data-sal-delay="500"
  data-sal-easing="ease">
      <h3>conde house style <br />2020 July</h3>
      <p>「CONDE HOUSE STYLE 2020 JULY」を開催いたします。</p>
      <p>新作・新提案を、7月オンラインにて発表。</p>
      <p>オフィスや家での過ごし方が見直され、生活スタイルや働き方が多様化する現代、カンディハウスはお客さまとともに、より豊かなくらしを考えて参ります。</p>
      <p>国内外含めた世界同時配信にてお届けいたします。ぜひご期待ください。</p>
    </section>
    <section data="item-videos" className="items-container">
      <h3 data-sal="slide-up" data-sal-duration="500" data-sal-delay="500" data-sal-easing="ease">New Item Debut</h3>
      <div>
        <div className="product-box cap">
          <div className="videobox" data-sal="slide-right" data-sal-duration="500" data-sal-delay="500" data-sal-easing="ease">
            <video preload='auto' loop autoPlay muted>
              <source src={Video2} type="video/mp4" />
           Your browser does not support HTML5 video.
           </video>
          </div>
          <div className="column-text" data-sal="slide-left" data-sal-duration="500" data-sal-delay="800" data-sal-easing="ease">
            <h4><span className="newsicon"></span>KYOBASHI</h4>
            <h5>design TONERICO:INC. HIROSHI YONEYA</h5>
            <p>旧ブリヂストン美術館が館名変更し、2020年1月に新しく「アーティゾン美術館」として開館。トネリコ 米谷ひろし氏が美術館のためにデザインしたアームチェアー・サイドチェアーをカンディハウスオリジナルとして発表します。更に洗練された新提案をご覧ください。</p>
          </div>
        </div>
      </div>
      <div className="product-box-margin">
        <div className="product-box cap">
          <div className="videobox" data-sal="slide-left" data-sal-duration="500" data-sal-delay="200" data-sal-easing="ease">
            <video preload='auto' loop autoPlay muted>
              <source src={Video1} type="video/mp4" />
           Your browser does not support HTML5 video.
           </video>
          </div>
          <div className="column-text" data-sal="slide-right" data-sal-duration="500" data-sal-delay="800" data-sal-easing="ease">
            <h4><span className="newsicon"></span>KOTAN</h4>
            <h5>design NAOTO FUKASAWA</h5>
            <p>「次代のロングライフプロダクト」を目指して深澤直人氏と開発したシリーズ「KOTAN」。椅子の発売から1年が経ち、この度テーブルやハイチェアーや異素材とのコンビネーション、空間提案の幅を広げる多くのアイテムを追加発表いたします。</p>
          </div>
        </div>
      </div>
    </section>
    <section className="chs-sales" data-sal="slide-down" data-sal-duration="500" data-sal-delay="500" data-sal-easing="ease">
      <h2><span className="schedule"></span>イベント</h2>
      <div className="lineup cap">
        <p>7/2　KYOBASHI・KOTAN <br />プレビュー for プレス & ビジネス</p>
        <p>7/3　新作・新提案プレゼンテーション for ビジネス</p>
        <p>7/4  KYOBASHI ・ KOTAN発表発売</p>
        <div className="designers cap">
          <div><img src={Image} alt="Tonerico" /></div>
          <div><p>KYOBASHI <br />by <br />TONERICO:INC. HIROSHI YONEYA</p></div>
          <div><img src={Image2} alt="Naoto Fukasawa"/></div>
          <div><p>KOTAN <br />by <br />NAOTO FUKASAWA</p></div>
        </div>
        <h3><span className="comingsoonspan"></span>Next Updates</h3>
        <p>主力シリーズ追加アイテム・<br />新作シリーズ発表</p>　　
        <p>東京支店ライブオフィスオープン</p>
        <p>主力シリーズオフィスアイテム発表</p>
      </div>
    </section>
      <Link to="/"></Link>
  </Layout>
)

export default IndexPage
