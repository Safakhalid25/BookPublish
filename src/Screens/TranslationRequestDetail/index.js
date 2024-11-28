import { useState, useEffect } from "react";
import { Link, json, useParams } from "react-router-dom";
import BackButton from "../../Components/BackButton";
import CustomModal from "../../Components/CustomModal";
import CustomButton from "../../Components/CustomButton";
import Accordion from "react-bootstrap/Accordion";
import CustomInput from "../../Components/CustomInput";
import preview from "../../Assets/images/image_74-removebg-preview.png";
import CustomPagination from "../../Components/CustomPagination";
import CustomCard from "../../Components/CustomCard";
import CountdownTimer from "../../Components/CountdownTimer";
import backarrow from "../../Assets/images/backarrow.png";
import fan1 from "../../Assets/images/fan1.png";
import fan2 from "../../Assets/images/fan2.png";
import silverMedal from "../../Assets/images/silverMedal.png";
import goldenMedal from "../../Assets/images/goldenMedal.png";
import fan3 from "../../Assets/images/fan3.png";
import medal3 from "../../Assets/images/medal3.png";
import user_prof from "../../Assets/images/user_prof.png";
import pizza from "../../Assets/images/pizza.png";
import light from "../../Assets/images/light.png";
import manaPoint from "../../Assets/images/manaPoint.png";
import sodaCan from "../../Assets/images/sodaCan.png";
import chair from "../../Assets/images/chair.png";
import car from "../../Assets/images/car.png";
import horse from "../../Assets/images/horse.png";
import castle from "../../Assets/images/castle.png";
import rocket from "../../Assets/images/rocket.png";
import gold from "../../Assets/images/gold.png";
import dropdown from "../../Assets/images/dropdown.png";
import T_A_book_1 from "../../Assets/images/T_A_book_1.png";
import colon from "../../Assets/images/colon.png";
import comments_profile from "../../Assets/images/comments_profile.png";
import line_timer from "../../Assets/images/line_timer.png";
import badge from "../../Assets/images/author-of-month-badge-1.png";

import add_comments from "../../Assets/images/add_comments.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
  TopAuthorAfter,
  TopAuthorBefore,
  TopAuthorBook1,
  TopAuthorBook2,
  TopAuthorBook3,
  TopAuthorCartoon,
  User_Icon,
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
import Slider from "react-slick";
import RangeSlider from "react-bootstrap-range-slider";
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
import showmoreicon from "../../Assets/images/showmoreicon.png";
import pauseicon from "../../Assets/images/pauseicon.png";
import palyiconread from "../../Assets/images/palyiconread.png";
import fastforward from "../../Assets/images/fastforward.png";
import reverseicon from "../../Assets/images/reverseicon.png";
import volumeiocn from "../../Assets/images/volumeiocn.png";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import AccordionContext from "react-bootstrap/AccordionContext";

import { BookListingCover } from "../../Assets/images";
import { useContext } from "react";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import ReactStars from "react-rating-stars-component";

