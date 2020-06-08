import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Video1 from "../../static/kotan.mp4"
import Video2 from "../images/kyobashi.mp4"
import Motion from "../images/motion.mp4"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="motiongraphic">
      <video playsinline="true" webkit-playsinline preload='auto' loop autoPlay muted>
        <source src={Motion} type="video/mp4" />
     Your browser does not support HTML5 video.
     </video>
    </div>
    <section data="eventinfo" className="chs-intro cap">
      <h3>conde house style <br />2020 July</h3>
      <p>「CONDE HOUSE STYLE 2020 JULY」を開催いたします。</p>
      <p>新作・新提案を、7月オンラインにて発表。</p>
      <p>オフィスや家での過ごし方が見直され、生活スタイルや働き方が多様化する現代、<br />カンディハウスはお客さまとともに、より豊かなくらしを考えて参ります。</p>
      <p>国内外含めた世界同時配信にてお届けいたします。ぜひご期待ください。</p>
    </section>
    <section data="item-videos" className="items-container">
      <h3 data-sal="slide-up" data-sal-duration="500" data-sal-delay="500" data-sal-easing="ease">7/4<span className="dayoftheweek">Sat</span>New Item Debut</h3>
      <div>
        <div className="product-box cap">
          <div className="videobox" data-sal="slide-right" data-sal-duration="500" data-sal-delay="500" data-sal-easing="ease">
            <video playsinline="true" preload='auto' loop autoPlay muted>
              <source src={Video2} type="video/mp4" />
           Your browser does not support HTML5 video.
           </video>
          </div>
          <div className="column-text" data-sal="slide-left" data-sal-duration="500" data-sal-delay="800" data-sal-easing="ease">
            <h4><span className="newsicon"></span>KYOBASHI</h4>
            <h5>design TONERICO:INC. <br />Hiroshi Yoneya</h5>
            <p>旧ブリヂストン美術館が館名変更し、2020年1月に新しく「アーティゾン美術館」として開館。トネリコ 米谷ひろし氏が美術館のためにデザインしたアームチェアー・サイドチェアーをもとにカンディハウスオリジナルとして発表します。更に洗練された新提案をご覧ください。</p>
          </div>
        </div>
      </div>
      <div className="product-box-margin">
        <div className="product-box cap">
          <div className="videobox" data-sal="slide-left" data-sal-duration="500" data-sal-delay="200" data-sal-easing="ease">
            <video playsinline="true" webkit-playsinline preload='auto' loop autoPlay muted>
              <source src={Video1} type="video/mp4" />
           Your browser does not support HTML5 video.
           </video>
          </div>
          <div className="column-text" data-sal="slide-right" data-sal-duration="500" data-sal-delay="800" data-sal-easing="ease">
            <h4><span className="newsicon"></span>KOTAN</h4>
            <h5>design Naoto Fukasawa</h5>
            <p>「次代のロングライフプロダクト」を目指して深澤直人氏と開発したシリーズ「KOTAN」。椅子の発売から1年が経ち、この度テーブルやハイチェアーや異素材とのコンビネーション、空間提案の幅を広げる多くのアイテムを追加発表いたします。</p>
          </div>
        </div>
      </div>
    </section>
    <section className="chs-sales">
      <h2 data-sal="slide-down" data-sal-duration="500" data-sal-delay="500" data-sal-easing="ease"><span className="schedule"></span>Event</h2>
      <p data-sal="slide-down" data-sal-duration="500" data-sal-delay="500" data-sal-easing="ease">デザイナーインタビューを含む新作・新提案プレゼンテーションを行います。参加受付の開始は近日中にお知らせいたします。</p>
      <div className="lineup cap">
        <div className="event-dates">
          <div data-sal="slide-down" data-sal-duration="500" data-sal-delay="200" data-sal-easing="ease"><h4>7/2 <span>thu</span></h4></div>
          <div data-sal="slide-down" data-sal-duration="500" data-sal-delay="600" data-sal-easing="ease"><h4>KYOBASHI・KOTAN プレビュー for プレス<br />KYOBASHI・KOTAN プレビュー for ビジネス<br />【ゲスト出演予定】米谷ひろし・深澤直人</h4></div>
          <div data-sal="slide-down" data-sal-duration="500" data-sal-delay="400" data-sal-easing="ease"><h4>7/3 <span>fri</span></h4></div>
          <div data-sal="slide-down" data-sal-duration="500" data-sal-delay="800" data-sal-easing="ease"><h4>新作・新提案プレゼンテーション for ビジネス</h4></div>
        </div>
      </div>
    </section>
    <section className="nextupdates">
      <h3><span className="comingsoonspan"></span>Next Updates</h3>
      <p>この後も人気シリーズの追加ラインアップや新シリーズ、
そして東京ライブオフィスに向けたオフィス新アイテムを発表予定。</p>
    </section>
      <Link to="/"></Link>
  </Layout>
)

export default IndexPage
