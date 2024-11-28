import { React, useState, useEffect } from "react";
import "./style.css";
import { UserLayout } from "../../Components/Layout/UserLayout";
import facebookicon from "../../Assets/images/facebookicon.png";
import instaicon from "../../Assets/images/instaicon.png";
import socialicon from "../../Assets/images/socialicon.png";
import unlocked from "../../Assets/images/unlocked.png";
import twittericon from "../../Assets/images/twittericon.png";
import dividerLine from "../../Assets/images/dividerLine.png";
import showmore from "../../Assets/images/showmore.png";
import starPoint from "../../Assets/images/starPoint.png";
import moreicon from "../../Assets/images/moreicon.png";
import newauthbook from "../../Assets/images/newauthbook.png";
import bookreport from "../../Assets/images/bookreport.png";
import arlemit from "../../Assets/images/arlemit.png";
import aboutAuthor from "../../Assets/images/aboutAuthor.png";
import newbookrel from "../../Assets/images/newbookrel.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faSearch, faStar } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aos from "aos";
import "aos/dist/aos.css";
import lcimg from "../../Assets/images/51L+xXb2C7L 1.png";
export const AboutAuthor = () => {
  const [ads, setAds] = useState([]);
  const [books, setBooks] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const base_url = "https://custom.mystagingserver.site/Tim-WDLLC/public/";

  const reusableSetting = (item, centerMode) => {
    return {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: item,
      slidesToScroll: 1,
      centerMode: centerMode,
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 5,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 2,
          },
        },
      ],
    };
  };

  const reusableSettingForOne = (item, centerMode) => {
    return {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: item,
      slidesToScroll: 1,
      centerMode: centerMode,
    };
  };

  const settingsForFourItems = reusableSetting(4, false);
  const settingsForOneItem = reusableSettingForOne(1, false);

  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <UserLayout>
      <>
        {/* Header */}

        {/* Hero Section */}
        <section class="inner__hero-sec jost-font">
          <div className="container">
            <div className="row">
              <div className="herro__title">
                <h1 className="typewriter">ABOUT AUTHOR</h1>
              </div>
            </div>
          </div>
        </section>

        <section className="abt_author_bg">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="d-flex gap-3">
                  <img src={aboutAuthor} className="img-fluid abt_author_img" />
                  <div>
                    <div className="d-flex gap-1">
                      <i class="fa-solid fa-star abt_author_stars"></i>
                      <i class="fa-solid fa-star abt_author_stars"></i>
                      <i class="fa-solid fa-star abt_author_stars"></i>
                      <i class="fa-solid fa-star abt_author_stars"></i>
                      <i class="fa-solid fa-star abt_author_stars"></i>
                    </div>
                    <p className="author_rating">Author Rating</p>
                  </div>
                </div>
                <div className="d-flex gap-3 align-items-center">
                  <h6 className="arlemit_text">Arlemit</h6>
                  <img src={arlemit} className="img-fluid arlemit_img" draggable="false" />
                </div>
                <div>
                  <p className="ranking_details">Author Ranking: 1st Place</p>
                  <p className="ranking_details">
                    Like to read and write fantasy
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="favorite_book_with_dropdown">
                  <div className="favorite_box">
                    <i class="fa-solid fa-heart favorite_icon"></i>
                    <p className="favorite_text">128</p>
                  </div>

                  <div class="dropdown">
                    <button
                      class="fa-solid fa-ellipsis more_icon_btn"
                      type="button"
                      id="dropdownMenuButton2"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    ></button>
                    <ul
                      class="dropdown-menu custom_dropdown_menu custom_ul"
                      aria-labelledby="dropdownMenuButton2"
                    >
                      <div className="custom_dropdown_options">
                        <li>
                          <a class="custom_dropdown-items " href="#">
                            {" "}
                            <i class="fa-regular fa-flag custom_dropdown-icons "></i>{" "}
                            &nbsp; Report
                          </a>
                        </li>
                        <div className="custom_dropdown_divider"></div>
                        <li>
                          <a class="custom_dropdown-items" href="#">
                            {" "}
                            <i class="fa-solid fa-ban custom_dropdown-icons"></i>{" "}
                            &nbsp; Block{" "}
                          </a>
                        </li>
                      </div>
                      <div className="custom_dropdown-items_div">
                        <li>
                          <a class="custom_dropdown-items" href="#">
                            Cancel
                          </a>
                        </li>
                      </div>
                    </ul>
                  </div>
                </div>

                <div class="dropdown social_box_main">
                  <button
                    class="social_text"
                    type="button"
                    id="dropdownMenuButton2"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Social &nbsp;{" "}
                    <i class="fa-solid fa-angle-right social_icon"></i>
                  </button>
                  <ul
                    class="dropdown-menu custom_dropdown_menu "
                    aria-labelledby="dropdownMenuButton2"
                  >
                    <li class="custom_chat_dropdown-items">
                      {" "}
                      Chat with Author{" "}
                    </li>
                    <div className="custom_dropdown_divider"></div>
                    <li>
                      <div className="social_chat_icons_div">
                        <img
                          src={facebookicon}
                          className="custom_dropdown_social_icons img-fluid"
                        />
                        <img
                          src={instaicon}
                          className="custom_dropdown_social_icons img-fluid"
                        />
                        <img
                          src={socialicon}
                          className="custom_dropdown_social_icons img-fluid"
                        />
                        <img
                          src={twittericon}
                          className="custom_dropdown_social_icons img-fluid"
                        />
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="global_icons_div">
                  <div className="global_icons_with_text">
                    <i class="fa-solid fa-location-dot global_icons"></i>
                    <p className="global_text">Global</p>
                  </div>
                  <div className="global_icons_with_text">
                    <i class="fa-solid fa-calendar-days global_icons"></i>
                    <p className="global_text"> 2024-12-06 Joined </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="abt_author_divider"></div>
            <div className="row writing_reading_bg">
              <img src={starPoint} className="img-fluid star_points_img" />
              <div className="col-4 col-md-4">
                <p className="writing_points"> 194d </p>
                <p className="writing_text"> Writing </p>
              </div>
              <div className="col-4 col-md-4">
                <div className="content_with_divider">
                  <img
                    src={dividerLine}
                    className="img-fluid writing_reading_divider"
                  />
                  <div>
                    <p className="writing_points"> 5.6h </p>
                    <p className="writing_text"> Of Reading </p>
                  </div>
                  <img
                    src={dividerLine}
                    className="img-fluid writing_reading_divider"
                  />
                </div>
              </div>
              <div className="col-4 col-md-4">
                <p className="writing_points"> 2443 </p>
                <p className="writing_text"> Read Books </p>
              </div>
            </div>

            <div className="row publish_book_bg">
              <div className="col-md-12">
                <h4 className="publish_text"> Published Works </h4>
              </div>
            </div>

            <div className="row">
              <div class="col-md-6">
                <div class="abt_author_publish_books">
                  <div class="row">
                    <div class="col-lg-3 col-sm-12">
                      <div class="main">
                        <img
                          class="img-fluid abt_author_bookcover"
                          src={newauthbook}
                        />
                      </div>
                    </div>
                    <div class="col-lg-9 col-sm-12 custom_abt_author_container">
                      <h3 class="abt_author_action">Action</h3>
                      <h3 class="abt_author_book_name">Book Name Here</h3>

                      <div class="main">
                        <button class="author_book_category_btn">
                          Category{" "}
                        </button>
                        <button class="author_book_category_btn">
                          Category{" "}
                        </button>
                        <button class="author_book_category_btn">
                          Category{" "}
                        </button>
                      </div>
                      <div className="mt-3 recent_dlt_btn_align">
                        <button class="author_book_updated_btn">
                          {" "}
                          Recently Updated{" "}
                        </button>
                      </div>
                      <div className="chap_with_collections_div">
                        <div className="chap_collections_with_icon">
                          <i class="fa-solid fa-book chap_collections_icon"></i>
                          <p className="chap_collections_text">315 Chapters</p>
                        </div>
                        <div className="chap_collections_with_icon">
                          <i class="fa-solid fa-heart chap_collections_icon"></i>
                          <p className="chap_collections_text">
                            10.4k Collections
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="abt_author_publish_books">
                  <div class="row">
                    <div class="col-lg-3 col-sm-12">
                      <div class="main">
                        <img
                          class="img-fluid abt_author_bookcover"
                          src={newauthbook}
                        />
                      </div>
                    </div>
                    <div class="col-lg-9 col-sm-12 custom_abt_author_container">
                      <h3 class="abt_author_action">Action</h3>
                      <h3 class="abt_author_book_name">Book Name Here</h3>

                      <div class="main">
                        <button class="author_book_category_btn">
                          Category{" "}
                        </button>
                        <button class="author_book_category_btn">
                          Category{" "}
                        </button>
                        <button class="author_book_category_btn">
                          Category{" "}
                        </button>
                      </div>
                      <div className="mt-3 recent_dlt_btn_align">
                        <button class="author_book_updated_btn">
                          {" "}
                          Recently Updated{" "}
                        </button>
                      </div>
                      <div className="chap_with_collections_div">
                        <div className="chap_collections_with_icon">
                          <i class="fa-solid fa-book chap_collections_icon"></i>
                          <p className="chap_collections_text">315 Chapters</p>
                        </div>
                        <div className="chap_collections_with_icon">
                          <i class="fa-solid fa-heart chap_collections_icon"></i>
                          <p className="chap_collections_text">
                            10.4k Collections
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="abt_author_publish_books">
                  <div class="row">
                    <div class="col-lg-3 col-sm-12">
                      <div class="main">
                        <img
                          class="img-fluid abt_author_bookcover"
                          src={newauthbook}
                        />
                      </div>
                    </div>
                    <div class="col-lg-9 col-sm-12 custom_abt_author_container">
                      <h3 class="abt_author_action">Action</h3>
                      <h3 class="abt_author_book_name">Book Name Here</h3>

                      <div class="main">
                        <button class="author_book_category_btn">
                          Category{" "}
                        </button>
                        <button class="author_book_category_btn">
                          Category{" "}
                        </button>
                        <button class="author_book_category_btn">
                          Category{" "}
                        </button>
                      </div>
                      <div className="mt-3 recent_dlt_btn_align">
                        <button class="author_book_updated_btn">
                          {" "}
                          Recently Updated{" "}
                        </button>
                      </div>
                      <div className="chap_with_collections_div">
                        <div className="chap_collections_with_icon">
                          <i class="fa-solid fa-book chap_collections_icon"></i>
                          <p className="chap_collections_text">315 Chapters</p>
                        </div>
                        <div className="chap_collections_with_icon">
                          <i class="fa-solid fa-heart chap_collections_icon"></i>
                          <p className="chap_collections_text">
                            10.4k Collections
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-6">
                <div class="abt_author_publish_books">
                  <div class="row">
                    <div class="col-lg-3 col-sm-12">
                      <div class="main">
                        <img
                          class="img-fluid abt_author_bookcover"
                          src={newauthbook}
                        />
                      </div>
                    </div>
                    <div class="col-lg-9 col-sm-12 custom_abt_author_container">
                      <h3 class="abt_author_action">Action</h3>
                      <h3 class="abt_author_book_name">Book Name Here</h3>

                      <div class="main">
                        <button class="author_book_category_btn">
                          Category{" "}
                        </button>
                        <button class="author_book_category_btn">
                          Category{" "}
                        </button>
                        <button class="author_book_category_btn">
                          Category{" "}
                        </button>
                      </div>
                      <div className="mt-3 recent_dlt_btn_align">
                        <button class="author_book_updated_btn">
                          {" "}
                          Recently Updated{" "}
                        </button>
                      </div>
                      <div className="chap_with_collections_div">
                        <div className="chap_collections_with_icon">
                          <i class="fa-solid fa-book chap_collections_icon"></i>
                          <p className="chap_collections_text">315 Chapters</p>
                        </div>
                        <div className="chap_collections_with_icon">
                          <i class="fa-solid fa-heart chap_collections_icon"></i>
                          <p className="chap_collections_text">
                            10.4k Collections
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="abt_author_publish_books">
                  <div class="row">
                    <div class="col-lg-3 col-sm-12">
                      <div class="main">
                        <img
                          class="img-fluid abt_author_bookcover"
                          src={newauthbook}
                        />
                      </div>
                    </div>
                    <div class="col-lg-9 col-sm-12 custom_abt_author_container">
                      <h3 class="abt_author_action">Action</h3>
                      <h3 class="abt_author_book_name">Book Name Here</h3>

                      <div class="main">
                        <button class="author_book_category_btn">
                          Category{" "}
                        </button>
                        <button class="author_book_category_btn">
                          Category{" "}
                        </button>
                        <button class="author_book_category_btn">
                          Category{" "}
                        </button>
                      </div>
                      <div className="mt-3 recent_dlt_btn_align">
                        <button class="author_book_updated_btn">
                          {" "}
                          Recently Updated{" "}
                        </button>
                      </div>
                      <div className="chap_with_collections_div">
                        <div className="chap_collections_with_icon">
                          <i class="fa-solid fa-book chap_collections_icon"></i>
                          <p className="chap_collections_text">315 Chapters</p>
                        </div>
                        <div className="chap_collections_with_icon">
                          <i class="fa-solid fa-heart chap_collections_icon"></i>
                          <p className="chap_collections_text">
                            10.4k Collections
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="abt_author_publish_books">
                  <div class="row">
                    <div class="col-lg-3 col-sm-12">
                      <div class="main">
                        <img
                          class="img-fluid abt_author_bookcover"
                          src={newauthbook}
                        />
                      </div>
                    </div>
                    <div class="col-lg-9 col-sm-12 custom_abt_author_container">
                      <h3 class="abt_author_action">Action</h3>
                      <h3 class="abt_author_book_name">Book Name Here</h3>

                      <div class="main">
                        <button class="author_book_category_btn">
                          Category{" "}
                        </button>
                        <button class="author_book_category_btn">
                          Category{" "}
                        </button>
                        <button class="author_book_category_btn">
                          Category{" "}
                        </button>
                      </div>
                      <div className="mt-3 recent_dlt_btn_align">
                        <button class="author_book_updated_btn">
                          {" "}
                          Recently Updated{" "}
                        </button>
                      </div>
                      <div className="chap_with_collections_div">
                        <div className="chap_collections_with_icon">
                          <i class="fa-solid fa-book chap_collections_icon"></i>
                          <p className="chap_collections_text">315 Chapters</p>
                        </div>
                        <div className="chap_collections_with_icon">
                          <i class="fa-solid fa-heart chap_collections_icon"></i>
                          <p className="chap_collections_text">
                            10.4k Collections
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row publish_book_bg">
              <div className="col-md-12">
                <h4 className="publish_text">Top Work </h4>
              </div>
            </div>

            <div className="row">
              <div class="col-md-6">
                <div class="abt_author_publish_books">
                  <div class="row">
                    <div class="col-lg-3 col-sm-12">
                      <div class="main">
                        <img
                          class="img-fluid abt_author_bookcover"
                          src={newauthbook}
                        />
                      </div>
                    </div>
                    <div class="col-lg-9 col-sm-12 custom_abt_author_container">
                      <h3 class="abt_author_action">Action</h3>
                      <h3 class="abt_author_book_name">Book Name Here</h3>

                      <div class="main">
                        <button class="author_book_category_btn">
                          Category{" "}
                        </button>
                        <button class="author_book_category_btn">
                          Category{" "}
                        </button>
                        <button class="author_book_category_btn">
                          Category{" "}
                        </button>
                      </div>
                      <div className="mt-3 recent_dlt_btn_align">
                        <button class="author_book_updated_btn">
                          {" "}
                          Recently Updated{" "}
                        </button>
                      </div>
                      <div className="chap_with_collections_div">
                        <div className="chap_collections_with_icon">
                          <i class="fa-solid fa-book chap_collections_icon"></i>
                          <p className="chap_collections_text">315 Chapters</p>
                        </div>
                        <div className="chap_collections_with_icon">
                          <i class="fa-solid fa-heart chap_collections_icon"></i>
                          <p className="chap_collections_text">
                            10.4k Collections
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="abt_author_publish_books">
                  <div class="row">
                    <div class="col-lg-3 col-sm-12">
                      <div class="main">
                        <img
                          class="img-fluid abt_author_bookcover"
                          src={newauthbook}
                        />
                      </div>
                    </div>
                    <div class="col-lg-9 col-sm-12 custom_abt_author_container">
                      <h3 class="abt_author_action">Action</h3>
                      <h3 class="abt_author_book_name">Book Name Here</h3>

                      <div class="main">
                        <button class="author_book_category_btn">
                          Category{" "}
                        </button>
                        <button class="author_book_category_btn">
                          Category{" "}
                        </button>
                        <button class="author_book_category_btn">
                          Category{" "}
                        </button>
                      </div>
                      <div className="mt-3 recent_dlt_btn_align">
                        <button class="author_book_updated_btn">
                          {" "}
                          Recently Updated{" "}
                        </button>
                      </div>
                      <div className="chap_with_collections_div">
                        <div className="chap_collections_with_icon">
                          <i class="fa-solid fa-book chap_collections_icon"></i>
                          <p className="chap_collections_text">315 Chapters</p>
                        </div>
                        <div className="chap_collections_with_icon">
                          <i class="fa-solid fa-heart chap_collections_icon"></i>
                          <p className="chap_collections_text">
                            10.4k Collections
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-6">
                <div class="abt_author_publish_books">
                  <div class="row">
                    <div class="col-lg-3 col-sm-12">
                      <div class="main">
                        <img
                          class="img-fluid abt_author_bookcover"
                          src={newauthbook}
                        />
                      </div>
                    </div>
                    <div class="col-lg-9 col-sm-12 custom_abt_author_container">
                      <h3 class="abt_author_action">Action</h3>
                      <h3 class="abt_author_book_name">Book Name Here</h3>

                      <div class="main">
                        <button class="author_book_category_btn">
                          Category{" "}
                        </button>
                        <button class="author_book_category_btn">
                          Category{" "}
                        </button>
                        <button class="author_book_category_btn">
                          Category{" "}
                        </button>
                      </div>
                      <div className="mt-3 recent_dlt_btn_align">
                        <button class="author_book_updated_btn">
                          {" "}
                          Recently Updated{" "}
                        </button>
                      </div>
                      <div className="chap_with_collections_div">
                        <div className="chap_collections_with_icon">
                          <i class="fa-solid fa-book chap_collections_icon"></i>
                          <p className="chap_collections_text">315 Chapters</p>
                        </div>
                        <div className="chap_collections_with_icon">
                          <i class="fa-solid fa-heart chap_collections_icon"></i>
                          <p className="chap_collections_text">
                            10.4k Collections
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="abt_author_publish_books">
                  <div class="row">
                    <div class="col-lg-3 col-sm-12">
                      <div class="main">
                        <img
                          class="img-fluid abt_author_bookcover"
                          src={newauthbook}
                        />
                      </div>
                    </div>
                    <div class="col-lg-9 col-sm-12 custom_abt_author_container">
                      <h3 class="abt_author_action">Action</h3>
                      <h3 class="abt_author_book_name">Book Name Here</h3>

                      <div class="main">
                        <button class="author_book_category_btn">
                          Category{" "}
                        </button>
                        <button class="author_book_category_btn">
                          Category{" "}
                        </button>
                        <button class="author_book_category_btn">
                          Category{" "}
                        </button>
                      </div>
                      <div className="mt-3 recent_dlt_btn_align">
                        <button class="author_book_updated_btn">
                          {" "}
                          Recently Updated{" "}
                        </button>
                      </div>
                      <div className="chap_with_collections_div">
                        <div className="chap_collections_with_icon">
                          <i class="fa-solid fa-book chap_collections_icon"></i>
                          <p className="chap_collections_text">315 Chapters</p>
                        </div>
                        <div className="chap_collections_with_icon">
                          <i class="fa-solid fa-heart chap_collections_icon"></i>
                          <p className="chap_collections_text">
                            10.4k Collections
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="new_released">
          <div className="container">
            <div className="row">
              <div className="col-ms-12">
                <h1 className="author_recommendation">Recommendations</h1>
                <img className="img-fluid" src={newbookrel} />
              </div>
            </div>
          </div>
        </section>
      </>
    </UserLayout>
  );
};
