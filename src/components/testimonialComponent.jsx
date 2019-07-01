import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";

const options = {
  items: 1,
  nav: true,
  rewind: true,
  autoplay: true
};

class TestimonialComponent extends Component {
  render() {
    return (
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
            <OwlCarousel options={options} oop margin={10} nav>
              <div className="testi_item">
                <div className="row">
                  <div className="col-lg-4">
                    <img src="img/testimonials/t1.jpg" alt="" />
                  </div>
                  <div className="col-lg-8">
                    <div className="testi_text">
                      <h4>Elite Martin</h4>
                      <p>
                        Him, made can't called over won't there on divide there
                        male fish beast own his day third seed sixth seas unto.
                        Saw from{" "}
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
                        Him, made can't called over won't there on divide there
                        male fish beast own his day third seed sixth seas unto.
                        Saw from{" "}
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
                        Him, made can't called over won't there on divide there
                        male fish beast own his day third seed sixth seas unto.
                        Saw from{" "}
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
                        Him, made can't called over won't there on divide there
                        male fish beast own his day third seed sixth seas unto.
                        Saw from{" "}
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
                        Him, made can't called over won't there on divide there
                        male fish beast own his day third seed sixth seas unto.
                        Saw from{" "}
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
                        Him, made can't called over won't there on divide there
                        male fish beast own his day third seed sixth seas unto.
                        Saw from{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
    );
  }
}

export default TestimonialComponent;
