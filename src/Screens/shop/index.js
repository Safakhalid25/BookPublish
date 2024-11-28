import { React, useState, useEffect } from "react";
import "./style.css";
import { Product_Icon, HarryPotterBook } from "../../Assets/images";
import new_gift_card_img from "../../Assets/images/new_gift_card_img.png";
import particle_bg from "../../Assets/images/particle_bg.gif";
import { UserLayout } from "../../Components/Layout/UserLayout";
import mana from "../../Assets/images/mana.png";
import promoimg from "../../Assets/images/promoimg.png";
import carddd1 from "../../Assets/images/carddd1.png";
import playicon from "../../Assets/images/playicon.png";
import shoprewardmana from "../../Assets/images/shoprewardmana.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faSearch, faStar } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aos from "aos";
import "aos/dist/aos.css";
import lcimg from "../../Assets/images/51L+xXb2C7L 1.png";
export const Shop = () => {
  const [ads, setAds] = useState([]);
  const [books, setBooks] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const base_url = "https://custom.mystagingserver.site/Tim-WDLLC/public/";

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
  useEffect(() => {
    adsListing();
  }, []);

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
                <h1 className="typewriter"> Shop </h1>
              </div>
            </div>
          </div>
        </section>

        <section class="shop">
          <div class="container">
            <div class="row mx-auto">
              <div class="col-lg-4 col-sm-12">
                <div class="watchadds_shop_bg">
                  <h4 class="watchadds_shop_text">WATCH ADS</h4>
                  <p class="watchadds_shop_para">
                    Watch ads and collect rewards
                  </p>
                </div>
                <div className="daily_add_reward_div">
                  <img
                    src={playicon}
                    className="img-fluid shop_add_play_img"
                    draggable="false"
                  />
                  <div>
                    <h5 className="shop_daily_add_text">Daily AD 1</h5>
                    <p className="shop_daily_add_para">
                      Watch upto 5 ads daily to get rewards
                    </p>
                    <button className="shop_add_watchnow_btn">Watch Now</button>
                  </div>
                  <div>
                    <h5 className="shop_daily_add_text">Reward</h5>
                    <img
                      src={shoprewardmana}
                      className="img-fluid shop_reward_mana_img"
                      draggable="false"
                    />
                    <h5 className="shop_daily_add_text">1 Mana</h5>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-sm-12">
                <h1 class="head">MANA PACKS</h1>
                {/* <img class="img-fluid dragon_image" src={dragon}/> */}
              </div>
              <div class="col-lg-4 col-sm-12">
                <div class="watchadds_shop_bg">
                  <h4 class="watchadds_shop_text">WATCH ADS</h4>
                  <p class="watchadds_shop_para">
                    Watch ads and collect rewards
                  </p>
                </div>
                <div className="daily_add_reward_div">
                  <img
                    src={playicon}
                    className="img-fluid shop_add_play_img"
                    draggable="false"
                  />
                  <div>
                    <h5 className="shop_daily_add_text">Daily AD 1</h5>
                    <p className="shop_daily_add_para">
                      Watch upto 5 ads daily to get rewards
                    </p>
                    <button className="shop_add_watchnow_btn">Watch Now</button>
                  </div>
                  <div>
                    <h5 className="shop_daily_add_text">Reward</h5>
                    <img
                      src={shoprewardmana}
                      className="img-fluid shop_reward_mana_img"
                      draggable="false"
                    />
                    <h5 className="shop_daily_add_text">1 Mana</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="second">
          <div class="container">
            <div class="cardrow">
              <div class="row">
                <div class="col-lg-3 col-sm-6 ">
                  <div class="box">
                    <img src={particle_bg} className="bg_particle_img" />
                    <img class="img-fluid mana_image" src={mana} />
                  </div>
                  <div class="rect">
                    <h3 class="recthe">250 MANA PACK</h3>
                    <p class="para">
                      {" "}
                      $19.99 <span class="price"> $19.99 </span>
                    </p>
                    <div class="cartbtn">
                      <button class="cart">
                        {" "}
                        Add to cart{" "}
                        <i class="fa-solid fa-cart-shopping carticon"></i>
                      </button>
                    </div>
                  </div>
                </div>

                <div class="col-lg-3 col-sm-6 ">
                  <div class="box">
                    <img src={particle_bg} className="bg_particle_img" />
                    <img class="img-fluid mana_image" src={mana} />
                  </div>
                  <div class="rect">
                    <h3 class="recthe">500 MANA PACK</h3>
                    <p class="para">
                      {" "}
                      $19.99 <span class="price"> $19.99 </span>
                    </p>
                    <div class="cartbtn">
                      <button class="cart">
                        {" "}
                        Add to cart{" "}
                        <i class="fa-solid fa-cart-shopping carticon"></i>
                      </button>
                    </div>
                  </div>
                </div>

                <div class="col-lg-3 col-sm-6 ">
                  <div class="box">
                    <img src={particle_bg} className="bg_particle_img" />
                    <img class="img-fluid mana_image" src={mana} />
                  </div>
                  <div class="rect">
                    <h3 class="recthe">500 MANA PACK</h3>
                    <p class="para">
                      {" "}
                      $19.99 <span class="price"> $19.99 </span>
                    </p>
                    <div class="cartbtn">
                      <button class="cart">
                        {" "}
                        Add to cart{" "}
                        <i class="fa-solid fa-cart-shopping carticon"></i>
                      </button>
                    </div>
                  </div>
                </div>

                <div class="col-lg-3 col-sm-6 ">
                  <div class="box">
                    <img src={particle_bg} className="bg_particle_img" />
                    <img class="img-fluid mana_image" src={mana} />
                  </div>
                  <div class="rect">
                    <h3 class="recthe">500 MANA PACK</h3>
                    <p class="para">
                      {" "}
                      $19.99 <span class="price"> $19.99 </span>
                    </p>
                    <div class="cartbtn">
                      <button class="cart">
                        {" "}
                        Add to cart{" "}
                        <i class="fa-solid fa-cart-shopping carticon"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section className="harry-potter mt-4">
            <div className="container">
              <div className="row">
                <div className="col-lg-9">
                  <h5 className="clearnce_sale">LIMITED TIME CLEARANCE SALE</h5>
                  <div className="harry-potter-bg">
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
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry Lorem Ipsum has been the
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
                                  <img src={Product_Icon} />
                                </div>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 shop_harrypotter_books-col">
                  <div className="harrypotter_book">
                    {ads &&
                      ads.map((item, index) => (
                        <div class="row  harrypotter_book mb-4 ">
                          <div className="col-4">
                            <img src={base_url + item?.ad_image} alt="..." />
                          </div>
                          <div className="col-8">
                            <h3 className="harrypotter_books-title jost-font">
                              {item?.ad_title}
                            </h3>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>

        <section class="subscription">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <h1 class="subs">SUBSCRIPTIONS</h1>
              </div>
            </div>
          </div>
        </section>

        <section class="price">
          <div class="container">
            <div class="row">
              <div class="col-md-4">
                <div class="eco">
                  <p class="ecohead">Economic</p>
                  <p class="ecohead1">$15/Month</p>
                  <button class="cart">
                    {" "}
                    Subscribe <i class="fa-solid fa-cart-shopping carticon"></i>
                  </button>
                  <hr class="hori"></hr>
                  <p class="plan">Economic plan for all users.</p>
                  <div class="check">
                    {/* <img class="img-fluid chk" src={chechmark} /> */}
                    <div class="checkbox-wrapper-radio">
                      <input type="checkbox" checked />
                      <svg viewBox="0 0 35.6 35.6">
                        <circle
                          class="background"
                          cx="17.8"
                          cy="17.8"
                          r="17.8"
                        ></circle>
                        <circle
                          class="stroke"
                          cx="17.8"
                          cy="17.8"
                          r="14.37"
                        ></circle>
                        <polyline
                          class="check"
                          points="11.78 18.12 15.55 22.23 25.17 12.87"
                        ></polyline>
                      </svg>
                    </div>

                    <p class="point">Lorem Ipsum is simply dummy text</p>
                  </div>
                  <div class="check">
                    <div class="checkbox-wrapper-radio">
                      <input type="checkbox" checked />
                      <svg viewBox="0 0 35.6 35.6">
                        <circle
                          class="background"
                          cx="17.8"
                          cy="17.8"
                          r="17.8"
                        ></circle>
                        <circle
                          class="stroke"
                          cx="17.8"
                          cy="17.8"
                          r="14.37"
                        ></circle>
                        <polyline
                          class="check"
                          points="11.78 18.12 15.55 22.23 25.17 12.87"
                        ></polyline>
                      </svg>
                    </div>
                    <p class="point">Lorem Ipsum is simply dummy text</p>
                  </div>
                  <div class="check">
                    <div class="checkbox-wrapper-radio">
                      <input type="checkbox" checked />
                      <svg viewBox="0 0 35.6 35.6">
                        <circle
                          class="background"
                          cx="17.8"
                          cy="17.8"
                          r="17.8"
                        ></circle>
                        <circle
                          class="stroke"
                          cx="17.8"
                          cy="17.8"
                          r="14.37"
                        ></circle>
                        <polyline
                          class="check"
                          points="11.78 18.12 15.55 22.23 25.17 12.87"
                        ></polyline>
                      </svg>
                    </div>
                    <p class="point">Lorem Ipsum is simply dummy text</p>
                  </div>
                  <div class="check">
                    <div class="checkbox-wrapper-radio">
                      <input type="checkbox" checked />
                      <svg viewBox="0 0 35.6 35.6">
                        <circle
                          class="background"
                          cx="17.8"
                          cy="17.8"
                          r="17.8"
                        ></circle>
                        <circle
                          class="stroke"
                          cx="17.8"
                          cy="17.8"
                          r="14.37"
                        ></circle>
                        <polyline
                          class="check"
                          points="11.78 18.12 15.55 22.23 25.17 12.87"
                        ></polyline>
                      </svg>
                    </div>
                    <p class="point">Lorem Ipsum is simply dummy text</p>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div
                  class="basic
              "
                >
                  <p class="ecohead">Basic</p>
                  <p class="ecohead1">$35/Month</p>
                  <button class="cart">
                    {" "}
                    Subscribe <i class="fa-solid fa-cart-shopping carticon"></i>
                  </button>
                  <hr class="hori"></hr>
                  <p class="plan">Economic plan for all users.</p>
                  <div class="check">
                    <div class="checkbox-wrapper-radio">
                      <input type="checkbox" checked />
                      <svg viewBox="0 0 35.6 35.6">
                        <circle
                          class="background"
                          cx="17.8"
                          cy="17.8"
                          r="17.8"
                        ></circle>
                        <circle
                          class="stroke"
                          cx="17.8"
                          cy="17.8"
                          r="14.37"
                        ></circle>
                        <polyline
                          class="check"
                          points="11.78 18.12 15.55 22.23 25.17 12.87"
                        ></polyline>
                      </svg>
                    </div>
                    <p class="point">Lorem Ipsum is simply dummy text</p>
                  </div>
                  <div class="check">
                    <div class="checkbox-wrapper-radio">
                      <input type="checkbox" checked />
                      <svg viewBox="0 0 35.6 35.6">
                        <circle
                          class="background"
                          cx="17.8"
                          cy="17.8"
                          r="17.8"
                        ></circle>
                        <circle
                          class="stroke"
                          cx="17.8"
                          cy="17.8"
                          r="14.37"
                        ></circle>
                        <polyline
                          class="check"
                          points="11.78 18.12 15.55 22.23 25.17 12.87"
                        ></polyline>
                      </svg>
                    </div>
                    <p class="point">Lorem Ipsum is simply dummy text</p>
                  </div>
                  <div class="check">
                    <div class="checkbox-wrapper-radio">
                      <input type="checkbox" checked />
                      <svg viewBox="0 0 35.6 35.6">
                        <circle
                          class="background"
                          cx="17.8"
                          cy="17.8"
                          r="17.8"
                        ></circle>
                        <circle
                          class="stroke"
                          cx="17.8"
                          cy="17.8"
                          r="14.37"
                        ></circle>
                        <polyline
                          class="check"
                          points="11.78 18.12 15.55 22.23 25.17 12.87"
                        ></polyline>
                      </svg>
                    </div>
                    <p class="point">Lorem Ipsum is simply dummy text</p>
                  </div>
                  <div class="check">
                    <div class="checkbox-wrapper-radio">
                      <input type="checkbox" checked />
                      <svg viewBox="0 0 35.6 35.6">
                        <circle
                          class="background"
                          cx="17.8"
                          cy="17.8"
                          r="17.8"
                        ></circle>
                        <circle
                          class="stroke"
                          cx="17.8"
                          cy="17.8"
                          r="14.37"
                        ></circle>
                        <polyline
                          class="check"
                          points="11.78 18.12 15.55 22.23 25.17 12.87"
                        ></polyline>
                      </svg>
                    </div>
                    <p class="point">Lorem Ipsum is simply dummy text</p>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="pre">
                  <p class="ecohead">Premium</p>
                  <p class="ecohead1">$55/Month</p>
                  <button class="cart">
                    {" "}
                    Subscribe <i class="fa-solid fa-cart-shopping carticon"></i>
                  </button>
                  <hr class="hori"></hr>
                  <p class="plan">Economic plan for all users.</p>
                  <div class="check">
                    <div class="checkbox-wrapper-radio">
                      <input type="checkbox" checked />
                      <svg viewBox="0 0 35.6 35.6">
                        <circle
                          class="background"
                          cx="17.8"
                          cy="17.8"
                          r="17.8"
                        ></circle>
                        <circle
                          class="stroke"
                          cx="17.8"
                          cy="17.8"
                          r="14.37"
                        ></circle>
                        <polyline
                          class="check"
                          points="11.78 18.12 15.55 22.23 25.17 12.87"
                        ></polyline>
                      </svg>
                    </div>
                    <p class="point">Lorem Ipsum is simply dummy text</p>
                  </div>
                  <div class="check">
                    <div class="checkbox-wrapper-radio">
                      <input type="checkbox" checked />
                      <svg viewBox="0 0 35.6 35.6">
                        <circle
                          class="background"
                          cx="17.8"
                          cy="17.8"
                          r="17.8"
                        ></circle>
                        <circle
                          class="stroke"
                          cx="17.8"
                          cy="17.8"
                          r="14.37"
                        ></circle>
                        <polyline
                          class="check"
                          points="11.78 18.12 15.55 22.23 25.17 12.87"
                        ></polyline>
                      </svg>
                    </div>
                    <p class="point">Lorem Ipsum is simply dummy text</p>
                  </div>
                  <div class="check">
                    <div class="checkbox-wrapper-radio">
                      <input type="checkbox" checked />
                      <svg viewBox="0 0 35.6 35.6">
                        <circle
                          class="background"
                          cx="17.8"
                          cy="17.8"
                          r="17.8"
                        ></circle>
                        <circle
                          class="stroke"
                          cx="17.8"
                          cy="17.8"
                          r="14.37"
                        ></circle>
                        <polyline
                          class="check"
                          points="11.78 18.12 15.55 22.23 25.17 12.87"
                        ></polyline>
                      </svg>
                    </div>
                    <p class="point">Lorem Ipsum is simply dummy text</p>
                  </div>
                  <div class="check">
                    <div class="checkbox-wrapper-radio">
                      <input type="checkbox" checked />
                      <svg viewBox="0 0 35.6 35.6">
                        <circle
                          class="background"
                          cx="17.8"
                          cy="17.8"
                          r="17.8"
                        ></circle>
                        <circle
                          class="stroke"
                          cx="17.8"
                          cy="17.8"
                          r="14.37"
                        ></circle>
                        <polyline
                          class="check"
                          points="11.78 18.12 15.55 22.23 25.17 12.87"
                        ></polyline>
                      </svg>
                    </div>
                    <p class="point">Lorem Ipsum is simply dummy text</p>
                  </div>
                  <div class="check">
                    <div class="checkbox-wrapper-radio">
                      <input type="checkbox" checked />
                      <svg viewBox="0 0 35.6 35.6">
                        <circle
                          class="background"
                          cx="17.8"
                          cy="17.8"
                          r="17.8"
                        ></circle>
                        <circle
                          class="stroke"
                          cx="17.8"
                          cy="17.8"
                          r="14.37"
                        ></circle>
                        <polyline
                          class="check"
                          points="11.78 18.12 15.55 22.23 25.17 12.87"
                        ></polyline>
                      </svg>
                    </div>
                    <p class="point">Lorem Ipsum is simply dummy text</p>
                  </div>
                  <div class="check">
                    <div class="checkbox-wrapper-radio">
                      <input type="checkbox" checked />
                      <svg viewBox="0 0 35.6 35.6">
                        <circle
                          class="background"
                          cx="17.8"
                          cy="17.8"
                          r="17.8"
                        ></circle>
                        <circle
                          class="stroke"
                          cx="17.8"
                          cy="17.8"
                          r="14.37"
                        ></circle>
                        <polyline
                          class="check"
                          points="11.78 18.12 15.55 22.23 25.17 12.87"
                        ></polyline>
                      </svg>
                    </div>
                    <p class="point">Lorem Ipsum is simply dummy text</p>
                  </div>
                  <div class="check">
                    <div class="checkbox-wrapper-radio">
                      <input type="checkbox" checked />
                      <svg viewBox="0 0 35.6 35.6">
                        <circle
                          class="background"
                          cx="17.8"
                          cy="17.8"
                          r="17.8"
                        ></circle>
                        <circle
                          class="stroke"
                          cx="17.8"
                          cy="17.8"
                          r="14.37"
                        ></circle>
                        <polyline
                          class="check"
                          points="11.78 18.12 15.55 22.23 25.17 12.87"
                        ></polyline>
                      </svg>
                    </div>
                    <p class="point">Lorem Ipsum is simply dummy text</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="discount_voucher">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="diccount_num">
                  <div className="dicount_bg">
                    <h2 className="twentyfive">25%</h2>
                  </div>
                  <h4 className="vouchers">DISCOUNT VOUCHER</h4>
                  <p className="monthly_discount">
                    This voucher is valid for only one month
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="diccount_nums">
                  <div className="dicount_bg">
                    <h2 className="twentyfive">50%</h2>
                  </div>
                  <h4 className="vouchers">DISCOUNT VOUCHER</h4>
                  <p className="monthly_discount">
                    This voucher is valid for only one month
                  </p>
                </div>
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-md-6">
                <div className="diccount_num">
                  <div className="dicount_bg">
                    <h2 className="twentyfive">75%</h2>
                  </div>
                  <h4 className="vouchers">DISCOUNT VOUCHER</h4>
                  <p className="monthly_discount">
                    This voucher is valid for only one month
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="diccount_nums">
                  <div className="dicount_bg">
                    <h2 className="twentyfive">100%</h2>
                  </div>
                  <h4 className="vouchers">DISCOUNT VOUCHER</h4>
                  <p className="monthly_discount">
                    This voucher is valid for only one month
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="new_gifts_section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="new_gift_card_head">GIFT CARDS</h1>
              </div>
            </div>

            <div className="new_gift_cards_box">
              <div className="row justify-content-center">
                <div className="col-lg-2 col-md-4">
                  <div className="gift_coins_one">
                    <img src={particle_bg} className="new_shop_particl_bg" />
                    <img
                      className="img-fluid new_gift_mana_img"
                      src={new_gift_card_img}
                    />
                  </div>
                </div>
                <div className="col-lg-2 col-md-4">
                  <div className="gift_coins_one">
                    <img src={particle_bg} className="new_shop_particl_bg" />
                    <img
                      className="img-fluid new_gift_mana_img"
                      src={new_gift_card_img}
                    />
                  </div>
                </div>
                <div className="col-lg-2 col-md-4">
                  <div className="gift_coins_one">
                    <img src={particle_bg} className="new_shop_particl_bg" />
                    <img
                      className="img-fluid new_gift_mana_img"
                      src={new_gift_card_img}
                    />
                  </div>
                </div>
                <div className="col-lg-2 col-md-4">
                  <div className="gift_coins_one">
                    <img src={particle_bg} className="new_shop_particl_bg" />
                    <img
                      className="img-fluid new_gift_mana_img"
                      src={new_gift_card_img}
                    />
                  </div>
                </div>
                <div className="col-lg-2 col-md-4">
                  <div className="gift_coins_one">
                    <img src={particle_bg} className="new_shop_particl_bg" />
                    <img
                      className="img-fluid new_gift_mana_img"
                      src={new_gift_card_img}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="new_promo_section promo_img_bg">
          <div className="container">
            <img class="img-fluid promo_image" src={promoimg} />
            <div className="row">
              <div className="col-md-12">
                <h1 class="promos">PROMO CODES</h1>
                <div className="row">
                  <div class="col-md-8 mx-auto">
                    <div class="promo_code">
                      <form>
                        <div className="promo_codes_fields">
                          <input
                            class="code_form"
                            type="text"
                            placeholder="Enter Promo Code"
                            name="Name"
                          />
                          <button class="sub_btn"> Submit </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

 

        <section class="shop_two ">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <h1 class="gift">AVAILABLE PROMOTIONS</h1>
              </div>
            </div>
          </div>
        </section>
        <section className="promo_card_box">
          <div className="container">
            <div className="promo_cards_boxes">
              <div className="row">
                <div className="col-md-4">
                  <div className="promo_pin">
                    <h3 className="promo_heading">PROMO CODE</h3>
                    <p className="promo_para">
                      Get 50% oFF Voucher Using This Promo Code
                    </p>
                    <input
                      className="promo_number"
                      type="text"
                      placeholder="EXAMPLEPROMOCODE123"
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="promo_pin">
                    <h3 className="promo_heading">PROMO CODE</h3>
                    <p className="promo_para">
                      Get 50% oFF Voucher Using This Promo Code
                    </p>
                    <input
                      className="promo_number"
                      type="text"
                      placeholder="EXAMPLEPROMOCODE123"
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="promo_pin">
                    <h3 className="promo_heading">PROMO CODE</h3>
                    <p className="promo_para">
                      Get 50% oFF Voucher Using This Promo Code
                    </p>
                    <input
                      className="promo_number"
                      type="text"
                      placeholder="EXAMPLEPROMOCODE123"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </UserLayout>
  );
};
