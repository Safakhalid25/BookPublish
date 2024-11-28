import { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, json, useParams } from "react-router-dom";
import BackButton from "../../Components/BackButton";
import CustomModal from "../../Components/CustomModal";
import CustomButton from "../../Components/CustomButton";
import Accordion from "react-bootstrap/Accordion";
import CustomInput from "../../Components/CustomInput";
import preview from "../../Assets/images/image_74-removebg-preview.png";
import CustomPagination from "../../Components/CustomPagination";
import CustomCard from "../../Components/CustomCard";
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
import maryimg from "../../Assets/images/maryimg.png";
import redstar from "../../Assets/images/redstar.png";
import mission from "../../Assets/images/mission.png";
import store from "../../Assets/images/store.png";
import writer from "../../Assets/images/writer.png";
import discord from "../../Assets/images/discord.png";
import inboxmsg from "../../Assets/images/inboxmsg.png";
import starimg from "../../Assets/images/starimg.png";
import privilge from "../../Assets/images/privilge.png";
import historyclock from "../../Assets/images/historyclock.png";
import giftcode from "../../Assets/images/giftcode.png";
import nightmode from "../../Assets/images/nightmode.png";
import leavereview from "../../Assets/images/leavereview.png";
import faqicon from "../../Assets/images/faqicon.png";
import customerservice from "../../Assets/images/customerservice.png";
import camera from "../../Assets/images/camera.png";
import whitecamera from "../../Assets/images/white_camera.png";
import badge from "../../Assets/images/author-of-month-badge-1.png";
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
  faChevronRight,
  faCamera,
  faChevronLeft,
  faPenToSquare,
  faBan,
  faGears,
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
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import AccordionContext from "react-bootstrap/AccordionContext";
import { BookListingCover } from "../../Assets/images";
import { useContext } from "react";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import ReactStars from "react-rating-stars-component";
export const ProductDetail = ({ eventKey, children }) => {
  const { activeEventKey } = useContext(AccordionContext);

  const [data, setData] = useState({});
  const [inputValue, setInputValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const [books, setBooks] = useState([]);

  console.log("data", data);

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

  const [showOne, setShowOne] = useState(false);
  const [showTwo, setShowTwo] = useState(false);
  const [showThree, setShowThree] = useState(false);

  const handleShowModal1 = () => setShowOne(true);

  const handleShowModal2 = () => {
    setShowTwo(true);
  };

  const handleShowModal3 = () => {
    setShowOne(false);
    setShowTwo(false);
    setShowThree(true);
  };
  const [shows, setShows] = useState(false);

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
      `https://custom.mystagingserver.site/Tim-WDLLC/public/api/book_view/${paramId}`,
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
      `https://custom.mystagingserver.site/Tim-WDLLC/public/api/user/book_view/${LoginparamId}`,
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

  // console.log("data?.reviews" , data?.reviews)
  return (
    <>
      <UserLayout>
        <section class="inner__hero-sec jost-font">
          <div className="container">
            <div className="row">
              <div className="herro__title">
                <h1 className="typewriter">BOOK DETAIL </h1>
              </div>
            </div>
          </div>
        </section>
        <></>
        <section className="cover">
          <div className="container">
            <div className="dashCard">
              <div className="row mb-3">
                <div className="col-12">
                  <div className="row">
                    <div className="col-lg-4 mb-4">
                      {/* <p className="translation_para mt-5">
                        TRANSLATION REQUEST RANKING NO: 1
                      </p> */}
                      <h4 className="book_ranking mb-2">RANKING NO: 1</h4>
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

                      <div className="productInfo d-flex justify-content-center mb-3">
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
                        <img
                          src={base_url + data?.image}
                          className="img-fluid"
                        />
                      </div>

                      <div className="justify-content-center mb-4 m-auto text-center ">
                        <span className="mb-2 m-auto text-center">
                          {/* <p className="translation_para text-center mb-2">
                            Translation Status:
                          </p> */}
                          <p className=" tabtags changed_book_status_btn  mx-auto  text-center mb-2">
                            {" "}
                            Book Category : {data?.category?.name}{" "}
                          </p>
                        </span>
                        <span className="d-flex mb-2 justify-content-center ">
                          <p className=" tabtags book_status_btn mx-auto text-center">
                            {" "}
                            Type : {data?.types?.name}{" "}
                          </p>
                        </span>
                        <span className="d-flex   justify-content-center ">
                          <p className=" tabtags book_status_btn mx-auto text-center">
                            {" "}
                            Genre : {data?.genre?.name}{" "}
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
                            <p className="mb-2 author_language_date_text">
                              Author
                            </p>
                            <p className="textsha">{data?.user_info?.name}</p>
                          </div>

                          <div>
                            {" "}
                            <p className="mb-2 author_language_date_text">
                              Original Language
                            </p>{" "}
                            <p className="textsha">English</p>
                          </div>
                          <div>
                            {" "}
                            <p className="mb-2 author_language_date_text">
                              Release Date
                            </p>{" "}
                            <p className="textsha"> {data?.release_date} </p>
                          </div>
                        </div>
                        <div className=" d-flex gap-4 mb-2  justify-content-center mb-4 m-auto text-center "></div>
                      </div>

                      <span className="mb-2 justify-content-center  m-auto text-center">
                        <p className="mb-2 ">Affiliated Group</p>
                        <p className=" tabtags w-100 mx-auto p-2 text-center">
                          {" "}
                          Lorem Ispurm
                        </p>
                      </span>
                      <span className="mb-2 justify-content-center  m-auto text-center">
                        <p className="mb-2 "> Original Publisher </p>
                        <p className=" tabtags mb-2 w-100 mx-auto p-2 text-center">
                          {" "}
                          Lorem Ispurm
                        </p>
                      </span>
                      <span className="mb-2    justify-content-center  m-auto text-center">
                        <p className="mb-2 ">MTL Editor</p>
                        <p className=" tabtags mb-2 w-100 mx-auto p-2 text-center">
                          {" "}
                          Lorem Ispurm
                        </p>
                      </span>

                      <span className="mb-2 justify-content-center  m-auto text-center">
                        <p className="mb-2 ">Affiliated Series</p>
                        <p className=" tabtags mb-2 w-100 mx-auto p-2 text-center">
                          {" "}
                          Lorem Ispurm
                        </p>
                      </span>
                      <span className="mb-2   justify-content-center  m-auto text-center">
                        <p className="mb-2 ">Status</p>
                        <p className=" tabtags mb-2 w-100 mx-auto p-2 text-center">
                          {" "}
                          Completed
                        </p>
                      </span>
                    </div>

                    <div className="col-lg-8 mb-4">
                      <div className="productInfo mb-4">
                        <div class="row">
                          <div class=" mt-5  col-md-6">
                            <h3 id="booknamedetail" className="">
                              {data?.name}
                            </h3>
                            <div className="   gap-4   d-flex g-3 mx-auto  mt-5 mb-4   ">
                              {/* <button className="nottext">
                                Vote Now <i class="fas fa-vote-yea icon"></i>
                              </button> */}
                              <button className="all">
                                <span>Vote Now</span>{" "}
                                <i class="fas fa-vote-yea alliconss"></i>
                              </button>
                              {/* <button className="nottext    me-3    ">
                                Notifications{" "}
                                <i class="fa-solid fa-bell icon"></i>
                              </button> */}
                              <button className="all">
                                <span>Notifications</span>{" "}
                                <i class="fa-solid fa-bell alliconss"></i>
                              </button>
                            </div>
                          </div>

                          <div class="col-md-6">
                            <div class="profile ">
                              <div>
                                <img class="img-fluid" src={Ellipse4} />
                              </div>
                              <div>
                                <p class="prof">Author Name </p>
                                <p class="top_fan" id="fans">
                                  Top Fans 11,442
                                </p>
                                {/* <p class="more"> More By This Author</p> */}
                                <p
                                  class="more"
                                  type="button"
                                  onClick={handleShowModal1}
                                >
                                  {" "}
                                  More By This Author
                                </p>
                              </div>
                            </div>
                            <div className="profile  mb-4 mt-3">
                              {" "}
                              <div className="position-relative">
                                <img
                                  className="img-fluid stars_details_btn"
                                  src={star_button}
                                />
                                <button className="nottext mt-4 ">
                                  Last Update 3 days ago
                                </button>
                                <img
                                  className="img-fluid stars_details_btn_one"
                                  src={star_button}
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="row">
                          <div class="col-md-12">
                            <div class="syn">
                              <h4 className="syn_heading">Synopsis</h4>
                              <p class="txt">
                                {data?.description?.slice(0, 300)}
                              </p>
                              {/* <button className="all" ><span> Show More </span> <i class="fa-solid fa-book  alliconss"></i> </button> */}
                              <button className="all">
                                <span> Show More </span>{" "}
                                <img
                                  className="img-fluid  alliconss"
                                  src={showmoreicon}
                                />{" "}
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                      {CapterShow ? (
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
                          ></Tabs>
                        </div>
                      ) : (
                        <p className="text-center">
                          Please <Link to="/login">Login</Link> To See Chapters
                          for this Book
                        </p>
                      )}

                      <div className="row ">
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
                      </div>
                      <section className="top">
                        <div className="container">
                          <div className="row">
                            <div className="col-lg-4 col-sm-12 p-4 parabtn">
                              <h3 className="fans">
                                TOP FANS <sup>8,346</sup>{" "}
                              </h3>
                            </div>
                            <div className="col-lg-3 col-sm-12 p-4 parabtn">
                              <button
                                className="all"
                                data-bs-target="#exampleModalToggle01"
                                data-bs-toggle="modal"
                              >
                                <span> View All </span>{" "}
                                <i class="fa-solid fa-play allicon"></i>
                              </button>
                            </div>
                            <div className="col-lg-5 col-sm-12 animate_img_space">
                              <img
                                className="img-fluid cartoons"
                                src={animated}
                              />
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

                          {/* <section >
                            <div class="container my-5 py-5 text-dark">
                            </div>
                          </section> */}
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
          id="exampleModalToggle01"
          aria-hidden="true"
          aria-labelledby="exampleModalToggleLabel"
          tabindex="-1"
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
              <div class="modal-body">
                <div className="row">
                  <div className="col-md-12">
                    <div className="position-relative">
                      <img
                        src={backarrow}
                        className="img-fluid arrow_pointer"
                      />

                      <h3 className=" top_fan text-center"> Top Fans </h3>
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
                    <div className="medal_img_div">
                      {" "}
                      <img src={silverMedal} className="medals" />{" "}
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="fan_deatial_box_two">
                      <img src={fan2} class="fan_two" />
                      <p className="fan_details">Mediocrates4</p>
                      <p className="fan_details">94.3K Fan Value</p>
                    </div>
                    <div className="medal_img_div">
                      {" "}
                      <img src={goldenMedal} className="medal_gold" />{" "}
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="fan_deatial_box">
                      <img src={fan3} class="fan_one" />
                      <p className="fan_details">Mediocrates4</p>
                      <p className="fan_details">94.3K Fan Value</p>
                    </div>
                    <div className="medal_img_div">
                      {" "}
                      <img src={medal3} className="medals" />{" "}
                    </div>
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
                      <img
                        src={user_prof}
                        className="img-fluid user_profile_img"
                      />
                      <p className="user_name">Username</p>
                      <div className="user_name_divider"></div>
                      <p className="user_name">Your Fan Value:</p>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <button
                      className="send_gift_btn"
                      data-bs-target="#exampleModalToggle03"
                      data-bs-toggle="modal"
                    >
                      {" "}
                      Send gift{" "}
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div
          class="modal fade"
          id="exampleModalToggle03"
          aria-hidden="true"
          aria-labelledby="exampleModalToggleLabel2"
          tabindex="-1"
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
              <div class="modal-body">
                <div className="row">
                  <div className="col-md-12">
                    <div className="position-relative">
                      <img
                        src={backarrow}
                        className="img-fluid send_gift_arrow"
                        data-bs-target="#exampleModalToggle01"
                        data-bs-toggle="modal"
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

            </div>
          </div>
        </div>

        {/* <!-- Modal End --> */}

        <Modal
          show={showOne}
          onHide={() => setShowOne(false)}
          keyboard={false}
          animation={false}
        >
          <div className="modal-dialog sidebar_modal_dailogss">
            <div className="modal-content sidebar_detail_modal">
              <Modal.Body className="sidebar_modal_body_space">
                <div>
                  <button
                    type="button"
                    class="new_sidebar_close_btn"
                    onClick={() => setShowOne(false)}
                  >
                    <i class="fa-solid fa-xmark cancel_mark"></i>
                  </button>
                  <div className="user_profile_with_icon_div">
                    <div className="new_sidebar_profile position-relative">
                      <button type="button" onClick={handleShowModal2}>
                        <FontAwesomeIcon
                          icon={faGears}
                          className="gear_edit_icon"
                        />
                      </button>

                      <img
                        src={maryimg}
                        className="img-fluid mary_profile_img"
                      />
                      <h3 className="mary_name_text"> Mary </h3>
                    </div>
                    <button className="prof_settings_icon">
                      <i class="fa-solid fa-gear "></i>
                    </button>
                  </div>
                  <div className="mana_voucher_collection_bg">
                    <p className="voucher_collection_text">
                      {" "}
                      After 7 days of consecutive collections, you can draw your
                      7 Mana
                    </p>
                    <div className="mana_balance_topup_div">
                      <div className="collect_mana_star_bg">
                        <img
                          src={redstar}
                          className="img-fluid red_star_mana_img"
                        />
                        <p className="collect_mana_text_number"> 6/7 </p>
                      </div>
                      <p className="mana_balance_num_text">
                        MANA BALANCE: <span> 3 </span>
                      </p>
                      <button className="mana_top_up_btn">Top Up</button>
                    </div>
                    <p className="mana_collect_points_text">Collect Mana</p>
                    <div className="mana_balance_topup_div mt-2">
                      <div className="sidebar_vocher_div">
                        <p className="sidebar_vocher_text">Vouchers</p>
                        <p className="sidebar_vocher_pnts_num">05</p>
                      </div>
                      <div className="sidebar_vocher_div">
                        <p className="sidebar_vocher_text">Votes</p>
                        <p className="sidebar_vocher_pnts_num">05</p>
                      </div>
                    </div>
                  </div>
                  <div className="mission_store_div">
                    <div className="sidebar_mission_text_img_div">
                      <img
                        src={mission}
                        className="img-fluid sidebar_mission_img"
                      />
                      <p className="sidebar_mission_text">Missions</p>
                    </div>
                    <div className="sidebar_store_text_img_div">
                      <img
                        src={store}
                        className="img-fluid sidebar_mission_img"
                      />
                      <p className="sidebar_mission_text">Store</p>
                    </div>
                  </div>
                  <div className="sidebar_writer_div">
                    <img
                      src={writer}
                      className="img-fluid sidebar_writer_img"
                    />
                    <p className="become_writer_text">Become a writer</p>
                  </div>
                  <div className="join_discord_div">
                    <img src={discord} className="discord_img" />
                    <p className="join_discord_text">Join Our Discord</p>
                  </div>
                  <div className="other_options_div">
                    <div className="option_icons_text_div">
                      <img src={inboxmsg} className="img-fluid inbox_msgicon" />
                      <p className="inbox_msg_text">Inbox</p>
                    </div>
                    <div className="option_icons_text_div">
                      <img src={starimg} className="img-fluid inbox_msgicon" />
                      <p className="inbox_msg_text">
                        Manage Subscription and Active Purchase
                      </p>
                    </div>
                    <div className="option_icons_text_div">
                      <img src={privilge} className="img-fluid inbox_msgicon" />
                      <p className="inbox_msg_text">Advanced Chapter</p>
                    </div>
                    <div className="option_icons_text_div">
                      <img
                        src={historyclock}
                        className="img-fluid inbox_msgicon"
                      />
                      <p className="inbox_msg_text">Purchase History</p>
                    </div>
                  </div>

                  <div className="other_options_div">
                    <div className="option_icons_text_div">
                      <img src={giftcode} className="img-fluid inbox_msgicon" />
                      <p className="inbox_msg_text">
                        Redeem Promo Code/Gift card
                      </p>
                    </div>
                    <div className="option_icons_text_div">
                      <img
                        src={nightmode}
                        className="img-fluid inbox_msgicon"
                      />
                      <p className="inbox_msg_text">Night Mode</p>
                    </div>
                    <div className="option_icons_text_div">
                      <img
                        src={leavereview}
                        className="img-fluid inbox_msgicon"
                      />
                      <p className="inbox_msg_text">
                        Enjoying Yourself? Leave us a review
                      </p>
                    </div>
                    <div className="option_icons_text_div">
                      <img src={faqicon} className="img-fluid inbox_msgicon" />
                      <p className="inbox_msg_text">FAQ</p>
                    </div>
                    <div className="option_icons_text_div">
                      <img
                        src={customerservice}
                        className="img-fluid inbox_msgicon"
                      />
                      <p className="inbox_msg_text">Customer Online Service</p>
                    </div>
                  </div>
                </div>
              </Modal.Body>
            </div>
          </div>
        </Modal>

        {/* edit profile modal start */}

        <Modal
          show={showTwo}
          onHide={() => setShowTwo(false)}
          keyboard={false}
          animation={false}
        >
          <div className="modal-dialog sidebar_modal_dailogss sidebar__edit_modal">
            <div className="modal-content edit_prof_bg">
              <Modal.Body className="sidebar_modal_body_space">
                <button
                  className="modal_edit_prof_btn"
                  onClick={handleShowModal3}
                >
                  <FontAwesomeIcon
                    icon={faPenToSquare}
                    className="modal_edit_prof_icon"
                  />
                  Edit Profile
                </button>
                <div className="edit_prof_div"></div>
                <div className="custom_edit_prof_div">
                  <FontAwesomeIcon icon={faBan} className="modal_block_icon" />
                  <p className="manage_block_list">Manage Block List</p>
                </div>
              </Modal.Body>

              <div className="footer_close_btn_div">
                <button type="button" className="edit_prof_close_btn"
                onClick={() => setShowTwo(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </Modal>

        {/* edit profile modal end */}

        {/* last Profile Modal start */}

        <Modal
          show={showThree}
          onHide={() => setShowThree(false)}
          keyboard={false}
          animation={false}
        >
          <div className="modal-dialog sidebar_modal_dailogss">
            <div className="modal-content sidebar_detail_modal">
              <Modal.Body className="sidebar_modal_body_space">
                <div>
                  <button
                    type="button"
                    class="new_sidebar_close_btn"
                    onClick={() => setShowThree(false)}
                  >
                    <i class="fa-solid fa-xmark cancel_mark"></i>
                  </button>
                  <div className="profile_arrow_div position-relative">
                    <FontAwesomeIcon
                      icon={faChevronLeft}
                      className="arrow_back_profile"
                    />
                    <p className="edit_profile_heading">Edit Profile</p>
                  </div>
                  <div className="profile_cover_img_bg">
                    <img src={camera} className="camera_cover_img" />
                  </div>
                  <div className="user_profile_div">
                    <p className="user_profile_text"> T </p>
                  </div>
                  <div className="camera_profile_bg">
                    <img src={whitecamera} className="camera_profile_img" />
                  </div>

                  <div className="mt-4">
                    <label className="profile_inputs_label"> User Name</label>
                    <input
                      type="text"
                      placeholder="Tim_Coorp"
                      className="profile_inputs"
                    />
                  </div>

                  <div className="mt-2">
                    <label className="profile_inputs_label"> Email</label>
                    <input
                      type="text"
                      placeholder="Add Email"
                      className="profile_inputs"
                    />
                  </div>

                  <div className="profile_info_div mt-2">
                    <p className="prof_info_text">Gender</p>
                    <div className="d-flex align-items-center gap-2">
                      <p className="prof_info_select">Secrecy</p>
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        className="profile_info_arrow"
                      />
                    </div>
                  </div>

                  <div className="profile_info_div mt-2">
                    <p className="prof_info_text">Hometown</p>
                    <div className="d-flex align-items-center gap-2">
                      <p className="prof_info_select">Global</p>
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        className="profile_info_arrow"
                      />
                    </div>
                  </div>

                  <div className="mt-2">
                    <label className="profile_inputs_label"> About </label>
                    <textarea
                      type="text"
                      class="about_input"
                      rows="7"
                      placeholder="Tell us something about yourself :D"
                    ></textarea>
                  </div>

                  <div className="mt-2 mb-3">
                    <button className="profie_save_btn"> Save</button>
                  </div>
                </div>
              </Modal.Body>
            </div>
          </div>
        </Modal>

        {/* last Profile Modal end */}
      </UserLayout>
    </>
  );
};
