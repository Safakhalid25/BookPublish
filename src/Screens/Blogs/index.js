import { React, useState, useEffect } from "react";
import "./style.css";
import { UserLayout } from "../../Components/Layout/UserLayout";
import CustomButton from "../../Components/CustomButton";
import board1 from "../../Assets/images/board1.png";
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
import blogImg02 from "../../Assets/images/blogImg02.png";
import blogImg01 from "../../Assets/images/blogImg01.png";
import blogImg03 from "../../Assets/images/blogImg03.png";
import blogImg04 from "../../Assets/images/blogImg04.png";
import blogImg05 from "../../Assets/images/blogImg05.png";
import blogImg06 from "../../Assets/images/blogImg06.png";
import blogImg07 from "../../Assets/images/blogImg07.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faSearch, faStar } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aos from "aos";
import "aos/dist/aos.css";
export const Blogs = () => {
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
                <h1 className="typewriter"> Blogs </h1>
              </div>
            </div>
          </div>
        </section>

        <section className="blogs_page_bg">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-lg-4">
                <div className="main_blog_card">
                  <div className="blog_card_img">
                    <img src={blogImg01} alt="blog" className="img-fluid"></img>
                  </div>

                  <div className="blog_card_content">
                    <p className="blog_card_title">Lorem Ipsum Is Dummy</p>

                    <p className="blog_card_para">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry Lorem Ipsum has been the industrys
                      standard dummy text ever since the when an unknown printer
                      took Lorem Ipsum is simply
                    </p>

                    <div>
                      <CustomButton
                        type="button"
                        className="blog_actionBtn"
                        text="Read More"
                        // onClick={() => navigate("/about")}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xs-12 col-sm-6 col-lg-4">
                <div className="main_blog_card">
                  <div className="blog_card_img">
                    <img src={blogImg02} alt="blog" className="img-fluid"></img>
                  </div>

                  <div className="blog_card_content">
                    <p className="blog_card_title">Lorem Ipsum Is Dummy</p>

                    <p className="blog_card_para">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry Lorem Ipsum has been the industrys
                      standard dummy text ever since the when an unknown printer
                      took Lorem Ipsum is simply
                    </p>

                    <div>
                      <CustomButton
                        type="button"
                        className="blog_actionBtn"
                        text="Read More"
                        // onClick={() => navigate("/about")}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xs-12 col-sm-6 col-lg-4">
                <div className="main_blog_card">
                  <div className="blog_card_img">
                    <img src={blogImg03} alt="blog" className="img-fluid"></img>
                  </div>

                  <div className="blog_card_content">
                    <p className="blog_card_title">Lorem Ipsum Is Dummy</p>

                    <p className="blog_card_para">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry Lorem Ipsum has been the industrys
                      standard dummy text ever since the when an unknown printer
                      took Lorem Ipsum is simply
                    </p>

                    <div>
                      <CustomButton
                        type="button"
                        className="blog_actionBtn"
                        text="Read More"
                        // onClick={() => navigate("/about")}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xs-12 col-sm-6 col-lg-4">
                <div className="main_blog_card">
                  <div className="blog_card_img">
                    <img src={blogImg04} alt="blog" className="img-fluid"></img>
                  </div>

                  <div className="blog_card_content">
                    <p className="blog_card_title">Lorem Ipsum Is Dummy</p>

                    <p className="blog_card_para">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry Lorem Ipsum has been the industrys
                      standard dummy text ever since the when an unknown printer
                      took Lorem Ipsum is simply
                    </p>

                    <div>
                      <CustomButton
                        type="button"
                        className="blog_actionBtn"
                        text="Read More"
                        // onClick={() => navigate("/about")}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xs-12 col-sm-6 col-lg-4">
                <div className="main_blog_card">
                  <div className="blog_card_img">
                    <img src={blogImg05} alt="blog" className="img-fluid"></img>
                  </div>

                  <div className="blog_card_content">
                    <p className="blog_card_title">Lorem Ipsum Is Dummy</p>

                    <p className="blog_card_para">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry Lorem Ipsum has been the industrys
                      standard dummy text ever since the when an unknown printer
                      took Lorem Ipsum is simply
                    </p>

                    <div>
                      <CustomButton
                        type="button"
                        className="blog_actionBtn"
                        text="Read More"
                        // onClick={() => navigate("/about")}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xs-12 col-sm-6 col-lg-4">
                <div className="main_blog_card">
                  <div className="blog_card_img">
                    <img src={blogImg06} alt="blog" className="img-fluid"></img>
                  </div>

                  <div className="blog_card_content">
                    <p className="blog_card_title">Lorem Ipsum Is Dummy</p>

                    <p className="blog_card_para">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry Lorem Ipsum has been the industrys
                      standard dummy text ever since the when an unknown printer
                      took Lorem Ipsum is simply
                    </p>

                    <div>
                      <CustomButton
                        type="button"
                        className="blog_actionBtn"
                        text="Read More"
                        // onClick={() => navigate("/about")}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xs-12 col-sm-6 col-lg-4">
                <div className="main_blog_card">
                  <div className="blog_card_img">
                    <img src={blogImg07} alt="blog" className="img-fluid"></img>
                  </div>

                  <div className="blog_card_content">
                    <p className="blog_card_title">Lorem Ipsum Is Dummy</p>

                    <p className="blog_card_para">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry Lorem Ipsum has been the industrys
                      standard dummy text ever since the when an unknown printer
                      took Lorem Ipsum is simply
                    </p>

                    <div>
                      <CustomButton
                        type="button"
                        className="blog_actionBtn"
                        text="Read More"
                        // onClick={() => navigate("/about")}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xs-12 col-sm-6 col-lg-4">
                <div className="main_blog_card">
                  <div className="blog_card_img">
                    <img src={blogImg03} alt="blog" className="img-fluid"></img>
                  </div>

                  <div className="blog_card_content">
                    <p className="blog_card_title">Lorem Ipsum Is Dummy</p>

                    <p className="blog_card_para">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry Lorem Ipsum has been the industrys
                      standard dummy text ever since the when an unknown printer
                      took Lorem Ipsum is simply
                    </p>

                    <div>
                      <CustomButton
                        type="button"
                        className="blog_actionBtn"
                        text="Read More"
                        // onClick={() => navigate("/about")}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xs-12 col-sm-6 col-lg-4">
                <div className="main_blog_card">
                  <div className="blog_card_img">
                    <img src={blogImg02} alt="blog" className="img-fluid"></img>
                  </div>

                  <div className="blog_card_content">
                    <p className="blog_card_title">Lorem Ipsum Is Dummy</p>

                    <p className="blog_card_para">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry Lorem Ipsum has been the industrys
                      standard dummy text ever since the when an unknown printer
                      took Lorem Ipsum is simply
                    </p>

                    <div>
                      <CustomButton
                        type="button"
                        className="blog_actionBtn"
                        text="Read More"
                        // onClick={() => navigate("/about")}
                      />
                    </div>
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
