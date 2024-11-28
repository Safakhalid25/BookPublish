import { React, useState, useEffect } from "react";
import { UserLayout } from "../../Components/Layout/UserLayout";
import { BookListingCover } from "../../Assets/images";
import { Accordion, Dropdown } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import CustomInput from "../../Components/CustomInput";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
export const ProductListing = () => {
  const [books, setBooks] = useState([]);
  const [bookFilter, setBookFilter] = useState();
  const [activeItem, setActiveItem] = useState(null);
  const [categories, setCategores] = useState();
  const [genre, setGenre] = useState();
  const base_url = "https://custom.mystagingserver.site/Tim-WDLLC/public/";
  const LoginToken = localStorage.getItem("loginUser");

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

  useEffect(() => {
    if (LoginToken) {
      BookListingUser();
    } else {
      BookListing();
    }
    genreListing();
    categoryListing();
  }, []);

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

  return (
    <UserLayout subHeader={BookListingCover}>
      <section className="book_listing_main_wrap listingBooks">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="book_listing_popular_filter">
                <div id="accordion" className="filter_accordian">
                  <div className="card">
                    <div className="card-header">
                      <h4>Filter:</h4>
                    </div>
                  </div>
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Filter By Categories</Accordion.Header>
                      <Accordion.Body>
                        <div className="card-body">
                          <ul>
                            {categories?.map((subItem, subIndex) => (
                              <li key={subIndex}>
                                <a
                                  href="javascript:;"
                                  value={subItem?.id}
                                  onClick={() => {
                                    categoryFilter(subItem?.id);
                                  }}
                                >
                                  {subItem?.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>

                  <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Filter By Price</Accordion.Header>
                      <Accordion.Body>
                        <div className="card-body">
                          <ul>
                            <li>
                              <CustomInput
                                label="Enter Price"
                                type="number"
                                placeholder="Enter Price"
                                name="name"
                                labelClass="mainLabel"
                                inputClass="mainInput"
                                onChange={priceFilter}
                              />
                            </li>
                          </ul>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Filter By Rating</Accordion.Header>
                      <Accordion.Body>
                        <div className="card-body">
                          <ul>
                            <li>
                              <ReactStars
                                count={5}
                                onChange={ratingFilter}
                                size={24}
                                activeColor="#ffd700"
                              />
                            </li>
                          </ul>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>

              <div className="popular_listing_books">
                <h4>Most Popular Books</h4>
                <div className="popular_book_card">
                  <div className="img_div">
                    <img
                      src="./images/p_img_1.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <h4>Book Name Goes Here</h4>
                  <h5>
                    $23.00 <span>$28.00</span>
                  </h5>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing &
                    typesetting industry lorem Ipsum has been the industry's
                    standard. like Aldus PageMaker including versions of Lorem
                    Ipsum.
                  </p>
                </div>
                <div className="popular_book_card">
                  <div className="img_div">
                    <img
                      src="./images/p_img_2.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <h4>Book Name Goes Here</h4>
                  <h5>
                    $23.00 <span>$28.00</span>
                  </h5>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing &
                    typesetting industry lorem Ipsum has been the industry's
                    standard. like Aldus PageMaker including versions of Lorem
                    Ipsum.
                  </p>
                </div>
                <div className="popular_book_card">
                  <div className="img_div">
                    <img
                      src="./images/p_img_3.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <h4>Book Name Goes Here</h4>
                  <h5>
                    $23.00 <span>$28.00</span>
                  </h5>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing &
                    typesetting industry lorem Ipsum has been the industry's
                    standard. like Aldus PageMaker including versions of Lorem
                    Ipsum.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <div className="popular_tabing">
                <Row className="justify-content-between d-flex w-100 tabing_top ">
                  <div className="col-md-4">
                    <h4>Popular By Genre</h4>
                  </div>
                  <div className="col-md-8">
                    <ul
                      className="nav nav-pills mb-3 justify-content-end"
                      id="pills-tab"
                      role="tablist"
                    >
                      {genre &&
                        genre.map((item, index) => (
                          <li className="nav-item" key={index}>
                            <button
                              className="nav-link text-black p-2"
                              value={item?.id}
                              onClick={filterGenre}
                            >
                              {item?.name}
                            </button>
                          </li>
                        ))}
                    </ul>
                  </div>
                </Row>
                <div className="row popular_tabing mt-5">
                  {books &&
                    books.map((item, index) => (
                      <Col xl={6} md={6}>
                        <Link to={`/book-detail/${item?.id}`}>
                          <div className="tab_card">
                            <div className="row">
                              <div className="col-md-4">
                                <div className="book_logo">
                                  <img
                                    src={base_url + item?.image}
                                    className="img-fluid"
                                    alt=""
                                  />
                                </div>
                              </div>
                              <div className="col-md-8">
                                <div className="content">
                                  <div className="cardHeader">
                                    <h4>{item?.name}</h4>
                                    <div className="dots_dropdown">
                                      <Dropdown className="tableDropdown">
                                        <Dropdown.Toggle
                                          variant="transparent"
                                          className="notButton classicToggle"
                                        >
                                          <FontAwesomeIcon icon={faEllipsisV} />
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu
                                          align="end"
                                          className="tableDropdownMenu"
                                        >
                                          <Link
                                            to={`/book-detail/${item?.id}`}
                                            className="tableAction"
                                          >
                                            View
                                          </Link>
                                        </Dropdown.Menu>
                                      </Dropdown>
                                    </div>
                                  </div>
                                  <h5>{`$ ${item?.price || 0}`} </h5>
                                  {item.reviews != 0 && (
                                    <div className="rating_star">
                                      {item?.reviews &&
                                        item?.reviews.map((review, index) => (
                                          <i className="fa-solid fa-star active"></i>
                                        ))}

                                      <span>{item?.reviews?.length}</span>
                                    </div>
                                  )}

                                  <p className="shortDescription">
                                    {item?.description}
                                  </p>
                                  {item?.isPay && (
                                    <p className="text-success">Free</p>
                                  )}
                                </div>
                              </div>
                              <div className="col-md-12 p-0">
                                <div className="tab_card_bottom">
                                  <div className="user_img">
                                    <img
                                      src="./images/user_img.png"
                                      className="img-fluid"
                                      alt=""
                                    />
                                  </div>
                                  <div className="user_name">
                                    <h5>
                                      Micheal James{" "}
                                      <span>Last Added In Library</span>
                                    </h5>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </Col>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </UserLayout>
  );
};
