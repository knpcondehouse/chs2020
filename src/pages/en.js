import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout-en"
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
      <h3>CONDE HOUSE style <br />JULY 2020</h3>
      <p>At our annual celebration, we will unveil new products and behind the scene stories. CONDE HOUSE STYLE will take place online for the first time this year.</p>
      <p>We now have such diverse ways to live and work, both at home and in the office. CONDE HOUSE helps you to reimagine and enrich your daily life.</p>
      <p>This online event will be accessible from anywhere. Please join us.</p>
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
            <h5>design TONERICO:INC. <br />Hiroshi Yoneya</h5>
            <p>In January 2020, Artizon Museum, formerly known as Bridgestone Museum, re-opened. CONDE HOUSE is launching a new armchair and side chair based on Artizon's custom chairs, designed by Hiroshi Yoneya (TONERICO:INC). </p>
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
            <h5>design Naoto Fukasawa</h5>
            <p>"KOTAN" is the result of the collaboration between CONDE HOUSE and the well-known product designer Naoto Fukasawa. The aim was to develop "the next generation long-life chair". One year has passed since the launch of the chair and we are now adding new product variations such as a table, high chair, and new materials to diversify the offering.</p>
          </div>
        </div>
      </div>
    </section>
    <section className="chs-sales">
      <h2 data-sal="slide-down" data-sal-duration="500" data-sal-delay="500" data-sal-easing="ease"><span className="schedule"></span>Events</h2>
      <p data-sal="slide-down" data-sal-duration="500" data-sal-delay="500" data-sal-easing="ease" className="cap">New products will be presented, along with designer interviews. The registration form will be added soon. </p>
      <div className="lineup cap">
        <div className="event-dates">
          <div data-sal="slide-down" data-sal-duration="500" data-sal-delay="200" data-sal-easing="ease"><h4>7/2 <span>thu</span></h4></div>
          <div data-sal="slide-down" data-sal-duration="500" data-sal-delay="600" data-sal-easing="ease"><h4>KYOBASHI・KOTAN Preview for Press<br />KYOBASHI・KOTAN Preview for Business<br />
          [Guests] Hiroshi Yoneya and Naoto Fukasawa</h4>
          <p className="left">→　Thank you for your attendence!</p>
          </div>
        </div>
      </div>
    </section>
    <section className="virtualshop">
      <img src={ VS } alt="Conde House virtual shop" />
      <div className="cap vstext">
        <div className="vstext-box">
          <h3>Conde House Virtual Shop</h3>
          <p>Our Virtual Showroom is now open. Experience Conde House Shops on your browser and smartphone from anywhere.</p>
          <p>Our flagship Asahikawa HQ shop has the largest selection of all. You will find items only available here as well as themed contract spaces for office and lounge.</p>
          <p>The Tokyo shop has an extensive collection of art and interior. You can check out our furniture in various settings such as living room, dining room, and bedroom at the Osaka shop.</p>
          <p>Clicking arrows in the virtual showroom will take you to detailed product pages. Don't miss out on this whole new way to experience our products and showrooms.</p>
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
      <p className="cap">We will be adding new product lineups to our popular series, as well as new office items and an overview of "Live Office" in Tokyo.</p>
    </section>
      <Link to="/"></Link>
  </Layout>
)

export default IndexPage
