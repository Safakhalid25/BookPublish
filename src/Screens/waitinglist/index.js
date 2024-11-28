import { React, useState, useEffect } from "react";
import "./style.css";
import cup from "../../Assets/images/cupimg.png";
import docs from "../../Assets/images/docimg.png";
import Trashcan from "../../Assets/images/Trashcan.png";
import Notification from "../../Assets/images/Notification.png";
import Vote from "../../Assets/images/Vote.png";
import { UserLayout } from "../../Components/Layout/UserLayout";
import book1 from "../../Assets/images/book1.png";
import Clock from "../../Assets/images//Clock.png";
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
export const Waitinglist = () => {
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
                <h1 className="typewriter"> WAITING LIST </h1>
              </div>
            </div>
          </div>
        </section>

        <section class="coverr">
          <div class="container">
            <div class="row">
              <div class="col-md-6 ">
                <div class="btnrrw">
                  <button class="history">Library </button>
                  <button class="hist">History </button>
                  <button class="lib">Waiting List </button>
                  {/* <img class="img-fluid polygoon" src={Polygon6}/> */}
                </div>

                <div class="bookk">
                  <div class="row">
                    <div class="col-lg-3 col-sm-12">
                      <div class="watch">
                        <img class="img-fluid clock" src={Clock} draggable="false" />
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
                          <img class="img-fluid vote" src={Vote} draggable="false" />
                          <img class="img-fluid vote" src={Notification} draggable="false"/>
                          <img class="img-fluid vote" src={Trashcan} draggable="false"/>
                        </div>
                      </div>
                      <div class="mainly">
                        <button class="category">Category </button>
                        <button class="category">Category </button>
                      </div>
                      <div class="raate">
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
                  <div class="linee"></div>
                  <div class="row mt-3 pb-3">
                    <div class="col-lg-6">
                      <p class="numm">
                        Status: <span class="numb"> Requested</span>
                      </p>
                    </div>
                    <div class="col-lg-6 ">
                      <div class="btnrow">
                        <button class="read">
                          Book Deatils &nbsp;&nbsp;
                          <i class="fa-solid fa-calendar-week iicon"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="bookk">
                  <div class="row">
                    <div class="col-lg-3 col-sm-12">
                      <div class="watch">
                        <img class="img-fluid clock" src={Clock} draggable="false"/>
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
                          <img class="img-fluid vote" src={Vote} draggable="false"/>
                          <img class="img-fluid vote" src={Notification} draggable="false"/>
                          <img class="img-fluid vote" src={Trashcan} draggable="false"/>
                        </div>
                      </div>
                      <div class="mainly">
                        <button class="category">Category </button>
                        <button class="category">Category </button>
                      </div>
                      <div class="raate">
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
                  <div class="linee"></div>
                  <div class="row mt-3 pb-3">
                    <div class="col-lg-6">
                      <p class="numm">
                        Status: <span class="dropp"> Dropped</span>
                      </p>
                    </div>
                    <div class="col-lg-6 ">
                      <div class="btnrow">
                        <button class="read">
                          Book Deatils &nbsp;&nbsp;
                          <i class="fa-solid fa-calendar-week iicon"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="bookk">
                  <div class="row">
                    <div class="col-lg-3 col-sm-12">
                      <div class="watch">
                        <img class="img-fluid clock" src={Clock} draggable="false" />
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
                          <img class="img-fluid vote" src={Vote} draggable="false" />
                          <img class="img-fluid vote" src={Notification} draggable="false" />
                          <img class="img-fluid vote" src={Trashcan}  draggable="false" />
                        </div>
                      </div>
                      <div class="mainly">
                        <button class="category">Category </button>
                        <button class="category">Category </button>
                      </div>
                      <div class="raate">
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
                  <div class="linee"></div>
                  <div class="row mt-3 pb-3">
                    <div class="col-lg-6">
                      <p class="numm">
                        Status: <span class="numb"> Requested</span>
                      </p>
                    </div>
                    <div class="col-lg-6">
                      <div class="btnrow">
                        <button class="read">
                          Book Deatils &nbsp;&nbsp;
                          <i class="fa-solid fa-calendar-week iicon"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="bookk">
                  <div class="row">
                    <div class="col-lg-3 col-sm-12">
                      <div class="watch">
                        <img class="img-fluid clock" src={Clock} draggable="false"/>
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
                          <img class="img-fluid vote" src={Vote} draggable="false"/>
                          <img class="img-fluid vote" src={Notification} draggable="false"/>
                          <img class="img-fluid vote" src={Trashcan} draggable="false" />
                        </div>
                      </div>
                      <div class="mainly">
                        <button class="category">Category </button>
                        <button class="category">Category </button>
                      </div>
                      <div class="raate">
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
                  <div class="linee"></div>
                  <div class="row mt-3 pb-3">
                    <div class="col-lg-4">
                      <p class="numm">
                        Status: <span class="pickk"> Picked Up</span>
                      </p>
                    </div>
                    <div class="col-lg-8">
                      <div class="btnrrw">
                        <button class="read">
                          <span>Add To Library &nbsp;&nbsp;</span>{" "}
                          <i class="fa-solid fa-book-open iicon"></i>
                        </button>
                        <button class="read">
                          Book Deatils &nbsp;&nbsp;
                          <i class="fa-solid fa-calendar-week iicon"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="bookk">
                  <div class="row">
                    <div class="col-lg-3 col-sm-12">
                      <div class="watch">
                        <img class="img-fluid clock" src={Clock} draggable="false" />
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
                          <img class="img-fluid vote" src={Vote} draggable="false"/>
                          <img class="img-fluid vote" src={Notification} draggable="false" />
                          <img class="img-fluid vote" src={Trashcan} draggable="false" />
                        </div>
                      </div>
                      <div class="mainly">
                        <button class="category">Category </button>
                        <button class="category">Category </button>
                      </div>
                      <div class="raate">
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
                  <div class="linee"></div>
                  <div class="row mt-3 pb-3">
                    <div class="col-lg-6">
                      <p class="numm">
                        Status: <span class="numb"> Requested</span>
                      </p>
                    </div>
                    <div class="col-lg-6 ">
                      <div class="btnrow">
                        <button class="read">
                          Book Deatils &nbsp;&nbsp;
                          <i class="fa-solid fa-calendar-week iicon"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-6 ">
                <div class="btnrrw">
                  <button class="reading">
                    Sort Books &nbsp;&nbsp;
                    <i class="fa-solid fa-arrow-down-wide-short icons"></i>
                  </button>
                  <button class="reading">
                    Clear Waiting List &nbsp;&nbsp;
                    <i class="fa-solid fa-trash icons"></i>
                  </button>
                </div>

                <div class="bookk">
                  <div class="row">
                    <div class="col-lg-3 col-sm-12">
                      <div class="watch">
                        <img class="img-fluid clock" src={Clock} draggable="false"/>
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
                          <img class="img-fluid vote" src={Vote} draggable="false"/>
                          <img class="img-fluid vote" src={Notification} draggable="false"/>
                          <img class="img-fluid vote" src={Trashcan} draggable="false"/>
                        </div>
                      </div>
                      <div class="mainly">
                        <button class="category">Category </button>
                        <button class="category">Category </button>
                      </div>
                      <div class="raate">
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
                  <div class="linee"></div>
                  <div class="row mt-3 pb-3">
                    <div class="col-lg-4">
                      <p class="numm">
                        Status: <span class="pickk"> Picked Up</span>
                      </p>
                    </div>
                    <div class="col-lg-8">
                      <div class="btnrrw">
                        <button class="read">
                          <span>Add To Library &nbsp;&nbsp;</span>{" "}
                          <i class="fa-solid fa-book-open iicon"></i>
                        </button>
                        <button class="read">
                          Book Deatils &nbsp;&nbsp;
                          <i class="fa-solid fa-calendar-week iicon"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="bookk">
                  <div class="row">
                    <div class="col-lg-3 col-sm-12">
                      <div class="watch">
                        <img class="img-fluid clock" src={Clock} draggable="false"/>
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
                          <img class="img-fluid vote" src={Vote} draggable="false"/>
                          <img class="img-fluid vote" src={Notification} draggable="false"/>
                          <img class="img-fluid vote" src={Trashcan} draggable="false"/>
                        </div>
                      </div>
                      <div class="mainly">
                        <button class="category">Category </button>
                        <button class="category">Category </button>
                      </div>
                      <div class="raate">
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
                  <div class="linee"></div>
                  <div class="row mt-3 pb-3">
                    <div class="col-lg-4">
                      <p class="numm">
                        Status: <span class="pickk"> Picked Up</span>
                      </p>
                    </div>
                    <div class="col-lg-8">
                      <div class="btnrrw">
                        <button class="read">
                          <span>Add To Library &nbsp;&nbsp;</span>{" "}
                          <i class="fa-solid fa-book-open iicon"></i>
                        </button>
                        <button class="read">
                          Book Deatils &nbsp;&nbsp;
                          <i class="fa-solid fa-calendar-week iicon"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="bookk">
                  <div class="row">
                    <div class="col-lg-3 col-sm-12">
                      <div class="watch">
                        <img class="img-fluid clock" src={Clock} draggable="false"/>
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
                          <img class="img-fluid vote" src={Vote} draggable="false"/>
                          <img class="img-fluid vote" src={Notification} draggable="false"/>
                          <img class="img-fluid vote" src={Trashcan} draggable="false"/>
                        </div>
                      </div>
                      <div class="mainly">
                        <button class="category">Category </button>
                        <button class="category">Category </button>
                      </div>
                      <div class="raate">
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
                  <div class="linee"></div>
                  <div class="row mt-3 pb-3">
                    <div class="col-lg-5">
                      <p class="numm">
                        Status: <span class="dropp"> Dropped</span>
                      </p>
                    </div>
                    <div class="col-lg-7 ">
                      <div class="btnrow">
                        <button class="read">
                          Book Deatils &nbsp;&nbsp;
                          <i class="fa-solid fa-calendar-week iicon"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="bookk">
                  <div class="row">
                    <div class="col-lg-3 col-sm-12">
                      <div class="watch">
                        <img class="img-fluid clock" src={Clock} draggable="false"/>
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
                          <img class="img-fluid vote" src={Vote} draggable="false" />
                          <img class="img-fluid vote" src={Notification} draggable="false" />
                          <img class="img-fluid vote" src={Trashcan} draggable="false"/>
                        </div>
                      </div>
                      <div class="mainly">
                        <button class="category">Category </button>
                        <button class="category">Category </button>
                      </div>
                      <div class="raate">
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
                  <div class="linee"></div>
                  <div class="row mt-3 pb-3">
                    <div class="col-lg-5">
                      <p class="numm">
                        Status: <span class="dropp"> Dropped</span>
                      </p>
                    </div>
                    <div class="col-lg-7 ">
                      <div class="btnrow">
                        <button class="read">
                          Book Deatils &nbsp;&nbsp;
                          <i class="fa-solid fa-calendar-week iicon"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="bookk">
                  <div class="row">
                    <div class="col-lg-3 col-sm-12">
                      <div class="watch">
                        <img class="img-fluid clock" src={Clock} draggable="false"/>
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
                          <img class="img-fluid vote" src={Vote} draggable="false" />
                          <img class="img-fluid vote" src={Notification} draggable="false" />
                          <img class="img-fluid vote" src={Trashcan} draggable="false" />
                        </div>
                      </div>
                      <div class="mainly">
                        <button class="category">Category </button>
                        <button class="category">Category </button>
                      </div>
                      <div class="raate">
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
                  <div class="linee"></div>
                  <div class="row mt-3 pb-3">
                    <div class="col-lg-5">
                      <p class="numm">
                        Status: <span class="dropp"> Dropped</span>
                      </p>
                    </div>
                    <div class="col-lg-7 ">
                      <div class="btnrow">
                        <button class="read">
                          Book Deatils &nbsp;&nbsp;{" "}
                          <i class="fa-solid fa-calendar-week iicon"></i>
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
