import React, { Component } from "react";
import "./App.css";
import HeaderComponent from "./components/headerComponent";
import HomeComponent from "./components/homeComponent";

class App extends Component {
  render() {
    return (
      <div className="App">
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="icon" href="img/favicon.png" type="image/png" />
        <title>Dhaval Modi</title>
        {/* Bootstrap CSS */}
        <link rel="stylesheet" href="css/bootstrap.css" />
        <link rel="stylesheet" href="vendors/linericon/style.css" />
        <link rel="stylesheet" href="css/font-awesome.min.css" />
        <link
          rel="stylesheet"
          href="vendors/owl-carousel/owl.carousel.min.css"
        />
        <link rel="stylesheet" href="css/magnific-popup.css" />
        <link rel="stylesheet" href="vendors/nice-select/css/nice-select.css" />
        {/* main css */}
        <link rel="stylesheet" href="css/style.css" />

        {/*================ Start Header Area =================*/}
        <HeaderComponent />
        {/*================ End Header Area =================*/}

        {/*================ Start Home Banner Area =================*/}
        <HomeComponent />
        {/*================ End Home Banner Area =================*/}

        {/*================ Start About Us Area =================*/}
        <section className="about_area section_gap">
          <div className="container">
            <div className="row justify-content-start align-items-center">
              <div className="col-lg-5">
                <div className="about_img">
                  <img className src="img/about-us.png" alt="" />
                </div>
              </div>
              <div className="offset-lg-2 col-lg-5">
                <div className="main_title text-left">
                  <h2>
                    let’s <br />
                    Introduce about <br />
                    myself
                  </h2>
                  <p>
                    Whose given. Were gathered. There first subdue greater.
                    Bearing you Whales heaven midst their. Beast creepeth. Fish
                    days.
                  </p>
                  <p>
                    Is give may shall likeness made yielding spirit a itself
                    together created after sea is in beast beginning signs open
                    god you're gathering whose gathered cattle let. Creature
                    whales fruit unto meat the life beginning all in under give
                    two.
                  </p>
                  <a className="primary_btn" href="/files/temp_cv.jpg" download>
                    <span>Download CV</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*================ End About Us Area =================*/}
        {/*================ Srart Brand Area =================*/}
        <section className="brand_area section_gap_bottom">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-sm-6">
                    <div className="single-brand-item d-table">
                      <div className="d-table-cell text-center">
                        <img src="img/brands/logo1.png" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-6">
                    <div className="single-brand-item d-table">
                      <div className="d-table-cell text-center">
                        <img src="img/brands/logo2.png" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-6">
                    <div className="single-brand-item d-table">
                      <div className="d-table-cell text-center">
                        <img src="img/brands/logo3.png" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-6">
                    <div className="single-brand-item d-table">
                      <div className="d-table-cell text-center">
                        <img src="img/brands/logo4.png" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-6">
                    <div className="single-brand-item d-table">
                      <div className="d-table-cell text-center">
                        <img src="img/brands/logo5.png" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-6">
                    <div className="single-brand-item d-table">
                      <div className="d-table-cell text-center">
                        <img src="img/brands/logo6.png" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-6">
                    <div className="single-brand-item d-table">
                      <div className="d-table-cell text-center">
                        <img src="img/brands/logo7.png" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-6">
                    <div className="single-brand-item d-table">
                      <div className="d-table-cell text-center">
                        <img src="img/brands/logo8.png" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-6">
                    <div className="single-brand-item d-table">
                      <div className="d-table-cell text-center">
                        <img src="img/brands/logo9.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="offset-lg-2 col-lg-4 col-md-6">
                <div className="client-info">
                  <div className="d-flex mb-50">
                    <span className="lage">10</span>
                    <span className="smll">Years Experience Working</span>
                  </div>
                  <div className="call-now d-flex">
                    <div>
                      <span className="fa fa-phone" />
                    </div>
                    <div className="ml-15">
                      <p>call us now</p>
                      <h3>(+1)-800-555-6789</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*================ End Brand Area =================*/}
        {/*================ Start Features Area =================*/}
        <section className="features_area">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <div className="main_title">
                  <h2>service offers </h2>
                  <p>
                    Is give may shall likeness made yielding spirit a itself
                    togeth created after sea <br /> is in beast beginning signs
                    open god you're gathering ithe
                  </p>
                </div>
              </div>
            </div>
            <div className="row feature_inner">
              <div className="col-lg-3 col-md-6">
                <div className="feature_item">
                  <img src="img/services/s1.png" alt="" />
                  <h4>Wp developing</h4>
                  <p>
                    Creeping for female light years that lesser can't evening
                    heaven isn't bearing tree
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="feature_item">
                  <img src="img/services/s2.png" alt="" />
                  <h4>UI/ux design</h4>
                  <p>
                    Creeping for female light years that lesser can't evening
                    heaven isn't bearing tree
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="feature_item">
                  <img src="img/services/s3.png" alt="" />
                  <h4>Web design</h4>
                  <p>
                    Creeping for female light years that lesser can't evening
                    heaven isn't bearing tree
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="feature_item">
                  <img src="img/services/s4.png" alt="" />
                  <h4>seo optimize</h4>
                  <p>
                    Creeping for female light years that lesser can't evening
                    heaven isn't bearing tree
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*================ End Features Area =================*/}
        {/*================Start Portfolio Area =================*/}
        <section className="portfolio_area" id="portfolio">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="main_title text-left">
                  <h2>
                    quality work <br />
                    Recently done project{" "}
                  </h2>
                </div>
              </div>
            </div>
            <div className="filters portfolio-filter">
              <ul>
                <li className="active" data-filter="*">
                  all
                </li>
                <li data-filter=".popular">popular</li>
                <li data-filter=".latest"> latest</li>
                <li data-filter=".following">following</li>
                <li data-filter=".upcoming">upcoming</li>
              </ul>
            </div>
            <div className="filters-content">
              <div className="row portfolio-grid justify-content-center">
                <div className="col-lg-4 col-md-6 all latest">
                  <div className="portfolio_box">
                    <div className="single_portfolio">
                      <img
                        className="img-fluid w-100"
                        src="img/portfolio/p1.jpg"
                        alt=""
                      />
                      <div className="overlay" />
                      <a href="img/portfolio/p1.jpg" className="img-gal">
                        <div className="icon">
                          <span className="lnr lnr-cross" />
                        </div>
                      </a>
                    </div>
                    <div className="short_info">
                      <h4>
                        <a href="portfolio-details.html">minimal design</a>
                      </h4>
                      <p>Animated, portfolio</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 all popular">
                  <div className="portfolio_box">
                    <div className="single_portfolio">
                      <img
                        className="img-fluid w-100"
                        src="img/portfolio/p2.jpg"
                        alt=""
                      />
                      <div className="overlay" />
                      <a href="img/portfolio/p2.jpg" className="img-gal">
                        <div className="icon">
                          <span className="lnr lnr-cross" />
                        </div>
                      </a>
                    </div>
                    <div className="short_info">
                      <h4>
                        <a href="portfolio-details.html">Paint wall</a>
                      </h4>
                      <p>Animated, portfolio</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 all latest">
                  <div className="portfolio_box">
                    <div className="single_portfolio">
                      <img
                        className="img-fluid w-100"
                        src="img/portfolio/p3.jpg"
                        alt=""
                      />
                      <div className="overlay" />
                      <a href="img/portfolio/p3.jpg" className="img-gal">
                        <div className="icon">
                          <span className="lnr lnr-cross" />
                        </div>
                      </a>
                    </div>
                    <div className="short_info">
                      <h4>
                        <a href="portfolio-details.html">female light</a>
                      </h4>
                      <p>Animated, portfolio</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 all popular">
                  <div className="portfolio_box">
                    <div className="single_portfolio">
                      <img
                        className="img-fluid w-100"
                        src="img/portfolio/p4.jpg"
                        alt=""
                      />
                      <div className="overlay" />
                      <a href="img/portfolio/p4.jpg" className="img-gal">
                        <div className="icon">
                          <span className="lnr lnr-cross" />
                        </div>
                      </a>
                    </div>
                    <div className="short_info">
                      <h4>
                        <a href="portfolio-details.html">fourth air</a>
                      </h4>
                      <p>Animated, portfolio</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 all following">
                  <div className="portfolio_box">
                    <div className="single_portfolio">
                      <img
                        className="img-fluid w-100"
                        src="img/portfolio/p6.jpg"
                        alt=""
                      />
                      <div className="overlay" />
                      <a href="img/portfolio/p5.jpg" className="img-gal">
                        <div className="icon">
                          <span className="lnr lnr-cross" />
                        </div>
                      </a>
                    </div>
                    <div className="short_info">
                      <h4>
                        <a href="portfolio-details.html">together sign</a>
                      </h4>
                      <p>Animated, portfolio</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 all upcoming">
                  <div className="portfolio_box">
                    <div className="single_portfolio">
                      <img
                        className="img-fluid w-100"
                        src="img/portfolio/p5.jpg"
                        alt=""
                      />
                      <div className="overlay" />
                      <a href="img/portfolio/p6.jpg" className="img-gal">
                        <div className="icon">
                          <span className="lnr lnr-cross" />
                        </div>
                      </a>
                    </div>
                    <div className="short_info">
                      <h4>
                        <a href="portfolio-details.html">multiply fowl</a>
                      </h4>
                      <p>Animated, portfolio</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 all upcoming following">
                  <div className="portfolio_box">
                    <div className="single_portfolio">
                      <img
                        className="img-fluid w-100"
                        src="img/portfolio/p7.jpg"
                        alt=""
                      />
                      <div className="overlay" />
                      <a href="img/portfolio/p7.jpg" className="img-gal">
                        <div className="icon">
                          <span className="lnr lnr-cross" />
                        </div>
                      </a>
                    </div>
                    <div className="short_info">
                      <h4>
                        <a href="portfolio-details.html">green heaven</a>
                      </h4>
                      <p>Animated, portfolio</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 all following">
                  <div className="portfolio_box">
                    <div className="single_portfolio">
                      <img
                        className="img-fluid w-100"
                        src="img/portfolio/p8.jpg"
                        alt=""
                      />
                      <div className="overlay" />
                      <a href="img/portfolio/p8.jpg" className="img-gal">
                        <div className="icon">
                          <span className="lnr lnr-cross" />
                        </div>
                      </a>
                    </div>
                    <div className="short_info">
                      <h4>fly male</h4>
                      <p>Animated, portfolio</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 all upcoming">
                  <div className="portfolio_box">
                    <div className="single_portfolio">
                      <img
                        className="img-fluid w-100"
                        src="img/portfolio/p9.jpg"
                        alt=""
                      />
                      <div className="overlay" />
                      <a href="img/portfolio/p9.jpg" className="img-gal">
                        <div className="icon">
                          <span className="lnr lnr-cross" />
                        </div>
                      </a>
                    </div>
                    <div className="short_info">
                      <h4>
                        <a href="portfolio-details.html">season face</a>
                      </h4>
                      <p>Animated, portfolio</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*================End Portfolio Area =================*/}
        {/*================ Start Testimonial Area =================*/}
        <div className="testimonial_area section_gap_bottom">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <div className="main_title">
                  <h2>client say about me</h2>
                  <p>
                    Is give may shall likeness made yielding spirit a itself
                    togeth created after sea is in beast <br />
                    beginning signs open god you're gathering ithe
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="testi_slider owl-carousel">
                <div className="testi_item">
                  <div className="row">
                    <div className="col-lg-4">
                      <img src="img/testimonials/t1.jpg" alt="" />
                    </div>
                    <div className="col-lg-8">
                      <div className="testi_text">
                        <h4>Elite Martin</h4>
                        <p>
                          Him, made can't called over won't there on divide
                          there male fish beast own his day third seed sixth
                          seas unto. Saw from{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="testi_item">
                  <div className="row">
                    <div className="col-lg-4">
                      <img src="img/testimonials/t2.jpg" alt="" />
                    </div>
                    <div className="col-lg-8">
                      <div className="testi_text">
                        <h4>Davil Saden</h4>
                        <p>
                          Him, made can't called over won't there on divide
                          there male fish beast own his day third seed sixth
                          seas unto. Saw from{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="testi_item">
                  <div className="row">
                    <div className="col-lg-4">
                      <img src="img/testimonials/t1.jpg" alt="" />
                    </div>
                    <div className="col-lg-8">
                      <div className="testi_text">
                        <h4>Elite Martin</h4>
                        <p>
                          Him, made can't called over won't there on divide
                          there male fish beast own his day third seed sixth
                          seas unto. Saw from{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="testi_item">
                  <div className="row">
                    <div className="col-lg-4">
                      <img src="img/testimonials/t2.jpg" alt="" />
                    </div>
                    <div className="col-lg-8">
                      <div className="testi_text">
                        <h4>Davil Saden</h4>
                        <p>
                          Him, made can't called over won't there on divide
                          there male fish beast own his day third seed sixth
                          seas unto. Saw from{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="testi_item">
                  <div className="row">
                    <div className="col-lg-4">
                      <img src="img/testimonials/t1.jpg" alt="" />
                    </div>
                    <div className="col-lg-8">
                      <div className="testi_text">
                        <h4>Elite Martin</h4>
                        <p>
                          Him, made can't called over won't there on divide
                          there male fish beast own his day third seed sixth
                          seas unto. Saw from{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="testi_item">
                  <div className="row">
                    <div className="col-lg-4">
                      <img src="img/testimonials/t2.jpg" alt="" />
                    </div>
                    <div className="col-lg-8">
                      <div className="testi_text">
                        <h4>Davil Saden</h4>
                        <p>
                          Him, made can't called over won't there on divide
                          there male fish beast own his day third seed sixth
                          seas unto. Saw from{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*================ End Testimonial Area =================*/}
        {/*================ Start Newsletter Area =================*/}
        <section className="newsletter_area">
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-12">
                <div className="subscription_box text-center">
                  <h2 className="text-uppercase text-white">
                    get update from anywhere
                  </h2>
                  <p className="text-white">
                    Bearing Void gathering light light his eavening unto dont
                    afraid.
                  </p>
                  <div className="subcribe-form" id="mc_embed_signup">
                    <form
                      target="/#"
                      noValidate="true"
                      action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&id=92a4423d01"
                      method="get"
                      className="subscription relative"
                    >
                      <input
                        name="EMAIL"
                        placeholder="Email address"
                        onFocus="this.placeholder = ''"
                        onBlur="this.placeholder = 'Email address'"
                        required
                        type="email"
                      />
                      <div style={{ position: "absolute", left: "-5000px" }}>
                        <input
                          name="b_36c4fd991d266f23781ded980_aefe40901a"
                          tabIndex={-1}
                          defaultValue
                          type="text"
                        />
                      </div>
                      <button className="primary-btn hover d-inline">
                        Get Started
                      </button>
                      <div className="info" />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*================ End Newsletter Area =================*/}
        {/*================Footer Area =================*/}
        <footer className="footer_area">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <div className="footer_top flex-column">
                  <div className="footer_logo">
                    <a href="/#">
                      <img src="img/logo.png" alt="" />
                    </a>
                    <h4>Follow Me</h4>
                  </div>
                  <div className="footer_social">
                    <a href="/#">
                      <i className="fa fa-facebook" />
                    </a>
                    <a href="/#">
                      <i className="fa fa-twitter" />
                    </a>
                    <a href="/#">
                      <i className="fa fa-dribbble" />
                    </a>
                    <a href="/#">
                      <i className="fa fa-behance" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row footer_bottom justify-content-center">
              <p className="col-lg-8 col-sm-12 footer-text">
                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                Copyright © All rights reserved | This template is made with{" "}
                <i className="fa fa-heart-o" aria-hidden="true" /> by{" "}
                <a href="https://colorlib.com" target="/#">
                  Colorlib
                </a>
                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
              </p>
            </div>
          </div>
        </footer>
        {/*================End Footer Area =================*/}
        {/* Optional JavaScript */}
        {/* jQuery first, then Popper.js, then Bootstrap JS */}
        {/*gmaps Js*/}
      </div>
    );
  }
}

export default App;
