import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Motion from "../images/motion.mp4"
import SEO from "../components/seo"
import VS from "../images/virtualshop.jpg"
import Vs1 from "../images/asahikawa.png"
import Vs2 from "../images/tokyo.jpg"
import Vs3 from "../images/osaka.png"
import July30main from "../images/main.jpg"
import Gridimg1 from "../images/cl-table.jpg"
import Gridimg2 from "../images/tl-table.jpg"
import Gridimg3 from "../images/wing.jpg"
import Kyobashi from "../images/kyobashi-group.jpg"
import Sadogawa from "../images/sadogawa.jpg"
import Chtop from "../images/chs2020logo.jpg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="motiongraphic">
      <img src={Chtop} alt="CondeHouse Style 2020 JULY" />
    </div>
    <section data="eventinfo" className="chs-intro cap">
      <h3>conde house style <br />2020 July</h3>
      <p>「CONDE HOUSE STYLE 2020 JULY」を開催中です。</p>
      <p>新作・新提案を、7月オンラインにて発表。</p>
      <p>オフィスや家での過ごし方が見直され、生活スタイルや働き方が多様化する現代、<br />カンディハウスはお客さまとともに、より豊かなくらしを考えて参ります。</p>
      <p>国内外含めた世界同時配信にてお届けいたします。ぜひご期待ください。</p>
    </section>
    <section className="series-section">
      <div className="trio-grid bigcap" data-sal="slide-down" data-sal-duration="500" data-sal-delay="500" data-sal-easing="ease">
        <a href="#july30">
          <div>
            <img src={July30main} className="shadows"/>
            <h4>7/31 DEBUT</h4>
            <p>新作テーブル・チェアーを発売</p>
          </div>
        </a>
        <a href="#kotankyobashi">
          <div>
            <img src={Kyobashi} className="shadows"/>
            <h4>7/4 DEBUT</h4>
            <p>新作 Kyobashi / Kotan を発売</p>
          </div>
        </a>
        <a href="#virtualshowroom" alt="link to virtual showroom">
          <div>
            <img src={VS} className="shadows" />
            <h4>Virtual Shop</h4>
            <p>バーチャルショップをオープン</p>
          </div>
        </a>
      </div>
    </section>
    <section data="item-videos" className="items-container" id="kotankyobashi" id="july30">
      <h3 className="redunderbar" data-sal="slide-up" data-sal-duration="500" data-sal-delay="500" data-sal-easing="ease">7/31<span className="dayoftheweek">Fri</span>New Item Debut</h3>
      <p className="july30intro cap">お客さまからのご要望に応え誕生した人気シリーズ「WING LUX」の追加アイテムをはじめ、新アイテムを7月31日に発表・発売いたします。機能にこだわり、心地よい使用感を目指した新作家具をホームユースのみならず公共施設やオフィス、レストラン等幅広い空間にご提案いたします。
      </p>
      <div className="product-box-margin">
        <div className="product-box cap">
          <div className="videobox" data-sal="slide-right" data-sal-duration="500" data-sal-delay="800" data-sal-easing="ease">
            <img src={Gridimg3} alt="new item 7/30" className="shadows" />
          </div>
          <div className="column-text" data-sal="slide-right" data-sal-duration="500" data-sal-delay="800" data-sal-easing="ease">
            <h4><span className="newsicon"></span>WING LUX</h4>
            <a href="https://www.tonerico-inc.com/"><h5>design Kiyoshi Sadogawa</h5></a>
            <p>カンディハウスを代表するチェアー「WING LUX (ウイング ラックス)」に背張りタイプが加わりました。ふくよかな形状の笠木で包まれるような背あたりが人気のアイテムに、さらに長時間心地よく座れるよう、背のクッション性を高めました。</p>
            <a className="brownbutton" href="https://www.condehouse.co.jp/news/tokai-news/newitem202007_2/" alt="Conde House Asahikawa Virtual Shop" target="_blank">製品情報等 詳しくはこちら</a>
          </div>
        </div>
      </div>
      <div>
        <div className="product-box cap">
          <div className="videobox" data-sal="slide-right" data-sal-duration="500" data-sal-delay="500" data-sal-easing="ease">
            <img src={Gridimg1} alt="new item 7/30" className="shadows"/>
          </div>
          <div className="column-text" data-sal="slide-left" data-sal-duration="500" data-sal-delay="800" data-sal-easing="ease">
            <h4><span className="newsicon"></span>CLテーブル</h4>
            <p>角の丸い天板と、先細りした丸脚のデザインが、どこか優しく軽快な新作ダイニングテーブルを発表。天板は長方形と正方形、全52サイズから選べるラインアップが特長で、複数台並べて使うことも想定し緻密にデザインした、機能的なアイテムです。北海道産のタモ材とナラ材を各7色ご用意しました。</p>
            <a className="brownbutton" href="https://www.condehouse.co.jp/products/series/detail.php?series_id=124" alt="Conde House Asahikawa Virtual Shop" target="_blank">製品情報等 詳しくはこちら</a>
          </div>
        </div>
      </div>
      <div className="product-box-margin">
        <div className="product-box cap">
          <div className="videobox" data-sal="slide-right" data-sal-duration="500" data-sal-delay="800" data-sal-easing="ease">
          <img src={Gridimg2} alt="new item 7/30" className="shadows" />
          </div>
          <div className="column-text" data-sal="slide-right" data-sal-duration="500" data-sal-delay="800" data-sal-easing="ease">
            <h4><span className="newsicon"></span>TLテーブル（20）</h4>
            <p>ベンチと組み合わせたときに出入りがしやすく、脚元が広いT字脚の「TLテーブル」を元に無垢天板タイプを新しく発表します。天板は幅を50mm単位で選べる充実のサイズ展開。無垢材の節や木目といった心地よい天然素材の質感をお楽しみいただけます。</p>
            <a className="brownbutton" href="https://www.condehouse.co.jp/products/series/detail.php?series_id=125" alt="Conde House Asahikawa Virtual Shop" target="_blank">製品情報等 詳しくはこちら</a>
          </div>
        </div>
      </div>
    </section>
    <section className="chs-sales">
      <h2 data-sal="slide-down" data-sal-duration="500" data-sal-delay="500" data-sal-easing="ease"><span className="schedule"></span>Event</h2>
      <p className="cap" data-sal="slide-down" data-sal-duration="500" data-sal-delay="500" data-sal-easing="ease">ビジネスクライアントの皆さまに一足早くご紹介するプレビューを開催。WEBセミナーツールを利用し、デザイナーや開発担当者が新作の魅力をお伝えしますので、ぜひご参加ください。イベントの参加受付は定員に達し次第終了させていただきます。</p>
      <div className="lineup cap">
        <div className="event-dates">
          <div data-sal="slide-down" data-sal-duration="500" data-sal-delay="200" data-sal-easing="ease"><h4>7/30 <span>thu</span></h4></div>
          <div data-sal="slide-down" data-sal-duration="500" data-sal-delay="600" data-sal-easing="ease">
            <h4>新作プレビュー for ビジネス</h4>
            <img src={Sadogawa} alt="sadogawa kiyoshi profile picture" className="shadows"/>
            <h4>ゲスト: WING LUXデザイナー 佐戸川 清</h4>
            <h4>全2回<br />1回目 11:00 〜 11:40</h4>
            <a className="brownbutton" alt="July 30 Registration">→　たくさんのご参加ありがとうございました。</a>
            <h4 className="topmargin">2回目 14:00〜14:40</h4>
            <a className="brownbutton" alt="July 30 Afternoon Registration">→　たくさんのご参加ありがとうございました。</a>
            <br />
            <a className="brownbutton" href="/qanda730">当日行われたQ&Aはこちら</a>
          </div>
        </div>
      </div>
    </section>
    <section data="item-videos" className="items-container" id="kotankyobashi">
      <h3 className="redunderbar" data-sal="slide-up" data-sal-duration="500" data-sal-delay="500" data-sal-easing="ease">7/4<span className="dayoftheweek">Sat</span>New Item Debut</h3>
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
            </h4>
            <h4>KYOBASHI・KOTAN プレビュー for ビジネス</h4>
            <h4>【ゲスト出演】米谷ひろし・深澤直人</h4></div>
          <div data-sal="slide-down" data-sal-duration="500" data-sal-delay="400" data-sal-easing="ease"><h4>7/3 <span>fri</span></h4></div>
          <div data-sal="slide-down" data-sal-duration="500" data-sal-delay="800" data-sal-easing="ease">
          <h4>新作・新提案プレゼンテーション for ビジネス</h4>
          <p className="left">→　たくさんのご参加ありがとうございました。</p></div>
          <a className="brownbutton" href="/qanda">当日行われたQ&Aはこちら</a>
        </div>
      </div>
    </section>
    <section className="virtualshop" id="virtualshowroom">
      <img src={ VS } alt="Conde House virtual shop" data-sal="slide-up" data-sal-duration="500" data-sal-delay="500" data-sal-easing="ease" />
      <div className="cap vstext">
        <div className="vstext-box">
          <h3 className="redunderbar" data-sal="slide-up" data-sal-duration="500" data-sal-delay="500" data-sal-easing="ease">Conde House Virtual Shop</h3>
          <p className="topmargin">「CONDE HOUSE バーチャルショップ」がオープンいたしました。お持ちのパソコンやスマートフォンを使用し、ご自宅に居ながらカンディハウスショップをご体感いただけます。</p>
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

      <Link to="/"></Link>
  </Layout>
)

export default IndexPage
