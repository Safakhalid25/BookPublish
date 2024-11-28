import { React, useState, useEffect } from "react";
import "./style.css";
import Group1000002083 from "../../Assets/images/Group1000002083.png";
import Trashcan from "../../Assets/images/Trashcan.png";
import Vote from "../../Assets/images/Vote.png";
import Notification from "../../Assets/images/Notification.png";
import { UserLayout } from "../../Components/Layout/UserLayout";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faSearch, faStar } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aos from "aos";
import "aos/dist/aos.css";
import lcimg from "../../Assets/images/51L+xXb2C7L 1.png";
export const Library = () => {
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
                <h1 className="typewriter"> LIBRARY </h1>
              </div>
            </div>
          </div>
        </section>

        <section class="coverss">
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <div class="btnrww">
                  <button class="libs">Library </button>
                  {/* <img class="img-fluid poly" src={Polygon6}/> */}
                  <button class="history">History </button>

                  <button class="hist"> Waiting List </button>
                </div>

                <div class="books">
                  <div class="row">
                    <div class="col-lg-3 col-sm-12">
                      <div class="main">
                        <img
                          class="img-fluid bookcover"
                          src={Group1000002083}
                        />
                      </div>
                    </div>
                    <div class="col-lg-9 col-sm-12">
                      <div class="description">
                        <h3 class="namee">Book Name Here</h3>
                        <div class="p-3 res ">
                          <img class="img-fluid votee" src={Vote} />
                          <img class="img-fluid votee" src={Notification} />
                          <img class="img-fluid votee" src={Trashcan} />
                        </div>
                      </div>
                      <div class="maincate">
                        <button class="cate">Category </button>
                        <button class="cate">Category </button>
                      </div>
                      <div class="rates">
                        <span class="fa fa-star checked star"></span>
                        <span class="fa fa-star checked star "></span>
                        <span class="fa fa-star checked star "></span>
                        <span class="fa fa-star checked star "></span>
                        <span class="fa fa-star checked star "></span>
                        <p class="rating">(4.82)</p>
                      </div>
                      <p class="detaill">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy
                        <span class="views"> View More </span>
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
                          <span> Add To Favorites </span>
                          <i class="fa-solid fa-heart iconn"></i>
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
                      <div class="main">
                        <img
                          class="img-fluid bookcover"
                          src={Group1000002083}
                        />
                      </div>
                    </div>
                    <div class="col-lg-9 col-sm-12">
                      <div class="description">
                        <h3 class="namee">Book Name Here</h3>
                        <div class=" res p-3 res ">
                          <img class="img-fluid votee" src={Vote} />
                          <img class="img-fluid votee" src={Notification} />
                          <img class="img-fluid votee" src={Trashcan} />
                        </div>
                      </div>
                      <div class="maincate">
                        <button class="cate">Category </button>
                        <button class="cate">Category </button>
                      </div>
                      <div class="rates">
                        <span class="fa fa-star checked star"></span>
                        <span class="fa fa-star checked star "></span>
                        <span class="fa fa-star checked star "></span>
                        <span class="fa fa-star checked star "></span>
                        <span class="fa fa-star checked star "></span>
                        <p class="rating">(4.82)</p>
                      </div>
                      <p class="detaill">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy
                        <span class="views"> View More </span>
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
                          <span> Add To Favorites </span>
                          <i class="fa-solid fa-heart iconn"></i>
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
                      <div class="main">
                        <img class="img-fluid bookcover" src={lcimg} />
                      </div>
                    </div>
                    <div class="col-lg-9 col-sm-12">
                      <div class="description">
                        <h3 class="namee">Book Name Here</h3>
                        <div class="p-3 res">
                          <img class="img-fluid votee" src={Vote} />
                          <img class="img-fluid votee" src={Notification} />
                          <img class="img-fluid votee" src={Trashcan} />
                        </div>
                      </div>
                      <div class="maincate">
                        <button class="cate">Category </button>
                        <button class="cate">Category </button>
                      </div>
                      <div class="rates">
                        <span class="fa fa-star checked star"></span>
                        <span class="fa fa-star checked star "></span>
                        <span class="fa fa-star checked star "></span>
                        <span class="fa fa-star checked star "></span>
                        <span class="fa fa-star checked star "></span>
                        <p class="rating">(4.82)</p>
                      </div>
                      <p class="detaill">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy
                        <span class="views"> View More </span>
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
                          <span> Add To Favorites </span>
                          <i class="fa-solid fa-heart iconn"></i>
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
                      <div class="main">
                        <img
                          class="img-fluid bookcover"
                          src={Group1000002083}
                        />
                      </div>
                    </div>
                    <div class="col-lg-9 col-sm-12">
                      <div class="description">
                        <h3 class="namee">Book Name Here</h3>
                        <div class="p-3 res">
                          <img class="img-fluid votee" src={Vote} />
                          <img class="img-fluid votee" src={Notification} />
                          <img class="img-fluid votee" src={Trashcan} />
                        </div>
                      </div>
                      <div class="maincate">
                        <button class="cate">Category </button>
                        <button class="cate">Category </button>
                      </div>
                      <div class="rates">
                        <span class="fa fa-star checked star"></span>
                        <span class="fa fa-star checked star "></span>
                        <span class="fa fa-star checked star "></span>
                        <span class="fa fa-star checked star "></span>
                        <span class="fa fa-star checked star "></span>
                        <p class="rating">(4.82)</p>
                      </div>
                      <p class="detaill">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy
                        <span class="views"> View More </span>
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
                          <span> Add To Favorites </span>
                          <i class="fa-solid fa-heart iconn"></i>
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
                      <div class="main">
                        <img class="img-fluid bookcover" src={lcimg} />
                      </div>
                    </div>
                    <div class="col-lg-9 col-sm-12">
                      <div class="description">
                        <h3 class="namee">Book Name Here</h3>
                        <div class="p-3 res">
                          <img class="img-fluid votee" src={Vote} />
                          <img class="img-fluid votee" src={Notification} />
                          <img class="img-fluid votee" src={Trashcan} />
                        </div>
                      </div>
                      <div class="maincate">
                        <button class="cate">Category </button>
                        <button class="cate">Category </button>
                      </div>
                      <div class="rates">
                        <span class="fa fa-star checked star"></span>
                        <span class="fa fa-star checked star "></span>
                        <span class="fa fa-star checked star "></span>
                        <span class="fa fa-star checked star "></span>
                        <span class="fa fa-star checked star "></span>
                        <p class="rating">(4.82)</p>
                      </div>
                      <p class="detaill">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy
                        <span class="views"> View More </span>
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
                          <span> Add To Favorites </span>
                          <i class="fa-solid fa-heart iconn"></i>
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
                    Sort Books &nbsp;{" "}
                    <i class="fa-solid fa-arrow-down-wide-short icons"></i>
                  </button>
                  <button class="reading">
                    Recommendations &nbsp;
                    <i class="fa-solid fa-book-open icons"></i>
                  </button>
                </div>

                <div class="books">
                  <div class="row">
                    <div class="col-lg-3 col-sm-12">
                      <div class="main">
                        <img
                          class="img-fluid bookcover"
                          src={Group1000002083}
                        />
                      </div>
                    </div>
                    <div class="col-lg-9 col-sm-12">
                      <div class="description">
                        <h3 class="namee">Book Name Here</h3>
                        <div class="p-3 res">
                          <img class="img-fluid votee" src={Vote} />
                          <img class="img-fluid votee" src={Notification} />
                          <img class="img-fluid votee" src={Trashcan} />
                        </div>
                      </div>
                      <div class="maincate">
                        <button class="cate">Category </button>
                        <button class="cate">Category </button>
                      </div>
                      <div class="rates">
                        <span class="fa fa-star checked star"></span>
                        <span class="fa fa-star checked star "></span>
                        <span class="fa fa-star checked star "></span>
                        <span class="fa fa-star checked star "></span>
                        <span class="fa fa-star checked star "></span>
                        <p class="rating">(4.82)</p>
                      </div>
                      <p class="detaill">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy
                        <span class="views"> View More </span>
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
                          <span> Add To Favorites </span>
                          <i class="fa-solid fa-heart iconn"></i>
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
                      <div class="main">
                        <img
                          class="img-fluid bookcover"
                          src={Group1000002083}
                        />
                      </div>
                    </div>
                    <div class="col-lg-9 col-sm-12">
                      <div class="description">
                        <h3 class="namee">Book Name Here</h3>
                        <div class="p-3 res">
                          <img class="img-fluid votee" src={Vote} />
                          <img class="img-fluid votee" src={Notification} />
                          <img class="img-fluid votee" src={Trashcan} />
                        </div>
                      </div>
                      <div class="maincate">
                        <button class="cate">Category </button>
                        <button class="cate">Category </button>
                      </div>
                      <div class="rates">
                        <span class="fa fa-star checked star"></span>
                        <span class="fa fa-star checked star "></span>
                        <span class="fa fa-star checked star "></span>
                        <span class="fa fa-star checked star "></span>
                        <span class="fa fa-star checked star "></span>
                        <p class="rating">(4.82)</p>
                      </div>
                      <p class="detaill">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy
                        <span class="views"> View More </span>
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
                          <span> Add To Favorites </span>
                          <i class="fa-solid fa-heart iconn"></i>
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
                      <div class="main">
                        <img
                          class="img-fluid bookcover"
                          src={Group1000002083}
                        />
                      </div>
                    </div>
                    <div class="col-lg-9 col-sm-12">
                      <div class="description">
                        <h3 class="namee">Book Name Here</h3>
                        <div class="p-3 res">
                          <img class="img-fluid votee" src={Vote} />
                          <img class="img-fluid votee" src={Notification} />
                          <img class="img-fluid votee" src={Trashcan} />
                        </div>
                      </div>
                      <div class="maincate">
                        <button class="cate">Category </button>
                        <button class="cate">Category </button>
                      </div>
                      <div class="rates">
                        <span class="fa fa-star checked star"></span>
                        <span class="fa fa-star checked star "></span>
                        <span class="fa fa-star checked star "></span>
                        <span class="fa fa-star checked star "></span>
                        <span class="fa fa-star checked star "></span>
                        <p class="rating">(4.82)</p>
                      </div>
                      <p class="detaill">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy
                        <span class="views"> View More </span>
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
                          <span> Add To Favorites </span>
                          <i class="fa-solid fa-heart iconn"></i>
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
                      <div class="main">
                        <img class="img-fluid bookcover" src={lcimg} />
                      </div>
                    </div>
                    <div class="col-lg-9 col-sm-12">
                      <div class="description">
                        <h3 class="namee">Book Name Here</h3>
                        <div class="p-3 res">
                          <img class="img-fluid votee" src={Vote} />
                          <img class="img-fluid votee" src={Notification} />
                          <img class="img-fluid votee" src={Trashcan} />
                        </div>
                      </div>
                      <div class="maincate">
                        <button class="cate">Category </button>
                        <button class="cate">Category </button>
                      </div>
                      <div class="rates">
                        <span class="fa fa-star checked star"></span>
                        <span class="fa fa-star checked star "></span>
                        <span class="fa fa-star checked star "></span>
                        <span class="fa fa-star checked star "></span>
                        <span class="fa fa-star checked star "></span>
                        <p class="rating">(4.82)</p>
                      </div>
                      <p class="detaill">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy
                        <span class="views"> View More </span>
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
                          <span> Add To Favorites </span>
                          <i class="fa-solid fa-heart iconn"></i>
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
                      <div class="main">
                        <img
                          class="img-fluid bookcover"
                          src={Group1000002083}
                        />
                      </div>
                    </div>
                    <div class="col-lg-9 col-sm-12">
                      <div class="description">
                        <h3 class="namee">Book Name Here</h3>
                        <div class="p-3 res">
                          <img class="img-fluid votee" src={Vote} />
                          <img class="img-fluid votee" src={Notification} />
                          <img class="img-fluid votee" src={Trashcan} />
                        </div>
                      </div>
                      <div class="maincate">
                        <button class="cate">Category </button>
                        <button class="cate">Category </button>
                      </div>
                      <div class="rates">
                        <span class="fa fa-star checked star"></span>
                        <span class="fa fa-star checked star "></span>
                        <span class="fa fa-star checked star "></span>
                        <span class="fa fa-star checked star "></span>
                        <span class="fa fa-star checked star "></span>
                        <p class="rating">(4.82)</p>
                      </div>
                      <p class="detaill">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy
                        <span class="views"> View More </span>
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
                          <span> Add To Favorites </span>
                          <i class="fa-solid fa-heart iconn"></i>
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