export const TranslationRequestDetail = ({ eventKey, children }) => {
  const { activeEventKey } = useContext(AccordionContext);

  const [data, setData] = useState({});
  const [inputValue, setInputValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const [books, setBooks] = useState([]);
  const [value, setValue] = useState(25);
  const reusableSetting = (item, centerMode) => {
    return {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: item,
      slidesToScroll: 1,
      centerMode: centerMode,
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 5,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 2,
          },
        },
      ],
    };
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
  const settingsForFourItems = reusableSetting(4, false);

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

  const ratingChanged = (newRating) => {
    console.log(newRating);
    setReviewData({
      ...reviewData,
      rating: newRating,
    });
  };

  const ratingQuality = (newRating) => {
    console.log(newRating);
    setReviewData({
      ...reviewData,
      writing_quality: newRating,
    });
  };

  const ratingStory = (newRating) => {
    console.log(newRating);
    setReviewData({
      ...reviewData,
      story_development: newRating,
    });
  };

  const ratingDesign = (newRating) => {
    console.log(newRating);
    setReviewData({
      ...reviewData,
      character_design: newRating,
    });
  };

  const ratingStability = (newRating) => {
    console.log(newRating);
    setReviewData({
      ...reviewData,
      updating_stability: newRating,
    });
  };

  const ratingWorld = (newRating) => {
    console.log(newRating);
    setReviewData({
      ...reviewData,
      world_background: newRating,
    });
  };

  const chapterData = (paramId) => {
    document.title = "Tim User | Book Detail";
    document.querySelector(".loaderBox").classList.remove("d-none");
    fetch(
      `https://custom.mystagingserver.site/Tim-WDLLC/public/api/book_view/${16}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          // 'Authorization': `Bearer ${LogoutData}`
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        document.querySelector(".loaderBox").classList.add("d-none");
        console.log(data);

        setData(data.data);
      })
      .catch((error) => {
        document.querySelector(".loaderBox").classList.add("d-none");
        console.log(error);
      });
  };

  const chapterDataLogin = (LoginparamId) => {
    document.title = "Tim User | Book Detail";
    document.querySelector(".loaderBox").classList.remove("d-none");
    fetch(
      `https://custom.mystagingserver.site/Tim-WDLLC/public/api/user/book_view/${16}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${LoginToken}`,
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        document.querySelector(".loaderBox").classList.add("d-none");
        console.log(data);

        setData(data.data);
      })
      .catch((error) => {
        document.querySelector(".loaderBox").classList.add("d-none");
        console.log(error);
      });
  };
  const [textToSpeech, setTextToSpeech] = useState(false);

  const reviewSubmit = () => {
    document.querySelector(".loaderBox").classList.remove("d-none");

    const formDataMethod = new FormData();

    for (const key in reviewData) {
      formDataMethod.append(key, reviewData[key]);
    }

    fetch(
      `https://custom.mystagingserver.site/Tim-WDLLC/public/api/user/review_add_update`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${LoginToken}`,
        },
        body: formDataMethod,
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        document.querySelector(".loaderBox").classList.add("d-none");
        console.log(data);
        setShowModal(false);
        setReviewModal(true);
        setTimeout(() => {
          setReviewModal(false);
        }, 1000);

        chapterDataLogin(id);
      })
      .catch((error) => {
        document.querySelector(".loaderBox").classList.add("d-none");
        console.error("Error during fetch:", error);
      });
  };

  const handleCheckboxChange = () => {
    setTextToSpeech(!textToSpeech);
  };

  const BuyChapter = (chapterID) => {
    document.querySelector(".loaderBox").classList.remove("d-none");

    const formData = new FormData();
    formData.append("chapter_id", chapterID);
    formData.append("text_to_speech_fee", textToSpeech); // Include the text_to_speech value in the FormData

    fetch(
      `https://custom.mystagingserver.site/Tim-WDLLC/public/api/user/book_purchase/${id}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${LoginToken}`,
        },
        body: formData,
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        document.querySelector(".loaderBox").classList.add("d-none");
        console.log(data);
        setShowModal(false);
        setShowModal1(true);
        setTimeout(() => {
          setShowModal1(false);
        }, 1000);
        chapterDataLogin(id);
      })
      .catch((error) => {
        document.querySelector(".loaderBox").classList.add("d-none");
        console.error("Error during fetch:", error);
      });
  };

  const GetOrderHistory = () => {
    document.querySelector(".loaderBox").classList.remove("d-none");
    fetch(
      `https://custom.mystagingserver.site/Tim-WDLLC/public/api/user/view-order-history`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${LoginToken}`,
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        document.querySelector(".loaderBox").classList.add("d-none");
        console.log("order", data);
      })
      .catch((error) => {
        document.querySelector(".loaderBox").classList.add("d-none");
        console.log(error);
      });
  };

  const PaymentModal = (amount) => {
    setModalData(amount);
    setShowModal(true);
  };

  useEffect(() => {
    console.log(modalData);
  }, [modalData]);

  useEffect(() => {
    if (!LoginToken) {
      setChapterShow(false);
      chapterData(id);
    } else {
      chapterDataLogin(id);
      setChapterShow(true);
    }

    GetOrderHistory();
  }, []);

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

  const handleCheckboxClick = (id) => {
    const formData = new FormData();
    formData.append("chapter_id", id);

    fetch(
      `https://custom.mystagingserver.site/Tim-WDLLC/public/api/user/book_purchase/${id}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${LoginToken}`,
        },
        body: formData,
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        document.querySelector(".loaderBox").classList.add("d-none");
        console.log(data);
        setShowModal(false);
        setShowModal1(true);
        setTimeout(() => {
          setShowModal1(false);
        }, 1000);
        chapterDataLogin(id);
      })
      .catch((error) => {
        document.querySelector(".loaderBox").classList.add("d-none");
        console.error("Error during fetch:", error);
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

  useEffect(() => {
    adsListing();
    BookListing();
  }, []);

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
                <h1 className="typewriter"> Translation Request </h1>
              </div>
            </div>
          </div>
        </section>
        <section className="cover">
          <div className="container">
            <div className="dashCard">
              <div className="productInfo custom_mob_view">
                <div class="row mt-4 ">
                  <div class="col-md-7">
                    <h3 id="" className="last_hope_heading">
                      Last Hope
                    </h3>
                    <div className=" mt-3  gap-4  d-flex g-3 mx-auto">
                      <button className="all">
                        <span> Vote Now </span>{" "}
                        <i class="fas fa-vote-yea alliconss"></i>
                      </button>

                      <button className="all">
                        <span> Notifications </span>{" "}
                        <i class="fa-solid fa-bell alliconss"></i>
                      </button>
                    </div>
                  </div>

                  <div class="col-md-5">
                    <div className="timer_countdown mb-4 mt-2">
                      <div id="countdown App">
                        <CountdownTimer />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row  mb-3">
                <div className="col-12">
                  <div className="row ">
                    <div className="col-lg-4 mb-4">
                      {/* <p className="translation_para mt-5">
                        {" "}
                        TRANSLATION REQUEST RANKING NO: 1{" "}
                      </p> */}
                      <h4 className="book_ranking mb-2"> RANKING NO: 1 </h4>
                      <div className="d-flex  justify-content-center gap-2 mb-3">
                        <i class="fa-solid fa-star book_rate_star"></i>
                        <i class="fa-solid fa-star book_rate_star"></i>
                        <i class="fa-solid fa-star book_rate_star"></i>
                        <i class="fa-solid fa-star book_rate_star"></i>
                        <i class="fa-solid fa-star book_rate_star book_rate_color_change"></i>
                      </div>
                      <p className="book_review mb-3">
                        61,324 Customer Reviews
                      </p>

                      <div className="productInfo d-flex  justify-content-center mb-3 ">
                        {" "}
                        <button className="all mb-3">
                          <span> Add to Library </span>{" "}
                          <i class="fa-solid fa-book-open alliconss"></i>
                        </button>
                      </div>
                      <div className="d-flex justify-content-center productImageNew mb-4">
                        <img
                          src={badge}
                          className="img-fluid badge_productImg"
                        />
                        <img src={T_A_book_1} className="img-fluid" />
                      </div>

                      <div className="productInfo custom_mob_view">
                        <div class="row mb-4">
                          <div class="col-md-12">
                            <div class="syn">
                              <h4 className="syn_heading">Synopsis</h4>
                              <p class="txt">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book.
                              </p>
                              <div className="new_text_readers_icons_div">
                                <button className="all">
                                  <span> Show More </span>{" "}
                                  <img
                                    className="img-fluid  alliconss"
                                    src={showmoreicon}
                                  />{" "}
                                </button>

                                <div className="control_text_readers_icons_box">
                                  <img
                                    src={pauseicon}
                                    className="new_read_icons_img"
                                    draggable="false"
                                  />
                                  <img
                                    src={palyiconread}
                                    className="new_read_icons_img"
                                    draggable="false"
                                  />
                                  <img
                                    src={fastforward}
                                    className="new_read_icons_img"
                                    draggable="false"
                                  />
                                  <img
                                    src={reverseicon}
                                    className="new_read_icons_img"
                                    draggable="false"
                                  />
                                  <div className="content_speed_div">
                                    <img
                                      src={volumeiocn}
                                      className="new_read_icons_img"
                                      draggable="false"
                                    />
                                    <RangeSlider
                                      className="speed_chap"
                                      onChange={(e) => setValue(e.target.value)}
                                    />
                                  </div>
                                  <p className="speed_chap_text">1.5X</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="justify-content-center mb-4 m-auto text-center ">
                        <span className="mb-2  m-auto text-center">
                          <p className="translation_para text-center mb-2">
                            Translation Status:
                          </p>
                          {/* <p className=" tabtags changed_book_status_btn  mx-auto  text-center mb-2">
                            {" "}
                            Book Category : {data?.category?.name}{" "}
                          </p> */}
                          <p className=" tabtags changed_book_status_btn requested_tab_bg  mx-auto  text-center mb-2">
                            {" "}
                            Requested
                          </p>
                        </span>
                        <span className="d-flex mb-2 justify-content-center ">
                          <p className=" translate_status_btn_text  tabtags book_status_btn mx-auto text-center">
                            {" "}
                            Type : {data?.types?.name}{" "}
                          </p>
                        </span>
                        <span className="d-flex  mb-2 justify-content-center ">
                          <p className="translate_status_btn_text  tabtags book_status_btn mx-auto text-center">
                            {" "}
                            Genre : {data?.genre?.name}{" "}
                          </p>
                        </span>
                        <span className="d-flex  mb-2 justify-content-center ">
                          <p className="translate_status_btn_text  tabtags book_status_btn mx-auto text-center">
                            {" "}
                            Views: 841
                          </p>
                        </span>
                        <span className="d-flex  mb-2 justify-content-center ">
                          <p className="translate_status_btn_text tabtags book_status_btn mx-auto text-center">
                            {" "}
                            Number of votes: 841
                          </p>
                        </span>
                        <span className="d-flex  justify-content-center ">
                          <p className="translate_status_btn_text tabtags book_status_btn mx-auto text-center">
                            {" "}
                            Maturity Rating: 18+
                          </p>
                        </span>
                      </div>

                      <Container className="justify-content-center m-auto text-center mt-4">
                        <h4>Tags</h4>
                        <Row className="mb-2 mt-4 gap-4">
                          {tags.map((tagRow, rowIndex) => (
                            <Row key={rowIndex} className=" ml-4 gap-3">
                              {tagRow.map((tag, colIndex) => (
                                <Col
                                  key={colIndex}
                                  className="tabtag books_tab_btns "
                                >
                                  {tag}
                                </Col>
                              ))}
                            </Row>
                          ))}
                        </Row>
                      </Container>
                      <div>
                        <div className="d-flex  gap-4 mb-2 mt-4 justify-content-center mb-4 m-auto text-center ">
                          <div>
                            {" "}
                            <p className="mb-2 new_language_author_text">
                              Author
                            </p>
                            <p className="textsha   ">Admin</p>
                          </div>

                          <div>
                            {" "}
                            <p className="mb-2 new_language_author_text">
                              Original Language
                            </p>{" "}
                            <p className="textsha">English </p>
                          </div>
                          <div>
                            {" "}
                            <p className="mb-2 new_language_author_text">
                              Release Date
                            </p>{" "}
                            <p className="textsha"> 2024 </p>
                          </div>
                        </div>
                        <div className=" d-flex gap-4 mb-2  justify-content-center mb-4 m-auto text-center "></div>
                      </div>

                      <span className="mb-2 justify-content-center  m-auto text-center">
                        <p className="mb-2 ">Affiliated Group</p>
                        <p className=" tabtags  mx-auto p-2 text-center group_tag_btn">
                          {" "}
                          Lorem Ispurm
                        </p>
                      </span>
                      <span className="mb-2 justify-content-center  m-auto text-center">
                        <p className="mb-2 "> Original Publisher </p>
                        <p className=" tabtags mb-2  mx-auto p-2 text-center group_tag_btn">
                          {" "}
                          Lorem Ispurm
                        </p>
                      </span>
                      <span className="mb-2    justify-content-center  m-auto text-center">
                        <p className="mb-2 ">MTL Editor</p>
                        <p className=" tabtags mb-2  mx-auto p-2 text-center group_tag_btn">
                          {" "}
                          Lorem Ispurm
                        </p>
                      </span>

                      <span className="mb-2 justify-content-center  m-auto text-center">
                        <p className="mb-2 ">Affiliated Series</p>
                        <p className=" tabtags mb-2  mx-auto p-2 text-center group_tag_btn">
                          {" "}
                          Lorem Ispurm
                        </p>
                      </span>
                      <span className="mb-2  justify-content-center m-auto text-center">
                        <p className="mb-2 "> Status</p>
                        <p className=" tabtags mb-2  mx-auto p-2 text-center group_tag_btn">
                          {" "}
                          Completed
                        </p>
                      </span>
                    </div>

                    <div className="col-lg-8 mb-4 ">
                      <div className="productInfo mb-4">
                        <div class="row mt-5 custom_mob_view_two">
                          <div class="col-md-7">
                            <h3 id="" className="last_hope_heading">
                              Last Hope
                            </h3>
                            <div className=" mt-3  gap-4  d-flex g-3 mx-auto">
                              <button className="all">
                                <span> Vote Now </span>{" "}
                                <i class="fas fa-vote-yea alliconss"></i>
                              </button>

                              <button className="all">
                                <span> Notifications </span>{" "}
                                <i class="fa-solid fa-bell alliconss"></i>
                              </button>
                            </div>
                          </div>

                          <div class="col-md-5">
                            <div className="timer_countdown mb-4 mt-2">
                              <div id="countdown App">
                                <CountdownTimer />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="row custom_mob_view_two ">
                          <div class="col-md-12">
                            <div class="syn">
                              <h4 className="syn_heading">Synopsis</h4>
                              <p class="txt">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book.
                              </p>
                              <div className="new_text_readers_icons_div">
                                <button className="all">
                                  <span> Show More </span>{" "}
                                  <img
                                    className="img-fluid  alliconss"
                                    src={showmoreicon}
                                  />{" "}
                                </button>

                                <div className="control_text_readers_icons_box">
                                  <img
                                    src={pauseicon}
                                    className="new_read_icons_img"
                                    draggable="false"
                                  />
                                  <img
                                    src={palyiconread}
                                    className="new_read_icons_img"
                                    draggable="false"
                                  />
                                  <img
                                    src={fastforward}
                                    className="new_read_icons_img"
                                    draggable="false"
                                  />
                                  <img
                                    src={reverseicon}
                                    className="new_read_icons_img"
                                    draggable="false"
                                  />
                                  <div className="content_speed_div">
                                    <img
                                      src={volumeiocn}
                                      className="new_read_icons_img"
                                      draggable="false"
                                    />
                                    <RangeSlider
                                      className="speed_chap"
                                      onChange={(e) => setValue(e.target.value)}
                                    />
                                  </div>
                                  <p className="speed_chap_text">1.5X</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* {CapterShow ? (
                        <div className="row select new-select_bg">
                          <div className="col-md-12">
                            <Accordion defaultActiveKey="0">
                              {currentItems &&
                                data?.chapters.map((item, index) => (
                                  <Accordion.Item eventKey={index} key={index}>
                                    <Accordion.Header
                                      className="acpara accordation"
                                      style={{
                                        // backgroundColor: "#f7944d",
                                        color: "black",
                                      }}
                                    >
                                      {`Chapter ${item?.id}`}{" "}
                                      {item?.latest && (
                                        // <span className="newChapter">
                                        //   New
                                        // </span>

                                        <div class="new">
                                          <button class="chapbtn">
                                            {" "}
                                            NEW!{" "}
                                          </button>
                                        </div>
                                      )}
                                    </Accordion.Header>
                                    <Accordion.Body>
                                      {item?.isPay ? (
                                        <>
                                          <div className="adiobtn d-flex">
                                            {" "}
                                            <h3 className="text-capitalize">
                                              {item?.title}
                                            </h3>
                                            {item.text_to_speech === true ? (
                                              <div className="playbtns d-flex gap-12">
                                                <div className="actionBtn">
                                                  <button
                                                    className="play"
                                                    onClick={() =>
                                                      handleStart(item?.id)
                                                    }
                                                    disabled={
                                                      isPlaying &&
                                                      currentChapter !==
                                                      item?.id
                                                    }
                                                  >
                                                    <i className="fa-solid fa-play"></i>
                                                  </button>
                                                </div>
                                                <div className="actionBtn">
                                                  <button
                                                    className="play"
                                                    onClick={
                                                      chapterupdateSpeechRate
                                                    }
                                                  >
                                                    {chaptervoice}X
                                                  </button>
                                                </div>
                                                <div className="actionBtn">
                                                  <div className="actionBtn">
                                                    <button
                                                      className="pause"
                                                      onClick={handlePause}
                                                      disabled={
                                                        !isPlaying || isPaused
                                                      }
                                                    >
                                                      <i className="fa-regular fa-circle-pause"></i>
                                                    </button>
                                                  </div>
                                                </div>
                                                <div className="actionBtn">
                                                  <button
                                                    className="resume"
                                                    onClick={handleResume}
                                                    disabled={!isPaused}
                                                  >
                                                    <i className="fa-solid fa-play"></i>
                                                  </button>
                                                </div>
                                                <div className="actionBtn">
                                                  <button
                                                    className="stop"
                                                    onClick={handleStop}
                                                    disabled={
                                                      !isPlaying && !isPaused
                                                    }
                                                  >
                                                    <i className="fa-solid fa-stop"></i>
                                                  </button>
                                                </div>
                                              </div>
                                            ) : (
                                              <div className="actionBtn">
                                                {" "}
                                                <button
                                                  className="play"
                                                  onClick={() =>
                                                    handleStart(item?.id)
                                                  }
                                                  disabled
                                                >
                                                  <i className="fa-solid fa-play"></i>
                                                </button>
                                              </div>
                                            )}
                                          </div>

                                          <p> {item?.description}</p>
                                        </>
                                      ) : (
                                        <div className="text-center">
                                          <button
                                            type="button"
                                            onClick={() => {
                                              PaymentModal(item);
                                            }}
                                            className="primaryButton btn text- white"
                                            style={{
                                              backgroundColor: "#f7944d",
                                              color: "black",
                                            }}
                                          >
                                            Pay {item?.price} Mana For this
                                            Chapter
                                          </button>
                                        </div>
                                      )}
                                    </Accordion.Body>
                                  </Accordion.Item>
                                ))}
                            </Accordion>
                          </div>
                          <Tabs
                            defaultActiveKey="home"
                            id="uncontrolled-tab-example"
                            className="mb-3"
                          >
                            
                          </Tabs>
                        </div>
                      ) : (
                        <p className="text-center">
                          Please <Link to="/login">Login</Link> To See Chapters
                          for this Book
                        </p>
                      )} */}

                      {/* <div className="row ">
                        <div className="book__listing-pagination  mb-4">
                          <nav aria-label="Page navigation example  mb-4">
                           


                            <CustomPagination
                              itemsPerPage={itemsPerPage}
                              totalItems={data?.chapters?.length}
                              currentPage={currentPage}
                              onPageChange={handlePageChange}
                            />
                          </nav>

                        </div>
                      </div> */}

                      <section className="custom_modal_scroll new_comment_section_bg">
                        <div className="container">
                          <div className="row ">
                            <div className="col-md-12">
                              <div className="position-relative">
                                <div className="comments_filter_div">
                                  <h3 className="second_comments_heading">
                                    {" "}
                                    COMMENTS{" "}
                                  </h3>
                                  <button class="comments_filters">
                                    <span> Filter </span>{" "}
                                    <img
                                      className="img-fluid comments_filters_icon"
                                      src={dropdown}
                                    />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="comments_section_divider"></div>

                          <div className="row comment_box_row">
                            <div className="col-md-1">
                              <div className="comments_raiting_div">
                                <i class="fa-solid fa-plus comment_raiting_signs"></i>
                                <div className="comments_divider"></div>
                                <p className="comment_raiting_numbers">5</p>
                                <div className="comments_divider"></div>
                                <i class="fa-solid fa-minus comment_raiting_signs "></i>
                              </div>
                            </div>
                            <div className="col-md-11">
                              <div className="comments_box_main_div">
                                <div>
                                  <div className="comments_profile_div">
                                    <img
                                      src={comments_profile}
                                      className="comments_profile img-fluid"
                                    />
                                    <p className="comments_username">
                                      Username 123{" "}
                                      <span className="comments_date">
                                        {" "}
                                        13-Feb-2024{" "}
                                      </span>
                                    </p>
                                  </div>
                                  <p className="comments_text">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam,
                                  </p>
                                </div>
                                <div className="reply_text_with_icon">
                                  <i class="fa-solid fa-reply reply_icon"></i>

                                  <p className="reply_text">Reply</p>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="row comment_box_row">
                            <div className="col-md-1">
                              <div className="comments_raiting_div">
                                <i class="fa-solid fa-plus comment_raiting_signs"></i>
                                <div className="comments_divider"></div>
                                <p className="comment_raiting_numbers">5</p>
                                <div className="comments_divider"></div>
                                <i class="fa-solid fa-minus comment_raiting_signs "></i>
                              </div>
                            </div>
                            <div className="col-md-11">
                              <div className="comments_box_main_div">
                                <div>
                                  <div className="comments_profile_div">
                                    <img
                                      src={comments_profile}
                                      className="comments_profile img-fluid"
                                    />
                                    <p className="comments_username">
                                      Username 123{" "}
                                      <span className="comments_date">
                                        {" "}
                                        13-Feb-2024{" "}
                                      </span>
                                    </p>
                                  </div>
                                  <p className="comments_text">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam,
                                  </p>
                                </div>
                                <div className="reply_text_with_icon">
                                  <i class="fa-solid fa-reply reply_icon"></i>

                                  <p className="reply_text">Reply</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row second_comment_box_row ms-auto">
                            <div className="col-md-1">
                              <div className="second_comments_raiting_div">
                                <i class="fa-solid fa-plus comment_raiting_signs"></i>
                                <div className="comments_divider"></div>
                                <p className="comment_raiting_numbers">5</p>
                                <div className="comments_divider"></div>
                                <i class="fa-solid fa-minus comment_raiting_signs "></i>
                              </div>
                            </div>
                            <div className="col-md-11">
                              <div className="comments_box_main_div">
                                <div>
                                  <div className="comments_profile_div">
                                    <img
                                      src={comments_profile}
                                      className="comments_profile img-fluid"
                                    />
                                    <p className="comments_username">
                                      Username 123{" "}
                                      <span className="comments_date">
                                        {" "}
                                        13-Feb-2024{" "}
                                      </span>
                                    </p>
                                  </div>
                                  <p className="comments_text">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam,
                                  </p>
                                </div>
                                <div className="reply_text_with_icon">
                                  <i class="fa-solid fa-reply reply_icon"></i>

                                  <p className="reply_text">Reply</p>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="row second_comment_box_row ms-auto">
                            <div className="col-md-1">
                              <div className="second_comments_raiting_div">
                                <i class="fa-solid fa-plus comment_raiting_signs"></i>
                                <div className="comments_divider"></div>
                                <p className="comment_raiting_numbers">5</p>
                                <div className="comments_divider"></div>
                                <i class="fa-solid fa-minus comment_raiting_signs "></i>
                              </div>
                            </div>
                            <div className="col-md-11">
                              <div className="comments_box_main_div">
                                <div>
                                  <div className="comments_profile_div">
                                    <img
                                      src={comments_profile}
                                      className="comments_profile img-fluid"
                                    />
                                    <p className="comments_username">
                                      Username 123{" "}
                                      <span className="comments_date">
                                        {" "}
                                        13-Feb-2024{" "}
                                      </span>
                                    </p>
                                  </div>
                                  <p className="comments_text">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam,
                                  </p>
                                </div>
                                <div className="reply_text_with_icon">
                                  <i class="fa-solid fa-pen comments_edit_icons"></i>
                                  <i class="fa-solid fa-trash comments_edit_icons comments_delete_icons"></i>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-md-12">
                              <div className="add_comments_div">
                                <div className="d-flex gap-2 w-100">
                                  <span>
                                    <img src={add_comments} />
                                  </span>
                                  <input
                                    className="comments_input"
                                    type="text"
                                    id="fname"
                                    name="fname"
                                    placeholder="Add Comment"
                                  />
                                </div>

                                <div>
                                  <button className="comment_btn">Send</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>

                      <div class="rate">
                        <div class="container">
                          <div class="ratebg">
                            <div class="row justify-content-center">
                              <div class="col-sm-12 col-lg-3 my-auto ">
                                <div class="star">
                                  <h2>4.5</h2>
                                  <img class="img-fluid" src={Star} />
                                </div>
                                <button>653 reviews</button> <br />
                                <button class="rev" onClick={handleshowcomment}>
                                  Add Review
                                </button>
                              </div>

                              <div class="col-12 col-sm-12 col-lg-2 my-auto ">
                                <div class="num">
                                  <p>5 </p>
                                  <i class="fa-solid fa-star numstar"></i>
                                  <div class="line"></div>
                                </div>
                                <div class="num">
                                  <p>4 </p>
                                  <i class="fa-solid fa-star numstar"></i>
                                  <div class="line1"></div>
                                </div>
                                <div class="num">
                                  <p>3 </p>
                                  <i class="fa-solid fa-star numstar"></i>
                                  <div class="line2"></div>
                                </div>
                                <div class="num">
                                  <p>2 </p>
                                  <i class="fa-solid fa-star numstar"></i>
                                  <div class="line3"></div>
                                </div>
                                <div class="num">
                                  <p>1 </p>
                                  <i class="fa-solid fa-star numstar"></i>
                                  <div class="line4"></div>
                                </div>
                              </div>
                              <div class="col-12 col-sm-12 col-lg-7">
                                <div class="strong">
                                  {data?.reviews &&
                                    data?.reviews.map((item, index) => (
                                      <div>
                                        <div class="num mb-2 ">
                                          <div>
                                            <img
                                              class="img-fluid starimg"
                                              src={Ellipse}
                                            />
                                          </div>
                                          <div>
                                            <p class="review mb-2 ">
                                              {item?.user?.name}
                                            </p>
                                            <div className="bookdetail-date d-flex">
                                              <span class="rev">
                                                13-Feb-2024
                                              </span>
                                              <span class="rev">
                                                Michael Anderson
                                              </span>{" "}
                                            </div>
                                          </div>
                                        </div>
                                        <div>
                                          <p class="revpara mb-3">
                                            {item?.review}
                                          </p>
                                        </div>

                                        <div className=" ">
                                          <div className="reviewStar">
                                            <label>
                                              <p className="font-weight-bold">
                                                Writing Quality
                                              </p>
                                            </label>

                                            <ReactStars
                                              value={item?.writing_quality}
                                              edit={false}
                                              size={18}
                                              activeColor="#ffd700"
                                            />
                                          </div>
                                          <div className="reviewStar">
                                            <label>
                                              <p className="font-weight-bold">
                                                Story Development
                                              </p>
                                            </label>

                                            <ReactStars
                                              value={item?.story_development}
                                              edit={false}
                                              size={18}
                                              activeColor="#ffd700"
                                            />
                                          </div>
                                          <div className="reviewStar">
                                            <label>
                                              <p className="font-weight-bold">
                                                Character Design
                                              </p>
                                            </label>
                                            <ReactStars
                                              value={item?.character_design}
                                              edit={false}
                                              size={18}
                                              activeColor="#ffd700"
                                            />
                                          </div>
                                          <div className="reviewStar">
                                            <label>
                                              <p className="font-weight-bold">
                                                Updating Stability
                                              </p>
                                            </label>
                                            <ReactStars
                                              value={item?.updating_stability}
                                              edit={false}
                                              size={18}
                                              activeColor="#ffd700"
                                            />
                                          </div>
                                          <div className="reviewStar">
                                            <label>
                                              <p className="font-weight-bold">
                                                World Background
                                              </p>
                                            </label>
                                            <ReactStars
                                              value={item?.world_background}
                                              edit={false}
                                              size={18}
                                              activeColor="#ffd700"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    ))}
                                </div>
                              </div>
                            </div>

                            <hr />

                            <section class="      text-center text-lg-start shadow-1-strong rounded">
                              <div class="row d-flex justify-content-center">
                                <div class="col-md-12">
                                  <div class=" ">
                                    <div class="card-body ">
                                      <div class="row">
                                        <div class="col-md-12">
                                          {showcomments === true ? (
                                            <div class=" ">
                                              <div class="card-body ">
                                                <div class="d-flex flex-start w-100">
                                                  <img
                                                    // class="img-fluid starimg"
                                                    class="img-fluid starimg rounded-circle shadow-1-strong me-3"
                                                    src={Ellipse}
                                                  />
                                                  <div class="w-100">
                                                    <h5 className="mb-2">
                                                      Add a comment
                                                    </h5>

                                                    <div className="reviewStar">
                                                      <label>
                                                        <p>Writing Quality</p>
                                                      </label>
                                                      <ReactStars
                                                        count={5}
                                                        onChange={ratingQuality}
                                                        size={24}
                                                        activeColor="#ffd700"
                                                        name="abc"
                                                      />
                                                    </div>
                                                    <div className="reviewStar">
                                                      <label>
                                                        <p>Story Development</p>
                                                      </label>
                                                      <ReactStars
                                                        count={5}
                                                        onChange={ratingStory}
                                                        size={24}
                                                        activeColor="#ffd700"
                                                      />
                                                    </div>
                                                    <div className="reviewStar">
                                                      <label>
                                                        <p>Character Design</p>
                                                      </label>
                                                      <ReactStars
                                                        count={5}
                                                        onChange={ratingDesign}
                                                        size={24}
                                                        activeColor="#ffd700"
                                                      />
                                                    </div>
                                                    <div className="reviewStar">
                                                      <label>
                                                        <p>
                                                          Updating Stability
                                                        </p>
                                                      </label>
                                                      <ReactStars
                                                        count={5}
                                                        onChange={
                                                          ratingStability
                                                        }
                                                        size={24}
                                                        activeColor="#ffd700"
                                                      />
                                                    </div>
                                                    <div className="reviewStar">
                                                      <label>
                                                        <p>World Background</p>
                                                      </label>
                                                      <ReactStars
                                                        count={5}
                                                        onChange={ratingWorld}
                                                        size={24}
                                                        activeColor="#ffd700"
                                                      />
                                                    </div>

                                                    <div class="form-outline">
                                                      <textarea
                                                        class="form-control"
                                                        id="textAreaExample"
                                                        rows="7"
                                                        onChange={(e) => {
                                                          setReviewData({
                                                            ...reviewData,
                                                            review:
                                                              e.target.value,
                                                          });
                                                          console.log(
                                                            reviewData
                                                          );
                                                        }}
                                                      ></textarea>
                                                      <label
                                                        class="form-label"
                                                        for="textAreaExample"
                                                      >
                                                        What is your view?
                                                      </label>
                                                    </div>
                                                    <div class="d-flex justify-content-between mt-3">
                                                      <button
                                                        type="button"
                                                        class="btn btn-danger"
                                                        onClick={reviewSubmit}
                                                      >
                                                        Send{" "}
                                                        <i class="fas fa-long-arrow-alt-right ms-1"></i>
                                                      </button>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          ) : (
                                            ""
                                          )}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </section>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section className="related_book_detail_bg ">
            <div className="container">
              <div className="row">
                <div className="col-md-12 ">
                  <h2 className="related_book_new_heading">Related Books</h2>
                </div>
              </div>
            </div>
          </section>

          <section className="">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="author__products custom_author_book_slider">
                    <div className="row ">
                      <Slider {...settingsForFourItems}>
                        {books &&
                          books.map((item, index) => (
                            <Link
                              to={`/book-detail/${item?.id}`}
                              className="author__products_link"
                            >
                              <CustomCard
                                className="author__products_img"
                                image={base_url + item?.image}
                                icon1={faArrowRight}
                                icon2={faEye}
                                icon3={faHeart}
                                imageicon={Cart_icon_pink}
                                text={"Add To Cart"}
                                price={item?.price || 0}
                                title={item?.name}
                              />
                            </Link>
                          ))}
                      </Slider>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <CustomModal
            show={showModal}
            close={() => {
              setShowModal(false);
            }}
            success
            heading={`Chapter Fee`}
          >
            <table className="table table-bordered">
              <tr>
                <th>Chapter</th>
                <th>Chapter Amount</th>
                <th>Pay For Audio</th>
              </tr>
              <tr>
                <td>{`Chapter ${modalData?.id}`}</td>
                <td>{`Mana ${modalData?.price}`}</td>
                <td>
                  {/* {modalData?.text_to_speech === true ? "free" : <><input type="checkbox" /> 50</>} */}
                  {modalData?.text_to_speech === true ? (
                    "free"
                  ) : (
                    <div className="">
                      <input type="checkbox" onChange={handleCheckboxChange} />
                      <span className="prs">50</span>
                    </div>
                  )}
                </td>
              </tr>
            </table>
            <div className="text-left pt-4">
              <button
                type="button"
                className="btn bg-success text-white"
                onClick={() => {
                  BuyChapter(modalData?.id);
                }}
              >
                Pay Now
              </button>
            </div>
          </CustomModal>

          <CustomModal
            show={showModal1}
            close={() => {
              setShowModal1(false);
            }}
            success
            heading="You Chapter Payment has been Done."
          />
          <CustomModal
            show={reviewModal}
            close={() => {
              reviewModal(false);
            }}
            success
            heading="Review has been Posted."
          />
        </section>

        {/*  
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
          Launch static backdrop modal
        </button> */}

        {/* <!-- Modal --> */}

        <div
          class="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered cust_modal_dailog">
            <div class="modal-content modal_bg">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="staticBackdropLabel"></h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <i class="fa-solid fa-xmark cancel_mark"></i>
                </button>
              </div>
              {/* <div class="modal-body">
                              <div className="row">
                                <div className="col-md-12">
                                    <div className="position-relative">
                                        <img src={backarrow} className="img-fluid arrow_pointer"/>
                                    
                                        <h3 className=" top_fan"> Top Fans </h3>
                                    </div>
                                  </div>
                              </div>
                              <div className="row mt-3">
                                  <div className="col-md-4">
                                      <div className="fan_deatial_box">
                                        <img src={fan1} class="fan_one" />
                                        <p className="fan_details">Mediocrates4</p>
                                        <p className="fan_details">94.3K Fan Value</p>
                                      </div>
                                       <div className="medal_img_div"> <img src={silverMedal} className="medals"/> </div>
                                    </div>
                                    <div className="col-md-4">
                                      <div className="fan_deatial_box_two">
                                          <img src={fan2} class="fan_two" />
                                          <p className="fan_details">Mediocrates4</p>
                                          <p className="fan_details">94.3K Fan Value</p>
                                      </div>
                                      <div className="medal_img_div"> <img src={goldenMedal} className="medal_gold"/> </div>
                                    </div>
                                    <div className="col-md-4">
                                      <div className="fan_deatial_box">
                                        <img src={fan3} class="fan_one" />
                                        <p className="fan_details">Mediocrates4</p>
                                        <p className="fan_details">94.3K Fan Value</p>
                                      </div>
                                       <div className="medal_img_div"> <img src={medal3} className="medals"/> </div>
                                    </div>
                                </div>
                                <div className="row mt-5">
                                  <div className="col-md-6">
                                    <div className="ranking_box">
                                      <p className="fans_numbers"> 4 </p>
                                      <img src={fan1} class="ranking_box_img" />
                                      <p className="fan_details">Mediocrates4</p>
                                      <p className="fan_details">94.3K Fan Value</p>
                                    </div>
                                    <div className="ranking_box">
                                      <p className="fans_numbers"> 6 </p>
                                      <img src={fan1} class="ranking_box_img" />
                                      <p className="fan_details">Mediocrates4</p>
                                      <p className="fan_details">94.3K Fan Value</p>
                                    </div>
                                    <div className="ranking_box">
                                      <p className="fans_numbers"> 9 </p>
                                      <img src={fan1} class="ranking_box_img" />
                                      <p className="fan_details">Mediocrates4</p>
                                      <p className="fan_details">94.3K Fan Value</p>
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="ranking_box">
                                      <p className="fans_numbers"> 5 </p>
                                      <img src={fan1} class="ranking_box_img" />
                                      <p className="fan_details">Mediocrates4</p>
                                      <p className="fan_details">94.3K Fan Value</p>
                                    </div>
                                    <div className="ranking_box">
                                      <p className="fans_numbers"> 8 </p>
                                      <img src={fan1} class="ranking_box_img" />
                                      <p className="fan_details">Mediocrates4</p>
                                      <p className="fan_details">94.3K Fan Value</p>
                                    </div>
                                    <div className="ranking_box">
                                      <p className="fans_numbers"> 10 </p>
                                      <img src={fan1} class="ranking_box_img" />
                                      <p className="fan_details">Mediocrates4</p>
                                      <p className="fan_details">94.3K Fan Value</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="row user_profile_box mt-3">
                                    <div className="col-md-3">
                                      <h4 className="ranking_text">No Ranking</h4>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="user_name_with_img">
                                        <img src={user_prof} className="img-fluid user_profile_img"/>
                                        <p className="user_name">Username</p>
                                        <div className="user_name_divider"></div>
                                        <p className="user_name">Your Fan Value:</p>
                                      </div>
                                    </div>
                                    <div className="col-md-3">
                                      <button className="send_gift_btn"> Send gift </button>

                                    </div>
                                </div>
                            </div> */}

              <div class="modal-body">
                <div className="row">
                  <div className="col-md-12">
                    <div className="position-relative">
                      <img
                        src={backarrow}
                        className="img-fluid send_gift_arrow"
                      />
                      <div className="mana_gift_box">
                        <h3 className="send_gifts"> Send Gifts </h3>
                        <h5 className="mana_balance">
                          Mana Balance:{" "}
                          <span className="mana_balance_number"> 0 </span>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row user_profile_box mt-3">
                  <div className="col-md-12">
                    <div className="send_gift_details_box">
                      <img
                        src={user_prof}
                        className="img-fluid send_gift_profile_img"
                      />
                      <div>
                        <div className="main_author_gift_div">
                          <p className="send_gift_profile_details">Legion20</p>
                          <sup className="send_gift_author">Author</sup>
                        </div>
                        <p className="send_gift_para">
                          Your support is encouragement
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row mt-4">
                  <div className="col-md-12">
                    <div className="gifts_div">
                      <div className="text-center">
                        <img src={sodaCan} className="img-fluid gifts_images" />
                        <div className="points_with_img">
                          <img
                            src={manaPoint}
                            className="img-fluid mana_points_img"
                          />
                          <p className="gifts_score_points">10</p>
                        </div>
                      </div>
                      <div className="text-center">
                        <img src={pizza} className="img-fluid gifts_images" />
                        <div className="points_with_img">
                          <img
                            src={manaPoint}
                            className="img-fluid mana_points_img"
                          />
                          <p className="gifts_score_points">50</p>
                        </div>
                      </div>
                      <div className="text-center">
                        <img src={light} className="img-fluid gifts_images" />
                        <div className="points_with_img">
                          <img
                            src={manaPoint}
                            className="img-fluid mana_points_img"
                          />
                          <p className="gifts_score_points">100</p>
                        </div>
                      </div>
                      <div className="text-center">
                        <img src={chair} className="img-fluid gifts_images" />
                        <div className="points_with_img">
                          <img
                            src={manaPoint}
                            className="img-fluid mana_points_img"
                          />
                          <p className="gifts_score_points">500</p>
                        </div>
                      </div>
                      <div className="text-center">
                        <img src={car} className="img-fluid gifts_images" />
                        <div className="points_with_img">
                          <img
                            src={manaPoint}
                            className="img-fluid mana_points_img"
                          />
                          <p className="gifts_score_points">1000</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row mt-4">
                  <div className="col-md-12">
                    <div className="gifts_div">
                      <div className="text-center">
                        <img src={horse} className="img-fluid gifts_images" />
                        <div className="points_with_img">
                          <img
                            src={manaPoint}
                            className="img-fluid mana_points_img"
                          />
                          <p className="gifts_score_points">2000</p>
                        </div>
                      </div>
                      <div className="text-center">
                        <img src={castle} className="img-fluid gifts_images" />
                        <div className="points_with_img">
                          <img
                            src={manaPoint}
                            className="img-fluid mana_points_img"
                          />
                          <p className="gifts_score_points">5000</p>
                        </div>
                      </div>
                      <div className="text-center">
                        <img src={rocket} className="img-fluid gifts_images" />
                        <div className="points_with_img">
                          <img
                            src={manaPoint}
                            className="img-fluid mana_points_img"
                          />
                          <p className="gifts_score_points">10000</p>
                        </div>
                      </div>
                      <div className="text-center">
                        <img src={gold} className="img-fluid gifts_images" />
                        <div className="points_with_img">
                          <img
                            src={manaPoint}
                            className="img-fluid mana_points_img"
                          />
                          <p className="gifts_score_points">15000</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-12">
                    <form action="/action_page.php" className="message_form">
                      <label for="fname">Leave your gifting message</label>
                      <input
                        type="text"
                        className="msg_input"
                        id="fname"
                        name="fname"
                        placeholder="Your message will stand out author"
                      />
                      <input type="submit" value="Get More Mana" />
                    </form>
                  </div>
                </div>
              </div>

              {/* <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Understood</button>
                      </div> */}
            </div>
          </div>
        </div>

        {/* <!-- Modal End --> */}
      </UserLayout>
    </>
  );
};
