import { React, useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./style.css";
import { UserLayout } from "../../Components/Layout/UserLayout";
import facebookicon from "../../Assets/images/facebookicon.png";
import instaicon from "../../Assets/images/instaicon.png";
import socialicon from "../../Assets/images/socialicon.png";
import twittericon from "../../Assets/images/twittericon.png";
import dividerLine from "../../Assets/images/dividerLine.png";
import starPoint from "../../Assets/images/starPoint.png";
import newauthbook from "../../Assets/images/newauthbook.png";
import arlemit from "../../Assets/images/arlemit.png";
import aboutAuthor from "../../Assets/images/aboutAuthor.png";
import systemone from "../../Assets/images/system_one.png";
import academy from "../../Assets/images/academy.png";
import contract from "../../Assets/images/contract.png";
import annoucment from "../../Assets/images/annoucment.png";
import giftsinbox from "../../Assets/images/gifts_inbox.png";
import updates from "../../Assets/images/updates.png";
import dollars from "../../Assets/images/dollars.png";
import contestone from "../../Assets/images/contest_one.png";
import contesttwo from "../../Assets/images/contest_two.png";
import disrectivebook from "../../Assets/images/disrectivebook.png";
import winbook from "../../Assets/images/winbook.png";
import {
  AuthorList1,
  Logo,
  SmallAnime1,
  SmallAnime2,
  User_icon_plus,
  User_icon_white,
  BestSellingBooks,
  BestSellingBook1,
  BestSellingBook2,
  BestSellingBook3,
  BestSellingBook4,
  BestSellingBook5,
  BestSellingBook6,
  BestSellingBook7,
  BestSellingBook8,
  BestSellingBook9,
  BestSellingBook10,
  BestSellingBook11,
  BestSellingBook12,
} from "../../Assets/images";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faList,
  faSearch,
  faStar,
  faAngleLeft,
  faThumbsUp,
  faUsers,
  faNewspaper,
  faBell,
  faChevronDown,
  faChevronRight,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aos from "aos";
import "aos/dist/aos.css";
export const Profile = () => {
  const [ads, setAds] = useState([]);
  const [books, setBooks] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [shows, setShows] = useState(false);
  const handleClosee = () => setShows(false);
  const handleShows = () => setShows(true);
  const [showtwo, setShowtwo] = useState(false);
  const handleClosetwo = () => setShowtwo(false);
  const handleShowtwo = () => setShowtwo(true);
  const [showthree, setShowthree] = useState(false);
  const handleClosethree = () => setShowthree(false);
  const handleShowthree = () => setShowthree(true);
  const [showfour, setShowfour] = useState(false);
  const handleClosefour = () => setShowfour(false);
  const handleShowfour = () => setShowfour(true);

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
  console.log("shows", show);
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
        {/* Hero Section */}
        <section class="inner__hero-sec jost-font">
          <div className="container">
            <div className="row">
              <div className="herro__title">
                <h1 className="typewriter">PROFILE PAGE</h1>
              </div>
            </div>
          </div>
        </section>

        <section className="abt_author_bg">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="d-flex gap-5">
                  <img src={aboutAuthor} className="img-fluid abt_author_img" />
                  <div>
                    <button className="prof_send_msg_btn" onClick={handleShow}>
                      Send Message
                    </button>
                  </div>
                </div>
                <div className="d-flex gap-3 align-items-center">
                  <h6 className="arlemit_text">Arlemit</h6>
                  <img src={arlemit} className="img-fluid arlemit_img" />
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

            {/* <div className="abt_author_divider"></div> */}

            <div className="row justify-content-center">
              <div className="col-md-5">
                <div className="num_of_friends_div">
                  <p className="num_of_friends_text">Number Of Friends</p>
                  <p className="num_of_friends_count">306</p>
                </div>
              </div>
            </div>

            <div className="row writing_reading_bg">
              <img src={starPoint} className="img-fluid star_points_img" />
              <div className="col-4 col-md-4">
                <p className="writing_points"> Account Age </p>
                <p className="writing_text"> 1 Year </p>
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
                <p className="writing_text"> Reading Books </p>
              </div>
            </div>

            <div className="row publish_book_bg">
              <div className="col-md-12">
                <h4 className="publish_text text-dark">
                  {" "}
                  FREQUENTLY READ BOOKS{" "}
                </h4>
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
                      <div className="mt-3 recent_btn_res">
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
                      <div className="mt-3 recent_btn_res">
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
                      <div className="mt-3 recent_btn_res">
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
                      <div className="mt-3 recent_btn_res">
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
                      <div className="mt-3 recent_btn_res">
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
                      <div className="mt-3 recent_btn_res">
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

        {/* 1st modal start */}
        <Modal
          show={show}
          onHide={handleClose}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <div className="inbox_content">
            <Modal.Body>
              <div className="inbox_options_box">
                <div className="back_btn_option">
                  <FontAwesomeIcon
                    icon={faAngleLeft}
                    className="inbox_back_icon"
                  />
                  <p className="inbox_text">Inbox</p>
                </div>
                <div className="events_msges_option_box mt-3">
                  <button className="events_msges_btn">
                    EVENT & COMMENT YOUR RANKING
                  </button>
                  <button
                    className="events_msges_btn"
                    onClick={() => {
                      setShow(false);
                      handleShows();
                    }}
                  >
                    MESSAGES, REPLIES & BLOGS
                  </button>
                  <button className="events_msges_btn">NOTIFICATION</button>
                </div>
                <div className="inbox_divider"></div>
                <div className="inbox_features_box">
                  <div className="">
                    <FontAwesomeIcon
                      icon={faThumbsUp}
                      className="features_icon"
                    />
                    <p className="features_text">Likes</p>
                  </div>

                  <div className="">
                    <FontAwesomeIcon
                      icon={faUsers}
                      className="features_icon  features_icon_one"
                    />
                    <p className="features_text">Followers</p>
                  </div>

                  <div className="">
                    <FontAwesomeIcon
                      icon={faNewspaper}
                      className="features_icon  features_icon_two"
                    />
                    <p className="features_text">News</p>
                  </div>

                  <div className="">
                    <FontAwesomeIcon
                      icon={faBell}
                      className="features_icon  features_icon_three"
                    />
                    <p className="features_text">System</p>
                  </div>
                </div>
              </div>
            </Modal.Body>
          </div>
        </Modal>
        {/* 1st modal end */}

        {/* 2nd modal start */}

        <Modal
          show={shows}
          onHide={handleClosee}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <div className="inbox_content">
            <Modal.Body>
              <div className="inbox_options_box">
                <div className="back_btn_option">
                  <FontAwesomeIcon
                    icon={faAngleLeft}
                    className="inbox_back_icon"
                  />
                  <p className="inbox_text">Writer Inbox</p>
                </div>
                <div className="writer_box">
                  <p className="writer_inbox_sub_text">
                    Whisper in verse more notification for....
                  </p>
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="inbox_down_icon"
                  />
                </div>

                <div className="inbox_divider"></div>
                <div className="inbox_features_box">
                  <div className="features_alignment">
                    <FontAwesomeIcon
                      icon={faThumbsUp}
                      className="features_icon"
                    />
                    <p className="features_text">Reviews</p>
                  </div>

                  <div className="features_alignment">
                    <FontAwesomeIcon
                      icon={faUsers}
                      className="features_icon  features_icon_one"
                    />
                    <p className="features_text">Chapter Comments</p>
                  </div>

                  <div className="features_alignment">
                    <FontAwesomeIcon
                      icon={faNewspaper}
                      className="features_icon  features_icon_two"
                    />
                    <p className="features_text">Paragraph Comments</p>
                  </div>

                  <div className="features_alignment">
                    <FontAwesomeIcon
                      icon={faBell}
                      className="features_icon  features_icon_three"
                    />
                    <p className="features_text">Vote & Collection</p>
                  </div>
                </div>

                <div className="inbox_systems_box">
                  {/* <div className="system_major_box">
                    <div className="systems_task_box">
                      <div className="system_img">
                        <img src={systemone} />
                      </div>
                      <div>
                        <p className="systems_text_head"> System </p>
                        <p className="systems_sub_text">
                          {" "}
                          Book Created Notice{" "}
                        </p>
                      </div>
                    </div>
                    <p className="systems_sub_text"> 48min </p>
                  </div> */}

                  <div className="row">
                    <div className="col-md-2 col-sm-2 col-2">
                      <div className="system_img">
                        <img src={systemone} />
                      </div>
                    </div>
                    <div className="col-md-8 col-sm-8 col-8">
                      <p className="systems_text_head"> System </p>
                      <p className="systems_sub_text"> Book Created Notice </p>
                    </div>
                    <div className="col-md-2 col-sm-2 col-2">
                      <p className="systems_sub_text"> 48min </p>
                    </div>
                  </div>

                  <div className="inbox_divider mt-3 "></div>

                  {/* <div className="system_major_box">
                    <div className="systems_task_box">
                      <div className="system_img academy_img">
                        <img src={academy} />
                      </div>
                      <div>
                        <p className="systems_text_head"> Academy </p>
                        <p className="systems_sub_text">
                          {" "}
                          The Shocking Truth About Winter’s Block:Unveild!{" "}
                        </p>
                      </div>
                    </div>
                    <p className="systems_sub_text"> 4d </p>
                  </div> */}

                  <div className="row mt-3">
                    <div className="col-md-2 col-sm-2 col-2">
                      <div className="system_img academy_img">
                        <img src={academy} />
                      </div>
                    </div>
                    <div className="col-md-8 col-sm-8 col-8">
                      <p className="systems_text_head"> Academy </p>
                      <p className="systems_sub_text">
                        {" "}
                        The Shocking Truth About Winter’s Block:Unveild!{" "}
                      </p>
                    </div>
                    <div className="col-md-2 col-sm-2 col-2">
                      <p className="systems_sub_text"> 4d </p>
                    </div>
                  </div>

                  <div className="inbox_divider mt-3 "></div>

                  {/* <div className="system_major_box">
                    <div className="systems_task_box">
                      <div className="system_img contract_img">
                        <img src={contract} />
                      </div>
                      <div>
                        <p className="systems_text_head"> Contract </p>
                      </div>
                    </div>
                  </div> */}

                  <div className="row mt-3">
                    <div className="col-md-2 col-sm-2 col-2">
                      <div className="system_img contract_img">
                        <img src={contract} />
                      </div>
                    </div>
                    <div className="col-md-8 col-sm-8 col-8">
                      <p className="systems_text_head"> Contract </p>
                    </div>
                    <div className="col-md-2 col-sm-2 col-2"></div>
                  </div>

                  <div className="inbox_divider mt-3 "></div>

                  {/* <div
                    className="system_major_box"
                    onClick={() => {
                      setShowtwo(false);
                      setShows(false);
                      handleShowtwo();
                    }}
                  >
                    <div className="systems_task_box">
                      <div className="system_img annoucment_img">
                        <img src={annoucment} />
                      </div>
                      <div>
                        <p className="systems_text_head"> Announcement </p>
                        <p className="systems_sub_text">
                          {" "}
                          New WebNove! Author Benefit & Policies Page Launched{" "}
                        </p>
                      </div>
                    </div>
                    <p className="systems_sub_text"> 6mth </p>
                  </div> */}

                  <div
                    onClick={() => {
                      setShowtwo(false);
                      setShows(false);
                      handleShowtwo();
                    }}
                  >
                    <div className="row mt-3">
                      <div className="col-md-2 col-sm-2 col-2">
                        <div className="system_img annoucment_img">
                          <img src={annoucment} />
                        </div>
                      </div>
                      <div className="col-md-8 col-sm-8 col-8">
                        <p className="systems_text_head"> Announcement </p>
                        <p className="systems_sub_text">
                          {" "}
                          New WebNove! Author Benefit & Policies Page Launched{" "}
                        </p>
                      </div>
                      <div className="col-md-2 col-sm-2 col-2">
                        <p className="systems_sub_text"> 6mth </p>
                      </div>
                    </div>
                  </div>

                  <div className="inbox_divider mt-3 "></div>

                  <div className="row mt-3">
                    <div className="col-md-2 col-sm-2 col-2">
                      <div className="system_img giftsinbox_img">
                        <img src={giftsinbox} />
                      </div>
                    </div>
                    <div className="col-md-8 col-sm-8 col-8">
                      <p className="systems_text_head"> Gifts </p>
                    </div>
                    <div className="col-md-2 col-sm-2 col-2"></div>
                  </div>

                  {/* <div className="system_major_box">
                    <div className="systems_task_box">
                      <div className="system_img giftsinbox_img">
                        <img src={giftsinbox} />
                      </div>
                      <div>
                        <p className="systems_text_head"> Gifts </p>
                      </div>
                    </div>
                  </div> */}

                  <div className="inbox_divider mt-3 "></div>

                  {/* <div className="system_major_box">
                    <div className="systems_task_box">
                      <div className="system_img updates_img">
                        <img src={updates} />
                      </div>
                      <div>
                        <p className="systems_text_head"> Updates </p>
                      </div>
                    </div>
                  </div> */}

                  <div className="row mt-3">
                    <div className="col-md-2 col-sm-2 col-2">
                      <div className="system_img updates_img">
                        <img src={updates} />
                      </div>
                    </div>
                    <div className="col-md-8 col-sm-8 col-8">
                      <p className="systems_text_head"> Updates </p>
                    </div>
                    <div className="col-md-2 col-sm-2 col-2"></div>
                  </div>
                </div>
              </div>
            </Modal.Body>
          </div>
        </Modal>

        {/* 2nd modal end */}

        {/* 3rd modal start */}

        <Modal
          show={showtwo}
          onHide={handleClosetwo}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <div className="inbox_content">
            <Modal.Body>
              <div className="inbox_options_box">
                <div className="discover_btns_box">
                  <div className="back_btn_option">
                    <FontAwesomeIcon
                      icon={faAngleLeft}
                      className="inbox_back_icon"
                    />
                    <button className="discover_data_btns">WORKS</button>
                    <button className="discover_data_btns">CONTEST</button>
                    <button className="discover_data_btns">DISCOVER</button>
                    <button className="discover_data_btns">DATA</button>
                    <button
                      className="discover_data_btns"
                      onClick={() => {
                        setShowtwo(false);
                        setShows(false);
                        setShow(false);
                        handleShowthree();
                      }}
                    >
                      HELP
                    </button>
                    <button className="discover_data_btns">EARNINGS</button>
                  </div>
                  <div className="position-relative notification_space">
                    <FontAwesomeIcon icon={faBell} className="note_bell_icon" />
                    <div className="note_count">
                      <p className="note_count_number">10</p>
                    </div>
                  </div>
                </div>

                <div className="inbox_divider"></div>
                <div className="inbox_features_box">
                  <div className="systems_task_box">
                    <img src={dollars} className="dollar_img" />
                    <p className="systems_text_head">Income</p>
                  </div>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="inbox_back_icon"
                  />
                </div>

                <div className="inbox_web_novels_bg">
                  <p className="webnovel_head">Webnovel Content Creation</p>
                  <p className="webnovel_text">
                    BLorem Ipsum is simply dummy text of the printing.
                  </p>
                  <div className="systems_task_box">
                    <div className="webnovel_mark"></div>
                    <div className="webnovel_active"></div>
                    <div className="webnovel_mark"></div>
                    <div className="webnovel_mark"></div>
                  </div>
                </div>

                <div className="inbox_systems_box">
                  <div className="system_major_box">
                    <p className="wining_context_text">Winning contests </p>
                    <div className="systems_task_box">
                      <p className="systems_text_head">View All</p>
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        className="inbox_back_icon"
                      />
                    </div>
                  </div>

                  <div className="system_major_box">
                    <div>
                      <p className="contests_title">
                        Weekly Love Tales: Vampire{" "}
                      </p>
                      <div className="systems_task_box">
                        <FontAwesomeIcon
                          icon={faClock}
                          className="inbox_back_icon"
                        />
                        <p className="contests_days">1 day left</p>
                      </div>
                    </div>

                    <img src={contestone} className="img-fluid contest_img" />
                  </div>

                  <div className="inbox_divider mt-3 "></div>

                  <div className="system_major_box">
                    <div>
                      <p className="contests_title">
                        Weekly Love Tales: Vampire{" "}
                      </p>
                      <div className="systems_task_box">
                        <FontAwesomeIcon
                          icon={faClock}
                          className="inbox_back_icon"
                        />
                        <p className="contests_days">1 day left</p>
                      </div>
                    </div>

                    <img src={contesttwo} className="img-fluid contest_img" />
                  </div>

                  <div className="inbox_divider mt-3 "></div>

                  <div className="system_major_box">
                    <div>
                      <p className="contests_title">
                        Weekly Love Tales: Vampire{" "}
                      </p>
                      <div className="systems_task_box">
                        <FontAwesomeIcon
                          icon={faClock}
                          className="inbox_back_icon"
                        />
                        <p className="contests_days">1 day left</p>
                      </div>
                    </div>

                    <img src={contesttwo} className="img-fluid contest_img" />
                  </div>

                  <div className="inbox_divider mt-3 "></div>
                </div>
              </div>
            </Modal.Body>
          </div>
        </Modal>

        {/* 3rd modal end */}

        {/* 4th modal start */}

        <Modal
          show={showthree}
          onHide={handleClosethree}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <div className="inbox_content">
            <Modal.Body>
              <div className="inbox_options_box">
                <div className="discover_btns_box">
                  <div className="back_btn_option">
                    <FontAwesomeIcon
                      icon={faAngleLeft}
                      className="inbox_back_icon"
                    />
                    <p className="inbox_text">Setting</p>
                  </div>
                </div>
                <p className="settings_text">Notification</p>
                <div className="inbox_divider mt-2 "></div>
                <p className="settings_text">Language</p>
                <div className="inbox_divider mt-2 "></div>
                <div className="dropdown_list_with_toggle">
                  <p className="settings_text">Hide R18 & Mature</p>
                  <div class="checkbox-wrapper-14">
                    <input id="s1-14" type="checkbox" class="switch" />
                  </div>
                </div>
                <div className="inbox_divider mt-2 "></div>
                <p
                  className="settings_text"
                  onClick={() => {
                    setShowtwo(false);
                    setShows(false);
                    setShow(false);
                    setShowthree(false);
                    handleShowfour();
                  }}
                >
                  About Little Literature Club
                </p>
                <div className="inbox_divider mt-2 "></div>
                <p className="settings_text">Clear Cache</p>
                <div className="inbox_divider mt-2 "></div>
                <p className="settings_text">Delete Account</p>
                <div className="inbox_divider mt-2 "></div>
              </div>
            </Modal.Body>
          </div>
        </Modal>

        {/* 4th modal end */}


        {/* 5th Modal Start */}

        <Modal
          show={showfour}
          onHide={handleClosefour}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
        <div className="inbox_content">
          <Modal.Body>
            <div className="inbox_options_box">
              <div className="inbox_skip_btn_box">
                <button className="skip_three_btn" onClick={handleClosefour}>
                  SKIP 3
                </button>
              </div>
              <div className="row">
                <div className="col-lg-7">
                  <p className="directive_title">
                    THE PHANTOM DIRECTIVE DESERT MIRAGE
                  </p>
                </div>
              </div>
              <div className="directive_book_bg">
                <div className="row">
                  <div className="col-lg-5 p-5">
                    <p className="inbox_literature_title">
                      {" "}
                      LITTLE LITERATURE CLUB{" "}
                    </p>
                    <p className="inbox_literature_title literature_title_two">
                      {" "}
                      RECOMMENDES{" "}
                    </p>
                  </div>

                  <div className="col-lg-7">
                    <div className="winbook_img text-right">
                      <img src={winbook} />
                    </div>
                    <div className="text-center">
                      <img
                        src={disrectivebook}
                        className="img-fluid disrective_img"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="row mt-3">
                <div className="col-md-12">
                  <p className="directive_readers_para">
                    ESENTIAL AND LOYAL READERS HAVE EARNED IT
                  </p>
                  <div className="text-center mt-2">
                    {" "}
                    <button className="discover_data_btns">READ NOW</button>
                  </div>
                </div>
              </div>
            </div>
          </Modal.Body>
        </div>
        </Modal>

        {/* 5th Modal End */}

        
      </>
    </UserLayout>
  );
};
