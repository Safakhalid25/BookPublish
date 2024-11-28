import { React, useState, useEffect } from "react";
import "./style.css";
import CustomPagination from "../../Components/CustomPagination";
import Form from "react-bootstrap/Form";
import medal from "../../Assets/images/Medal.png";
import cup from "../../Assets/images/cupimg.png";
import docs from "../../Assets/images/docimg.png";

import { UserLayout } from "../../Components/Layout/UserLayout";
import board1 from "../../Assets/images/board1.png";
import Ellipse44 from "../../Assets/images/Ellipse 44.png";
import votefile from "../../Assets/images/votefile.png";
import detailfile from "../../Assets/images/detailfile.png";
import book3 from "../../Assets/images/book3.png";
import newbook2 from "../../Assets/images/newbook2.png";
import newbook3 from "../../Assets/images/newbook3.png";
import newbook1 from "../../Assets/images/newbbook1.png";
import Manual from "../../Assets/images/Manual.png";
import dropdown from "../../Assets/images/dropdown.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faSearch, faStar } from "@fortawesome/free-solid-svg-icons";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aos from "aos";
import "aos/dist/aos.css";

export const Completion = () => {
  const [ads, setAds] = useState([]);
  const [userdata, setUserdata] = useState([]);
  const [books, setBooks] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const base_url = "https://custom.mystagingserver.site/Tim-WDLLC/public/";
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [competitiondata, setcompetitiondata] = useState([]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const filterData = books?.filter((item) =>
    item?.category?.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filterData.slice(indexOfFirstItem, indexOfLastItem);

  console.log("currentItems", currentItems);

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

        setBooks(data?.data);

        setUserdata(data?.data);
      })
      .catch((error) => {
        document.querySelector(".loaderBox").classList.add("d-none");
        console.log(error);
      });
  };

  const Logout = localStorage.getItem("loginUser");

  const Competition = () => {
    document.querySelector(".loaderBox").classList.remove("d-none");
    fetch(
      "https://custom.mystagingserver.site/Tim-WDLLC/public/api/user/translation-request-listing",
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${Logout}`,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        document.querySelector(".loaderBox").classList.add("d-none");
        setcompetitiondata(data?.data);
      })
      .catch((error) => {
        document.querySelector(".loaderBox").classList.add("d-none");
      });
  };
  console.log("data", competitiondata);

  useEffect(() => {
    BookListing();
    Competition();
    Aos.init();
  }, []);

  console.log("books", books);
  return (
    <UserLayout>
      <>
        {/* Header */}

        {/* Hero Section */}
        <sectionc class="inner__hero-sec jost-font">
          <div className="container">
            <div className="row">
              <div className="herro__title">
                <h1 className="typewriter"> COMPETITION </h1>
                <p className="competition_timer_text">Time remaining</p>
                <div className="d-flex justify-content-center">
                  <p className="competition_offer_remain_time poppins-font">
                    {" "}
                    2:59:59{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </sectionc>

        <section>
          <div className="container">
            <div className="row mt-5 mb-5 align-items-center">
              <div className="col-md-5 col-sm-12 col-7">
                <div class="input-completion completion__search">
                  <button
                    className="completion_btn_two btn btn-outline-secondary "
                    type="button"
                    id="button-addon1"
                  >
                    <FontAwesomeIcon icon={faSearch} />
                  </button>
                  <input
                    type="text"
                    className="completion-input_two form-control "
                    placeholder="Search Here..."
                    aria-describedby="button-addon1"
                  />
                  <button
                    className="btn btn-outline-secondary  compition-category__icon_one"
                    type="button"
                    id="button-addon2"
                  >
                    {" "}
                    search{" "}
                  </button>
                </div>
              </div>
              <div className="col-md-2 col-sm-4 col-5">
                <div class="input-completion completion__search">
                  <div className="dropdown">
                    <button
                      class="filters new_spacing_contest"
                      type="button"
                      id="dropdownMenuButton2"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span> Contest </span>{" "}
                      <img className="img-fluid filters_icon" src={dropdown} />
                    </button>
                    <ul
                      class="dropdown-menu filter_dropdown"
                      aria-labelledby="dropdownMenuButton2"
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
                          Contest
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-md-2 col-sm-4 col-5">
                <div class="input-completion completion__search">
                  <div className="dropdown">
                    <button
                      class="next_filters new_spacing_class"
                      type="button"
                      id="dropdownMenuButton3"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span> Filter </span>{" "}
                      <img
                        className="img-fluid next_filters_icon"
                        src={dropdown}
                      />
                    </button>
                    <ul
                      class="dropdown-menu filter_dropdown"
                      aria-labelledby="dropdownMenuButton2"
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
                </div>
              </div>
              <div className="col-md-3 col-sm-4 col-7 ">
                <div class="input-completion completion__search new_spacing_class">
                  <button class="creates">
                    <span> How To Participate </span>
                    <img className="img-fluid creates_icon" src={Manual} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bestselling_bookss">
          <section className="bestSell__book-sec jost-font">
            <div className="bestSell__book-cartoon1"></div>
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="bestSell__book-title">
                    <h2 className="bestSell__winners_book-title">
                      {" "}
                      COMPETITION WINNERS
                    </h2>
                  </div>
                </div>
                <div className="col-12">
                  <div className="bestSelling__books ">
                    <div className="row mb-5 justify-content-center text-center">
                      <div className="col-md-3 competeion_books_columns">
                        <div className=" d-flex gap-2 justify-content-center  ">
                          <span className="bookdetail bg-white color-blacl ">
                            Vote
                          </span>
                          <span className="bookdetail bg-white color-blacl">
                            Details
                          </span>
                        </div>
                        <img
                          src={newbook2}
                          className="img-fluid bestSelling__books_new"
                        />
                      </div>
                      <div className="col-md-3 competeion_center_column">
                        <div className="completion-book d-flex gap-2 justify-content-center  ">
                          <span className="bookdetail bg-white color-black ">
                            Vote
                          </span>
                          <span className="bookdetail bg-white color-blacl">
                            Details
                          </span>
                        </div>
                        <img
                          src={newbook1}
                          className="img-fluid bestSelling__books_center"
                        />
                      </div>
                      <div className="col-md-3 competeion_books_columns">
                        <div className="completion-book d-flex gap-2  justify-content-center ">
                          <span className="bookdetail bg-white color-black ">
                            Vote
                          </span>
                          <span className="bookdetail bg-white color-blacl">
                            Details
                          </span>
                        </div>
                        <div className="completion-board">
                          <img
                            src={newbook3}
                            className=" img-fluid bestSelling__books_new"
                          />
                        </div>
                      </div>

                      <img src={board1} className="board-compition" />

                      <div className="row sectioncompletion py-3  px-5   justify-content-center  mx-auto ">
                        <div class="col-md-3 col-sm-6 input-completion completion__search view_winner_space">
                          <button
                            className="completion_btn btn btn-outline-secondary"
                            type="button"
                            id="button-addon1"
                          ></button>

                          <p className="completion-input view_winner_text form-control ">
                            {" "}
                            View All Winners
                          </p>
                          <button
                            className="btn btn-outline-secondary  compition-category__icon"
                            type="button"
                            id="button-addon2"
                          >
                            <img src={medal} className="   " id="icon-img" />
                          </button>
                        </div>
                        <div class="col-md-3 col-sm-6 input-completion completion__search view_winner_space">
                          <button
                            className="completion_btn btn btn-outline-secondary  "
                            type="button"
                            id="button-addon1"
                          ></button>

                          <p className="completion-input view_winner_text form-control ">
                            {" "}
                            View All Winners
                          </p>
                          <button
                            className="btn btn-outline-secondary  compition-category__icon "
                            type="button"
                            id="button-addon2"
                          >
                            <img src={cup} className="" id="icon-img" />
                          </button>
                        </div>
                        <div class="col-md-3 col-sm-6 input-completion completion__search view_winner_space">
                          <button
                            className="completion_btn btn btn-outline-secondary  "
                            type="button"
                            id="button-addon1"
                          ></button>

                          <p className="completion-input view_winner_text form-control ">
                            {" "}
                            View All Winners
                          </p>
                          <button
                            className="btn btn-outline-secondary  compition-category__icon"
                            type="button"
                            id="button-addon2"
                          >
                            <img src={docs} className="   " id="icon-img" />
                          </button>
                        </div>
                        <div class=" col-md-3 col-sm-6 input-completion completion__search view_winner_space">
                          <button
                            className="completion_btn btn btn-outline-secondary  "
                            type="button"
                            id="button-addon1"
                          ></button>

                          <p className="completion-input view_winner_text form-control ">
                            {" "}
                            View All Winners
                          </p>
                          <button
                            className="btn btn-outline-secondary  compition-category__icon"
                            type="button"
                            id="button-addon2"
                          >
                            <img src={medal} className="   " id="icon-img" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>

        <section className="competition_bg">
          <div className="container">
            <div className="row  bookboxes">
              {competitiondata?.map((callcompetition) => (
                <div className="col-lg-3 col-sm-8 col-md-6">
                  <div className="text-center">
                    <img
                      src={base_url + callcompetition?.image}
                      className=" update_img_completition_win"
                    />
                    <div className="authorprofile">
                      <img className="img-fluid authorprof" src={Ellipse44} />
                      <div>
                        <p className="profilename">
                          {" "}
                          {callcompetition?.title}{" "}
                        </p>
                        <div className="mainrating">
                          <i class="fa-solid fa-star starRate"></i>
                          <i class="fa-solid fa-star starRate"></i>
                          <i class="fa-solid fa-star starRate"></i>
                          <i class="fa-solid fa-star starRate"></i>
                          <i class="fa-solid fa-star starRate"></i>
                        </div>
                      </div>
                      <div className="vote_actionBtn">
                        <button class="votebtn">
                          {" "}
                          Vote &nbsp;&nbsp;&nbsp;&nbsp;
                          <img
                            className="img-fluid voteicon"
                            src={votefile}
                          />{" "}
                        </button>
                        <button class="votebtn">
                          {" "}
                          Details &nbsp;{" "}
                          <img
                            className="img-fluid voteicon"
                            src={detailfile}
                          />{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <div className="row">
                <div className="book__listing-pagination">
                  <nav aria-label="Page navigation example">
                    <CustomPagination
                      itemsPerPage={itemsPerPage}
                      totalItems={competitiondata?.length}
                      currentPage={competitiondata}
                      onPageChange={handlePageChange}
                    />
                  </nav>
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
