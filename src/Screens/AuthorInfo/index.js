import { useState, useEffect } from "react";
import { CChart } from "@coreui/react-chartjs";
import { Link, json, useParams } from "react-router-dom";
import line_timer from "../../Assets/images/line_timer.png";
import note from "../../Assets/images/note.png";
import authorinfobook from "../../Assets/images/author_info_book.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Line } from "react-chartjs-2";
import Ellipse4 from "../../Assets/images/Ellipse 44.png";
import star_button from "../../Assets/images/star_button.png";
import { UserLayout } from "../../Components/Layout/UserLayout";
import "./style.css";
import {
  faArrowUp,
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
import { scaleLinear } from "d3-scale";
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
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import ReactStars from "react-rating-stars-component";
import { Doughnut } from "react-chartjs-2";
import {
  // ComposableMap,
  Marker,
} from "react-simple-maps";

import { ComposableMap, Geographies, Geography } from "react-simple-maps";
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  LineElement,
} from "chart.js";

// Register the required components
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title
);
const geoUrl =
  "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson";

export const AuthorInfo = ({ eventKey, children }) => {
  const datamap = [
    { name: "Other", percentage: 87.5 },
    { name: "Bangladesh", coordinates: [90.3563, 23.685], percentage: 12.5 },
  ];

  // // Scale for the circle size based on percentage
  // const sizeScale = scaleLinear().domain([0, 100]).range([0, 15]);

  // Sample data for markers or tooltips
  const markerData = [
    { name: "Bangladesh", coordinates: [90.3563, 23.685], percentage: 12.5 },
  ];

  // Scale for the marker size based on percentage
  const sizeScale = scaleLinear().domain([0, 100]).range([1, 20]);

  const { activeEventKey } = useContext(AccordionContext);

  // const [data, setData] = useState({});
  const [inputValue, setInputValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const [books, setBooks] = useState([]);

  // ChartJS.register(ArcElement, Tooltip, Legend);

  const data = {
    labels: ["Male", "Female"], // Labels for each segment
    datasets: [
      {
        label: "Gender Distribution",
        data: [50, 50], // Example data (50% Male, 50% Female)
        backgroundColor: ["#0173F0", "#FFAAEC"], // Colors for segments
        borderColor: ["#0173F0", "#FFAAEC"],
        borderWidth: 2,
        hoverOffset: 4,
      },
    ],
  };

  // Options to control chart appearance
  const options = {
    responsive: true,
    maintainAspectRatio: false, // Allow chart to resize
    plugins: {
      legend: {
        display: true,
        position: "right", // Legend on the right
        labels: {
          font: {
            size: 14, // Font size for labels
          },
        },
      },
      tooltip: {
        enabled: true,
      },
    },
    layout: {
      padding: 20, // Padding around the chart
    },
  };

  const datalinear = {
    labels: ["08 Sept", "10 Sept", "12 Sept", "14 Sept"],
    datasets: [
      {
        label: "Valid View Trends",
        data: [0, 1, 1.5, 2], // Sample data, replace with dynamic data
        // fill: true,
        fill: false,
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

  const chartData = {
    labels: ["08 Sept", "10 Sept", "12 Sept", "14 Sept"],
    datasets: [
      {
        label: "Mana Use Growth",
        data: [0, 0, 0, 0],
        borderColor: "#C93E53",
        backgroundColor: "rgba(255, 107, 107, 0.5)",
        fill: false,
        tension: 0.4,
      },
    ],
  };

  // Options for the chart
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      // title: {
      //   display: true,
      //   text: "Mana Use Over Time",
      // },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 0,
        },
      },
    },
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

        // setData(data.data);
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
      // chapterData(id);
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
                <h1 className="typewriter"> AUTHOR INFO </h1>
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
                    <ul class="nav nav-pills  discussion_tab_border">
                      <li class="nav-item" role="presentation">
                        <button class="nav-link discussion_tab_links">
                          Works
                        </button>
                      </li>
                      <li class="nav-item" role="presentation">
                        <button class="nav-link discussion_tab_links">
                          Discover
                        </button>
                      </li>
                      <li class="nav-item" role="presentation">
                        <button class="nav-link discussion_tab_links  active">
                          Data
                        </button>
                      </li>
                      <li class="nav-item" role="presentation">
                        <button class="nav-link discussion_tab_links">
                          Academy
                        </button>
                      </li>
                    </ul>
                  </div>

                  <img src={note} className="img-fluid author_note_img" />
                </div>
              </div>
            </div>

            <div className="book_cover_mockup_box mt-5">
              <div className="row">
                <div className="col-lg-4 p-4">
                  <Form.Select
                    aria-label="Default select example"
                    className="book_name_select"
                  >
                    <option>Book name</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </div>
                <div className="row mt-2">
                  <div className="col-lg-3 col-md-4 ">
                    <img src={authorinfobook} className="author_book_img" />
                  </div>
                  <div className="col-lg-9 col-md-8">
                    <h4 className="author_book_name_text">Book name</h4>
                    <p className="author_book_name_para">
                      Incremental data was recorded on 9/14 00:00-24:00 (GMT +8)
                    </p>
                    <button className="author_book_btn">Add To Library</button>
                    <div className="row mt-4">
                      <div className="col-lg-6">
                        <div className="zero_percent_box_border">
                          <p className="zero_auth_book"> 0</p>
                          <p className="rating_auth_book_text">
                            {" "}
                            <span className="rating_book_percentage">
                              {" "}
                              0.0%{" "}
                            </span>
                            since previous day
                          </p>
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="book_rating_div">
                          <p className="high_rate_auth_book"> 2.84K </p>
                          <FontAwesomeIcon
                            icon={faArrowUp}
                            className="high_rate_arrow"
                          />
                          <p className="increment_number"> 8 </p>
                          <p className="rating_auth_book_text">
                            {" "}
                            <span className="rating_book_percentage">
                              -11.1%{" "}
                            </span>
                            since previous week
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="book_cover_mockup_box mt-5">
              <div className="row ">
                <div className="col-lg-12 p-4">
                  <div className="daily_metrics_div">
                    <p className="metrics_text"> Daily Key Metrics </p>
                    <div>
                      <div className="metrics_days_div">
                        <p className="metrics_days_text">7 Days</p>
                        <p className="metrics_days_text">14 Days</p>
                        <p className="metrics_days_text">30 Days</p>
                      </div>
                      <div className="metrics_divider">
                        <div className="metrics_mark_divider"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-lg-12">
                    <div style={{ width: "100%", height: "400px" }}>
                      {" "}
                      {/* Responsive container */}
                      <Line data={datalinear} options={optionslinear} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="book_cover_mockup_box mt-5">
              <div className="row  justify-content-center">
                <div className="col-lg-4">
                  <div className="mana_use_growth_box">
                    <p className="mana_growth_head">Mana Use Growth</p>
                    <div className="book_rating_div mt-3 mb-3 justify-content-center">
                      <p className="mana_growth_number"> 0 </p>
                      <FontAwesomeIcon
                        icon={faArrowUp}
                        className="high_rate_arrow"
                      />
                      <p className="mana_growth_percentage"> 0.00% </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 total_mana_box_space">
                  <div className="mana_use_growth_box">
                    <p className="mana_growth_head">Total Mana Spent on Book</p>
                    <div className="book_rating_div mt-3 mb-3 justify-content-center">
                      <p className="mana_growth_number"> 0 </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row mt-3">
                <div className="col-lg-12">
                  <div className="dashboard-container">
                    <div className="chart-container">
                      <Line data={chartData} options={chartOptions} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="book_cover_mockup_box mt-5">
              <div className="row">
                <div className="col-lg-4">
                  <p className="metrics_text"> Geographical Distribution </p>
                </div>
                <div className="row mt-3">
                  <div
                    className="col-md-12"
                    style={
                      {
                        // display: "flex",
                        // justifyContent: "space-between",
                        // alignItems: "center",
                      }
                    }
                  >
                    {/* Map Container */}
                    <ComposableMap
                      projection="geoMercator"
                      projectionConfig={{ scale: 140 }}
                      // style={{ width: "100%", height: "500px" }}
                      className="geographics_size"
                    >
                      <Geographies geography={geoUrl}>
                        {({ geographies }) =>
                          geographies.map((geo) => (
                            <Geography
                              key={geo.rsmKey}
                              geography={geo}
                              fill="#cdcad9"
                              // fill="#EAEAEC"
                              stroke="#D6D6DA"
                              style={{
                                default: { outline: "none" },
                                hover: { fill: "#F53", outline: "none" },
                                pressed: { outline: "none" },
                              }}
                            />
                          ))
                        }
                      </Geographies>
                      {/* Bangladesh Marker */}
                      <Marker
                        coordinates={[90.3563, 23.685]}
                        style={{ outline: "none" }}
                      >
                        ]
                        <circle
                          r="20.375"
                          fill="#6100A8"
                          stroke="#FFFFFF"
                          stroke-width="4"
                        ></circle>
                        {/* <circle r={sizeScale(12.5)} fill="#6c5ce7" stroke="#FFFFFF" strokeWidth={2} /> */}
                      </Marker>
                    </ComposableMap>

                    {/* Legend Container */}
                    <div
                      style={{
                        padding: "10px",
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      {/* <h3>Geographical Distribution</h3> */}
                      {datamap.map((d) => (
                        <div
                          key={d.name}
                          style={{
                            marginBottom: "10px",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          {/* Color Box */}
                          {/* <div
                            style={{
                              width: "20px",
                              height: "20px",
                              backgroundColor:
                                d.name === "Bangladesh" ? "#545454" : "#6100A8",
                              marginRight: "10px",
                            }}
                          ></div> */}
                          {/* Label and Percentage */}
                          <span
                            style={{ fontSize: "15px" }}
                          >{`${d.name} ${d.percentage}%`}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="book_cover_mockup_box mt-5">
              <div className="row">
                <div className="col-lg-4">
                  <p className="metrics_text"> Gender </p>
                </div>
                <div className="row mt-3">
                  <div className="col-lg-12">
                    <div
                      className="doughnut_size"
                      // style={{ width: "100%", height: "500px" }}
                    >
                      {" "}
                      {/* Set container dimensions */}
                      <Doughnut data={data} options={options} />
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
