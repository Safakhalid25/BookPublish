import { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import { Link, json, useParams } from "react-router-dom";
import openbook from "../../Assets/images/open_book.png";
import logo from "../../Assets/images/logo.png";
import rocket from "../../Assets/images/rocket.png";
import gold from "../../Assets/images/gold.png";
import dropdown from "../../Assets/images/dropdown.png";
import T_A_book_1 from "../../Assets/images/T_A_book_1.png";
import colon from "../../Assets/images/colon.png";
import Manual from "../../Assets/images/Manual.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
import { Container, Row, Col } from "react-bootstrap";
import Star from "../../Assets/images/Star 1.png";
import addfriend from "../../Assets/images/add_friend.png";
import showmoreicon from "../../Assets/images/showmoreicon.png";
import questionmarkimg from "../../Assets/images/questionmarkimg.png";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import AccordionContext from "react-bootstrap/AccordionContext";
import { BookListingCover } from "../../Assets/images";
import { useContext } from "react";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import ReactStars from "react-rating-stars-component";

export const WhispersInVerse = ({ eventKey, children }) => {
  const { activeEventKey } = useContext(AccordionContext);
  const [data, setData] = useState({});
  const [inputValue, setInputValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const [books, setBooks] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
                <h1 className="typewriter"> WHISPERS IN VERSE </h1>
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
                    <ul class="nav nav-pills mb-3 discussion_tab_border">
                      <li class="nav-item" role="presentation">
                        <button class="nav-link discussion_tab_links ">
                          Drafts
                        </button>
                      </li>
                      <li class="nav-item" role="presentation">
                        <button class="nav-link discussion_tab_links active">
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
            <div className="whisper_divider"></div>
            <div className="row">
              <div className="col-md-12">
                <div className="chapter_name_edit_div">
                  <div>
                    <p className="announcement_heading">
                      Chapter 5: Aworld beyond the door
                    </p>
                    <div className="discussion_annoucements_child_div">
                      <p className="annouced_discussion_text">
                        <span className="annouced_discussion_number">
                          {" "}
                          1676{" "}
                        </span>{" "}
                        Words{" "}
                      </p>
                      <p className="annouced_discussion_text">
                        {" "}
                        Type:{" "}
                        <span className="annouced_discussion_number">
                          {" "}
                          Normal{" "}
                        </span>
                      </p>
                    </div>
                    <p className="annouced_discussion_text">2024-08-13 13:55</p>
                  </div>
                  <button class="create whisper_edit_btn">
                    <span> Edit </span>
                    <img
                      className="img-fluid create_icon whisper_edit_btn_img"
                      src={openbook}
                    />
                  </button>
                </div>
                {/* <div className="discussions_divider"></div> */}
              </div>
            </div>
            <div className="whisper_divider"></div>
            <div className="row">
              <div className="col-md-12">
                <div className="chapter_name_edit_div">
                  <div>
                    <p className="announcement_heading">
                      Chapter 4: The Detective’s Delegate
                    </p>
                    <div className="discussion_annoucements_child_div">
                      <p className="annouced_discussion_text">
                        <span className="annouced_discussion_number">
                          {" "}
                          1676{" "}
                        </span>{" "}
                        Words{" "}
                      </p>
                      <p className="annouced_discussion_text">
                        {" "}
                        Type:{" "}
                        <span className="annouced_discussion_number">
                          {" "}
                          Normal{" "}
                        </span>
                      </p>
                    </div>
                    <p className="annouced_discussion_text">2024-08-13 13:55</p>
                  </div>
                  <button class="create whisper_edit_btn">
                    <span> Edit </span>
                    <img
                      className="img-fluid create_icon whisper_edit_btn_img"
                      src={openbook}
                    />
                  </button>
                </div>
              </div>
            </div>
            <div className="whisper_divider"></div>
            <div className="row">
              <div className="col-md-12">
                <div className="chapter_name_edit_div">
                  <div>
                    <p className="announcement_heading">
                      Chapter 3: Signatory &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                      &nbsp; &nbsp; &nbsp;
                    </p>
                    <div className="discussion_annoucements_child_div">
                      <p className="annouced_discussion_text">
                        <span className="annouced_discussion_number">
                          {" "}
                          1676{" "}
                        </span>{" "}
                        Words{" "}
                      </p>
                      <p className="annouced_discussion_text">
                        {" "}
                        Type:{" "}
                        <span className="annouced_discussion_number">
                          {" "}
                          Normal{" "}
                        </span>
                      </p>
                    </div>
                    <p className="annouced_discussion_text">2024-08-13 13:55</p>
                  </div>
                  <button class="create whisper_edit_btn">
                    <span> Edit </span>
                    <img
                      className="img-fluid create_icon whisper_edit_btn_img"
                      src={openbook}
                    />
                  </button>
                </div>
              </div>
            </div>
            <div className="whisper_divider"></div>
            <div className="row">
              <div className="col-md-12">
                <div className="chapter_name_edit_div">
                  <div>
                    <p className="announcement_heading">
                      Chapter 2: Whispers of the End
                    </p>
                    <div className="discussion_annoucements_child_div">
                      <p className="annouced_discussion_text">
                        <span className="annouced_discussion_number">
                          {" "}
                          1676{" "}
                        </span>{" "}
                        Words{" "}
                      </p>
                      <p className="annouced_discussion_text">
                        {" "}
                        Type:{" "}
                        <span className="annouced_discussion_number">
                          {" "}
                          Normal{" "}
                        </span>
                      </p>
                    </div>
                    <p className="annouced_discussion_text">2024-08-13 13:55</p>
                  </div>
                  <button class="create whisper_edit_btn">
                    <span> Edit </span>
                    <img
                      className="img-fluid create_icon whisper_edit_btn_img"
                      src={openbook}
                    />
                  </button>
                </div>
              </div>
            </div>
            <div className="whisper_divider"></div>
            <div className="row">
              <div className="col-md-12">
                <div className="chapter_name_edit_div">
                  <div>
                    <p className="announcement_heading">
                      hapter 1: A Lif’es Last Echo &nbsp; &nbsp; &nbsp; &nbsp;
                    </p>
                    <div className="discussion_annoucements_child_div">
                      <p className="annouced_discussion_text">
                        <span className="annouced_discussion_number">
                          {" "}
                          1676{" "}
                        </span>{" "}
                        Words{" "}
                      </p>
                      <p className="annouced_discussion_text">
                        {" "}
                        Type:{" "}
                        <span className="annouced_discussion_number">
                          {" "}
                          Normal{" "}
                        </span>
                      </p>
                    </div>
                    <p className="annouced_discussion_text">2024-08-13 13:55</p>
                  </div>
                  <button class="create whisper_edit_btn">
                    <span> Edit </span>
                    <img
                      className="img-fluid create_icon whisper_edit_btn_img"
                      src={openbook}
                    />
                  </button>
                </div>
              </div>
            </div>
            <div className="whisper_divider"></div>
          </div>
          <div className="advanced_chap_div">
            <p className="advanced_chap_text">
              Congratulations on surpassing 100 chapters! You’re now eligible to
              publish
              <span className="advanced_chap_span">
                {" "}
                advanced chapters.{" "}
              </span>{" "}
            </p>
          </div>
          <div className="advanced_chap_btn_div">
            <button onClick={handleShow} className="create_chap_btn">
              Create Advanced Chapters
            </button>
            <img
              src={questionmarkimg}
              className="img-fluid chap_question_img"
            />
          </div>
        </section>

        {/* <!-- Modal --> */}

        <Modal
          show={show}
          onHide={handleClose}
          size="xl"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          {/* <Modal.Header closeButton> 
            </Modal.Header> */}
          <Modal.Body className="advanced_chap_modal">
            <div className="row">
              <div className="col-lg-5 p-0">
                <div className="literature_club_bg">
                  <h3 className="litlle_club_head">LITTLE LITERATURE CLUB</h3>
                  <img src={logo} className="literature_logo" />
                  <div className="age_verification_div">
                    <p className="age_verification_text">
                      {" "}
                      WELCOME! PLEASE VERIFY YOUR AGE TO ENTER.{" "}
                    </p>
                  </div>
                  <p className="age_verification_checkmark">
                    ARE YOU 18 YEARS OR OLDER?
                  </p>
                  <div className="age_verification_btn_div">
                    <button className="age_verification_btn">No</button>
                    <button className="age_verification_btn age_btn_active">
                      Yes
                    </button>
                  </div>
                  <div className="remember_radio_div">
                    <label className="remember_radio_text remember_me_checkmark ">
                      REMEMBER ME
                      <input
                        type="radio"
                        name="remember"
                        className="remember_me"
                      />
                      <span class="checkmark"></span>
                    </label>
                  </div>
                  <p className="remember_me_text">
                    By selecting 'Yes,' you confirm that you are of legal age to
                    access this content and agree that any falsification of age
                    is solely your responsibility. You acknowledge that the
                    provider of this content will not be held liable for any
                    damages, consequences, or claims arising from your access to
                    or use of this content. By continuing, you expressly agree
                    to all of the terms outlined above
                  </p>
                </div>
              </div>
              <div className="col-lg-7 club_img_bg">
              
              </div>
            </div>
          </Modal.Body>
        </Modal>

        {/* <!-- Modal End --> */}

        
      </UserLayout>
    </>
  );
};
