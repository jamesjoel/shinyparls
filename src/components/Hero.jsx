import React from "react";

const Hero = () => {
  return (
    <div className="tf-slideshow">
      <div
        dir="ltr"
        className="swiper tf-swiper sw-slide-show slider_effect_fade"
        data-auto="true"
        data-loop="true"
        data-effect="fade"
        data-delay="3000"
      >
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="slider_wrap">
              <div className="sld-image">
                <picture>
                  <source
                    media="(max-width: 375px)"
                    srcSet="/assets/images/slider/slider-1-phone.jpg"
                  />
                  <source
                    media="(min-width: 768px)"
                    srcSet="/assets/images/slider/slider-1.jpg"
                  />
                  <img
                    src="/assets/images/slider/slider-1.jpg"
                    alt="Responsive"
                  />
                </picture>
              </div>
              <div className="sld-content">
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      <div className="content-sld">
                        <p className="title-sld lt-sp-t2 font-2 fade-item fade-item-1">
                          <span className="fst-italic">DISCOVER</span>
                          <br className="d-none d-sm-block" />
                          OUR COLLECTION
                        </p>
                        <p className="sub-title-sld fade-item fade-item-2">
                          Make a statement with colors and cuts that stand out.
                          Be bold, be beautiful.
                        </p>
                        <div className="fade-item fade-item-3">
                          <a
                            href="shop-collection-list.html"
                            className="tf-btn btn-fill-white animate-btn animate-dark fw-medium"
                          >
                            Shop Collection
                            <i className="icon-arrow-right fs-24"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sw-dot-default style-white tf-sw-pagination type-sld"></div>
      </div>
    </div>
  );
};

export default Hero;
