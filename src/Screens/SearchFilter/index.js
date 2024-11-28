import { React, useState, useEffect } from "react";
import "./style.css";
import { UserLayout } from "../../Components/Layout/UserLayout";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import RangeSlider from "react-bootstrap-range-slider";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faSearch, faStar } from "@fortawesome/free-solid-svg-icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aos from "aos";
import "aos/dist/aos.css";
export const SearchFilter = () => {
  const [ads, setAds] = useState([]);
  const [books, setBooks] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const base_url = "https://custom.mystagingserver.site/Tim-WDLLC/public/";
  const [value, setValue] = useState(25);
  const GenreData = () => {
    document.querySelector(".loaderBox").classList.remove("d-none");
    fetch(
      "https://custom.mystagingserver.site/Tim-WDLLC/public/api/genre_listing"
    )
      .then((response) => response.json())
      .then((data) => {
        document.querySelector(".loaderBox").classList.add("d-none");

        setGenres(data.data);
      })
      .catch((error) => {
        document.querySelector(".loaderBox").classList.add("d-none");
        console.error("Error fetching data: ", error);
      });
  };

  useEffect(() => {
    GenreData();
    Aos.init();
  }, []);
  return (
    <>
      {/* Header */}

      {/* Hero Section */}
      <UserLayout>
        <sectionc class="inner__hero-sec jost-font">
          <div className="container">
            <div className="row">
              <div className="herro__title">
                <h1 className="typewriter">SEARCH FILTERS</h1>
              </div>
            </div>
          </div>
        </sectionc>

        <section className="search-filter">
          <div className="container">
            <div className=" row mt-5 ">
              <div className="col-md-12 mb-5 ">
                <p className="search-title">Type</p>
                <div className=" gap-5 mt-3 radbtns">
                  <span className="filter_radio  gap-2  d-flex ">
                    {" "}
                    <input type="radio" name="novelname" id="webNovel" />
                    <label className="webNovel" for="webNovel">
                      Web Novel
                    </label>
                  </span>

                  <span className="filter_radio  gap-2  d-flex ">
                    {" "}
                    <input type="radio" name="novelname" id="lightNovel" />
                    <label className="" for="lightNovel">
                      Light Novel
                    </label>
                  </span>
                  <span className="filter_radio  gap-2  d-flex ">
                    {" "}
                    <input type="radio" name="novelname" id="manga" />
                    <label className="" for="manga">
                      Manga
                    </label>
                  </span>
                </div>
              </div>

              <div className="col-md-12 mb-5 ">
                <p className="search-title"> Original Language</p>
                <div className=" radbtns gap-5 mt-3  ">
                  <span className="filter_radio  gap-2  d-flex ">
                    {" "}
                    <input type="radio" name="languagename" id="english" />
                    <label className="" for="english">
                      English
                    </label>
                  </span>

                  <span className="filter_radio  gap-2  d-flex ">
                    {" "}
                    <input type="radio" name="languagename" id="japanese" />
                    <label className="" for="japanese">
                      Japanese{" "}
                    </label>
                  </span>
                  <span className="filter_radio  gap-2  d-flex ">
                    {" "}
                    <input type="radio" name="languagename" id="malaysian" />
                    <label className="" for="malaysian">
                      Malaysian
                    </label>
                  </span>

                  <span className="filter_radio gap-2 d-flex ">
                    {" "}
                    <input type="radio" name="languagename" id="thai" />
                    <label className="" for="thai">
                      Thai
                    </label>
                  </span>
                  <span className="filter_radio  gap-2  d-flex ">
                    {" "}
                    <input type="radio" name="languagename" id="khmer" />
                    <label className="" for="khmer">
                      Khmer
                    </label>
                  </span>
                  <span className="filter_radio gap-2  d-flex ">
                    {" "}
                    <input type="radio" name="languagename" id="filipino" />
                    <label className="" for="filipino">
                      Filipino
                    </label>
                  </span>
                  <span className="filter_radio  gap-2  d-flex ">
                    {" "}
                    <input type="radio" name="languagename" id="indonesian" />
                    <label className="" for="indonesian">
                      Indonesian
                    </label>
                  </span>
                  <span className="filter_radio  gap-2  d-flex ">
                    {" "}
                    <input type="radio" name="languagename" id="korean" />
                    <label className="" for="korean">
                      Korean
                    </label>
                  </span>
                  <span className="filter_radio  gap-2  d-flex ">
                    {" "}
                    <input type="radio" name="languagename" id="other" />
                    <label className="" for="other">
                      Other
                    </label>
                  </span>
                </div>
              </div>

              <div className="col-md-12 mb-5 ">
                <p className="search-title">Category</p>
                <div className=" radbtns  gap-5 mt-3  ">
                  <span className="filter_radio  gap-2  d-flex ">
                    {" "}
                    <input type="radio" name="categoryname" id="translate" />
                    <label className="" for="translate">
                      Translated{" "}
                    </label>
                  </span>

                  <span className="filter_radio  gap-2  d-flex ">
                    {" "}
                    <input type="radio" name="categoryname" id="mtl" />
                    <label className="" for="mtl">
                      {" "}
                      MTL
                    </label>
                  </span>
                  <span className="filter_radio  gap-2  d-flex ">
                    {" "}
                    <input type="radio" name="categoryname" id="orignalWork" />
                    <label className="" for="orignalWork">
                      Original Work
                    </label>
                  </span>
                </div>
              </div>

              <div className="row mb-5">
                {/* <p>Select Chapter Range</p> */}
                <Form>
                  <Form.Group as={Row}>
                    <Col xs="3">
                      <p className="rangepara">Select Chapter Range</p>
                    </Col>
                    <Col xs="6">
                      <RangeSlider
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                      />
                    </Col>
                    <Col xs="3">
                      <p className="chapterrange">Chapters</p>
                    </Col>
                  </Form.Group>
                </Form>
              </div>

              <div className="row mb-5">
                {/* <p>Select Chapter Range</p> */}
                <Form>
                  <Form.Group as={Row}>
                    <Col xs="3">
                      <p className="rangepara"> Release Frequency </p>
                    </Col>
                    <Col xs="6">
                      <RangeSlider
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                      />
                    </Col>
                    <Col xs="3">
                      <p className="chapterrange">Frequency</p>
                    </Col>
                  </Form.Group>
                </Form>
              </div>

              <div className="row mb-5">
                {/* <p>Select Chapter Range</p> */}
                <Form>
                  <Form.Group as={Row}>
                    <Col xs="3">
                      <p className="rangepara"> Select Reviews Range </p>
                    </Col>
                    <Col xs="6">
                      <RangeSlider
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                      />
                    </Col>
                    <Col xs="3">
                      <p className="chapterrange">Reviews</p>
                    </Col>
                  </Form.Group>
                </Form>
              </div>

              <div className="row mb-5">
                {/* <p>Select Chapter Range</p> */}
                <Form>
                  <Form.Group as={Row}>
                    <Col xs="3">
                      <p className="rangepara"> Select Book Rating </p>
                    </Col>
                    <Col xs="6">
                      <RangeSlider
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                      />
                    </Col>
                    <Col xs="3">
                      <p className="chapterrange">Rating</p>
                    </Col>
                  </Form.Group>
                </Form>
              </div>

              <div className="row mb-5">
                <Form>
                  <Form.Group as={Row}>
                    <Col xs="3">
                      <p className="rangepara"> Number of Rating </p>
                    </Col>
                    <Col xs="6">
                      <RangeSlider
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                      />
                    </Col>
                    <Col xs="3">
                      <p className="chapterrange">Rating</p>
                    </Col>
                  </Form.Group>
                </Form>
              </div>

              <div className="row mb-5">
                <Form>
                  <Form.Group as={Row}>
                    <Col xs="3">
                      <p className="rangepara"> Number of Readers </p>
                    </Col>
                    <Col xs="6">
                      <RangeSlider
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                      />
                    </Col>
                    <Col xs="3">
                      <p className="chapterrange">Readers</p>
                    </Col>
                  </Form.Group>
                </Form>
              </div>
              <div className="col-md-4">
                <p className="book-release-title mb-2 ">
                  Select Book Release Date
                </p>
                <div className=" d-flex flex-wrap mb-5 mt-4 gap-2  ">
                  {/* <span className="book-release-date">8/56/2012</span> */}
                  <input
                    type="date"
                    id="bookSelect"
                    name="bookSelect"
                    className="book-release-date"
                  />
                  <input
                    type="date"
                    id="bookSelect"
                    name="bookSelect"
                    className="book-release-date"
                  />
                </div>
              </div>

              <div className="col-md-8">
                <h4 className="book-release-title">Select Book Genre</h4>
                <div className="genre-dropdowns_search_filter mt-4 gap-3 bookGenree mb-3">
                  {genres?.map((datacall) => (
                    <span className="book-release-genree">
                      {datacall.title}
                    </span>
                  ))}
                </div>
              </div>

              <div className="col-md-8">
                <div className="row">
                  <div className="mb-2 gap-5 col-md-6">
                    <p className="book-release-title mb-4 ">
                      Tags [ <span className="book-release-date">OR</span> ]
                    </p>
                    <input
                      type="text"
                      placeholder="Include"
                      className="book-release-input "
                    />
                  </div>
                  <div className=" mb-2 gap-4 col-md-6">
                    <p className="book-release-title">Story Status </p>

                    <Form.Select
                      aria-label="Default select example"
                      className="book-release-input mt-4"
                    >
                      <option>Open this select menu</option>
                      <option value="1">Completed</option>
                      <option value="2">Incompleted</option>
                    </Form.Select>
                  </div>
                  <div className="d-flex mb-5 gap-4 col-md-6">
                    <Form.Select
                      aria-label="Default select example"
                      className="book-release-input"
                    >
                      <option>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </div>
                </div>

                <div className=" mb-4  row">
                  <div className="mb-2 gap-5 col-md-6 ">
                    <p className="book-release-title mb-2 ">
                      Group{" "}
                      <span className="include_seprate_text">Include</span>
                    </p>

                    <Form.Select
                      aria-label="Default select example"
                      className="book-release-input"
                    >
                      <option>Type To Search Group Database</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </div>
                  <div className="mb-2 gap-4 col-md-6">
                    <p className="book-release-title  mb-2">
                      {" "}
                      Original Publisher{" "}
                      <span className="include_seprate_text">Include</span>
                    </p>
                    {/* <input
                      type="text"
                      placeholder="Include"
                      className="book-release-input"
                    /> */}
                    <Form.Select
                      aria-label="Default select example"
                      className="book-release-input"
                    >
                      <option>Type To Search Group Database</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </div>
                </div>
                <div className="mb-4 row">
                  <div className="mb-2 gap-5 col-md-6">
                    <p className="book-release-title mb-2 ">
                      Translator{" "}
                      <span className="include_seprate_text">Include</span>{" "}
                    </p>
                    <input
                      type="text"
                      placeholder="Type To Search English Publisher"
                      className="book-release-input"
                    />
                  </div>
                  <div className="mb-2 gap-4 col-md-6">
                    <p className="book-release-title  mb-2"> Series </p>
                    <input
                      type="text"
                      placeholder="Type To Search English Publisher"
                      className="book-release-input"
                    />
                  </div>
                </div>

                <div className="  mb-4 row">
                  <div className="mb-2 gap-5 col-md-6">
                    <p className="book-release-title mb-2 ">
                      Search Results By..
                    </p>

                    <Form.Select
                      aria-label="Default select example"
                      className="book-release-input"
                    >
                      <option>Last Updated</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </div>
                  <div className="mb-2 gap-4 col-md-6">
                    <p className="book-release-title  mb-2"> Author </p>
                    <input
                      type="text"
                      placeholder="Type To Search Group Database"
                      className="book-release-input"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
      </UserLayout>
    </>
  );
};
