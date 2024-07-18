import { useContext } from "react";
import DataContext from "@/context/context";

function Navbar() {
  const {
    isActive,
    portfolioDropDown,
    servicesDropDown,
    handleClicker,
    portfolio_menu_activer,
    services_menu_activer,
    language_menu_activer,
    languageDropDown,
    navbar,
    navbar_activer,
  } = useContext(DataContext);
  return (
    <div className="navbar">
      <div className="navbar_box container">
        <div className="navbar_box_left">
          <img src="/logo.png" alt="" />
        </div>
        <div className="navbar_box_right">
          <ul className={navbar == true ? "nav_ul active_nav" : "nav_ul"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 cancel_btn"
              onClick={() => navbar_activer(false)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
            <li
              className={isActive === 0 ? "nav_list active" : "nav_list"}
              onClick={() => handleClicker(0)}
            >
              <a href="#">Direction</a>
            </li>
            <li
              className={isActive === 1 ? "nav_list active" : "nav_list"}
              onClick={() => handleClicker(1)}
            >
              <a href="#">Command</a>
            </li>
            <li
              className={
                isActive === 2
                  ? "nav_list active services_menu"
                  : "nav_list services_menu"
              }
              onClick={() => handleClicker(2)}
              onMouseEnter={() => services_menu_activer(true)}
            >
              <div className="nav_list_top">
                <a href="#">Services</a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="size-4 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
              <div
                className={
                  servicesDropDown == true
                    ? "nav_list_bottom is_hover"
                    : "nav_list_bottom"
                }
              >
                <ul
                  className={
                    portfolioDropDown == true
                      ? "services_drop_down_ul is_hover"
                      : "services_drop_down_ul"
                  }
                  onMouseLeave={() => services_menu_activer(false)}
                >
                  <li className="services_drop_down_li">
                    <a href="#">
                      <div className="services_drop_down_img_box">
                        <img src="/users.png" alt="" />
                      </div>
                      Team
                    </a>
                  </li>
                  <li className="services_drop_down_li">
                    <a href="#">
                      <div className="services_drop_down_img_box">
                        <img src="/phone.png" alt="" />
                      </div>
                      Development of mobile applications
                    </a>
                  </li>
                  <li className="services_drop_down_li">
                    <a href="#">
                      <div className="services_drop_down_img_box">
                        <img src="/erp.png" alt="" />
                      </div>
                      Development and implementation ERP systems
                    </a>
                  </li>
                  <li className="services_drop_down_li">
                    <a href="#">
                      <div className="services_drop_down_img_box">
                        <img src="/clone.png" alt="" />
                      </div>
                      User interface, User experience design
                    </a>
                  </li>
                  <li className="services_drop_down_li">
                    <a href="#">
                      <div className="services_drop_down_img_box">
                        <img src="/settings.png" alt="" />
                      </div>
                      Optimization IT consulting infrastructure
                    </a>
                  </li>
                  <li className="services_drop_down_li">
                    <a href="#">
                      <div className="services_drop_down_img_box">
                        <img src="/monitor.png" alt="" />
                      </div>
                      IT consulting
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li
              className={isActive === 3 ? "nav_list active" : "nav_list"}
              onClick={() => handleClicker(3)}
            >
              <a href="#">Tools</a>
            </li>
            <li
              className={isActive === 4 ? "nav_list active" : "nav_list"}
              onClick={() => handleClicker(4)}
            >
              <a href="#">Clients</a>
            </li>
            <li
              className={
                isActive === 5
                  ? "nav_list active portfolio_menu"
                  : "nav_list portfolio_menu"
              }
              onClick={() => handleClicker(5)}
              onMouseEnter={() => portfolio_menu_activer(true)}
            >
              <div className="nav_list_top">
                <a href="#">Portfolio</a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="size-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
              <div
                className={
                  portfolioDropDown == true
                    ? "nav_list_bottom is_hover"
                    : "nav_list_bottom"
                }
              >
                <ul
                  className="portfolio_drop_down_ul"
                  onMouseLeave={() => portfolio_menu_activer(false)}
                >
                  <h6>Portfolio</h6>
                  <li className="portfolio_drop_down_li">
                    <a href="">
                      <div className="logo_box bg-[#ffddd3]">D</div>
                      Deliver
                    </a>
                  </li>
                  <li className="portfolio_drop_down_li">
                    <a href="">
                      <div className="logo_box bg-[#f4f7ff]">S</div>
                      Sms.uz
                    </a>
                  </li>
                  <li className="portfolio_drop_down_li">
                    <a href="">
                      <div className="logo_box bg-[#fdcccc]">G</div>
                      Goodzone
                    </a>
                  </li>
                  <li className="portfolio_drop_down_li">
                    <a href="">
                      <div className="logo_box bg-[#ccf4ef]">I</div>
                      Iman
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li
              className={isActive === 6 ? "nav_list active" : "nav_list"}
              onClick={() => handleClicker(6)}
              onMouseEnter={() => language_menu_activer(true)}
            >
              <div className="nav_list_top">
                <a href="#">Language</a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="size-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
              <div
                className={
                  languageDropDown == true
                    ? "nav_list_bottom is_hover"
                    : "nav_list_bottom"
                }
                onMouseLeave={() => language_menu_activer(false)}
              >
                <ul className="language_drop_down_ul">
                  <li className="language_drop_down_li">
                    <a href="">
                      <img src="/rus.png" alt="" />
                      Рус
                    </a>
                  </li>
                  <li className="language_drop_down_li">
                    <a href="">
                      <img src="/eng.jpg" alt="" />
                      Eng
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <a href="" className="contact_btn">
              Contact
            </a>
          </ul>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 menu"
            onClick={() => navbar_activer(true)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
