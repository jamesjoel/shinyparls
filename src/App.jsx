import React from "react";


const App = () => {
  return (
    <>
      {/* <!-- Scroll Top --> */}
      <button id="goTop">
        <span className="border-progress"></span>
        <span className="icon icon-arrow-right-2"></span>
      </button>

      {/* <!-- preload --> */}
      {/* <div className="preload preload-container" id="preload">
        <div className="preload-logo">
          <div className="spinner"></div>
        </div>
      </div> */}
      {/* <!-- /preload --> */}

      <div id="wrapper">
        {/* <!-- Top Bar--> */}
        <div className="tf-topbar bg-main px-0">
          <div className="topbar-inner type-sp-2">
            {/* <!-- 1 --> */}
            <div className="infiniteItem">
              <p className="text-white text-caption-3 text-uppercase fw-medium">
                Free Shipping on All Orders Over $200
              </p>
            </div>
            <span className="br-line w-24 bg-white"></span>
            <div className="infiniteItem">
              <p className="text-white text-caption-3 text-uppercase fw-medium">
                VIP Members Get Extra Discounts –
                <a
                  href="#"
                  className="link text-white text-decoration-underline"
                >
                  Join Today!
                </a>
              </p>
            </div>
            <span className="br-line w-24 bg-white"></span>
            <div className="infiniteItem">
              <p className="text-white text-caption-3 text-uppercase fw-medium">
                Hassle-Free Returns on All Orders
              </p>
            </div>
            <span className="br-line w-24 bg-white"></span>
            {/* <!-- 2 --> */}
            <div className="infiniteItem">
              <p className="text-white text-caption-3 text-uppercase fw-medium">
                Free Shipping on All Orders Over $200
              </p>
            </div>
            <span className="br-line w-24 bg-white"></span>
            <div className="infiniteItem">
              <p className="text-white text-caption-3 text-uppercase fw-medium">
                VIP Members Get Extra Discounts –
                <a
                  href="#"
                  className="link text-white text-decoration-underline"
                >
                  Join Today!
                </a>
              </p>
            </div>
            <span className="br-line w-24 bg-white"></span>
            <div className="infiniteItem">
              <p className="text-white text-caption-3 text-uppercase fw-medium">
                Hassle-Free Returns on All Orders
              </p>
            </div>
            <span className="br-line w-24 bg-white"></span>
          </div>
        </div>
        {/* <!-- /Top Bar -->

      <!-- Header --> */}
        <header className="tf-header style-2 header-absolute">
          <div className="header-top">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-4 col-3 d-xl-none">
                  <a
                    href="#mobileMenu"
                    data-bs-toggle="offcanvas"
                    className="btn-mobile-menu"
                  >
                    <span></span>
                  </a>
                </div>
                <div className="col-xl-3 d-none d-xl-block">
                  <div className="header-right">
                    <div className="tf-currencies">
                      <select className="tf-dropdown-select style-default type-currencies">
                        <option>United States (USD $)</option>
                        <option>France (EUR €)</option>
                        <option>Germany (EUR €)</option>
                        <option>Vietnam (VND ₫)</option>
                      </select>
                    </div>
                    <div className="tf-languages">
                      <select className="tf-dropdown-select style-default type-languages">
                        <option>English</option>
                        <option>العربية</option>
                        <option>简体中文</option>
                        <option>اردو</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-md-4 col-6">
                  <a
                    href="index.html"
                    className="logo-site justify-content-center w-100"
                  >
                    <img
                      src="/assets/images/logo/logo.svg"
                      alt=""
                      className="logo-black"
                    />
                    <img
                      src="/assets/images/logo/logo-white.svg"
                      alt=""
                      className="logo-white"
                    />
                  </a>
                </div>
                <div className="col-xl-3 col-md-4 col-3">
                  <ul className="nav-icon">
                    <li className="d-inline-flex">
                      <a
                        href="#search"
                        data-bs-toggle="offcanvas"
                        className="nav-icon-item text-black link"
                      >
                        <i className="icon icon-search"></i>
                      </a>
                    </li>
                    <li className="br-line d-none d-xl-flex"></li>
                    <li className="d-none d-md-inline-flex">
                      <a
                        href="#log"
                        data-bs-toggle="modal"
                        className="nav-icon-item text-black link"
                      >
                        <i className="icon icon-user"></i>
                      </a>
                    </li>
                    <li className="d-none d-md-inline-flex">
                      <a
                        href="wishlist.html"
                        className="nav-icon-item text-black link"
                      >
                        <i className="icon icon-hearth"></i>
                      </a>
                    </li>
                    <li className="d-inline-flex">
                      <a
                        href="#shoppingCart"
                        data-bs-toggle="offcanvas"
                        className="nav-icon-item text-black link"
                      >
                        <i className="icon icon-cart"></i>
                        <span className="count-notice"></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="header-bottom d-none d-xl-block">
            <div className="container">
              <nav className="box-navigation">
                <ul className="box-nav-menu justify-content-start">
                  <li className="menu-item active">
                    <a href="javascript:void(0)" className="item-link">
                      Home<i className="icon icon-arrow-angle-down"></i>
                    </a>
                    <div className="sub-menu mega-home start-0">
                      <ul className="row-demo">
                        <li className="demo-item">
                          <a href="index.html">
                            <div className="demo-image relative">
                              <img
                                src="/assets/images/demo/home-1.jpg"
                                data-src="/assets/images/demo/home-1.jpg"
                                alt=""
                                className="lazyload"
                              />
                            </div>
                            <p className="demo-name">
                              HOMEPAGE 1<span className="demo-label">Hot</span>
                            </p>
                          </a>
                        </li>
                        <li className="demo-item active">
                          <a href="home-2.html">
                            <div className="demo-image relative">
                              <img
                                src="/assets/images/demo/home-2.jpg"
                                data-src="/assets/images/demo/home-2.jpg"
                                alt=""
                                className="lazyload"
                              />
                            </div>
                            <p className="demo-name">
                              HOMEPAGE 2<span className="demo-label">Hot</span>
                            </p>
                          </a>
                        </li>
                        <li className="demo-item">
                          <a href="home-3.html">
                            <div className="demo-image relative">
                              <img
                                src="/assets/images/demo/home-3.jpg"
                                data-src="/assets/images/demo/home-3.jpg"
                                alt=""
                                className="lazyload"
                              />
                            </div>
                            <p className="demo-name">HOMEPAGE 3</p>
                          </a>
                        </li>
                        <li className="demo-item">
                          <a href="home-4.html">
                            <div className="demo-image relative">
                              <img
                                src="/assets/images/demo/home-4.jpg"
                                data-src="/assets/images/demo/home-4.jpg"
                                alt=""
                                className="lazyload"
                              />
                            </div>
                            <p className="demo-name">HOMEPAGE 4</p>
                          </a>
                        </li>
                        <li className="demo-item">
                          <a href="home-5.html">
                            <div className="demo-image relative">
                              <img
                                src="assets/images/demo/home-5.jpg"
                                data-src="assets/images/demo/home-5.jpg"
                                alt=""
                                className="lazyload"
                              />
                            </div>
                            <p className="demo-name">
                              HOMEPAGE 5
                              <span className="demo-label type-new">New</span>
                            </p>
                          </a>
                        </li>
                        <li className="demo-item">
                          <a href="home-6.html">
                            <div className="demo-image relative">
                              <img
                                src="/assets/images/demo/home-6.jpg"
                                data-src="/assets/images/demo/home-6.jpg"
                                alt=""
                                className="lazyload"
                              />
                            </div>
                            <p className="demo-name">
                              HOMEPAGE 6
                              <span className="demo-label type-new">New</span>
                            </p>
                          </a>
                        </li>
                      </ul>
                      <p className="font-2 text-coming">
                        MORE ARE <span className="text-primary">COMING</span>{" "}
                        SOON...
                      </p>
                    </div>
                  </li>
                  <li className="menu-item">
                    <a href="javascript:void(0)" className="item-link">
                      Shop<i className="icon icon-arrow-angle-down"></i>
                    </a>
                    <div className="sub-menu mega-menu container-layout-right mega-menu-shop mega-menu-style-2">
                      <div className="mega-menu-wrap">
                        <div className="wrapper-sub-menu">
                          <div className="mega-menu-item">
                            <p className="text-caption menu-heading">
                              SHOP LAYOUT
                            </p>
                            <ul className="menu-list">
                              <li>
                                <a
                                  href="shop-default.html"
                                  className="menu-link-text link"
                                >
                                  Default
                                </a>
                              </li>
                              <li>
                                <a
                                  href="shop-left-sidebar.html"
                                  className="menu-link-text link"
                                >
                                  Filter Left Sidebar
                                </a>
                              </li>
                              <li>
                                <a
                                  href="shop-right-sidebar.html"
                                  className="menu-link-text link"
                                >
                                  Filter Right Sidebar
                                </a>
                              </li>
                              <li>
                                <a
                                  href="shop-filter-top.html"
                                  className="menu-link-text link"
                                >
                                  Filter Top
                                </a>
                              </li>
                              <li>
                                <a
                                  href="shop-default.html"
                                  className="menu-link-text link"
                                >
                                  Filter Drawer
                                </a>
                              </li>
                              <li>
                                <a
                                  href="shop-collection-list.html"
                                  className="menu-link-text link"
                                >
                                  Collection List
                                </a>
                              </li>
                              <li>
                                <a
                                  href="shop-sub-collection.html"
                                  className="menu-link-text link"
                                >
                                  Sub Collection
                                </a>
                              </li>
                              <li>
                                <a
                                  href="shop-grid-2-columns.html"
                                  className="menu-link-text link"
                                >
                                  Grid 2 Collumns
                                </a>
                              </li>
                              <li>
                                <a
                                  href="shop-grid-3-columns.html"
                                  className="menu-link-text link"
                                >
                                  Grid 3 Collumns
                                </a>
                              </li>
                              <li>
                                <a
                                  href="shop-grid-4-columns.html"
                                  className="menu-link-text link"
                                >
                                  Grid 4 Collumns
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="mega-menu-item">
                            <p className="text-caption menu-heading">
                              SHOP LIST
                            </p>
                            <ul className="menu-list">
                              <li>
                                <a
                                  href="shop-default.html"
                                  className="menu-link-text link"
                                >
                                  Pagination Links
                                </a>
                              </li>
                              <li>
                                <a
                                  href="shop-load-more-button.html"
                                  className="menu-link-text link"
                                >
                                  Load More Button
                                </a>
                              </li>
                              <li>
                                <a
                                  href="shop-infinity-scroll.html"
                                  className="menu-link-text link"
                                >
                                  Infinity Scroll
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="wrapper-sub-collection">
                          <div className="box_image--V01 h-100 hover-img">
                            <div className="image h-100 img-style">
                              <img
                                src="assets/images/collections/cls-header.jpg"
                                data-src="/assets/images/collections/cls-header.jpg"
                                alt=""
                                className="lazyload"
                              />
                            </div>
                            <div className="content">
                              <h5 className="box-text fw-medium text-white">
                                <span>Flash Sale</span>
                                <span className="br-line w-22 bg-white d-block"></span>
                                <span>30% OFF</span>
                              </h5>
                              <div className="box-btn">
                                <a
                                  href="shop-collection-list.html"
                                  className="tf-btn-line style-white text-uppercase"
                                >
                                  <span className="text-caption lh-28">
                                    Shop Now
                                  </span>
                                  <i className="icon-arrow-top-right-2 fs-10"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="menu-item">
                    <a href="javascript:void(0)" className="item-link">
                      Products
                      <i className="icon icon-arrow-angle-down"></i>
                    </a>
                    <div className="sub-menu mega-menu mega-menu-product">
                      <div className="container-layout-right">
                        <div className="mega-menu-wrap">
                          <div className="wrapper-sub-menu">
                            <div className="mega-menu-item">
                              <p className="text-caption menu-heading">
                                PRODUCT LAYOUT
                              </p>
                              <ul className="menu-list">
                                <li>
                                  <a
                                    href="product-default.html"
                                    className="menu-link-text link"
                                  >
                                    Product Default
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="product-default.html"
                                    className="menu-link-text link"
                                  >
                                    Product Style 1
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="product-style-02.html"
                                    className="menu-link-text link"
                                  >
                                    Product Style 2
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="product-style-03.html"
                                    className="menu-link-text link"
                                  >
                                    Product Style 3
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="product-style-04.html"
                                    className="menu-link-text link"
                                  >
                                    Product Style 4
                                    <span className="demo-label">Hot</span>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="product-style-05.html"
                                    className="menu-link-text link"
                                  >
                                    Product Style 5
                                    <span className="demo-label type-trend">
                                      Trending
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="product-style-04-no-size.html"
                                    className="menu-link-text link"
                                  >
                                    Product No Size
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="product-style-04-engrave.html"
                                    className="menu-link-text link"
                                  >
                                    Product Engrave
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="mega-menu-item">
                              <p className="text-caption menu-heading">
                                PRODUCT DESCRIPTION
                              </p>
                              <ul className="menu-list">
                                <li>
                                  <a
                                    href="product-description-side-dropdown.html"
                                    className="menu-link-text link"
                                  >
                                    Description Side Dropdown
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="product-description-full-accordion.html"
                                    className="menu-link-text link"
                                  >
                                    Description Full Accordions
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="product-description-side-drawer.html"
                                    className="menu-link-text link"
                                  >
                                    Description Side Drawer
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="mega-menu-item">
                              <p className="text-caption menu-heading">
                                PRODUCT DETAILS
                              </p>
                              <ul className="menu-list">
                                <li>
                                  <a
                                    href="product-inner-zoom.html"
                                    className="menu-link-text link"
                                  >
                                    Product Inner Zoom
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="product-inner-circle-zoom.html"
                                    className="menu-link-text link"
                                  >
                                    Product Inner Circle Zoom
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="product-no-zoom.html"
                                    className="menu-link-text link"
                                  >
                                    Product No Zoom
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="product-video.html"
                                    className="menu-link-text link"
                                  >
                                    Product Video
                                    <span className="demo-label type-trend">
                                      Trending
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="product-3d.html"
                                    className="menu-link-text link"
                                  >
                                    Product 3D/AR
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="mega-menu-item">
                              <p className="text-caption menu-heading">
                                PRODUCT FEATURES
                              </p>
                              <ul className="menu-list">
                                <li>
                                  <a
                                    href="product-pickup-available.html"
                                    className="menu-link-text link"
                                  >
                                    Pickup Available
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="product-swatch-image.html"
                                    className="menu-link-text link"
                                  >
                                    Swatch Image
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="product-together.html"
                                    className="menu-link-text link"
                                  >
                                    Buy Together
                                    <span className="demo-label type-new">
                                      New
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="product-size-guide.html"
                                    className="menu-link-text link"
                                  >
                                    Size Guide
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="product-engrave-option.html"
                                    className="menu-link-text link"
                                  >
                                    Engrave Option
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="wrapper-sub-collection">
                            <div className="card_product--V01">
                              <div className="card_product-wrapper aspect-ratio-1">
                                <a
                                  href="product-default.html"
                                  className="product-img"
                                >
                                  <img
                                    src="assets/images/products/product-28.jpg"
                                    data-src="assets/images/products/product-28.jpg"
                                    alt="Image Product"
                                    className="lazyload img-product"
                                  />
                                  <img
                                    src="assets/images/products/product-29.jpg"
                                    data-src="assets/images/products/product-29.jpg"
                                    alt="Image Product"
                                    className="lazyload img-hover"
                                  />
                                </a>
                                <ul className="list-product-btn center">
                                  <li>
                                    <a
                                      href="#quickView"
                                      data-bs-toggle="modal"
                                      className="hover-tooltip box-icon quickview"
                                    >
                                      <span className="icon icon-view"></span>
                                      <span className="tooltip">
                                        Quick View
                                      </span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="card_product-info">
                                <a
                                  href="product-default.html"
                                  className="name-product h5 fw-normal link text-line-clamp-2"
                                >
                                  Engagement Ring in 18k Yellow Gold
                                </a>
                                <div className="price-wrap">
                                  <span className="price-new h5">
                                    $2,499.00
                                  </span>
                                  <span className="price-old fw-normal">
                                    $2,899.00
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="card_product--V01">
                              <div className="card_product-wrapper aspect-ratio-1">
                                <a
                                  href="product-default.html"
                                  className="product-img"
                                >
                                  <img
                                    src="assets/images/products/product-20.jpg"
                                    data-src="assets/images/products/product-20.jpg"
                                    alt="Image Product"
                                    className="lazyload img-product"
                                  />
                                  <img
                                    src="assets/images/products/product-21.jpg"
                                    data-src="assets/images/products/product-21.jpg"
                                    alt="Image Product"
                                    className="lazyload img-hover"
                                  />
                                </a>
                                <ul className="list-product-btn center">
                                  <li>
                                    <a
                                      href="#quickView"
                                      data-bs-toggle="modal"
                                      className="hover-tooltip box-icon quickview"
                                    >
                                      <span className="icon icon-view"></span>
                                      <span className="tooltip">
                                        Quick View
                                      </span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="card_product-info">
                                <a
                                  href="product-default.html"
                                  className="name-product h5 fw-normal link text-line-clamp-2"
                                >
                                  Organically Shaped Heart Bangle
                                </a>
                                <div className="price-wrap">
                                  <span className="price-new h5">
                                    $2,499.00
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="menu-item">
                    <a href="javascript:void(0)" className="item-link">
                      Pages
                      <i className="icon icon-arrow-angle-down"></i>
                    </a>
                    <div className="sub-menu mega-menu mega-menu-page container-layout-right mega-menu-style-2">
                      <div className="mega-menu-wrap">
                        <div className="wrapper-sub-menu">
                          <div className="mega-menu-item">
                            <p className="text-caption menu-heading">PAGES</p>
                            <ul className="menu-list">
                              <li>
                                <a
                                  href="about-us.html"
                                  className="menu-link-text link"
                                >
                                  About Us
                                </a>
                              </li>
                              <li>
                                <a
                                  href="contact-us.html"
                                  className="menu-link-text link"
                                >
                                  Contact Us
                                </a>
                              </li>
                              <li>
                                <a
                                  href="our-store.html"
                                  className="menu-link-text link"
                                >
                                  Store Location
                                </a>
                              </li>
                              <li>
                                <a
                                  href="account-page.html"
                                  className="menu-link-text link"
                                >
                                  My Account
                                </a>
                              </li>
                              <li>
                                <a
                                  href="faq.html"
                                  className="menu-link-text link"
                                >
                                  FAQ
                                </a>
                              </li>
                              <li>
                                <a
                                  href="shop-cart.html"
                                  className="menu-link-text link"
                                >
                                  Cart Page
                                </a>
                              </li>
                              <li>
                                <a
                                  href="before-you-leave.html"
                                  className="menu-link-text link"
                                >
                                  Before You Leave
                                </a>
                              </li>
                              <li>
                                <a
                                  href="product-popup.html"
                                  className="menu-link-text link"
                                >
                                  Products Popup
                                </a>
                              </li>
                              <li>
                                <a
                                  href="newspaper-popup.html"
                                  className="menu-link-text link"
                                >
                                  Newspaper Popup
                                </a>
                              </li>
                              <li>
                                <a
                                  href="404.html"
                                  className="menu-link-text link"
                                >
                                  404
                                </a>
                              </li>
                              <li>
                                <a
                                  href="coming-soon.html"
                                  className="menu-link-text link"
                                >
                                  Coming Soon!
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="wrapper-sub-collection gap-0">
                          <div className="box_image--V01 h-100 hover-img">
                            <div className="image h-100 img-style">
                              <img
                                src="assets/images/collections/cls-header-2.jpg"
                                data-src="assets/images/collections/cls-header-2.jpg"
                                alt=""
                                className="lazyload"
                              />
                            </div>
                            <div className="content">
                              <h5 className="box-text fw-medium text-white">
                                Most Gifted
                              </h5>
                              <div className="box-btn">
                                <a
                                  href="shop-collection-list.html"
                                  className="tf-btn-line style-white text-uppercase"
                                >
                                  <span className="text-caption lh-28">
                                    Shop Now
                                  </span>
                                  <i className="icon-arrow-top-right-2 fs-10"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="box_image--V01 h-100 hover-img">
                            <div className="image h-100 img-style">
                              <img
                                src="assets/images/collections/cls-header-3.jpg"
                                data-src="assets/images/collections/cls-header-3.jpg"
                                alt=""
                                className="lazyload"
                              />
                            </div>
                            <div className="content">
                              <h5 className="box-text fw-medium text-white">
                                <span>Flash Sale</span>
                                <span className="br-line w-22 bg-white d-block"></span>
                                <span>30% OFF</span>
                              </h5>
                              <div className="box-btn">
                                <a
                                  href="shop-collection-list.html"
                                  className="tf-btn-line style-white text-uppercase"
                                >
                                  <span className="text-caption lh-28">
                                    Shop Now
                                  </span>
                                  <i className="icon-arrow-top-right-2 fs-10"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="menu-item position-relative">
                    <a href="javascript:void(0)" className="item-link">
                      Blogs
                      <i className="icon icon-arrow-angle-down"></i>
                    </a>
                    <div className="sub-menu">
                      <div className="mega-menu-item">
                        <p className="text-caption menu-heading">BLOGS</p>
                        <ul className="menu-list">
                          <li>
                            <a
                              href="blog-list-style-1.html"
                              className="menu-link-text link"
                            >
                              Blog List Style 1
                            </a>
                          </li>
                          <li>
                            <a
                              href="blog-list-style-2.html"
                              className="menu-link-text link"
                            >
                              Blog List Style 2
                            </a>
                          </li>
                          <li>
                            <a
                              href="blog-single.html"
                              className="menu-link-text link"
                            >
                              Single Post
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
        {/* <!-- /Header -->
      <!-- Banner Slider --> */}
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
              {/* <!-- item 1 --> */}
              <div className="swiper-slide">
                <div className="slider_wrap">
                  <div className="sld-image">
                    <img
                      src="assets/images/slider/slider-1.jpg"
                      data-src="assets/images/slider/slider-1.jpg"
                      alt=""
                      className="lazyload"
                    />
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
                              Make a statement with colors and cuts that stand
                              out. Be bold, be beautiful.
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
              {/* <!-- item 2 --> */}
              <div className="swiper-slide">
                <div className="slider_wrap">
                  <div className="sld-image">
                    <img
                      src="assets/images/slider/slider-2.jpg"
                      data-src="assets/images/slider/slider-2.jpg"
                      alt=""
                      className="lazyload"
                    />
                  </div>
                  <div className="sld-content">
                    <div className="container">
                      <div className="row">
                        <div className="col-12">
                          <div className="content-sld">
                            <p className="title-sld lt-sp-t2 font-2 fade-item fade-item-1">
                              <span className="fst-italic">CRAFTED</span>
                              <br className="d-none d-sm-block" />
                              TO DAZZLE
                            </p>
                            <p className="sub-title-sld fade-item fade-item-2">
                              Make a statement with colors and cuts that stand
                              out. Be bold, be beautiful.
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
              {/* <!-- item 3 --> */}
              <div className="swiper-slide">
                <div className="slider_wrap">
                  <div className="sld-image">
                    <img
                      src="assets/images/slider/slider-3.jpg"
                      data-src="assets/images/slider/slider-3.jpg"
                      alt=""
                      className="lazyload"
                    />
                  </div>
                  <div className="sld-content">
                    <div className="container">
                      <div className="row">
                        <div className="col-12">
                          <div className="content-sld">
                            <p className="title-sld lt-sp-t2 font-2 fade-item fade-item-1">
                              <span className="fst-italic">TIMELESS</span>
                              <br className="d-none d-sm-block" />
                              SPARKLE
                            </p>
                            <p className="sub-title-sld fade-item fade-item-2">
                              Make a statement with colors and cuts that stand
                              out. Be bold, be beautiful.
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
        {/* <!-- /Banner Slider -->
      <!-- Category --> */}
        <section className="flat-spacing-3">
          <div className="container">
            <div className="sect-top center text-center wow fadeInUp">
              <h2 className="s-title font-2">
                <span className="fst-italic">Our</span> Categories
              </h2>
              <p className="s-sub-title">
                Explore our collection of sophisticated, modern designs that
                make a statement without saying a word.
                <br className="d-none d-xl-block" />
                Find your signature look today.
              </p>
            </div>
            <div
              dir="ltr"
              className="swiper tf-swiper max-width_1 wow fadeInUp"
              data-preview="6"
              data-tablet="4"
              data-mobile-sm="3"
              data-mobile="2"
              data-space-lg="64"
              data-space-md="30"
              data-space="15"
              data-pagination="2"
              data-pagination-sm="3"
              data-pagination-md="4"
              data-pagination-lg="6"
            >
              <div className="swiper-wrapper">
                {/* <!-- item 1 --> */}
                <div className="swiper-slide">
                  <a
                    href="shop-collection-list.html"
                    className="box_collection--V01 style_2 hover-img"
                  >
                    <div className="image img-style">
                      <img
                        src="assets/images/collections/cls-18.jpg"
                        data-src="assets/images/collections/cls-18.jpg"
                        alt=""
                        className="ls-is-cached lazyloaded"
                      />
                    </div>
                    <h5 className="name-cls link fw-normal">NEW IN</h5>
                  </a>
                </div>
                {/* <!-- item 2 --> */}
                <div className="swiper-slide">
                  <a
                    href="shop-collection-list.html"
                    className="box_collection--V01 style_2 hover-img"
                  >
                    <div className="image img-style">
                      <img
                        src="assets/images/collections/cls-19.jpg"
                        data-src="assets/images/collections/cls-19.jpg"
                        alt=""
                        className="ls-is-cached lazyloaded"
                      />
                    </div>
                    <h5 className="name-cls link fw-normal">BRACELETS</h5>
                  </a>
                </div>
                {/* <!-- item 3 --> */}
                <div className="swiper-slide">
                  <a
                    href="shop-collection-list.html"
                    className="box_collection--V01 style_2 hover-img"
                  >
                    <div className="image img-style">
                      <img
                        src="assets/images/collections/cls-20.jpg"
                        data-src="assets/images/collections/cls-20.jpg"
                        alt=""
                        className="ls-is-cached lazyloaded"
                      />
                    </div>
                    <h5 className="name-cls link fw-normal">EARRINGS</h5>
                  </a>
                </div>
                {/* <!-- item 4 --> */}
                <div className="swiper-slide">
                  <a
                    href="shop-collection-list.html"
                    className="box_collection--V01 style_2 hover-img"
                  >
                    <div className="image img-style">
                      <img
                        src="/assets/images/collections/cls-21.jpg"
                        data-src="/assets/images/collections/cls-21.jpg"
                        alt=""
                        className="ls-is-cached lazyloaded"
                      />
                    </div>
                    <h5 className="name-cls link fw-normal">RINGS</h5>
                  </a>
                </div>
                {/* <!-- item 5 --> */}
                <div className="swiper-slide">
                  <a
                    href="shop-collection-list.html"
                    className="box_collection--V01 style_2 hover-img"
                  >
                    <div className="image img-style">
                      <img
                        src="/assets/images/collections/cls-22.jpg"
                        data-src="/assets/images/collections/cls-22.jpg"
                        alt=""
                        className="ls-is-cached lazyloaded"
                      />
                    </div>
                    <h5 className="name-cls link fw-normal">NECKLACES</h5>
                  </a>
                </div>
                {/* <!-- item 6 --> */}
                <div className="swiper-slide">
                  <a
                    href="shop-collection-list.html"
                    className="box_collection--V01 style_2 hover-img"
                  >
                    <div className="image img-style">
                      <img
                        src="assets/images/collections/cls-34.png"
                        data-src="assets/images/collections/cls-34.png"
                        alt=""
                        className="ls-is-cached lazyloaded"
                      />
                    </div>
                    <h5 className="name-cls link fw-normal">GIFT IDEAS</h5>
                  </a>
                </div>
              </div>
              <div className="sw-dot-default tf-sw-pagination"></div>
            </div>
          </div>
        </section>
        {/* <!-- /Category -->
      <!-- Best Seller --> */}
        <section className="flat-spacing-6 bg-dark-brown">
          <div className="container">
            <div className="sect-top center text-center wow fadeInUp">
              <h2 className="s-title font-2 text-white">
                SHOP OUR BEST <span className="fst-italic">SELLERS</span>
              </h2>
              <p className="s-sub-title text-white">
                Discover the pieces our customers adore – from timeless everyday
                jewelry to bold statement designs that shine. These are the
                <br className="d-none d-xl-block" />
                tried-and-true favorites you’ll want in your collection."
              </p>
            </div>
            <div className="tf-btn-swiper-item wow fadeInUp">
              <div
                dir="ltr"
                className="swiper tf-swiper"
                data-preview="4"
                data-tablet="3"
                data-mobile-sm="2"
                data-mobile="2"
                data-space-lg="30"
                data-space-md="20"
                data-space="15"
                data-pagination="2"
                data-pagination-sm="2"
                data-pagination-md="3"
                data-pagination-lg="4"
              >
                <div className="swiper-wrapper">
                  {/* <!-- item 1 --> */}
                  <div className="swiper-slide">
                    <div className="card_product--V01 type-space-35">
                      <div className="card_product-wrapper">
                        <a href="product-default.html" className="product-img">
                          <img
                            src="assets/images/products/product-39.jpg"
                            data-src="assets/images/products/product-39.jpg"
                            alt="Image Product"
                            className="lazyload img-product"
                          />
                          <img
                            src="assets/images/products/product-40.jpg"
                            data-src="assets/images/products/product-40.jpg"
                            alt="Image Product"
                            className="lazyload img-hover"
                          />
                        </a>
                        <ul className="list-product-btn">
                          <li className="wishlist">
                            <a
                              href="javascript:void(0);"
                              className="hover-tooltip tooltip-left box-icon"
                            >
                              <span className="icon icon-heart-2"></span>
                              <span className="tooltip">Add to Wishlist</span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#quickAdd"
                              data-bs-toggle="modal"
                              className="hover-tooltip tooltip-left box-icon"
                            >
                              <span className="icon icon-shop-cart"></span>
                              <span className="tooltip">Quick Add</span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#quickView"
                              data-bs-toggle="modal"
                              className="hover-tooltip tooltip-left box-icon quickview"
                            >
                              <span className="icon icon-view"></span>
                              <span className="tooltip">Quick View</span>
                            </a>
                          </li>
                          <li className="compare">
                            <a
                              href="#compare"
                              data-bs-toggle="modal"
                              aria-controls="compare"
                              className="hover-tooltip tooltip-left box-icon"
                            >
                              <span className="icon icon-compare"></span>
                              <span className="tooltip">Add to Compare</span>
                            </a>
                          </li>
                        </ul>
                        <div className="badge-box">
                          <span className="badge-item new">NEW IN</span>
                        </div>
                        <div className="variant-box">
                          <p className="size-box text-center text-caption">
                            3 sizes are available
                          </p>
                        </div>
                      </div>
                      <div className="card_product-info">
                        <a
                          href="product-default.html"
                          className="name-product h5 fw-normal text-white link text-line-clamp-2"
                        >
                          Oval Yellow Diamond Double Halo Engagement Ring
                        </a>
                        <div className="price-wrap style-white">
                          <span className="price-new h5">$3,370.00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- item 2 --> */}
                  <div className="swiper-slide">
                    <div className="card_product--V01 type-space-35">
                      <div className="card_product-wrapper">
                        <a href="product-default.html" className="product-img">
                          <img
                            src="assets/images/products/product-41.jpg"
                            data-src="assets/images/products/product-41.jpg"
                            alt="Image Product"
                            className="lazyload img-product"
                          />
                          <img
                            src="assets/images/products/product-42.jpg"
                            data-src="assets/images/products/product-42.jpg"
                            alt="Image Product"
                            className="lazyload img-hover"
                          />
                        </a>
                        <ul className="list-product-btn">
                          <li className="wishlist">
                            <a
                              href="javascript:void(0);"
                              className="hover-tooltip tooltip-left box-icon"
                            >
                              <span className="icon icon-heart-2"></span>
                              <span className="tooltip">Add to Wishlist</span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#shoppingCart"
                              data-bs-toggle="offcanvas"
                              className="hover-tooltip tooltip-left box-icon"
                            >
                              <span className="icon icon-shop-cart"></span>
                              <span className="tooltip">Add to Cart</span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#quickView"
                              data-bs-toggle="modal"
                              className="hover-tooltip tooltip-left box-icon quickview"
                            >
                              <span className="icon icon-view"></span>
                              <span className="tooltip">Quick View</span>
                            </a>
                          </li>
                          <li className="compare">
                            <a
                              href="#compare"
                              data-bs-toggle="modal"
                              aria-controls="compare"
                              className="hover-tooltip tooltip-left box-icon"
                            >
                              <span className="icon icon-compare"></span>
                              <span className="tooltip">Add to Compare</span>
                            </a>
                          </li>
                        </ul>
                        <div className="badge-box">
                          <span className="badge-item sale">30% OFF</span>
                        </div>
                        <div className="variant-box count-down">
                          <div className="countdown-V02">
                            <div
                              className="js-countdown"
                              data-timer="993299"
                              data-labels="d : ,h : ,m : ,s"
                            ></div>
                          </div>
                        </div>
                      </div>
                      <div className="card_product-info">
                        <a
                          href="product-default.html"
                          className="name-product h5 fw-normal text-white link text-line-clamp-2"
                        >
                          Small Earrings In Gold with Diamond
                        </a>
                        <div className="price-wrap style-white">
                          <span className="price-new h5 text-secondary-4">
                            $3,370.00
                          </span>
                          <span className="price-old fw-normal">$3,899.00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- item 3 --> */}
                  <div className="swiper-slide">
                    <div className="card_product--V01 type-space-35">
                      <div className="card_product-wrapper">
                        <a href="product-default.html" className="product-img">
                          <img
                            src="assets/images/products/product-43.jpg"
                            data-src="assets/images/products/product-43.jpg"
                            alt="Image Product"
                            className="lazyload img-product"
                          />
                          <img
                            src="assets/images/products/product-44.jpg"
                            data-src="assets/images/products/product-44.jpg"
                            alt="Image Product"
                            className="lazyload img-hover"
                          />
                        </a>
                        <ul className="list-product-btn">
                          <li className="wishlist">
                            <a
                              href="javascript:void(0);"
                              className="hover-tooltip tooltip-left box-icon"
                            >
                              <span className="icon icon-heart-2"></span>
                              <span className="tooltip">Add to Wishlist</span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#shoppingCart"
                              data-bs-toggle="offcanvas"
                              className="hover-tooltip tooltip-left box-icon"
                            >
                              <span className="icon icon-shop-cart"></span>
                              <span className="tooltip">Add to Cart</span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#quickView"
                              data-bs-toggle="modal"
                              className="hover-tooltip tooltip-left box-icon quickview"
                            >
                              <span className="icon icon-view"></span>
                              <span className="tooltip">Quick View</span>
                            </a>
                          </li>
                          <li className="compare">
                            <a
                              href="#compare"
                              data-bs-toggle="modal"
                              aria-controls="compare"
                              className="hover-tooltip tooltip-left box-icon"
                            >
                              <span className="icon icon-compare"></span>
                              <span className="tooltip">Add to Compare</span>
                            </a>
                          </li>
                        </ul>
                        <div className="badge-box">
                          <span className="badge-item sale">30% OFF</span>
                        </div>
                        <div className="variant-box bg-primary">
                          <div
                            className="marquee-sale type-2"
                            data-clone="3"
                          >
                            {/* <!-- clone 1 --> */}
                            <p className="text-caption text-white">30% OFF</p>
                            <i className="icon-thunder text-white"></i>
                            {/* <!-- clone 2 --> */}
                            <p className="text-caption text-white">
                              Selling fast
                            </p>
                            <i className="icon-thunder text-white"></i>
                            {/* <!-- clone 3 --> */}
                            <p className="text-caption text-white">30% OFF</p>
                            <i className="icon-thunder text-white"></i>
                            {/* <!-- clone 4 --> */}
                            <p className="text-caption text-white">
                              Selling fast
                            </p>
                            <i className="icon-thunder text-white"></i>
                            {/* <!-- clone 5 --> */}
                            <p className="text-caption text-white">30% OFF</p>
                            <i className="icon-thunder text-white"></i>
                            {/* <!-- clone 6 --> */}
                            <p className="text-caption text-white">
                              Selling fast
                            </p>
                            <i className="icon-thunder text-white"></i>
                          </div>
                        </div>
                      </div>
                      <div className="card_product-info">
                        <a
                          href="product-default.html"
                          className="name-product h5 fw-normal text-white link text-line-clamp-2"
                        >
                          Sixteen Stone Narrow Earrings
                        </a>
                        <div className="price-wrap style-white">
                          <span className="price-new h5 text-secondary-4">
                            $2,499.00
                          </span>
                          <span className="price-old fw-normal">$2,899.00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- item 4 --> */}
                  <div className="swiper-slide">
                    <div className="card_product--V01 type-space-35 out-of-stock">
                      <div className="card_product-wrapper">
                        <a
                          href="product-notify-avaiable.html"
                          className="product-img"
                        >
                          <img
                            src="assets/images/products/product-45.jpg"
                            data-src="assets/images/products/product-45.jpg"
                            alt="Image Product"
                            className="lazyload img-product"
                          />
                          <img
                            src="assets/images/products/product-46.jpg"
                            data-src="assets/images/products/product-46.jpg"
                            alt="Image Product"
                            className="lazyload img-hover"
                          />
                        </a>
                        <a
                          href="#unavailable"
                          data-bs-toggle="modal"
                          className="variant-box stock bg-main link text-white"
                        >
                          <p className="text-center d-none d-md-block">
                            Notify Me When Available
                          </p>
                          <p className="text-center d-md-none">Notify Me</p>
                        </a>
                      </div>
                      <div className="card_product-info">
                        <a
                          href="product-notify-avaiable.html"
                          className="name-product text-white h5 fw-normal link text-line-clamp-2"
                        >
                          Sparkling Moon & Star Stud Earrings
                        </a>
                        <div className="price-wrap style-white">
                          <span className="price-new h5">$2,499.00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- item 5 --> */}
                  <div className="swiper-slide">
                    <div className="card_product--V01 type-space-35">
                      <div className="card_product-wrapper">
                        <a href="product-default.html" className="product-img">
                          <img
                            src="assets/images/products/product-39.jpg"
                            data-src="assets/images/products/product-39.jpg"
                            alt="Image Product"
                            className="lazyload img-product"
                          />
                          <img
                            src="assets/images/products/product-40.jpg"
                            data-src="assets/images/products/product-40.jpg"
                            alt="Image Product"
                            className="lazyload img-hover"
                          />
                        </a>
                        <ul className="list-product-btn">
                          <li className="wishlist">
                            <a
                              href="javascript:void(0);"
                              className="hover-tooltip tooltip-left box-icon"
                            >
                              <span className="icon icon-heart-2"></span>
                              <span className="tooltip">Add to Wishlist</span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#quickAdd"
                              data-bs-toggle="modal"
                              className="hover-tooltip tooltip-left box-icon"
                            >
                              <span className="icon icon-shop-cart"></span>
                              <span className="tooltip">Quick Add</span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#quickView"
                              data-bs-toggle="modal"
                              className="hover-tooltip tooltip-left box-icon quickview"
                            >
                              <span className="icon icon-view"></span>
                              <span className="tooltip">Quick View</span>
                            </a>
                          </li>
                          <li className="compare">
                            <a
                              href="#compare"
                              data-bs-toggle="modal"
                              aria-controls="compare"
                              className="hover-tooltip tooltip-left box-icon"
                            >
                              <span className="icon icon-compare"></span>
                              <span className="tooltip">Add to Compare</span>
                            </a>
                          </li>
                        </ul>
                        <div className="badge-box">
                          <span className="badge-item new">NEW IN</span>
                        </div>
                        <div className="variant-box">
                          <p className="size-box text-center text-caption">
                            3 sizes are available
                          </p>
                        </div>
                      </div>
                      <div className="card_product-info">
                        <a
                          href="product-default.html"
                          className="name-product h5 fw-normal text-white link text-line-clamp-2"
                        >
                          Emerald-cut Halo Engagement Ring with a Diamond
                          Platinum Band
                        </a>
                        <div className="price-wrap style-white">
                          <span className="price-new h5">$3,370.00</span>
                          <span className="price-old fw-normal">$3,899.00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sw-dot-default tf-sw-pagination style-white d-xl-none"></div>
              </div>
              <div className="nav-swiper nav-prev-swiper d-none d-xl-flex">
                <i className="icon-arrow-left"></i>
              </div>
              <div className="nav-swiper nav-next-swiper d-none d-xl-flex">
                <i className="icon-arrow-right"></i>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- /Best Seller -->
      <!-- Collection --> */}
        <div className="flat-spacing-3">
          <div className="container">
            <p className="s-title-2 font-2 text-center text-lg-end letter-space-0 wow fadeInLeft">
              <span>Inspired</span> STYLE <br />
              FOR EVERY <span>Seasons</span>
            </p>
            <div className="cls-wrap">
              <a
                href="shop-collection-list.html"
                className="box_collection--V02 hover-img wow fadeInUp"
              >
                <div className="image img-style">
                  <img
                    src="assets/images/collections/season-1.jpg"
                    data-src="assets/images/collections/season-1.jpg"
                    alt=""
                    className="lazyload"
                  />
                </div>
                <div className="tf-btn btn-line has-icon link">
                  <p className="name-cls fw-normal">GIFT UNDER $200</p>
                  <i className="ic-2 icon-arrow-top-right"></i>
                </div>
              </a>
              <a
                href="shop-collection-list.html"
                className="box_collection--V02 hover-img wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="image img-style">
                  <img
                    src="assets/images/collections/season-2.jpg"
                    data-src="assets/images/collections/season-2.jpg"
                    alt=""
                    className="lazyload"
                  />
                </div>
                <div className="tf-btn btn-line has-icon link">
                  <p className="name-cls fw-normal">NEW IN</p>
                  <i className="ic-2 icon-arrow-top-right"></i>
                </div>
              </a>
              <a
                href="shop-collection-list.html"
                className="box_collection--V02 hover-img wow fadeInUp"
              >
                <div className="image img-style">
                  <img
                    src="assets/images/collections/season-3.jpg"
                    data-src="assets/images/collections/season-3.jpg"
                    alt=""
                    className="lazyload"
                  />
                </div>
                <div className="tf-btn btn-line has-icon link">
                  <p className="name-cls fw-normal">PERSONALISED</p>
                  <i className="ic-2 icon-arrow-top-right"></i>
                </div>
              </a>
              <a
                href="shop-collection-list.html"
                className="box_collection--V02 hover-img wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="image img-style">
                  <img
                    src="assets/images/collections/season-4.jpg"
                    data-src="assets/images/collections/season-4.jpg"
                    alt=""
                    className="lazyload"
                  />
                </div>
                <div className="tf-btn btn-line has-icon link">
                  <p className="name-cls fw-normal">BEST SELLERS</p>
                  <i className="ic-2 icon-arrow-top-right"></i>
                </div>
              </a>
              <a
                href="shop-collection-list.html"
                className="box_collection--V02 hover-img wow fadeInUp"
              >
                <div className="image img-style">
                  <img
                    src="assets/images/collections/season-5.jpg"
                    data-src="assets/images/collections/season-5.jpg"
                    alt=""
                    className="lazyload"
                  />
                </div>
                <div className="tf-btn btn-line has-icon link">
                  <p className="name-cls fw-normal">JUST FOR YOU</p>
                  <i className="ic-2 icon-arrow-top-right"></i>
                </div>
              </a>
              <a
                href="shop-collection-list.html"
                className="box_collection--V02 hover-img wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="image img-style">
                  <img
                    src="assets/images/collections/season-6.jpg"
                    data-src="assets/images/collections/season-6.jpg"
                    alt=""
                    className="lazyload"
                  />
                </div>
                <div className="tf-btn btn-line has-icon link">
                  <p className="name-cls fw-normal">WEDDING</p>
                  <i className="ic-2 icon-arrow-top-right"></i>
                </div>
              </a>
            </div>
          </div>
        </div>
        {/* <!-- /Collection -->
      <!-- Trendy --> */}
        <section className="flat-spacing-6 pt-0">
          <div className="container">
            <div className="sect-top center text-center wow fadeInUp">
              <h2 className="s-title font-2">
                <span className="fst-italic">Trendy</span> COLLECTION
              </h2>
              <p className="s-sub-title">
                Discover the pieces our customers love most – from everyday
                essentials to statement styles that stand out. These are the
                <br className="d-none d-xl-block" />
                tried-and-true picks you’ll want in your wardrobe."
              </p>
            </div>
            <div className="tf-btn-swiper-item wow fadeInUp">
              <div
                dir="ltr"
                className="swiper tf-swiper"
                data-preview="4"
                data-tablet="3"
                data-mobile-sm="2"
                data-mobile="2"
                data-space-lg="30"
                data-space-md="20"
                data-space="15"
                data-pagination="2"
                data-pagination-sm="2"
                data-pagination-md="3"
                data-pagination-lg="4"
              >
                <div className="swiper-wrapper">
                  {/* <!-- item 1 --> */}
                  <div className="swiper-slide">
                    <div className="card_product--V01 type-space-35">
                      <div className="card_product-wrapper">
                        <a href="product-default.html" className="product-img">
                          <img
                            src="assets/images/products/product-52.jpg"
                            data-src="assets/images/products/product-52.jpg"
                            alt="Image Product"
                            className="lazyload img-product"
                          />
                          <img
                            src="assets/images/products/product-51.jpg"
                            data-src="assets/images/products/product-51.jpg"
                            alt="Image Product"
                            className="lazyload img-hover"
                          />
                        </a>
                        <ul className="list-product-btn">
                          <li className="wishlist">
                            <a
                              href="javascript:void(0);"
                              className="hover-tooltip tooltip-left box-icon"
                            >
                              <span className="icon icon-heart-2"></span>
                              <span className="tooltip">Add to Wishlist</span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#shoppingCart"
                              data-bs-toggle="offcanvas"
                              className="hover-tooltip tooltip-left box-icon"
                            >
                              <span className="icon icon-shop-cart"></span>
                              <span className="tooltip">Add to Cart</span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#quickView"
                              data-bs-toggle="modal"
                              className="hover-tooltip tooltip-left box-icon quickview"
                            >
                              <span className="icon icon-view"></span>
                              <span className="tooltip">Quick View</span>
                            </a>
                          </li>
                          <li className="compare">
                            <a
                              href="#compare"
                              data-bs-toggle="modal"
                              aria-controls="compare"
                              className="hover-tooltip tooltip-left box-icon"
                            >
                              <span className="icon icon-compare"></span>
                              <span className="tooltip">Add to Compare</span>
                            </a>
                          </li>
                        </ul>
                        <div className="badge-box">
                          <span className="badge-item new">NEW IN</span>
                        </div>
                      </div>
                      <div className="card_product-info">
                        <a
                          href="product-default.html"
                          className="name-product h5 fw-normal link text-line-clamp-2"
                        >
                          Dança Ring
                        </a>
                        <div className="price-wrap">
                          <span className="price-new h5 text-secondary-4">
                            $3,370.00
                          </span>
                          <span className="price-old fw-normal">$3,899.00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- item 2 --> */}
                  <div className="swiper-slide">
                    <div className="card_product--V01 type-space-35">
                      <div className="card_product-wrapper">
                        <a href="product-default.html" className="product-img">
                          <img
                            src="assets/images/products/product-28.jpg"
                            data-src="assets/images/products/product-28.jpg"
                            alt="Image Product"
                            className="lazyload img-product"
                          />
                          <img
                            src="assets/images/products/product-29.jpg"
                            data-src="assets/images/products/product-29.jpg"
                            alt="Image Product"
                            className="lazyload img-hover"
                          />
                        </a>
                        <ul className="list-product-btn">
                          <li className="wishlist">
                            <a
                              href="javascript:void(0);"
                              className="hover-tooltip tooltip-left box-icon"
                            >
                              <span className="icon icon-heart-2"></span>
                              <span className="tooltip">Add to Wishlist</span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#shoppingCart"
                              data-bs-toggle="offcanvas"
                              className="hover-tooltip tooltip-left box-icon"
                            >
                              <span className="icon icon-shop-cart"></span>
                              <span className="tooltip">Add to Cart</span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#quickView"
                              data-bs-toggle="modal"
                              className="hover-tooltip tooltip-left box-icon quickview"
                            >
                              <span className="icon icon-view"></span>
                              <span className="tooltip">Quick View</span>
                            </a>
                          </li>
                          <li className="compare">
                            <a
                              href="#compare"
                              data-bs-toggle="modal"
                              aria-controls="compare"
                              className="hover-tooltip tooltip-left box-icon"
                            >
                              <span className="icon icon-compare"></span>
                              <span className="tooltip">Add to Compare</span>
                            </a>
                          </li>
                        </ul>
                        <div className="badge-box">
                          <span className="badge-item sale">30% OFF</span>
                        </div>
                      </div>
                      <div className="card_product-info">
                        <a
                          href="product-default.html"
                          className="name-product h5 fw-normal link text-line-clamp-2"
                        >
                          Engagement Ring in 18k Yellow Gold
                        </a>
                        <div className="price-wrap">
                          <span className="price-new h5">$3,370.00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- item 3 --> */}
                  <div className="swiper-slide">
                    <div className="card_product--V01 type-space-35">
                      <div className="card_product-wrapper">
                        <a href="product-default.html" className="product-img">
                          <img
                            src="assets/images/products/product-50.jpg"
                            data-src="assets/images/products/product-50.jpg"
                            alt="Image Product"
                            className="lazyload img-product"
                          />
                          <img
                            src="assets/images/products/product-50.jpg"
                            data-src="assets/images/products/product-50.jpg"
                            alt="Image Product"
                            className="lazyload img-hover"
                          />
                        </a>
                        <ul className="list-product-btn">
                          <li className="wishlist">
                            <a
                              href="javascript:void(0);"
                              className="hover-tooltip tooltip-left box-icon"
                            >
                              <span className="icon icon-heart-2"></span>
                              <span className="tooltip">Add to Wishlist</span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#shoppingCart"
                              data-bs-toggle="offcanvas"
                              className="hover-tooltip tooltip-left box-icon"
                            >
                              <span className="icon icon-shop-cart"></span>
                              <span className="tooltip">Add to Cart</span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#quickView"
                              data-bs-toggle="modal"
                              className="hover-tooltip tooltip-left box-icon quickview"
                            >
                              <span className="icon icon-view"></span>
                              <span className="tooltip">Quick View</span>
                            </a>
                          </li>
                          <li className="compare">
                            <a
                              href="#compare"
                              data-bs-toggle="modal"
                              aria-controls="compare"
                              className="hover-tooltip tooltip-left box-icon"
                            >
                              <span className="icon icon-compare"></span>
                              <span className="tooltip">Add to Compare</span>
                            </a>
                          </li>
                        </ul>
                        <div className="badge-box">
                          <span className="badge-item sale">30% OFF</span>
                        </div>
                      </div>
                      <div className="card_product-info">
                        <a
                          href="product-default.html"
                          className="name-product h5 fw-normal link text-line-clamp-2"
                        >
                          Teardrop Earrings
                        </a>
                        <div className="price-wrap">
                          <span className="price-new h5 text-secondary-4">
                            $2,499.00
                          </span>
                          <span className="price-old fw-normal">$2,899.00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- item 4 --> */}
                  <div className="swiper-slide">
                    <div className="card_product--V01 type-space-35">
                      <div className="card_product-wrapper">
                        <a href="product-default.html" className="product-img">
                          <img
                            src="assets/images/products/product-41.jpg"
                            data-src="assets/images/products/product-41.jpg"
                            alt="Image Product"
                            className="lazyload img-product"
                          />
                          <img
                            src="assets/images/products/product-42.jpg"
                            data-src="assets/images/products/product-42.jpg"
                            alt="Image Product"
                            className="lazyload img-hover"
                          />
                        </a>
                        <ul className="list-product-btn">
                          <li className="wishlist">
                            <a
                              href="javascript:void(0);"
                              className="hover-tooltip tooltip-left box-icon"
                            >
                              <span className="icon icon-heart-2"></span>
                              <span className="tooltip">Add to Wishlist</span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#shoppingCart"
                              data-bs-toggle="offcanvas"
                              className="hover-tooltip tooltip-left box-icon"
                            >
                              <span className="icon icon-shop-cart"></span>
                              <span className="tooltip">Add to Cart</span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#quickView"
                              data-bs-toggle="modal"
                              className="hover-tooltip tooltip-left box-icon quickview"
                            >
                              <span className="icon icon-view"></span>
                              <span className="tooltip">Quick View</span>
                            </a>
                          </li>
                          <li className="compare">
                            <a
                              href="#compare"
                              data-bs-toggle="modal"
                              aria-controls="compare"
                              className="hover-tooltip tooltip-left box-icon"
                            >
                              <span className="icon icon-compare"></span>
                              <span className="tooltip">Add to Compare</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="card_product-info">
                        <a
                          href="product-default.html"
                          className="name-product h5 fw-normal link text-line-clamp-2"
                        >
                          White Sapphire Ring in 10K White Gold
                        </a>
                        <div className="price-wrap">
                          <span className="price-new h5">$3,370.00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- item 5 --> */}
                  <div className="swiper-slide">
                    <div className="card_product--V01 type-space-35">
                      <div className="card_product-wrapper">
                        <a href="product-default.html" className="product-img">
                          <img
                            src="assets/images/products/product-52.jpg"
                            data-src="assets/images/products/product-52.jpg"
                            alt="Image Product"
                            className="lazyload img-product"
                          />
                          <img
                            src="assets/images/products/product-51.jpg"
                            data-src="assets/images/products/product-51.jpg"
                            alt="Image Product"
                            className="lazyload img-hover"
                          />
                        </a>
                        <ul className="list-product-btn">
                          <li className="wishlist">
                            <a
                              href="javascript:void(0);"
                              className="hover-tooltip tooltip-left box-icon"
                            >
                              <span className="icon icon-heart-2"></span>
                              <span className="tooltip">Add to Wishlist</span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#shoppingCart"
                              data-bs-toggle="offcanvas"
                              className="hover-tooltip tooltip-left box-icon"
                            >
                              <span className="icon icon-shop-cart"></span>
                              <span className="tooltip">Add to Cart</span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#quickView"
                              data-bs-toggle="modal"
                              className="hover-tooltip tooltip-left box-icon quickview"
                            >
                              <span className="icon icon-view"></span>
                              <span className="tooltip">Quick View</span>
                            </a>
                          </li>
                          <li className="compare">
                            <a
                              href="#compare"
                              data-bs-toggle="modal"
                              aria-controls="compare"
                              className="hover-tooltip tooltip-left box-icon"
                            >
                              <span className="icon icon-compare"></span>
                              <span className="tooltip">Add to Compare</span>
                            </a>
                          </li>
                        </ul>
                        <div className="badge-box">
                          <span className="badge-item new">NEW IN</span>
                        </div>
                      </div>
                      <div className="card_product-info">
                        <a
                          href="product-default.html"
                          className="name-product h5 fw-normal link text-line-clamp-2"
                        >
                          Dança Ring
                        </a>
                        <div className="price-wrap">
                          <span className="price-new h5 text-secondary">
                            $3,370.00
                          </span>
                          <span className="price-old fw-normal">$3,899.00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sw-dot-default tf-sw-pagination d-xl-none"></div>
              </div>
              <div className="nav-swiper style-2 nav-prev-swiper d-xl-flex d-none">
                <i className="icon-arrow-left"></i>
              </div>
              <div className="nav-swiper style-2 nav-next-swiper d-xl-flex d-none">
                <i className="icon-arrow-right"></i>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- /Trendy -->
      <!-- Banner Countdown --> */}
        <div className="banner_countdown">
          <div className="bn_content">
            <div className="heading wow fadeInUp">
              <h6 className="text-top">DON’T MISS OUT!</h6>
              <h2 className="title font-2">
                <span className="fst-italic">Limited</span> Time Deal
              </h2>
              <p className="sub-title">
                Score exclusive discounts on our top styles! Hurry – these
                offers won’t last long. <br className="d-none d-xxl-block" />
                Shop now and elevate your wardrobe at unbeatable prices.
              </p>
            </div>
            <div className="countdown-V04 wow fadeInUp">
              <div
                className="js-countdown cd-custom"
                data-timer="46555"
                data-labels="DAYs,Hours,Mins,Secs"
              ></div>
            </div>
            <a
              href="shop-default.html"
              className="tf-btn type-large wow fadeInUp"
            >
              Shop Now
              <i className="icon-arrow-right-2 fs-24"></i>
            </a>
          </div>
          <div className="bn_image">
            <img
              src="assets/images/banner/banner-1.jpg"
              data-src="assets/images/banner/banner-1.jpg"
              alt=""
              className="lazyload"
            />
          </div>
        </div>
        {/* <!-- /Banner Countdown -->
      <!-- Icon Box --> */}
        <div className="flat-spacing-9 pb-0">
          <div className="container">
            <div
              dir="ltr"
              className="swiper tf-swiper"
              data-preview="4"
              data-tablet="3"
              data-mobile-sm="2"
              data-mobile="1"
              data-space-lg="48"
              data-space-md="30"
              data-space="15"
              data-pagination="1"
              data-pagination-sm="2"
              data-pagination-md="3"
              data-pagination-lg="4"
            >
              <div className="swiper-wrapper">
                {/* <!-- item 1 --> */}
                <div className="swiper-slide">
                  <div className="box_icon--V02 style_2 wow fadeInLeft">
                    <span className="icon">
                      <i className="icon-box"></i>
                    </span>
                    <div className="content">
                      <h5 className="title">FREE SHIPPING</h5>
                      <p className="text">Enjoy free shipping on all orders</p>
                    </div>
                  </div>
                </div>
                {/* <!-- item 2 --> */}
                <div className="swiper-slide">
                  <div
                    className="box_icon--V02 style_2 wow fadeInLeft"
                    data-wow-delay="0.1s"
                  >
                    <span className="icon">
                      <i className="icon-credit-card"></i>
                    </span>
                    <div className="content">
                      <h5 className="title">SECURED PAYMENT</h5>
                      <p className="text">Secured payment</p>
                    </div>
                  </div>
                </div>
                {/* <!-- item 3 --> */}
                <div className="swiper-slide">
                  <div
                    className="box_icon--V02 style_2 wow fadeInLeft"
                    data-wow-delay="0.2s"
                  >
                    <span className="icon">
                      <i className="icon-return"></i>
                    </span>
                    <div className="content">
                      <h5 className="title">14 DAYS RETURN</h5>
                      <p className="text">Free return in 14 days</p>
                    </div>
                  </div>
                </div>
                {/* <!-- item 4 --> */}
                <div className="swiper-slide">
                  <div
                    className="box_icon--V02 style_2 wow fadeInLeft"
                    data-wow-delay="0.3s"
                  >
                    <span className="icon">
                      <i className="icon-headphone"></i>
                    </span>
                    <div className="content">
                      <h5 className="title">PREMIUM SUPPORT</h5>
                      <p className="text">Enjoy our support 24/7</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sw-dot-default tf-sw-pagination"></div>
            </div>
          </div>
        </div>
        {/* <!-- /Icon Box -->
      <!-- Banner Testimonial --> */}
        <section className="flat-spacing-3">
          <div className="tf-sw-thumbs tes_thumb-V02 wow fadeInUp">
            <div className="container">
              <div className="row">
                <div className="col-xl-5 col-md-6">
                  <div dir="ltr" className="swiper sw-thumb mb-md-0">
                    <div className="swiper-wrapper">
                      {/* <!-- item 1 --> */}
                      <div className="swiper-slide">
                        <div className="card_product--V03 style_2 hover-img">
                          <div className="card_product-wrapper img-style">
                            <img
                              src="assets/images/testimonial/tes-4.jpg"
                              data-src="assets/images/testimonial/tes-4.jpg"
                              alt=""
                              className="lazyload"
                            />
                          </div>
                          <div className="card_product-info">
                            <div className="infor">
                              <a href="shop-default.html" className="img-prd">
                                <img
                                  src="assets/images/products/product-53.jpg"
                                  data-src="assets/images/products/product-53.jpg"
                                  alt=""
                                  className="lazyload"
                                />
                              </a>
                              <div className="info-product">
                                <a
                                  href="product-default.html"
                                  className="name h5 fw-normal link text-line-clamp-2"
                                >
                                  Crystal Birthstone Eternity
                                  <br className="d-none d-xl-block" />
                                  Circle Charm
                                </a>
                                <div className="price-wrap">
                                  <span className="price-new h5">
                                    $2,499.00
                                  </span>
                                </div>
                              </div>
                            </div>
                            <a
                              href="product-default.html"
                              className="tf-btn btn-def text-main link"
                            >
                              <i className="icon_2 icon-arrow-right-2"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      {/* <!-- item 2 --> */}
                      <div className="swiper-slide">
                        <div className="card_product--V03 style_2 hover-img">
                          <div className="card_product-wrapper img-style">
                            <img
                              src="assets/images/testimonial/tes-5.jpg"
                              data-src="assets/images/testimonial/tes-5.jpg"
                              alt=""
                              className="lazyload"
                            />
                          </div>
                          <div className="card_product-info">
                            <div className="infor">
                              <a href="shop-default.html" className="img-prd">
                                <img
                                  src="assets/images/products/product-52.jpg"
                                  data-src="assets/images/products/product-52.jpg"
                                  alt=""
                                  className="lazyload"
                                />
                              </a>
                              <div className="info-product">
                                <a
                                  href="product-default.html"
                                  className="name h5 fw-normal link text-line-clamp-2"
                                >
                                  Twisted Gold Statement
                                  <br className="d-none d-xl-block" />
                                  Pearl Ring
                                </a>
                                <div className="price-wrap">
                                  <span className="price-new h5">
                                    $3,199.00
                                  </span>
                                </div>
                              </div>
                            </div>
                            <a
                              href="product-default.html"
                              className="tf-btn btn-def text-main link"
                            >
                              <i className="icon_2 icon-arrow-right-2"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-7 col-md-6 align-items-center d-flex">
                  <div dir="ltr" className="swiper sw-main-thumb">
                    <div className="swiper-wrapper">
                      {/* <!-- item 1 --> */}
                      <div className="swiper-slide">
                        <div className="box_testimonial--V03">
                          <div className="icon">
                            <svg
                              width="63"
                              height="64"
                              viewBox="0 0 63 64"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M46.9854 39.4871H62.5V10.4199H33.9026V39.7565L51.7302 54.9673V51.0175L46.5347 40.2037L46.1905 39.4871H46.9854Z"
                                stroke="#1C1C1C"
                              />
                              <path
                                d="M11.168 39.4873H23.6611V16.0918H0.648682V39.7566L14.9243 51.9358V48.9588L10.7173 40.2039L10.373 39.4873H11.168Z"
                                stroke="#1C1C1C"
                              />
                            </svg>
                          </div>
                          <h2 className="title">RECOMMEND!</h2>
                          <p className="text h4">
                            “The quality of the clothes exceeded my
                            expectations. Every piece feels premium, and the
                            designs are so trendy. I'm obsessed with my new
                            wardrobe additions!”
                          </p>
                          <span className="br-line"></span>
                          <div className="tes-author">
                            <div className="avatar">
                              <img
                                src="assets/images/avatar/avt-1.jpg"
                                alt=""
                                className=""
                              />
                            </div>
                            <a
                              href="#"
                              className="fw-medium text-uppercase link"
                            >
                              patrick john
                            </a>
                          </div>
                        </div>
                      </div>
                      {/* <!-- item 2 --> */}
                      <div className="swiper-slide">
                        <div className="box_testimonial--V03">
                          <div className="icon">
                            <svg
                              width="63"
                              height="64"
                              viewBox="0 0 63 64"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M46.9854 39.4871H62.5V10.4199H33.9026V39.7565L51.7302 54.9673V51.0175L46.5347 40.2037L46.1905 39.4871H46.9854Z"
                                stroke="#1C1C1C"
                              />
                              <path
                                d="M11.168 39.4873H23.6611V16.0918H0.648682V39.7566L14.9243 51.9358V48.9588L10.7173 40.2039L10.373 39.4873H11.168Z"
                                stroke="#1C1C1C"
                              />
                            </svg>
                          </div>
                          <h2 className="title">LOVE IT!</h2>
                          <p className="text h4">
                            “I was blown away by the quality of these clothes.
                            Every item feels luxurious and the styles are
                            incredibly modern. I can’t get enough of my new
                            fashion finds!”
                          </p>
                          <span className="br-line"></span>
                          <div className="tes-author">
                            <div className="avatar">
                              <img
                                src="assets/images/avatar/avt-2.jpg"
                                alt=""
                                className=""
                              />
                            </div>
                            <a
                              href="#"
                              className="fw-medium text-uppercase link"
                            >
                              Emily Tran
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="sw-dot-default sw-pg-thumb"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- /Banner Testimonial -->
      <!-- Blog --> */}
        <section className="flat-spacing-3 pt-0">
          <div className="container">
            <div className="sect-top center text-center wow fadeInUp">
              <h2 className="s-title font-2">
                <span className="fst-italic">Behind</span> the brand
              </h2>
              <p className="s-sub-title">
                Explore our journey, values, and the stories behind our
                collections. Discover what makes our brand unique.
              </p>
            </div>
            <div
              dir="ltr"
              className="swiper tf-swiper"
              data-preview="3"
              data-tablet="3"
              data-mobile-sm="2"
              data-mobile="1"
              data-space-lg="30"
              data-space-md="20"
              data-space="15"
              data-pagination="1"
              data-pagination-sm="2"
              data-pagination-md="3"
              data-pagination-lg="3"
            >
              <div className="swiper-wrapper">
                {/* <!-- item 1 --> */}
                <div className="swiper-slide">
                  <div className="article-blog style-2 hover-img4 wow fadeInLeft">
                    <div className="entry_image">
                      <a href="blog-single.html" className="image img-style4">
                        <img
                          src="assets/images/blog/blog-8.jpg"
                          data-src="assets/images/blog/blog-8.jpg"
                          alt="Blog"
                          className="lazyload"
                        />
                      </a>
                      <div className="entry_tag">
                        <a
                          href="blog-single.html"
                          className="name-tag text-caption link"
                        >
                          JewelryTrends
                        </a>
                        <a
                          href="blog-single.html"
                          className="name-tag text-caption link"
                        >
                          12 Feb 2025
                        </a>
                      </div>
                    </div>
                    <h5>
                      <a
                        href="blog-single.html"
                        className="link fw-normal text-line-clamp-2"
                      >
                        Timeless Elegance: How to Choose the Perfect Jewelry for
                        Every Occasion
                      </a>
                    </h5>
                    <a
                      href="blog-single.html"
                      className="tf-btn-line hv-2 lh-28 text-uppercase fw-normal"
                    >
                      Read More
                      <i className="ic icon-arrow-right-2"></i>
                    </a>
                  </div>
                </div>
                {/* <!-- item 2 --> */}
                <div className="swiper-slide">
                  <div
                    className="article-blog style-2 hover-img4 wow fadeInLeft"
                    data-wow-delay="0.1s"
                  >
                    <div className="entry_image">
                      <a href="blog-single.html" className="image img-style4">
                        <img
                          src="assets/images/blog/blog-9.jpg"
                          data-src="assets/images/blog/blog-9.jpg"
                          alt="Blog"
                          className="lazyload"
                        />
                      </a>
                      <div className="entry_tag">
                        <a
                          href="blog-single.html"
                          className="name-tag text-caption link"
                        >
                          JewelryTrends
                        </a>
                        <a
                          href="blog-single.html"
                          className="name-tag text-caption link"
                        >
                          12 Feb 2025
                        </a>
                      </div>
                    </div>
                    <h5>
                      <a
                        href="blog-single.html"
                        className="link fw-normal text-line-clamp-2"
                      >
                        The Art of Layering: Styling Necklaces, Bracelets &
                        Rings Like a Pro
                      </a>
                    </h5>
                    <a
                      href="blog-single.html"
                      className="tf-btn-line hv-2 lh-28 text-uppercase fw-normal"
                    >
                      Read More
                      <i className="ic icon-arrow-right-2"></i>
                    </a>
                  </div>
                </div>
                {/* <!-- item 3 --> */}
                <div className="swiper-slide">
                  <div
                    className="article-blog style-2 hover-img4 wow fadeInLeft"
                    data-wow-delay="0.2s"
                  >
                    <div className="entry_image">
                      <a href="blog-single.html" className="image img-style4">
                        <img
                          src="assets/images/blog/blog-10.jpg"
                          data-src="assets/images/blog/blog-10.jpg"
                          alt="Blog"
                          className="lazyload"
                        />
                      </a>
                      <div className="entry_tag">
                        <a
                          href="blog-single.html"
                          className="name-tag text-caption link"
                        >
                          JewelryTrends
                        </a>
                        <a
                          href="blog-single.html"
                          className="name-tag text-caption link"
                        >
                          12 Feb 2025
                        </a>
                      </div>
                    </div>
                    <h5>
                      <a
                        href="blog-single.html"
                        className="link fw-normal text-line-clamp-2"
                      >
                        Jewelry Care 101: Tips to Keep Your Pieces Sparkling
                        Like New
                      </a>
                    </h5>
                    <a
                      href="blog-single.html"
                      className="tf-btn-line hv-2 lh-28 text-uppercase fw-normal"
                    >
                      Read More
                      <i className="ic icon-arrow-right-2"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="sw-dot-default tf-sw-pagination"></div>
            </div>
          </div>
        </section>
        {/* <!-- /Blog -->
      <!-- Banner Promo --> */}
        <div className="banner_V01">
          <div className="bn-image">
            <img
              src="assets/images/banner/banner-3.jpg"
              data-src="assets/images/banner/banner-3.jpg"
              alt=""
              className="lazyload"
            />
          </div>
          <div className="bn-content bg-light-peach">
            <h6 className="caption wow fadeInUp">JOIN THE #VEMUS TRIBE</h6>
            <h2 className="title font-2 fw-normal wow fadeInUp">
              <span className="fst-italic">Shiny Things</span> Await -
              <br className="d-none d-lg-block" />
              10% Off Inside!
            </h2>
            <p className="sub-title text-main-3 wow fadeInUp">
              Get early access to new products, exclusive deals & more.
            </p>
            <form className="form-email wow fadeInUp">
              <div className="form-content">
                <fieldset>
                  <input
                    type="text"
                    placeholder="Your_email@example.com"
                    required
                    className="bg-transparent"
                  />
                </fieldset>
                <button type="submit" className="link">
                  <i className="icon icon-arrow-right-2"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* <!-- /Banner Promo -->
      <!-- Footer --> */}
        <footer className="tf-footer style-2 bg-dark-brown">
          <div className="footer-body p-xl-0">
            <div className="container">
              <div className="footer-inner-wrap d-xl-flex flex-xl-nowrap">
                <div className="footer-infor">
                  <div className="box-title">
                    <a href="home-2.html" className="logo-site d-inline-block">
                      <img src="assets/images/logo/logo-white.svg" alt="" />
                    </a>

                    <p className="text-main-5 lt-sp-nor">
                      <span className="text-white">Explore</span>
                      our curated collections designed to
                      <span className="text-white">
                        elevate every <br className="d-none d-xl-block" />
                        look
                      </span>
                      , from
                      <span className="text-white">timeless essentials</span>
                      to
                      <span className="text-white">trendsetting pieces</span>
                      . Step <br className="d-none d-xl-block" />
                      in and find the
                      <span className="text-white">perfect match</span>
                      for your
                      <span className="text-white">unique</span>
                      style.
                    </p>
                  </div>
                  <ul className="tf-social-icon style-white">
                    <li>
                      <a
                        href="https://www.facebook.com/"
                        target="_blank"
                        className="social-facebook"
                      >
                        <span className="icon">
                          <i className="icon-facebook"></i>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        className="social-instagram"
                      >
                        <span className="icon">
                          <i className="icon-instagram"></i>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://x.com/"
                        target="_blank"
                        className="social-x"
                      >
                        <span className="icon">
                          <i className="icon-x"></i>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.snapchat.com/"
                        target="_blank"
                        className="social-snapchat"
                      >
                        <span className="icon">
                          <i className="icon-snapchat"></i>
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="footer-col-block">
                  <p className="footer-heading footer-heading-mobile text-white font-2">
                    Explore
                  </p>
                  <div className="tf-collapse-content">
                    <ul className="footer-menu-list">
                      <li>
                        <a
                          href="shop-collection-list.html"
                          className="text-white link"
                        >
                          Bracelets
                        </a>
                      </li>
                      <li>
                        <a
                          href="shop-collection-list.html"
                          className="text-white link"
                        >
                          Rings
                        </a>
                      </li>
                      <li>
                        <a
                          href="shop-collection-list.html"
                          className="text-white link"
                        >
                          Necklaces
                        </a>
                      </li>
                      <li>
                        <a
                          href="shop-collection-list.html"
                          className="text-white link"
                        >
                          Earrings
                        </a>
                      </li>
                      <li>
                        <a
                          href="shop-collection-list.html"
                          className="text-white link"
                        >
                          Gifts
                        </a>
                      </li>
                      <li>
                        <a
                          href="shop-collection-list.html"
                          className="text-white link"
                        >
                          Collections
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="footer-col-block">
                  <p className="footer-heading footer-heading-mobile text-white font-2">
                    HELP
                  </p>
                  <div className="tf-collapse-content">
                    <ul className="footer-menu-list">
                      <li>
                        <a href="faq.html" className="text-white link">
                          FAQs
                        </a>
                      </li>
                      <li>
                        <a
                          href="term-condition.html"
                          className="text-white link"
                        >
                          Terms & Conditions
                        </a>
                      </li>
                      <li>
                        <a href="privacy.html" className="text-white link">
                          Privacy Policies
                        </a>
                      </li>
                      <li>
                        <a href="return.html" className="text-white link">
                          Returns & Refunds
                        </a>
                      </li>
                      <li>
                        <a href="shipping.html" className="text-white link">
                          Shipping
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="footer-col-block">
                  <p className="footer-heading footer-heading-mobile text-white font-2">
                    Store Information
                  </p>
                  <div className="tf-collapse-content">
                    <ul className="footer-menu-list">
                      <li className="text-caption">
                        <span className="fw-medium text-white">Email: </span>
                        <a
                          href="mailto:clientcare@ecom.com"
                          className="text-white link fw-normal"
                        >
                          clientcare@ecom.com
                        </a>
                      </li>
                      <li className="text-caption">
                        <span className="fw-medium text-white">Phone: </span>
                        <a
                          href="tel:18888383022"
                          className="text-white link fw-normal"
                        >
                          1.888.838.3022
                        </a>
                      </li>
                      <li className="text-caption">
                        <a
                          target="_blank"
                          href="https://www.google.com/maps?q=123+Yarran+st,Punchbowl,NSW+2196,Australia"
                          className="text-white link fw-normal"
                        >
                          <span className="fw-medium text-white">
                            Address:{" "}
                          </span>
                          123 Yarran st, Punchbowl,
                          <br className="d-none d-xl-block" />
                          NSW 2196, Australia
                        </a>
                      </li>
                      <li>
                        <a
                          href="our-store.html"
                          className="tf-btn-line style-white"
                        >
                          <span className="text-caption"> Get direction </span>
                          <i className="icon-arrow-right-2 fs-16"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="container">
              <div className="footer-bottom-wrap">
                <p className="text-nocopy text-white">
                  All Rights Reserved 2025 VEMUS.
                </p>
                <div className="tf-currencies">
                  <select className="tf-dropdown-select style-default type-currencies color-white">
                    <option>United States (USD $)</option>
                    <option>France (EUR €)</option>
                    <option>Germany (EUR €)</option>
                    <option>Vietnam (VND ₫)</option>
                  </select>
                </div>
                <ul className="paymend-method-list">
                  <li>
                    <a href="#">
                      <img
                        src="assets/images/payment/am-ex.svg"
                        alt="Paymend Method"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="assets/images/payment/apple-pay.svg"
                        alt="Paymend Method"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="assets/images/payment/dinner.svg"
                        alt="Paymend Method"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="assets/images/payment/discover.svg"
                        alt="Paymend Method"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="assets/images/payment/gg-pay.svg"
                        alt="Paymend Method"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="assets/images/payment/master-2.svg"
                        alt="Paymend Method"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="assets/images/payment/master.svg"
                        alt="Paymend Method"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="assets/images/payment/shop-pay.svg"
                        alt="Paymend Method"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="assets/images/payment/unicon-pay.svg"
                        alt="Paymend Method"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="assets/images/payment/visa.svg" alt="Paymend Method" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="logo-bottom wow fadeInUp" data-wow-delay="0.1s">
            <div className="container">
              <div className="d-flex justify-content-center">
                <img
                  src="assets/images/logo/logo-very-large.svg"
                  className="lazyload"
                  alt="Logo"
                />
              </div>
            </div>
          </div>
        </footer>
        {/* <!-- /Footer --> */}
      </div>
      {/* <!-- Mobile Menu --> */}
      <div className="offcanvas offcanvas-start canvas-mb" id="mobileMenu">
        <span className="icon-close-popup" data-bs-dismiss="offcanvas">
          <i className="icon-close"></i>
        </span>
        <div className="mb-canvas-content">
          <div className="mb-body">
            <div className="mb-content-top">
              <form className="form-search">
                <fieldset>
                  <input
                    type="text"
                    placeholder="Search for anything..."
                    className=""
                    name="text"
                    tabIndex="0"
                    // value=""
                    aria-required="true"
                    required=""
                  />
                </fieldset>
                <button type="submit" className="link">
                  <i className="icon icon-search"></i>
                </button>
              </form>
              <ul className="nav-ul-mb" id="wrapper-menu-navigation">
                <li className="nav-mb-item">
                  <a
                    href="#dropdown-menu-home"
                    className="collapsed mb-menu-link"
                    data-bs-toggle="collapse"
                    aria-expanded="true"
                    aria-controls="dropdown-menu-home"
                  >
                    <span>Home</span>
                    <span className="btn-open-sub"></span>
                  </a>
                  <div id="dropdown-menu-home" className="collapse">
                    <ul className="sub-nav-menu">
                      <li>
                        <a href="index.html" className="sub-nav-link">
                          Home 1 <span className="demo-label">Hot</span>
                        </a>
                      </li>
                      <li>
                        <a href="home-2.html" className="sub-nav-link">
                          Home 2 <span className="demo-label">Hot</span>
                        </a>
                      </li>
                      <li>
                        <a href="home-3.html" className="sub-nav-link">
                          Home 3
                        </a>
                      </li>
                      <li>
                        <a href="home-4.html" className="sub-nav-link">
                          Home 4
                        </a>
                      </li>
                      <li>
                        <a href="home-5.html" className="sub-nav-link">
                          Home 5{" "}
                          <span className="demo-label type-new">New</span>
                        </a>
                      </li>
                      <li>
                        <a href="home-6.html" className="sub-nav-link">
                          Home 6{" "}
                          <span className="demo-label type-new">New</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-mb-item">
                  <a
                    href="#dropdown-menu-shop"
                    className="collapsed mb-menu-link"
                    data-bs-toggle="collapse"
                    aria-expanded="true"
                    aria-controls="dropdown-menu-shop"
                  >
                    <span>Shop</span>
                    <span className="btn-open-sub"></span>
                  </a>
                  <div id="dropdown-menu-shop" className="collapse">
                    <ul className="sub-nav-menu">
                      <li>
                        <a
                          href="#sub-shop-layout"
                          className="sub-nav-link collapsed"
                          data-bs-toggle="collapse"
                          aria-expanded="true"
                          aria-controls="sub-shop-layout"
                        >
                          <span>Shop Layout</span>
                          <span className="btn-open-sub"></span>
                        </a>
                        <div id="sub-shop-layout" className="collapse">
                          <ul className="sub-nav-menu sub-menu-level-2">
                            <li>
                              <a
                                href="shop-default.html"
                                className="sub-nav-link"
                              >
                                Default
                              </a>
                            </li>
                            <li>
                              <a
                                href="shop-left-sidebar.html"
                                className="sub-nav-link"
                              >
                                Filter Left Sidebar
                              </a>
                            </li>
                            <li>
                              <a
                                href="shop-right-sidebar.html"
                                className="sub-nav-link"
                              >
                                Filter Right Sidebar
                              </a>
                            </li>
                            <li>
                              <a
                                href="shop-filter-top.html"
                                className="sub-nav-link"
                              >
                                Filter Top
                              </a>
                            </li>
                            <li>
                              <a
                                href="shop-default.html"
                                className="sub-nav-link"
                              >
                                Filter Drawer
                              </a>
                            </li>
                            <li>
                              <a
                                href="shop-collection-list.html"
                                className="sub-nav-link"
                              >
                                Collection List
                              </a>
                            </li>
                            <li>
                              <a
                                href="shop-sub-collection.html"
                                className="sub-nav-link"
                              >
                                Sub Collection
                              </a>
                            </li>
                            <li>
                              <a
                                href="shop-grid-2-columns.html"
                                className="sub-nav-link"
                              >
                                Grid 2 Collumns
                              </a>
                            </li>
                            <li>
                              <a
                                href="shop-grid-3-collumns.html"
                                className="sub-nav-link"
                              >
                                Grid 3 Collumns
                              </a>
                            </li>
                            <li>
                              <a
                                href="shop-grid-4-collumns.html"
                                className="sub-nav-link"
                              >
                                Grid 4 Collumns
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <a
                          href="#sub-shop-list"
                          className="sub-nav-link collapsed"
                          data-bs-toggle="collapse"
                          aria-expanded="true"
                          aria-controls="sub-shop-list"
                        >
                          <span>Shop List</span>
                          <span className="btn-open-sub"></span>
                        </a>
                        <div id="sub-shop-list" className="collapse">
                          <ul className="sub-nav-menu sub-menu-level-2">
                            <li>
                              <a
                                href="shop-default.html"
                                className="sub-nav-link"
                              >
                                Pagination Links
                              </a>
                            </li>
                            <li>
                              <a
                                href="shop-load-more-button.html"
                                className="sub-nav-link"
                              >
                                Load More Button
                              </a>
                            </li>
                            <li>
                              <a
                                href="shop-infinity-scroll.html"
                                className="sub-nav-link"
                              >
                                Infinity Scroll
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-mb-item">
                  <a
                    href="#dropdown-menu-product"
                    className="collapsed mb-menu-link"
                    data-bs-toggle="collapse"
                    aria-expanded="true"
                    aria-controls="dropdown-menu-product"
                  >
                    <span>Products</span>
                    <span className="btn-open-sub"></span>
                  </a>
                  <div id="dropdown-menu-product" className="collapse">
                    <ul className="sub-nav-menu">
                      <li>
                        <a
                          href="#sub-product-layout"
                          className="sub-nav-link collapsed"
                          data-bs-toggle="collapse"
                          aria-expanded="true"
                          aria-controls="sub-product-layout"
                        >
                          <span>Product Layouts</span>
                          <span className="btn-open-sub"></span>
                        </a>
                        <div id="sub-product-layout" className="collapse">
                          <ul className="sub-nav-menu sub-menu-level-2">
                            <li>
                              <a
                                href="product-default.html"
                                className="sub-nav-link"
                              >
                                Product Default
                              </a>
                            </li>
                            <li>
                              <a
                                href="product-default.html"
                                className="sub-nav-link"
                              >
                                Product Style 1
                              </a>
                            </li>
                            <li>
                              <a
                                href="product-style-02.html"
                                className="sub-nav-link"
                              >
                                Product Style 2
                              </a>
                            </li>
                            <li>
                              <a
                                href="product-style-03.html"
                                className="sub-nav-link"
                              >
                                Product Style 3
                              </a>
                            </li>
                            <li>
                              <a
                                href="product-style-04.html"
                                className="sub-nav-link"
                              >
                                Product Style 4
                                <span className="demo-label">Hot</span>
                              </a>
                            </li>
                            <li>
                              <a
                                href="product-style-05.html"
                                className="sub-nav-link"
                              >
                                Product Style 5
                                <span className="demo-label type-trend">
                                  Trending
                                </span>
                              </a>
                            </li>
                            <li>
                              <a
                                href="product-style-04-no-size.html"
                                className="sub-nav-link"
                              >
                                Product No Size
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <a
                          href="#sub-product-desc"
                          className="sub-nav-link collapsed"
                          data-bs-toggle="collapse"
                          aria-expanded="true"
                          aria-controls="sub-product-desc"
                        >
                          <span>Product Description</span>
                          <span className="btn-open-sub"></span>
                        </a>
                        <div id="sub-product-desc" className="collapse">
                          <ul className="sub-nav-menu sub-menu-level-2">
                            <li>
                              <a
                                href="product-description-side-dropdown.html"
                                className="sub-nav-link"
                              >
                                Description Side Dropdown
                              </a>
                            </li>
                            <li>
                              <a
                                href="product-description-full-accordion.html"
                                className="sub-nav-link"
                              >
                                Description Full Accordions
                              </a>
                            </li>
                            <li>
                              <a
                                href="product-description-side-drawer.html"
                                className="sub-nav-link"
                              >
                                Description Side Drawer
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <a
                          href="#sub-product-detail"
                          className="sub-nav-link collapsed"
                          data-bs-toggle="collapse"
                          aria-expanded="true"
                          aria-controls="sub-product-detail"
                        >
                          <span>Product Details</span>
                          <span className="btn-open-sub"></span>
                        </a>
                        <div id="sub-product-detail" className="collapse">
                          <ul className="sub-nav-menu sub-menu-level-2">
                            <li>
                              <a
                                href="product-inner-zoom.html"
                                className="sub-nav-link"
                              >
                                Product Inner Zoom
                              </a>
                            </li>
                            <li>
                              <a
                                href="product-inner-circle-zoom.html"
                                className="sub-nav-link"
                              >
                                Product Inner Circle Zoom
                              </a>
                            </li>
                            <li>
                              <a
                                href="product-no-zoom.html"
                                className="sub-nav-link"
                              >
                                Product No Zoom
                              </a>
                            </li>
                            <li>
                              <a
                                href="product-video.html"
                                className="sub-nav-link"
                              >
                                Product Video
                              </a>
                            </li>
                            <li>
                              <a
                                href="product-3d.html"
                                className="sub-nav-link"
                              >
                                Product 3D/AR
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <a
                          href="#sub-product-feature"
                          className="sub-nav-link collapsed"
                          data-bs-toggle="collapse"
                          aria-expanded="true"
                          aria-controls="sub-product-feature"
                        >
                          <span>Product Features</span>
                          <span className="btn-open-sub"></span>
                        </a>
                        <div id="sub-product-feature" className="collapse">
                          <ul className="sub-nav-menu sub-menu-level-2">
                            <li>
                              <a
                                href="product-pickup-available.html"
                                className="sub-nav-link"
                              >
                                Pickup Available
                              </a>
                            </li>
                            <li>
                              <a
                                href="product-swatch-image.html"
                                className="sub-nav-link"
                              >
                                Swatch Image
                              </a>
                            </li>
                            <li>
                              <a
                                href="product-together.html"
                                className="sub-nav-link"
                              >
                                Buy Together
                                <span className="demo-label type-new">New</span>
                              </a>
                            </li>
                            <li>
                              <a
                                href="product-style-04.html"
                                className="sub-nav-link"
                              >
                                Size Guide
                              </a>
                            </li>
                            <li>
                              <a
                                href="product-engrave-option.html"
                                className="sub-nav-link"
                              >
                                Engrave Option
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-mb-item">
                  <a
                    href="#dropdown-menu-pages"
                    className="collapsed mb-menu-link"
                    data-bs-toggle="collapse"
                    aria-expanded="true"
                    aria-controls="dropdown-menu-pages"
                  >
                    <span>Pages</span>
                    <span className="btn-open-sub"></span>
                  </a>
                  <div id="dropdown-menu-pages" className="collapse">
                    <ul className="sub-nav-menu">
                      <li>
                        <a href="about-us.html" className="sub-nav-link">
                          About Us
                        </a>
                      </li>
                      <li>
                        <a href="contact-us.html" className="sub-nav-link">
                          Contact Us
                        </a>
                      </li>
                      <li>
                        <a href="our-store.html" className="sub-nav-link">
                          Store Location
                        </a>
                      </li>
                      <li>
                        <a href="account-page.html" className="sub-nav-link">
                          My Account
                        </a>
                      </li>
                      <li>
                        <a href="faq.html" className="sub-nav-link">
                          FAQ
                        </a>
                      </li>
                      <li>
                        <a href="shop-cart.html" className="sub-nav-link">
                          Cart Page
                        </a>
                      </li>
                      <li>
                        <a
                          href="before-you-leave.html"
                          className="sub-nav-link"
                        >
                          Before You Leave
                        </a>
                      </li>
                      <li>
                        <a href="product-popup.html" className="sub-nav-link">
                          Products Popup
                        </a>
                      </li>
                      <li>
                        <a href="newspaper-popup.html" className="sub-nav-link">
                          Newspaper Popup
                        </a>
                      </li>
                      <li>
                        <a href="404.html" className="sub-nav-link">
                          404
                        </a>
                      </li>
                      <li>
                        <a href="coming-soon.html" className="sub-nav-link">
                          Coming Soon!
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-mb-item">
                  <a
                    href="#dropdown-menu-blog"
                    className="collapsed mb-menu-link"
                    data-bs-toggle="collapse"
                    aria-expanded="true"
                    aria-controls="dropdown-menu-blog"
                  >
                    <span>Blog</span>
                    <span className="btn-open-sub"></span>
                  </a>
                  <div id="dropdown-menu-blog" className="collapse">
                    <ul className="sub-nav-menu">
                      <li>
                        <a
                          href="blog-list-style-1.html"
                          className="sub-nav-link"
                        >
                          Blog List Style 1
                        </a>
                      </li>
                      <li>
                        <a
                          href="blog-list-style-2.html"
                          className="sub-nav-link"
                        >
                          Blog List Style 2
                        </a>
                      </li>
                      <li>
                        <a href="blog-single.html" className="sub-nav-link">
                          Single Post
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-mb-item">
                  <a
                    href="https://themeforest.net/user/themesflat"
                    className="mb-menu-link"
                  >
                    Buy Theme
                  </a>
                </li>
              </ul>
            </div>
            <div className="mb-other-content">
              <div className="group-icon">
                <a href="wishlist.html" className="site-nav-icon">
                  <i className="icon icon-hearth"></i>
                  Wishlist
                </a>
                <p data-bs-dismiss="offcanvas">
                  <a
                    href="#log"
                    data-bs-toggle="modal"
                    className="site-nav-icon"
                  >
                    <i className="icon icon-user"></i>
                    Login
                  </a>
                </p>
              </div>
              <div className="mb-notice">
                <a href="contact-us.html" className="text-need">
                  Need Help?
                </a>
              </div>
              <ul className="mb-info">
                <li>
                  <p>
                    Address:
                    <a
                      href="https://www.google.com/maps?q=123+Yarran+St,+Punchbowl,+NSW+2196,+Australia"
                      className="fw-medium"
                      target="_blank"
                    >
                      123 Yarran st, Punchbowl, NSW 2196, Australia
                    </a>
                  </p>
                </li>
                <li>
                  Email:
                  <a href="mailto:hello@vemus.com" className="fw-medium">
                    hello@vemus.com
                  </a>
                </li>
                <li>
                  Phone:
                  <a href="tel:6483441233" className="fw-medium">
                    (64) 8344 1233
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mb-bottom">
            <div className="bottom-bar-language">
              <div className="tf-currencies">
                <select className="tf-dropdown-select style-default type-currencies">
                  <option>USD ($)</option>
                  <option>EUR (€)</option>
                  <option>EUR (€)</option>
                  <option>VND (₫)</option>
                </select>
              </div>
              <div className="tf-languages">
                <select className="tf-dropdown-select style-default type-languages">
                  <option>English</option>
                  <option>العربية</option>
                  <option>简体中文</option>
                  <option>اردو</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /Mobile Menu -->
    <!-- Login --> */}
      <div className="modal modalCentered fade modal-log" id="log">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-top">
              <span className="icon-close-popup" data-bs-dismiss="modal">
                <i className="icon-close"></i>
              </span>
              <h3 className="title fw-normal text-uppercase">login</h3>
            </div>
            <div className="modal-bottom">
              <form className="form-log">
                <div className="form-content">
                  <fieldset className="tf-field">
                    <input
                      className="tf-input"
                      type="text"
                      // value="Hello@vemus.com"
                      required
                    />
                    <label className="tf-lable">Username *</label>
                  </fieldset>
                  <fieldset className="tf-field">
                    <input className="tf-input" type="password" required />
                    <label className="tf-lable">Password *</label>
                  </fieldset>
                </div>
                <div className="bottom">
                  <div className="checkbox-wrap">
                    <input id="remember" type="checkbox" className="tf-check" />
                    <label htmlFor="remember">Remember me</label>
                  </div>
                  <a href="#reset" data-bs-toggle="offcanvas" className="link">
                    Forgot password?
                  </a>
                </div>
                <button
                  type="submit"
                  className="btn-submit tf-btn btn-fill-2 w-100"
                >
                  LOG IN
                </button>
              </form>
              <div className="other-login">
                <a
                  href="#"
                  className="tf-btn btn-fill-3 ic-abs w-100 fw-medium"
                >
                  <span className="icon">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="12" cy="12" r="12" fill="#3B5998" />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M15.1163 7.992L13.9867 7.99275C13.101 7.99275 12.9293 8.4135 12.9293 9.03075V10.3927H15.042L14.7667 12.5265H12.9293V18H10.7265V12.5265H8.8845V10.3927H10.7265V8.82C10.7265 6.99375 11.8417 6 13.47 6C14.25 6 14.9205 6.05775 15.1163 6.084V7.992ZM12 0C5.373 0 0 5.37225 0 12C0 18.627 5.373 24 12 24C18.6278 24 24 18.627 24 12C24 5.37225 18.6278 0 12 0Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                  Log in with Facebook
                </a>
                <a href="#" className="tf-btn style-2 ic-abs w-100 fw-medium">
                  <span className="icon">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <path
                          d="M23.0938 9.91258L13.3045 9.91211C12.8722 9.91211 12.5218 10.2625 12.5218 10.6947V13.822C12.5218 14.2542 12.8722 14.6046 13.3044 14.6046H18.8172C18.2135 16.1712 17.0869 17.4832 15.6494 18.3168L18 22.386C21.7707 20.2052 24 16.3789 24 12.0955C24 11.4857 23.9551 11.0497 23.8652 10.5587C23.7968 10.1858 23.473 9.91258 23.0938 9.91258Z"
                          fill="#167EE6"
                        />
                        <path
                          d="M12 19.3037C9.30218 19.3037 6.94699 17.8297 5.68207 15.6484L1.61304 17.9938C3.68374 21.5826 7.56283 23.9994 12 23.9994C14.1768 23.9994 16.2307 23.4133 18 22.3919V22.3863L15.6494 18.3171C14.5742 18.9408 13.3299 19.3037 12 19.3037Z"
                          fill="#12B347"
                        />
                        <path
                          d="M18 22.3932V22.3876L15.6494 18.3184C14.5741 18.9419 13.33 19.3049 12 19.3049V24.0006C14.1767 24.0006 16.2308 23.4145 18 22.3932Z"
                          fill="#0F993E"
                        />
                        <path
                          d="M4.69566 12.0003C4.69566 10.6705 5.05856 9.42637 5.68205 8.3512L1.61302 6.00586C0.586031 7.76962 0 9.81797 0 12.0003C0 14.1826 0.586031 16.2309 1.61302 17.9947L5.68205 15.6494C5.05856 14.5742 4.69566 13.3301 4.69566 12.0003Z"
                          fill="#FFD500"
                        />
                        <path
                          d="M12 4.69566C13.7593 4.69566 15.3753 5.32078 16.6375 6.36061C16.9489 6.61711 17.4014 6.59859 17.6867 6.31336L19.9024 4.09758C20.2261 3.77395 20.203 3.24422 19.8573 2.94431C17.7425 1.10967 14.991 0 12 0C7.56283 0 3.68374 2.41673 1.61304 6.00558L5.68207 8.35092C6.94699 6.16969 9.30218 4.69566 12 4.69566Z"
                          fill="#FF4B26"
                        />
                        <path
                          d="M16.6374 6.36061C16.9488 6.61711 17.4015 6.59859 17.6866 6.31336L19.9024 4.09758C20.226 3.77395 20.2029 3.24422 19.8573 2.94431C17.7425 1.10962 14.991 0 12 0V4.69566C13.7592 4.69566 15.3752 5.32078 16.6374 6.36061Z"
                          fill="#D93F21"
                        />
                      </g>
                    </svg>
                  </span>
                  Log in with Google
                </a>
              </div>
              <div className="text-center">
                <a
                  href="#register"
                  data-bs-toggle="modal"
                  className="tf-btn-line"
                >
                  New customer? Create your account
                  <i className="icon-arrow-top-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /Login -->
    <!-- Register --> */}
      <div className="modal modalCentered fade modal-log" id="register">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-top">
              <span className="icon-close-popup" data-bs-dismiss="modal">
                <i className="icon-close"></i>
              </span>
              <h3 className="title fw-normal text-uppercase">create account</h3>
            </div>
            <div className="modal-bottom">
              <form className="form-log">
                <div className="form-content">
                  <fieldset className="tf-field">
                    <input
                      className="tf-input"
                      type="text"
                      // value="Hello@vemus.com"
                      required
                    />
                    <label className="tf-lable">First name *</label>
                  </fieldset>
                  <fieldset className="tf-field">
                    <input className="tf-input" type="text" required />
                    <label className="tf-lable">Last name *</label>
                  </fieldset>
                  <fieldset className="tf-field">
                    <input className="tf-input" type="email" required />
                    <label className="tf-lable">Email *</label>
                  </fieldset>
                  <fieldset className="tf-field">
                    <input className="tf-input" type="password" required />
                    <label className="tf-lable">Password *</label>
                  </fieldset>
                </div>
                <div className="bottom">
                  <div className="checkbox-wrap align-items-start">
                    <input
                      id="confirm"
                      type="checkbox"
                      className="tf-check flex-shrink-0"
                    />
                    <label htmlFor="confirm">
                      Yes, sign me up for the Vemus Newsletter. I confirm I am
                      over 16 years old. I would like to receive digital
                      communications (email and SMS) from Vemus about Vemus
                      products and exclusive offers.
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn-submit tf-btn btn-fill-2 w-100"
                >
                  LOG IN
                </button>
              </form>
              <div className="other-login">
                <a
                  href="#"
                  className="tf-btn btn-fill-3 ic-abs w-100 fw-medium"
                >
                  <span className="icon">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="12" cy="12" r="12" fill="#3B5998" />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M15.1163 7.992L13.9867 7.99275C13.101 7.99275 12.9293 8.4135 12.9293 9.03075V10.3927H15.042L14.7667 12.5265H12.9293V18H10.7265V12.5265H8.8845V10.3927H10.7265V8.82C10.7265 6.99375 11.8417 6 13.47 6C14.25 6 14.9205 6.05775 15.1163 6.084V7.992ZM12 0C5.373 0 0 5.37225 0 12C0 18.627 5.373 24 12 24C18.6278 24 24 18.627 24 12C24 5.37225 18.6278 0 12 0Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                  Log in with Facebook
                </a>
                <a href="#" className="tf-btn style-2 ic-abs w-100 fw-medium">
                  <span className="icon">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <path
                          d="M23.0938 9.91258L13.3045 9.91211C12.8722 9.91211 12.5218 10.2625 12.5218 10.6947V13.822C12.5218 14.2542 12.8722 14.6046 13.3044 14.6046H18.8172C18.2135 16.1712 17.0869 17.4832 15.6494 18.3168L18 22.386C21.7707 20.2052 24 16.3789 24 12.0955C24 11.4857 23.9551 11.0497 23.8652 10.5587C23.7968 10.1858 23.473 9.91258 23.0938 9.91258Z"
                          fill="#167EE6"
                        />
                        <path
                          d="M12 19.3037C9.30218 19.3037 6.94699 17.8297 5.68207 15.6484L1.61304 17.9938C3.68374 21.5826 7.56283 23.9994 12 23.9994C14.1768 23.9994 16.2307 23.4133 18 22.3919V22.3863L15.6494 18.3171C14.5742 18.9408 13.3299 19.3037 12 19.3037Z"
                          fill="#12B347"
                        />
                        <path
                          d="M18 22.3932V22.3876L15.6494 18.3184C14.5741 18.9419 13.33 19.3049 12 19.3049V24.0006C14.1767 24.0006 16.2308 23.4145 18 22.3932Z"
                          fill="#0F993E"
                        />
                        <path
                          d="M4.69566 12.0003C4.69566 10.6705 5.05856 9.42637 5.68205 8.3512L1.61302 6.00586C0.586031 7.76962 0 9.81797 0 12.0003C0 14.1826 0.586031 16.2309 1.61302 17.9947L5.68205 15.6494C5.05856 14.5742 4.69566 13.3301 4.69566 12.0003Z"
                          fill="#FFD500"
                        />
                        <path
                          d="M12 4.69566C13.7593 4.69566 15.3753 5.32078 16.6375 6.36061C16.9489 6.61711 17.4014 6.59859 17.6867 6.31336L19.9024 4.09758C20.2261 3.77395 20.203 3.24422 19.8573 2.94431C17.7425 1.10967 14.991 0 12 0C7.56283 0 3.68374 2.41673 1.61304 6.00558L5.68207 8.35092C6.94699 6.16969 9.30218 4.69566 12 4.69566Z"
                          fill="#FF4B26"
                        />
                        <path
                          d="M16.6374 6.36061C16.9488 6.61711 17.4015 6.59859 17.6866 6.31336L19.9024 4.09758C20.226 3.77395 20.2029 3.24422 19.8573 2.94431C17.7425 1.10962 14.991 0 12 0V4.69566C13.7592 4.69566 15.3752 5.32078 16.6374 6.36061Z"
                          fill="#D93F21"
                        />
                      </g>
                    </svg>
                  </span>
                  Log in with Google
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /Register -->
    <!-- Reset Password --> */}
      <div className="offcanvas offcanvas-end canvas-sidebar" id="reset">
        <div className="canvas-header">
          <h3 className="title fw-normal text-uppercase">Reset password</h3>
          <span
            className="icon-close link icon-close-popup"
            data-bs-dismiss="offcanvas"
          ></span>
        </div>
        <div className="canvas-body">
          <p className="sub-title text-main-4">
            Please enter your registered email address to receive an email to
            reset your password
          </p>
          <form className="form-reset">
            <div className="form-content">
              <fieldset className="tf-field">
                <input className="tf-input" type="text" required />
                <label className="tf-lable">First name *</label>
              </fieldset>
            </div>
            <button
              type="submit"
              className="tf-btn btn-fill w-100 fw-medium animate-btn"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
      {/* <!-- /Reset Password -->
    <!-- Shopping Cart --> */}
      <div
        className="offcanvas offcanvas-end popup-shopping-cart"
        id="shoppingCart"
      >
        <div className="canvas-wrapper">
          <div className="canvas-header">
            <h3 className="title fw-normal text-uppercase">shopping cart</h3>
            <span
              className="icon-close link icon-close-popup"
              data-bs-dismiss="offcanvas"
            ></span>
          </div>
          <div className="wrap list-file-delete">
            <div className="tf-mini-cart-threshold">
              <h6 className="text fw-normal text-uppercase">
                Spend <span className="fw-medium">$100</span> more to get
                <span className="fw-medium">Free Shipping</span>
              </h6>
              <div className="tf-progress-bar tf-progress-ship">
                <div
                  className="value"
                  style={{ width: "0%" }}
                  data-progress="75"
                >
                  <i className="icon icon-delivery"></i>
                </div>
              </div>
              <div className="tf-number-count">
                <p className="text-uppercase">
                  <span className="prd-count">4</span> products
                </p>

                <a
                  href="javascript:void(0)"
                  className="tf-btn-line style-line-2 clear-file-delete"
                >
                  <span className="text-caption"> Empty cart </span>
                </a>
              </div>
            </div>
            <div className="tf-mini-cart-wrap">
              <div className="tf-mini-cart-main">
                <div className="tf-mini-cart-sroll">
                  <ul className="tf-mini-cart-items">
                    <li className="tf-mini-cart-item file-delete">
                      <div className="tf-mini-cart-image">
                        <img src="assets/images/products/product-24.jpg" alt="" />
                      </div>
                      <div className="tf-mini-cart-info">
                        <a
                          href="product-default.html"
                          className="prd-name link"
                        >
                          Crystal Birthstone Eternity Circle Charm
                        </a>
                        <p className="type-select text-main-4">
                          Rose Gold / 50
                        </p>
                        <div className="prd-quantity">
                          <p className="text-caption">Qty:</p>
                          <div className="wg-quantity style-2">
                            <button className="btn-quantity minus-quantity">
                              <i className="icon-minus"></i>
                            </button>
                            <input
                              className="quantity-product"
                              type="text"
                              name="number"
                              // value="1"
                            />
                            <button className="btn-quantity plus-quantity">
                              <i className="icon-plus"></i>
                            </button>
                          </div>
                        </div>
                        <a
                          href="javascript:void(0)"
                          className="tf-btn-line style-line-2 remove"
                        >
                          <span className="text-caption"> Remove </span>
                        </a>
                      </div>
                      <p className="tf-mini-card-price h6 fw-normal">$130.00</p>
                    </li>
                    <li className="tf-mini-cart-item file-delete">
                      <div className="tf-mini-cart-image">
                        <img src="assets/images/products/product-26.jpg" alt="" />
                      </div>
                      <div className="tf-mini-cart-info">
                        <a
                          href="product-default.html"
                          className="prd-name link"
                        >
                          Ball Bracelet
                        </a>
                        <p className="type-select text-main-4">
                          Rose Gold / 50
                        </p>
                        <div className="prd-quantity">
                          <p className="text-caption">Qty:</p>
                          <div className="wg-quantity style-2">
                            <button className="btn-quantity minus-quantity">
                              <i className="icon-minus"></i>
                            </button>
                            <input
                              className="quantity-product"
                              type="text"
                              name="number"
                              // value="1"
                            />
                            <button className="btn-quantity plus-quantity">
                              <i className="icon-plus"></i>
                            </button>
                          </div>
                        </div>
                        <a
                          href="javascript:void(0)"
                          className="tf-btn-line style-line-2 remove"
                        >
                          <span className="text-caption"> Remove </span>
                        </a>
                      </div>
                      <p className="tf-mini-card-price h6 fw-normal">$150.00</p>
                    </li>
                    <li className="tf-mini-cart-item file-delete">
                      <div className="tf-mini-cart-image">
                        <img src="assets/images/products/product-28.jpg" alt="" />
                      </div>
                      <div className="tf-mini-cart-info">
                        <a
                          href="product-default.html"
                          className="prd-name link"
                        >
                          Engagement Ring in 18k Yellow Gold
                        </a>
                        <p className="type-select text-main-4">
                          Rose Gold / 50
                        </p>
                        <div className="prd-quantity">
                          <p className="text-caption">Qty:</p>
                          <div className="wg-quantity style-2">
                            <button className="btn-quantity minus-quantity">
                              <i className="icon-minus"></i>
                            </button>
                            <input
                              className="quantity-product"
                              type="text"
                              name="number"
                              // value="1"
                            />
                            <button className="btn-quantity plus-quantity">
                              <i className="icon-plus"></i>
                            </button>
                          </div>
                        </div>
                        <a
                          href="javascript:void(0)"
                          className="tf-btn-line style-line-2 remove"
                        >
                          <span className="text-caption"> Remove </span>
                        </a>
                      </div>
                      <p className="tf-mini-card-price h6 fw-normal">$130.00</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="tf-mini-cart-bottom">
                <div className="tf-mini-cart-tool">
                  <div className="tf-mini-cart-tool-btn btn-add-gift">
                    <i className="icon icon-box"></i>
                    <p className="text-caption">Add gift wrap</p>
                  </div>
                  <div className="tf-mini-cart-tool-btn btn-add-note">
                    <i className="icon icon-note"></i>
                    <p className="text-caption">Order note</p>
                  </div>
                  <div className="tf-mini-cart-tool-btn btn-estimate-shipping">
                    <i className="icon icon-delivery-3"></i>
                    <p className="text-caption">Shipping</p>
                  </div>
                </div>
                <div className="tf-mini-cart-bottom-wrap">
                  <div className="tf-cart-totals-discounts">
                    <h6 className="tf-cart-total-text fw-normal text-uppercase">
                      total:
                    </h6>
                    <div className="tf-totals-total-value h6 fw-normal">
                      $390.00
                    </div>
                  </div>
                  <div className="tf-mini-cart-view-checkout">
                    <a href="shop-cart.html" className="tf-btn w-100 style-2">
                      <span className="fw-medium"> GO TO CART </span>
                    </a>
                    <a
                      href="checkout.html"
                      className="tf-btn btn-fill animate-btn w-100"
                    >
                      <span className="fw-medium"> CHECKOUT </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="tf-mini-cart-tool-openable add-gift">
                <div className="overlay tf-mini-cart-tool-close"></div>
                <form action="#" className="tf-mini-cart-tool-content">
                  <div className="tf-mini-cart-tool-text h5 fw-normal text-uppercase">
                    Add gift wrap
                  </div>
                  <div className="tf-mini-cart-tool-text1">
                    The product will be wrapped carefully. Fee is only
                    <span className="text text-main">$10.00</span>. Do you want
                    a gift wrap?
                  </div>
                  <div className="tf-cart-tool-btns">
                    <button
                      className="subscribe-button tf-btn w-100 btn-fill animate-btn"
                      type="submit"
                    >
                      Add a Gift Wrap
                    </button>
                    <button
                      type="button"
                      className="tf-btn w-100 tf-mini-cart-tool-close"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
              <div className="tf-mini-cart-tool-openable add-note">
                <div className="overlay tf-mini-cart-tool-close"></div>
                <form
                  action="#"
                  className="tf-mini-cart-tool-content style-border"
                >
                  <label
                    htmlFor="Cart-note"
                    className="tf-mini-cart-tool-text h5 fw-normal text-uppercase"
                  >
                    Order note
                  </label>
                  <textarea
                    name="note"
                    id="Cart-note"
                    placeholder="Instruction for seller..."
                    className="d-flex"
                  ></textarea>
                  <div className="tf-cart-tool-btns">
                    <button
                      className="subscribe-button tf-btn w-100 btn-fill animate-btn"
                      type="submit"
                    >
                      Save
                    </button>
                    <button
                      type="button"
                      className="tf-btn w-100 tf-mini-cart-tool-close"
                    >
                      Close
                    </button>
                  </div>
                </form>
              </div>
              <div className="tf-mini-cart-tool-openable estimate-shipping">
                <div className="overlay tf-mini-cart-tool-close"></div>
                <form
                  id="shipping-form"
                  className="tf-mini-cart-tool-content style-border"
                >
                  <div className="tf-mini-cart-tool-text h5 fw-normal text-uppercase">
                    Shipping estimates
                  </div>
                  <div className="field">
                    <p className="text-sm">Country</p>
                    <div className="tf-select">
                      <select
                        className="w-100"
                        id="shipping-country-form"
                        name="address[country]"
                        data-default=""
                      >
                        <option
                          // value="Australia"
                          data-provinces='[["Australian Capital Territory","Australian Capital Territory"],["New South Wales","New South Wales"],["Northern Territory","Northern Territory"],["Queensland","Queensland"],["South Australia","South Australia"],["Tasmania","Tasmania"],["Victoria","Victoria"],["Western Australia","Western Australia"]]'
                        >
                          Australia
                        </option>
                        <option // value="Austria" data-provinces="[]"
                        >
                          Austria
                        </option>
                        <option // value="Belgium" data-provinces="[]"
                        >
                          Belgium
                        </option>
                        <option
                          // value="Canada"
                          data-provinces='[["Ontario","Ontario"],["Quebec","Quebec"]]'
                        >
                          Canada
                        </option>
                        <option // value="Czech Republic" data-provinces="[]"
                        >
                          Czechia
                        </option>
                        <option // value="Denmark" data-provinces="[]"
                        >
                          Denmark
                        </option>
                        <option // value="Finland" data-provinces="[]"
                        >
                          Finland
                        </option>
                        <option // value="France" data-provinces="[]"
                        >
                          France
                        </option>
                        <option // value="Germany" data-provinces="[]"
                        >
                          Germany
                        </option>
                        <option
                          // value="United States"
                          data-provinces='[["Alabama","Alabama"],["California","California"],["Florida","Florida"]]'
                        >
                          United States
                        </option>
                        <option
                          // value="United Kingdom"
                          data-provinces='[["England","England"],["Scotland","Scotland"],["Wales","Wales"],["Northern Ireland","Northern Ireland"]]'
                        >
                          United Kingdom
                        </option>
                        <option // value="India" data-provinces="[]"
                        >
                          India
                        </option>
                        <option // value="Japan" data-provinces="[]"
                        >
                          Japan
                        </option>
                        <option // value="Mexico" data-provinces="[]"
                        >
                          Mexico
                        </option>
                        <option // value="South Korea" data-provinces="[]"
                        >
                          South Korea
                        </option>
                        <option // value="Spain" data-provinces="[]"
                        >
                          Spain
                        </option>
                        <option // value="Italy" data-provinces="[]"
                        >
                          Italy
                        </option>
                        <option
                          // value="Vietnam"
                          data-provinces='[["Ha Noi","Ha Noi"],["Da Nang","Da Nang"],["Ho Chi Minh","Ho Chi Minh"]]'
                        >
                          Vietnam
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="field">
                    <p className="text-sm">State/Province</p>
                    <div className="tf-select">
                      <select
                        id="shipping-province-form"
                        name="address[province]"
                        data-default=""
                      ></select>
                    </div>
                  </div>
                  <div className="field">
                    <p className="text-sm">Zipcode</p>
                    <input
                      type="text"
                      data-opend-focus
                      placeholder="41000"
                      id="zipcode"
                      name="address[zip]"
                      // value=""
                    />
                  </div>
                  <div
                    id="zipcode-message"
                    className="error"
                    style={{ display: "none" }}
                  >
                    We found one shipping rate available for undefined.
                  </div>
                  <div
                    id="zipcode-success"
                    className="success"
                    style={{ display: "none" }}
                  >
                    <p>
                      We found one shipping rate available for your address:
                    </p>
                    <p className="standard">
                      Standard at <span>$0.00</span> USD
                    </p>
                  </div>
                  <div className="tf-cart-tool-btns">
                    <button
                      className="tf-btn w-100 btn-fill animate-btn"
                      type="submit"
                    >
                      Estimate
                    </button>
                    <div className="tf-mini-cart-tool-primary tf-btn btn-out-line-dark2 w-100 tf-mini-cart-tool-close">
                      Close
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /Shopping Cart -->
    <!-- Quick View --> */}
      <div className="modal modalCentered fade modal-quick-view" id="quickView">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <span
              className="icon-close icon-close-popup"
              data-bs-dismiss="modal"
            ></span>
            <div className="tf-product-media-wrap tf-btn-swiper-item">
              <div dir="ltr" className="swiper tf-single-slide">
                <div className="swiper-wrapper">
                  <div className="swiper-slide" data-color="gold">
                    <div className="item">
                      <img
                        className="lazyload"
                        data-src="assets/images/products/detail/prd-detail-1.jpg"
                        src="assets/images/products/detail/prd-detail-1.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="swiper-slide" data-color="rose">
                    <div className="item">
                      <img
                        className="lazyload"
                        data-src="assets/images/products/detail/prd-detail-4.jpg"
                        src="assets/images/products/detail/prd-detail-4.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="swiper-slide" data-color="titanium">
                    <div className="item">
                      <img
                        className="lazyload"
                        data-src="assets/images/products/detail/prd-detail-7.jpg"
                        src="assets/images/products/detail/prd-detail-7.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="nav-swiper-group style-2">
                  <div className="nav-thumbs thumbs-prev single-slide-prev">
                    <span className="fw-normal">PRE</span>
                  </div>
                  <span className="text-main">/</span>
                  <div className="nav-thumbs thumbs-next single-slide-next">
                    <span className="fw-normal">NEXT</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="tf-product-info-wrap">
              <div className="tf-product-info-inner tf-product-info-list">
                <div className="tf-product-info-heading">
                  <a
                    href="product-default.html"
                    className="product-info-name h4 fw-normal text-uppercase link"
                  >
                    engagement ring in 18k yellow gold
                  </a>
                  <div className="product-info-price">
                    <div className="price-wrap">
                      <span className="price-new price-on-sale h4">
                        $2,499.00
                      </span>
                      <span className="price-old compare-at-price fw-normal h6">
                        $2,899.00
                      </span>
                      <p className="badges-on-sale">
                        <i className="icon-tag"></i>
                        <span className="number-sale" data-person-sale="30">
                          30% OFF
                        </span>
                      </p>
                    </div>
                  </div>
                  <p className="product-infor-sub text-main-4">
                    Lorem ipsum dolor sit amet nec etiamconsectetur. Egestas
                    cursus a maecenas massa facilisi adipiscing dolor iaculis.
                    In mattis nec morbi.
                  </p>
                </div>
                <div className="tf-product-info-variant">
                  <div className="variant-picker-item variant-color">
                    <div className="variant-picker-label h6 fw-normal">
                      Material:
                      <span className="variant-picker-label-value value-currentColor">
                        gold
                      </span>
                    </div>
                    <div className="variant-picker-values">
                      <div
                        className="hover-tooltip color-btn style-image-square"
                        data-color="gold"
                        data-price="2,499.00"
                      >
                        <span className="check-color">
                          <img
                            src="assets/images/products/material/yellow.jpg"
                            alt=""
                          />
                        </span>
                        <span className="tooltip">Gold</span>
                      </div>
                      <div
                        className="hover-tooltip color-btn style-image-square"
                        data-color="rose"
                        data-price="2,499.00"
                      >
                        <span className="check-color">
                          <img src="assets/images/products/material/pink.jpg" alt="" />
                        </span>
                        <span className="tooltip">Rose</span>
                      </div>
                      <div
                        className="hover-tooltip color-btn style-image-square"
                        data-color="titanium"
                        data-price="2,499.00"
                      >
                        <span className="check-color">
                          <img src="assets/images/products/material/gray.jpg" alt="" />
                        </span>
                        <span className="tooltip">Titanium</span>
                      </div>
                    </div>
                  </div>
                  <div className="variant-picker-item variant-size">
                    <div className="variant-picker-label h6 fw-normal">
                      Size:
                      <span className="variant-picker-label-value value-currentSize">
                        48
                      </span>
                    </div>
                    <div className="variant-picker-values">
                      <div className="btn-group">
                        <span
                          className="size-btn active"
                          data-size="48"
                          data-price="2,499.00"
                        >
                          48
                        </span>
                        <span
                          className="size-btn"
                          data-size="50"
                          data-price="999.00"
                        >
                          50
                        </span>
                        <span
                          className="size-btn"
                          data-size="52"
                          data-price="1,999.00"
                        >
                          52
                        </span>
                        <span
                          className="size-btn"
                          data-size="54"
                          data-price="2,199.00"
                        >
                          54
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="variant-picker-item">
                    <div className="variant-picker-label h6 fw-normal">
                      Quantity
                    </div>
                    <div className="variant-picker-values">
                      <div className="wg-quantity">
                        <button className="btn-quantity btn-decrease">
                          <i className="icon-minus"></i>
                        </button>
                        <input
                          className="quantity-product"
                          type="text"
                          name="number"
                          // value="1"
                        />
                        <button className="btn-quantity btn-increase">
                          <i className="icon-plus"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tf-product-total-quantity">
                  <div className="group-btn">
                    <a
                      href="#shoppingCart"
                      data-bs-toggle="offcanvas"
                      className="tf-btn btn-fill-2 text-uppercase fw-medium animate-btn"
                    >
                      add to bag
                      <i className="icon-minus d-none d-sm-block"></i>
                      <span className="price-add d-none d-sm-block">
                        $2,499.00
                      </span>
                    </a>
                    <div className="group-btn-action">
                      <a
                        href="javascript:void(0);"
                        className="tf-btn-icon hover-tooltip btn-add-wishlist"
                      >
                        <span className="icon icon-heart-2"></span>
                        <span className="tooltip">Add to Wishlist</span>
                      </a>
                      <a
                        href="#compare"
                        data-bs-toggle="modal"
                        aria-controls="compare"
                        className="tf-btn-icon hover-tooltip"
                      >
                        <span className="icon icon-compare"></span>
                        <span className="tooltip">Compare</span>
                      </a>
                    </div>
                  </div>
                  <a
                    href="checkout.html"
                    className="tf-btn w-100 text-uppercase fw-medium"
                  >
                    buy it now
                  </a>
                </div>
                <a href="product-default.html" className="tf-btn-line">
                  <span className="text-body">View full details</span>
                  <i className="icon icon-arrow-top-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /Quick View -->
    <!-- Compare --> */}
      <div className="modal modalCentered fade modal-compare" id="compare">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <span className="icon-close-popup" data-bs-dismiss="modal">
              <i className="icon-close"></i>
            </span>
            <div className="modal-heading">
              <h3 className="title fw-normal text-uppercase">
                compare products
              </h3>
            </div>
            <div className="modal-body main-list-clear">
              <div className="tf-compare-inner">
                <div className="tf-compare-list list-empty">
                  <p className="text-empty">Your compare is curently empty</p>
                  <div className="tf-compare-item card_product--V01 file-delete">
                    <div className="card_product-wrapper aspect-ratio-1">
                      <span className="remove icon-close"></span>
                      <a href="product-default.html" className="product-img">
                        <img
                          src="assets/images/products/product-24.jpg"
                          data-src="assets/images/products/product-24.jpg"
                          alt="Image Product"
                          className="lazyload img-product"
                        />
                        <img
                          src="assets/images/products/product-25.jpg"
                          data-src="assets/images/products/product-25.jpg"
                          alt="Image Product"
                          className="lazyload img-hover"
                        />
                      </a>
                    </div>
                    <div className="card_product-info text-center">
                      <a
                        href="product-default.html"
                        className="name-product link text-line-clamp-2"
                      >
                        Crystal Birthstone Eternity Circle Charm
                      </a>
                      <div className="price-wrap justify-content-center">
                        <span className="price-new">$3,370.00</span>
                        <span className="price-old fw-normal text-caption">
                          $3,899.00
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="tf-compare-item card_product--V01 file-delete">
                    <div className="card_product-wrapper aspect-ratio-1">
                      <span className="remove icon-close"></span>
                      <a href="product-default.html" className="product-img">
                        <img
                          src="assets/images/products/product-26.jpg"
                          data-src="assets/images/products/product-26.jpg"
                          alt="Image Product"
                          className="lazyload img-product"
                        />
                        <img
                          src="assets/images/products/product-27.jpg"
                          data-src="assets/images/products/product-27.jpg"
                          alt="Image Product"
                          className="lazyload img-hover"
                        />
                      </a>
                    </div>
                    <div className="card_product-info text-center">
                      <a
                        href="product-default.html"
                        className="name-product link text-line-clamp-2"
                      >
                        Ball Bracelet
                      </a>
                      <div className="price-wrap justify-content-center">
                        <span className="price-new">$2,499.00</span>
                        <span className="price-old fw-normal text-caption">
                          $2,899.00
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="tf-compare-item card_product--V01 file-delete">
                    <div className="card_product-wrapper aspect-ratio-1">
                      <span className="remove icon-close"></span>
                      <a href="product-default.html" className="product-img">
                        <img
                          src="assets/images/products/product-28.jpg"
                          data-src="assets/images/products/product-28.jpg"
                          alt="Image Product"
                          className="lazyload img-product"
                        />
                        <img
                          src="assets/images/products/product-29.jpg"
                          data-src="assets/images/products/product-29.jpg"
                          alt="Image Product"
                          className="lazyload img-hover"
                        />
                      </a>
                    </div>
                    <div className="card_product-info text-center">
                      <a
                        href="product-default.html"
                        className="name-product link text-line-clamp-2"
                      >
                        Engagement Ring in 18k Yellow Gold
                      </a>
                      <div className="price-wrap justify-content-center">
                        <span className="price-new">$2,499.00</span>
                        <span className="price-old fw-normal text-caption">
                          $2,899.00
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="tf-compare-item card_product--V01 file-delete">
                    <div className="card_product-wrapper aspect-ratio-1">
                      <span className="remove icon-close"></span>
                      <a href="product-default.html" className="product-img">
                        <img
                          src="assets/images/products/product-34.jpg"
                          data-src="assets/images/products/product-34.jpg"
                          alt="Image Product"
                          className="lazyload img-product"
                        />
                        <img
                          src="assets/images/products/product-35.jpg"
                          data-src="assets/images/products/product-35.jpg"
                          alt="Image Product"
                          className="lazyload img-hover"
                        />
                      </a>
                    </div>
                    <div className="card_product-info text-center">
                      <a
                        href="product-default.html"
                        className="name-product link text-line-clamp-2"
                      >
                        Vine Ring in Platinum with a Tanzanite and Diamonds
                      </a>
                      <div className="price-wrap justify-content-center">
                        <span className="price-new">$2,499.00</span>
                        <span className="price-old fw-normal text-caption">
                          $2,899.00
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="group-btn">
                <a
                  href="compare.html"
                  className="tf-btn btn-fill animate-btn fw-medium"
                >
                  COMPARE <span className="count-item-compare">(4)</span>
                </a>
                <button
                  type="button"
                  className="tf-btn fw-medium clear-list-empty"
                >
                  <span>CLEAR ALL</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /Compare -->
    <!-- Quick Add --> */}
      <div className="modal modalCentered fade modal-quick-add" id="quickAdd">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="tf-product-info-wrap mt-0">
              <div className="tf-product-info-inner tf-product-info-list mb-0">
                <div className="tf-product-mini-view">
                  <a href="product-default.html" className="prd-image">
                    <img
                      src="assets/images/products/product-28.jpg"
                      alt="Image Product"
                    />
                  </a>
                  <div className="prd-content">
                    <a
                      href="product-default.html"
                      className="prd-name link h6 fw-normal text-uppercase"
                    >
                      engagement ring in 18k yellow gold
                    </a>
                    <div className="price-wrap">
                      <span className="price-new price-on-sale h5">
                        $2,499.00
                      </span>
                      <span className="price-old compare-at-price">
                        $2,899.00
                      </span>
                    </div>
                  </div>
                  <span
                    className="icon-close icon-close-popup"
                    data-bs-dismiss="modal"
                  ></span>
                </div>
                <div className="tf-product-info-variant">
                  <div className="variant-picker-item variant-color">
                    <div className="variant-picker-label h6 fw-normal">
                      Material:
                      <span className="variant-picker-label-value value-currentColor">
                        gold
                      </span>
                    </div>
                    <div className="variant-picker-values">
                      <div
                        className="hover-tooltip color-btn style-image-square active"
                        data-color="gold"
                        data-price="2,499.00"
                      >
                        <span className="check-color">
                          <img
                            src="assets/images/products/material/yellow.jpg"
                            alt=""
                          />
                        </span>
                        <span className="tooltip">Gold</span>
                      </div>
                      <div
                        className="hover-tooltip color-btn style-image-square"
                        data-color="rose"
                        data-price="2,599.00"
                      >
                        <span className="check-color">
                          <img src="assets/images/products/material/pink.jpg" alt="" />
                        </span>
                        <span className="tooltip">Rose</span>
                      </div>
                      <div
                        className="hover-tooltip color-btn style-image-square"
                        data-color="titanium"
                        data-price="2,699.00"
                      >
                        <span className="check-color">
                          <img src="assets/images/products/material/gray.jpg" alt="" />
                        </span>
                        <span className="tooltip">Titanium</span>
                      </div>
                    </div>
                  </div>
                  <div className="variant-picker-item variant-size">
                    <div className="variant-picker-label h6 fw-normal">
                      Size:
                      <span className="variant-picker-label-value value-currentSize">
                        48
                      </span>
                    </div>
                    <div className="variant-picker-values">
                      <div className="variant-picker-values">
                        <div className="btn-group">
                          <span
                            className="size-btn active"
                            data-size="48"
                            data-price="2,499.00"
                          >
                            48
                          </span>
                          <span
                            className="size-btn"
                            data-size="50"
                            data-price="999.00"
                          >
                            50
                          </span>
                          <span
                            className="size-btn"
                            data-size="52"
                            data-price="1,999.00"
                          >
                            52
                          </span>
                          <span
                            className="size-btn"
                            data-size="54"
                            data-price="2,199.00"
                          >
                            54
                          </span>
                        </div>
                        <a
                          href="#sizeGuide"
                          data-bs-toggle="offcanvas"
                          className="tf-btn-line style-line-2 fw-normal"
                        >
                          <span className="text-caption">Size Guide</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="variant-picker-item">
                    <div className="variant-picker-label h6 fw-normal">
                      Quantity
                    </div>
                    <div className="variant-picker-values">
                      <div className="wg-quantity">
                        <button className="btn-quantity btn-decrease">
                          <i className="icon-minus"></i>
                        </button>
                        <input
                          className="quantity-product"
                          type="text"
                          name="number"
                          // value="1"
                        />
                        <button className="btn-quantity btn-increase">
                          <i className="icon-plus"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tf-product-total-quantity mb-0">
                  <div className="group-btn">
                    <a
                      href="#shoppingCart"
                      data-bs-toggle="offcanvas"
                      className="tf-btn btn-fill-2 text-uppercase fw-medium animate-btn"
                    >
                      add to bag
                      <i className="icon-minus d-none d-sm-block"></i>
                      <span className="price-add d-none d-sm-block">
                        $2,499.00
                      </span>
                    </a>
                    <div className="group-btn-action">
                      <a
                        href="javascript:void(0);"
                        className="tf-btn-icon hover-tooltip btn-add-wishlist"
                      >
                        <span className="icon icon-heart-2"></span>
                        <span className="tooltip">Add to Wishlist</span>
                      </a>
                      <a
                        href="#compare"
                        data-bs-toggle="modal"
                        aria-controls="compare"
                        className="tf-btn-icon hover-tooltip"
                      >
                        <span className="icon icon-compare"></span>
                        <span className="tooltip">Compare</span>
                      </a>
                    </div>
                  </div>
                  <a
                    href="checkout.html"
                    className="tf-btn w-100 text-uppercase fw-medium"
                  >
                    buy it now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /Quick Add -->
    <!-- Size Guide --> */}
      <div
        className="offcanvas offcanvas-end canvas-sidebar canvas-size"
        id="sizeGuide"
      >
        <div className="canvas-header">
          <h3 className="title fw-normal text-uppercase">size guide</h3>
          <span
            className="icon-close link icon-close-popup"
            data-bs-dismiss="offcanvas"
          ></span>
        </div>
        <div className="canvas-body">
          <div className="tf-page-size-chart-content">
            <p className="title h5 fw-normal text-uppercase">know the size</p>
            <ul className="resize-info-list">
              <li>1. Select an existing ring that fits the desired finger.</li>
              <li>2. Measure the internal diameter of the ring in mm.</li>
              <li>3. Select the diameter below to determine your ring size.</li>
            </ul>
            <div className="img-chart">
              <img
                src="assets/images/section/resize-chart.png"
                data-src="assets/images/section/resize-chart.png"
                alt=""
                className="lazyload"
              />
            </div>
          </div>
          <div className="tf-table-res-df">
            <p className="title h5 fw-normal text-uppercase">Size chart</p>
            <p className="sub text-main-4 mb-0">
              At Vemus Jewelry, we want your jewelry to fit flawlessly. Use our
              size guide to ensure the perfect match for rings, bracelets, and
              necklaces.
            </p>
          </div>
          <div className="tf-sizeguide-table">
            <table>
              <thead>
                <tr>
                  <th>INTERNAL DIAMETER (MM)</th>
                  <th>US</th>
                  <th>US</th>
                  <th>EU</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>13.6</td>
                  <td>E</td>
                  <td>2.75</td>
                  <td>42</td>
                </tr>
                <tr>
                  <td>14.0</td>
                  <td>F</td>
                  <td>3.25</td>
                  <td>44</td>
                </tr>
                <tr>
                  <td>14.4</td>
                  <td>G</td>
                  <td>3.75</td>
                  <td>45</td>
                </tr>
                <tr>
                  <td>14.9</td>
                  <td>H</td>
                  <td>4.25</td>
                  <td>46.5</td>
                </tr>
                <tr>
                  <td>15.1</td>
                  <td>I</td>
                  <td>4.5</td>
                  <td>47</td>
                </tr>
                <tr>
                  <td>15.5</td>
                  <td>J</td>
                  <td>5</td>
                  <td>48.5</td>
                </tr>
                <tr>
                  <td>15.9</td>
                  <td>K</td>
                  <td>5.5</td>
                  <td>50</td>
                </tr>
                <tr>
                  <td>16.3</td>
                  <td>l</td>
                  <td>6</td>
                  <td>51</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* <!-- /Size Guide -->
    <!-- Search --> */}
      <div className="offcanvas offcanvas-top offcanvas-search" id="search">
        <div className="offcanvas-content">
          <div className="container">
            <div className="popup-content">
              <form className="form-search">
                <fieldset>
                  <input
                    type="text"
                    placeholder="ENTER YOUR SEARCH"
                    className=""
                    name="text"
                    tabIndex="0"
                    // value=""
                    aria-required="true"
                    required=""
                  />
                </fieldset>
                <button type="submit" className="link">
                  <i className="icon icon-search"></i>
                </button>
                <span className="icon-close-popup" data-bs-dismiss="offcanvas">
                  <i className="icon-close"></i>
                </span>
              </form>
              <div className="tf-grid-layout sm-col-2">
                <div className="feature-wrap">
                  <p className="title">QUICK LINK</p>
                  <ul className="quick-link-list">
                    <li>
                      <a
                        href="shop-collection-list.html"
                        className="link-item text-main-4 link"
                      >
                        Best Sellers
                      </a>
                    </li>
                    <li>
                      <a
                        href="shop-collection-list.html"
                        className="link-item text-main-4 link"
                      >
                        Bracelets
                      </a>
                    </li>
                    <li>
                      <a
                        href="shop-collection-list.html"
                        className="link-item text-main-4 link"
                      >
                        Earrings
                      </a>
                    </li>
                    <li>
                      <a
                        href="shop-collection-list.html"
                        className="link-item text-main-4 link"
                      >
                        Rings
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="feature-wrap">
                  <p className="title">SUGGESTION FOR YOU</p>
                  <ul className="product-list">
                    <li>
                      <div className="tf-product-mini-view">
                        <a href="product-default.html" className="prd-image">
                          <img src="assets/images/products/product-28.jpg" alt="" />
                        </a>
                        <div className="prd-content">
                          <a
                            href="product-default.html"
                            className="prd-name link text-uppercase"
                          >
                            engagement ring in 18k yellow gold
                          </a>
                          <div className="price-wrap">
                            <span className="price-new price-on-sale">
                              $2,499.00
                            </span>
                            <span className="price-old compare-at-price text-caption">
                              $2,623.95
                            </span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="tf-product-mini-view">
                        <a href="product-default.html" className="prd-image">
                          <img src="assets/images/products/product-32.jpg" alt="" />
                        </a>
                        <div className="prd-content">
                          <a
                            href="product-default.html"
                            className="prd-name link text-uppercase"
                          >
                            Infinite Lab - Grown Diamond Bangle
                          </a>
                          <div className="price-wrap">
                            <span className="price-new price-on-sale">
                              $2,499.00
                            </span>
                            <span className="price-old compare-at-price text-caption">
                              $2,623.95
                            </span>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <span className="close" data-bs-dismiss="offcanvas"></span>
      </div>
      {/* <!-- /Search -->
    <!-- Before You Leave --> */}
      <div
        className="modal modalCentered fade auto-popup modal-before-leave"
        id="beforeYouLeave"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <div className="image-coupon flex-shrink-xl-0">
                <div className="image">
                  <img src="assets/images/banner/banner-you-leave.jpg" alt="Image" />
                </div>
                <div className="wrap text-center">
                  <p className="title text-lg fw-medium text-white">
                    WAIT! BEFORE YOU LEAVE...
                  </p>
                  <p className="sub-title text-white">
                    Take 20% off on first order when checkout.
                  </p>
                  <div className="d-flex justify-content-center">
                    <div className="coupon-copy-wrap">
                      <p className="coupon-code fw-medium">GET20OFF</p>
                      <i className="icon icon-clip-board"></i>
                    </div>
                  </div>
                  <a
                    href="shop-default.html"
                    className="tf-btn btn-fill animate-btn w-100"
                  >
                    <span className="fw-medium">CONTINUE SHOPPING</span>
                  </a>
                </div>
              </div>
              <div className="content">
                <span className="icon-close-popup" data-bs-dismiss="modal">
                  <i className="icon-close"></i>
                </span>
                <h4 className="title fw-normal text-uppercase">
                  recommended products
                </h4>
                <div className="tf-mini-cart-main wrapper-leave-main">
                  <div className="tf-mini-cart-sroll wrapper-leave-scroll p-0">
                    <div className="tf-product-mini-view">
                      <a href="product-default.html" className="prd-image">
                        <img src="assets/images/products/product-16.jpg" alt="" />
                      </a>
                      <div className="prd-content">
                        <a
                          href="product-default.html"
                          className="prd-name link"
                        >
                          Infinite Lab - Grown Diamond Bangle
                        </a>
                        <div className="price-wrap">
                          <span className="price-new price-on-sale fw-medium">
                            $2,499.00
                          </span>
                          <span className="price-old compare-at-price text-caption">
                            $2,623.95
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="tf-product-mini-view">
                      <a href="product-default.html" className="prd-image">
                        <img src="assets/images/products/product-18.jpg" alt="" />
                      </a>
                      <div className="prd-content">
                        <a
                          href="product-default.html"
                          className="prd-name link"
                        >
                          Olive Leaf Band Ring
                        </a>
                        <div className="price-wrap">
                          <span className="price-new price-on-sale fw-medium">
                            $2,499.00
                          </span>
                          <span className="price-old compare-at-price text-caption">
                            $2,623.95
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="tf-product-mini-view">
                      <a href="product-default.html" className="prd-image">
                        <img src="assets/images/products/product-20.jpg" alt="" />
                      </a>
                      <div className="prd-content">
                        <a
                          href="product-default.html"
                          className="prd-name link"
                        >
                          Organically Shaped Heart Bangle
                        </a>
                        <div className="price-wrap">
                          <span className="price-new price-on-sale">
                            $2,499.00
                          </span>
                          <span className="price-old compare-at-price text-caption">
                            $2,623.95
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="tf-product-mini-view">
                      <a href="product-default.html" className="prd-image">
                        <img src="assets/images/products/product-16.jpg" alt="" />
                      </a>
                      <div className="prd-content">
                        <a
                          href="product-default.html"
                          className="prd-name link"
                        >
                          Infinite Lab - Grown Diamond Bangle
                        </a>
                        <div className="price-wrap">
                          <span className="price-new price-on-sale fw-medium">
                            $2,499.00
                          </span>
                          <span className="price-old compare-at-price text-caption">
                            $2,623.95
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="tf-product-mini-view">
                      <a href="product-default.html" className="prd-image">
                        <img src="assets/images/products/product-18.jpg" alt="" />
                      </a>
                      <div className="prd-content">
                        <a
                          href="product-default.html"
                          className="prd-name link"
                        >
                          Olive Leaf Band Ring
                        </a>
                        <div className="price-wrap">
                          <span className="price-new price-on-sale fw-medium">
                            $2,499.00
                          </span>
                          <span className="price-old compare-at-price text-caption">
                            $2,623.95
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="tf-product-mini-view">
                      <a href="product-default.html" className="prd-image">
                        <img src="assets/images/products/product-20.jpg" alt="" />
                      </a>
                      <div className="prd-content">
                        <a
                          href="product-default.html"
                          className="prd-name link"
                        >
                          Organically Shaped Heart Bangle
                        </a>
                        <div className="price-wrap">
                          <span className="price-new price-on-sale">
                            $2,499.00
                          </span>
                          <span className="price-old compare-at-price text-caption">
                            $2,623.95
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /Before You Leave -->
    <!-- Toolbar --> */}
      <div className="tf-toolbar-bottom">
        <div className="toolbar-item">
          <a href="shop-default.html">
            <span className="toolbar-icon">
              <i className="icon icon-menu-home"></i>
            </span>
            <span className="toolbar-label">Shop</span>
          </a>
        </div>
        <div className="toolbar-item">
          <a href="#search" data-bs-toggle="offcanvas">
            <span className="toolbar-icon">
              <i className="icon icon-search-2"></i>
            </span>
            <span className="toolbar-label">Search</span>
          </a>
        </div>
        <div className="toolbar-item">
          <a href="account-page.html">
            <span className="toolbar-icon">
              <i className="icon icon-user-2"></i>
            </span>
            <span className="toolbar-label">Account</span>
          </a>
        </div>
        <div className="toolbar-item">
          <a href="wishlist.html">
            <span className="toolbar-icon">
              <i className="icon icon-hearth-3"></i>
              <span className="toolbar-count">0</span>
            </span>
            <span className="toolbar-label">Wishlist</span>
          </a>
        </div>
        <div className="toolbar-item">
          <a href="shop-cart.html">
            <span className="toolbar-icon">
              <i className="icon icon-cart-2"></i>
              <span className="toolbar-count">0</span>
            </span>
            <span className="toolbar-label">Cart</span>
          </a>
        </div>
      </div>
      {/* <!-- /Toolbar -->
    <!-- Unavailable --> */}
      <div
        className="modal modalCentered fade modal-unavailable"
        id="unavailable"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <span className="icon-close-popup" data-bs-dismiss="modal">
              <i className="icon-close"></i>
            </span>
            <div className="tf-product-notify">
              <h4 className="title">Notify me when it back in stock</h4>
              <p className="sub-title text-main-6">
                Enter your email address to be notified if the product becomes
                available again.
              </p>
              <form className="style-border form-notify">
                <div className="form-content-2">
                  <input type="text" required="" placeholder="Name" />
                  <input type="text" required="" placeholder="Email*" />
                </div>
                <button
                  type="submit"
                  className="tf-btn btn-fill-2 w-100 fw-medium animate-btn"
                >
                  submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default App;
