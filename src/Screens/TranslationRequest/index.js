import { React, useState, useEffect } from "react";
import "./style.css";
import Trashcan from "../../Assets/images/Trashcan.png";
import Notification from "../../Assets/images/Notification.png";
import Vote from "../../Assets/images/Vote.png";
import { UserLayout } from "../../Components/Layout/UserLayout";
import CustomPagination from "../../Components/CustomPagination";
import Manual from "../../Assets/images/Manual.png";
import dropdown from "../../Assets/images/dropdown.png";
import book_filter1 from "../../Assets/images/book_filter1.png";
import filter2 from "../../Assets/images/filter2.png";
import filter3 from "../../Assets/images/filter3.png";
import filter4 from "../../Assets/images/filter4.png";
import Clock from "../../Assets/images//Clock.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faSearch, faStar } from "@fortawesome/free-solid-svg-icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aos from "aos";
import "aos/dist/aos.css";
import lcimg from "../../Assets/images/51L+xXb2C7L 1.png";
export const TranslationRequest = () => {
  const [ads, setAds] = useState([]);
  const [books, setBooks] = useState([]);
  const [genres, setGenres] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);
  const [translatedata, settranslatedata] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const base_url = "https://custom.mystagingserver.site/Tim-WDLLC/public/";
  const [inputValue, setInputValue] = useState("");
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const filterData = translatedata?.filter((item) =>
    item?.title?.toLowerCase().includes(inputValue?.toLowerCase())
  );
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const bookitems = filterData?.slice(indexOfFirstItem, indexOfLastItem);
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

  const LogoutData = localStorage.getItem("loginUser");

  const TranslateRequest = () => {
    document.querySelector(".loaderBox").classList.remove("d-none");
    fetch(
      "https://custom.mystagingserver.site/Tim-WDLLC/public/api/user/translation-request-listing",
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${LogoutData}`,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        settranslatedata(data?.data);
      })
      .catch((error) => {
        document.querySelector(".loaderBox").classList.add("d-none");
      });
  };

  useEffect(() => {
    TranslateRequest();
  }, []);

  console.log("translate", translatedata);

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
                <h1 className="typewriter"> Translation Request </h1>
              </div>
            </div>
          </div>
        </section>

        <section className="recent">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6 col-sm-6">
                <div class="input-completion completion__search">
                  <button
                    className="completion_btn_one btn btn-outline-secondary "
                    type="button"
                    id="button-addon1"
                  >
                    <FontAwesomeIcon icon={faSearch} />
                  </button>
                  <input
                    type="text"
                    className="completion-input_one form-control "
                    placeholder="Search Here..."
                    aria-describedby="button-addon1"
                  />
                  <button
                    className="btn btn-outline-secondary  compition-category__icon_translate"
                    type="button"
                    id="button-addon2"
                  >
                    {" "}
                    search{" "}
                  </button>
                </div>
              </div>
              <div className="col-12 col-md-6 col-sm-6">
                <div class="input-completion completion__search translation_request_buttons_div">
                  <div className="dropdown">
                    <button
                      class="filter"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span> Filter </span>{" "}
                      <img className="img-fluid filter_icon" src={dropdown} />
                    </button>

                    <ul
                      class="dropdown-menu filter_dropdown"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <a class="dropdown-item filter_dropdown_list" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item filter_dropdown_list" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item filter_dropdown_list" href="#">
                          Filter
                        </a>
                      </li>
                    </ul>
                  </div>
                  <button class="create">
                    <span> Create </span>
                    <img className="img-fluid create_icon" src={Manual} />
                  </button>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              {translatedata?.map((translaterequestdata) => (
                <div className="col-md-6">
                  <div class="bookk">
                    <div class="row">
                      <div class="col-lg-3 col-sm-12">
                        <div class="watch">
                          <img class="img-fluid clock" src={Clock} />
                          <img
                            class="img-fluid bookcover new_bookcover_img"
                            src={base_url + translaterequestdata?.image}
                          />
                        </div>
                      </div>
                      <div class="col-lg-9 col-sm-12">
                        <div class="description">
                          <h3 class="name">{translaterequestdata?.title}</h3>
                          <div class="p-3 res">
                            <img class="img-fluid vote" src={Vote} />
                            <img class="img-fluid vote" src={Notification} />
                            <img class="img-fluid vote" src={Trashcan} />
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
                          <span>&nbsp;</span>
                          <p class="rating">
                            {translaterequestdata?.maturity_rating}
                          </p>
                        </div>
                        <p class="detail">
                          {translaterequestdata?.description}
                          <span class="view"> View More </span>
                        </p>
                      </div>
                    </div>
                    <div class="linee"></div>
                    <div class="row mt-3 pb-3">
                      <div class="col-lg-4">
                        <p class="numm">
                          Status: <span class="numb">Requested </span>
                        </p>
                      </div>
                      <div class="col-lg-8">
                        <div class="btnrrw">
                          <button class="readbtns">
                            <span> Add To Waiting List &nbsp;&nbsp;</span>{" "}
                            <i class="fa-solid fa-clock iicon"></i>
                          </button>
                          <button class="readbtns">
                            Book Details &nbsp;&nbsp;
                            <i class="fa-solid fa-calendar-week iicon"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="row">
              <div className="book__listing-pagination">
                <nav aria-label="Page navigation example">
                  <CustomPagination
                    itemsPerPage={itemsPerPage}
                    totalItems={translatedata?.length}
                    currentPage={translatedata}
                    onPageChange={handlePageChange}
                  />
                </nav>
              </div>
            </div>

            <div className="row mt-5 image_row_center">
              <div className="col-md-6">
                <h3 className="top_five">Top 5 Voted Novels Of All Time</h3>
                <div className="row mt-4">
                  <div className="col-6 col-sm-6 col-lg-3">
                    <img className="top_five_book" src={book_filter1} />
                    <h6 className="book_name">Book Name Here</h6>
                    <div className="star_row">
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                    </div>
                  </div>
                  <div className="col-6 col-sm-6 col-lg-3">
                    <img className="top_five_book" src={filter2} />
                    <h6 className="book_name">Book Name Here</h6>
                    <div className="star_row">
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                    </div>
                  </div>
                  <div className="col-6 col-sm-6 col-lg-3">
                    <img className="top_five_book" src={filter3} />
                    <h6 className="book_name">Book Name Here</h6>
                    <div className="star_row">
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                    </div>
                  </div>
                  <div className="col-6 col-sm-6 col-lg-3">
                    <img className="top_five_book" src={filter4} />
                    <h6 className="book_name">Book Name Here</h6>
                    <div className="star_row">
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <h3 className="top_five">Recently Picked up</h3>
                <div className="row mt-4">
                  <div className="col-6 col-sm-6 col-lg-3">
                    <img className="top_five_book" src={book_filter1} />
                    <h6 className="book_name">Book Name Here</h6>
                    <div className="star_row">
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                    </div>
                  </div>
                  <div className="col-6 col-sm-6 col-lg-3">
                    <img className="top_five_book" src={filter2} />
                    <h6 className="book_name">Book Name Here</h6>
                    <div className="star_row">
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                    </div>
                  </div>
                  <div className="col-6 col-sm-6 col-lg-3">
                    <img className="top_five_book" src={filter3} />
                    <h6 className="book_name">Book Name Here</h6>
                    <div className="star_row">
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                    </div>
                  </div>
                  <div className="col-6 col-sm-6 col-lg-3">
                    <img className="top_five_book" src={filter4} />
                    <h6 className="book_name">Book Name Here</h6>
                    <div className="star_row">
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-5 image_row_center">
              <div className="col-md-12">
                <h3 className="top_five">Recommendation</h3>
                <div className="row mt-5">
                  <div className="col">
                    <img className="top_five_book" src={book_filter1} />
                    <h6 className="book_name">Book Name Here</h6>
                    <div className="star_row">
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                    </div>
                  </div>
                  <div className="col">
                    <img className="top_five_book" src={filter2} />
                    <h6 className="book_name">Book Name Here</h6>
                    <div className="star_row">
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                    </div>
                  </div>
                  <div className="col">
                    <img className="top_five_book" src={filter3} />
                    <h6 className="book_name">Book Name Here</h6>
                    <div className="star_row">
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                    </div>
                  </div>
                  <div className="col">
                    <img className="top_five_book" src={filter4} />
                    <h6 className="book_name">Book Name Here</h6>
                    <div className="star_row">
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                    </div>
                  </div>
                  <div className="col">
                    <img className="top_five_book" src={book_filter1} />
                    <h6 className="book_name">Book Name Here</h6>
                    <div className="star_row">
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                    </div>
                  </div>
                  <div className="col">
                    <img className="top_five_book" src={filter2} />
                    <h6 className="book_name">Book Name Here</h6>
                    <div className="star_row">
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                    </div>
                  </div>
                  <div className="col">
                    <img className="top_five_book" src={filter3} />
                    <h6 className="book_name">Book Name Here</h6>
                    <div className="star_row">
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                    </div>
                  </div>
                  <div className="col">
                    <img className="top_five_book" src={filter4} />
                    <h6 className="book_name">Book Name Here</h6>
                    <div className="star_row">
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row mt-5 image_row_center">
              <div className="col-md-6">
                <h3 className="top_five">Top 5 Voted Novels Of All Genre</h3>
                <div className="row mt-4">
                  <div className="col-6 col-sm-6 col-lg-3">
                    <img className="top_five_book" src={book_filter1} />
                    <h6 className="book_name">Book Name Here</h6>
                    <div className="star_row">
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                    </div>
                  </div>
                  <div className="col-6 col-sm-6 col-lg-3">
                    <img className="top_five_book" src={filter2} />
                    <h6 className="book_name">Book Name Here</h6>
                    <div className="star_row">
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                    </div>
                  </div>
                  <div className="col-6 col-sm-6 col-lg-3">
                    <img className="top_five_book" src={filter3} />
                    <h6 className="book_name">Book Name Here</h6>
                    <div className="star_row">
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                    </div>
                  </div>
                  <div className="col-6 col-sm-6 col-lg-3">
                    <img className="top_five_book" src={filter4} />
                    <h6 className="book_name">Book Name Here</h6>
                    <div className="star_row">
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <h3 className="top_five">NEWLY REQUESTED</h3>
                <div className="row mt-4">
                  <div className="col-6 col-sm-6 col-lg-3">
                    <img className="top_five_book" src={book_filter1} />
                    <h6 className="book_name">Book Name Here</h6>
                    <div className="star_row">
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                    </div>
                  </div>
                  <div className="col-6 col-sm-6 col-lg-3">
                    <img className="top_five_book" src={filter2} />
                    <h6 className="book_name">Book Name Here</h6>
                    <div className="star_row">
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                    </div>
                  </div>
                  <div className="col-6 col-sm-6 col-lg-3">
                    <img className="top_five_book" src={filter3} />
                    <h6 className="book_name">Book Name Here</h6>
                    <div className="star_row">
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                    </div>
                  </div>
                  <div className="col-6 col-sm-6 col-lg-3">
                    <img className="top_five_book" src={filter4} />
                    <h6 className="book_name">Book Name Here</h6>
                    <div className="star_row">
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row mt-5 image_row_center">
              <div className="col-md-12">
                <h3 className="top_five">Recommendation</h3>
                <div className="row mt-5">
                  <div className="col">
                    <img className="top_five_book" src={book_filter1} />
                    <h6 className="book_name">Book Name Here</h6>
                    <div className="star_row">
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                    </div>
                  </div>
                  <div className="col">
                    <img className="top_five_book" src={filter2} />
                    <h6 className="book_name">Book Name Here</h6>
                    <div className="star_row">
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                    </div>
                  </div>
                  <div className="col">
                    <img className="top_five_book" src={filter3} />
                    <h6 className="book_name">Book Name Here</h6>
                    <div className="star_row">
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                    </div>
                  </div>
                  <div className="col">
                    <img className="top_five_book" src={filter4} />
                    <h6 className="book_name">Book Name Here</h6>
                    <div className="star_row">
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                    </div>
                  </div>
                  <div className="col">
                    <img className="top_five_book" src={book_filter1} />
                    <h6 className="book_name">Book Name Here</h6>
                    <div className="star_row">
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                    </div>
                  </div>
                  <div className="col">
                    <img className="top_five_book" src={filter2} />
                    <h6 className="book_name">Book Name Here</h6>
                    <div className="star_row">
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                    </div>
                  </div>
                  <div className="col">
                    <img className="top_five_book" src={filter3} />
                    <h6 className="book_name">Book Name Here</h6>
                    <div className="star_row">
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                    </div>
                  </div>
                  <div className="col">
                    <img className="top_five_book" src={filter4} />
                    <h6 className="book_name">Book Name Here</h6>
                    <div className="star_row">
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                      <i class="fa-solid fa-star top_five_stars"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* new section end */}
      </>
    </UserLayout>
  );
};
