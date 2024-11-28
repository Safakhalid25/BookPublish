import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { Logo } from "../../../Assets/images";

import "./style.css";

export const Footer = (props) => {
  const location = useLocation();
  return (
    <footer>
      <section className="footer-sec jost-font">
        <div className="container">
          <div className="row footer__first">
            <div className="col-lg-4">
              <div className="footer__about">
                <div className="footer__logo">
                  <Link to="!#">
                    <img src={Logo} />
                  </Link>
                </div>
                <div className="footer__about-body">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry Lorem Ipsum has been the industry's
                    standard dummy text ever since the
                  </p>
                </div>
                <div className="follow__social-icons">
                  <a href="javascript:;" className="follow__social-icon">
                    <i class="fa-brands fa-facebook-f"></i>
                  </a>
                  <a href="javascript:;" className="follow__social-icon">
                    <i class="fa-brands fa-twitter"></i>
                  </a>
                  <a href="javascript:;" className="follow__social-icon">
                    <i class="fa-brands fa-instagram"></i>
                  </a>
                  <a href="javascript:;" className="follow__social-icon">
                    <i class="fa-brands fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="footer__quick-links">
                <h3 className="foooter__subhead">Quick Links</h3>
                <ul className="footer__links">
                  <li className="footer__link">
                    <Link to="javascript:;"> <FontAwesomeIcon icon={faStar} className="footer_menu_stars"/> About</Link>
                  </li>
                  <li className="footer__link">
                    <Link to="javascript:;"> <FontAwesomeIcon icon={faStar} className="footer_menu_stars"/> Newsroom</Link>
                  </li>
                  <li className="footer__link">
                    <Link to="javascript:;"> <FontAwesomeIcon icon={faStar} className="footer_menu_stars"/> Brand Guidline</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="footer__contact-links">
                <h3 className="foooter__subhead">Contacts</h3>
                <ul className="footer__links">
                  <li className="footer__link">
                    <Link to="javascript:;">Translators & Editors</Link>
                  </li>
                  <li className="footer__link">
                    <Link to="javascript:;">Commercial</Link>
                  </li>
                  <li className="footer__link">
                    <Link to="javascript:;">Audio business</Link>
                  </li>
                  <li className="footer__link">
                    <Link to="javascript:;">Help & Service</Link>
                  </li>
                  <li className="footer__link">
                    <Link to="javascript:;">DMCA Notification</Link>
                  </li>
                  <li className="footer__link">
                    <Link to="javascript:;">Webnovel Forum</Link>
                  </li>
                  <li className="footer__link">
                    <Link to="javascript:;">Online service</Link>
                  </li>
                  <li className="footer__link">
                    <Link to="javascript:;">Vulnerability Report</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="footer__resouses-links">
                <h3 className="foooter__subhead">Contacts</h3>
                <ul className="footer__links">
                  <li className="footer__link">
                    <Link to="javascript:;">Tags</Link>
                  </li>
                  <li className="footer__link">
                    <Link to="javascript:;">Download Apps</Link>
                  </li>
                  <li className="footer__link">
                    <Link to="javascript:;">Be an Author</Link>
                  </li>
                  <li className="footer__link">
                    <Link to="javascript:;">Help Center</Link>
                  </li>
                  <li className="footer__link">
                    <Link to="javascript:;">Privacy Policy</Link>
                  </li>
                  <li className="footer__link">
                    <Link to="javascript:;">Terms of Service</Link>
                  </li>
                  <li className="footer__link">
                    <Link to="javascript:;">Keywords</Link>
                  </li>
                  <li className="footer__link">
                    <Link to="javascript:;">Affiliate</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="footer__referrals-links">
                <h3 className="foooter__subhead">Referrals</h3>
                <ul className="footer__links">
                  <li className="footer__link">
                    <Link to="javascript:;">QiDian</Link>
                  </li>
                  <li className="footer__link">
                    <Link to="javascript:;">Yuewen</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="footer__copyright">
              <p>Copyright 2024 All right reserved. Little literature club</p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};
