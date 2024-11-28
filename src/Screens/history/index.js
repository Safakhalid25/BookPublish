import { React, useState, useEffect } from "react";
import "./style.css";
import Group1000002083 from "../../Assets/images/Group1000002083.png";
import Polygon6 from "../../Assets/images/Polygon6.png";
import Form from "react-bootstrap/Form";
import medal from "../../Assets/images/Medal.png";
import cup from "../../Assets/images/cupimg.png";
import docs from "../../Assets/images/docimg.png";
import Trashcan from "../../Assets/images/Trashcan.png";
import Notification from "../../Assets/images/Notification.png";
import Vote from "../../Assets/images/Vote.png";
import { UserLayout } from "../../Components/Layout/UserLayout";
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
import book1 from "../../Assets/images/book1.png";
import book2 from "../../Assets/images/book2.png";
import book3 from "../../Assets/images/book3.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faSearch, faStar } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aos from "aos";
import "aos/dist/aos.css";
import lcimg from "../../Assets/images/51L+xXb2C7L 1.png";
export const History = () => {
  const [ads, setAds] = useState([]);
  const [books, setBooks] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const base_url = "https://custom.mystagingserver.site/Tim-WDLLC/public/";


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
                <h1 className="typewriter"> HISTORY </h1>
              </div>
            </div>
          </div>
        </section>

        <section class="cov">
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <div class="btnrww">
                  <button class="history"> Library </button>
                  <button class="libs"> History </button>           
                  <button class="hist"> Waiting List </button>
                </div>

                <div class="books">
                  <div class="row">
                    <div class="col-lg-3 col-sm-12">
                      <div class="main_history">
                        <img
                          class="img-fluid bookcover library_waiting_history_img"
                          src={lcimg} draggable="false"
                        />
                      </div>
                    </div>
                    <div class="col-lg-9 col-sm-12">
                      <div class="description">
                        <h3 class="name">Book Name Here</h3>
                        <div class="p-3 res">
                          <img class="img-fluid vote" src={Trashcan} draggable="false" />
                        </div>
                      </div>
                      <div class="main_history">
                        <button class="category">Category </button>
                        <button class="category">Category </button>
                      </div>
                      <div class="rates">
                        <span class="fa fa-star checked star"></span>
                        <span class="fa fa-star checked star "></span>
                        <span class="fa fa-star checked star "></span>
                        <span class="fa fa-star checked star "></span>
                        <span class="fa fa-star checked star "></span>
                        <p class="rating">(4.82)</p>
                      </div>
                      <p class="detail">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy
                        <span class="view"> View More </span>
                      </p>
                    </div>
                  </div>
                  <div class="lines"></div>
                  <div class="row mt-3">
                    <div class="col-lg-3">
                      <p class="nums">
                        10/ <span class="numberr">1032</span>
                      </p>
                    </div>
                    <div class="col-lg-9 ">
                      <div class="btnrww">
                        <button class="reads">
                          <span> Add To Library </span>
                          <i class="fa-solid fa-book-open iconn"></i>
                        </button>
                        <button class="reads">
                          <span> Continue Reading </span>
                          <i class="fa-solid fa-book-open iconn"></i>
                        </button>
                        <button class="reads">
                          {" "}
                          Book Deatils{" "}
                          <i class="fa-solid fa-calendar-week iconn"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="books">
                  <div class="row">
                    <div class="col-lg-3 col-sm-12">
                      <div class="main_history">
                        <img
                          class="img-fluid bookcover library_waiting_history_img"
                          src={lcimg} draggable="false"
                        />
                      </div>
                    </div>
                    <div class="col-lg-9 col-sm-12">
                      <div class="description">
                        <h3 class="name"> Book Name Here </h3>
                        <div class=" res p-3 res">
                          <img class="img-fluid vote" src={Trashcan} draggable="false" />
                        </div>
                      </div>
                      <div class="main_history">
                        <button class="category">Category </button>
                        <button class="category">Category </button>
                      </div>
                      <div class="rates">
                        <span class="fa fa-star checked star"></span>
                        <span class="fa fa-star checked star "></span>
                        <span class="fa fa-star checked star "></span>
                        <span class="fa fa-star checked star "></span>
                        <span class="fa fa-star checked star "></span>
                        <p class="rating">(4.82)</p>
                      </div>
                      <p class="detail">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy
                        <span class="view"> View More </span>
                      </p>
                    </div>
                  </div>
                  <div class="lines"></div>
                  <div class="row mt-3">
                    <div class="col-lg-3">
                      <p class="nums">
                        10/ <span class="numberr">1032</span>
                      </p>
                    </div>
                    <div class="col-lg-9 ">
                      <div class="btnrww">
                        <button class="reads">
                          <span> Add To Library </span>
                          <i class="fa-solid fa-book-open iconn"></i>
                        </button>
                        <button class="reads">
                          <span> Continue Reading </span>
                          <i class="fa-solid fa-book-open iconn"></i>
                        </button>
                        <button class="reads">
                          {" "}
                          Book Deatils{" "}
                          <i class="fa-solid fa-calendar-week iconn"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="books">
                  <div class="row">
                    <div class="col-lg-3 col-sm-12">
                      <div class="main_history">
                        <img
                          class="img-fluid bookcover library_waiting_history_img"
                          src={lcimg} draggable="false"
                        />
                      </div>
                    </div>
                    <div class="col-lg-9 col-sm-12">
                      <div class="description">
                        <h3 class="name">Book Name Here</h3>
                        <div class="p-3 res">
                          <img class="img-fluid vote" src={Trashcan} draggable="false" />
                        </div>
                      </div>
                      <div class="main_history">
                        <button class="category">Category </button>
                        <button class="category">Category </button>
                      </div>
                      <div class="rates">
                        <span class="fa fa-star checked star"></span>
                        <span class="fa fa-star checked star "></span>
                        <span class="fa fa-star checked star "></span>
                        <span class="fa fa-star checked star "></span>
                        <span class="fa fa-star checked star "></span>
                        <p class="rating">(4.82)</p>
                      </div>
                      <p class="detail">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy
                        <span class="view"> View More </span>
                      </p>
                    </div>
                  </div>
                  <div class="lines"></div>
                  <div class="row mt-3">
                    <div class="col-lg-3">
                      <p class="nums">
                        10/ <span class="numberr">1032</span>
                      </p>
                    </div>
                    <div class="col-lg-9 ">
                      <div class="btnrww">
                        <button class="reads">
                          <span> Add To Library </span>
                          <i class="fa-solid fa-book-open iconn"></i>
                        </button>
                        <button class="reads">
                          <span> Continue Reading </span>
                          <i class="fa-solid fa-book-open iconn"></i>
                        </button>
                        <button class="reads">
                          {" "}
                          Book Deatils{" "}
                          <i class="fa-solid fa-calendar-week iconn"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="books">
                  <div class="row">
                    <div class="col-lg-3 col-sm-12">
                      <div class="main_history">
                        <img
                          class="img-fluid bookcover library_waiting_history_img"
                          src={lcimg} draggable="false"
                        />
                      </div>
                    </div>
                    <div class="col-lg-9 col-sm-12">
                      <div class="description">
                        <h3 class="name">Book Name Here</h3>
                        <div class="p-3 res">
                          <img class="img-fluid vote" src={Trashcan} draggable="false" />
                        </div>
                      </div>
                      <div class="main_history">
                        <button class="category">Category </button>
                        <button class="category">Category </button>
                      </div>
                      <div class="rates">
                        <span class="fa fa-star checked star"></span>
                        <span class="fa fa-star checked star "></span>
                        <span class="fa fa-star checked star "></span>
                        <span class="fa fa-star checked star "></span>
                        <span class="fa fa-star checked star "></span>
                        <p class="rating">(4.82)</p>
                      </div>
                      <p class="detail">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy
                        <span class="view"> View More </span>
                      </p>
                    </div>
                  </div>
                  <div class="lines"></div>
                  <div class="row mt-3">
                    <div class="col-lg-3">
                      <p class="nums">
                        10/ <span class="numberr">1032</span>
                      </p>
                    </div>
                    <div class="col-lg-9">
                      <div class="btnrww">
                        <button class="reads">
                          <span> Add To Library </span>
                          <i class="fa-solid fa-book-open iconn"></i>
                        </button>
                        <button class="reads">
                          <span> Continue Reading </span>
                          <i class="fa-solid fa-book-open iconn"></i>
                        </button>
                        <button class="reads">
                          {" "}
                          Book Deatils{" "}
                          <i class="fa-solid fa-calendar-week iconn"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="books">
                  <div class="row">
                    <div class="col-lg-3 col-sm-12">
                      <div class="main_history">
                        <img
                          class="img-fluid bookcover library_waiting_history_img"
                          src={lcimg} draggable="false"
                        />
                      </div>
                    </div>
                    <div class="col-lg-9 col-sm-12">
                      <div class="description">
                        <h3 class="name">Book Name Here</h3>
                        <div class="p-3 res">
                          <img class="img-fluid vote" src={Trashcan} draggable="false" />
                        </div>
                      </div>
                      <div class="main_history">
                        <button class="category">Category </button>
                        <button class="category">Category </button>
                      </div>
                      <div class="rates">
                        <span class="fa fa-star checked star"></span>
                        <span class="fa fa-star checked star "></span>
                        <span class="fa fa-star checked star "></span>
                        <span class="fa fa-star checked star "></span>
                        <span class="fa fa-star checked star "></span>
                        <p class="rating">(4.82)</p>
                      </div>
                      <p class="detail">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy
                        <span class="view"> View More </span>
                      </p>
                    </div>
                  </div>
                  <div class="lines"></div>
                  <div class="row mt-3">
                    <div class="col-lg-3">
                      <p class="nums">
                        10/ <span class="numberr">1032</span>
                      </p>
                    </div>
                    <div class="col-lg-9 ">
                      <div class="btnrww">
                        <button class="reads">
                          <span> Add To Library </span>
                          <i class="fa-solid fa-book-open iconn"></i>
                        </button>
                        <button class="reads">
                          <span> Continue Reading </span>
                          <i class="fa-solid fa-book-open iconn"></i>
                        </button>
                        <button class="reads">
                          {" "}
                          Book Deatils{" "}
                          <i class="fa-solid fa-calendar-week iconn"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-6">
                <div class="btnrow">
                  <button class="reading">
                    {" "}
                    Sort Books{" "}
                    <i class="fa-solid fa-arrow-down-wide-short icons"></i>
                  </button>
                  <button class="reading">
                    {" "}
                    Clear All History <i class="fa-solid fa-trash icons"></i>
                  </button>
                </div>

                <div class="books">
                  <div class="row">
                    <div class="col-lg-3 col-sm-12">
                      <div class="main_history">
                        <img
                          class="img-fluid bookcover library_waiting_history_img"
                          src={lcimg} draggable="false"
                        />
                      </div>
                    </div>
                    <div class="col-lg-9 col-sm-12">
                      <div class="description">
                        <h3 class="name">Book Name Here</h3>
                        <div class="p-3 res">
                          <img class="img-fluid vote" src={Trashcan} draggable="false" />
                        </div>
                      </div>
                      <div class="main_history">
                        <button class="category">Category </button>
                        <button class="category">Category </button>
                      </div>
                      <div class="rates">
                        <span class="fa fa-star checked star"></span>
                        <span class="fa fa-star checked star "></span>
                        <span class="fa fa-star checked star "></span>
                        <span class="fa fa-star checked star "></span>
                        <span class="fa fa-star checked star "></span>
                        <p class="rating">(4.82)</p>
                      </div>
                      <p class="detail">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy
                        <span class="view"> View More </span>
                      </p>
                    </div>
                  </div>
                  <div class="lines"></div>
                  <div class="row mt-3">
                    <div class="col-lg-3">
                      <p class="nums">
                        10/ <span class="numberr">1032</span>
                      </p>
                    </div>
                    <div class="col-lg-9 ">
                      <div class="btnrww">
                        <button class="reads">
                          <span> Add To Library </span>
                          <i class="fa-solid fa-book-open iconn"></i>
                        </button>
                        <button class="reads">
                          <span> Continue Reading </span>
                          <i class="fa-solid fa-book-open iconn"></i>
                        </button>
                        <button class="reads">
                          {" "}
                          Book Deatils{" "}
                          <i class="fa-solid fa-calendar-week iconn"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="books">
                  <div class="row">
                    <div class="col-lg-3 col-sm-12">
                      <div class="main_history">
                        <img
                          class="img-fluid bookcover library_waiting_history_img"
                          src={lcimg} draggable="false"
                        />
                      </div>
                    </div>
                    <div class="col-lg-9 col-sm-12">
                      <div class="description">
                        <h3 class="name">Book Name Here</h3>
                        <div class="p-3 res">
                          <img class="img-fluid vote" src={Trashcan} draggable="false" />
                        </div>
                      </div>
                      <div class="main_history">
                        <button class="category">Category </button>
                        <button class="category">Category </button>
                      </div>
                      <div class="rates">
                        <span class="fa fa-star checked star"></span>
                        <span class="fa fa-star checked star "></span>
                        <span class="fa fa-star checked star "></span>
                        <span class="fa fa-star checked star "></span>
                        <span class="fa fa-star checked star "></span>
                        <p class="rating">(4.82)</p>
                      </div>
                      <p class="detail">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy
                        <span class="view"> View More </span>
                      </p>
                    </div>
                  </div>
                  <div class="lines"></div>
                  <div class="row mt-3">
                    <div class="col-lg-3">
                      <p class="nums">
                        10/ <span class="numberr">1032</span>
                      </p>
                    </div>
                    <div class="col-lg-9">
                      <div class="btnrww">
                        <button class="reads">
                          <span> Add To Library </span>
                          <i class="fa-solid fa-book-open iconn"></i>
                        </button>
                        <button class="reads">
                          <span> Continue Reading </span>
                          <i class="fa-solid fa-book-open iconn"></i>
                        </button>
                        <button class="reads">
                          {" "}
                          Book Deatils{" "}
                          <i class="fa-solid fa-calendar-week iconn"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="books">
                  <div class="row">
                    <div class="col-lg-3 col-sm-12">
                      <div class="main_history">
                        <img
                          class="img-fluid bookcover library_waiting_history_img"
                          src={lcimg} draggable="false"
                        />
                      </div>
                    </div>
                    <div class="col-lg-9 col-sm-12">
                      <div class="description">
                        <h3 class="name"> Book Name Here </h3>
                        <div class="p-3 res">
                          <img class="img-fluid vote" src={Trashcan} draggable="false" />
                        </div>
                      </div>
                      <div class="main_history">
                        <button class="category">Category </button>
                        <button class="category">Category </button>
                      </div>
                      <div class="rates">
                        <span class="fa fa-star checked star"></span>
                        <span class="fa fa-star checked star "></span>
                        <span class="fa fa-star checked star "></span>
                        <span class="fa fa-star checked star "></span>
                        <span class="fa fa-star checked star "></span>
                        <p class="rating">(4.82)</p>
                      </div>
                      <p class="detail">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy
                        <span class="view"> View More </span>
                      </p>
                    </div>
                  </div>
                  <div class="lines"></div>
                  <div class="row mt-3">
                    <div class="col-lg-3">
                      <p class="nums">
                        10/ <span class="numberr">1032</span>
                      </p>
                    </div>
                    <div class="col-lg-9 ">
                      <div class="btnrww">
                        <button class="reads">
                          <span> Add To Library </span>
                          <i class="fa-solid fa-book-open iconn"></i>
                        </button>
                        <button class="reads">
                          <span> Continue Reading </span>
                          <i class="fa-solid fa-book-open iconn"></i>
                        </button>
                        <button class="reads">
                          {" "}
                          Book Deatils{" "}
                          <i class="fa-solid fa-calendar-week iconn"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="books">
                  <div class="row">
                    <div class="col-lg-3 col-sm-12">
                      <div class="main_history">
                        <img
                          class="img-fluid bookcover library_waiting_history_img"
                          src={lcimg} draggable="false"
                        />
                      </div>
                    </div>
                    <div class="col-lg-9 col-sm-12">
                      <div class="description">
                        <h3 class="name">Book Name Here</h3>
                        <div class="p-3 res">
                          <img class="img-fluid vote" src={Trashcan} draggable="false"/>
                        </div>
                      </div>
                      <div class="main_history">
                        <button class="category">Category </button>
                        <button class="category">Category </button>
                      </div>
                      <div class="rates">
                        <span class="fa fa-star checked star"></span>
                        <span class="fa fa-star checked star "></span>
                        <span class="fa fa-star checked star "></span>
                        <span class="fa fa-star checked star "></span>
                        <span class="fa fa-star checked star "></span>
                        <p class="rating">(4.82)</p>
                      </div>
                      <p class="detail">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy
                        <span class="view"> View More </span>
                      </p>
                    </div>
                  </div>
                  <div class="lines"></div>
                  <div class="row mt-3">
                    <div class="col-lg-3">
                      <p class="nums">
                        10/ <span class="numberr">1032</span>
                      </p>
                    </div>
                    <div class="col-lg-9 ">
                      <div class="btnrww">
                        <button class="reads">
                          <span> Add To Library </span>
                          <i class="fa-solid fa-book-open iconn"></i>
                        </button>
                        <button class="reads">
                          <span> Continue Reading </span>
                          <i class="fa-solid fa-book-open iconn"></i>
                        </button>
                        <button class="reads">
                          {" "}
                          Book Deatils{" "}
                          <i class="fa-solid fa-calendar-week iconn"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="books">
                  <div class="row">
                    <div class="col-lg-3 col-sm-12">
                      <div class="main_history">
                        <img
                          class="img-fluid bookcover library_waiting_history_img"
                          src={lcimg} draggable="false"
                        />
                      </div>
                    </div>
                    <div class="col-lg-9 col-sm-12">
                      <div class="description">
                        <h3 class="name">Book Name Here</h3>
                        <div class="p-3 res">
                          <img class="img-fluid vote" src={Trashcan} draggable="false" />
                        </div>
                      </div>
                      <div class="main_history">
                        <button class="category">Category </button>
                        <button class="category">Category </button>
                      </div>
                      <div class="rates">
                        <span class="fa fa-star checked star"></span>
                        <span class="fa fa-star checked star "></span>
                        <span class="fa fa-star checked star "></span>
                        <span class="fa fa-star checked star "></span>
                        <span class="fa fa-star checked star "></span>
                        <p class="rating">(4.82)</p>
                      </div>
                      <p class="detail">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy
                        <span class="view"> View More </span>
                      </p>
                    </div>
                  </div>
                  <div class="lines"></div>
                  <div class="row mt-3">
                    <div class="col-lg-3">
                      <p class="nums">
                        10/ <span class="numberr">1032</span>
                      </p>
                    </div>
                    <div class="col-lg-9 ">
                      <div class="btnrww">
                        <button class="reads">
                          <span> Add To Library </span>
                          <i class="fa-solid fa-book-open iconn"></i>
                        </button>
                        <button class="reads">
                          <span> Continue Reading </span>
                          <i class="fa-solid fa-book-open iconn"></i>
                        </button>
                        <button class="reads">
                          {" "}
                          Book Deatils{" "}
                          <i class="fa-solid fa-calendar-week iconn"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
      </>
    </UserLayout>
  );
};
