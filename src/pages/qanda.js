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
          <p className="topmargin">7月2日　KYOBASHI / KOTAN プレビュー、7月3日　新作・新提案プレゼンテーションにていただいたご質問の回答を以下に紹介します。</p>
          <p>デザイナーより、カタログでは語られていない開発エピソードもございますのでぜひ御覧ください。（一部抜粋した内容になります）</p>
          <h4>7月3日開催　KYOBASHI / KOTAN <br />プレビュー for プレス</h4>
          <p className="question"><span className="qicon"></span>新作の点数は？</p>
          <p><span className="aicon"></span>KYOBASHI2点、KOTAN35点（サイズ、座面、天板のバリエーションを含む）チェアー2、スツール2、ハイチェアー3、ハイスツール3、テーブル16、ハイテーブル2、ローテーブル6、ドーリー1</p>
          <p className="question"><span className="qicon"></span>どこで購入できますか？青山のショップだけでしょうか。</p>
          <p><span className="aicon"></span>海外含めて7月4日より発売となります。展示は全国のショップに展開しています（京都を除く）。</p>
          <p className="question"><span className="qicon"></span>深澤さまへ。インタビューにとても楽しそうに答えていらっしゃいますが、開発作業中、カンディハウスとのやりとりで面白かった出来事や会話があれば具体的に教えてください。</p>
          <p><span className="aicon"></span>深澤氏：一番売れている椅子をそのイメージを持ちつつリファインしたのが「KOTAN」。売れているということは、人の気持ちに届いていることなので、そこは崩さずにやろうという気持ちがKOTANを生んだ。自然な感じでうまれたものを、今あらためて見て、よくできたなと思う。開発は旭川の雪景色の中でプロトタイプを見るというのが習わしになっていて、景色のいい検討ルームで見たことのない新作を見るのはいつも感動します。一番難しかったのはテーブルの脚の太さを決めるとき。全部のテーブルに同じサイズの脚をつけることはバランスも悪くなりできないので、1ミリずつその場で削ってもらいながら検討した。工場で一緒に検討していくからできたことです。</p>
          <p>NFD土田氏：元になる椅子からシンプルにしたいというアイデアがあった。座の下のクロスの構造を見せたくなかったが、検討するうちに逆に複雑化してしまった。そこを一歩引くことで構造も改善されどんどん潔くなってきて、見た目のインパクトが出ました。</p>
          <p className="question"><span className="qicon"></span>米谷さまへ。この椅子のデザインを美術館に提案されたとき、美術館からはどのような反応がありましたか？ほかにも、何か美術館とのこの椅子をめぐるやりとりでエピソードがありましたら教えてください。</p>
          <p><span className="aicon"></span>米谷氏：美術館の初期のころは自分のオリジナルでなく、名作椅子をランダムに配置しプレゼンテーションしていた。美術館の完成まで7年かかるなかで、椅子は残り2年切ったくらいで意識をし始めた。空間CGを再提出するときに家具をオリジナルにして考えたのですが、それが意外とすんなり自分たちも美術館にも受け入れてもらえた。非常に恵まれていた。自分の師匠の内田繁さんのスチール製の椅子を木製にしたらいいなと、それを形として受け入れてもらえた。最初から依頼を受けていたらできなかったと思う。サイドチェアーは美術館の形と異なりますが、アームチェアーに付属して生まれてきました。</p>
          <p className="question"><span className="qicon"></span>KOTANの座面の座り心地のこだわりを教えてください。</p>
          <p><span className="aicon"></span>深澤氏：KOTANはオフィスチェアーのように長時間腰掛けるものではない。なので木座とかリノリウム座を使うことができたが、座面をフラットにしてしまうとお尻の骨が痛く衝撃があり、体が違和感を覚えてしまう。座った瞬間とどれくらの時間で体がなれて椅子と調和するかを考えながら座の彫り込みを決めていった。コロナ禍により自宅で椅子に長時間座ることが増えましたが、ほとんどの椅子は耐えられなかった。椅子は大切な生活な道具だなと、特に座を決めることは大切だなと勉強になった。</p>
          <p className="question"><span className="qicon"></span>藤田社長へ。未曽有のコロナ禍の下で発売した、両シリーズの意味合いは？消費者にどんなメッセージを送りたいですか？</p>
          <p><span className="aicon"></span>藤田：開発はコロナ前ですが、ホームユースだけでなく多様な空間に提案したい。KOTANのテーブルは特にφ500からφ1200まで、φ100刻みで8種類展開（ダイニング用）していますし、リノリウムも含めて、テーブルは98種類のカラー組み合わせができます。コントラクトの市場にアピールしていきたい。価格はコロナ禍の中で決めました。あえて品質の割に価格は抑えました。いろんな方につかっていただきたいという思いが強くあります。</p>
          <h4>7月2日開催　KYOBASHI / KOTAN <br />プレビュー for ビジネス</h4>
          <p className="question"><span className="qicon"></span>KYOBASHIは色々な見え方がして美しいですね。特に大空間には連続性が美しい網目のようにみえるのですが、何かデザインの生まれた瞬間のエピソードがあれば教えてください。</p>
          <p><span className="aicon"></span>米谷氏：デザイナーの師匠である内田繁さんの椅子を25年くらい前から使っていた。座り心地が印象的で、背もたれに棒一本がラウンドしているだけだが、いろいろな方向で座り直すことができて、会話も気分も変わるような、他の椅子にはなくて、いつの日かこれを木製でつくりたいと思っていた。それを美術館に落とし込んだ。脚から背もたれにつながるラインは内田さんの椅子には無かったが、自分のなかでそれが連続したらいいだろうな、座ると自然に手でアームを撫でたくなるような、まさに身体感覚に近いものが出来たなと。そこはVTR（デザイナーインタビュー動画）にあったように水平面から下に落ちていく流れが、実は美術館の椅子では唯一ちょっと違和感があったので、それをなんとか徹底的に、商品化に向けて微々たるニュアンスみたいな調整をして今に至った。深澤さんに「これは淀みがなくていいね」と言っていただいて嬉しかったです。</p>
          <h4>7月3日開催　新作・新提案プレゼンテーション <br />for ビジネス / コントラクト</h4>
          <p className="question"><span className="qicon"></span>特注対応の進め方を教えてください。</p>
          <p><span className="aicon"></span>  まずは設計・お客さまが希望する特注家具のイメージやスケッチをご用意ください。カンディハウスでは営業担当者がCADを使って図面を作図します。その後その図面を見ながら打合せをして詳細を決めていき、工場にも協力を仰ぎながら製作まで至ります。</p>
          <p className="question"><span className="qicon"></span>打合せ場所と建築地(納品先)が異なってもスムーズに対応してもらえますか？</p>
          <p><span className="aicon"></span>カンディハウスは全国の主だった主要都市に支店とショップがあります。例えば東京で打合せを行い、建築地(納品先)が地方の場合にはそのエリアを担当する支店の営業が納品・施工を受け持ちますので、打合せから納品までスムーズに進めることが可能です。</p>
          <p className="question"><span className="qicon"></span>カンディハウスの製品は全て北海道産材ですか？</p>
          <p><span className="aicon"></span>新製品の「KYOBASHI」「KOTAN」は北海道産広葉樹を使用しており、現在30シリーズで北海道産材を採用しています。既存の製品も徐々に北海道産広葉樹へ変更していく予定です。ただしウォルナット材は日本に生息していないため、海外からの輸入となります。</p>
          <p className="question"><span className="qicon"></span>カタログ送ってください</p>
          <p><span className="aicon"></span>2020年カタログをお持ちでない方は担当営業か当社HPにてご請求ください。<a href="https://www.condehouse.co.jp/catalogue/request/">こちら</a>からの請求される場合はコンパクト版になります。</p>
          <p className="question"><span className="qicon"></span>納期はどのくらいかかりますか？</p>
          <p><span className="aicon"></span>現在日本全国へ受注から1か月以内の納品を目指しておりますが、現在はコロナの感染拡大により、一部、影響も受けています。今後もできるだけ納期を短縮していく努力を続けます。ただし、コントラクト市場で「椅子50脚」など数量が多い案件や特注家具などの場合には、都度担当営業へ納期はご相談ください。</p>
          <h4>7月3日開催 新作・新提案プレゼンテーション<br />for ビジネス / ホールセール</h4>
          <p className="question"><span className="qicon"></span> ワークショップについて、マルチスツール以外に、何かアイテムをお考えでしょうか？</p>
          <p><span className="aicon"></span>まずはマルチスツールを皮切りにと考えており、ゆくゆくは他の製品も考えていきますが現段階では具体的になっておりません。</p>
          <h4>7月3日開催 新作・新提案プレゼンテーション<br />for ビジネス / ハウジング</h4>
          <p className="question"><span className="qicon"></span>接客ポイントを入れた製品紹介動画はどの製品もご用意があるのでしょうか。</p>
          <p><span className="aicon"></span>人気製品や新作から順に制作を進めています。完成間近のものを含めて20本ほどご用意しております。張地に特化した動画なども、というお声をいただいておりますので、製品以外の動画も検討していきたいと思います。</p>
          <p className="question"><span className="qicon"></span>今回の新作の接客ポイントを入れた製品紹介動画は、配信してもらえますか？</p>
          <p><span className="aicon"></span>KOTANはURLをお送りできます。KYOBASHIは現在制作中となっています。出来上がりましたらお送りします。ぜひ営業担当までお問い合わせください。</p>
          <p className="question"><span className="qicon"></span>コロナ禍で、消毒などを考えるお客さまが増えていますが、御社の家具は消毒・除菌などに対してどのような対応となっていますか。</p>
          <p><span className="aicon"></span><a href="http://www.condehouse.co.jp/contents/manual/corona_maintenance.pdf">こちら</a>資料を御覧ください。</p>
          <p className="question"><span className="qicon"></span>2日のプレビューはどこかで後日配信されますか？</p>
          <p><span className="aicon"></span>配信を予定しております。詳細が決まり次第改めてお知らせいたします。</p>
        </div>
      </div>
    </section>
      <Link to="/"></Link>
  </Layout>
)

export default IndexPage
