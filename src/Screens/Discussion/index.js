import { useState, useEffect } from "react";
import { Link, json, useParams } from "react-router-dom";
import dropdown from "../../Assets/images/dropdown.png";
import createbtn from "../../Assets/images/createbtn.png";
import annouced from "../../Assets/images/annouced.png";
import me from "../../Assets/images/me.png";
import club from "../../Assets/images/club.png";
import recent_msg from "../../Assets/images/recent_msg.png";
import annoucedcomments from "../../Assets/images/annoucedcomments.png";
import { UserLayout } from "../../Components/Layout/UserLayout";
import "./style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aos from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Make sure to import Bootstrap CSS
import { Container, Row, Col } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import AccordionContext from "react-bootstrap/AccordionContext";
import { useContext } from "react";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import ReactStars from "react-rating-stars-component";

export const Discussion = ({ eventKey, children }) => {
  const { activeEventKey } = useContext(AccordionContext);

  const [data, setData] = useState({});
  const [inputValue, setInputValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const [books, setBooks] = useState([]);

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
                <h1 className="typewriter"> GENERAL DISCUSSION </h1>
              </div>
            </div>
          </div>
        </section>

        <section className="discussion_section">
          <div className="container">
            <div className="row ">
              <div className="col-md-12">
                <div className="general_discussion_row">
                  <div>
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
                          data-bs-target="#pills-home"
                          type="button"
                          role="tab"
                          aria-controls="pills-home"
                          aria-selected="true"
                        >
                          New
                        </button>
                      </li>
                      <li class="nav-item" role="presentation">
                        <button
                          class="nav-link discussion_tab_links"
                          id="pills-profile-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-profile"
                          type="button"
                          role="tab"
                          aria-controls="pills-profile"
                          aria-selected="false"
                        >
                          Popular
                        </button>
                      </li>
                      <li class="nav-item" role="presentation">
                        <button
                          class="nav-link discussion_tab_links"
                          id="pills-contact-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-contact"
                          type="button"
                          role="tab"
                          aria-controls="pills-contact"
                          aria-selected="false"
                        >
                          Saved
                        </button>
                      </li>
                    </ul>
                    <div class="tab-content" id="pills-tabContent">
                      <div
                        class="tab-pane fade show active"
                        id="pills-home"
                        role="tabpanel"
                        aria-labelledby="pills-home-tab"
                      >
                        <div className="row">
                          <div className="col-md-12">
                            <div className="discussions_divider"></div>
                            <div className="discussion_annoucements_main_div">
                              <img
                                src={annouced}
                                className="img-fluid annouced_img"
                                type="button"
                                data-bs-toggle="modal"
                                data-bs-target="#staticBackdrops"
                              />
                              <div>
                                <p className="announcement_heading">
                                  Announcements
                                </p>
                                <div className="discussion_annoucements_child_div">
                                  <p className="annouced_discussion_text">
                                    {" "}
                                    Discussion:{" "}
                                    <span className="annouced_discussion_number">
                                      {" "}
                                      42{" "}
                                    </span>
                                  </p>
                                  <p className="annouced_discussion_text">
                                    {" "}
                                    Messages:{" "}
                                    <span className="annouced_discussion_number">
                                      {" "}
                                      4,835{" "}
                                    </span>
                                  </p>
                                </div>
                                <p className="annouced_discussion_text">
                                  Latest: <span> Apr 15,2024 </span>
                                </p>
                              </div>
                            </div>
                            {/* <div className="discussions_divider"></div> */}
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12">
                            <div className="discussions_divider"></div>
                            <div className="discussion_annoucements_main_div">
                              <img
                                src={annoucedcomments}
                                className="img-fluid annouced_img"
                                type="button"
                                data-bs-toggle="modal"
                                data-bs-target="#staticBackdrops"
                              />
                              <div>
                                <p className="announcement_heading">
                                  Novel Updates Site Discussion
                                </p>
                                <div className="discussion_annoucements_child_div">
                                  <p className="annouced_discussion_text">
                                    {" "}
                                    Discussion:{" "}
                                    <span className="annouced_discussion_number">
                                      {" "}
                                      1,342{" "}
                                    </span>
                                  </p>
                                  <p className="annouced_discussion_text">
                                    {" "}
                                    Messages:{" "}
                                    <span className="annouced_discussion_number">
                                      {" "}
                                      30,385{" "}
                                    </span>
                                  </p>
                                </div>
                                <p className="annouced_discussion_text">
                                  Latest: <span> Apr 15,2024 </span>
                                </p>
                              </div>
                            </div>
                            {/* <div className="discussions_divider"></div> */}
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-12">
                            <div className="discussions_divider"></div>
                            <div className="discussion_annoucements_main_div">
                              <img
                                src={annouced}
                                className="img-fluid annouced_img"
                                type="button"
                                data-bs-toggle="modal"
                                data-bs-target="#staticBackdrops"
                              />
                              <div>
                                <p className="announcement_heading">
                                  Announcements
                                </p>
                                <div className="discussion_annoucements_child_div">
                                  <p className="annouced_discussion_text">
                                    {" "}
                                    Discussion:{" "}
                                    <span className="annouced_discussion_number">
                                      {" "}
                                      42{" "}
                                    </span>
                                  </p>
                                  <p className="annouced_discussion_text">
                                    {" "}
                                    Messages:{" "}
                                    <span className="annouced_discussion_number">
                                      {" "}
                                      4,835{" "}
                                    </span>
                                  </p>
                                </div>
                                <p className="annouced_discussion_text">
                                  Latest: <span> Apr 15,2024 </span>
                                </p>
                              </div>
                            </div>
                            {/* <div className="discussions_divider"></div> */}
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-12">
                            <div className="discussions_divider"></div>
                            <div className="discussion_annoucements_main_div">
                              <img
                                src={annoucedcomments}
                                className="img-fluid annouced_img"
                                type="button"
                                data-bs-toggle="modal"
                                data-bs-target="#staticBackdrops"
                              />
                              <div>
                                <p className="announcement_heading">
                                  {" "}
                                  Suggestions & Bug Reports{" "}
                                </p>
                                <div className="discussion_annoucements_child_div">
                                  <p className="annouced_discussion_text">
                                    {" "}
                                    Discussion:{" "}
                                    <span className="annouced_discussion_number">
                                      {" "}
                                      3,216{" "}
                                    </span>
                                  </p>
                                  <p className="annouced_discussion_text">
                                    {" "}
                                    Messages:{" "}
                                    <span className="annouced_discussion_number">
                                      {" "}
                                      21,009{" "}
                                    </span>
                                  </p>
                                </div>
                                <p className="annouced_discussion_text">
                                  Latest: <span> Apr 15,2024 </span>
                                </p>
                              </div>
                            </div>
                            {/* <div className="discussions_divider"></div> */}
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-12">
                            <div className="discussions_divider"></div>
                            <div className="discussion_annoucements_main_div">
                              <img
                                src={annoucedcomments}
                                className="img-fluid annouced_img"
                                type="button"
                                data-bs-toggle="modal"
                                data-bs-target="#staticBackdrops"
                              />
                              <div>
                                <p className="announcement_heading">
                                  Novel Updates Site Discussion
                                </p>
                                <div className="discussion_annoucements_child_div">
                                  <p className="annouced_discussion_text">
                                    {" "}
                                    Discussion:{" "}
                                    <span className="annouced_discussion_number">
                                      {" "}
                                      1,342{" "}
                                    </span>
                                  </p>
                                  <p className="annouced_discussion_text">
                                    {" "}
                                    Messages:{" "}
                                    <span className="annouced_discussion_number">
                                      {" "}
                                      30,385{" "}
                                    </span>
                                  </p>
                                </div>
                                <p className="annouced_discussion_text">
                                  Latest: <span> Apr 15,2024 </span>
                                </p>
                              </div>
                            </div>
                            {/* <div className="discussions_divider"></div> */}
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-12">
                            <div className="discussions_divider"></div>
                            <div className="discussion_annoucements_main_div">
                              <img
                                src={annoucedcomments}
                                className="img-fluid annouced_img"
                                type="button"
                                data-bs-toggle="modal"
                                data-bs-target="#staticBackdrops"
                              />
                              <div>
                                <p className="announcement_heading">
                                  {" "}
                                  Suggestions & Bug Reports{" "}
                                </p>
                                <div className="discussion_annoucements_child_div">
                                  <p className="annouced_discussion_text">
                                    {" "}
                                    Discussion:{" "}
                                    <span className="annouced_discussion_number">
                                      {" "}
                                      3,216{" "}
                                    </span>
                                  </p>
                                  <p className="annouced_discussion_text">
                                    {" "}
                                    Messages:{" "}
                                    <span className="annouced_discussion_number">
                                      {" "}
                                      21,009{" "}
                                    </span>
                                  </p>
                                </div>
                                <p className="annouced_discussion_text">
                                  Latest: <span> Apr 15,2024 </span>
                                </p>
                              </div>
                            </div>
                            {/* <div className="discussions_divider"></div> */}
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-12">
                            <div className="discussions_divider"></div>
                            <div className="discussion_annoucements_main_div">
                              <img
                                src={annouced}
                                className="img-fluid annouced_img"
                                type="button"
                                data-bs-toggle="modal"
                                data-bs-target="#staticBackdrops"
                              />
                              <div>
                                <p className="announcement_heading">
                                  Announcements
                                </p>
                                <div className="discussion_annoucements_child_div">
                                  <p className="annouced_discussion_text">
                                    {" "}
                                    Discussion:{" "}
                                    <span className="annouced_discussion_number">
                                      {" "}
                                      42{" "}
                                    </span>
                                  </p>
                                  <p className="annouced_discussion_text">
                                    {" "}
                                    Messages:{" "}
                                    <span className="annouced_discussion_number">
                                      {" "}
                                      4,835{" "}
                                    </span>
                                  </p>
                                </div>
                                <p className="annouced_discussion_text">
                                  Latest: <span> Apr 15,2024 </span>
                                </p>
                              </div>
                            </div>
                            <div className="discussions_divider"></div>
                          </div>
                        </div>
                      </div>

                      <div
                        class="tab-pane fade"
                        id="pills-profile"
                        role="tabpanel"
                        aria-labelledby="pills-profile-tab"
                      >
                        <div className="row">
                          <div className="col-md-12">
                            <div className="discussions_divider"></div>
                            <div className="discussion_annoucements_main_div">
                              <img
                                src={annouced}
                                className="img-fluid annouced_img"
                                type="button"
                                data-bs-toggle="modal"
                                data-bs-target="#staticBackdrops"
                              />
                              <div>
                                <p className="announcement_heading">
                                  Announcements
                                </p>
                                <div className="discussion_annoucements_child_div">
                                  <p className="annouced_discussion_text">
                                    {" "}
                                    Discussion:{" "}
                                    <span className="annouced_discussion_number">
                                      {" "}
                                      42{" "}
                                    </span>
                                  </p>
                                  <p className="annouced_discussion_text">
                                    {" "}
                                    Messages:{" "}
                                    <span className="annouced_discussion_number">
                                      {" "}
                                      4,835{" "}
                                    </span>
                                  </p>
                                </div>
                                <p className="annouced_discussion_text">
                                  Latest: <span> Apr 15,2024 </span>
                                </p>
                              </div>
                            </div>
                            {/* <div className="discussions_divider"></div> */}
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12">
                            <div className="discussions_divider"></div>
                            <div className="discussion_annoucements_main_div">
                              <img
                                src={annoucedcomments}
                                className="img-fluid annouced_img"
                                type="button"
                                data-bs-toggle="modal"
                                data-bs-target="#staticBackdrops"
                              />
                              <div>
                                <p className="announcement_heading">
                                  Novel Updates Site Discussion
                                </p>
                                <div className="discussion_annoucements_child_div">
                                  <p className="annouced_discussion_text">
                                    {" "}
                                    Discussion:{" "}
                                    <span className="annouced_discussion_number">
                                      {" "}
                                      1,342{" "}
                                    </span>
                                  </p>
                                  <p className="annouced_discussion_text">
                                    {" "}
                                    Messages:{" "}
                                    <span className="annouced_discussion_number">
                                      {" "}
                                      30,385{" "}
                                    </span>
                                  </p>
                                </div>
                                <p className="annouced_discussion_text">
                                  Latest: <span> Apr 15,2024 </span>
                                </p>
                              </div>
                            </div>
                            {/* <div className="discussions_divider"></div> */}
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-12">
                            <div className="discussions_divider"></div>
                            <div className="discussion_annoucements_main_div">
                              <img
                                src={annouced}
                                className="img-fluid annouced_img"
                                type="button"
                                data-bs-toggle="modal"
                                data-bs-target="#staticBackdrops"
                              />
                              <div>
                                <p className="announcement_heading">
                                  Announcements
                                </p>
                                <div className="discussion_annoucements_child_div">
                                  <p className="annouced_discussion_text">
                                    {" "}
                                    Discussion:{" "}
                                    <span className="annouced_discussion_number">
                                      {" "}
                                      42{" "}
                                    </span>
                                  </p>
                                  <p className="annouced_discussion_text">
                                    {" "}
                                    Messages:{" "}
                                    <span className="annouced_discussion_number">
                                      {" "}
                                      4,835{" "}
                                    </span>
                                  </p>
                                </div>
                                <p className="annouced_discussion_text">
                                  Latest: <span> Apr 15,2024 </span>
                                </p>
                              </div>
                            </div>
                            {/* <div className="discussions_divider"></div> */}
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-12">
                            <div className="discussions_divider"></div>
                            <div className="discussion_annoucements_main_div">
                              <img
                                src={annoucedcomments}
                                className="img-fluid annouced_img"
                                type="button"
                                data-bs-toggle="modal"
                                data-bs-target="#staticBackdrops"
                              />
                              <div>
                                <p className="announcement_heading">
                                  {" "}
                                  Suggestions & Bug Reports{" "}
                                </p>
                                <div className="discussion_annoucements_child_div">
                                  <p className="annouced_discussion_text">
                                    {" "}
                                    Discussion:{" "}
                                    <span className="annouced_discussion_number">
                                      {" "}
                                      3,216{" "}
                                    </span>
                                  </p>
                                  <p className="annouced_discussion_text">
                                    {" "}
                                    Messages:{" "}
                                    <span className="annouced_discussion_number">
                                      {" "}
                                      21,009{" "}
                                    </span>
                                  </p>
                                </div>
                                <p className="annouced_discussion_text">
                                  Latest: <span> Apr 15,2024 </span>
                                </p>
                              </div>
                            </div>
                            {/* <div className="discussions_divider"></div> */}
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-12">
                            <div className="discussions_divider"></div>
                            <div className="discussion_annoucements_main_div">
                              <img
                                src={annoucedcomments}
                                className="img-fluid annouced_img"
                                type="button"
                                data-bs-toggle="modal"
                                data-bs-target="#staticBackdrops"
                              />
                              <div>
                                <p className="announcement_heading">
                                  Novel Updates Site Discussion
                                </p>
                                <div className="discussion_annoucements_child_div">
                                  <p className="annouced_discussion_text">
                                    {" "}
                                    Discussion:{" "}
                                    <span className="annouced_discussion_number">
                                      {" "}
                                      1,342{" "}
                                    </span>
                                  </p>
                                  <p className="annouced_discussion_text">
                                    {" "}
                                    Messages:{" "}
                                    <span className="annouced_discussion_number">
                                      {" "}
                                      30,385{" "}
                                    </span>
                                  </p>
                                </div>
                                <p className="annouced_discussion_text">
                                  Latest: <span> Apr 15,2024 </span>
                                </p>
                              </div>
                            </div>
                            {/* <div className="discussions_divider"></div> */}
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-12">
                            <div className="discussions_divider"></div>
                            <div className="discussion_annoucements_main_div">
                              <img
                                src={annoucedcomments}
                                className="img-fluid annouced_img"
                                type="button"
                                data-bs-toggle="modal"
                                data-bs-target="#staticBackdrops"
                              />
                              <div>
                                <p className="announcement_heading">
                                  {" "}
                                  Suggestions & Bug Reports{" "}
                                </p>
                                <div className="discussion_annoucements_child_div">
                                  <p className="annouced_discussion_text">
                                    {" "}
                                    Discussion:{" "}
                                    <span className="annouced_discussion_number">
                                      {" "}
                                      3,216{" "}
                                    </span>
                                  </p>
                                  <p className="annouced_discussion_text">
                                    {" "}
                                    Messages:{" "}
                                    <span className="annouced_discussion_number">
                                      {" "}
                                      21,009{" "}
                                    </span>
                                  </p>
                                </div>
                                <p className="annouced_discussion_text">
                                  Latest: <span> Apr 15,2024 </span>
                                </p>
                              </div>
                            </div>
                            {/* <div className="discussions_divider"></div> */}
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-12">
                            <div className="discussions_divider"></div>
                            <div className="discussion_annoucements_main_div">
                              <img
                                src={annouced}
                                className="img-fluid annouced_img"
                                type="button"
                                data-bs-toggle="modal"
                                data-bs-target="#staticBackdrops"
                              />
                              <div>
                                <p className="announcement_heading">
                                  Announcements
                                </p>
                                <div className="discussion_annoucements_child_div">
                                  <p className="annouced_discussion_text">
                                    {" "}
                                    Discussion:{" "}
                                    <span className="annouced_discussion_number">
                                      {" "}
                                      42{" "}
                                    </span>
                                  </p>
                                  <p className="annouced_discussion_text">
                                    {" "}
                                    Messages:{" "}
                                    <span className="annouced_discussion_number">
                                      {" "}
                                      4,835{" "}
                                    </span>
                                  </p>
                                </div>
                                <p className="annouced_discussion_text">
                                  Latest: <span> Apr 15,2024 </span>
                                </p>
                              </div>
                            </div>
                            <div className="discussions_divider"></div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="tab-pane fade"
                        id="pills-contact"
                        role="tabpanel"
                        aria-labelledby="pills-contact-tab"
                      >
                        <div className="row">
                          <div className="col-md-12">
                            <div className="discussions_divider"></div>
                            <div className="discussion_annoucements_main_div">
                              <img
                                src={annouced}
                                className="img-fluid annouced_img"
                                type="button"
                                data-bs-toggle="modal"
                                data-bs-target="#staticBackdrops"
                              />
                              <div>
                                <p className="announcement_heading">
                                  Announcements
                                </p>
                                <div className="discussion_annoucements_child_div">
                                  <p className="annouced_discussion_text">
                                    {" "}
                                    Discussion:{" "}
                                    <span className="annouced_discussion_number">
                                      {" "}
                                      42{" "}
                                    </span>
                                  </p>
                                  <p className="annouced_discussion_text">
                                    {" "}
                                    Messages:{" "}
                                    <span className="annouced_discussion_number">
                                      {" "}
                                      4,835{" "}
                                    </span>
                                  </p>
                                </div>
                                <p className="annouced_discussion_text">
                                  Latest: <span> Apr 15,2024 </span>
                                </p>
                              </div>
                            </div>
                            {/* <div className="discussions_divider"></div> */}
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12">
                            <div className="discussions_divider"></div>
                            <div className="discussion_annoucements_main_div">
                              <img
                                src={annoucedcomments}
                                className="img-fluid annouced_img"
                                type="button"
                                data-bs-toggle="modal"
                                data-bs-target="#staticBackdrops"
                              />
                              <div>
                                <p className="announcement_heading">
                                  Novel Updates Site Discussion
                                </p>
                                <div className="discussion_annoucements_child_div">
                                  <p className="annouced_discussion_text">
                                    {" "}
                                    Discussion:{" "}
                                    <span className="annouced_discussion_number">
                                      {" "}
                                      1,342{" "}
                                    </span>
                                  </p>
                                  <p className="annouced_discussion_text">
                                    {" "}
                                    Messages:{" "}
                                    <span className="annouced_discussion_number">
                                      {" "}
                                      30,385{" "}
                                    </span>
                                  </p>
                                </div>
                                <p className="annouced_discussion_text">
                                  Latest: <span> Apr 15,2024 </span>
                                </p>
                              </div>
                            </div>
                            {/* <div className="discussions_divider"></div> */}
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-12">
                            <div className="discussions_divider"></div>
                            <div className="discussion_annoucements_main_div">
                              <img
                                src={annouced}
                                className="img-fluid annouced_img"
                                type="button"
                                data-bs-toggle="modal"
                                data-bs-target="#staticBackdrops"
                              />
                              <div>
                                <p className="announcement_heading">
                                  Announcements
                                </p>
                                <div className="discussion_annoucements_child_div">
                                  <p className="annouced_discussion_text">
                                    {" "}
                                    Discussion:{" "}
                                    <span className="annouced_discussion_number">
                                      {" "}
                                      42{" "}
                                    </span>
                                  </p>
                                  <p className="annouced_discussion_text">
                                    {" "}
                                    Messages:{" "}
                                    <span className="annouced_discussion_number">
                                      {" "}
                                      4,835{" "}
                                    </span>
                                  </p>
                                </div>
                                <p className="annouced_discussion_text">
                                  Latest: <span> Apr 15,2024 </span>
                                </p>
                              </div>
                            </div>
                            {/* <div className="discussions_divider"></div> */}
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-12">
                            <div className="discussions_divider"></div>
                            <div className="discussion_annoucements_main_div">
                              <img
                                src={annoucedcomments}
                                className="img-fluid annouced_img"
                                type="button"
                                data-bs-toggle="modal"
                                data-bs-target="#staticBackdrops"
                              />
                              <div>
                                <p className="announcement_heading">
                                  {" "}
                                  Suggestions & Bug Reports{" "}
                                </p>
                                <div className="discussion_annoucements_child_div">
                                  <p className="annouced_discussion_text">
                                    {" "}
                                    Discussion:{" "}
                                    <span className="annouced_discussion_number">
                                      {" "}
                                      3,216{" "}
                                    </span>
                                  </p>
                                  <p className="annouced_discussion_text">
                                    {" "}
                                    Messages:{" "}
                                    <span className="annouced_discussion_number">
                                      {" "}
                                      21,009{" "}
                                    </span>
                                  </p>
                                </div>
                                <p className="annouced_discussion_text">
                                  Latest: <span> Apr 15,2024 </span>
                                </p>
                              </div>
                            </div>
                            {/* <div className="discussions_divider"></div> */}
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-12">
                            <div className="discussions_divider"></div>
                            <div className="discussion_annoucements_main_div">
                              <img
                                src={annoucedcomments}
                                className="img-fluid annouced_img"
                                type="button"
                                data-bs-toggle="modal"
                                data-bs-target="#staticBackdrops"
                              />
                              <div>
                                <p className="announcement_heading">
                                  Novel Updates Site Discussion
                                </p>
                                <div className="discussion_annoucements_child_div">
                                  <p className="annouced_discussion_text">
                                    {" "}
                                    Discussion:{" "}
                                    <span className="annouced_discussion_number">
                                      {" "}
                                      1,342{" "}
                                    </span>
                                  </p>
                                  <p className="annouced_discussion_text">
                                    {" "}
                                    Messages:{" "}
                                    <span className="annouced_discussion_number">
                                      {" "}
                                      30,385{" "}
                                    </span>
                                  </p>
                                </div>
                                <p className="annouced_discussion_text">
                                  Latest: <span> Apr 15,2024 </span>
                                </p>
                              </div>
                            </div>
                            {/* <div className="discussions_divider"></div> */}
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-12">
                            <div className="discussions_divider"></div>
                            <div className="discussion_annoucements_main_div">
                              <img
                                src={annoucedcomments}
                                className="img-fluid annouced_img"
                                type="button"
                                data-bs-toggle="modal"
                                data-bs-target="#staticBackdrops"
                              />
                              <div>
                                <p className="announcement_heading">
                                  {" "}
                                  Suggestions & Bug Reports{" "}
                                </p>
                                <div className="discussion_annoucements_child_div">
                                  <p className="annouced_discussion_text">
                                    {" "}
                                    Discussion:{" "}
                                    <span className="annouced_discussion_number">
                                      {" "}
                                      3,216{" "}
                                    </span>
                                  </p>
                                  <p className="annouced_discussion_text">
                                    {" "}
                                    Messages:{" "}
                                    <span className="annouced_discussion_number">
                                      {" "}
                                      21,009{" "}
                                    </span>
                                  </p>
                                </div>
                                <p className="annouced_discussion_text">
                                  Latest: <span> Apr 15,2024 </span>
                                </p>
                              </div>
                            </div>
                            {/* <div className="discussions_divider"></div> */}
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-12">
                            <div className="discussions_divider"></div>
                            <div className="discussion_annoucements_main_div">
                              <img
                                src={annouced}
                                className="img-fluid annouced_img"
                                type="button"
                                data-bs-toggle="modal"
                                data-bs-target="#staticBackdrops"
                              />
                              <div>
                                <p className="announcement_heading">
                                  Announcements
                                </p>
                                <div className="discussion_annoucements_child_div">
                                  <p className="annouced_discussion_text">
                                    {" "}
                                    Discussion:{" "}
                                    <span className="annouced_discussion_number">
                                      {" "}
                                      42{" "}
                                    </span>
                                  </p>
                                  <p className="annouced_discussion_text">
                                    {" "}
                                    Messages:{" "}
                                    <span className="annouced_discussion_number">
                                      {" "}
                                      4,835{" "}
                                    </span>
                                  </p>
                                </div>
                                <p className="annouced_discussion_text">
                                  Latest: <span> Apr 15,2024 </span>
                                </p>
                              </div>
                            </div>
                            <div className="discussions_divider"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="general_discussion_btns_div">
                    <div className="dropdown">
                      <button
                        class="filter"
                        type="button"
                        id="dropdownMenuButtonfilter"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <span> Filter </span>{" "}
                        <img className="img-fluid filter_icon" src={dropdown} />
                      </button>

                      <ul
                        class="dropdown-menu filter_dropdown"
                        aria-labelledby="dropdownMenuButtonfilter"
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

                    <button class="create">
                      <span> Create </span>
                      <img
                        className="img-fluid create_icon createbtn_img"
                        src={createbtn}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Modal --> */}

        <div
          class="modal fade"
          id="staticBackdrops"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered cust_modal_dailog">
            <div class="modal-content new_comnt_modal_bg">
              <div className="another_modal_bg">
                <div class="modal-header">
                  <div>
                    <h1
                      class="modal-title fs-5"
                      id="staticBackdropLabel"
                      className="modal_comments_titile"
                    >
                      Comments
                    </h1>
                    <div className="modal_comments_btn_div">
                      <button className="comment_top_btn"> TOP </button>
                      <button className="comment_top_btn"> NEWEST </button>
                    </div>
                  </div>
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
                      <div className="cmnts_modal_divider"></div>
                      <div className="modal_comment_detail_box">
                        <img src={recent_msg} className="recent_msg_img" />
                        <div className="cmnts_custom_width">
                          <div className="user_name_with_cmnts_details_div">
                            <p className="cmnt_user_name">@Braindean B33</p>
                            <p className="cmnt_edit_history">
                              5min ago (edited)
                            </p>
                          </div>
                          <p className="modal_user_cmts_para">
                            {" "}
                            Would have been kinda cool if chuck lost his powers
                            after wiping out the last humans across the
                            multiverse who believed in him and realized he was
                            also just another story.
                          </p>
                          <div className="user_name_with_cmnts_details_div">
                            <i class="fa-solid fa-thumbs-up like_comnts_icon"></i>
                            <p className="number_of_likes"> 684 </p>
                            <i class="fa-solid fa-thumbs-down  fa-flip-horizontal like_comnts_icon"></i>
                            <i class="fa-solid fa-message like_comnts_icon"></i>
                          </div>
                          <p className="cmnts_replies"> 19 Replies </p>
                        </div>
                        <i class="fa-solid fa-ellipsis-vertical view_more_comnts_icon"></i>
                      </div>
                    </div>
                  </div>

                  <div className="row mt-4">
                    <div className="col-md-12">
                      <div className="modal_comment_detail_box">
                        <img src={me} className="recent_msg_img" />
                        <div className="cmnts_custom_width">
                          <div className="user_name_with_cmnts_details_div">
                            <p className="cmnt_user_name">@emilatariq1271</p>
                            <p className="cmnt_edit_history">5min ago</p>
                          </div>
                          <p className="modal_user_cmts_para">
                            {" "}
                            Would have been kinda cool if chuck lost his powers
                            after wiping out the last humans across the
                            multiverse.{" "}
                          </p>
                          <div className="user_name_with_cmnts_details_div">
                            <i class="fa-solid fa-thumbs-up like_comnts_icon"></i>
                            <p className="number_of_likes"> 637 </p>
                            <i class="fa-solid fa-thumbs-down  fa-flip-horizontal like_comnts_icon"></i>
                            <i class="fa-solid fa-message like_comnts_icon"></i>
                          </div>
                          <p className="cmnts_replies"> 13 Replies </p>
                        </div>
                        <i class="fa-solid fa-ellipsis-vertical view_more_comnts_icon"></i>
                      </div>
                    </div>
                  </div>

                  <div className="row mt-4">
                    <div className="col-md-12">
                      <div className="type_cmnts_box">
                        <img src={club} className="recent_msg_img" />
                        <input
                          type="text"
                          name="firstname"
                          placeholder="Add a Comment"
                          className="add_cmnt_input"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Modal End --> */}
      </UserLayout>
    </>
  );
};
