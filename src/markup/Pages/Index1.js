import React from "react";
import Header from "./../Layout/Header";
import Footer from "./../Layout/Footer";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import OurPartners from "./../Element/OurPartners";
import Slider from "./../Element/Slider";

//Images
var img1 = require("./../../images/background/bg5.jpg");
var img2 = require("./../../images/background/bg1.jpg");
var img3 = require("./../../images/background/bg5.jpg");
var img4 = require("./../../images/background/bg4.jpg");

const blogNews = [
  {
    image: require("./../../images/blog/grid/cakeimg5.jpg"),
    title: "Understand The Background Of Bakery Now.",
  },
  {
    image: require("./../../images/blog/grid/cakeimg23.jpg"),
    title: "Seven Reliable Sources To Learn About Bakery.",
  },
  {
    image: require("./../../images/blog/grid/cakeimg21.jpg"),
    title: "Ten Places That You Can Find Bakery.",
  },
];

const Index1 = () => {
  return (
    <>
      <Header />
      <div className="page-content bg-white">
        <div className="content-block">
          <Slider />
          <div
            className="section-full content-inner-3"
            style={{
              backgroundImage: "url(" + img1 + ")",
              backgroundSize: "50%",
            }}
          ></div>

          <div className="section-full bg-white">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="port-box1 text-white">
                    <div className="dlab-media">
                      <Link to={"/our-menu-2"}>
                        <img
                          src={require("./../../images/our-work/cakeimg11.jpg")}
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="dlab-info">
                      <h2 className="title">Cake</h2>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="port-box1 text-white">
                    <div className="dlab-media">
                      <img
                        src={require("./../../images/our-work/cakeimg6.jpg")}
                        alt=""
                      />
                    </div>
                    <div className="dlab-info">
                      <h2 className="title">lemon cake</h2>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="port-box1 text-white">
                    <div className="dlab-media">
                      <img
                        src={require("./../../images/our-work/cakeimg9.jpg")}
                        alt=""
                      />
                    </div>
                    <div className="dlab-info">
                      <h2 className="title">wedding cake</h2>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="port-box1 text-white m-md-b0 m-sm-b0">
                    <div className="dlab-media">
                      <img
                        src={require("./../../images/our-work/cakeimg7.jpg")}
                        alt=""
                      />
                    </div>
                    <div className="dlab-info">
                      <h2 className="title">fruit cake</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="section-full content-inner service-area2 bg-img-fix bg-line-top bg-line-bottom"
            style={{
              backgroundImage: "url(" + img4 + ")",
              backgroundSize: "cover",
            }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-head text-center">
                    <h2 className="text-white">What Do We Offer For You?</h2>
                    <p className="text-bold">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s
                    </p>
                    <div className="dlab-separator style1 bg-primary"></div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 m-b30">
                  <img
                    src={require("./../../images/about/cakeimg25.jpg")}
                    className="img-cover radius-sm"
                    alt=""
                  />
                </div>
                <div className="col-lg-8">
                  <div className="row p-l30">
                    <div className="col-lg-6 col-sm-6 m-b30">
                      <div className="icon-bx-wraper text-white service-box2">
                        <div className="icon-bx">
                          <Link to={""} className="icon-cell">
                            <img
                              src={require("./../../images/icons/service-icon/icon2.png")}
                              alt=""
                            />
                          </Link>
                        </div>
                        <div className="icon-content">
                          <h5 className="dlab-tilte">Pancakes</h5>
                          <p>Lorem Ipsum is dummy</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-6 m-b30">
                      <div className="icon-bx-wraper text-white service-box2">
                        <div className="icon-bx">
                          <Link to={""} className="icon-cell">
                            <img
                              src={require("./../../images/icons/service-icon/icon3.png")}
                              alt=""
                            />
                          </Link>
                        </div>
                        <div className="icon-content">
                          <h5 className="dlab-tilte">Muffin</h5>
                          <p>Lorem Ipsum is dummy</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-6 m-b30">
                      <div className="icon-bx-wraper text-white service-box2">
                        <div className="icon-bx">
                          <Link to={""} className="icon-cell">
                            <img
                              src={require("./../../images/icons/service-icon/icon4.png")}
                              alt=""
                            />
                          </Link>
                        </div>
                        <div className="icon-content">
                          <h5 className="dlab-tilte">Pumpkin cakes</h5>
                          <p>Lorem Ipsum is dummy</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-6 m-b30">
                      <div className="icon-bx-wraper text-white service-box2">
                        <div className="icon-bx">
                          <Link to={""} className="icon-cell">
                            <img
                              src={require("./../../images/icons/service-icon/icon5.png")}
                              alt=""
                            />
                          </Link>
                        </div>
                        <div className="icon-content">
                          <h5 className="dlab-tilte">Pumpkin Cupcakes</h5>
                          <p>Lorem Ipsum is dummy</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-6 m-b30">
                      <div className="icon-bx-wraper text-white service-box2">
                        <div className="icon-bx">
                          <Link to={""} className="icon-cell">
                            <img
                              src={require("./../../images/icons/service-icon/icon5.png")}
                              alt=""
                            />
                          </Link>
                        </div>
                        <div className="icon-content">
                          <h5 className="dlab-tilte">Cake Services</h5>
                          <p>Lorem Ipsum is dummy</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-6 m-b30">
                      <div className="icon-bx-wraper text-white service-box2">
                        <div className="icon-bx">
                          <Link to={""} className="icon-cell">
                            <img
                              src={require("./../../images/icons/service-icon/icon1.png")}
                              alt=""
                            />
                          </Link>
                        </div>
                        <div className="icon-content">
                          <h5 className="dlab-tilte">Birthday Cake</h5>
                          <p>Lorem Ipsum is dummy</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="section-full bg-white"
            style={{
              backgroundImage: "url(" + img3 + ")",
              backgroundSize: "100%",
            }}
          >
            <div className="container">
              <div className="row m-lr0 about-area1">
                <div className="col-lg-6 p-lr0">
                  <img
                    className="img-cover"
                    src={require("./../../images/about/cakeimg3.jpg")}
                    alt=""
                  />
                </div>
                <div className="col-lg-6 p-lr0 d-flex align-items-center text-center">
                  <div className="about-bx">
                    <div className="section-head text-center text-white">
                      <h4 className="text-white">Limited Time Offer</h4>
                      <p>Wedding Cake Sale !</p>
                      <div className="icon-bx">
                        <img
                          src={require("./../../images/icons/service-icon/icon2.png")}
                          alt=""
                        />
                      </div>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore
                    </p>
                    <Link
                      to={"about-1"}
                      className="btn-secondry white btnhover btn-md"
                    >
                      <i className="fa fa-cart"></i>GET NOW
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="container">
								<div className="row client-area1 p-t80">
									<OurPartners  />
								</div>
							</div> */}
            <div className="container content-inner">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-head text-center">
                    <div className="icon-bx icon-bx-xl">
                      <img src={require("./../../images/cake1.jpg")} alt="" />
                    </div>
                    <h3>From The Blog</h3>
                    <p>Latest news and updates</p>
                  </div>
                </div>
              </div>
              <div className="row">
                {blogNews.map((item, index) => (
                  <div className="col-lg-4 col-md-6" key={index}>
                    <div className="blog-post blog-grid blog-rounded">
                      <div className="dlab-post-media dlab-img-effect">
                        <Link to={"/blog-single-sidebar"}>
                          <img src={item.image} alt="" />
                        </Link>
                      </div>
                      <div className="dlab-info p-a25">
                        <div className="dlab-post-title">
                          <h4 className="post-title">
                            <Link to={"/blog-single-sidebar"}>
                              {item.title}
                            </Link>
                          </h4>
                        </div>
                        <div className="dlab-post-meta">
                          <ul>
                            <li className="post-folder">
                              <i className="fa fa-folder-open-o"></i>
                              <Link to={""}>Cake</Link>,
                              <Link to={""}> Biscuits</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Index1;
