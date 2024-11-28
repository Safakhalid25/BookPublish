import { React, useState, useEffect } from "react";
import { UserLayout } from "../../Components/Layout/UserLayout";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import storyarrow from "../../Assets/images/story_arrow.png";
import "./beta.css";
import CustomCard from "../../Components/CustomCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import CustomButton from "../../Components/BackButton";
import bgnewlybook from "../../Assets/images/bgnewlybooks.png";
import newlybook from "../../Assets/images/newlybook.png";
import newbookrel from "../../Assets/images/newbookrel.png";
import wheel from "../../Assets/images/wheel.png";
import carddd1 from "../../Assets/images/carddd1.png";
import {
  BannerBooks,
  Cart_icon_pink,
  CompletedNovelB1,
  CompletedNovelB2,
  CompletedNovelB3,
  CompletedNovelB4,
  FeaturedB1,
  FeaturedB2,
  FeaturedB3,
  HarryPotterBook,
  Logo,
  ManaAnime,
  ManaDisplayImg,
  MyRebbetsBook,
  PopularAnime,
  PopularTagAfter,
  PopularTagBefore,
  Product_Icon,
  TopAuthorAfter,
  TopAuthorBefore,
  TopAuthorBook1,
  TopAuthorBook2,
  SmallAnime1,
  SmallAnime2,
  User_icon_plus,
  User_icon_white,
  BestSellingBooks,
  TopAuthorBook3,
  TopAuthorCartoon,
  User_Icon,
  User_icon_pink,
} from "../../Assets/images";
import { Link } from "react-router-dom";

