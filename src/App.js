import React, { Component } from "react";
import "./App.css";
import HeaderComponent from "./components/headerComponent";
import HomeComponent from "./components/homeComponent";
import AboutUsComponent from "./components/aboutusComponent";
import BrandComponent from "./components/brandComponent";
import ServiceOffersComponent from "./components/serviceOffersComponent";
import PortfolioComponent from "./components/portfolioComponent";
import NewsLetterComponent from "./components/newsLetterComponent";
import FooterComponent from "./components/footerComponent";
import TestimonialComponent from "./components/testimonialComponent";

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

        <HeaderComponent />
        <HomeComponent />
        <AboutUsComponent />
        <BrandComponent />
        <ServiceOffersComponent />
        <PortfolioComponent />
        <TestimonialComponent />
        <NewsLetterComponent />
        <FooterComponent />
      </div>
    );
  }
}

export default App;
