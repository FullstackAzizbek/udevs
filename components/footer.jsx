import React from "react";

function Footer() {
  return (
    <div className="Footer">
      <div className="footer_box container">
        <img src="/logo.png" alt="" />
        <div className="footer_cards">
          <ul className="footer_ul">
            <h6 className="footer_ul_title">About us</h6>
            <li className="footer_li">
              <a href="">Direction</a>
            </li>
            <li className="footer_li">
              <a href="">Command</a>
            </li>
            <li className="footer_li">
              <a href="">Tools</a>
            </li>
            <li className="footer_li">
              <a href="">Clients</a>
            </li>
          </ul>
          <ul className="footer_ul">
            <h6 className="footer_ul_title">Services</h6>
            <li className="footer_li">
              <a href="">Development of mobile applications</a>
            </li>
            <li className="footer_li">
              <a href="">Development and implementation ERP systems</a>
            </li>
            <li className="footer_li">
              <a href="">User interface, User experience design</a>
            </li>
            <li className="footer_li">
              <a href="">IT consulting</a>
            </li>
            <li className="footer_li">
              <a href="">Optimization IT consulting infrastructure</a>
            </li>
          </ul>
          <ul className="footer_ul">
            <h6 className="footer_ul_title">Portfolio</h6>
            <li className="footer_li">
              <a href="">Delever</a>
            </li>
            <li className="footer_li">
              <a href="">Sms.uz</a>
            </li>
            <li className="footer_li">
              <a href="">Goodzone</a>
            </li>
            <li className="footer_li">
              <a href="">Iman</a>
            </li>
          </ul>
        </div>
        <div className="line"></div>
        <div className="footer_bottom">
          <h6 className="footer_bottom_title">
            © 2024 Udevs. All rights reserved
          </h6>
          <div className="footer_icon_box">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
              ></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.2 4.2 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.52 8.52 0 0 1-5.33 1.84q-.51 0-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23"
              ></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m10 15l5.19-3L10 9zm11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
