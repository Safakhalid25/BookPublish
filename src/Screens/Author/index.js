import { useState, useEffect } from "react";
import { CChart } from "@coreui/react-chartjs";
import { Line } from "react-chartjs-2";
import { Link, json, useParams } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import CustomInput from "../../Components/CustomInput";
import CustomPagination from "../../Components/CustomPagination";
import CustomCard from "../../Components/CustomCard";
import backarrow from "../../Assets/images/backarrow.png";
import BookAuthornew from "../../Assets/images/BookAuthornew.png";
import note from "../../Assets/images/note.png";
import earncartoon from "../../Assets/images/earncartoon.png";
import showmore from "../../Assets/images/showmore.png";
import annoucedcomments from "../../Assets/images/annoucedcomments.png";
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
  faArrowDown,
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
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import AccordionContext from "react-bootstrap/AccordionContext";
import { useContext } from "react";


export const Author = ({ eventKey, children }) => {
  const { activeEventKey } = useContext(AccordionContext);

  const [data, setData] = useState({});
  const [inputValue, setInputValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const [books, setBooks] = useState([]);
  
  // Step 1: Create a state variable to manage visibility
  const [isVisibles, setIsVisibles] = useState(true);

  // Step 2: Function to toggle visibility
  const toggleVisibilities = () => {
    setIsVisibles(true);
    setIsVisible(false);
  };


  
  // Step 1: Create a state variable to manage visibility
  const [isVisible, setIsVisible] = useState(false);

  // Step 2: Function to toggle visibility
  const toggleVisibility = () => {
    setIsVisible(true); 
    setIsVisibles(false); 
  };



  const datalinear = {
    labels: ["08 Sept", "10 Sept", "12 Sept", "14 Sept"],
    datasets: [
      {
        label: "Valid View Trends",
        data: [0, 1, 1.5, 2], // Sample data, replace with dynamic data
        fill: true,
        fill: "#e0d1ea",
        // backgroundColor: "#e0d1ea", // Light purple fill color
        backgroundColor: "rgba(128, 128, 255, 0.2)", // Light purple fill color
        borderColor: "#7851a9", // Border color for the line
        pointBackgroundColor: "#7851a9", // Point background color
        pointBorderColor: "#ffffff", // Point border color
        pointHoverBackgroundColor: "#ffffff",
        pointHoverBorderColor: "#7851a9",
        pointRadius: 5, // Radius of the data points
        borderWidth: 2,
        tension: 0.4, // Smoothing effect for the curve
      },
    ],
  };

  // Chart Options
  const optionslinear = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // Hide legend to match the example
      },
      tooltip: {
        backgroundColor: "#f8f8f8",
        titleColor: "#7851a9",
        titleFont: { weight: "bold" },
        bodyColor: "#333333",
        bodyFont: { size: 14 },
        borderColor: "#7851a9",
        borderWidth: 1,
        displayColors: false, // Disable color boxes in the tooltip
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Hide grid lines on x-axis
        },
      },
      y: {
        position: "right",
        grid: {
          drawBorder: false, // Hide y-axis border line
          color: "rgba(200, 200, 200, 0.2)", // Light gray grid lines
        },
        ticks: {
          stepSize: 0.5, // Control step size between y-axis values
        },
      },
    },
  };

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const [selectedMonth, setSelectedMonth] = useState(
    months[new Date().getMonth()]
  ); // Default current month
  const handleMonthChange = (e) => {
    const month = e.target.value;
    setSelectedMonth(month);
    // handleSubmitdetail( month)
  };

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
  return (
    <>
      <UserLayout>
        <section class="inner__hero-sec jost-font">
          <div className="container">
            <div className="row">
              <div className="herro__title">
                <h1 className="typewriter"> AUTHOR </h1>
              </div>
            </div>
          </div>
        </section>

        <section className="discussion_section">
          <div className="container">
            <div className="row ">
              <div className="col-md-12">
                <div className="author_note_with_tabs">
                  <div>
                    <ul className="nav nav-pills mb-3 discussion_tab_border">
                      <li className="nav-item" role="presentation">
                        <button
                          className={`nav-link discussion_tab_links ${isVisibles ? 'active' : ''}  `}
                          onClick={toggleVisibilities}
                        >
                          {" "}
                          {/* {isVisibles ? "Hide" : "Show"} */}
                          {/* className={isVisibles ? 'active' : ''} */}
                          Works
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button className="nav-link discussion_tab_links">
                          Contests
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button className="nav-link discussion_tab_links">
                          Data
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button className="nav-link discussion_tab_links">
                          Help
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className={`nav-link discussion_tab_links ${isVisible  ? 'active' : ''} `}
                          onClick={toggleVisibility}
                        >
                          {" "}
                          {/* {isVisible ? "Hide" : "Show"} */}
                          Earnings
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="author_chap_note_div">
                    <img src={note} className="img-fluid author_note_img" />
                    <button className="create_chap_btn">Create New Book</button>
                  </div>
                </div>
              </div>
            </div>

            {isVisibles && (
              <div>
                <div className="row mt-5">
                  <div className="col-lg-7 col-md-6 col-sm-12">
                    <div className="author_book_main_box">
                      <img
                        src={BookAuthornew}
                        className="img-fluid auth_bk_img"
                      />
                      <div className="mb-3">
                        <p className="new_auth_bk_text">NEW - 0 CHS</p>
                        <p className="new_author_book_name">Book Name Here</p>
                        <button className="author_book_write_btn">Write</button>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5 col-md-6 col-sm-12">
                    <div className="author_book_main_box">
                      <img
                        src={BookAuthornew}
                        className="img-fluid auth_bk_img"
                      />
                      <div className="mb-3">
                        <p className="new_auth_bk_text">NEW - 0 CHS</p>
                        <p className="new_author_book_name">Book Name Here</p>
                        <button className="author_book_write_btn">Write</button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="author_book_divider"></div>

                <div className="row mt-5">
                  <div className="col-lg-7 col-md-6 col-sm-12">
                    <div className="author_book_main_box">
                      <img
                        src={BookAuthornew}
                        className="img-fluid auth_bk_img"
                      />
                      <div className="mb-3">
                        <p className="new_auth_bk_text">NEW - 0 CHS</p>
                        <p className="new_author_book_name">Book Name Here</p>
                        <button className="author_book_write_btn">Write</button>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5 col-md-6 col-sm-12">
                    <div className="author_book_main_box">
                      <img
                        src={BookAuthornew}
                        className="img-fluid auth_bk_img"
                      />
                      <div className="mb-3">
                        <p className="new_auth_bk_text">NEW - 0 CHS</p>
                        <p className="new_author_book_name">Book Name Here</p>
                        <button className="author_book_write_btn">Write</button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="author_book_divider"></div>

                <div className="row mt-5">
                  <div className="col-lg-7 col-md-6 col-sm-12">
                    <div className="author_book_main_box">
                      <img
                        src={BookAuthornew}
                        className="img-fluid auth_bk_img"
                      />
                      <div className="mb-3">
                        <p className="new_auth_bk_text">NEW - 0 CHS</p>
                        <p className="new_author_book_name">Book Name Here</p>
                        <button className="author_book_write_btn">Write</button>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5 col-md-6 col-sm-12">
                    <div className="author_book_main_box">
                      <img
                        src={BookAuthornew}
                        className="img-fluid auth_bk_img"
                      />
                      <div className="mb-3">
                        <p className="new_auth_bk_text">NEW - 0 CHS</p>
                        <p className="new_author_book_name">Book Name Here</p>
                        <button className="author_book_write_btn">Write</button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="author_book_divider"></div>

                <div className="row mt-5">
                  <div className="col-lg-7 col-md-6 col-sm-12">
                    <div className="author_book_main_box">
                      <img
                        src={BookAuthornew}
                        className="img-fluid auth_bk_img"
                      />
                      <div className="mb-3">
                        <p className="new_auth_bk_text">NEW - 0 CHS</p>
                        <p className="new_author_book_name">Book Name Here</p>
                        <button className="author_book_write_btn">Write</button>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5 col-md-6 col-sm-12">
                    <div className="author_book_main_box">
                      <img
                        src={BookAuthornew}
                        className="img-fluid auth_bk_img"
                      />
                      <div className="mb-3">
                        <p className="new_auth_bk_text">NEW - 0 CHS</p>
                        <p className="new_author_book_name">Book Name Here</p>
                        <button className="author_book_write_btn">Write</button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="author_book_divider"></div>

                <div className="divider_apply_for"></div>
                <div className="apply_for_contact_div">
                  <div>
                    <p className="ready_to_apply_heading">Ready to apply </p>
                    <p className="ready_to_apply_text">
                      {" "}
                      Please note that a maximum of 3 contract applications can
                      be initiated per book.{" "}
                    </p>
                  </div>
                  <button class="create_chap_btn">Apply For Contact</button>
                </div>
              </div>
            )}
          </div>
        </section>

        {isVisible && (
          <div>
            <section className="author_earnings_bg">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-10 col-md-9">
                    <div className="author_views_haed_space">
                      <h4 className="author_earn_head">
                        AUTHOR Earnings Overview
                      </h4>
                      <h4 className="author_sub_head">
                        In September you received over 1000 views
                      </h4>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-12 col-12">
                    <img src={earncartoon} className="earn_cartoon_img" />
                  </div>
                </div>
              </div>
            </section>

            <section className="discussion_section">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-9">
                    <div className="view_earnings_mana_box">
                      <div className="row">
                        <div className="col-md-7">
                          <div className="earn_mana_date_select_div">
                            <input
                              type="date"
                              id="start"
                              name="trip-start"
                              className="earn_mana_date"
                            />
                            <div className="date_divider"></div>
                            <Form.Select
                              name="month"
                              id="month-select"
                              value={selectedMonth}
                              onChange={handleMonthChange}
                              aria-label="Default select example"
                              className="earn_mana_date_select"
                            >
                              {months.map((month, index) => (
                                <option key={index} value={month}>
                                  {month}
                                </option>
                              ))}
                            </Form.Select>
                          </div>
                        </div>
                      </div>
                      <div className="estimate_revenue_major_div mt-3">
                        <div className="view_mana_gift_earn_box">
                          <p className="view_mana_gift_earn_head">Views</p>
                          <p className="view_mana_gift_earn_sub_head">
                            Earnings
                          </p>
                          <p className="view_mana_gift_earn_text">
                            8% less than August 29 - 31 2022{" "}
                          </p>
                          <p className="view_mana_gift_earn_number">5.34</p>
                        </div>

                        <div className="view_mana_gift_earn_box">
                          <p className="view_mana_gift_earn_head">Mana</p>
                          <p className="view_mana_gift_earn_sub_head">
                            Earnings
                          </p>
                          <p className="view_mana_gift_earn_text">
                            8% less than August 29 - 31 2022{" "}
                          </p>
                          <p className="view_mana_gift_earn_number">5.34</p>
                        </div>

                        <div className="view_mana_gift_earn_box">
                          <p className="view_mana_gift_earn_head">Gifts</p>
                          <p className="view_mana_gift_earn_sub_head">
                            Earnings
                          </p>
                          <p className="view_mana_gift_earn_text">
                            8% less than August 29 - 31 2022{" "}
                          </p>
                          <p className="view_mana_gift_earn_number">5.34</p>
                        </div>

                        <div className="estimate_revenue_box">
                          <p className="estimate_revenue_head">
                            Your Estimate Revenue
                          </p>
                          <div className="revenue_ammount_div">
                            <p className="estimate_revenue_ammount">
                              $11,230.60
                            </p>
                            <FontAwesomeIcon
                              icon={faArrowDown}
                              className="revenue_arrow_icon"
                            />
                          </div>
                          <p className="view_mana_gift_earn_text">
                            8% less than August 29 - 31 2022{" "}
                          </p>
                          <button className="withdrawal_btn">Withdrawal</button>
                        </div>
                      </div>

                      <div className="">
                        <div className="graph-wrapper mt-5">
                          <Line data={datalinear} options={optionslinear} />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-5 real_time_space">
                    <div className="real_time_libraray_box">
                      <div className="right_box_space">
                        <p className="real_time_heading">realtime</p>
                        <div className="updating_life_div">
                          <div className="online_update"></div>
                          <p className="updating_life_text">updating live</p>
                        </div>
                      </div>
                      <div className="real_time_divider"></div>

                      <div className="right_box_space">
                        <p className="real_time_numbers">40,393</p>
                        <p className="real_time_heading">added to library</p>
                        <div className="updating_life_div">
                          <p className="updating_life_text">SEE LIVE COUNT</p>
                        </div>
                      </div>
                      <div className="real_time_divider"></div>

                      <div className="right_box_space">
                        <p className="real_time_heading">505,943</p>
                        <div className="updating_life_div">
                          <p className="updating_life_text">
                            vIEWS - LAST 48 HOURS
                          </p>
                        </div>
                      </div>
                      <div className="real_time_divider"></div>

                      <div className="your_book_library_box">
                        <p className="your_book_text">YOUR BOOKS</p>
                        <p className="your_book_view_text">vIEWS</p>
                      </div>
                      <div className="earn_book_detail_div">
                        <img
                          src={BookAuthornew}
                          className="img-fluid your_library_book_img"
                        />
                        <p className="your_library_name">Book Name Here</p>
                        <p className="your_library_number">300,823</p>
                      </div>
                      <div className="earn_book_detail_div">
                        <img
                          src={BookAuthornew}
                          className="img-fluid your_library_book_img"
                        />
                        <p className="your_library_name">Book Name Here</p>
                        <p className="your_library_number">250,354</p>
                      </div>
                      <div className="earn_book_detail_div">
                        <img
                          src={BookAuthornew}
                          className="img-fluid your_library_book_img"
                        />
                        <p className="your_library_name">Book Name Here</p>
                        <p className="your_library_number">248,295</p>
                      </div>
                      <div className="real_time_btn_div">
                        <button className="real_time_btn">Show More</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

       

       
      </UserLayout>
    </>
  );
};
