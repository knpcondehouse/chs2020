import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout-en"
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
            <iframe width="100%" height="450px" src="https://www.youtube.com/embed/QBK5QDbKooE?showinfo=0&controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
            <iframe width="100%" height="450px" src="https://www.youtube.com/embed/3yY202EaS-o?showinfo=0&controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
          <div data-sal="slide-down" data-sal-duration="500" data-sal-delay="600" data-sal-easing="ease"><h4>KYOBASHI・KOTAN Preview for Press<br />KYOBASHI・KOTAN Preview for Business<br />[Guests] Hiroshi Yoneya and Naoto Fukasawa</h4></div>
          <div data-sal="slide-down" data-sal-duration="500" data-sal-delay="400" data-sal-easing="ease"><h4>7/3 <span>fri</span></h4></div>
          <div data-sal="slide-down" data-sal-duration="500" data-sal-delay="800" data-sal-easing="ease"><h4>New product and Proposition Presentation for Business</h4></div>
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