import {
  faArrowRight,
  faCartShopping,
  faEnvelope,
  faEye,
  faHeart,
  faList,
  faSearch,
  faStar,
  faUser,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aos from "aos";
import "aos/dist/aos.css";
import completeform from "../../Assets/images/completeform.gif";

export const Beta = () => {
  const [ads, setAds] = useState([]);

  const [books, setBooks] = useState([]);
  const [genres, setGenres] = useState([]);

  const [selectedGenre, setSelectedGenre] = useState(null);
  const base_url = "https://custom.mystagingserver.site/Tim-WDLLC/public/";

  const [showGif, setShowGif] = useState(false);

  const handleClick = () => {
    setShowGif((prevShowGif) => !prevShowGif);
    setTimeout(() => {
      setModalShowfifth(false);
    }, 500);
  };

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
          breakpoint: 1024,
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

  const adsListing = () => {
    document.querySelector(".loaderBox").classList.remove("d-none");
    fetch(
      "https://custom.mystagingserver.site/Tim-WDLLC/public/api/ads_listing",
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        document.querySelector(".loaderBox").classList.add("d-none");
        setAds(data.data);
      })
      .catch((error) => {
        document.querySelector(".loaderBox").classList.add("d-none");
        console.log(error);
      });
  };

  const BookListing = () => {
    document.querySelector(".loaderBox").classList.remove("d-none");
    fetch(
      "https://custom.mystagingserver.site/Tim-WDLLC/public/api/book_listing",
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        document.querySelector(".loaderBox").classList.add("d-none");
        console.log(data.data);
        setBooks(data.data);
      })
      .catch((error) => {
        document.querySelector(".loaderBox").classList.add("d-none");
        console.log(error);
      });
  };

  const GenreData = () => {
    document.querySelector(".loaderBox").classList.remove("d-none");
    fetch(
      "https://custom.mystagingserver.site/Tim-WDLLC/public/api/genre_listing"
    )
      .then((response) => response.json())
      .then((data) => {
        document.querySelector(".loaderBox").classList.add("d-none");
        console.log(data);
        setGenres(data.data);
        if (data.data.length > 0) {
          setSelectedGenre(data.data[0]); // Select the first genre by default
        }
      })
      .catch((error) => {
        document.querySelector(".loaderBox").classList.add("d-none");
        console.error("Error fetching data: ", error);
      });
  };

  useEffect(() => {
    adsListing();
    BookListing();
    GenreData();
  }, []);

  const handleTabClick = (genre) => {
    setSelectedGenre(genre);
  };

  const [bookFilter, setBookFilter] = useState();
  const filterGenre = (event) => {
    const filterCategory = event.target.value;
    const filteredBooks = bookFilter?.filter(
      (book) => book?.genre_id == filterCategory
    );
    setBooks(filteredBooks);
  };

  const isfeatured = books.filter((items) => items?.is_featured === true);

  const istop = books.filter((items) => items?.is_top === true);

  const is_completed = books.filter((items) => items?.is_completed === true);

  console.log("isfeatured", isfeatured);
  console.log("book", books);

  const [modalShowfirst, setModalShowfirst] = useState(false);
  const [modalShowsecound, setModalShowsecound] = useState(false);
  const [modalShowthired, setModalShowthired] = useState(false);
  const [modalShowfourth, setModalShowfourth] = useState(false);
  const [modalShowfifth, setModalShowfifth] = useState(false);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    setModalShowfirst(true);
  }, []);
  return (
    <>
      <UserLayout>
        {/* Banner Section */}

        <section className="banner-sec">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12 ">
                <div className="section__heading">
                  <div class="special_heading">
                    <h2
                      className="jost-font"
                      data-aos="fade-left"
                      data-aos-duration="3000"
                    >
                      <span className="special_little">Little</span> Literature
                      Club
                    </h2>
                  </div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry Lorem Ipsum has been the industrys
                    standard dummy text ever since the when an unknown printer
                    took a galley of type and scrambled.
                  </p>
                  <div className="join__us-btns jost-font">
                    <button
                      className="join__us-btn"
                      data-aos="fade-right"
                      data-aos-duration="3000"
                    >
                      Get Started{" "}
                      <div className="offer__icon">
                        {/* <FontAwesomeIcon icon={faUser} /> */}
                        <img src={User_Icon} />
                      </div>
                    </button>
                    <button
                      className="join__us-btn"
                      data-aos="fade-left"
                      data-aos-duration="3000"
                    >
                      Learn More{" "}
                      <div className="offer__icon">
                        {/* <FontAwesomeIcon icon={faUser} /> */}
                        <img src={User_Icon} />
                      </div>
                    </button>
                  </div>
                </div>
                <div className="banner__img-sec mx-auto">
                  <img
                    src={BannerBooks}
                    data-aos="flip-left"
                    data-aos-duration="3000"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="social-section">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div class="follow__social-icons">
                  <p className="follow_social_links_text">Follow us:</p>
                  <a href="javascript:;" class="follow__social-icon">
                    <i class="fa-brands fa-facebook-f"></i>
                  </a>
                  <a href="javascript:;" class="follow__social-icon">
                    <i class="fa-brands fa-twitter"></i>
                  </a>
                  <a href="javascript:;" class="follow__social-icon">
                    <i class="fa-brands fa-instagram"></i>
                  </a>
                  {/* <a href="javascript:;" class="follow__social-icon">
                    <i class="fa-brands fa-linkedin-in"></i>
                  </a> */}
                </div>
              </div>
              <div className="col-md-6">
                <div class="follow__social-icons follow_details_info_box">
                  <div >
                     <div className="info_banner_box">
                      <i class="fa-solid fa-envelope email_envelop"></i>
                      <p className="info_data_text">Email:</p>
                     </div>
                     <p className="web_info_text">info@gmail.com</p>
                  </div>
                  <div className="banner_info_divider">
                     <div className="info_banner_box">
                      <i class="fa-solid fa-mobile-screen-button email_envelop"></i>
                      <p className="info_data_text">Phone:</p>
                     </div>
                     <p className="web_info_text">(626) 7367 7337</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Top Author Section */}
        <section className="top-authors">
          <div className="top__author-cartoon">
            {/* <Link to={`/book-listing/product-detail/${item?.id}`}></Link> */}
            <img src={TopAuthorCartoon} />
          </div>
          <div className="top__author-before">
            <img src={TopAuthorBefore} />
          </div>
          <div className="top__author-after">
            <img src={TopAuthorAfter} />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-12 section__heading">
                <div class="special_heading">
                  <h1
                    className="jost-font typewriter"
                    data-aos="fade-right"
                    data-aos-duration="3000"
                  >
                    Authors
                  </h1>
                  <h2
                    className="jost-font"
                    data-aos="fade-left"
                    data-aos-duration="3000"
                  >
                    Top Authors
                  </h2>
                </div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry Lorem Ipsum has been the industrys
                  standard dummy text ever since the when an unknown printer
                  took a galley of type and scrambled.
                </p>
                <div className="tags jost-font">
                  <a href="javascript:;" className="tag">
                    Weekly
                  </a>
                  <a href="javascript:;" className="tag">
                    Winners Of competition
                  </a>
                  <a href="javascript:;" className="tag">
                    Best reviews
                  </a>
                </div>
              </div>

              <div className="author__products">
                <div className="row">
                  <Slider {...settingsForFourItems}>
                    {istop &&
                      istop?.map((item, index) => (
                        <Link
                          to={`/book-detail/${item?.id}`}
                          className="author__products_link"
                        >
                          <CustomCard
                            className="author__products_img"
                            image={base_url + item?.image}
                            icon1={faArrowRight}
                            icon2={faEye}
                            icon3={faHeart}
                            imageicon={Cart_icon_pink}
                            text={"Add To Cart"}
                            price={item?.price || 0}
                            title={item?.name}
                          />
                        </Link>
                      ))}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Mana Coin Section */}
        <section className="mana-coin">
          <div className="mana-anime">
            <img src={ManaAnime} />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-12 section__heading">
                <div class="special_heading">
                  <h1
                    className="jost-font"
                    data-aos="fade-right"
                    data-aos-duration="3000"
                  >
                    Currency
                  </h1>
                  <h2
                    className="jost-font"
                    data-aos="fade-left"
                    data-aos-duration="3000"
                  >
                    MANA COIN
                  </h2>
                </div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry Lorem Ipsum has been the industrys
                  standard dummy text ever since the when an unknown printer
                  took a galley of type and scrambled.
                </p>
                <div className="join__us-btns jost-font">
                  <button
                    className="join__us-btn"
                    data-aos="fade-right"
                    data-aos-duration="3000"
                  >
                    View Detauils{" "}
                    <div className="offer__icon">
                      {/* <FontAwesomeIcon icon={faUser} /> */}
                      <img src={Product_Icon} />
                    </div>
                  </button>
                  <button
                    className="join__us-btn"
                    data-aos="fade-left"
                    data-aos-duration="3000"
                  >
                    Earn Mana{" "}
                    <div className="offer__icon">
                      <img src={Product_Icon} />
                    </div>
                  </button>
                </div>
              </div>
              {/* <div className="mana-display">
                <img src={ManaDisplayImg} data-aos="fade-up" data-aos-duration="3000"/>
              </div> */}
            </div>

            <div className="row">
              <div className="col-lg-4 col-sm-12">
                <div className="wheelImg">
                  <img
                    src={wheel}
                    data-aos="fade-up"
                    data-aos-duration="3000"
                  />
                </div>
              </div>
              <div className="col-lg-4 col-sm-12">
                <div className="mana-display">
                  <img
                    src={ManaDisplayImg}
                    data-aos="fade-up"
                    data-aos-duration="3000"
                  />
                </div>
              </div>
              <div className="col-lg-4 col-sm-12 align-self-center ">
                <div className="card_boxes_">
                  <div className="cardImg">
                    <img
                      src={carddd1}
                      data-aos="fade-up"
                      data-aos-duration="3000"
                    />
                  </div>
                  <div className="cardImg">
                    <img
                      src={carddd1}
                      data-aos="fade-up"
                      data-aos-duration="3000"
                    />
                  </div>
                  <div className="cardImg">
                    <img
                      src={carddd1}
                      data-aos="fade-up"
                      data-aos-duration="3000"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Features Book Section */}
        <section className="combine-section">
          <section className="feature-books">
            <div className="container">
              <div className="row">
                <div className="col-md-12 new_feature ">
                  <div class="">
                    <h1
                      className="jost-font new_special_heading"
                      data-aos="fade-right"
                      data-aos-duration="3000"
                    >
                      Featured Books
                    </h1>
                    {/* <h2
                      className="jost-font"
                      data-aos="fade-left"
                      data-aos-duration="3000"
                    >
                      Featured Books
                    </h2> */}
                  </div>
                  <p className="new_feature_para">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry Lorem Ipsum has been the industrys
                    standard dummy text ever since the when an unknown printer
                    took a galley of type and scrambled.
                  </p>
                  <div className="tags jost-font">
                    <a href="javascript:;" className="tag">
                      Books
                    </a>
                    <a href="javascript:;" className="tag">
                      novels
                    </a>
                    <a href="javascript:;" className="tag">
                      authors
                    </a>
                    <a href="javascript:;" className="tag">
                      comics
                    </a>
                  </div>
                  {/* <div
                    className="tags jost-font nav nav-pills mb-3 "
                    id="pills-tab"
                    role="tablist"
                  >
                    <button href="javascript:;" className="nav-link tag " value={item?.id} onClick={filterGenre}>
                      Books{" "}
                    </button>
                    <button href="javascript:;" className="tag nav-link" value={item?.id} onClick={filterGenre}>
                      novels
                    </button>
                    <button href="javascript:;" className="tag nav-link" value={item?.id} onClick={filterGenre}>
                      Genre
                    </button>
                    <button href="javascript:;" className="tag nav-link"value={item?.id} onClick={filterGenre}>
                      comics
                    </button>
                  </div> */}
                </div>
                {/* <div className="featured__books">
                  <div className="row popular_tabing">
                    <Slider {...settingsForFourItems}>
                      {isfeatured &&
                        isfeatured?.map((item, index) => (
                          <Link
                            className="col-md-4"
                            to={`/book-detail/${item?.id}`}
                          >
                            <div className="card product_hover-effect">
                              <img
                                src={base_url + item?.image}
                                className="card-img-top"
                                id="featured__books_img"
                              />
                              <div className="card-body featured_books-body">
                                <h3 className="card-title jost-font">
                                  {item?.name.slice(0, 15)}
                                </h3>
                                <p className="author__name jost-font">
                                  Author Name
                                </p>
                                <p className="card-text featured__book-desc jost-font">
                                  {item?.description}
                                </p>
                                <div className="product__price-div">
                                  <h3 className="author__poduct_title jost-font">
                                    <div className="product__price">
                                      <span className="discount__price">
                                        ${item?.price}
                                      </span>
                                      <span className="actual__price">
                                        ${item?.price}
                                      </span>
                                    </div>
                                  </h3>
                                  <div class="product__icon">
                                    <img src={Cart_icon_pink} />
                                  </div>
                                </div>
                                <div className="rating__div">
                                  <FontAwesomeIcon
                                    icon={faStar}
                                  ></FontAwesomeIcon>
                                  <FontAwesomeIcon
                                    icon={faStar}
                                  ></FontAwesomeIcon>
                                  <FontAwesomeIcon
                                    icon={faStar}
                                  ></FontAwesomeIcon>
                                  <FontAwesomeIcon
                                    icon={faStar}
                                  ></FontAwesomeIcon>
                                  <FontAwesomeIcon
                                    icon={faStar}
                                  ></FontAwesomeIcon>
                                </div>
                              </div>
                            </div>
                          </Link>
                        ))}
                    </Slider>
                  </div>
                </div> */}
              </div>
            </div>
          </section>

          {/* Harry Potter Section */}
          <section className="harry-potter">
            <div className="container">
              <div className="row ">
                <div className="featured__books new_feature_book_spacing ">
                  <div className="row popular_tabing mx-auto">
                    <Slider {...settingsForFourItems}>
                      {isfeatured &&
                        isfeatured?.map((item, index) => (
                          <Link
                            className="col-md-4"
                            to={`/book-detail/${item?.id}`}
                          >
                            <div className="card product_hover-effect">
                              <img
                                src={base_url + item?.image}
                                className="card-img-top"
                                id="featured__books_img"
                              />
                              <div className="card-body featured_books-body">
                                <h3 className="card-title jost-font">
                                  {item?.name.slice(0, 15)}
                                </h3>
                                <p className="author__name jost-font">
                                  Author Name
                                </p>
                                <p className="card-text featured__book-desc jost-font">
                                  {item?.description}
                                </p>
                                <div className="product__price-div">
                                  <h3 className="author__poduct_title jost-font">
                                    <div className="product__price">
                                      <span className="discount__price">
                                        ${item?.price}
                                      </span>
                                      <span className="actual__price">
                                        ${item?.price}
                                      </span>
                                    </div>
                                  </h3>
                                  <div class="product__icon">
                                    <img src={Cart_icon_pink} />
                                  </div>
                                </div>
                                <div className="rating__div">
                                  <FontAwesomeIcon
                                    icon={faStar}
                                  ></FontAwesomeIcon>
                                  <FontAwesomeIcon
                                    icon={faStar}
                                  ></FontAwesomeIcon>
                                  <FontAwesomeIcon
                                    icon={faStar}
                                  ></FontAwesomeIcon>
                                  <FontAwesomeIcon
                                    icon={faStar}
                                  ></FontAwesomeIcon>
                                  <FontAwesomeIcon
                                    icon={faStar}
                                  ></FontAwesomeIcon>
                                </div>
                              </div>
                            </div>
                          </Link>
                        ))}
                    </Slider>
                  </div>
                </div>
              </div>

              <div className="row mb-5">
                <div className="col-lg-9 harry-potter-bg">
                  <div className="harry__potter-section">
                    <div className="row align-items-center">
                      <div className="col-md-4">
                        <div class="harry__potter-img">
                          <img
                            src={HarryPotterBook}
                            data-aos="fade-right"
                            data-aos-duration="3000"
                          />
                        </div>
                      </div>
                      <div className="col-md-8">
                        <div class="harry__potter-content">
                          <h1
                            className="jost-font"
                            data-aos="fade-left"
                            data-aos-duration="3000"
                          >
                            Harry Potter
                          </h1>
                          <p className="poppins-font py-3">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry Lorem Ipsum has been the
                            industry's standard dummy text ever since the when
                            an unknown
                          </p>
                          <div className="offer-end">
                            <div className="offer-remain-time poppins-font">
                              2:59:59
                            </div>
                            <div className="offer-lable jost-font">
                              Offer Ends In
                            </div>
                          </div>
                          <div className="offer-btn-group">
                            <button className="jost">
                              Buy Now{" "}
                              <div className="offer__icon">
                                {/* <FontAwesomeIcon icon={faCartShopping} /> */}
                                <img src={Product_Icon} />
                              </div>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 harrypotter_books-col">
                  <div className="harrypotter_book">
                   

                    {books &&
                      books?.map((item, index) => (
                        <div class="row  harrypotter_book mb-4 ">
                          <div className="col-4">
                            <img src={base_url + item?.image} alt="..." />
                          </div>
                          <div className="col-8">
                            <h3 className="harrypotter_books-title jost-font">
                              {item?.name.slice(0, 15)}
                            </h3>
                            <p className="harrypotter_books-body">
                              {item?.description}
                            </p>
                            <h3 class="author__poduct_title harrypotter_books-price jost-font">
                              <div class="product__price new_harrypotter_product__price">
                                <span class="discount__price">
                                  ${item?.price}
                                </span>
                                <span class="actual__price">
                                  ${item?.price}
                                </span>
                              </div>
                            </h3>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Joins us and popular combine section */}
          <section className="new_released">
            <div className="container">
              <div className="row">
                <div className="col-ms-12">
                  <h1 className="new_book_heading">Newly Released Books</h1>
                  <img className="img-fluid" src={newbookrel} />
                </div>
              </div>
            </div>
          </section>

          <section className="join-us mt-5 ">
            <div className="container">
              <div className="row">
                <div className="col-md-12 section__heading">
                  <div class="special_heading">
                    <h1
                      className="jost-font"
                      data-aos="fade-right"
                      data-aos-duration="3000"
                    >
                      Author
                    </h1>
                    <h2
                      className="jost-font"
                      data-aos="fade-left"
                      data-aos-duration="3000"
                    >
                      How You Can Join Us!
                    </h2>
                  </div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry Lorem Ipsum has been the industrys
                    standard dummy text ever since the when an unknown printer
                    took a galley of type and scrambled.
                  </p>
                  <div className="join__us-btns jost-font">
                    <button className="join__us-btn">
                      Original Stories{" "}
                      <div className="offer__icon">
                        {/* <FontAwesomeIcon icon={faUser} /> */}
                        <img src={User_icon_pink} />
                      </div>
                    </button>
                    <button className="join__us-btn">
                      Become an Author{" "}
                      <div className="offer__icon">
                        {/* <FontAwesomeIcon icon={faUser} /> */}
                        <img src={User_icon_pink} />
                      </div>
                    </button>
                    <button className="join__us-btn">
                      Book of Author{" "}
                      <div className="offer__icon">
                        {/* <FontAwesomeIcon icon={faUser} /> */}
                        <img src={User_icon_pink} />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Popular Tags Section */}
          <section className="popular-tags">
            <div className="top__popular-anime">
              <img src={PopularAnime} />
            </div>
            <div class="popular-before">
              <img src={PopularTagBefore} />
            </div>
            <div class="popular-after">
              <img src={PopularTagAfter} />
            </div>
            <div className="container">
              <div className="row">
                <div className="col-md-12 section__heading">
                  <div class="special_heading">
                    <h1
                      className="jost-font"
                      data-aos="fade-right"
                      data-aos-duration="3000"
                    >
                      Tags
                    </h1>
                    <h2
                      className="jost-font"
                      data-aos="fade-left"
                      data-aos-duration="3000"
                    >
                      Popular Tags
                    </h2>
                  </div>
                  <p>
                    {" "}
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry Lorem Ipsum has been the industrys
                    standard dummy text ever since the when an unknown printer
                    took a galley of type and scrambled.
                  </p>
                  <div className="tags jost-font">
                    <a href="javascript:;" className="tag">
                      authors
                    </a>
                    <a href="javascript:;" className="tag">
                      novels
                    </a>
                    <a href="javascript:;" className="tag">
                      Books
                    </a>
                    <a href="javascript:;" className="tag">
                      comics
                    </a>
                  </div>
                </div>
                <div className="col-12 popular-container">
                  <div className="large-tags mb-4  jost-font">
                    <a href="javascript:;" className="large-tag">
                      Lorem Ipsume
                    </a>
                    <a href="javascript:;" className="large-tag">
                      Lorem Ipsume
                    </a>
                    <a href="javascript:;" className="large-tag">
                      Lorem Ipsume
                    </a>
                    <a href="javascript:;" className="large-tag">
                      Lorem Ipsume
                    </a>
                    <a href="javascript:;" className="large-tag">
                      Lorem Ipsume
                    </a>
                    <a href="javascript:;" className="large-tag">
                      Lorem Ipsume
                    </a>
                  </div>
                  <div className="large-tags mb-4 jost-font">
                    <a href="javascript:;" className="large-tag">
                      Lorem Ipsume
                    </a>
                    <a href="javascript:;" className="large-tag">
                      Lorem Ipsume
                    </a>
                    <a href="javascript:;" className="large-tag">
                      Lorem Ipsume
                    </a>
                    <a href="javascript:;" className="large-tag">
                      Lorem Ipsume
                    </a>
                    <a href="javascript:;" className="large-tag">
                      Lorem Ipsume
                    </a>
                  </div>
                  <div className="large-tags mb-4 jost-font">
                    <a href="javascript:;" className="large-tag">
                      Lorem Ipsume
                    </a>
                    <a href="javascript:;" className="large-tag">
                      Lorem Ipsume
                    </a>
                    <a href="javascript:;" className="large-tag">
                      Lorem Ipsume
                    </a>
                    <a href="javascript:;" className="large-tag">
                      Lorem Ipsume
                    </a>
                    <a href="javascript:;" className="large-tag">
                      Lorem Ipsume
                    </a>
                    <a href="javascript:;" className="large-tag">
                      Lorem Ipsume
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>

        <section className="completed-novel">
          <div
            className="container-fluid
        "
          >
            <div className="row">
              <div className="col-md-12 section__heading">
                <div class="special_heading">
                  <h1
                    className="jost-font"
                    data-aos="fade-right"
                    data-aos-duration="3000"
                  >
                    Novels
                  </h1>
                  <h2
                    className="jost-font"
                    data-aos="fade-left"
                    data-aos-duration="3000"
                  >
                    Completed Novel
                  </h2>
                </div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry Lorem Ipsum has been the industrys
                  standard dummy text ever since the when an unknown printer
                  took a galley of type and scrambled.
                </p>
              </div>
              <div className="row completed__novel-cards">
                <Slider {...settingsForFourItems}>
                  {is_completed &&
                    is_completed?.map((item, index) => (
                      <div className="col-md-3 novel__card-boxshadow">
                        <Link
                          className="col-md-4"
                          to={`/book-detail/${item?.id}`}
                        >
                          <div className="card completed__novel-card">
                            <img
                              src={base_url + item?.image}
                              className="card-img-top"
                            />
                            <div className="card-body featured_books-body">
                              <h3 className="card-title jost-font">
                                {item?.name.slice(0, 5)}
                              </h3>
                              <p className="author__name jost-font">
                                {item?.name}
                              </p>

                              <div className="product__price-div">
                                <h3 className="author__poduct_title">
                                  <div className="product__price">
                                    <span className="discount__price">
                                      ${item?.price}
                                    </span>
                                    <span className="actual__price">
                                      ${item?.price}
                                    </span>
                                  </div>
                                </h3>
                                <div class="product__icon">
                                  <FontAwesomeIcon
                                    icon={faCartShopping}
                                    className="primaryColor"
                                  />
                                </div>
                              </div>
                              <div className="rating__div">
                                <FontAwesomeIcon
                                  icon={faStar}
                                ></FontAwesomeIcon>
                                <FontAwesomeIcon
                                  icon={faStar}
                                ></FontAwesomeIcon>
                                <FontAwesomeIcon
                                  icon={faStar}
                                ></FontAwesomeIcon>
                                <FontAwesomeIcon
                                  icon={faStar}
                                ></FontAwesomeIcon>
                                <FontAwesomeIcon
                                  icon={faStar}
                                ></FontAwesomeIcon>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    ))}
                </Slider>
              </div>
            </div>
          </div>
        </section>
        <Modal 
          show={modalShowfirst}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          // onHide={() => setModalShowfirst(false)}
      // slide-out-left  
        // dialogAs="slide-out-left"
      // animation="bool"
        >
          <div className="form_bg_one">
            <div className="modal-header custom_form_header">
              <h1 className="modal-title_form" id="exampleModalToggleLabel">
                tailor to your needs
              </h1>
              <button
                onClick={() => setModalShowfirst(false)}
                type="button"
                className="form_btn_close"
                aria-label="Close"
              >
                Skip
              </button>
            </div>

            <div className="modal-body">
              <div className="modal_form_divider"></div>
              <p className="form_modal_para">
                Choose your reading preference before digging in..
              </p>
              <p className="form_modal_para">You can change it later</p>
              <div className="row modal_forms_rows_spacing">
                <div className="col-md-6">
                  <div className="female_stories">
                    <h3 className="female_lead_heading">FEMALE LEAD STORIES</h3>
                    <div className="lead_story_divider"></div>
                    <div className="lead_story_text_div">
                      <p className="story_detail_content">
                        More Romance, LGBT +, Teen, History, Fantasy, Urban.
                      </p>
                      <img
                        src={storyarrow}
                        className="img-fluid story_arrow_right"
                        alt="arrow"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="male_stories">
                    <h3 className="female_lead_heading">MALE LEAD STORIES</h3>
                    <div className="lead_story_divider"></div>
                    <div className="lead_story_text_div">
                      <p className="story_detail_content">
                        More Eastern, Games, Horror, Sports, Action, War,
                        Realistic.
                      </p>
                      <img src={storyarrow} className="img-fluid" alt="arrow" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="modal-footer custome_form_modal_footer">
              <button
                onClick={() => {
                  setModalShowfirst(false);
                  setModalShowsecound(true);
                }}
                className="second_modal_btn"
              >
                Next <i className="fa-solid fa-caret-right next_form_arrow"></i>
              </button>
            </div>
          </div>
        </Modal>

        <Modal
          show={modalShowsecound}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <div className="  form_bg_two">
            <div class="modal-header custom_form_header">
              <h1 class="modal-title_form " id="exampleModalToggleLabel">
                tailor to your needs
              </h1>
              <button
                onClick={() => setModalShowsecound(false)}
                type="button"
                class="form_btn_close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                Skip
              </button>
            </div>

            <div class="modal-body">
              <div className="modal_form_divider"></div>
              <p className="form_modal_para">choose your reading preference</p>

              <div className="row modal_forms_rows_spacing">
                <div className="col-md-6">
                  <div className="female_stories_two">
                    <div className="lead_story_text_div">
                      <h3 className="female_lead_heading">More Fantasy</h3>
                      <img src={storyarrow} className="img-fluid" />
                    </div>
                    <div className="lead_story_divider"></div>
                    <p className="story_detail_content_two">
                      #action #adventure #Reincarnation #System #Magic #harem
                      #Cultivation #Weakostrong #Videogame #Dragon
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="male_stories_two">
                    <div className="lead_story_text_div">
                      <h3 className="female_lead_heading">More Romance</h3>
                      <img src={storyarrow} className="img-fluid" />
                    </div>
                    <div className="lead_story_divider"></div>
                    <p className="story_detail_content_two">
                      #Vampire #Warewolf #rebirth #teen #LGBT+ #Billionaire
                      #Badboy #mafia #Sweetlove #Revenge
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer custome_form_modal_footer">
              <button
                onClick={() => {
                  setModalShowsecound(false);
                  setModalShowfirst(true);
                }}
                class="second_modal_btn"
                // data-bs-target="#exampleModalToggle"
                // data-bs-toggle="modal"
              >
                <i class="fa-solid fa-caret-left next_form_arrow"></i> Previous{" "}
              </button>
              <button
                onClick={() => {
                  setModalShowsecound(false);
                  setModalShowthired(true);
                }}
                class="second_modal_btn    second_modal_btn"
                // data-bs-target="#exampleModalToggle3"
                // data-bs-toggle="modal"
              >
                Next <i class="fa-solid fa-caret-right next_form_arrow"></i>
              </button>
            </div>
          </div>
        </Modal>

        <Modal
          show={modalShowthired}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <div className="  form_bg_three">
            <div class="modal-header custom_form_header">
              <h1 class="modal-title_form " id="exampleModalToggleLabel">
                tailor to your needs
              </h1>
              <button
                onClick={() => setModalShowthired(false)}
                type="button"
                class="form_btn_close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                Skip
              </button>
            </div>
            <div class="modal-body">
              <div className="modal_form_divider"></div>
              <p className="form_modal_para">
                What type Of Book is Your Favorite
              </p>

              <div className="row modal_forms_rows_spacing">
                <div className="col-md-12">
                  <div className="web_stories_bg">
                    <h3 className="web_novel_heading">Web Novel</h3>
                    <i class="fa-solid fa-caret-right web_novel_arrow_img"></i>
                    <div className="web_story_form_divider"></div>
                    <p className="web_novel_para">
                      Please Choose Your Prefrerence
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="web_stories_bg_two">
                    <h3 className="web_novel_heading">Light Novel</h3>
                    <i class="fa-solid fa-caret-right web_novel_arrow_img"></i>
                    <div className="web_story_form_divider"></div>
                    <p className="web_novel_para">
                      Please Choose Your Prefrerence
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="web_stories_bg_three">
                    <h3 className="web_novel_heading">Manga</h3>
                    <i class="fa-solid fa-caret-right web_novel_arrow_img"></i>
                    <div className="web_story_form_divider"></div>
                    <p className="web_novel_para">
                      Please Choose Your Prefrerence
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer custome_form_modal_footer_two">
              <button
                onClick={() => {
                  setModalShowthired(false);
                  setModalShowsecound(true);
                }}
                class="second_modal_btn"
                // data-bs-target="#exampleModalToggle2"
                // data-bs-toggle="modal"
              >
                <i class="fa-solid fa-caret-left next_form_arrow"></i> Previous{" "}
              </button>
              <button
                onClick={() => {
                  setModalShowthired(false);
                  setModalShowfourth(true);
                }}
                class="second_modal_btn"
                // data-bs-target="#exampleModalToggle4"
                // data-bs-toggle="modal"
              >
                Next <i class="fa-solid fa-caret-right next_form_arrow"></i>
              </button>
            </div>
          </div>
        </Modal>

        <Modal
          show={modalShowfourth}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <div className="  form_bg_four">
            <div class="modal-header custom_form_header">
              <h1 class="modal-title_form " id="exampleModalToggleLabel">
                tailor to your needs
              </h1>
              <button
                onClick={() => setModalShowfourth(false)}
                type="button"
                class="form_btn_close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                Skip
              </button>
            </div>
            <div class="modal-body">
              <div className="modal_form_divider"></div>
              <p className="form_modal_para">
                What type Of Book is Your Favorite
              </p>

              <div className="row modal_forms_rows_spacing">
                <div className="col-md-12">
                  <div className="modal_form_book_selection_bg">
                    <h3 className="modal_form_book_selection">
                      what are your three favorite genres
                    </h3>
                    <i class="fa-solid fa-caret-right form_book_selection_arrow_img"></i>
                    <div className="form_book_selection_divider"></div>
                    <p className="modal_form_book_selection_para">
                      please select Atleast Three
                    </p>
                  </div>
                </div>
              </div>

              <div className="row modal_forms_rows_spacing">
                <div className="col-md-12">
                  <div className="book_category_div">
                    <button className="book_category_btns">Action</button>
                    <button className="book_category_btns">Adventure</button>
                    <button className="book_category_btns">Comedy</button>
                    <button className="book_category_btns">Drama</button>
                  </div>
                  <div className="book_category_div modal_forms_rows_spacing">
                    <button className="book_category_btns">Fantasy</button>
                    <button className="book_category_btns">Horror</button>
                    <button className="book_category_btns">Mystery</button>
                    <button className="book_category_btns">Romance</button>
                  </div>
                  <div className="book_category_div modal_forms_rows_spacing">
                    <button className="book_category_btns">Science</button>
                    <button className="book_category_btns">Fiction</button>
                    <button className="book_category_btns">Thriller</button>
                    <button className="book_category_btns">Western</button>
                  </div>
                  <div className="book_category_div modal_forms_rows_spacing">
                    <button className="book_category_btns">Historical</button>
                    <button className="book_category_btns">
                      Slice Of Life
                    </button>
                    <button className="book_category_btns">Wuxia</button>
                    <button className="book_category_btns">Documentary</button>
                  </div>
                  <div className="book_category_div modal_forms_rows_spacing">
                    <button className="book_category_btns">18+</button>
                  </div>
                </div>
              </div>
              <div className="row modal_forms_rows_spacing">
                <div className="col-md-12">
                  <p className="higlighted_text">
                    To Select, please Click on the genre until it is highlighted
                  </p>
                </div>
              </div>
            </div>
            <div class="modal-footer custome_form_modal_footer_two">
              <button
                onClick={() => {
                  setModalShowfourth(false);
                  setModalShowthired(true);
                }}
                class="second_modal_btn"
                // data-bs-target="#exampleModalToggle3"
                // data-bs-toggle="modal"
              >
                <i class="fa-solid fa-caret-left next_form_arrow"></i> Previous{" "}
              </button>
              <button
                onClick={() => {
                  setModalShowfourth(false);
                  setModalShowfifth(true);
                }}
                class="second_modal_btn"
                // data-bs-target="#exampleModalToggle5"
                // data-bs-toggle="modal"
              >
                Next <i class="fa-solid fa-caret-right next_form_arrow"></i>
              </button>
            </div>
          </div>
        </Modal>

        <Modal
          show={modalShowfifth}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <div className="  form_bg_five">
            {/* <Modal.Header closeButton>
              <Modal.Title
                className="modal-title_form"
                id="contained-modal-title-vcenter"
              >
                Modal heading
              </Modal.Title>
            </Modal.Header> */}
            <div class="modal-header custom_form_header">
              <h1 class="modal-title_form " id="exampleModalToggleLabel">
                tailor to your needs
              </h1>
              <button
                onClick={() => setModalShowfifth(false)}
                type="button"
                class="form_btn_close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                Skip
              </button>
            </div>
            <div class="modal-body">
              <div className="modal_form_divider"></div>
              <p className="form_modal_para">
                select three tag best describe your favorite Books
              </p>

              <div className="row modal_forms_rows_spacing favorite_tag_height">
                <div className="col-md-4">
                  <p className="form_book_tag_list">Ability Steal</p>
                  <p className="form_book_tag_list">acting Adventure</p>
                  <p className="form_book_tag_list">alchemy</p>
                  <p className="form_book_tag_list">aliens</p>
                  <p className="form_book_tag_list">alternate World</p>
                  <p className="form_book_tag_list">Ability Steal</p>
                  <p className="form_book_tag_list">acting Adventure</p>
                  <p className="form_book_tag_list">alchemy</p>
                  <p className="form_book_tag_list">aliens</p>
                  <p className="form_book_tag_list">alternate World</p>
                </div>
                <div className="col-md-4">
                  <p className="form_book_tag_list">apathetic protagonist</p>
                  <p className="form_book_tag_list">Army Building</p>
                  <p className="form_book_tag_list">blind protagonist</p>
                  <p className="form_book_tag_list">exorcism</p>
                  <p className="form_book_tag_list">braimaashing</p>
                  <p className="form_book_tag_list">apathetic protagonist</p>
                  <p className="form_book_tag_list">Army Building</p>
                  <p className="form_book_tag_list">blind protagonist</p>
                  <p className="form_book_tag_list">exorcism</p>
                  <p className="form_book_tag_list">braimaashing</p>
                </div>
                <div className="col-md-4">
                  <p className="form_book_tag_list">caring protagonist</p>
                  <p className="form_book_tag_list">carefree protagonist</p>
                  <p className="form_book_tag_list">captious protagonist</p>
                  <p className="form_book_tag_list">cold protagonist</p>
                  <p className="form_book_tag_list">cultivation</p>
                  <p className="form_book_tag_list">caring protagonist</p>
                  <p className="form_book_tag_list">carefree protagonist</p>
                  <p className="form_book_tag_list">captious protagonist</p>
                  <p className="form_book_tag_list">cold protagonist</p>
                  <p className="form_book_tag_list">cultivation</p>
                </div>
              </div>

              <div className="row modal_forms_rows_spacing">
                <div className="col-md-12">
                  <div className="tag_input_div">
                    <p className="form_tag_heading">Tag:</p>
                    <input
                      type="text"
                      id="fname"
                      name="fname"
                      class="tag_input"
                    />
                  </div>
                </div>
              </div>
              <div className="row modal_forms_rows_spacing">
                <div className="col-md-12">
                  <div className="tag_input_div">
                    <p className="form_tag_heading">Tag:</p>
                    <input
                      type="text"
                      id="fname"
                      name="fname"
                      class="tag_input"
                    />
                  </div>
                </div>
              </div>
              <div className="row modal_forms_rows_spacing">
                <div className="col-md-12">
                  <div className="tag_input_div">
                    <p className="form_tag_heading">Tag:</p>
                    <input
                      type="text"
                      id="fname"
                      name="fname"
                      class="tag_input"
                    />
                  </div>
                </div>
              </div>
              <div className="row modal_forms_rows_spacing">
                <div className="col-md-12">
                  <p className="higlighted_text">
                    Please Drag and drop the tag into each box
                  </p>
                </div>
              </div>
            </div>

            <div class="modal-footer custome_form_modal_footer_two">
              <button
                onClick={() => {
                  setModalShowfifth(false);
                  setModalShowfourth(true);
                }}
                class="second_modal_btn"
                // data-bs-target="#exampleModalToggle4"
                // data-bs-toggle="modal"
              >
                <i class="fa-solid fa-caret-left next_form_arrow"></i> Previous{" "}
              </button>
              {/* <button class="second_modal_btn" data-bs-target="#exampleModalToggle5" data-bs-toggle="modal">Next <i class="fa-solid fa-caret-right next_form_arrow"></i></button> */}
              {/* <button class="second_modal_btn">Complete </button> */}
              {/* <input class="complete_modal_btn" type="submit" value="Complete" /> */}

              <button
                onClick={() => {
                  handleClick();
                }}
                className="complete_modal_btn"
              >
                {" "}
                Complete
                {showGif ? "" : ""}
              </button>
              {showGif && (
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                  }}
                >
                  <img
                    src={completeform}
                    alt="Funny GIF"
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </div>
              )}
            </div>
            {/* <Modal.Footer>
              <Button onClick={() => setModalShow(false)}>Skip</Button>
            </Modal.Footer> */}
          </div>
        </Modal>

        {/* Footer */}
      </UserLayout>
    </>
  );
};
