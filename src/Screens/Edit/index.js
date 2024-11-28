import { React, useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import ReactQuill styles
import "./style.css";
import { Modal } from "react-bootstrap";
import { UserLayout } from "../../Components/Layout/UserLayout";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faList,
  faSearch,
  faStar,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aos from "aos";
import "aos/dist/aos.css";
import lcimg from "../../Assets/images/51L+xXb2C7L 1.png";
export const Edit = () => {
  const [ads, setAds] = useState([]);
  const [books, setBooks] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const base_url = "https://custom.mystagingserver.site/Tim-WDLLC/public/";
  const [formData, setFormData] = useState();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [isActive, setIsActive] = useState(false);

  const toggleClass = () => {
    setIsActive(!isActive);
  };

  const [selectedOption, setSelectedOption] = useState(null);
  const handleCheckboxChange = (option) => {
    // setSelectedOption(option);
  };
  const SingleSelectCheckbox = (option) => {
    setSelectedOption(option);
  };
  

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

  const reusableSettingForOne = (item, centerMode) => {
    return {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: item,
      slidesToScroll: 1,
      centerMode: centerMode,
    };
  };

  const settingsForFourItems = reusableSetting(4, false);
  const settingsForOneItem = reusableSettingForOne(1, false);

  useEffect(() => {
    Aos.init();
  }, []);

  const handleDescriptionChange = (content) => {
    setFormData((prevData) => ({
      ...prevData,
      long_description: content,
    }));
  };

  return (
    <UserLayout>
      <>
        {/* Header */}

        {/* Hero Section */}
        <section class="inner__hero-sec jost-font">
          <div className="container">
            <div className="row">
              <div className="herro__title">
                <h1 className="typewriter">EDIT CHAPTER</h1>
              </div>
            </div>
          </div>
        </section>

        <section className="new_edit_chap_bg">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div>
                  <div className="edit_chap_box">
                    <div className="col-md-12 mb-4">
                      <div className="inputWrapper">
                        <div className="form-controls">
                          {/* <label htmlFor="long_description">
                              Long Description
                            </label> */}
                          <ReactQuill
                            theme="snow"
                            className="create_chap_text"
                            // value={formData.long_description}
                            onChange={handleDescriptionChange}
                            placeholder=" Enter Chapter Title"
                            style={{
                              height: "500px",
                              marginBottom: "90px",
                              borderRadius: "10px",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <buton onClick={handleShow} className="publish_content_btn">
                    Publish
                  </buton>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Modal --> */}

        <Modal
          show={show}
          onHide={handleClose}
          aria-labelledby="contained-modal-title-vcenter"
        >
          <div className="publish_chap_modal">
            <Modal.Title
              id="contained-modal-title-vcenter"
              className="publish_chap_title"
            >
              Publish Chapter
            </Modal.Title>
            
            <Modal.Body>
              <div className="row mt-3">
                <div className="col-md-12">
                  <label className="chap_name_label">Chapter Name</label>
                  <input className="chap_name_input" type="text" />
                  <label className="chap_name_label mt-4">
                    Enter Mana Price
                  </label>
                  <input className="chap_name_input" type="text" />
                  <div className="selection_time_box_bg">
                    <form action="/action_page.php">
                      <label for="chapters" className="chapters_selection_text">
                        Select Chapter Type & Volume
                      </label>
                      <select
                        id="chapters"
                        className="chap_selection_option_box"
                      >
                        <option value="volvo">Normal, Vol.1 </option>
                        <option value="saab">Normal, Vol.2</option>
                        <option value="opel">Normal, Vol.3</option>
                        <option value="audi">Normal, Vol.4</option>
                      </select>
                      <br />
                      <br />
                      <div className="dropdown_list_with_toggle">
                        <p className="scheduled_publishing_text">
                          Scheduled Publishing
                        </p>
                        <div class="checkbox-wrapper-14">
                          <input id="s1-14" type="checkbox" class="switch" />
                        </div>
                      </div>
                      {/* <input type="submit" value="Submit" /> */}
                      <div className="set_time_input_box">
                        <p className="time_input_box"> Set Time </p>
                        <FontAwesomeIcon
                          icon={faAngleRight}
                          className="set_time_icon"
                        />
                      </div>
                    </form>
                  </div>
                  <div className="publish_btn_div">
                    <button className="save_publish_btn">Submit</button>
                    <button
                      className="cancel_publish_btn"
                      onClick={handleClose}
                    >
                      {" "}
                      Cancel{" "}
                    </button>
                  </div>
                </div>
              </div>
            </Modal.Body>
          </div>
        </Modal>

  

        {/* <!-- Modal End --> */}
      </>
    </UserLayout>
  );
};
