/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState } from "react";
const Header = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="  header">
      <nav className=" header-nav">
        <div className=" nav_link ">
          <div className="navbar">
            <ul className="nav_active nav_item">
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <a>Blog</a>
                </Link>
              </li>
              <li>
                <Link href="/nearby">
                  <a>Nearby</a>
                </Link>
              </li>
            </ul>
          </div>
          {show && (
            <div className="navbar1">
              <ul className=" nav_item">
                <li>
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                </li>
                <li>
                  <Link href="/blog">
                    <a>Blog</a>
                  </Link>
                </li>
                <li>
                  <Link href="/nearby">
                    <a>Nearby</a>
                  </Link>
                </li>
              </ul>
            </div>
          )}

          <div className="nav_img">
            <img src="/Images/logo.png" alt="" />
          </div>

          <div className="nav_toggle">
            <div className="nav-shopin">
              <div className="cart">
                <i className="fas fa-shopping-cart"></i>
                <span>Cart</span>
              </div>
              <div className="cart1">
                <i className="fas fa-user"></i>
                <span>User</span>
              </div>
            </div>
            <div className="togglee d-lg-none" onClick={() => setShow(!show)}>
              <i
                className={` ${
                  show ? "fa-solid fa-times" : "fa-solid fa-bars"
                }`}
              />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;

export const navLink = [
  { page: "Home", link: "/" },
  { page: "Blog", link: "/blog" },
  { page: "Nearby", link: "/nearby" },
];
