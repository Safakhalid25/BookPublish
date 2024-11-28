import { useState, useEffect } from "react";
import { Link, json, useParams } from "react-router-dom";
import BackButton from "../../Components/BackButton";
import CustomModal from "../../Components/CustomModal";
import CustomButton from "../../Components/CustomButton";
import Accordion from "react-bootstrap/Accordion";
import CustomInput from "../../Components/CustomInput";
import { UserLayout } from "../../Components/Layout/UserLayout";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Make sure to import Bootstrap CSS

import { Container, Row, Col } from "react-bootstrap";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import AccordionContext from "react-bootstrap/AccordionContext";

import { BookListingCover } from "../../Assets/images";
import { useContext } from "react";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import ReactStars from "react-rating-stars-component";

export const ProductDetails = ({ eventKey, children }) => {
  const { activeEventKey } = useContext(AccordionContext);

  const { id } = useParams();

  const base_url = "https://custom.mystagingserver.site/Tim-WDLLC/public/";

  const [data, setData] = useState({});

  const [reviewData, setReviewData] = useState({
    book_id: id,
  });

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
    // Toggle the state of textToSpeech when the checkbox is clicked
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

  const chapterupdateSpeechRate = () => {
    const speeds = [1, 1.5, 2, 2.5];
    const currentIndex = speeds.indexOf(chaptervoice);
    let newIndex = currentIndex + 1;

    if (newIndex >= speeds.length) {
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

    if (newIndex >= speeds.length) {
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

  return (
    <>
      <UserLayout subHeader={BookListingCover}>
        <div className="container">
          <div className="dashCard my-4">
            <div className="row mb-3">
              <div className="col-12">
                <div className="row">
                  <div className="col-md-4 mb-4">
                    <div className="productImage mb-4">
                      <img src={base_url + data?.image} />
                    </div>

                    <div className="justify-content-center mb-4 m-auto text-center ">
                      <span className="mb-2  d-flex  justify-content-center  m-auto text-center">
                        <p className=" tabtags w-100 mx-auto p-2 text-center">
                          {" "}
                          BookCategory : {data?.category?.name}{" "}
                        </p>
                      </span>
                      <span className="d-flex mb-2 justify-content-center ">
                        <p className=" tabtags w-100 mx-auto p-2 text-center">
                          {" "}
                          Type : {data?.types?.name}{" "}
                        </p>
                      </span>
                      <span className="d-flex   justify-content-center ">
                        <p className=" tabtags w-100 mx-auto p-2 text-center">
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
                              <Col key={colIndex} className="tabtag px-2 py-2">
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
                          <p className="   mb-2">Author</p>
                          <p className="textsha   ">{data?.user_info?.name}</p>
                        </div>

                        <div>
                          {" "}
                          <p className="mb-2">Original Language</p>{" "}
                          <p className="textsha">English </p>
                        </div>
                        <div>
                          {" "}
                          <p className="mb-2">Release Date</p>{" "}
                          <p className="textsha"> {data?.release_date} </p>
                        </div>
                      </div>
                      <div className=" d-flex gap-4 mb-2  justify-content-center mb-4 m-auto text-center "></div>
                    </div>
                  </div>

                  <div className="col-md-8 mb-4">
                    <div className="productInfo mb-4">
                      <div className="adiobtn d-flex">
                        <h3 className="text-capitalize">{data?.name}</h3>
                        <h5 className="text-warning mb-0">Synopsis </h5>

                        <div className="playbtns d-flex gap-12">
                          <div className="actionBtn">
                            <button
                              className="play"
                              onClick={handleStarts}
                              disabled={isPlay}
                            >
                              <i className="fa-solid fa-play"></i>
                            </button>
                          </div>
                          <div className="actionBtn">
                            <button className="play" onClick={updateSpeechRate}>
                              {voice}X
                            </button>
                          </div>

                          <div className="actionBtn">
                            <button
                              className="pause"
                              onClick={handlePauses}
                              disabled={!isPlay || isPause}
                            >
                              <i className="fa-regular fa-circle-pause"></i>
                            </button>
                          </div>
                          <div className="actionBtn">
                            <button
                              className="resume"
                              onClick={handleResumes}
                              disabled={!isPause}
                            >
                              <i className="fa-solid fa-play"></i>
                            </button>
                          </div>
                          <div className="actionBtn">
                            <button
                              className="stop"
                              onClick={handleStops}
                              disabled={!isPlay && !isPause}
                            >
                              <i className="fa-solid fa-stop"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                      {data?.price && (
                        <h4>
                          <span className="font-weight-bold">Price:</span>
                          {` $ ${data?.price}`}
                        </h4>
                      )}
                      <p>{data?.description}</p>
                      <p className="mb-3">
                        <span className="font-weight-bold">Category:</span>{" "}
                        <span>{data?.category?.name}</span>
                      </p>
                      {data?.chapters?.length > 2 ? (
                        <p className="text-center">
                          <span className="text-success">
                            Recently {data?.latest_chap.length} new chaper
                            added.
                          </span>
                        </p>
                      ) : (
                        ""
                      )}
                    </div>

                    {CapterShow ? (
                      <div className="row">
                        <Tabs
                          defaultActiveKey="home"
                          id="uncontrolled-tab-example"
                          className="mb-3"
                        >
                          <Tab eventKey="home" title=" Book Chapters">
                            <div className="col-md-12">
                              <Accordion defaultActiveKey="0">
                                {data?.chapters &&
                                  data?.chapters.map((item, index) => (
                                    <Accordion.Item
                                      eventKey={index}
                                      key={index}
                                    >
                                      <Accordion.Header
                                        className="  Button b"
                                        style={{
                                          backgroundColor: "#f7944d",
                                          color: "black",
                                        }}
                                      >
                                        {`Chapter ${index + 1}`}{" "}
                                        {item?.latest && (
                                          <span className="newChapter">
                                            New
                                          </span>
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
                          </Tab>
                          <Tab eventKey="profile" title="Book Reviews">
                            <section class="   text-center text-lg-start shadow-1-strong rounded">
                              <div class="row d-flex justify-content-center">
                                <div class="col-md-12">
                                  <div class="card">
                                    {data?.reviews &&
                                      data?.reviews.map((item, index) => (
                                        <div class="card-body ">
                                          <div class="row">
                                            <div class="col-lg-2 d-flex justify-content-center align-items-start mb-4 mb-lg-0">
                                              <img
                                                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20%2810%29.webp"
                                                class="rounded-circle img-fluid shadow-1"
                                                alt="woman avatar"
                                                width="200"
                                                height="200"
                                              />
                                            </div>
                                            <div class="col-lg-8">
                                              <p class="fw-bold lead mb-1 text-capitalize">
                                                <strong>
                                                  {item?.user?.name}
                                                </strong>
                                              </p>
                                              <p class="text-muted  mb-2">
                                                {item?.review}
                                              </p>
                                              <div className="reviewBoxRate shadow p-3 mt-4">
                                                <div className="reviewStar">
                                                  <label>
                                                    <p className="font-weight-bold">
                                                      Writing Quality
                                                    </p>
                                                  </label>

                                                  <ReactStars
                                                    value={
                                                      item?.writing_quality
                                                    }
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
                                                    value={
                                                      item?.story_development
                                                    }
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
                                                    value={
                                                      item?.character_design
                                                    }
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
                                                    value={
                                                      item?.updating_stability
                                                    }
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
                                                    value={
                                                      item?.world_background
                                                    }
                                                    edit={false}
                                                    size={18}
                                                    activeColor="#ffd700"
                                                  />
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      ))}
                                  </div>
                                </div>
                              </div>
                            </section>
                          </Tab>
                          <Tab eventKey="Poster" title="Poster Reviews">
                            <section class="   text-center text-lg-start shadow-1-strong rounded">
                              <div class="row d-flex justify-content-center">
                                <div class="col-md-12">
                                  <div class="card">
                                    <div class="card-body ">
                                      <div class="row">
                                        <div class="col-md-12">
                                          <div class=" ">
                                            <div class="card-body p-4">
                                              <div class="d-flex flex-start w-100">
                                                <img
                                                  class="rounded-circle shadow-1-strong me-3"
                                                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(21).webp"
                                                  alt="avatar"
                                                  width="65"
                                                  height="65"
                                                />
                                                <div class="w-100">
                                                  <h5 className="mb-4">
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
                                                      <p>Updating Stability</p>
                                                    </label>
                                                    <ReactStars
                                                      count={5}
                                                      onChange={ratingStability}
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
                                                        console.log(reviewData);
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
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </section>

                            <section>
                              <div class="container my-5 py-5 text-dark"></div>
                            </section>
                          </Tab>
                        </Tabs>
                      </div>
                    ) : (
                      <p className="text-center">
                        Please <Link to="/login">Login</Link> To See Chapters
                        for this Book
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

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
      </UserLayout>
    </>
  );
};
