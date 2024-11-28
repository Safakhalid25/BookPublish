import { React, useState, useEffect } from "react";
import "./style.css";
import { UserLayout } from "../../Components/Layout/UserLayout";
import Form from "react-bootstrap/Form";
import {
  AdertiseImage,
  BookImage,
  Fancy,
  MainNoval,
  NovalImage,
} from "../../Assets/images";
import { Link } from "react-router-dom";
import { BookListingCover } from "../../Assets/images";
import novelbook from "../../Assets/images/novelbook.png";
export const CreateRequest = () => {
  const [ads, setAds] = useState([]);
  const [books, setBooks] = useState([]);
  const [genres, setGenres] = useState([]);
  const [languagelist, setlanguagelist] = useState([]);
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

        setGenres(data.data);
        // if (data.data.length > 0) {
        //     setSelectedGenre(data.data[0]); // Select the first genre by default
        // }
      })
      .catch((error) => {
        document.querySelector(".loaderBox").classList.add("d-none");
        console.error("Error fetching data: ", error);
      });
  };

  const LanguageSelection = () => {
    document.querySelector(".loaderBox").classList.remove("d-none");
    fetch(
      "https://custom.mystagingserver.site/Tim-WDLLC/public/api/language-listing"
    )
      .then((response) => response.json())
      .then((data) => {
        document.querySelector(".loaderBox").classList.add("d-none");
        setlanguagelist(data?.data);
      })
      .catch((error) => {
        document.querySelector(".loaderBox").classList.add("d-none");
      });
  };

  useEffect(() => {
    adsListing();
    BookListing();
    GenreData();
    LanguageSelection();
  }, []);

  const handleTabClick = (genre) => {
    setSelectedGenre(genre);
  };

  const [isChecked, setIsChecked] = useState(null);
  const [showTranslated, setshowTranslated] = useState(false);
  const [shotOriginalWorkshow, setshotOriginalWorkshow] = useState(false);
  const [MTL, setMTL] = useState(false);

  const handleRadioChange = (id) => {
    // setIsChecked(!isChecked);
    console.log("id", id);
    if (id === isChecked) {
      setIsChecked(null);
      alert("hello");
      return;
    } else if (id == 0) {
      setshotOriginalWorkshow(false);
      setMTL(false);

      setshowTranslated(true);
    } else if (id == 1) {
      setshotOriginalWorkshow(true);
      setMTL(false);
      setshowTranslated(false);
    } else if (id == 2) {
      setMTL(true);
      setshotOriginalWorkshow(false);
      setshowTranslated(false);
    }
  };
  return (
    <UserLayout>
      <section class="inner__hero-sec jost-font">
        <div className="container">
          <div className="row">
            <div className="herro__title">
              <h1 className="typewriter"> BOOK NAME </h1>
            </div>
          </div>
        </div>
      </section>
      <section className="novinfo">
        <div className="container">
          <div className="row ">
            <div className="col-md-12">
              <div className="general_discussion_row">
                <div>
                  <ul class="nav nav-pills mb-3 discussion_tab_border">
                    <li class="nav-item" role="presentation">
                      <button class="nav-link discussion_tab_links active">
                        Drafts
                      </button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button class="nav-link discussion_tab_links ">
                        Published
                      </button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button class="nav-link discussion_tab_links">
                        Trash Bin
                      </button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button class="nav-link discussion_tab_links">
                        Info Settings
                      </button>
                    </li>
                  </ul>
                </div>

                <button class="create_chap_btn">Create Chapters</button>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div className="row mt-3">
            <div className="col-md-12">
              {/* <h1 className="novel">NOVEL INFORMATION</h1> */}
              <div className="create_detail_bg">
                <h4 className="create_detail_text">CREATE DETAILS</h4>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="spacing">
            <div className="row new_create_request_row_direction">
              <div className="col-lg-3 col-md-4">
                <div className="bookform">
                  <h1 className="upload_cover_heading">Upload Cover</h1>
                  <img className="img-fluid nvlbk" src={novelbook} />
                  <form action="">
                    <div class="form-group">
                      <label
                        for="login_form_email"
                        class="email_label form-name"
                      >
                        Name *{" "}
                      </label>
                      <div class="input_with_icon">
                        <input
                          type="text"
                          class="form-control form_email_field f-ph"
                          id="login_form_email"
                          aria-describedby="emailHelp"
                          placeholder="Within 70 Words"
                          required
                        />
                      </div>
                    </div>

                    <div className="btnmain new_btnmain_input">
                      {/* <input type="file" class="updatebtn new_input_tag" placeholder='Upload' /> */}
                      <span className="ms-4">
                        <input
                          type="file"
                          id="inputFile"
                          name="image"
                          style={{ display: "none" }}
                        />
                        <label className="updatebtn" htmlFor="inputFile">
                          Upload
                        </label>
                      </span>
                    </div>
                  </form>
                </div>
              </div>

              <div className="col-lg-9 col-md-8">
                <div className="addsyn">
                  <h2 className="add">ADD SYNOPSIS</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="spacing">
            <div className="row">
              <div className="col-md-8">
                <h4 className="book-release-title">Select Book Genre</h4>
                <div className="book-release-genre-dropdowns mt-4 gap-3 bookGenree ">
                  {genres?.map((datacall) => (
                    <span className="book-release-genree">
                      {datacall.title}
                    </span>
                  ))}
                </div>
              </div>
              {/* <div className='col-md-2'>

                            </div> */}
              <div className="col-md-4">
                <h4 className="book-release-title"> Maturity Rating </h4>

                <Form.Select
                  aria-label="Default select example"
                  className="book-releasee-inputs"
                >
                  <option>Select Maturity Rating</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </div>
            </div>
          </div>
          <div className="spacing">
            <div className="row">
              <div className="col-md-6">
                <h4 className="book-release-title">Type</h4>
                <div className=" radbtns   mt-3  ">
                  <span className="filter_radioo  gap-2  d-flex ">
                    {" "}
                    <input
                      type="radio"
                      name="exampleRadiosss"
                      id="exampleRadios011"
                    />
                    <p className="   ">Web Novel</p>
                  </span>

                  <span className="filter_radioo gap-2  d-flex ">
                    {" "}
                    <input
                      type="radio"
                      name="exampleRadiosss"
                      id="exampleRadios012"
                    />
                    <p className="   "> Light Novel </p>
                  </span>
                  <span className="filter_radioo gap-2  d-flex ">
                    {" "}
                    <input
                      type="radio"
                      name="exampleRadiosss"
                      id="exampleRadios012"
                    />
                    <p className="   "> Manga </p>
                  </span>
                </div>
              </div>

              <div className="col-md-6  ">
                <h4 className="book-release-title">Category</h4>

                <div className=" radbtns   mt-3  ">
                  <span className="filter_radioo gap-2 d-flex">
                    {" "}
                    <input
                      checked={isChecked}
                      onClick={() => handleRadioChange(0)}
                      type="radio"
                      name="categories"
                      id="categories01"
                    />
                    <label for="categories01" className="">
                      Translated
                    </label>
                  </span>

                  <span className="filter_radioo gap-2  d-flex ">
                    {" "}
                    <input
                      type="radio"
                      name="categories"
                      id="ecategories02"
                      onClick={() => handleRadioChange(1)}
                    />
                    <label for="ecategories02" className="ecategories02 ">
                      {" "}
                      Original Work{" "}
                    </label>
                  </span>
                  <span className="filter_radioo gap-2  d-flex ">
                    {" "}
                    <input
                      type="radio"
                      name="categories"
                      id="categories03"
                      onClick={() => handleRadioChange(2)}
                    />
                    <label for="categories03" className="">
                      {" "}
                      MTL{" "}
                    </label>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="spacing">
            <div className="row">
              <div className="col-md-12">
                <h4 className="book-release-title">Original Language</h4>
                <div className=" radbtns  mt-3  ">
                  {languagelist?.map((languagename) => (
                    <span className="filter_radioo  gap-2  d-flex ">
                      {" "}
                      <input
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios01"
                      />
                      <p className="   ">{languagename.name}</p>
                    </span>
                  ))}
                  {/* <span className="filter_radioo gap-2  d-flex ">
                                        {" "}
                                        <input type="radio" name="exampleRadios" id="exampleRadios02" />
                                        <p className="   "> Japanese </p>
                                    </span>
                                    <span className="filter_radioo  gap-2  d-flex  " >
                                        {" "}
                                        <input type="radio" name="exampleRadios" id="exampleRadios03" />
                                        <p className="   ">Malaysian</p>
                                    </span>
                                    <span className="filter_radioo  gap-2  d-flex ">
                                        {" "}
                                        <input type="radio" name="exampleRadios" id="exampleRadios04" />
                                        <p className="   ">Thai</p>
                                    </span>
                                    <span className="filter_radioo  gap-2  d-flex ">
                                        {" "}
                                        <input type="radio" name="exampleRadios" id="exampleRadios05" />
                                        <p className="   ">Khmer</p>
                                    </span>
                                    <span className="filter_radioo  gap-2  d-flex ">
                                        {" "}
                                        <input type="radio" name="exampleRadios" id="exampleRadios06" />
                                        <p className="   ">Filipino</p>
                                    </span>
                                    <span className="filter_radioo  gap-2  d-flex ">
                                        {" "}
                                        <input type="radio" name="exampleRadios" id="exampleRadios07" />
                                        <p className="   ">Indonesian</p>
                                    </span>
                                    <span className="filter_radioo  gap-2  d-flex ">
                                        {" "}
                                        <input type="radio" name="exampleRadios" id="exampleRadios08" />
                                        <p className="   ">Korean</p>
                                    </span>
                                    <span className="filter_radioo  gap-2  d-flex ">
                                        {" "}
                                        <input type="radio" name="exampleRadios" id="exampleRadios09" />
                                        <p className="   ">Other</p>
                                    </span> */}
                </div>
              </div>
            </div>
          </div>
          <div className="spacing">
            <div className="row">
              <div className="col-md-4">
                <h4 className="book-release-title">Author Name</h4>
                <input
                  type="text"
                  placeholder="Type Author Name Here"
                  className="book-releasee-input"
                />
              </div>
              <div className="col-md-4">
                <h4 className="book-release-title space">Number of chapters</h4>
                <Form.Select
                  aria-label="Default select example"
                  className="book-releasee-input mt-4"
                >
                  <option>Select Number Of chapters</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </div>
              <div className="col-md-4">
                <h4 className="book-release-title space">Original Publisher</h4>
                <Form.Select
                  aria-label="Default select example"
                  className="book-releasee-input mt-4"
                >
                  <option>Select Original Publisher</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </div>
            </div>
          </div>
          <div className="spacing">
            <div className="row">
              <div className="col-md-4">
                <h4 className="book-release-title">Story Status </h4>
                <Form.Select
                  aria-label="Default select example"
                  className="book-releasee-input mt-4"
                >
                  <option>Completed</option>
                  <option value="1">Incompleted</option>
                </Form.Select>
              </div>
              <div className="col-md-4">
                <h4 className="book-release-title space">Series</h4>
                <input
                  type="text"
                  placeholder="Type to search English Publisher"
                  className="book-releasee-input"
                />
              </div>

              <div className="col-md-4">
                <h4 className="book-release-title space">
                  Tags (Select At least 3)
                </h4>
                <Form.Select
                  aria-label="Default select example"
                  className="book-releasee-input mt-4"
                >
                  <option>Select Tags</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </div>
            </div>
          </div>

          <div className="spacing">
            <div className="row">
              {showTranslated && (
                <>
                  <div className="col-md-4">
                    <h4 className="book-release-title space">Translator</h4>
                    <input
                      type="text"
                      placeholder="Type to search English Publisher"
                      className="book-releasee-input"
                    />
                  </div>
                  <div className="col-md-4">
                    <h4 className="book-release-title space">
                      Affiliated Group
                    </h4>
                    <input
                      type="text"
                      placeholder="Type to search English Publisher"
                      className="book-releasee-input"
                    />
                  </div>{" "}
                </>
              )}

              {shotOriginalWorkshow && (
                <div className="col-md-4">
                  <h4 className="book-release-title space">Affiliated Group</h4>
                  <input
                    type="text"
                    placeholder="Type to search English Publisher"
                    className="book-releasee-input"
                  />
                </div>
              )}

              {MTL && (
                <>
                  <div className="col-md-4">
                    <h4 className="book-release-title space">
                      Affiliated Group
                    </h4>
                    <input
                      type="text"
                      placeholder="Type to search English Publisher"
                      className="book-releasee-input"
                    />
                  </div>{" "}
                  <div className="col-md-4">
                    <h4 className="book-release-title space">MTL Editor</h4>
                    <input
                      type="text"
                      placeholder="Type to search English Publisher"
                      className="book-releasee-input"
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </UserLayout>
  );
};
