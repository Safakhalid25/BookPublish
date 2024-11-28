import { useState, useEffect } from "react";
import { Link, json, useParams } from "react-router-dom";
import dropdown from "../../Assets/images/dropdown.png";
import comments_profile from "../../Assets/images/comments_profile.png";
import line_timer from "../../Assets/images/line_timer.png";
import arrow_right from "../../Assets/images/arrow_right.png";
import add_comments from "../../Assets/images/add_comments.png";
import recent_msg from "../../Assets/images/recent_msg.png";
import huru from "../../Assets/images/huru.png";
import me from "../../Assets/images/me.png";
import active from "../../Assets/images/active.png";
import appy from "../../Assets/images/appy.png";
import online from "../../Assets/images/online.png";
import laverna from "../../Assets/images/laverna.png";
import club from "../../Assets/images/club.png";
import msg from "../../Assets/images/msg.png";
import startconversation from "../../Assets/images/start conversation.png";
import storyarrow from "../../Assets/images/story_arrow.png";
import noti from "../../Assets/images/noti.png";
import msgicon1 from "../../Assets/images/msgicon1.png";
import recentpostiocn from "../../Assets/images/recentpostiocn.png";
import Group1000002083 from "../../Assets/images/Group1000002083.png";
import Trashcan from "../../Assets/images/Trashcan.png";
import Vote from "../../Assets/images/Vote.png";
import profileicon1 from "../../Assets/images/profileicon1.png";
import newimgbook from "../../Assets/images/newimgbook.png";
import completeform from "../../Assets/images/completeform.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// const gifUrl = '../../Assets/images/completeform.gif';
import {
  BannerBooks,
  Cart_icon_pink,
  CompletedNovelB1,
  CompletedNovelB2,
  CompletedNovelB3,
  CompletedNovelB4,
  FeaturedB1,
  FeaturedB2,
  FeaturedB3,
  HarryPotterBook,
  Logo,
  ManaAnime,
  ManaDisplayImg,
  MyRebbetsBook,
  PopularAnime,
  PopularTagAfter,
  PopularTagBefore,
  Product_Icon,
  User_icon_pink,
  User_icon_plus,
  User_icon_white,
} from "../../Assets/images";
import Ellipse4 from "../../Assets/images/Ellipse 44.png";
import star_button from "../../Assets/images/star_button.png";
import { UserLayout } from "../../Components/Layout/UserLayout";
import "./style.css";
import {
  faArrowRight,
  faCartShopping,
  faEnvelope,
  faEye,
  faHeart,
  faList,
  faSearch,
  faStar,
  faUser,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aos from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Make sure to import Bootstrap CSS
import Ellipse from "../../Assets/images/Ellipse 1.png";
import animated from "../../Assets/images/animated.png";
import Form from "react-bootstrap/Form";
import { Container, Row, Col } from "react-bootstrap";
import Star from "../../Assets/images/Star 1.png";
import addfriend from "../../Assets/images/add_friend.png";
import showmoreicon from "../../Assets/images/showmoreicon.png";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import AccordionContext from "react-bootstrap/AccordionContext";
import { BookListingCover } from "../../Assets/images";
import { useContext } from "react";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import ReactStars from "react-rating-stars-component";

export const Ranking = ({ eventKey, children }) => {
  const { activeEventKey } = useContext(AccordionContext);
  const [data, setData] = useState({});
  const [inputValue, setInputValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const [books, setBooks] = useState([]);
  const [showGif, setShowGif] = useState(false);
  const handleClick = () => {
    setShowGif((prevShowGif) => !prevShowGif);
  };
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const filterData = data?.chapters?.filter((item) =>
    item?.name?.toLowerCase().includes(inputValue.toLowerCase())
  );
  const currentItems = filterData?.slice(indexOfFirstItem, indexOfLastItem);
  console.log("currentItems", currentItems);
  const { id } = useParams();
  const base_url = "https://custom.mystagingserver.site/Tim-WDLLC/public/";

  const [reviewData, setReviewData] = useState({
    book_id: id,
  });
  const [showcomments, setShowComments] = useState(false);
  const [chaptervoice, setChapterVoice] = useState(1);
  const [chapterutterance, setChapterUtterance] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showModal1, setShowModal1] = useState(false);
  const [formData, setFormData] = useState({});
  const [modalData, setModalData] = useState({});
  const [CapterShow, setChapterShow] = useState(false);
  const [reviewModal, setReviewModal] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [currentChapter, setCurrentChapter] = useState(null);
  const [isLooping, setIsLooping] = useState(false);
  const [isPlay, setIsPlay] = useState(false);
  const [isPause, setIsPause] = useState(false);
  const [voice, setVoice] = useState(1);
  const [utterance, setUtterance] = useState(null);
  const LoginToken = localStorage.getItem("loginUser");
  const [textToSpeech, setTextToSpeech] = useState(false);
  const handleCheckboxChange = () => {
    setTextToSpeech(!textToSpeech);
  };

  const PaymentModal = (amount) => {
    setModalData(amount);
    setShowModal(true);
  };

  useEffect(() => {
    console.log(modalData);
  }, [modalData]);


  const tags = [
    ["Tag ", "Tag ", "Tag "],
    ["Tag ", "Tag ", "Tag "],
    ["Tag ", "Tag ", "Tag "],
  ];

  const handleStart = (chapterId) => {
    if (!isPlaying) {
      const chapter = data?.chapters.find((item) => item.id === chapterId);
      const utterance = new SpeechSynthesisUtterance();
      utterance.text = chapter?.description;
      utterance.rate = chaptervoice;
      utterance.onend = () => {
        if (isLooping) {
          handleStart(chapterId);
        } else {
          setIsPlaying(false);
          setIsPaused(false);
          setCurrentChapter(null);
        }
      };

      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(utterance);

      setIsPlaying(true);
      setIsPaused(false);
      setCurrentChapter(chapterId);
      setChapterUtterance(utterance);
    }
  };
  const [ads, setAds] = useState([]);
  const chapterupdateSpeechRate = () => {
    const speeds = [1, 1.5, 2, 2.5];
    const currentIndex = speeds.indexOf(chaptervoice);
    let newIndex = currentIndex + 1;

    if (newIndex >= speeds?.length) {
      newIndex = 0;
    }

    const newVoice = speeds[newIndex];
    setChapterVoice(newVoice);

    if (chapterutterance) {
      window.speechSynthesis.cancel();
      chapterutterance.rate = newVoice;
      window.speechSynthesis.speak(chapterutterance);

      setIsPlaying(true);
      setIsPaused(false);
    }
  };

  useEffect(() => {
    if (chapterutterance) {
      setChapterUtterance(chapterutterance);
      chapterutterance.rate = chaptervoice;
    }
  }, [chaptervoice]);

  const handlePause = () => {
    if (!isPaused) {
      window.speechSynthesis.pause();
      setIsPaused(true);
      setIsPlaying(false);
    }
  };

  const handleResume = () => {
    if (isPaused && currentChapter !== null) {
      const chapter = data?.chapters.find((item) => item.id === currentChapter);
      const utterance = new SpeechSynthesisUtterance();
      utterance.text = chapter?.description;
      utterance.onend = () => {
        if (isLooping) {
          handleStart(currentChapter);
        } else {
          setIsPlaying(false);
          setIsPaused(false);
          setCurrentChapter(null);
        }
      };
      window.speechSynthesis.resume();
      setIsPlaying(true);
      setIsPaused(false);
    }
  };

  const handleStop = () => {
    window.speechSynthesis.cancel();
    setIsPlaying(false);
    setIsPaused(false);
    setCurrentChapter(null);
  };

  const handleLoopToggle = () => {
    setIsLooping(!isLooping);
  };

  const handleStarts = () => {
    const newUtterance = new SpeechSynthesisUtterance(data?.description);
    newUtterance.rate = voice;
    newUtterance.onend = () => {
      setIsPlay(false);
      setIsPause(false);
    };

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(newUtterance);
    setIsPlay(true);
    setIsPause(false);
    setUtterance(newUtterance);
  };

  const updateSpeechRate = () => {
    const speeds = [1, 1.5, 2, 2.5];
    const currentIndex = speeds.indexOf(voice);
    let newIndex = currentIndex + 1;

    if (newIndex >= speeds?.length) {
      newIndex = 0;
    }

    const newVoice = speeds[newIndex];
    setVoice(newVoice);

    if (utterance) {
      window.speechSynthesis.cancel();
      const updatedUtterance = new SpeechSynthesisUtterance(data?.description);
      updatedUtterance.rate = newVoice;
      updatedUtterance.onend = () => {
        setIsPlay(false);
        setIsPause(false);
      };
      window.speechSynthesis.speak(updatedUtterance);
      setIsPlay(true);
      setIsPause(false);
      setUtterance(updatedUtterance);
    }
  };

  useEffect(() => {
    if (utterance) {
      setUtterance(utterance);
      utterance.rate = voice;
    }
  }, [voice]);

  const handlePauses = () => {
    if (!isPause) {
      window.speechSynthesis.pause();
      setIsPlay(false);
      setIsPause(true);
    }
  };

  const handleResumes = () => {
    if (isPause) {
      window.speechSynthesis.resume();
      setIsPlay(true);
      setIsPause(false);
    }
  };

  const handleStops = () => {
    window.speechSynthesis.cancel();
    setIsPlay(false);
    setIsPause(false);
  };

  // useEffect(() => {
  //   adsListing();
  //   BookListing();
  // }, []);

  const handleshowcomment = () => {
    setShowComments(true);
  };
  return (
    <>
      <UserLayout>
        <section class="inner__hero-sec jost-font">
          <div className="container">
            <div className="row">
              <div className="herro__title">
                <h1 className="typewriter"> RANKINGS </h1>
              </div>
            </div>
          </div>
        </section>

        <section className="tabs_section_spacing  ">
          <div className="row ">
            <div className="col-md-12 ">
              <div className="rannking_btn_first_row forum_tabs_box mb-5">
                <ul class="nav nav-pills mb-3 " id="pills-tab" role="tablist ">
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link  ranking_tabs_text active"
                      id="pills-home-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-home"
                      type="button"
                      role="tab"
                      aria-controls="pills-home"
                      aria-selected="true"
                    >
                      Top of All Time
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link  ranking_tabs_text"
                      id="pills-profile-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-profile"
                      type="button"
                      role="tab"
                      aria-controls="pills-profile"
                      aria-selected="false"
                    >
                      New
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link ranking_tabs_text"
                      id="pills-contact-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-contact"
                      type="button"
                      role="tab"
                      aria-controls="pills-contact"
                      aria-selected="false"
                    >
                      Translation Request
                    </button>
                  </li>
                </ul>

                <div className="ranking_filter_row">
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
                  <div class="input-completion completion__search">
                    <div className="dropdown">
                      <button
                        class="next_filters "
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
                          <a
                            class="dropdown-item filter_dropdown_list"
                            href="#"
                          >
                            Action
                          </a>
                        </li>
                        <li>
                          <a
                            class="dropdown-item filter_dropdown_list"
                            href="#"
                          >
                            Another action
                          </a>
                        </li>
                        <li>
                          <a
                            class="dropdown-item filter_dropdown_list"
                            href="#"
                          >
                            Filter
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div class="tab-content" id="pills-tabContent">
                <div
                  class="tab-pane fade show active"
                  id="pills-home"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab"
                  tabindex="0"
                >
                  <div className="">
                    <div className="row ">
                      <div className="col-md-12">
                        <div>
                          <div>
                            <div className="ranking_second_row">
                              <ul
                                class="nav nav-pills mb-3 discussion_tab_border"
                                id="pills-tab"
                                role="tablist"
                              >
                                <li class="nav-item" role="presentation">
                                  <button
                                    class="nav-link discussion_tab_links active"
                                    id="pills-home-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#pills-home1"
                                    type="button"
                                    role="tab"
                                    aria-controls="pills-home"
                                    aria-selected="true"
                                  >
                                    Web Novel
                                  </button>
                                </li>
                                <li class="nav-item" role="presentation">
                                  <button
                                    class="nav-link discussion_tab_links"
                                    id="pills-profile-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#pills-profile2"
                                    type="button"
                                    role="tab"
                                    aria-controls="pills-profile"
                                    aria-selected="false"
                                  >
                                    Light Novel
                                  </button>
                                </li>
                                <li class="nav-item" role="presentation">
                                  <button
                                    class="nav-link discussion_tab_links"
                                    id="pills-contact-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#pills-contact3"
                                    type="button"
                                    role="tab"
                                    aria-controls="pills-contact"
                                    aria-selected="false"
                                  >
                                    Manga
                                  </button>
                                </li>
                              </ul>
                            </div>
                            <div class="tab-content" id="pills-tabContent">
                              <div
                                class="tab-pane fade show active"
                                id="pills-home1"
                                role="tabpanel"
                                aria-labelledby="pills-home-tab"
                              >
                                <div className="container">
                                  <div className="row">
                                    <div className="col-md-12 mt-2">
                                      <h3 className="top_rank_list_text">
                                        TOP OF ALL TIME
                                      </h3>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div class="col-md-6">
                                      {/* <div class="abt_author_ranking_list">
                                        <div class="row">
                                          <div class="col-lg-3 col-sm-12">
                                            <div class="main">
                                              <img
                                                class=" ranking_author_bookcover "
                                                src={newimgbook}
                                              />
                                            </div>
                                          </div>
                                          <div class="col-lg-9 col-sm-12 ranking_right_box">
                                            <h3 class="abt_author_action">
                                              Action
                                            </h3>
                                            <h3 class="abt_author_book_name">
                                              Book Name Here
                                            </h3>

                                            <div class="main mt-3">
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                            </div>
                                            <div className="ranking_chap_collections_div">
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-book chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  315 Chapters
                                                </p>
                                              </div>
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-heart chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  10.4k Collections
                                                </p>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div> */}

                                      {/* new col */}

                                      <div class="books abt_author_ranking_list">
                                        <div class="row">
                                          <div class="col-lg-3 col-sm-12">
                                            <div class="main">
                                              <img
                                                class=" ranking_author_bookcover "
                                                src={newimgbook}
                                              />
                                            </div>
                                          </div>
                                          <div class="col-lg-9 col-sm-12 ranking_right_box">
                                            <div class="description">
                                              <div>
                                                <h3 class="abt_author_action">
                                                  Action
                                                </h3>
                                                <h3 class="abt_author_book_name">
                                                  Book Name Here
                                                </h3>
                                              </div>
                                              <div class="p-3 res ">
                                                <img
                                                  class="img-fluid votee"
                                                  src={Vote}
                                                />

                                                <img
                                                  class="img-fluid votee"
                                                  src={Trashcan}
                                                />
                                              </div>
                                            </div>
                                            <div class="maincate mt-3">
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                            </div>

                                            <div className="ranking_chap_collections_div">
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-book chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  315 Chapters
                                                </p>
                                              </div>
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-heart chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  10.4k Collections
                                                </p>
                                              </div>
                                            </div>

                                            <div class="btnrww ranking_add_btns_new">
                                              <button class="reads">
                                                <span> Add To Waiting List </span>                                               
                                                <i class="fa-solid fa-clock iconn"></i>
                                              </button>
                                              <button class="reads">
                                                <span> Book Details </span>
                                                <i class="fa-solid fa-book-open iconn"></i>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      {/* new col end */}
                                    </div>

                                    <div class="col-md-6">
                                      {/* new col */}

                                      <div class="books abt_author_ranking_list">
                                        <div class="row">
                                          <div class="col-lg-3 col-sm-12">
                                            <div class="main">
                                              <img
                                                class=" ranking_author_bookcover "
                                                src={newimgbook}
                                              />
                                            </div>
                                          </div>
                                          <div class="col-lg-9 col-sm-12 ranking_right_box">
                                            <div class="description">
                                              <div>
                                                <h3 class="abt_author_action">
                                                  Action
                                                </h3>
                                                <h3 class="abt_author_book_name">
                                                  Book Name Here
                                                </h3>
                                              </div>
                                              <div class="p-3 res ">
                                                <img
                                                  class="img-fluid votee"
                                                  src={Vote}
                                                />

                                                <img
                                                  class="img-fluid votee"
                                                  src={Trashcan}
                                                />
                                              </div>
                                            </div>
                                            <div class="maincate mt-3">
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                            </div>

                                            <div className="ranking_chap_collections_div">
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-book chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  315 Chapters
                                                </p>
                                              </div>
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-heart chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  10.4k Collections
                                                </p>
                                              </div>
                                            </div>

                                            <div class="btnrww ranking_add_btns_new">
                                            <button class="reads">
                                                <span> Add To Waiting List </span>                                               
                                                <i class="fa-solid fa-clock iconn"></i>
                                              </button>
                                              <button class="reads">
                                                <span> Book Details </span>
                                                <i class="fa-solid fa-book-open iconn"></i>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      {/* new col end */}
                                    </div>
                                  </div>

                                  <div className="row">
                                    <div class="col-md-6">
                                      {/* new col */}

                                      <div class="books abt_author_ranking_list">
                                        <div class="row">
                                          <div class="col-lg-3 col-sm-12">
                                            <div class="main">
                                              <img
                                                class=" ranking_author_bookcover "
                                                src={newimgbook}
                                              />
                                            </div>
                                          </div>
                                          <div class="col-lg-9 col-sm-12 ranking_right_box">
                                            <div class="description">
                                              <div>
                                                <h3 class="abt_author_action">
                                                  Action
                                                </h3>
                                                <h3 class="abt_author_book_name">
                                                  Book Name Here
                                                </h3>
                                              </div>
                                              <div class="p-3 res ">
                                                <img
                                                  class="img-fluid votee"
                                                  src={Vote}
                                                />

                                                <img
                                                  class="img-fluid votee"
                                                  src={Trashcan}
                                                />
                                              </div>
                                            </div>
                                            <div class="maincate mt-3">
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                            </div>

                                            <div className="ranking_chap_collections_div">
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-book chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  315 Chapters
                                                </p>
                                              </div>
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-heart chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  10.4k Collections
                                                </p>
                                              </div>
                                            </div>

                                            <div class="btnrww ranking_add_btns_new">
                                            <button class="reads">
                                                <span> Add To Waiting List </span>                                               
                                                <i class="fa-solid fa-clock iconn"></i>
                                              </button>
                                              <button class="reads">
                                                <span> Book Details </span>
                                                <i class="fa-solid fa-book-open iconn"></i>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      {/* new col end */}
                                    </div>

                                    <div class="col-md-6">
                                      {/* new col */}

                                      <div class="books abt_author_ranking_list">
                                        <div class="row">
                                          <div class="col-lg-3 col-sm-12">
                                            <div class="main">
                                              <img
                                                class=" ranking_author_bookcover "
                                                src={newimgbook}
                                              />
                                            </div>
                                          </div>
                                          <div class="col-lg-9 col-sm-12 ranking_right_box">
                                            <div class="description">
                                              <div>
                                                <h3 class="abt_author_action">
                                                  Action
                                                </h3>
                                                <h3 class="abt_author_book_name">
                                                  Book Name Here
                                                </h3>
                                              </div>
                                              <div class="p-3 res ">
                                                <img
                                                  class="img-fluid votee"
                                                  src={Vote}
                                                />

                                                <img
                                                  class="img-fluid votee"
                                                  src={Trashcan}
                                                />
                                              </div>
                                            </div>
                                            <div class="maincate mt-3">
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                            </div>

                                            <div className="ranking_chap_collections_div">
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-book chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  315 Chapters
                                                </p>
                                              </div>
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-heart chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  10.4k Collections
                                                </p>
                                              </div>
                                            </div>

                                            <div class="btnrww ranking_add_btns_new">
                                            <button class="reads">
                                                <span> Add To Waiting List </span>                                               
                                                <i class="fa-solid fa-clock iconn"></i>
                                              </button>
                                              <button class="reads">
                                                <span> Book Details </span>
                                                <i class="fa-solid fa-book-open iconn"></i>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      {/* new col end */}
                                    </div>
                                  </div>

                                  <div className="row">
                                    <div class="col-md-6">
                                      {/* new col */}

                                      <div class="books abt_author_ranking_list">
                                        <div class="row">
                                          <div class="col-lg-3 col-sm-12">
                                            <div class="main">
                                              <img
                                                class=" ranking_author_bookcover "
                                                src={newimgbook}
                                              />
                                            </div>
                                          </div>
                                          <div class="col-lg-9 col-sm-12 ranking_right_box">
                                            <div class="description">
                                              <div>
                                                <h3 class="abt_author_action">
                                                  Action
                                                </h3>
                                                <h3 class="abt_author_book_name">
                                                  Book Name Here
                                                </h3>
                                              </div>
                                              <div class="p-3 res ">
                                                <img
                                                  class="img-fluid votee"
                                                  src={Vote}
                                                />

                                                <img
                                                  class="img-fluid votee"
                                                  src={Trashcan}
                                                />
                                              </div>
                                            </div>
                                            <div class="maincate mt-3">
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                            </div>

                                            <div className="ranking_chap_collections_div">
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-book chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  315 Chapters
                                                </p>
                                              </div>
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-heart chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  10.4k Collections
                                                </p>
                                              </div>
                                            </div>

                                            <div class="btnrww ranking_add_btns_new">
                                            <button class="reads">
                                                <span> Add To Waiting List </span>                                               
                                                <i class="fa-solid fa-clock iconn"></i>
                                              </button>
                                              <button class="reads">
                                                <span> Book Details </span>
                                                <i class="fa-solid fa-book-open iconn"></i>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      {/* new col end */}
                                    </div>

                                    <div class="col-md-6">
                                      {/* new col */}

                                      <div class="books abt_author_ranking_list">
                                        <div class="row">
                                          <div class="col-lg-3 col-sm-12">
                                            <div class="main">
                                              <img
                                                class=" ranking_author_bookcover "
                                                src={newimgbook}
                                              />
                                            </div>
                                          </div>
                                          <div class="col-lg-9 col-sm-12 ranking_right_box">
                                            <div class="description">
                                              <div>
                                                <h3 class="abt_author_action">
                                                  Action
                                                </h3>
                                                <h3 class="abt_author_book_name">
                                                  Book Name Here
                                                </h3>
                                              </div>
                                              <div class="p-3 res ">
                                                <img
                                                  class="img-fluid votee"
                                                  src={Vote}
                                                />

                                                <img
                                                  class="img-fluid votee"
                                                  src={Trashcan}
                                                />
                                              </div>
                                            </div>
                                            <div class="maincate mt-3">
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                            </div>

                                            <div className="ranking_chap_collections_div">
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-book chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  315 Chapters
                                                </p>
                                              </div>
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-heart chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  10.4k Collections
                                                </p>
                                              </div>
                                            </div>

                                            <div class="btnrww ranking_add_btns_new">
                                              <button class="reads">
                                                <span> Add To Waiting List </span>                                               
                                                <i class="fa-solid fa-clock iconn"></i>
                                              </button>
                                              <button class="reads">
                                                <span> Book Details </span>
                                                <i class="fa-solid fa-book-open iconn"></i>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      {/* new col end */}
                                    </div>
                                  </div>

                                  <div className="row">
                                    <div class="col-md-6">
                                      {/* new col */}

                                      <div class="books abt_author_ranking_list">
                                        <div class="row">
                                          <div class="col-lg-3 col-sm-12">
                                            <div class="main">
                                              <img
                                                class=" ranking_author_bookcover "
                                                src={newimgbook}
                                              />
                                            </div>
                                          </div>
                                          <div class="col-lg-9 col-sm-12 ranking_right_box">
                                            <div class="description">
                                              <div>
                                                <h3 class="abt_author_action">
                                                  Action
                                                </h3>
                                                <h3 class="abt_author_book_name">
                                                  Book Name Here
                                                </h3>
                                              </div>
                                              <div class="p-3 res ">
                                                <img
                                                  class="img-fluid votee"
                                                  src={Vote}
                                                />

                                                <img
                                                  class="img-fluid votee"
                                                  src={Trashcan}
                                                />
                                              </div>
                                            </div>
                                            <div class="maincate mt-3">
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                            </div>

                                            <div className="ranking_chap_collections_div">
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-book chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  315 Chapters
                                                </p>
                                              </div>
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-heart chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  10.4k Collections
                                                </p>
                                              </div>
                                            </div>

                                            <div class="btnrww ranking_add_btns_new">
                                              <button class="reads">
                                                <span> Add To Waiting List </span>                                               
                                                <i class="fa-solid fa-clock iconn"></i>
                                              </button>
                                              <button class="reads">
                                                <span> Book Details </span>
                                                <i class="fa-solid fa-book-open iconn"></i>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      {/* new col end */}
                                    </div>

                                    <div class="col-md-6">
                                      {/* new col */}

                                      <div class="books abt_author_ranking_list">
                                        <div class="row">
                                          <div class="col-lg-3 col-sm-12">
                                            <div class="main">
                                              <img
                                                class=" ranking_author_bookcover "
                                                src={newimgbook}
                                              />
                                            </div>
                                          </div>
                                          <div class="col-lg-9 col-sm-12 ranking_right_box">
                                            <div class="description">
                                              <div>
                                                <h3 class="abt_author_action">
                                                  Action
                                                </h3>
                                                <h3 class="abt_author_book_name">
                                                  Book Name Here
                                                </h3>
                                              </div>
                                              <div class="p-3 res ">
                                                <img
                                                  class="img-fluid votee"
                                                  src={Vote}
                                                />

                                                <img
                                                  class="img-fluid votee"
                                                  src={Trashcan}
                                                />
                                              </div>
                                            </div>
                                            <div class="maincate mt-3">
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                            </div>

                                            <div className="ranking_chap_collections_div">
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-book chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  315 Chapters
                                                </p>
                                              </div>
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-heart chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  10.4k Collections
                                                </p>
                                              </div>
                                            </div>

                                            <div class="btnrww ranking_add_btns_new">
                                              <button class="reads">
                                                <span> Add To Waiting List </span>                                               
                                                <i class="fa-solid fa-clock iconn"></i>
                                              </button>
                                              <button class="reads">
                                                <span> Book Details </span>
                                                <i class="fa-solid fa-book-open iconn"></i>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      {/* new col end */}
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div
                                class="tab-pane fade"
                                id="pills-profile2"
                                role="tabpanel"
                                aria-labelledby="pills-profile-tab"
                              >
                                <div className="container">
                                  <div className="row">
                                    <div className="col-md-12 mt-2">
                                      <h3 className="top_rank_list_text">
                                        TOP OF ALL TIME
                                      </h3>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div class="col-md-6">
                                      {/* new col */}

                                      <div class="books abt_author_ranking_list">
                                        <div class="row">
                                          <div class="col-lg-3 col-sm-12">
                                            <div class="main">
                                              <img
                                                class=" ranking_author_bookcover "
                                                src={newimgbook}
                                              />
                                            </div>
                                          </div>
                                          <div class="col-lg-9 col-sm-12 ranking_right_box">
                                            <div class="description">
                                              <div>
                                                <h3 class="abt_author_action">
                                                  Action
                                                </h3>
                                                <h3 class="abt_author_book_name">
                                                  Book Name Here
                                                </h3>
                                              </div>
                                              <div class="p-3 res ">
                                                <img
                                                  class="img-fluid votee"
                                                  src={Vote}
                                                />

                                                <img
                                                  class="img-fluid votee"
                                                  src={Trashcan}
                                                />
                                              </div>
                                            </div>
                                            <div class="maincate mt-3">
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                            </div>

                                            <div className="ranking_chap_collections_div">
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-book chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  315 Chapters
                                                </p>
                                              </div>
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-heart chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  10.4k Collections
                                                </p>
                                              </div>
                                            </div>

                                            <div class="btnrww ranking_add_btns_new">
                                              <button class="reads">
                                                <span> Add To Waiting List </span>                                               
                                                <i class="fa-solid fa-clock iconn"></i>
                                              </button>
                                              <button class="reads">
                                                <span> Book Details </span>
                                                <i class="fa-solid fa-book-open iconn"></i>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      {/* new col end */}
                                    </div>

                                    <div class="col-md-6">
                                      {/* new col */}

                                      <div class="books abt_author_ranking_list">
                                        <div class="row">
                                          <div class="col-lg-3 col-sm-12">
                                            <div class="main">
                                              <img
                                                class=" ranking_author_bookcover "
                                                src={newimgbook}
                                              />
                                            </div>
                                          </div>
                                          <div class="col-lg-9 col-sm-12 ranking_right_box">
                                            <div class="description">
                                              <div>
                                                <h3 class="abt_author_action">
                                                  Action
                                                </h3>
                                                <h3 class="abt_author_book_name">
                                                  Book Name Here
                                                </h3>
                                              </div>
                                              <div class="p-3 res ">
                                                <img
                                                  class="img-fluid votee"
                                                  src={Vote}
                                                />

                                                <img
                                                  class="img-fluid votee"
                                                  src={Trashcan}
                                                />
                                              </div>
                                            </div>
                                            <div class="maincate mt-3">
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                            </div>

                                            <div className="ranking_chap_collections_div">
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-book chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  315 Chapters
                                                </p>
                                              </div>
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-heart chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  10.4k Collections
                                                </p>
                                              </div>
                                            </div>

                                            <div class="btnrww ranking_add_btns_new">
                                              <button class="reads">
                                                <span> Add To Waiting List </span>                                               
                                                <i class="fa-solid fa-clock iconn"></i>
                                              </button>
                                              <button class="reads">
                                                <span> Book Details </span>
                                                <i class="fa-solid fa-book-open iconn"></i>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      {/* new col end */}
                                    </div>
                                  </div>

                                  <div className="row">
                                    <div class="col-md-6">
                                      {/* new col */}

                                      <div class="books abt_author_ranking_list">
                                        <div class="row">
                                          <div class="col-lg-3 col-sm-12">
                                            <div class="main">
                                              <img
                                                class=" ranking_author_bookcover "
                                                src={newimgbook}
                                              />
                                            </div>
                                          </div>
                                          <div class="col-lg-9 col-sm-12 ranking_right_box">
                                            <div class="description">
                                              <div>
                                                <h3 class="abt_author_action">
                                                  Action
                                                </h3>
                                                <h3 class="abt_author_book_name">
                                                  Book Name Here
                                                </h3>
                                              </div>
                                              <div class="p-3 res ">
                                                <img
                                                  class="img-fluid votee"
                                                  src={Vote}
                                                />

                                                <img
                                                  class="img-fluid votee"
                                                  src={Trashcan}
                                                />
                                              </div>
                                            </div>
                                            <div class="maincate mt-3">
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                            </div>

                                            <div className="ranking_chap_collections_div">
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-book chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  315 Chapters
                                                </p>
                                              </div>
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-heart chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  10.4k Collections
                                                </p>
                                              </div>
                                            </div>

                                            <div class="btnrww ranking_add_btns_new">
                                              <button class="reads">
                                                <span> Add To Waiting List </span>                                               
                                                <i class="fa-solid fa-clock iconn"></i>
                                              </button>
                                              <button class="reads">
                                                <span> Book Details </span>
                                                <i class="fa-solid fa-book-open iconn"></i>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      {/* new col end */}
                                    </div>

                                    <div class="col-md-6">
                                       {/* new col */}

                                       <div class="books abt_author_ranking_list">
                                        <div class="row">
                                          <div class="col-lg-3 col-sm-12">
                                            <div class="main">
                                              <img
                                                class=" ranking_author_bookcover "
                                                src={newimgbook}
                                              />
                                            </div>
                                          </div>
                                          <div class="col-lg-9 col-sm-12 ranking_right_box">
                                            <div class="description">
                                              <div>
                                                <h3 class="abt_author_action">
                                                  Action
                                                </h3>
                                                <h3 class="abt_author_book_name">
                                                  Book Name Here
                                                </h3>
                                              </div>
                                              <div class="p-3 res ">
                                                <img
                                                  class="img-fluid votee"
                                                  src={Vote}
                                                />

                                                <img
                                                  class="img-fluid votee"
                                                  src={Trashcan}
                                                />
                                              </div>
                                            </div>
                                            <div class="maincate mt-3">
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                            </div>

                                            <div className="ranking_chap_collections_div">
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-book chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  315 Chapters
                                                </p>
                                              </div>
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-heart chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  10.4k Collections
                                                </p>
                                              </div>
                                            </div>

                                            <div class="btnrww ranking_add_btns_new">
                                              <button class="reads">
                                                <span> Add To Waiting List </span>                                               
                                                <i class="fa-solid fa-clock iconn"></i>
                                              </button>
                                              <button class="reads">
                                                <span> Book Details </span>
                                                <i class="fa-solid fa-book-open iconn"></i>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      {/* new col end */}
                                    </div>
                                  </div>

                                  <div className="row">
                                    <div class="col-md-6">
                                      {/* new col */}

                                      <div class="books abt_author_ranking_list">
                                        <div class="row">
                                          <div class="col-lg-3 col-sm-12">
                                            <div class="main">
                                              <img
                                                class=" ranking_author_bookcover "
                                                src={newimgbook}
                                              />
                                            </div>
                                          </div>
                                          <div class="col-lg-9 col-sm-12 ranking_right_box">
                                            <div class="description">
                                              <div>
                                                <h3 class="abt_author_action">
                                                  Action
                                                </h3>
                                                <h3 class="abt_author_book_name">
                                                  Book Name Here
                                                </h3>
                                              </div>
                                              <div class="p-3 res ">
                                                <img
                                                  class="img-fluid votee"
                                                  src={Vote}
                                                />

                                                <img
                                                  class="img-fluid votee"
                                                  src={Trashcan}
                                                />
                                              </div>
                                            </div>
                                            <div class="maincate mt-3">
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                            </div>

                                            <div className="ranking_chap_collections_div">
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-book chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  315 Chapters
                                                </p>
                                              </div>
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-heart chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  10.4k Collections
                                                </p>
                                              </div>
                                            </div>

                                            <div class="btnrww ranking_add_btns_new">
                                              <button class="reads">
                                                <span> Add To Waiting List </span>                                               
                                                <i class="fa-solid fa-clock iconn"></i>
                                              </button>
                                              <button class="reads">
                                                <span> Book Details </span>
                                                <i class="fa-solid fa-book-open iconn"></i>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      {/* new col end */}
                                    </div>

                                    <div class="col-md-6">
                                      {/* new col */}

                                      <div class="books abt_author_ranking_list">
                                        <div class="row">
                                          <div class="col-lg-3 col-sm-12">
                                            <div class="main">
                                              <img
                                                class=" ranking_author_bookcover "
                                                src={newimgbook}
                                              />
                                            </div>
                                          </div>
                                          <div class="col-lg-9 col-sm-12 ranking_right_box">
                                            <div class="description">
                                              <div>
                                                <h3 class="abt_author_action">
                                                  Action
                                                </h3>
                                                <h3 class="abt_author_book_name">
                                                  Book Name Here
                                                </h3>
                                              </div>
                                              <div class="p-3 res ">
                                                <img
                                                  class="img-fluid votee"
                                                  src={Vote}
                                                />

                                                <img
                                                  class="img-fluid votee"
                                                  src={Trashcan}
                                                />
                                              </div>
                                            </div>
                                            <div class="maincate mt-3">
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                            </div>

                                            <div className="ranking_chap_collections_div">
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-book chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  315 Chapters
                                                </p>
                                              </div>
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-heart chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  10.4k Collections
                                                </p>
                                              </div>
                                            </div>

                                            <div class="btnrww ranking_add_btns_new">
                                              <button class="reads">
                                                <span> Add To Waiting List </span>                                               
                                                <i class="fa-solid fa-clock iconn"></i>
                                              </button>
                                              <button class="reads">
                                                <span> Book Details </span>
                                                <i class="fa-solid fa-book-open iconn"></i>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      {/* new col end */}
                                    </div>
                                  </div>

                                  <div className="row">
                                    <div class="col-md-6">
                                      {/* new col */}

                                      <div class="books abt_author_ranking_list">
                                        <div class="row">
                                          <div class="col-lg-3 col-sm-12">
                                            <div class="main">
                                              <img
                                                class=" ranking_author_bookcover "
                                                src={newimgbook}
                                              />
                                            </div>
                                          </div>
                                          <div class="col-lg-9 col-sm-12 ranking_right_box">
                                            <div class="description">
                                              <div>
                                                <h3 class="abt_author_action">
                                                  Action
                                                </h3>
                                                <h3 class="abt_author_book_name">
                                                  Book Name Here
                                                </h3>
                                              </div>
                                              <div class="p-3 res ">
                                                <img
                                                  class="img-fluid votee"
                                                  src={Vote}
                                                />

                                                <img
                                                  class="img-fluid votee"
                                                  src={Trashcan}
                                                />
                                              </div>
                                            </div>
                                            <div class="maincate mt-3">
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                            </div>

                                            <div className="ranking_chap_collections_div">
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-book chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  315 Chapters
                                                </p>
                                              </div>
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-heart chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  10.4k Collections
                                                </p>
                                              </div>
                                            </div>

                                            <div class="btnrww ranking_add_btns_new">
                                              <button class="reads">
                                                <span> Add To Waiting List </span>                                               
                                                <i class="fa-solid fa-clock iconn"></i>
                                              </button>
                                              <button class="reads">
                                                <span> Book Details </span>
                                                <i class="fa-solid fa-book-open iconn"></i>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      {/* new col end */}
                                    </div>

                                    <div class="col-md-6">
                                      {/* new col */}

                                      <div class="books abt_author_ranking_list">
                                        <div class="row">
                                          <div class="col-lg-3 col-sm-12">
                                            <div class="main">
                                              <img
                                                class=" ranking_author_bookcover "
                                                src={newimgbook}
                                              />
                                            </div>
                                          </div>
                                          <div class="col-lg-9 col-sm-12 ranking_right_box">
                                            <div class="description">
                                              <div>
                                                <h3 class="abt_author_action">
                                                  Action
                                                </h3>
                                                <h3 class="abt_author_book_name">
                                                  Book Name Here
                                                </h3>
                                              </div>
                                              <div class="p-3 res ">
                                                <img
                                                  class="img-fluid votee"
                                                  src={Vote}
                                                />

                                                <img
                                                  class="img-fluid votee"
                                                  src={Trashcan}
                                                />
                                              </div>
                                            </div>
                                            <div class="maincate mt-3">
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                            </div>

                                            <div className="ranking_chap_collections_div">
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-book chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  315 Chapters
                                                </p>
                                              </div>
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-heart chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  10.4k Collections
                                                </p>
                                              </div>
                                            </div>

                                            <div class="btnrww ranking_add_btns_new">
                                              <button class="reads">
                                                <span> Add To Waiting List </span>                                               
                                                <i class="fa-solid fa-clock iconn"></i>
                                              </button>
                                              <button class="reads">
                                                <span> Book Details </span>
                                                <i class="fa-solid fa-book-open iconn"></i>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      {/* new col end */}
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div
                                class="tab-pane fade"
                                id="pills-contact3"
                                role="tabpanel"
                                aria-labelledby="pills-contact-tab"
                              >
                                <div className="container">
                                  <div className="row">
                                    <div className="col-md-12 mt-2">
                                      <h3 className="top_rank_list_text">
                                        TOP OF ALL TIME
                                      </h3>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div class="col-md-6">
                                      {/* new col */}

                                      <div class="books abt_author_ranking_list">
                                        <div class="row">
                                          <div class="col-lg-3 col-sm-12">
                                            <div class="main">
                                              <img
                                                class=" ranking_author_bookcover "
                                                src={newimgbook}
                                              />
                                            </div>
                                          </div>
                                          <div class="col-lg-9 col-sm-12 ranking_right_box">
                                            <div class="description">
                                              <div>
                                                <h3 class="abt_author_action">
                                                  Action
                                                </h3>
                                                <h3 class="abt_author_book_name">
                                                  Book Name Here
                                                </h3>
                                              </div>
                                              <div class="p-3 res ">
                                                <img
                                                  class="img-fluid votee"
                                                  src={Vote}
                                                />

                                                <img
                                                  class="img-fluid votee"
                                                  src={Trashcan}
                                                />
                                              </div>
                                            </div>
                                            <div class="maincate mt-3">
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                            </div>

                                            <div className="ranking_chap_collections_div">
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-book chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  315 Chapters
                                                </p>
                                              </div>
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-heart chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  10.4k Collections
                                                </p>
                                              </div>
                                            </div>

                                            <div class="btnrww ranking_add_btns_new">
                                            <button class="reads">
                                                <span> Add To Waiting List </span>                                               
                                                <i class="fa-solid fa-clock iconn"></i>
                                              </button>
                                              <button class="reads">
                                                <span> Book Details </span>
                                                <i class="fa-solid fa-book-open iconn"></i>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      {/* new col end */}
                                    </div>

                                    <div class="col-md-6">
                                      {/* new col */}

                                      <div class="books abt_author_ranking_list">
                                        <div class="row">
                                          <div class="col-lg-3 col-sm-12">
                                            <div class="main">
                                              <img
                                                class=" ranking_author_bookcover "
                                                src={newimgbook}
                                              />
                                            </div>
                                          </div>
                                          <div class="col-lg-9 col-sm-12 ranking_right_box">
                                            <div class="description">
                                              <div>
                                                <h3 class="abt_author_action">
                                                  Action
                                                </h3>
                                                <h3 class="abt_author_book_name">
                                                  Book Name Here
                                                </h3>
                                              </div>
                                              <div class="p-3 res ">
                                                <img
                                                  class="img-fluid votee"
                                                  src={Vote}
                                                />

                                                <img
                                                  class="img-fluid votee"
                                                  src={Trashcan}
                                                />
                                              </div>
                                            </div>
                                            <div class="maincate mt-3">
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                            </div>

                                            <div className="ranking_chap_collections_div">
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-book chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  315 Chapters
                                                </p>
                                              </div>
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-heart chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  10.4k Collections
                                                </p>
                                              </div>
                                            </div>

                                            <div class="btnrww ranking_add_btns_new">
                                              <button class="reads">
                                                <span> Add To Waiting List </span>                                               
                                                <i class="fa-solid fa-clock iconn"></i>
                                              </button>
                                              <button class="reads">
                                                <span> Book Details </span>
                                                <i class="fa-solid fa-book-open iconn"></i>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      {/* new col end */}
                                    </div>
                                  </div>

                                  <div className="row">
                                    <div class="col-md-6">
                                      {/* new col */}

                                      <div class="books abt_author_ranking_list">
                                        <div class="row">
                                          <div class="col-lg-3 col-sm-12">
                                            <div class="main">
                                              <img
                                                class=" ranking_author_bookcover "
                                                src={newimgbook}
                                              />
                                            </div>
                                          </div>
                                          <div class="col-lg-9 col-sm-12 ranking_right_box">
                                            <div class="description">
                                              <div>
                                                <h3 class="abt_author_action">
                                                  Action
                                                </h3>
                                                <h3 class="abt_author_book_name">
                                                  Book Name Here
                                                </h3>
                                              </div>
                                              <div class="p-3 res ">
                                                <img
                                                  class="img-fluid votee"
                                                  src={Vote}
                                                />

                                                <img
                                                  class="img-fluid votee"
                                                  src={Trashcan}
                                                />
                                              </div>
                                            </div>
                                            <div class="maincate mt-3">
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                            </div>

                                            <div className="ranking_chap_collections_div">
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-book chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  315 Chapters
                                                </p>
                                              </div>
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-heart chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  10.4k Collections
                                                </p>
                                              </div>
                                            </div>

                                            <div class="btnrww ranking_add_btns_new">
                                              <button class="reads">
                                                <span> Add To Waiting List </span>                                               
                                                <i class="fa-solid fa-clock iconn"></i>
                                              </button>
                                              <button class="reads">
                                                <span> Book Details </span>
                                                <i class="fa-solid fa-book-open iconn"></i>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      {/* new col end */}
                                    </div>

                                    <div class="col-md-6">
                                      {/* new col */}

                                      <div class="books abt_author_ranking_list">
                                        <div class="row">
                                          <div class="col-lg-3 col-sm-12">
                                            <div class="main">
                                              <img
                                                class=" ranking_author_bookcover "
                                                src={newimgbook}
                                              />
                                            </div>
                                          </div>
                                          <div class="col-lg-9 col-sm-12 ranking_right_box">
                                            <div class="description">
                                              <div>
                                                <h3 class="abt_author_action">
                                                  Action
                                                </h3>
                                                <h3 class="abt_author_book_name">
                                                  Book Name Here
                                                </h3>
                                              </div>
                                              <div class="p-3 res ">
                                                <img
                                                  class="img-fluid votee"
                                                  src={Vote}
                                                />

                                                <img
                                                  class="img-fluid votee"
                                                  src={Trashcan}
                                                />
                                              </div>
                                            </div>
                                            <div class="maincate mt-3">
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                            </div>

                                            <div className="ranking_chap_collections_div">
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-book chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  315 Chapters
                                                </p>
                                              </div>
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-heart chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  10.4k Collections
                                                </p>
                                              </div>
                                            </div>

                                            <div class="btnrww ranking_add_btns_new">
                                              <button class="reads">
                                                <span> Add To Waiting List </span>                                               
                                                <i class="fa-solid fa-clock iconn"></i>
                                              </button>
                                              <button class="reads">
                                                <span> Book Details </span>
                                                <i class="fa-solid fa-book-open iconn"></i>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      {/* new col end */}
                                    </div>
                                  </div>

                                  <div className="row">
                                    <div class="col-md-6">
                                      {/* new col */}

                                      <div class="books abt_author_ranking_list">
                                        <div class="row">
                                          <div class="col-lg-3 col-sm-12">
                                            <div class="main">
                                              <img
                                                class=" ranking_author_bookcover "
                                                src={newimgbook}
                                              />
                                            </div>
                                          </div>
                                          <div class="col-lg-9 col-sm-12 ranking_right_box">
                                            <div class="description">
                                              <div>
                                                <h3 class="abt_author_action">
                                                  Action
                                                </h3>
                                                <h3 class="abt_author_book_name">
                                                  Book Name Here
                                                </h3>
                                              </div>
                                              <div class="p-3 res ">
                                                <img
                                                  class="img-fluid votee"
                                                  src={Vote}
                                                />

                                                <img
                                                  class="img-fluid votee"
                                                  src={Trashcan}
                                                />
                                              </div>
                                            </div>
                                            <div class="maincate mt-3">
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                            </div>

                                            <div className="ranking_chap_collections_div">
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-book chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  315 Chapters
                                                </p>
                                              </div>
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-heart chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  10.4k Collections
                                                </p>
                                              </div>
                                            </div>

                                            <div class="btnrww ranking_add_btns_new">
                                              <button class="reads">
                                                <span> Add To Waiting List </span>                                               
                                                <i class="fa-solid fa-clock iconn"></i>
                                              </button>
                                              <button class="reads">
                                                <span> Book Details </span>
                                                <i class="fa-solid fa-book-open iconn"></i>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      {/* new col end */}
                                    </div>

                                    <div class="col-md-6">
                                      {/* new col */}

                                      <div class="books abt_author_ranking_list">
                                        <div class="row">
                                          <div class="col-lg-3 col-sm-12">
                                            <div class="main">
                                              <img
                                                class=" ranking_author_bookcover "
                                                src={newimgbook}
                                              />
                                            </div>
                                          </div>
                                          <div class="col-lg-9 col-sm-12 ranking_right_box">
                                            <div class="description">
                                              <div>
                                                <h3 class="abt_author_action">
                                                  Action
                                                </h3>
                                                <h3 class="abt_author_book_name">
                                                  Book Name Here
                                                </h3>
                                              </div>
                                              <div class="p-3 res ">
                                                <img
                                                  class="img-fluid votee"
                                                  src={Vote}
                                                />

                                                <img
                                                  class="img-fluid votee"
                                                  src={Trashcan}
                                                />
                                              </div>
                                            </div>
                                            <div class="maincate mt-3">
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                            </div>

                                            <div className="ranking_chap_collections_div">
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-book chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  315 Chapters
                                                </p>
                                              </div>
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-heart chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  10.4k Collections
                                                </p>
                                              </div>
                                            </div>

                                            <div class="btnrww ranking_add_btns_new">
                                              <button class="reads">
                                                <span> Add To Waiting List </span>                                               
                                                <i class="fa-solid fa-clock iconn"></i>
                                              </button>
                                              <button class="reads">
                                                <span> Book Details </span>
                                                <i class="fa-solid fa-book-open iconn"></i>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      {/* new col end */}
                                    </div>
                                  </div>

                                  <div className="row">
                                    <div class="col-md-6">
                                      {/* new col */}

                                      <div class="books abt_author_ranking_list">
                                        <div class="row">
                                          <div class="col-lg-3 col-sm-12">
                                            <div class="main">
                                              <img
                                                class=" ranking_author_bookcover "
                                                src={newimgbook}
                                              />
                                            </div>
                                          </div>
                                          <div class="col-lg-9 col-sm-12 ranking_right_box">
                                            <div class="description">
                                              <div>
                                                <h3 class="abt_author_action">
                                                  Action
                                                </h3>
                                                <h3 class="abt_author_book_name">
                                                  Book Name Here
                                                </h3>
                                              </div>
                                              <div class="p-3 res ">
                                                <img
                                                  class="img-fluid votee"
                                                  src={Vote}
                                                />

                                                <img
                                                  class="img-fluid votee"
                                                  src={Trashcan}
                                                />
                                              </div>
                                            </div>
                                            <div class="maincate mt-3">
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                            </div>

                                            <div className="ranking_chap_collections_div">
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-book chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  315 Chapters
                                                </p>
                                              </div>
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-heart chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  10.4k Collections
                                                </p>
                                              </div>
                                            </div>

                                            <div class="btnrww ranking_add_btns_new">
                                              <button class="reads">
                                                <span> Add To Waiting List </span>                                               
                                                <i class="fa-solid fa-clock iconn"></i>
                                              </button>
                                              <button class="reads">
                                                <span> Book Details </span>
                                                <i class="fa-solid fa-book-open iconn"></i>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      {/* new col end */}
                                    </div>

                                    <div class="col-md-6">
                                      {/* new col */}

                                      <div class="books abt_author_ranking_list">
                                        <div class="row">
                                          <div class="col-lg-3 col-sm-12">
                                            <div class="main">
                                              <img
                                                class=" ranking_author_bookcover "
                                                src={newimgbook}
                                              />
                                            </div>
                                          </div>
                                          <div class="col-lg-9 col-sm-12 ranking_right_box">
                                            <div class="description">
                                              <div>
                                                <h3 class="abt_author_action">
                                                  Action
                                                </h3>
                                                <h3 class="abt_author_book_name">
                                                  Book Name Here
                                                </h3>
                                              </div>
                                              <div class="p-3 res ">
                                                <img
                                                  class="img-fluid votee"
                                                  src={Vote}
                                                />

                                                <img
                                                  class="img-fluid votee"
                                                  src={Trashcan}
                                                />
                                              </div>
                                            </div>
                                            <div class="maincate mt-3">
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                            </div>

                                            <div className="ranking_chap_collections_div">
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-book chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  315 Chapters
                                                </p>
                                              </div>
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-heart chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  10.4k Collections
                                                </p>
                                              </div>
                                            </div>

                                            <div class="btnrww ranking_add_btns_new">
                                              <button class="reads">
                                                <span> Add To Waiting List </span>                                               
                                                <i class="fa-solid fa-clock iconn"></i>
                                              </button>
                                              <button class="reads">
                                                <span> Book Details </span>
                                                <i class="fa-solid fa-book-open iconn"></i>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      {/* new col end */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  class="tab-pane fade"
                  id="pills-profile"
                  role="tabpanel"
                  aria-labelledby="pills-profile-tab"
                  tabindex="0"
                >
                  <div className="">
                    <div className="row ">
                      <div className="col-md-12">
                        <div>
                          <div>
                            <div className="ranking_second_row">
                              <ul
                                class="nav nav-pills mb-3 discussion_tab_border"
                                id="pills-tab"
                                role="tablist"
                              >
                                <li class="nav-item" role="presentation">
                                  <button
                                    class="nav-link discussion_tab_links active"
                                    id="pills-home-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#pills-home1"
                                    type="button"
                                    role="tab"
                                    aria-controls="pills-home"
                                    aria-selected="true"
                                  >
                                    Web Novel
                                  </button>
                                </li>
                                <li class="nav-item" role="presentation">
                                  <button
                                    class="nav-link discussion_tab_links"
                                    id="pills-profile-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#pills-profile2"
                                    type="button"
                                    role="tab"
                                    aria-controls="pills-profile"
                                    aria-selected="false"
                                  >
                                    Light Novel
                                  </button>
                                </li>
                                <li class="nav-item" role="presentation">
                                  <button
                                    class="nav-link discussion_tab_links"
                                    id="pills-contact-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#pills-contact3"
                                    type="button"
                                    role="tab"
                                    aria-controls="pills-contact"
                                    aria-selected="false"
                                  >
                                    Manga
                                  </button>
                                </li>
                              </ul>
                            </div>
                            <div class="tab-content" id="pills-tabContent">
                              <div
                                class="tab-pane fade show active"
                                id="pills-home1"
                                role="tabpanel"
                                aria-labelledby="pills-home-tab"
                              >
                                <div className="container">
                                  <div className="row">
                                    <div className="col-md-12 mt-2">
                                      <h3 className="top_rank_list_text">
                                        TOP OF ALL TIME
                                      </h3>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div class="col-md-6">
                                      {/* new col */}

                                      <div class="books abt_author_ranking_list">
                                        <div class="row">
                                          <div class="col-lg-3 col-sm-12">
                                            <div class="main">
                                              <img
                                                class=" ranking_author_bookcover "
                                                src={newimgbook}
                                              />
                                            </div>
                                          </div>
                                          <div class="col-lg-9 col-sm-12 ranking_right_box">
                                            <div class="description">
                                              <div>
                                                <h3 class="abt_author_action">
                                                  Action
                                                </h3>
                                                <h3 class="abt_author_book_name">
                                                  Book Name Here
                                                </h3>
                                              </div>
                                              <div class="p-3 res ">
                                                <img
                                                  class="img-fluid votee"
                                                  src={Vote}
                                                />

                                                <img
                                                  class="img-fluid votee"
                                                  src={Trashcan}
                                                />
                                              </div>
                                            </div>
                                            <div class="maincate mt-3">
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                            </div>

                                            <div className="ranking_chap_collections_div">
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-book chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  315 Chapters
                                                </p>
                                              </div>
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-heart chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  10.4k Collections
                                                </p>
                                              </div>
                                            </div>

                                            <div class="btnrww ranking_add_btns_new">
                                            <button class="reads">
                                                <span> Add To Waiting List </span>                                               
                                                <i class="fa-solid fa-clock iconn"></i>
                                              </button>
                                              <button class="reads">
                                                <span> Book Details </span>
                                                <i class="fa-solid fa-book-open iconn"></i>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      {/* new col end */}
                                    </div>

                                    <div class="col-md-6">
                                   {/* new col */}

                                   <div class="books abt_author_ranking_list">
                                        <div class="row">
                                          <div class="col-lg-3 col-sm-12">
                                            <div class="main">
                                              <img
                                                class=" ranking_author_bookcover "
                                                src={newimgbook}
                                              />
                                            </div>
                                          </div>
                                          <div class="col-lg-9 col-sm-12 ranking_right_box">
                                            <div class="description">
                                              <div>
                                                <h3 class="abt_author_action">
                                                  Action
                                                </h3>
                                                <h3 class="abt_author_book_name">
                                                  Book Name Here
                                                </h3>
                                              </div>
                                              <div class="p-3 res ">
                                                <img
                                                  class="img-fluid votee"
                                                  src={Vote}
                                                />

                                                <img
                                                  class="img-fluid votee"
                                                  src={Trashcan}
                                                />
                                              </div>
                                            </div>
                                            <div class="maincate mt-3">
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                            </div>

                                            <div className="ranking_chap_collections_div">
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-book chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  315 Chapters
                                                </p>
                                              </div>
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-heart chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  10.4k Collections
                                                </p>
                                              </div>
                                            </div>

                                            <div class="btnrww ranking_add_btns_new">
                                            <button class="reads">
                                                <span> Add To Waiting List </span>                                               
                                                <i class="fa-solid fa-clock iconn"></i>
                                              </button>
                                              <button class="reads">
                                                <span> Book Details </span>
                                                <i class="fa-solid fa-book-open iconn"></i>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      {/* new col end */}
                                    </div>
                                  </div>

                                  <div className="row">
                                    <div class="col-md-6">
                                      {/* new col */}

                                      <div class="books abt_author_ranking_list">
                                        <div class="row">
                                          <div class="col-lg-3 col-sm-12">
                                            <div class="main">
                                              <img
                                                class=" ranking_author_bookcover "
                                                src={newimgbook}
                                              />
                                            </div>
                                          </div>
                                          <div class="col-lg-9 col-sm-12 ranking_right_box">
                                            <div class="description">
                                              <div>
                                                <h3 class="abt_author_action">
                                                  Action
                                                </h3>
                                                <h3 class="abt_author_book_name">
                                                  Book Name Here
                                                </h3>
                                              </div>
                                              <div class="p-3 res ">
                                                <img
                                                  class="img-fluid votee"
                                                  src={Vote}
                                                />

                                                <img
                                                  class="img-fluid votee"
                                                  src={Trashcan}
                                                />
                                              </div>
                                            </div>
                                            <div class="maincate mt-3">
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                            </div>

                                            <div className="ranking_chap_collections_div">
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-book chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  315 Chapters
                                                </p>
                                              </div>
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-heart chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  10.4k Collections
                                                </p>
                                              </div>
                                            </div>

                                            <div class="btnrww ranking_add_btns_new">
                                              <button class="reads">
                                                <span> Add To Waiting List </span>                                               
                                                <i class="fa-solid fa-clock iconn"></i>
                                              </button>
                                              <button class="reads">
                                                <span> Book Details </span>
                                                <i class="fa-solid fa-book-open iconn"></i>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      {/* new col end */}
                                    </div>

                                    <div class="col-md-6">
                                       {/* new col */}

                                       <div class="books abt_author_ranking_list">
                                        <div class="row">
                                          <div class="col-lg-3 col-sm-12">
                                            <div class="main">
                                              <img
                                                class=" ranking_author_bookcover "
                                                src={newimgbook}
                                              />
                                            </div>
                                          </div>
                                          <div class="col-lg-9 col-sm-12 ranking_right_box">
                                            <div class="description">
                                              <div>
                                                <h3 class="abt_author_action">
                                                  Action
                                                </h3>
                                                <h3 class="abt_author_book_name">
                                                  Book Name Here
                                                </h3>
                                              </div>
                                              <div class="p-3 res ">
                                                <img
                                                  class="img-fluid votee"
                                                  src={Vote}
                                                />

                                                <img
                                                  class="img-fluid votee"
                                                  src={Trashcan}
                                                />
                                              </div>
                                            </div>
                                            <div class="maincate mt-3">
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                            </div>

                                            <div className="ranking_chap_collections_div">
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-book chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  315 Chapters
                                                </p>
                                              </div>
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-heart chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  10.4k Collections
                                                </p>
                                              </div>
                                            </div>

                                            <div class="btnrww ranking_add_btns_new">
                                              <button class="reads">
                                                <span> Add To Waiting List </span>                                               
                                                <i class="fa-solid fa-clock iconn"></i>
                                              </button>
                                              <button class="reads">
                                                <span> Book Details </span>
                                                <i class="fa-solid fa-book-open iconn"></i>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      {/* new col end */}
                                    </div>
                                  </div>

                                  <div className="row">
                                    <div class="col-md-6">
                                      {/* new col */}

                                      <div class="books abt_author_ranking_list">
                                        <div class="row">
                                          <div class="col-lg-3 col-sm-12">
                                            <div class="main">
                                              <img
                                                class=" ranking_author_bookcover "
                                                src={newimgbook}
                                              />
                                            </div>
                                          </div>
                                          <div class="col-lg-9 col-sm-12 ranking_right_box">
                                            <div class="description">
                                              <div>
                                                <h3 class="abt_author_action">
                                                  Action
                                                </h3>
                                                <h3 class="abt_author_book_name">
                                                  Book Name Here
                                                </h3>
                                              </div>
                                              <div class="p-3 res ">
                                                <img
                                                  class="img-fluid votee"
                                                  src={Vote}
                                                />

                                                <img
                                                  class="img-fluid votee"
                                                  src={Trashcan}
                                                />
                                              </div>
                                            </div>
                                            <div class="maincate mt-3">
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                            </div>

                                            <div className="ranking_chap_collections_div">
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-book chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  315 Chapters
                                                </p>
                                              </div>
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-heart chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  10.4k Collections
                                                </p>
                                              </div>
                                            </div>

                                            <div class="btnrww ranking_add_btns_new">
                                              <button class="reads">
                                                <span> Add To Waiting List </span>                                               
                                                <i class="fa-solid fa-clock iconn"></i>
                                              </button>
                                              <button class="reads">
                                                <span> Book Details </span>
                                                <i class="fa-solid fa-book-open iconn"></i>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      {/* new col end */}
                                    </div>

                                    <div class="col-md-6">
                                     {/* new col */}

                                     <div class="books abt_author_ranking_list">
                                        <div class="row">
                                          <div class="col-lg-3 col-sm-12">
                                            <div class="main">
                                              <img
                                                class=" ranking_author_bookcover "
                                                src={newimgbook}
                                              />
                                            </div>
                                          </div>
                                          <div class="col-lg-9 col-sm-12 ranking_right_box">
                                            <div class="description">
                                              <div>
                                                <h3 class="abt_author_action">
                                                  Action
                                                </h3>
                                                <h3 class="abt_author_book_name">
                                                  Book Name Here
                                                </h3>
                                              </div>
                                              <div class="p-3 res ">
                                                <img
                                                  class="img-fluid votee"
                                                  src={Vote}
                                                />

                                                <img
                                                  class="img-fluid votee"
                                                  src={Trashcan}
                                                />
                                              </div>
                                            </div>
                                            <div class="maincate mt-3">
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                            </div>

                                            <div className="ranking_chap_collections_div">
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-book chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  315 Chapters
                                                </p>
                                              </div>
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-heart chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  10.4k Collections
                                                </p>
                                              </div>
                                            </div>

                                            <div class="btnrww ranking_add_btns_new">
                                              <button class="reads">
                                                <span> Add To Waiting List </span>                                               
                                                <i class="fa-solid fa-clock iconn"></i>
                                              </button>
                                              <button class="reads">
                                                <span> Book Details </span>
                                                <i class="fa-solid fa-book-open iconn"></i>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      {/* new col end */}
                                    </div>
                                  </div>

                                  <div className="row">
                                    <div class="col-md-6">
                                      {/* new col */}

                                      <div class="books abt_author_ranking_list">
                                        <div class="row">
                                          <div class="col-lg-3 col-sm-12">
                                            <div class="main">
                                              <img
                                                class=" ranking_author_bookcover "
                                                src={newimgbook}
                                              />
                                            </div>
                                          </div>
                                          <div class="col-lg-9 col-sm-12 ranking_right_box">
                                            <div class="description">
                                              <div>
                                                <h3 class="abt_author_action">
                                                  Action
                                                </h3>
                                                <h3 class="abt_author_book_name">
                                                  Book Name Here
                                                </h3>
                                              </div>
                                              <div class="p-3 res ">
                                                <img
                                                  class="img-fluid votee"
                                                  src={Vote}
                                                />

                                                <img
                                                  class="img-fluid votee"
                                                  src={Trashcan}
                                                />
                                              </div>
                                            </div>
                                            <div class="maincate mt-3">
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                            </div>

                                            <div className="ranking_chap_collections_div">
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-book chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  315 Chapters
                                                </p>
                                              </div>
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-heart chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  10.4k Collections
                                                </p>
                                              </div>
                                            </div>

                                            <div class="btnrww ranking_add_btns_new">
                                              <button class="reads">
                                                <span> Add To Waiting List </span>                                               
                                                <i class="fa-solid fa-clock iconn"></i>
                                              </button>
                                              <button class="reads">
                                                <span> Book Details </span>
                                                <i class="fa-solid fa-book-open iconn"></i>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      {/* new col end */}
                                    </div>

                                    <div class="col-md-6">
                                       {/* new col */}

                                       <div class="books abt_author_ranking_list">
                                        <div class="row">
                                          <div class="col-lg-3 col-sm-12">
                                            <div class="main">
                                              <img
                                                class=" ranking_author_bookcover "
                                                src={newimgbook}
                                              />
                                            </div>
                                          </div>
                                          <div class="col-lg-9 col-sm-12 ranking_right_box">
                                            <div class="description">
                                              <div>
                                                <h3 class="abt_author_action">
                                                  Action
                                                </h3>
                                                <h3 class="abt_author_book_name">
                                                  Book Name Here
                                                </h3>
                                              </div>
                                              <div class="p-3 res ">
                                                <img
                                                  class="img-fluid votee"
                                                  src={Vote}
                                                />

                                                <img
                                                  class="img-fluid votee"
                                                  src={Trashcan}
                                                />
                                              </div>
                                            </div>
                                            <div class="maincate mt-3">
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                            </div>

                                            <div className="ranking_chap_collections_div">
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-book chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  315 Chapters
                                                </p>
                                              </div>
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-heart chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  10.4k Collections
                                                </p>
                                              </div>
                                            </div>

                                            <div class="btnrww ranking_add_btns_new">
                                              <button class="reads">
                                                <span> Add To Waiting List </span>                                               
                                                <i class="fa-solid fa-clock iconn"></i>
                                              </button>
                                              <button class="reads">
                                                <span> Book Details </span>
                                                <i class="fa-solid fa-book-open iconn"></i>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      {/* new col end */}
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div
                                class="tab-pane fade"
                                id="pills-profile2"
                                role="tabpanel"
                                aria-labelledby="pills-profile-tab"
                              >
                                <div className="container">
                                  <div className="row">
                                    <div className="col-md-12 mt-2">
                                      <h3 className="top_rank_list_text">
                                        TOP OF ALL TIME
                                      </h3>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div class="col-md-6">
                                      {/* new col */}

                                      <div class="books abt_author_ranking_list">
                                        <div class="row">
                                          <div class="col-lg-3 col-sm-12">
                                            <div class="main">
                                              <img
                                                class=" ranking_author_bookcover "
                                                src={newimgbook}
                                              />
                                            </div>
                                          </div>
                                          <div class="col-lg-9 col-sm-12 ranking_right_box">
                                            <div class="description">
                                              <div>
                                                <h3 class="abt_author_action">
                                                  Action
                                                </h3>
                                                <h3 class="abt_author_book_name">
                                                  Book Name Here
                                                </h3>
                                              </div>
                                              <div class="p-3 res ">
                                                <img
                                                  class="img-fluid votee"
                                                  src={Vote}
                                                />

                                                <img
                                                  class="img-fluid votee"
                                                  src={Trashcan}
                                                />
                                              </div>
                                            </div>
                                            <div class="maincate mt-3">
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                            </div>

                                            <div className="ranking_chap_collections_div">
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-book chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  315 Chapters
                                                </p>
                                              </div>
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-heart chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  10.4k Collections
                                                </p>
                                              </div>
                                            </div>

                                            <div class="btnrww ranking_add_btns_new">
                                              <button class="reads">
                                                <span> Add To Waiting List </span>                                               
                                                <i class="fa-solid fa-clock iconn"></i>
                                              </button>
                                              <button class="reads">
                                                <span> Book Details </span>
                                                <i class="fa-solid fa-book-open iconn"></i>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      {/* new col end */}
                                    </div>

                                    <div class="col-md-6">
                                       {/* new col */}

                                       <div class="books abt_author_ranking_list">
                                        <div class="row">
                                          <div class="col-lg-3 col-sm-12">
                                            <div class="main">
                                              <img
                                                class=" ranking_author_bookcover "
                                                src={newimgbook}
                                              />
                                            </div>
                                          </div>
                                          <div class="col-lg-9 col-sm-12 ranking_right_box">
                                            <div class="description">
                                              <div>
                                                <h3 class="abt_author_action">
                                                  Action
                                                </h3>
                                                <h3 class="abt_author_book_name">
                                                  Book Name Here
                                                </h3>
                                              </div>
                                              <div class="p-3 res ">
                                                <img
                                                  class="img-fluid votee"
                                                  src={Vote}
                                                />

                                                <img
                                                  class="img-fluid votee"
                                                  src={Trashcan}
                                                />
                                              </div>
                                            </div>
                                            <div class="maincate mt-3">
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                            </div>

                                            <div className="ranking_chap_collections_div">
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-book chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  315 Chapters
                                                </p>
                                              </div>
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-heart chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  10.4k Collections
                                                </p>
                                              </div>
                                            </div>

                                            <div class="btnrww ranking_add_btns_new">
                                              <button class="reads">
                                                <span> Add To Waiting List </span>                                               
                                                <i class="fa-solid fa-clock iconn"></i>
                                              </button>
                                              <button class="reads">
                                                <span> Book Details </span>
                                                <i class="fa-solid fa-book-open iconn"></i>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      {/* new col end */}
                                    </div>
                                  </div>

                                  <div className="row">
                                    <div class="col-md-6">
                                      {/* new col */}

                                      <div class="books abt_author_ranking_list">
                                        <div class="row">
                                          <div class="col-lg-3 col-sm-12">
                                            <div class="main">
                                              <img
                                                class=" ranking_author_bookcover "
                                                src={newimgbook}
                                              />
                                            </div>
                                          </div>
                                          <div class="col-lg-9 col-sm-12 ranking_right_box">
                                            <div class="description">
                                              <div>
                                                <h3 class="abt_author_action">
                                                  Action
                                                </h3>
                                                <h3 class="abt_author_book_name">
                                                  Book Name Here
                                                </h3>
                                              </div>
                                              <div class="p-3 res ">
                                                <img
                                                  class="img-fluid votee"
                                                  src={Vote}
                                                />

                                                <img
                                                  class="img-fluid votee"
                                                  src={Trashcan}
                                                />
                                              </div>
                                            </div>
                                            <div class="maincate mt-3">
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                            </div>

                                            <div className="ranking_chap_collections_div">
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-book chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  315 Chapters
                                                </p>
                                              </div>
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-heart chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  10.4k Collections
                                                </p>
                                              </div>
                                            </div>

                                            <div class="btnrww ranking_add_btns_new">
                                              <button class="reads">
                                                <span> Add To Waiting List </span>                                               
                                                <i class="fa-solid fa-clock iconn"></i>
                                              </button>
                                              <button class="reads">
                                                <span> Book Details </span>
                                                <i class="fa-solid fa-book-open iconn"></i>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      {/* new col end */}
                                    </div>

                                    <div class="col-md-6">
                                      {/* new col */}

                                      <div class="books abt_author_ranking_list">
                                        <div class="row">
                                          <div class="col-lg-3 col-sm-12">
                                            <div class="main">
                                              <img
                                                class=" ranking_author_bookcover "
                                                src={newimgbook}
                                              />
                                            </div>
                                          </div>
                                          <div class="col-lg-9 col-sm-12 ranking_right_box">
                                            <div class="description">
                                              <div>
                                                <h3 class="abt_author_action">
                                                  Action
                                                </h3>
                                                <h3 class="abt_author_book_name">
                                                  Book Name Here
                                                </h3>
                                              </div>
                                              <div class="p-3 res ">
                                                <img
                                                  class="img-fluid votee"
                                                  src={Vote}
                                                />

                                                <img
                                                  class="img-fluid votee"
                                                  src={Trashcan}
                                                />
                                              </div>
                                            </div>
                                            <div class="maincate mt-3">
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                            </div>

                                            <div className="ranking_chap_collections_div">
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-book chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  315 Chapters
                                                </p>
                                              </div>
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-heart chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  10.4k Collections
                                                </p>
                                              </div>
                                            </div>

                                            <div class="btnrww ranking_add_btns_new">
                                              <button class="reads">
                                                <span> Add To Waiting List </span>                                               
                                                <i class="fa-solid fa-clock iconn"></i>
                                              </button>
                                              <button class="reads">
                                                <span> Book Details </span>
                                                <i class="fa-solid fa-book-open iconn"></i>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      {/* new col end */}
                                    </div>
                                  </div>

                                  <div className="row">
                                    <div class="col-md-6">
                                      {/* new col */}

                                      <div class="books abt_author_ranking_list">
                                        <div class="row">
                                          <div class="col-lg-3 col-sm-12">
                                            <div class="main">
                                              <img
                                                class=" ranking_author_bookcover "
                                                src={newimgbook}
                                              />
                                            </div>
                                          </div>
                                          <div class="col-lg-9 col-sm-12 ranking_right_box">
                                            <div class="description">
                                              <div>
                                                <h3 class="abt_author_action">
                                                  Action
                                                </h3>
                                                <h3 class="abt_author_book_name">
                                                  Book Name Here
                                                </h3>
                                              </div>
                                              <div class="p-3 res ">
                                                <img
                                                  class="img-fluid votee"
                                                  src={Vote}
                                                />

                                                <img
                                                  class="img-fluid votee"
                                                  src={Trashcan}
                                                />
                                              </div>
                                            </div>
                                            <div class="maincate mt-3">
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                            </div>

                                            <div className="ranking_chap_collections_div">
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-book chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  315 Chapters
                                                </p>
                                              </div>
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-heart chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  10.4k Collections
                                                </p>
                                              </div>
                                            </div>

                                            <div class="btnrww ranking_add_btns_new">
                                              <button class="reads">
                                                <span> Add To Waiting List </span>                                               
                                                <i class="fa-solid fa-clock iconn"></i>
                                              </button>
                                              <button class="reads">
                                                <span> Book Details </span>
                                                <i class="fa-solid fa-book-open iconn"></i>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      {/* new col end */}
                                    </div>

                                    <div class="col-md-6">
                                      {/* new col */}

                                      <div class="books abt_author_ranking_list">
                                        <div class="row">
                                          <div class="col-lg-3 col-sm-12">
                                            <div class="main">
                                              <img
                                                class=" ranking_author_bookcover "
                                                src={newimgbook}
                                              />
                                            </div>
                                          </div>
                                          <div class="col-lg-9 col-sm-12 ranking_right_box">
                                            <div class="description">
                                              <div>
                                                <h3 class="abt_author_action">
                                                  Action
                                                </h3>
                                                <h3 class="abt_author_book_name">
                                                  Book Name Here
                                                </h3>
                                              </div>
                                              <div class="p-3 res ">
                                                <img
                                                  class="img-fluid votee"
                                                  src={Vote}
                                                />

                                                <img
                                                  class="img-fluid votee"
                                                  src={Trashcan}
                                                />
                                              </div>
                                            </div>
                                            <div class="maincate mt-3">
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                            </div>

                                            <div className="ranking_chap_collections_div">
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-book chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  315 Chapters
                                                </p>
                                              </div>
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-heart chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  10.4k Collections
                                                </p>
                                              </div>
                                            </div>

                                            <div class="btnrww ranking_add_btns_new">
                                              <button class="reads">
                                                <span> Add To Waiting List </span>                                               
                                                <i class="fa-solid fa-clock iconn"></i>
                                              </button>
                                              <button class="reads">
                                                <span> Book Details </span>
                                                <i class="fa-solid fa-book-open iconn"></i>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      {/* new col end */}
                                    </div>
                                  </div>

                                  <div className="row">
                                    <div class="col-md-6">
                                      {/* new col */}

                                      <div class="books abt_author_ranking_list">
                                        <div class="row">
                                          <div class="col-lg-3 col-sm-12">
                                            <div class="main">
                                              <img
                                                class=" ranking_author_bookcover "
                                                src={newimgbook}
                                              />
                                            </div>
                                          </div>
                                          <div class="col-lg-9 col-sm-12 ranking_right_box">
                                            <div class="description">
                                              <div>
                                                <h3 class="abt_author_action">
                                                  Action
                                                </h3>
                                                <h3 class="abt_author_book_name">
                                                  Book Name Here
                                                </h3>
                                              </div>
                                              <div class="p-3 res ">
                                                <img
                                                  class="img-fluid votee"
                                                  src={Vote}
                                                />

                                                <img
                                                  class="img-fluid votee"
                                                  src={Trashcan}
                                                />
                                              </div>
                                            </div>
                                            <div class="maincate mt-3">
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                            </div>

                                            <div className="ranking_chap_collections_div">
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-book chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  315 Chapters
                                                </p>
                                              </div>
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-heart chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  10.4k Collections
                                                </p>
                                              </div>
                                            </div>

                                            <div class="btnrww ranking_add_btns_new">
                                              <button class="reads">
                                                <span> Add To Waiting List </span>                                               
                                                <i class="fa-solid fa-clock iconn"></i>
                                              </button>
                                              <button class="reads">
                                                <span> Book Details </span>
                                                <i class="fa-solid fa-book-open iconn"></i>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      {/* new col end */}
                                    </div>

                                    <div class="col-md-6">
                                       {/* new col */}

                                       <div class="books abt_author_ranking_list">
                                        <div class="row">
                                          <div class="col-lg-3 col-sm-12">
                                            <div class="main">
                                              <img
                                                class=" ranking_author_bookcover "
                                                src={newimgbook}
                                              />
                                            </div>
                                          </div>
                                          <div class="col-lg-9 col-sm-12 ranking_right_box">
                                            <div class="description">
                                              <div>
                                                <h3 class="abt_author_action">
                                                  Action
                                                </h3>
                                                <h3 class="abt_author_book_name">
                                                  Book Name Here
                                                </h3>
                                              </div>
                                              <div class="p-3 res ">
                                                <img
                                                  class="img-fluid votee"
                                                  src={Vote}
                                                />

                                                <img
                                                  class="img-fluid votee"
                                                  src={Trashcan}
                                                />
                                              </div>
                                            </div>
                                            <div class="maincate mt-3">
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                            </div>

                                            <div className="ranking_chap_collections_div">
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-book chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  315 Chapters
                                                </p>
                                              </div>
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-heart chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  10.4k Collections
                                                </p>
                                              </div>
                                            </div>

                                            <div class="btnrww ranking_add_btns_new">
                                              <button class="reads">
                                                <span> Add To Waiting List </span>                                               
                                                <i class="fa-solid fa-clock iconn"></i>
                                              </button>
                                              <button class="reads">
                                                <span> Book Details </span>
                                                <i class="fa-solid fa-book-open iconn"></i>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      {/* new col end */}
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div
                                class="tab-pane fade"
                                id="pills-contact3"
                                role="tabpanel"
                                aria-labelledby="pills-contact-tab"
                              >
                                <div className="container">
                                  <div className="row">
                                    <div className="col-md-12 mt-2">
                                      <h3 className="top_rank_list_text">
                                        TOP OF ALL TIME
                                      </h3>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div class="col-md-6">
                                      {/* new col */}

                                      <div class="books abt_author_ranking_list">
                                        <div class="row">
                                          <div class="col-lg-3 col-sm-12">
                                            <div class="main">
                                              <img
                                                class=" ranking_author_bookcover "
                                                src={newimgbook}
                                              />
                                            </div>
                                          </div>
                                          <div class="col-lg-9 col-sm-12 ranking_right_box">
                                            <div class="description">
                                              <div>
                                                <h3 class="abt_author_action">
                                                  Action
                                                </h3>
                                                <h3 class="abt_author_book_name">
                                                  Book Name Here
                                                </h3>
                                              </div>
                                              <div class="p-3 res ">
                                                <img
                                                  class="img-fluid votee"
                                                  src={Vote}
                                                />

                                                <img
                                                  class="img-fluid votee"
                                                  src={Trashcan}
                                                />
                                              </div>
                                            </div>
                                            <div class="maincate mt-3">
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                            </div>

                                            <div className="ranking_chap_collections_div">
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-book chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  315 Chapters
                                                </p>
                                              </div>
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-heart chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  10.4k Collections
                                                </p>
                                              </div>
                                            </div>

                                            <div class="btnrww ranking_add_btns_new">
                                              <button class="reads">
                                                <span> Add To Waiting List </span>                                               
                                                <i class="fa-solid fa-clock iconn"></i>
                                              </button>
                                              <button class="reads">
                                                <span> Book Details </span>
                                                <i class="fa-solid fa-book-open iconn"></i>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      {/* new col end */}
                                    </div>

                                    <div class="col-md-6">
                                      {/* new col */}

                                      <div class="books abt_author_ranking_list">
                                        <div class="row">
                                          <div class="col-lg-3 col-sm-12">
                                            <div class="main">
                                              <img
                                                class=" ranking_author_bookcover "
                                                src={newimgbook}
                                              />
                                            </div>
                                          </div>
                                          <div class="col-lg-9 col-sm-12 ranking_right_box">
                                            <div class="description">
                                              <div>
                                                <h3 class="abt_author_action">
                                                  Action
                                                </h3>
                                                <h3 class="abt_author_book_name">
                                                  Book Name Here
                                                </h3>
                                              </div>
                                              <div class="p-3 res ">
                                                <img
                                                  class="img-fluid votee"
                                                  src={Vote}
                                                />

                                                <img
                                                  class="img-fluid votee"
                                                  src={Trashcan}
                                                />
                                              </div>
                                            </div>
                                            <div class="maincate mt-3">
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                            </div>

                                            <div className="ranking_chap_collections_div">
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-book chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  315 Chapters
                                                </p>
                                              </div>
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-heart chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  10.4k Collections
                                                </p>
                                              </div>
                                            </div>

                                            <div class="btnrww ranking_add_btns_new">
                                            <button class="reads">
                                                <span> Add To Waiting List </span>                                               
                                                <i class="fa-solid fa-clock iconn"></i>
                                              </button>
                                              <button class="reads">
                                                <span> Book Details </span>
                                                <i class="fa-solid fa-book-open iconn"></i>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      {/* new col end */}
                                    </div>
                                  </div>

                                  <div className="row">
                                    <div class="col-md-6">
                                      {/* new col */}

                                      <div class="books abt_author_ranking_list">
                                        <div class="row">
                                          <div class="col-lg-3 col-sm-12">
                                            <div class="main">
                                              <img
                                                class=" ranking_author_bookcover "
                                                src={newimgbook}
                                              />
                                            </div>
                                          </div>
                                          <div class="col-lg-9 col-sm-12 ranking_right_box">
                                            <div class="description">
                                              <div>
                                                <h3 class="abt_author_action">
                                                  Action
                                                </h3>
                                                <h3 class="abt_author_book_name">
                                                  Book Name Here
                                                </h3>
                                              </div>
                                              <div class="p-3 res ">
                                                <img
                                                  class="img-fluid votee"
                                                  src={Vote}
                                                />

                                                <img
                                                  class="img-fluid votee"
                                                  src={Trashcan}
                                                />
                                              </div>
                                            </div>
                                            <div class="maincate mt-3">
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                            </div>

                                            <div className="ranking_chap_collections_div">
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-book chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  315 Chapters
                                                </p>
                                              </div>
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-heart chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  10.4k Collections
                                                </p>
                                              </div>
                                            </div>

                                            <div class="btnrww ranking_add_btns_new">
                                              <button class="reads">
                                                <span> Add To Waiting List </span>                                               
                                                <i class="fa-solid fa-clock iconn"></i>
                                              </button>
                                              <button class="reads">
                                                <span> Book Details </span>
                                                <i class="fa-solid fa-book-open iconn"></i>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      {/* new col end */}
                                    </div>

                                    <div class="col-md-6">
                                      {/* new col */}

                                      <div class="books abt_author_ranking_list">
                                        <div class="row">
                                          <div class="col-lg-3 col-sm-12">
                                            <div class="main">
                                              <img
                                                class=" ranking_author_bookcover "
                                                src={newimgbook}
                                              />
                                            </div>
                                          </div>
                                          <div class="col-lg-9 col-sm-12 ranking_right_box">
                                            <div class="description">
                                              <div>
                                                <h3 class="abt_author_action">
                                                  Action
                                                </h3>
                                                <h3 class="abt_author_book_name">
                                                  Book Name Here
                                                </h3>
                                              </div>
                                              <div class="p-3 res ">
                                                <img
                                                  class="img-fluid votee"
                                                  src={Vote}
                                                />

                                                <img
                                                  class="img-fluid votee"
                                                  src={Trashcan}
                                                />
                                              </div>
                                            </div>
                                            <div class="maincate mt-3">
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                            </div>

                                            <div className="ranking_chap_collections_div">
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-book chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  315 Chapters
                                                </p>
                                              </div>
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-heart chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  10.4k Collections
                                                </p>
                                              </div>
                                            </div>

                                            <div class="btnrww ranking_add_btns_new">
                                            <button class="reads">
                                                <span> Add To Waiting List </span>                                               
                                                <i class="fa-solid fa-clock iconn"></i>
                                              </button>
                                              <button class="reads">
                                                <span> Book Details </span>
                                                <i class="fa-solid fa-book-open iconn"></i>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      {/* new col end */}
                                    </div>
                                  </div>

                                  <div className="row">
                                    <div class="col-md-6">
                                     {/* new col */}

                                     <div class="books abt_author_ranking_list">
                                        <div class="row">
                                          <div class="col-lg-3 col-sm-12">
                                            <div class="main">
                                              <img
                                                class=" ranking_author_bookcover "
                                                src={newimgbook}
                                              />
                                            </div>
                                          </div>
                                          <div class="col-lg-9 col-sm-12 ranking_right_box">
                                            <div class="description">
                                              <div>
                                                <h3 class="abt_author_action">
                                                  Action
                                                </h3>
                                                <h3 class="abt_author_book_name">
                                                  Book Name Here
                                                </h3>
                                              </div>
                                              <div class="p-3 res ">
                                                <img
                                                  class="img-fluid votee"
                                                  src={Vote}
                                                />

                                                <img
                                                  class="img-fluid votee"
                                                  src={Trashcan}
                                                />
                                              </div>
                                            </div>
                                            <div class="maincate mt-3">
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                            </div>

                                            <div className="ranking_chap_collections_div">
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-book chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  315 Chapters
                                                </p>
                                              </div>
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-heart chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  10.4k Collections
                                                </p>
                                              </div>
                                            </div>

                                            <div class="btnrww ranking_add_btns_new">
                                              <button class="reads">
                                                <span> Add To Waiting List </span>                                               
                                                <i class="fa-solid fa-clock iconn"></i>
                                              </button>
                                              <button class="reads">
                                                <span> Book Details </span>
                                                <i class="fa-solid fa-book-open iconn"></i>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      {/* new col end */}
                                    </div>

                                    <div class="col-md-6">
                                      {/* new col */}

                                      <div class="books abt_author_ranking_list">
                                        <div class="row">
                                          <div class="col-lg-3 col-sm-12">
                                            <div class="main">
                                              <img
                                                class=" ranking_author_bookcover "
                                                src={newimgbook}
                                              />
                                            </div>
                                          </div>
                                          <div class="col-lg-9 col-sm-12 ranking_right_box">
                                            <div class="description">
                                              <div>
                                                <h3 class="abt_author_action">
                                                  Action
                                                </h3>
                                                <h3 class="abt_author_book_name">
                                                  Book Name Here
                                                </h3>
                                              </div>
                                              <div class="p-3 res ">
                                                <img
                                                  class="img-fluid votee"
                                                  src={Vote}
                                                />

                                                <img
                                                  class="img-fluid votee"
                                                  src={Trashcan}
                                                />
                                              </div>
                                            </div>
                                            <div class="maincate mt-3">
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                            </div>

                                            <div className="ranking_chap_collections_div">
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-book chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  315 Chapters
                                                </p>
                                              </div>
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-heart chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  10.4k Collections
                                                </p>
                                              </div>
                                            </div>

                                            <div class="btnrww ranking_add_btns_new">
                                            <button class="reads">
                                                <span> Add To Waiting List </span>                                               
                                                <i class="fa-solid fa-clock iconn"></i>
                                              </button>
                                              <button class="reads">
                                                <span> Book Details </span>
                                                <i class="fa-solid fa-book-open iconn"></i>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      {/* new col end */}
                                    </div>
                                  </div>

                                  <div className="row">
                                    <div class="col-md-6">
                                      {/* new col */}

                                      <div class="books abt_author_ranking_list">
                                        <div class="row">
                                          <div class="col-lg-3 col-sm-12">
                                            <div class="main">
                                              <img
                                                class=" ranking_author_bookcover "
                                                src={newimgbook}
                                              />
                                            </div>
                                          </div>
                                          <div class="col-lg-9 col-sm-12 ranking_right_box">
                                            <div class="description">
                                              <div>
                                                <h3 class="abt_author_action">
                                                  Action
                                                </h3>
                                                <h3 class="abt_author_book_name">
                                                  Book Name Here
                                                </h3>
                                              </div>
                                              <div class="p-3 res ">
                                                <img
                                                  class="img-fluid votee"
                                                  src={Vote}
                                                />

                                                <img
                                                  class="img-fluid votee"
                                                  src={Trashcan}
                                                />
                                              </div>
                                            </div>
                                            <div class="maincate mt-3">
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                            </div>

                                            <div className="ranking_chap_collections_div">
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-book chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  315 Chapters
                                                </p>
                                              </div>
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-heart chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  10.4k Collections
                                                </p>
                                              </div>
                                            </div>

                                            <div class="btnrww ranking_add_btns_new">
                                            <button class="reads">
                                                <span> Add To Waiting List </span>                                               
                                                <i class="fa-solid fa-clock iconn"></i>
                                              </button>
                                              <button class="reads">
                                                <span> Book Details </span>
                                                <i class="fa-solid fa-book-open iconn"></i>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      {/* new col end */}
                                    </div>

                                    <div class="col-md-6">
                                      {/* new col */}

                                      <div class="books abt_author_ranking_list">
                                        <div class="row">
                                          <div class="col-lg-3 col-sm-12">
                                            <div class="main">
                                              <img
                                                class=" ranking_author_bookcover "
                                                src={newimgbook}
                                              />
                                            </div>
                                          </div>
                                          <div class="col-lg-9 col-sm-12 ranking_right_box">
                                            <div class="description">
                                              <div>
                                                <h3 class="abt_author_action">
                                                  Action
                                                </h3>
                                                <h3 class="abt_author_book_name">
                                                  Book Name Here
                                                </h3>
                                              </div>
                                              <div class="p-3 res ">
                                                <img
                                                  class="img-fluid votee"
                                                  src={Vote}
                                                />

                                                <img
                                                  class="img-fluid votee"
                                                  src={Trashcan}
                                                />
                                              </div>
                                            </div>
                                            <div class="maincate mt-3">
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                            </div>

                                            <div className="ranking_chap_collections_div">
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-book chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  315 Chapters
                                                </p>
                                              </div>
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-heart chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  10.4k Collections
                                                </p>
                                              </div>
                                            </div>

                                            <div class="btnrww ranking_add_btns_new">
                                            <button class="reads">
                                                <span> Add To Waiting List </span>                                               
                                                <i class="fa-solid fa-clock iconn"></i>
                                              </button>
                                              <button class="reads">
                                                <span> Book Details </span>
                                                <i class="fa-solid fa-book-open iconn"></i>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      {/* new col end */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  class="tab-pane fade"
                  id="pills-contact"
                  role="tabpanel"
                  aria-labelledby="pills-contact-tab"
                  tabindex="0"
                >
                  <div className="">
                    <div className="row ">
                      <div className="col-md-12">
                        <div>
                          <div>
                            <div className="ranking_second_row">
                              <ul
                                class="nav nav-pills mb-3 discussion_tab_border"
                                id="pills-tab"
                                role="tablist"
                              >
                                <li class="nav-item" role="presentation">
                                  <button
                                    class="nav-link discussion_tab_links active"
                                    id="pills-home-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#pills-home1"
                                    type="button"
                                    role="tab"
                                    aria-controls="pills-home"
                                    aria-selected="true"
                                  >
                                    Web Novel
                                  </button>
                                </li>
                                <li class="nav-item" role="presentation">
                                  <button
                                    class="nav-link discussion_tab_links"
                                    id="pills-profile-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#pills-profile2"
                                    type="button"
                                    role="tab"
                                    aria-controls="pills-profile"
                                    aria-selected="false"
                                  >
                                    Light Novel
                                  </button>
                                </li>
                                <li class="nav-item" role="presentation">
                                  <button
                                    class="nav-link discussion_tab_links"
                                    id="pills-contact-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#pills-contact3"
                                    type="button"
                                    role="tab"
                                    aria-controls="pills-contact"
                                    aria-selected="false"
                                  >
                                    Manga
                                  </button>
                                </li>
                              </ul>
                            </div>
                            <div class="tab-content" id="pills-tabContent">
                              <div
                                class="tab-pane fade show active"
                                id="pills-home1"
                                role="tabpanel"
                                aria-labelledby="pills-home-tab"
                              >
                                <div className="container">
                                  <div className="row">
                                    <div className="col-md-12 mt-2">
                                      <h3 className="top_rank_list_text">
                                        TOP OF ALL TIME
                                      </h3>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div class="col-md-6">
                                      {/* new col */}

                                      <div class="books abt_author_ranking_list">
                                        <div class="row">
                                          <div class="col-lg-3 col-sm-12">
                                            <div class="main">
                                              <img
                                                class=" ranking_author_bookcover "
                                                src={newimgbook}
                                              />
                                            </div>
                                          </div>
                                          <div class="col-lg-9 col-sm-12 ranking_right_box">
                                            <div class="description">
                                              <div>
                                                <h3 class="abt_author_action">
                                                  Action
                                                </h3>
                                                <h3 class="abt_author_book_name">
                                                  Book Name Here
                                                </h3>
                                              </div>
                                              <div class="p-3 res ">
                                                <img
                                                  class="img-fluid votee"
                                                  src={Vote}
                                                />

                                                <img
                                                  class="img-fluid votee"
                                                  src={Trashcan}
                                                />
                                              </div>
                                            </div>
                                            <div class="maincate mt-3">
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                            </div>

                                            <div className="ranking_chap_collections_div">
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-book chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  315 Chapters
                                                </p>
                                              </div>
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-heart chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  10.4k Collections
                                                </p>
                                              </div>
                                            </div>

                                            <div class="btnrww ranking_add_btns_new">
                                            <button class="reads">
                                                <span> Add To Waiting List </span>                                               
                                                <i class="fa-solid fa-clock iconn"></i>
                                              </button>
                                              <button class="reads">
                                                <span> Book Details </span>
                                                <i class="fa-solid fa-book-open iconn"></i>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      {/* new col end */}
                                    </div>

                                    <div class="col-md-6">
                                      {/* new col */}

                                      <div class="books abt_author_ranking_list">
                                        <div class="row">
                                          <div class="col-lg-3 col-sm-12">
                                            <div class="main">
                                              <img
                                                class=" ranking_author_bookcover "
                                                src={newimgbook}
                                              />
                                            </div>
                                          </div>
                                          <div class="col-lg-9 col-sm-12 ranking_right_box">
                                            <div class="description">
                                              <div>
                                                <h3 class="abt_author_action">
                                                  Action
                                                </h3>
                                                <h3 class="abt_author_book_name">
                                                  Book Name Here
                                                </h3>
                                              </div>
                                              <div class="p-3 res ">
                                                <img
                                                  class="img-fluid votee"
                                                  src={Vote}
                                                />

                                                <img
                                                  class="img-fluid votee"
                                                  src={Trashcan}
                                                />
                                              </div>
                                            </div>
                                            <div class="maincate mt-3">
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                            </div>

                                            <div className="ranking_chap_collections_div">
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-book chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  315 Chapters
                                                </p>
                                              </div>
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-heart chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  10.4k Collections
                                                </p>
                                              </div>
                                            </div>

                                            <div class="btnrww ranking_add_btns_new">
                                            <button class="reads">
                                                <span> Add To Waiting List </span>                                               
                                                <i class="fa-solid fa-clock iconn"></i>
                                              </button>
                                              <button class="reads">
                                                <span> Book Details </span>
                                                <i class="fa-solid fa-book-open iconn"></i>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      {/* new col end */}
                                    </div>
                                  </div>

                                  <div className="row">
                                    <div class="col-md-6">
                                      {/* new col */}

                                      <div class="books abt_author_ranking_list">
                                        <div class="row">
                                          <div class="col-lg-3 col-sm-12">
                                            <div class="main">
                                              <img
                                                class=" ranking_author_bookcover "
                                                src={newimgbook}
                                              />
                                            </div>
                                          </div>
                                          <div class="col-lg-9 col-sm-12 ranking_right_box">
                                            <div class="description">
                                              <div>
                                                <h3 class="abt_author_action">
                                                  Action
                                                </h3>
                                                <h3 class="abt_author_book_name">
                                                  Book Name Here
                                                </h3>
                                              </div>
                                              <div class="p-3 res ">
                                                <img
                                                  class="img-fluid votee"
                                                  src={Vote}
                                                />

                                                <img
                                                  class="img-fluid votee"
                                                  src={Trashcan}
                                                />
                                              </div>
                                            </div>
                                            <div class="maincate mt-3">
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                            </div>

                                            <div className="ranking_chap_collections_div">
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-book chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  315 Chapters
                                                </p>
                                              </div>
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-heart chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  10.4k Collections
                                                </p>
                                              </div>
                                            </div>

                                            <div class="btnrww ranking_add_btns_new">
                                              <button class="reads">
                                                <span> Add To Waiting List </span>                                               
                                                <i class="fa-solid fa-clock iconn"></i>
                                              </button>
                                              <button class="reads">
                                                <span> Book Details </span>
                                                <i class="fa-solid fa-book-open iconn"></i>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      {/* new col end */}
                                    </div>

                                    <div class="col-md-6">
                                      {/* new col */}

                                      <div class="books abt_author_ranking_list">
                                        <div class="row">
                                          <div class="col-lg-3 col-sm-12">
                                            <div class="main">
                                              <img
                                                class=" ranking_author_bookcover "
                                                src={newimgbook}
                                              />
                                            </div>
                                          </div>
                                          <div class="col-lg-9 col-sm-12 ranking_right_box">
                                            <div class="description">
                                              <div>
                                                <h3 class="abt_author_action">
                                                  Action
                                                </h3>
                                                <h3 class="abt_author_book_name">
                                                  Book Name Here
                                                </h3>
                                              </div>
                                              <div class="p-3 res ">
                                                <img
                                                  class="img-fluid votee"
                                                  src={Vote}
                                                />

                                                <img
                                                  class="img-fluid votee"
                                                  src={Trashcan}
                                                />
                                              </div>
                                            </div>
                                            <div class="maincate mt-3">
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                            </div>

                                            <div className="ranking_chap_collections_div">
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-book chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  315 Chapters
                                                </p>
                                              </div>
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-heart chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  10.4k Collections
                                                </p>
                                              </div>
                                            </div>

                                            <div class="btnrww ranking_add_btns_new">
                                              <button class="reads">
                                                <span> Add To Waiting List </span>                                               
                                                <i class="fa-solid fa-clock iconn"></i>
                                              </button>
                                              <button class="reads">
                                                <span> Book Details </span>
                                                <i class="fa-solid fa-book-open iconn"></i>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      {/* new col end */}
                                    </div>
                                  </div>

                                  <div className="row">
                                    <div class="col-md-6">
                                      {/* new col */}

                                      <div class="books abt_author_ranking_list">
                                        <div class="row">
                                          <div class="col-lg-3 col-sm-12">
                                            <div class="main">
                                              <img
                                                class=" ranking_author_bookcover "
                                                src={newimgbook}
                                              />
                                            </div>
                                          </div>
                                          <div class="col-lg-9 col-sm-12 ranking_right_box">
                                            <div class="description">
                                              <div>
                                                <h3 class="abt_author_action">
                                                  Action
                                                </h3>
                                                <h3 class="abt_author_book_name">
                                                  Book Name Here
                                                </h3>
                                              </div>
                                              <div class="p-3 res ">
                                                <img
                                                  class="img-fluid votee"
                                                  src={Vote}
                                                />

                                                <img
                                                  class="img-fluid votee"
                                                  src={Trashcan}
                                                />
                                              </div>
                                            </div>
                                            <div class="maincate mt-3">
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                            </div>

                                            <div className="ranking_chap_collections_div">
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-book chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  315 Chapters
                                                </p>
                                              </div>
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-heart chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  10.4k Collections
                                                </p>
                                              </div>
                                            </div>

                                            <div class="btnrww ranking_add_btns_new">
                                              <button class="reads">
                                                <span> Add To Waiting List </span>                                               
                                                <i class="fa-solid fa-clock iconn"></i>
                                              </button>
                                              <button class="reads">
                                                <span> Book Details </span>
                                                <i class="fa-solid fa-book-open iconn"></i>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      {/* new col end */}
                                    </div>

                                    <div class="col-md-6">
                                      {/* new col */}

                                      <div class="books abt_author_ranking_list">
                                        <div class="row">
                                          <div class="col-lg-3 col-sm-12">
                                            <div class="main">
                                              <img
                                                class=" ranking_author_bookcover "
                                                src={newimgbook}
                                              />
                                            </div>
                                          </div>
                                          <div class="col-lg-9 col-sm-12 ranking_right_box">
                                            <div class="description">
                                              <div>
                                                <h3 class="abt_author_action">
                                                  Action
                                                </h3>
                                                <h3 class="abt_author_book_name">
                                                  Book Name Here
                                                </h3>
                                              </div>
                                              <div class="p-3 res ">
                                                <img
                                                  class="img-fluid votee"
                                                  src={Vote}
                                                />

                                                <img
                                                  class="img-fluid votee"
                                                  src={Trashcan}
                                                />
                                              </div>
                                            </div>
                                            <div class="maincate mt-3">
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                            </div>

                                            <div className="ranking_chap_collections_div">
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-book chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  315 Chapters
                                                </p>
                                              </div>
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-heart chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  10.4k Collections
                                                </p>
                                              </div>
                                            </div>

                                            <div class="btnrww ranking_add_btns_new">
                                              <button class="reads">
                                                <span> Add To Waiting List </span>                                               
                                                <i class="fa-solid fa-clock iconn"></i>
                                              </button>
                                              <button class="reads">
                                                <span> Book Details </span>
                                                <i class="fa-solid fa-book-open iconn"></i>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      {/* new col end */}
                                    </div>
                                  </div>

                                  <div className="row">
                                    <div class="col-md-6">
                                      {/* new col */}

                                      <div class="books abt_author_ranking_list">
                                        <div class="row">
                                          <div class="col-lg-3 col-sm-12">
                                            <div class="main">
                                              <img
                                                class=" ranking_author_bookcover "
                                                src={newimgbook}
                                              />
                                            </div>
                                          </div>
                                          <div class="col-lg-9 col-sm-12 ranking_right_box">
                                            <div class="description">
                                              <div>
                                                <h3 class="abt_author_action">
                                                  Action
                                                </h3>
                                                <h3 class="abt_author_book_name">
                                                  Book Name Here
                                                </h3>
                                              </div>
                                              <div class="p-3 res ">
                                                <img
                                                  class="img-fluid votee"
                                                  src={Vote}
                                                />

                                                <img
                                                  class="img-fluid votee"
                                                  src={Trashcan}
                                                />
                                              </div>
                                            </div>
                                            <div class="maincate mt-3">
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                            </div>

                                            <div className="ranking_chap_collections_div">
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-book chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  315 Chapters
                                                </p>
                                              </div>
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-heart chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  10.4k Collections
                                                </p>
                                              </div>
                                            </div>

                                            <div class="btnrww ranking_add_btns_new">
                                              <button class="reads">
                                                <span> Add To Waiting List </span>                                               
                                                <i class="fa-solid fa-clock iconn"></i>
                                              </button>
                                              <button class="reads">
                                                <span> Book Details </span>
                                                <i class="fa-solid fa-book-open iconn"></i>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      {/* new col end */}
                                    </div>

                                    <div class="col-md-6">
                                      {/* new col */}

                                      <div class="books abt_author_ranking_list">
                                        <div class="row">
                                          <div class="col-lg-3 col-sm-12">
                                            <div class="main">
                                              <img
                                                class=" ranking_author_bookcover "
                                                src={newimgbook}
                                              />
                                            </div>
                                          </div>
                                          <div class="col-lg-9 col-sm-12 ranking_right_box">
                                            <div class="description">
                                              <div>
                                                <h3 class="abt_author_action">
                                                  Action
                                                </h3>
                                                <h3 class="abt_author_book_name">
                                                  Book Name Here
                                                </h3>
                                              </div>
                                              <div class="p-3 res ">
                                                <img
                                                  class="img-fluid votee"
                                                  src={Vote}
                                                />

                                                <img
                                                  class="img-fluid votee"
                                                  src={Trashcan}
                                                />
                                              </div>
                                            </div>
                                            <div class="maincate mt-3">
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                            </div>

                                            <div className="ranking_chap_collections_div">
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-book chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  315 Chapters
                                                </p>
                                              </div>
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-heart chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  10.4k Collections
                                                </p>
                                              </div>
                                            </div>

                                            <div class="btnrww ranking_add_btns_new">
                                             <button class="reads">
                                                <span> Add To Waiting List </span>                                               
                                                <i class="fa-solid fa-clock iconn"></i>
                                              </button>
                                              <button class="reads">
                                                <span> Book Details </span>
                                                <i class="fa-solid fa-book-open iconn"></i>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      {/* new col end */}
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div
                                class="tab-pane fade"
                                id="pills-profile2"
                                role="tabpanel"
                                aria-labelledby="pills-profile-tab"
                              >
                                <div className="container">
                                  <div className="row">
                                    <div className="col-md-12 mt-2">
                                      <h3 className="top_rank_list_text">
                                        TOP OF ALL TIME
                                      </h3>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div class="col-md-6">
                                      {/* new col */}

                                      <div class="books abt_author_ranking_list">
                                        <div class="row">
                                          <div class="col-lg-3 col-sm-12">
                                            <div class="main">
                                              <img
                                                class=" ranking_author_bookcover "
                                                src={newimgbook}
                                              />
                                            </div>
                                          </div>
                                          <div class="col-lg-9 col-sm-12 ranking_right_box">
                                            <div class="description">
                                              <div>
                                                <h3 class="abt_author_action">
                                                  Action
                                                </h3>
                                                <h3 class="abt_author_book_name">
                                                  Book Name Here
                                                </h3>
                                              </div>
                                              <div class="p-3 res ">
                                                <img
                                                  class="img-fluid votee"
                                                  src={Vote}
                                                />

                                                <img
                                                  class="img-fluid votee"
                                                  src={Trashcan}
                                                />
                                              </div>
                                            </div>
                                            <div class="maincate mt-3">
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                            </div>

                                            <div className="ranking_chap_collections_div">
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-book chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  315 Chapters
                                                </p>
                                              </div>
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-heart chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  10.4k Collections
                                                </p>
                                              </div>
                                            </div>

                                            <div class="btnrww ranking_add_btns_new">
                                              <button class="reads">
                                                <span> Add To Waiting List </span>                                               
                                                <i class="fa-solid fa-clock iconn"></i>
                                              </button>
                                              <button class="reads">
                                                <span> Book Details </span>
                                                <i class="fa-solid fa-book-open iconn"></i>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      {/* new col end */}
                                    </div>

                                    <div class="col-md-6">
                                       {/* new col */}

                                       <div class="books abt_author_ranking_list">
                                        <div class="row">
                                          <div class="col-lg-3 col-sm-12">
                                            <div class="main">
                                              <img
                                                class=" ranking_author_bookcover "
                                                src={newimgbook}
                                              />
                                            </div>
                                          </div>
                                          <div class="col-lg-9 col-sm-12 ranking_right_box">
                                            <div class="description">
                                              <div>
                                                <h3 class="abt_author_action">
                                                  Action
                                                </h3>
                                                <h3 class="abt_author_book_name">
                                                  Book Name Here
                                                </h3>
                                              </div>
                                              <div class="p-3 res ">
                                                <img
                                                  class="img-fluid votee"
                                                  src={Vote}
                                                />

                                                <img
                                                  class="img-fluid votee"
                                                  src={Trashcan}
                                                />
                                              </div>
                                            </div>
                                            <div class="maincate mt-3">
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                            </div>

                                            <div className="ranking_chap_collections_div">
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-book chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  315 Chapters
                                                </p>
                                              </div>
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-heart chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  10.4k Collections
                                                </p>
                                              </div>
                                            </div>

                                            <div class="btnrww ranking_add_btns_new">
                                              <button class="reads">
                                                <span> Add To Waiting List </span>                                               
                                                <i class="fa-solid fa-clock iconn"></i>
                                              </button>
                                              <button class="reads">
                                                <span> Book Details </span>
                                                <i class="fa-solid fa-book-open iconn"></i>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      {/* new col end */}
                                    </div>
                                  </div>

                                  <div className="row">
                                    <div class="col-md-6">
                                      {/* new col */}

                                      <div class="books abt_author_ranking_list">
                                        <div class="row">
                                          <div class="col-lg-3 col-sm-12">
                                            <div class="main">
                                              <img
                                                class=" ranking_author_bookcover "
                                                src={newimgbook}
                                              />
                                            </div>
                                          </div>
                                          <div class="col-lg-9 col-sm-12 ranking_right_box">
                                            <div class="description">
                                              <div>
                                                <h3 class="abt_author_action">
                                                  Action
                                                </h3>
                                                <h3 class="abt_author_book_name">
                                                  Book Name Here
                                                </h3>
                                              </div>
                                              <div class="p-3 res ">
                                                <img
                                                  class="img-fluid votee"
                                                  src={Vote}
                                                />

                                                <img
                                                  class="img-fluid votee"
                                                  src={Trashcan}
                                                />
                                              </div>
                                            </div>
                                            <div class="maincate mt-3">
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                            </div>

                                            <div className="ranking_chap_collections_div">
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-book chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  315 Chapters
                                                </p>
                                              </div>
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-heart chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  10.4k Collections
                                                </p>
                                              </div>
                                            </div>

                                            <div class="btnrww ranking_add_btns_new">
                                              <button class="reads">
                                                <span> Add To Waiting List </span>                                               
                                                <i class="fa-solid fa-clock iconn"></i>
                                              </button>
                                              <button class="reads">
                                                <span> Book Details </span>
                                                <i class="fa-solid fa-book-open iconn"></i>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      {/* new col end */}
                                    </div>

                                    <div class="col-md-6">
                                     {/* new col */}

                                     <div class="books abt_author_ranking_list">
                                        <div class="row">
                                          <div class="col-lg-3 col-sm-12">
                                            <div class="main">
                                              <img
                                                class="ranking_author_bookcover"
                                                src={newimgbook}
                                              />
                                            </div>
                                          </div>
                                          <div class="col-lg-9 col-sm-12 ranking_right_box">
                                            <div class="description">
                                              <div>
                                                <h3 class="abt_author_action">
                                                  Action
                                                </h3>
                                                <h3 class="abt_author_book_name">
                                                  Book Name Here
                                                </h3>
                                              </div>
                                              <div class="p-3 res ">
                                                <img
                                                  class="img-fluid votee"
                                                  src={Vote}
                                                />

                                                <img
                                                  class="img-fluid votee"
                                                  src={Trashcan}
                                                />
                                              </div>
                                            </div>
                                            <div class="maincate mt-3">
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                            </div>

                                            <div className="ranking_chap_collections_div">
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-book chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  315 Chapters
                                                </p>
                                              </div>
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-heart chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  10.4k Collections
                                                </p>
                                              </div>
                                            </div>

                                            <div class="btnrww ranking_add_btns_new">
                                              <button class="reads">
                                                <span> Add To Waiting List </span>                                               
                                                <i class="fa-solid fa-clock iconn"></i>
                                              </button>
                                              <button class="reads">
                                                <span> Book Details </span>
                                                <i class="fa-solid fa-book-open iconn"></i>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      {/* new col end */}
                                    </div>
                                  </div>

                                  <div className="row">
                                    <div class="col-md-6">
                                     {/* new col */}

                                     <div class="books abt_author_ranking_list">
                                        <div class="row">
                                          <div class="col-lg-3 col-sm-12">
                                            <div class="main">
                                              <img
                                                class=" ranking_author_bookcover "
                                                src={newimgbook}
                                              />
                                            </div>
                                          </div>
                                          <div class="col-lg-9 col-sm-12 ranking_right_box">
                                            <div class="description">
                                              <div>
                                                <h3 class="abt_author_action">
                                                  Action
                                                </h3>
                                                <h3 class="abt_author_book_name">
                                                  Book Name Here
                                                </h3>
                                              </div>
                                              <div class="p-3 res ">
                                                <img
                                                  class="img-fluid votee"
                                                  src={Vote}
                                                />

                                                <img
                                                  class="img-fluid votee"
                                                  src={Trashcan}
                                                />
                                              </div>
                                            </div>
                                            <div class="maincate mt-3">
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                            </div>

                                            <div className="ranking_chap_collections_div">
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-book chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  315 Chapters
                                                </p>
                                              </div>
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-heart chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  10.4k Collections
                                                </p>
                                              </div>
                                            </div>

                                            <div class="btnrww ranking_add_btns_new">
                                              <button class="reads">
                                                <span> Add To Waiting List </span>                                               
                                                <i class="fa-solid fa-clock iconn"></i>
                                              </button>
                                              <button class="reads">
                                                <span> Book Details </span>
                                                <i class="fa-solid fa-book-open iconn"></i>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      {/* new col end */}
                                    </div>

                                    <div class="col-md-6">
                                      {/* new col */}

                                      <div class="books abt_author_ranking_list">
                                        <div class="row">
                                          <div class="col-lg-3 col-sm-12">
                                            <div class="main">
                                              <img
                                                class=" ranking_author_bookcover "
                                                src={newimgbook}
                                              />
                                            </div>
                                          </div>
                                          <div class="col-lg-9 col-sm-12 ranking_right_box">
                                            <div class="description">
                                              <div>
                                                <h3 class="abt_author_action">
                                                  Action
                                                </h3>
                                                <h3 class="abt_author_book_name">
                                                  Book Name Here
                                                </h3>
                                              </div>
                                              <div class="p-3 res ">
                                                <img
                                                  class="img-fluid votee"
                                                  src={Vote}
                                                />

                                                <img
                                                  class="img-fluid votee"
                                                  src={Trashcan}
                                                />
                                              </div>
                                            </div>
                                            <div class="maincate mt-3">
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                            </div>

                                            <div className="ranking_chap_collections_div">
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-book chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  315 Chapters
                                                </p>
                                              </div>
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-heart chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  10.4k Collections
                                                </p>
                                              </div>
                                            </div>

                                            <div class="btnrww ranking_add_btns_new">
                                              <button class="reads">
                                                <span> Add To Waiting List </span>                                               
                                                <i class="fa-solid fa-clock iconn"></i>
                                              </button>
                                              <button class="reads">
                                                <span> Book Details </span>
                                                <i class="fa-solid fa-book-open iconn"></i>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      {/* new col end */}
                                    </div>
                                  </div>

                                  <div className="row">
                                    <div class="col-md-6">
                                      {/* new col */}

                                      <div class="books abt_author_ranking_list">
                                        <div class="row">
                                          <div class="col-lg-3 col-sm-12">
                                            <div class="main">
                                              <img
                                                class=" ranking_author_bookcover "
                                                src={newimgbook}
                                              />
                                            </div>
                                          </div>
                                          <div class="col-lg-9 col-sm-12 ranking_right_box">
                                            <div class="description">
                                              <div>
                                                <h3 class="abt_author_action">
                                                  Action
                                                </h3>
                                                <h3 class="abt_author_book_name">
                                                  Book Name Here
                                                </h3>
                                              </div>
                                              <div class="p-3 res ">
                                                <img
                                                  class="img-fluid votee"
                                                  src={Vote}
                                                />

                                                <img
                                                  class="img-fluid votee"
                                                  src={Trashcan}
                                                />
                                              </div>
                                            </div>
                                            <div class="maincate mt-3">
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                            </div>

                                            <div className="ranking_chap_collections_div">
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-book chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  315 Chapters
                                                </p>
                                              </div>
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-heart chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  10.4k Collections
                                                </p>
                                              </div>
                                            </div>

                                            <div class="btnrww ranking_add_btns_new">
                                              <button class="reads">
                                                <span> Add To Waiting List </span>                                               
                                                <i class="fa-solid fa-clock iconn"></i>
                                              </button>
                                              <button class="reads">
                                                <span> Book Details </span>
                                                <i class="fa-solid fa-book-open iconn"></i>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      {/* new col end */}
                                    </div>

                                    <div class="col-md-6">
                                      {/* new col */}

                                      <div class="books abt_author_ranking_list">
                                        <div class="row">
                                          <div class="col-lg-3 col-sm-12">
                                            <div class="main">
                                              <img
                                                class=" ranking_author_bookcover "
                                                src={newimgbook}
                                              />
                                            </div>
                                          </div>
                                          <div class="col-lg-9 col-sm-12 ranking_right_box">
                                            <div class="description">
                                              <div>
                                                <h3 class="abt_author_action">
                                                  Action
                                                </h3>
                                                <h3 class="abt_author_book_name">
                                                  Book Name Here
                                                </h3>
                                              </div>
                                              <div class="p-3 res ">
                                                <img
                                                  class="img-fluid votee"
                                                  src={Vote}
                                                />

                                                <img
                                                  class="img-fluid votee"
                                                  src={Trashcan}
                                                />
                                              </div>
                                            </div>
                                            <div class="maincate mt-3">
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                            </div>

                                            <div className="ranking_chap_collections_div">
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-book chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  315 Chapters
                                                </p>
                                              </div>
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-heart chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  10.4k Collections
                                                </p>
                                              </div>
                                            </div>

                                            <div class="btnrww ranking_add_btns_new">
                                              <button class="reads">
                                                <span> Add To Waiting List </span>                                               
                                                <i class="fa-solid fa-clock iconn"></i>
                                              </button>
                                              <button class="reads">
                                                <span> Book Details </span>
                                                <i class="fa-solid fa-book-open iconn"></i>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      {/* new col end */}
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div
                                class="tab-pane fade"
                                id="pills-contact3"
                                role="tabpanel"
                                aria-labelledby="pills-contact-tab"
                              >
                                <div className="container">
                                  <div className="row">
                                    <div className="col-md-12 mt-2">
                                      <h3 className="top_rank_list_text">
                                        TOP OF ALL TIME
                                      </h3>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div class="col-md-6">
                                      {/* new col */}

                                      <div class="books abt_author_ranking_list">
                                        <div class="row">
                                          <div class="col-lg-3 col-sm-12">
                                            <div class="main">
                                              <img
                                                class=" ranking_author_bookcover "
                                                src={newimgbook}
                                              />
                                            </div>
                                          </div>
                                          <div class="col-lg-9 col-sm-12 ranking_right_box">
                                            <div class="description">
                                              <div>
                                                <h3 class="abt_author_action">
                                                  Action
                                                </h3>
                                                <h3 class="abt_author_book_name">
                                                  Book Name Here
                                                </h3>
                                              </div>
                                              <div class="p-3 res ">
                                                <img
                                                  class="img-fluid votee"
                                                  src={Vote}
                                                />

                                                <img
                                                  class="img-fluid votee"
                                                  src={Trashcan}
                                                />
                                              </div>
                                            </div>
                                            <div class="maincate mt-3">
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                            </div>

                                            <div className="ranking_chap_collections_div">
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-book chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  315 Chapters
                                                </p>
                                              </div>
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-heart chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  10.4k Collections
                                                </p>
                                              </div>
                                            </div>

                                            <div class="btnrww ranking_add_btns_new">
                                            <button class="reads">
                                                <span> Add To Waiting List </span>                                               
                                                <i class="fa-solid fa-clock iconn"></i>
                                              </button>
                                              <button class="reads">
                                                <span> Book Details </span>
                                                <i class="fa-solid fa-book-open iconn"></i>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      {/* new col end */}
                                    </div>

                                    <div class="col-md-6">
                                     {/* new col */}

                                     <div class="books abt_author_ranking_list">
                                        <div class="row">
                                          <div class="col-lg-3 col-sm-12">
                                            <div class="main">
                                              <img
                                                class=" ranking_author_bookcover "
                                                src={newimgbook}
                                              />
                                            </div>
                                          </div>
                                          <div class="col-lg-9 col-sm-12 ranking_right_box">
                                            <div class="description">
                                              <div>
                                                <h3 class="abt_author_action">
                                                  Action
                                                </h3>
                                                <h3 class="abt_author_book_name">
                                                  Book Name Here
                                                </h3>
                                              </div>
                                              <div class="p-3 res ">
                                                <img
                                                  class="img-fluid votee"
                                                  src={Vote}
                                                />

                                                <img
                                                  class="img-fluid votee"
                                                  src={Trashcan}
                                                />
                                              </div>
                                            </div>
                                            <div class="maincate mt-3">
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                            </div>

                                            <div className="ranking_chap_collections_div">
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-book chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  315 Chapters
                                                </p>
                                              </div>
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-heart chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  10.4k Collections
                                                </p>
                                              </div>
                                            </div>

                                            <div class="btnrww ranking_add_btns_new">
                                              <button class="reads">
                                                <span> Add To Waiting List </span>                                               
                                                <i class="fa-solid fa-clock iconn"></i>
                                              </button>
                                              <button class="reads">
                                                <span> Book Details </span>
                                                <i class="fa-solid fa-book-open iconn"></i>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      {/* new col end */}
                                    </div>
                                  </div>

                                  <div className="row">
                                    <div class="col-md-6">
                                      {/* new col */}

                                      <div class="books abt_author_ranking_list">
                                        <div class="row">
                                          <div class="col-lg-3 col-sm-12">
                                            <div class="main">
                                              <img
                                                class=" ranking_author_bookcover "
                                                src={newimgbook}
                                              />
                                            </div>
                                          </div>
                                          <div class="col-lg-9 col-sm-12 ranking_right_box">
                                            <div class="description">
                                              <div>
                                                <h3 class="abt_author_action">
                                                  Action
                                                </h3>
                                                <h3 class="abt_author_book_name">
                                                  Book Name Here
                                                </h3>
                                              </div>
                                              <div class="p-3 res ">
                                                <img
                                                  class="img-fluid votee"
                                                  src={Vote}
                                                />

                                                <img
                                                  class="img-fluid votee"
                                                  src={Trashcan}
                                                />
                                              </div>
                                            </div>
                                            <div class="maincate mt-3">
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                            </div>

                                            <div className="ranking_chap_collections_div">
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-book chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  315 Chapters
                                                </p>
                                              </div>
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-heart chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  10.4k Collections
                                                </p>
                                              </div>
                                            </div>

                                            <div class="btnrww ranking_add_btns_new">
                                              <button class="reads">
                                                <span> Add To Waiting List </span>                                               
                                                <i class="fa-solid fa-clock iconn"></i>
                                              </button>
                                              <button class="reads">
                                                <span> Book Details </span>
                                                <i class="fa-solid fa-book-open iconn"></i>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      {/* new col end */}
                                    </div>

                                    <div class="col-md-6">
                                      {/* new col */}

                                      <div class="books abt_author_ranking_list">
                                        <div class="row">
                                          <div class="col-lg-3 col-sm-12">
                                            <div class="main">
                                              <img
                                                class="ranking_author_bookcover "
                                                src={newimgbook}
                                              />
                                            </div>
                                          </div>
                                          <div class="col-lg-9 col-sm-12 ranking_right_box">
                                            <div class="description">
                                              <div>
                                                <h3 class="abt_author_action">
                                                  Action
                                                </h3>
                                                <h3 class="abt_author_book_name">
                                                  Book Name Here
                                                </h3>
                                              </div>
                                              <div class="p-3 res ">
                                                <img
                                                  class="img-fluid votee"
                                                  src={Vote}
                                                />

                                                <img
                                                  class="img-fluid votee"
                                                  src={Trashcan}
                                                />
                                              </div>
                                            </div>
                                            <div class="maincate mt-3">
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                            </div>

                                            <div className="ranking_chap_collections_div">
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-book chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  315 Chapters
                                                </p>
                                              </div>
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-heart chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  10.4k Collections
                                                </p>
                                              </div>
                                            </div>

                                            <div class="btnrww ranking_add_btns_new">
                                              <button class="reads">
                                                <span> Add To Waiting List </span>                                               
                                                <i class="fa-solid fa-clock iconn"></i>
                                              </button>
                                              <button class="reads">
                                                <span> Book Details </span>
                                                <i class="fa-solid fa-book-open iconn"></i>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      {/* new col end */}
                                    </div>
                                  </div>

                                  <div className="row">
                                    <div class="col-md-6">
                                      {/* new col */}

                                      <div class="books abt_author_ranking_list">
                                        <div class="row">
                                          <div class="col-lg-3 col-sm-12">
                                            <div class="main">
                                              <img
                                                class=" ranking_author_bookcover "
                                                src={newimgbook}
                                              />
                                            </div>
                                          </div>
                                          <div class="col-lg-9 col-sm-12 ranking_right_box">
                                            <div class="description">
                                              <div>
                                                <h3 class="abt_author_action">
                                                  Action
                                                </h3>
                                                <h3 class="abt_author_book_name">
                                                  Book Name Here
                                                </h3>
                                              </div>
                                              <div class="p-3 res ">
                                                <img
                                                  class="img-fluid votee"
                                                  src={Vote}
                                                />

                                                <img
                                                  class="img-fluid votee"
                                                  src={Trashcan}
                                                />
                                              </div>
                                            </div>
                                            <div class="maincate mt-3">
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                            </div>

                                            <div className="ranking_chap_collections_div">
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-book chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  315 Chapters
                                                </p>
                                              </div>
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-heart chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  10.4k Collections
                                                </p>
                                              </div>
                                            </div>

                                            <div class="btnrww ranking_add_btns_new">
                                              <button class="reads">
                                                <span> Add To Waiting List </span>                                               
                                                <i class="fa-solid fa-clock iconn"></i>
                                              </button>
                                              <button class="reads">
                                                <span> Book Details </span>
                                                <i class="fa-solid fa-book-open iconn"></i>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      {/* new col end */}
                                    </div>

                                    <div class="col-md-6">
                                      {/* new col */}

                                      <div class="books abt_author_ranking_list">
                                        <div class="row">
                                          <div class="col-lg-3 col-sm-12">
                                            <div class="main">
                                              <img
                                                class=" ranking_author_bookcover "
                                                src={newimgbook}
                                              />
                                            </div>
                                          </div>
                                          <div class="col-lg-9 col-sm-12 ranking_right_box">
                                            <div class="description">
                                              <div>
                                                <h3 class="abt_author_action">
                                                  Action
                                                </h3>
                                                <h3 class="abt_author_book_name">
                                                  Book Name Here
                                                </h3>
                                              </div>
                                              <div class="p-3 res ">
                                                <img
                                                  class="img-fluid votee"
                                                  src={Vote}
                                                />

                                                <img
                                                  class="img-fluid votee"
                                                  src={Trashcan}
                                                />
                                              </div>
                                            </div>
                                            <div class="maincate mt-3">
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                            </div>

                                            <div className="ranking_chap_collections_div">
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-book chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  315 Chapters
                                                </p>
                                              </div>
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-heart chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  10.4k Collections
                                                </p>
                                              </div>
                                            </div>

                                            <div class="btnrww ranking_add_btns_new">
                                              <button class="reads">
                                                <span> Add To Waiting List </span>                                               
                                                <i class="fa-solid fa-clock iconn"></i>
                                              </button>
                                              <button class="reads">
                                                <span> Book Details </span>
                                                <i class="fa-solid fa-book-open iconn"></i>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      {/* new col end */}
                                    </div>
                                  </div>

                                  <div className="row">
                                    <div class="col-md-6">
                                      {/* new col */}

                                      <div class="books abt_author_ranking_list">
                                        <div class="row">
                                          <div class="col-lg-3 col-sm-12">
                                            <div class="main">
                                              <img
                                                class=" ranking_author_bookcover "
                                                src={newimgbook}
                                              />
                                            </div>
                                          </div>
                                          <div class="col-lg-9 col-sm-12 ranking_right_box">
                                            <div class="description">
                                              <div>
                                                <h3 class="abt_author_action">
                                                  Action
                                                </h3>
                                                <h3 class="abt_author_book_name">
                                                  Book Name Here
                                                </h3>
                                              </div>
                                              <div class="p-3 res ">
                                                <img
                                                  class="img-fluid votee"
                                                  src={Vote}
                                                />

                                                <img
                                                  class="img-fluid votee"
                                                  src={Trashcan}
                                                />
                                              </div>
                                            </div>
                                            <div class="maincate mt-3">
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                            </div>

                                            <div className="ranking_chap_collections_div">
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-book chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  315 Chapters
                                                </p>
                                              </div>
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-heart chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  10.4k Collections
                                                </p>
                                              </div>
                                            </div>

                                            <div class="btnrww ranking_add_btns_new">
                                              <button class="reads">
                                                <span> Add To Waiting List </span>                                               
                                                <i class="fa-solid fa-clock iconn"></i>
                                              </button>
                                              <button class="reads">
                                                <span> Book Details </span>
                                                <i class="fa-solid fa-book-open iconn"></i>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      {/* new col end */}
                                    </div>

                                    <div class="col-md-6">
                                      {/* new col */}

                                      <div class="books abt_author_ranking_list">
                                        <div class="row">
                                          <div class="col-lg-3 col-sm-12">
                                            <div class="main">
                                              <img
                                                class=" ranking_author_bookcover "
                                                src={newimgbook}
                                              />
                                            </div>
                                          </div>
                                          <div class="col-lg-9 col-sm-12 ranking_right_box">
                                            <div class="description">
                                              <div>
                                                <h3 class="abt_author_action">
                                                  Action
                                                </h3>
                                                <h3 class="abt_author_book_name">
                                                  Book Name Here
                                                </h3>
                                              </div>
                                              <div class="p-3 res ">
                                                <img
                                                  class="img-fluid votee"
                                                  src={Vote}
                                                />

                                                <img
                                                  class="img-fluid votee"
                                                  src={Trashcan}
                                                />
                                              </div>
                                            </div>
                                            <div class="maincate mt-3">
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                              <button class="author_book_category_btn">
                                                Category{" "}
                                              </button>
                                            </div>

                                            <div className="ranking_chap_collections_div">
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-book chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  315 Chapters
                                                </p>
                                              </div>
                                              <div className="chap_collections_with_icon">
                                                <i class="fa-solid fa-heart chap_collections_icon"></i>
                                                <p className="chap_collections_text">
                                                  10.4k Collections
                                                </p>
                                              </div>
                                            </div>

                                            <div class="btnrww ranking_add_btns_new">
                                              <button class="reads">
                                                <span> Add To Waiting List </span>                                               
                                                <i class="fa-solid fa-clock iconn"></i>
                                              </button>
                                              <button class="reads">
                                                <span> Book Details </span>
                                                <i class="fa-solid fa-book-open iconn"></i>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      {/* new col end */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </UserLayout>
    </>
  );
};
