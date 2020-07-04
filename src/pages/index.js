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
    <div className="motiongraphic">
      <video playsinline="true" webkit-playsinline preload='auto' loop autoPlay muted>
        <source src={Motion} type="video/mp4" />
     Your browser does not support HTML5 video.
     </video>
    </div>
    <section data="eventinfo" className="chs-intro cap">
      <h3>conde house style <br />2020 July</h3>
      <p>「CONDE HOUSE STYLE 2020 JULY」を開催いたしました。</p>
      <p>新作・新提案を、7月オンラインにて発表。</p>
      <p>オフィスや家での過ごし方が見直され、生活スタイルや働き方が多様化する現代、<br />カンディハウスはお客さまとともに、より豊かなくらしを考えて参ります。</p>
      <p>国内外含めた世界同時配信にてお届けいたします。ぜひご期待ください。</p>
    </section>
    <section data="item-videos" className="items-container">
      <h3 data-sal="slide-up" data-sal-duration="500" data-sal-delay="500" data-sal-easing="ease">7/4<span className="dayoftheweek">Sat</span>New Item Debut</h3>
      <div>
        <div className="product-box cap">
          <div className="videobox" data-sal="slide-right" data-sal-duration="500" data-sal-delay="500" data-sal-easing="ease">
            <iframe width="100%" height="450px" src="https://www.youtube.com/embed/iV8GC2TVPdI?showinfo=0&controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div className="column-text" data-sal="slide-left" data-sal-duration="500" data-sal-delay="800" data-sal-easing="ease">
            <h4><span className="newsicon"></span>KYOBASHI</h4>
            <a href="https://www.tonerico-inc.com/"><h5>design TONERICO:INC. <br />Hiroshi Yoneya</h5></a>
            <p>旧ブリヂストン美術館が館名変更し、2020年1月に新しく「アーティゾン美術館」として開館。トネリコ 米谷ひろし氏が美術館のためにデザインしたアームチェアー・サイドチェアーをもとにカンディハウスオリジナルとして発表しました。更に洗練された新提案をご覧ください。</p>
            <a className="brownbutton" href="https://www.condehouse.co.jp/news/condehouse-news/newitem202007/#kyobashi" alt="Conde House Asahikawa Virtual Shop">製品情報等 詳しくはこちら</a>
          </div>
        </div>
      </div>
      <div className="product-box-margin">
        <div className="product-box cap">
          <div className="videobox" data-sal="slide-right" data-sal-duration="500" data-sal-delay="800" data-sal-easing="ease">
            <iframe width="100%" height="450px" src="https://www.youtube.com/embed/v-ykdJZx3Lc?showinfo=0&controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div className="column-text" data-sal="slide-right" data-sal-duration="500" data-sal-delay="800" data-sal-easing="ease">
            <h4><span className="newsicon"></span>KOTAN</h4>
            <a href="https://naotofukasawa.com/"><h5>design Naoto Fukasawa</h5></a>
            <p>「次代のロングライフプロダクト」を目指して深澤直人氏と開発したシリーズ「KOTAN」。椅子の発売から1年が経ち、この度テーブルやハイチェアーや異素材とのコンビネーション、空間提案の幅を広げる多くのアイテムを追加発表いたしました。</p>
            <a className="brownbutton" href="https://www.condehouse.co.jp/news/condehouse-news/newitem202007/#kotan" alt="Conde House Asahikawa Virtual Shop">製品情報等 詳しくはこちら</a>
          </div>
        </div>
      </div>
    </section>
    <section className="chs-sales">
      <h2 data-sal="slide-down" data-sal-duration="500" data-sal-delay="500" data-sal-easing="ease"><span className="schedule"></span>Event</h2>
      <p data-sal="slide-down" data-sal-duration="500" data-sal-delay="500" data-sal-easing="ease">デザイナーインタビューを含む新作・新提案プレゼンテーションを行います。各イベントの参加受付は定員に達し次第終了させていただきます。</p>
      <div className="lineup cap">
        <div className="event-dates">
          <div data-sal="slide-down" data-sal-duration="500" data-sal-delay="200" data-sal-easing="ease"><h4>7/2 <span>thu</span></h4></div>
          <div data-sal="slide-down" data-sal-duration="500" data-sal-delay="600" data-sal-easing="ease"><h4>KYOBASHI・KOTAN プレビュー for プレス
            </h4><p className="left">→　たくさんのご参加ありがとうございました。</p>
            <h4>KYOBASHI・KOTAN プレビュー for ビジネス</h4>
            <p className="left">→　たくさんのご参加ありがとうございました。</p>
            <h4>【ゲスト出演】米谷ひろし・深澤直人</h4></div>
          <div data-sal="slide-down" data-sal-duration="500" data-sal-delay="400" data-sal-easing="ease"><h4>7/3 <span>fri</span></h4></div>
          <div data-sal="slide-down" data-sal-duration="500" data-sal-delay="800" data-sal-easing="ease">
          <h4>新作・新提案プレゼンテーション for ビジネス</h4>
          <p className="left">→　たくさんのご参加ありがとうございました。</p></div>
        </div>
      </div>
    </section>
    <section className="virtualshop">
      <img src={ VS } alt="Conde House virtual shop" />
      <div className="cap vstext">
        <div className="vstext-box">
          <h3>Conde House Virtual Shop</h3>
          <p>「CONDE HOUSE バーチャルショップ」がオープンいたしました。お持ちのパソコンやスマートフォンを使用し、ご自宅に居ながらカンディハウスショップをご体感いただけます。</p>
          <p>本社・旭川のショップは、主力製品のほぼすべてを展示し、他のショップでは見られないアイテムや、オフィスやラウンジなどコントラクト向けの空間も展開。</p>
          <p>東京ショップでは、アートやインテリアエレメント情報も充実。大阪ショップも、リビング・ダイニング・ベッドルームとトータルに空間をご覧いただけます。</p>
          <p>バーチャルショップでは、アイテムクリックで詳細情報もご確認いただけますので、ぜひお気軽にご来店ください。</p>
        </div>
        <div className="vstrio">
          <div>
            <img src={ Vs1 } alt="Conde House Asahikawa Virtual Shop"/>
            <a className="brownbutton" href="https://my.matterport.com/show/?m=Zmb81bhq3GS" alt="Conde House Asahikawa Virtual Shop">旭川南SHOP</a>
            <a className="brownbutton" href="https://my.matterport.com/show/?m=rbBA3xSZcTB&play=1"alt="Conde House Asahikawa Virtual Shop">旭川東SHOP</a>
          </div>
          <div>
            <img src={ Vs2 } alt="Conde House Asahikawa Virtual Shop"/>
            <a className="brownbutton" href="https://my.matterport.com/show/?m=4mRcR2zxyFC" alt="Conde House Asahikawa Virtual Shop">東京SHOP</a>
          </div>
          <div>
            <img src={ Vs3 } alt="Conde House Asahikawa Virtual Shop"/>
            <a className="brownbutton" href="https://my.matterport.com/show/?m=HpFTXfa95KS" alt="Conde House Asahikawa Virtual Shop">大阪SHOP</a>
          </div>
        </div>
      </div>
    </section>
    <section className="nextupdates">
      <h3><span className="comingsoonspan"></span>Next Updates</h3>
      <p>この後も人気シリーズの追加ラインアップや新シリーズを発表予定。</p>
    </section>
      <Link to="/"></Link>
  </Layout>
)

export default IndexPage
