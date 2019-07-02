import React, { Component } from "react";

class HomeComponent extends Component {
  render() {
    return (
      <section className="home_banner_area">
        <div className="banner_inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <div className="banner_content">
                  <h3 className="text-uppercase">Hell0</h3>
                  <h1 className="text-uppercase">I am dhaval modi</h1>
                  <h5 className="text-uppercase">
                    senior web application developer
                  </h5>
                  <div className="d-flex align-items-center">
                    <a className="primary_btn" href="/#">
                      <span>Hire Me</span>
                    </a>
                    <a
                      className="primary_btn tr-bg"
                      href="/files/Dhaval_Resume.pdf"
                      download
                    >
                      <span>Get CV</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="home_right_img">
                  <img
                    style={{ width: "140%" }}
                    src="img/banner/home-right.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default HomeComponent;
