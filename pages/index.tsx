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
            <p className="fast">Fast & Reliable Car Service</p>
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
                    <i className="fa-regular fa-chevron-down"></i>
                    <input type="text" placeholder="search" />
                  </div>
                  <div className="brand_model">
                    <span>Brand Names</span>
                    <i className="fa-solid fa-chevron-down"></i>
                  </div>
                </div>
                <div className="search_wrapper_flex_left">
                  <div className="model">
                    <span>Model</span>
                    <i className="fa-solid fa-chevron-down"></i>
                  </div>
                  <div className="model">
                    <span>Year</span>
                    <i className="fa-solid fa-chevron-down"></i>
                  </div>
                  <div className="model">
                    <span>Parts</span>
                  </div>
                  <div className="model">
                    <span>Check Prices</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
