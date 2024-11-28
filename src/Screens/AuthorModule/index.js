import { React, useState, useEffect } from "react";
import "./author.css";
import { UserLayout } from "../../Components/Layout/UserLayout";
import {
  AuthorList1,
  AuthorList2,
  AuthorListAfterAnime,
  AuthorListBgAnime,
  Logo,
  User_icon_plus,
  User_icon_white,
} from "../../Assets/images";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faSearch, faStar } from "@fortawesome/free-solid-svg-icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aos from "aos";
import "aos/dist/aos.css";
export const AuthorModule = () => {
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
    <>
      {/* Header */}
   
      <UserLayout>
      {/* Hero Section */}
      <sectionc class="inner__hero-sec jost-font">
        <div className="container">
          <div className="row">
            <div className="herro__title">
              <h1 className="typewriter">Authors</h1>
            </div>
          </div>
        </div>
      </sectionc>

      <section className="author__of-month jost-font">
        <section className="authors__carousel">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="authors__carousel-title">
                  <h2>AUTHORS OF THE MONTH</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2">
                <div className="carousel-image">
                  <img src={AuthorList1} />
                </div>
              </div>
              <div className="col-md-2">
                <div className="carousel-image">
                  <img src={AuthorList1} />
                </div>
              </div>
              <div className="col-md-2">
                <div className="carousel-image">
                  <img src={AuthorList1} />
                </div>
              </div>
              <div className="col-md-2">
                <div className="carousel-image">
                  <img src={AuthorList1} />
                </div>
              </div>
              <div className="col-md-2">
                <div className="carousel-image">
                  <img src={AuthorList1} />
                </div>
              </div>
              <div className="col-md-2">
                <div className="carousel-image">
                  <img src={AuthorList1} />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="authors__list">
          <div className="author__list-cartoon">
            <img src={AuthorListAfterAnime} />
          </div>
          {/* <div className="author__list-bgCartoon">
            <img src={AuthorListBgAnime} />
          </div> */}
          <div className="container relativePart">
            <div className="row aligns-items-center author__list-row">
              <div className="col-lg-3">
                <div className="author__img">
                  <img src={AuthorList1} />
                </div>
              </div>
              <div className="col-lg-9">
                <div className="author__list-content">
                  <div className="author__list-title">
                    <h2>John Doe</h2>
                    <hr />
                    <hr />
                  </div>
                  <div className="author__list-body">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially
                    </p>
                  </div>
                  <div className="author__list-footer">
                    <div className="row">
                      <div className="col-md-7">
                        <div className="author__list-genre">
                          <h3 className="genre__title">Books Genere:</h3>
                          <div className="genere__tags">
                            <Link to="/" className="genere__tag">
                              Thrill
                            </Link>
                            <Link to="/" className="genere__tag">
                              Romance
                            </Link>
                            <Link
                              to="/"
                              className="genere__tag genere__tag-active"
                            >
                              Others
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-5">
                        <div className="author__list-rating">
                          <h3 className="rating__title">Ratings:</h3>
                          <div className="rating__div">
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                          </div>
                          <button className="rating__btn">Add Review</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row aligns-items-center author__list-row">
              <div className="col-lg-3">
                <div className="author__img">
                  <img src={AuthorList2} />
                </div>
              </div>
              <div className="col-lg-9">
                <div className="author__list-content">
                  <div className="author__list-title">
                    <h2>John Doe</h2>
                    <hr />
                    <hr />
                  </div>
                  <div className="author__list-body">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially
                    </p>
                  </div>
                  <div className="author__list-footer">
                    <div className="row">
                      <div className="col-md-7">
                        <div className="author__list-genre">
                          <h3 className="genre__title">Books Genere:</h3>
                          <div className="genere__tags">
                            <Link to="/" className="genere__tag">
                              Thrill
                            </Link>
                            <Link to="/" className="genere__tag">
                              Romance
                            </Link>
                            <Link
                              to="/"
                              className="genere__tag genere__tag-active"
                            >
                              Others
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-5">
                        <div className="author__list-rating">
                          <h3 className="rating__title">Ratings:</h3>
                          <div className="rating__div">
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                          </div>
                          <button className="rating__btn">Add Review</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row aligns-items-center author__list-row">
              <div className="col-lg-3">
                <div className="author__img">
                  <img src={AuthorList1} />
                </div>
              </div>
              <div className="col-lg-9">
                <div className="author__list-content">
                  <div className="author__list-title">
                    <h2>John Doe</h2>
                    <hr />
                    <hr />
                  </div>
                  <div className="author__list-body">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially
                    </p>
                  </div>
                  <div className="author__list-footer">
                    <div className="row">
                      <div className="col-md-7">
                        <div className="author__list-genre">
                          <h3 className="genre__title">Books Genere:</h3>
                          <div className="genere__tags">
                            <Link to="/" className="genere__tag">
                              Thrill
                            </Link>
                            <Link to="/" className="genere__tag">
                              Romance
                            </Link>
                            <Link
                              to="/"
                              className="genere__tag genere__tag-active"
                            >
                              Others
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-5">
                        <div className="author__list-rating">
                          <h3 className="rating__title">Ratings:</h3>
                          <div className="rating__div">
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                          </div>
                          <button className="rating__btn">Add Review</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row aligns-items-center author__list-row">
              <div className="col-lg-3">
                <div className="author__img">
                  <img src={AuthorList2} />
                </div>
              </div>
              <div className="col-lg-9">
                <div className="author__list-content">
                  <div className="author__list-title">
                    <h2>John Doe</h2>
                    <hr />
                    <hr />
                  </div>
                  <div className="author__list-body">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially
                    </p>
                  </div>
                  <div className="author__list-footer">
                    <div className="row">
                      <div className="col-md-7">
                        <div className="author__list-genre">
                          <h3 className="genre__title">Books Genere:</h3>
                          <div className="genere__tags">
                            <Link to="/" className="genere__tag">
                              Thrill
                            </Link>
                            <Link to="/" className="genere__tag">
                              Romance
                            </Link>
                            <Link
                              to="/"
                              className="genere__tag genere__tag-active"
                            >
                              Others
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-5">
                        <div className="author__list-rating">
                          <h3 className="rating__title">Ratings:</h3>
                          <div className="rating__div">
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                          </div>
                          <button className="rating__btn">Add Review</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
</UserLayout>
      {/* Footer */}
 
    </>
  );
};
