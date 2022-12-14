/* eslint-disable @next/next/no-img-element */
import React from "react";
import Layout from "../src/layouts/Layout";

const Home = () => {
  return (
    <Layout title="Local Mechanic" showHeader={true}>
      <div className="mechanic">
        <div className="mechanic_showcase">
          <div className="mechanic_showcase_socials">
            <div className="showcase_img">
              <img src="/Images/arrow.svg" alt="" />
            </div>
            <div className="social_icons">
              <i className="fa-brands fa-facebook"></i>
            </div>
            <div className="social_icons">
              <i className="fa-brands fa-twitter"></i>
            </div>
            <div className="social_icons">
              <i className="fa-brands fa-instagram"></i>
            </div>
            <div className="social_icons">
              <i className="fa-brands fa-linkedin"></i>
            </div>
          </div>
          <div className="mechanic_showcase_text">
            <h1>Fast & Reliable Car Service</h1>
          </div>
          <div className="mechanic_showcase_btn">
            <button className="booking bton">Book Serciving</button>
            <button className="bton">Learn More</button>
          </div>
        </div>
        <div className="mechanic_search">
          <div className="mechanic_search_sub">
            <div className="search_wrapper">
              <p className="cars">Search Brand/ Car For Servicing</p>
              <div className="search_wrapper_flex">
                <div className="search_wrapper_flex_right">
                  <div className="frist">
                    <i className="fa-solid fa-search"></i>
                    <input type="text" placeholder="search" />
                  </div>
                  <div className="brand_model">
                    <span>Brand Names</span>
                    <i className="fa-solid fa-chevron-down"></i>
                  </div>
                </div>
                <div className="search_wrapper_flex_left">
                  <div className="brand_model">
                    <span>Brand Names</span>
                    <i className="fa-solid fa-chevron-down"></i>
                  </div>
                  <div className="model">
                    <span>Model</span>
                    <i className="fa-solid fa-chevron-down"></i>
                  </div>
                  <div className="model">
                    <span>Year</span>
                    <i className="fa-solid fa-chevron-down"></i>
                  </div>
                  <div className="part">
                    <span>Parts</span>
                  </div>
                  <div className="check">
                    <span>Check Prices</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mechanic_marketplace">
          <div className="mechanic_marketplace_left">
            <div className="left_inner">
              <div className="who">
                <hr className="line" />
                <span className="span">Who We Are</span>
              </div>
              <div className="left_inner_text1">
                We are a <br /> marketplace for all <br /> automobile services
              </div>
              <div className="left_inner_text2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor
                quis consectetur euismod elit sollicitudin. Dolor at met sed.
                Eget ridiculus nunc ornare eget malesuada. Orci nunc urna cursus
                vitae mauris. Eu in tincidunt tellus lectus pellac id
                consectetur neque nulla platea fames fermentum et. At diam.
              </div>

              <div className="left_inner_icon">
                <div className="red_icon">
                  <i className="fa-solid fa-play"></i>
                </div>
                <p>Learn More</p>
              </div>
            </div>
          </div>
          <div className="marketplace_right">
            <img
              src="/Images/samuele-errico-piccarini-FMbWFDiVRPs-unsplash 2.png"
              alt=""
            />
          </div>
        </div>

        <div className="mechanic_feature ">
          <div className="line-feature">
            <hr className="line" />
            <span className="span">Our Key Features</span>
            <hr className="line" />
          </div>
          <div className="container mechanic_feature_flex ">
            <div className="flex_boxx">
              <img src="/Images/layer 1.png" alt="" />
              <p className="free-bold">Free Diagnostics</p>
              <p className=" free-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Malesuada consequat commodo consectetur tristique venenatis
                egestas. Fauci.
              </p>
            </div>
            <div className="flex_boxx">
              <img src="/Images/layer 1.png" alt="" />
              <p className="free-bold">Free Diagnostics</p>
              <p className=" free-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Malesuada consequat commodo consectetur tristique venenatis
                egestas. Fauci.
              </p>
            </div>
            <div className="flex_boxx">
              <img src="/Images/layer 2.png" alt="" />
              <p className="free-bold">Free Diagnostics</p>
              <p className=" free-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Malesuada consequat commodo consectetur tristique venenatis
                egestas. Fauci.
              </p>
            </div>
            <div className="flex_boxx">
              <img src="/Images/layer 3.png" alt="" />
              <p className="free-bold">Free Diagnostics</p>
              <p className=" free-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Malesuada consequat commodo consectetur tristique venenatis
                egestas. Fauci.
              </p>
            </div>
          </div>
        </div>
        <div className="mechanic_services">
          <img className="fixedimg" src="/Images/Vector (3).png" alt="" />
          <div className="mechanic_services_wrapper">
            <div className="container_img">
              <img src="/Images/Group 9778.png" alt="" />
            </div>
            <div className=" container_boxes">
              <div className="container_boxes_services">
                <hr className="line" />
                <span className="span">Our Services</span>
              </div>
              <p className="services_txt">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <p className="services_txt">
                Tempor quis consectetur euismod elit sollicitudin.
              </p>
              <div className=" services_cate">
                <div className="dept">
                  <div className="square"></div>
                  <p className="garage">Garrage:</p>
                  <p className="dept_txt">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Malesuada consequat commodo consectetur tristique venenatis
                    egestas. Fauci.
                  </p>
                </div>
                <div className="dept">
                  <div className="square"></div>
                  <p className="garage">Garrage:</p>
                  <p className="dept_txt">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Malesuada consequat commodo consectetur tristique venenatis
                    egestas. Fauci.
                  </p>
                </div>
                <div className="dept">
                  <div className="square"></div>
                  <p className="garage">Garrage:</p>
                  <p className="dept_txt">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Malesuada consequat commodo consectetur tristique venenatis
                    egestas. Fauci.
                  </p>
                </div>
                <div className="dept">
                  <div className="square"></div>
                  <p className="garage">Garrage:</p>
                  <p className="dept_txt">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Malesuada consequat commodo consectetur tristique venenatis
                    egestas. Fauci.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mechanic_choose">
          <div className="line-feature">
            <hr className="line" />
            <span className="span">Our Key Features</span>
            <hr className="line" />
          </div>
          <div className="container mechanic_choose_boxes">
            <div className="choose_box">
              <p className="choose_box_txt">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Malesuada consequat commodo consectetur tristique venenatis
                egestas. Faucibus vestibulum sed tincidunt eget enim ut pretium.
                Erat consequat pellentesque dapibus amet amet, eget ante leo.
                Vulputate vitae orci, nisl sit. Viverra viverra consequat ut
                nibh sit eget. Maecenas nibh dui odio leo. Est nisl massa tellus
                amet.
              </p>
              <p className=" choose_box_header">24hr Support</p>
            </div>
            <div className="choose_box">
              <p className="choose_box_txt">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Malesuada consequat commodo consectetur tristique venenatis
                egestas. Faucibus vestibulum sed tincidunt eget enim ut pretium.
                Erat consequat pellentesque dapibus amet amet, eget ante leo.
                Vulputate vitae orci, nisl sit. Viverra viverra consequat ut
                nibh sit eget. Maecenas nibh dui odio leo. Est nisl massa tellus
                amet.
              </p>
              <p className="choose_box_header">24hr Support</p>
            </div>
            <div className="choose_box">
              <p className="choose_box_txt">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Malesuada consequat commodo consectetur tristique venenatis
                egestas. Faucibus vestibulum sed tincidunt eget enim ut pretium.
                Erat consequat pellentesque dapibus amet amet, eget ante leo.
                Vulputate vitae orci, nisl sit. Viverra viverra consequat ut
                nibh sit eget. Maecenas nibh dui odio leo. Est nisl massa tellus
                amet.
              </p>
              <p className="choose_box_header">24hr Support</p>
            </div>
          </div>
        </div>
        <div className=" container mechanic_brands">
          <div className="line_brand">
            <hr className="line" />
            <span className="span">Our Key Features</span>
            <hr className="line" />
          </div>
          <div className="container mechanic_brands_boxes">
            <div className="brands_imgs">
              <img src="/Images/Union.png" alt="" />
            </div>
            <div className="brands_imgs">
              <img
                src="/Images/261-2616167_we-service-all-skoda-models-skoda-logo-black 1.png"
                alt=""
              />
            </div>
            <div className="brands_imgs">
              <img src="/Images/Union1.png" alt="" />
            </div>
            <div className="brands_imgs">
              <img src="/Images/Union2.png" alt="" />
            </div>
            <div className="brands_imgs">
              <img src="/Images/Union3.png" alt="" />
            </div>
            <div className="brands_imgs">
              <img src="/Images/Vector2.png" alt="" />
            </div>
          </div>
        </div>

        <div className="mechanic_reviews">
          <div className="line_reviews">
            <hr className="line" />
            <span className="span">Our Reviews</span>
            <hr className="line" />
          </div>
          <h2 className="review_header">What Our Customers Say About Us</h2>
          <div className="  customers_reviews">
            <div className="customers">
              <div className="review_img">
                <img src="/Images/???.png" alt="" />
              </div>
              <p className="review_txt">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac quam
                leo sem in in. Scelerisque feugiat quam lectus dui eget felis.
                Tincidunt faucibus at egestas rhoncus felis faucibus
                ullamcorper. Consequat turpis et integer commodo porta vel.
              </p>
              <div className="review_indiviuals">
                <img src="/Images/unsplash_dt60oksDTx8.png" alt="" />
                <p className="review_name">Henry Avuksh</p>
                <p className="review_txt">Bangalore</p>
              </div>
            </div>
            <div className="customers">
              <div className="review_img">
                <img src="/Images/???.png" alt="" />
              </div>
              <p className="review_txt">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac quam
                leo sem in in. Scelerisque feugiat quam lectus dui eget felis.
                Tincidunt faucibus at egestas rhoncus felis faucibus
                ullamcorper. Consequat turpis et integer commodo porta vel.
              </p>
              <div className="review_indiviuals">
                <div className="immg">
                  <img src="/Images/unsplash_dt60oksDTx8.png" alt="" />
                </div>
                <p className="review_name">Henry Avuksh</p>
                <p className="review_txt">Bangalore</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container mechanic_blogs">
          <div className="blog_line">
            <hr className="line" />
            <span className="span">Our Blogs</span>
            <hr className="line" />
          </div>
          <h2 className="blog_header">Recent Posts From Our Company</h2>
          <div className="blog_post">
            <div className="blog_post_box">
              <div className="blog_post_box_img">
                <img src="/Images/unsplash_Z20LXv50kbE.png" alt="" />
              </div>
              <div className="blog_post_box_wrapper">
                <div className="blog_post_box_wrapper_date">
                  <p className="date_txt">22 February 2022</p>
                  <p className="date_txt">. 5 Min Read</p>
                </div>
                <p className="txt_blog">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <p className="date_txt">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Accumsan duis facilisi scelerisque turpis est. Aenean maecenas
                  aliquet nec ullamcorper diam.
                </p>
                <button className="blog_post_box_wrapper_btn">view</button>
              </div>
            </div>
            <div className="blog_post_box">
              <div className="blog_post_box_img">
                <img src="/Images/unsplash_Z20LXv50kbE.png" alt="" />
              </div>
              <div className="blog_post_box_wrapper">
                <div className="blog_post_box_wrapper_date">
                  <p className="date_txt">22 February 2022</p>
                  <p className="date_txt">. 5 Min Read</p>
                </div>
                <p className="txt_blog">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <p className="date_txt">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Accumsan duis facilisi scelerisque turpis est. Aenean maecenas
                  aliquet nec ullamcorper diam.
                </p>
                <button className="blog_post_box_wrapper_btn">view</button>
              </div>
            </div>
            <div className="blog_post_box">
              <div className="blog_post_box_img">
                <img src="/Images/unsplash_Z20LXv50kbE.png" alt="" />
              </div>
              <div className="blog_post_box_wrapper">
                <div className="blog_post_box_wrapper_date">
                  <p className="date_txt">22 February 2022</p>
                  <p className="date_txt">. 5 Min Read</p>
                </div>
                <p className="txt_blog">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <p className="date_txt">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Accumsan duis facilisi scelerisque turpis est. Aenean maecenas
                  aliquet nec ullamcorper diam.
                </p>
                <button className="blog_post_box_wrapper_btn">view</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
