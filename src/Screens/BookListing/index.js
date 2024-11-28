import { React, useState, useEffect } from "react";
import "./booklisting.css";
import { UserLayout } from "../../Components/Layout/UserLayout";
import CustomPagination from "../../Components/CustomPagination";
import Form from "react-bootstrap/Form";
import CustomInput from "../../Components/CustomInput";
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
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faList,
  faSearch,
  faStar,
  faUserTag,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aos from "aos";
import "aos/dist/aos.css";

export const BookListing = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [formData, setFormData] = useState({});
  const [books, setBooks] = useState([]);
  const [bookFilter, setBookFilter] = useState();
  const [activeItem, setActiveItem] = useState(null);
  const [categories, setCategores] = useState();
  const [genre, setGenre] = useState();

  const base_url = "https://custom.mystagingserver.site/Tim-WDLLC/public/";
  const LoginToken = localStorage.getItem("loginUser");

  console.log("categories img", categories);

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
        setBookFilter(data.data);
      })
      .catch((error) => {
        document.querySelector(".loaderBox").classList.add("d-none");
        console.log(error);
      });
  };

  const BookListingUser = () => {
    document.querySelector(".loaderBox").classList.remove("d-none");
    fetch(
      "https://custom.mystagingserver.site/Tim-WDLLC/public/api/user/book_listing",
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${LoginToken}`,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        document.querySelector(".loaderBox").classList.add("d-none");
        console.log(data.data);
        setBooks(data.data);
        setBookFilter(data.data);
      })
      .catch((error) => {
        document.querySelector(".loaderBox").classList.add("d-none");
        console.log(error);
      });
  };

  console.log("categories", categories);
  const genreListing = () => {
    document.querySelector(".loaderBox").classList.remove("d-none");
    fetch(
      "https://custom.mystagingserver.site/Tim-WDLLC/public/api/genre_listing",
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
        setGenre(data.data);
      })
      .catch((error) => {
        document.querySelector(".loaderBox").classList.add("d-none");
        console.log(error);
      });
  };

  const categoryListing = () => {
    document.querySelector(".loaderBox").classList.remove("d-none");
    fetch(
      "https://custom.mystagingserver.site/Tim-WDLLC/public/api/category_listing",
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
        setCategores(data.data);
      })
      .catch((error) => {
        document.querySelector(".loaderBox").classList.add("d-none");
        console.log(error);
      });
  };

  const toggleAccordion = (item) => {
    setActiveItem(activeItem === item ? null : item);
  };

  const filterGenre = (event) => {
    const filterCategory = event.target.value;
    const filteredBooks = bookFilter?.filter(
      (book) => book?.genre_id == filterCategory
    );
    setBooks(filteredBooks);
  };

  const categoryFilter = (catID) => {
    const filteredBooks = bookFilter?.filter(
      (book) => book?.category_id == catID
    );
    setBooks(filteredBooks);
  };

  const priceFilter = (e) => {
    const priceText = e.target.value;
    if (priceText > 0) {
      const filteredBooks = bookFilter?.filter(
        (book) => book?.price == priceText
      );
      setBooks(filteredBooks);
    } else {
      BookListing();
    }
  };

  const ratingFilter = (rating) => {
    const filteredBooks = bookFilter?.filter((book) => book?.rating == rating);
    setBooks(filteredBooks);
  };

  console.log("dad", categories);

  const accordionData = [
    {
      title: "categories",
      items: categories,
    },
    {
      title: "Filter By Price",
      items: ["One", "Two", "Three"],
    },
    {
      title: "By Review",
      items: ["One", "Two", "Three"],
    },
    {
      title: "Featured Books",
      items: ["One", "Two", "Three"],
    },
  ];

  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (LoginToken) {
      BookListingUser();
    } else {
      BookListing();
    }
    genreListing();

    categoryListing();
  }, []);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const filterData = books?.filter((item) =>
    item?.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const bookitems = filterData?.slice(indexOfFirstItem, indexOfLastItem);

  console.log("bookitemItems", bookitems);
  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "search_book") {
      setInputValue(value);
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <UserLayout>
      <section class="inner__hero-sec jost-font">
        <div className="container">
          <div className="row">
            <div className="herro__title">
              <h1 className="typewriter">Book Listing</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="bestselling_books book_listing_new_bg">
        <section className="bestSell__book-sec jost-font">
          <div className="bestSell__book-cartoon1">
            <img src={SmallAnime1} />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="bestSelling__books">
                  <img src={BestSellingBooks} />
                  <div className="bestSell__book-cartoon2">
                    <img src={SmallAnime2} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bestSell__bookListing-sec">
          <div className="bestSell__filters">
            <div className="container">
              <div className="row align-items-center justify-content-center">
                <div className="col-lg-5 col-md-6 col-sm-12  ">
                  <div className="filters__tabs">
                    <div className=" gap-3 radbtns booklisting_radbtns">
                      <span className="filter_radio_booklisting  gap-2  d-flex ">
                        {" "}
                        <input type="radio" name="novelnames"  id="webNobel"/>
                        <label className="" for="webNobel">Web Novel</label>
                        {/* <p className="">Web Novel</p> */}
                      </span>

                      <span className="filter_radio_booklisting  gap-2  d-flex ">
                        {" "}
                        <input type="radio" name="novelnames" id="lightNovel"/>
                        <label className="" for="lightNovel" >Light Novel</label>
                      </span>
                      <span className="filter_radio_booklisting  gap-2  d-flex ">
                        {" "}
                        <input type="radio" name="novelnames" id="manga" />
                        <label className="" for="manga">Manga</label>
                      </span>
                    </div>
                  </div>
                </div>

                {/* <div className="col-lg-3 col-md-3 col-sm-12">
                  <div className="filters__category">
                   
                     <Form.Select
                      aria-label="Default select example"
                      className="form-select "
                    >
                      <option>Category</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>

                

                  </div>
                </div>  */}

                {/* <div className="col-lg-3 col-md-3 ">
                  <div className="filters__pricing">
                   
                    <CustomInput                
                      type="number"
                      placeholder="Enter Price"
                      name="name"
                      labelClass="mainLabel"
                      inputClass="filters__category_price  "
                      onChange={priceFilter}
                    />
                  </div>
                </div> */}

                <div className="col-lg-7 col-md-6 col-sm-12 radbtns_space">
                  <div className="filters__search">
                    <div class="input-group">
                      <button
                        className="btn btn-outline-secondary filters__search-icon"
                        type="button"
                        id="button-addon1"
                      >
                        <FontAwesomeIcon icon={faSearch} />
                      </button>
                      <input
                        value={inputValue}
                        name="search_book"
                        onChange={handleChange}
                        type="text"
                        className="form-control filters__search-input"
                        placeholder="Search book By Name, Author Name"
                        aria-describedby="button-addon1"
                      />

                      <div className="filters__category_two">
                        <Form.Select
                          aria-label="Default select example"
                          className="form-select new_filter_select "
                        >
                          {/* <FontAwesomeIcon icon={faChevronDown}  className="color_down"/> */}

                          <option>Filter By</option>
                          <option value="1">Price</option>
                          <option value="2">Genre</option>
                          <option value="3">Author Name</option>
                        </Form.Select>
                      </div>

                      <button
                        className="btn btn-outline-secondary filters__search-btn"
                        type="button"
                        id="button-addon2"
                      >
                        Search
                      </button>
                    </div>
                  </div>
                </div>

                {/* <div className="col-lg-4 col-sm-12 col-md-5">
                 <div className="filters__search">
                    <div class="input-group">
                      <button
                        className="btn btn-outline-secondary filters__search-icon"
                        type="button"
                        id="button-addon1"
                      >
                        <FontAwesomeIcon icon={faSearch} />
                      </button>
                      <input
                        value={inputValue}
                        name="search_book"
                        onChange={handleChange}
                        type="text"
                        className="form-control filters__search-input"
                        placeholder="Search book By Name, Author Name"
                        aria-describedby="button-addon1"
                      />
                      <button
                        className="btn btn-outline-secondary filters__search-btn"
                        type="button"
                        id="button-addon2"
                      >
                        Search
                      </button>
                    </div>
                  </div>
                </div> */}
              </div>
              <div className="bestBooks__listing">
                <div className="row">
                  {bookitems &&
                    bookitems?.map((item, index) => (
                      <div className="col-lg-3 col-md-4 ">
                        <div className="bestBooks__list">
                          <div className="bestBooks__list-img">
                            <img
                              src={base_url + item?.image}
                              id="bestsellingimg"
                            />
                            <div className="bestBooks__list-overlay">
                              <Link
                                to={`/book-detail/${item?.id}`}
                                className="bestBooks__purchase-btn"
                              >
                                View
                              </Link>
                            </div>
                          </div>
                          <div className="bestBooks__list-body">
                            <h3 className="bestBooks__list-title">
                              {item?.name}
                            </h3>
                            <p className="bestBooks__list-text">
                              Lorem Ipsum is simply dummy text{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
              <div className="row">
                <div className="book__listing-pagination">
                  <nav aria-label="Page navigation example">
                    <CustomPagination
                      itemsPerPage={itemsPerPage}
                      totalItems={books.length}
                      currentPage={bookitems}
                      onPageChange={handlePageChange}
                    />
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* Footer */}
    </UserLayout>
  );
};
