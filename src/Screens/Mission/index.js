import { React, useState, useEffect } from "react";
import "./style.css";
import { UserLayout } from "../../Components/Layout/UserLayout";
import missionbox from "../../Assets/images/missionbox.png";
import coin from "../../Assets/images/coin.png";
import Checkmarkmission from "../../Assets/images/Checkmarkmission.png";
import linethrough from "../../Assets/images/linethrough.png";
import pointermission from "../../Assets/images/pointermission.png";
import giftmission from "../../Assets/images/giftmission.png";
import { Wheel } from "react-custom-roulette";
import {
  SmallAnime1,
} from "../../Assets/images";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faSearch, faStar } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aos from "aos";
import "aos/dist/aos.css";

export const Mission = () => {
  const [ads, setAds] = useState([]);
  const [books, setBooks] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const base_url = "https://custom.mystagingserver.site/Tim-WDLLC/public/";
  const [selectedOption, setSelectedOption] = useState(null);
  const handleCheckboxChange = (option) => {
    // setSelectedOption(option);
  };
  const SingleSelectCheckbox = (option) => {
    setSelectedOption(option);
  };

  const data = [
    {
      option: "75% OFF",
      style: {
        // background: 'linear-gradient(234.4deg, #6100A8 9.38%, #2069FF 92.48%, #915DC0 130.17%, #FF5183 167.86%)',
        // textColor: '#360C55',
        backgroundColor: "#2d54ee",
        textColor: "#fff",
        // img: 'missionbox'
      },
    },

    // background-image: linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12);

    {
      option: "25% OFF",
      outerBorderColor: "yellow",
      outerBorderWidth: 5,
      style: { backgroundColor: "#d0569d", textColor: "#360C55" },
    },
    {
      option: "50% OFF",
      style: { backgroundColor: "#2d54ee", textColor: "#fff" },
    },
    {
      option: "75% OFF",
      style: { backgroundColor: "#eaafff", textColor: "#360C55" },
    },
    {
      option: "25% OFF",
      style: {
        backgroundImage: "linear-gradient(to bottom, #ff0000, #0000ff)",
        textColor: "black",
      },
    },
    {
      option: "50% OFF",
      style: { backgroundColor: "#d0569d", textColor: "#360C55" },
    },
    {
      option: "75% OFF",
      style: { backgroundColor: "#2d54ee", textColor: "#fff" },
    },
    {
      option: "25% OFF",
      style: { backgroundColor: "#eaafff", textColor: "#360C55" },
    },
    {
      option: "25% OFF",
      style: { backgroundColor: "#d0569d", textColor: "#360C55" },
    },
    {
      option: "50% OFF",
      style: { backgroundColor: "#eaafff", textColor: "#360C55" },
    }, // Assuming you want to specify textColor for this item as well
  ];
  const backgroundColors = ["#a8eb12)"];
  // const outerBorderColor = ["#a87f2f"];
  const outerBorderColor = ["#360C55"];
  const outerBorderWidth = 10;
  const innerBorderColor = "#6100A8";
  const innerBorderWidth = 15;
  const innerRadius = 0;
  const radiusLineColor = "transparent";
  const radiusLineWidth = 8;
  const fontFamily = "Nunito";
  const fontWeight = "bold";
  const fontSize = 20;
  const fontStyle = "normal";
  const textDistance = 60;
  const spinDuration = 1.0;
  // background: linear-gradient(210.46deg, #360C55 40.03%, #8030CC 66.34%);

  useEffect(() => {
    Aos.init();
  }, []);

  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  };

  return (
    <>
      <UserLayout>
        {/* Header */}

        {/* Hero Section */}
        <sectionc class="inner__hero-sec jost-font">
          <div className="container">
            <div className="row">
              <div className="herro__title">
                <h1 className="typewriter">MISSIONS </h1>
                <p className="mission_disclaimer">
                  Disclaimer: Rewards are available once a week
                </p>
              </div>
            </div>
          </div>
        </sectionc>

        <section className="bestselling_books">
          <section className="bestSell__mission-sec jost-font">
            <div className="bestSell__book-cartoon1">
              <img src={SmallAnime1} />
            </div>
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="bestSell__book-title">
                    <h2 className="bestSell__spin_book-title ">
                      {" "}
                      SPIN FOR FREE REWARD
                    </h2>
                  </div>
                </div>
                <div className="col-12">
                  <div className="bestSelling__books">
                    {/* <img src={BestSellingBooks} /> */}
                    <div className="bestSell__book-cartoon2">
                      {/* <img src={SmallAnime2} /> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="bestSell__bookListing-sec">
            <div className="bestSell__filters">
              <div className="container">
                <div className="bg-spiner  justify-content-center  mx-auto ">
                  {/* <img src={spiner} className="spiner-img" /> */}
                  <div className="spiner-img">
                    <Wheel
                      mustStartSpinning={mustSpin}
                      prizeNumber={prizeNumber}
                      fontSize={fontSize}
                      fontWeight={fontWeight}
                      fontStyle={fontStyle}
                      fontFamily={fontFamily}
                      innerBorderWidth={innerBorderWidth}
                      data={data}
                      innerBorderColor={innerBorderColor}
                      outerBorderWidth={outerBorderWidth}
                      outerBorderColor={outerBorderColor}
                      backgroundColors={backgroundColors}
                      radiusLineColor={radiusLineColor}
                      radiusLineWidth={radiusLineWidth}
                      spinDuration={spinDuration}
                      onStopSpinning={() => {
                        setMustSpin(false);
                      }}
                      startingOptionIndex={2}
                      // perpendicularText
                      textDistance={textDistance}
                    />
                  </div>
                  <button onClick={handleSpinClick} className="spincolor mb-4">
                    SPIN
                  </button>
                </div>
                <div className="row text-right">
                  <div className="col-md-12 mission_box_div">
                    <img className="img-fluid mission_box" src={missionbox} draggable="false"/>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-4 col-sm-12">
                    <div className="new_one_time_bg">
                      <h4 className="new_one_time_text">ONE TIME</h4>
                    </div>
                    <div className="new_missionimg1">
                      <div className="new_mission_select_box_div">
                        <div>
                          <div className="new_mission_line_through"></div>
                          <p className="new_cont_social_text">
                            Connect Social:
                            <span>
                              {" "}
                              <img className="coinimg" src={coin} />{" "}
                            </span>
                            <span className="new_mission_mana_cnt_text">
                              {" "}
                              5 MANA{" "}
                            </span>
                          </p>
                          <img
                            src={Checkmarkmission}
                            className="img-fluid new_mission_check_mark"
                            draggable="false"
                          />
                        </div>
                        <div class="checkbox-wrapper-radio">
                        <input
                          type="checkbox"
                          checked
                          // checked={selectedOption === "option1"}
                          // onChange={() => SingleSelectCheckbox("option1")}
                        />
                        <svg viewBox="0 0 35.6 35.6">
                          <circle
                            class="background"
                            cx="17.8"
                            cy="17.8"
                            r="17.8"
                          ></circle>
                          <circle
                            class="stroke"
                            cx="17.8"
                            cy="17.8"
                            r="14.37"
                          ></circle>
                          <polyline
                            class="check"
                            points="11.78 18.12 15.55 22.23 25.17 12.87"
                          ></polyline>
                        </svg>
                      </div>

                      </div>
                      <img src={linethrough} className="img-fluid" />
                      <div className="new_mission_select_box_div mt-3">
                        <div>
                          <div className="new_mission_line_through_two"></div>
                          <p className="new_cont_social_text">
                            Purchase Mana Pack:
                            <span>
                              {" "}
                              <img className="coinimg" src={coin} />{" "}
                            </span>
                            <span className="new_mission_mana_cnt_text">
                              {" "}
                              15 MANA{" "}
                            </span>
                          </p>
                          <img
                            src={Checkmarkmission}
                            className="img-fluid new_mission_check_mark"
                            draggable="false"
                          />
                        </div>
                     
                        <div class="checkbox-wrapper-radio">
                        <input
                          type="checkbox"
                          checked                        
                        />
                        <svg viewBox="0 0 35.6 35.6">
                          <circle
                            class="background"
                            cx="17.8"
                            cy="17.8"
                            r="17.8"
                          ></circle>
                          <circle
                            class="stroke"
                            cx="17.8"
                            cy="17.8"
                            r="14.37"
                          ></circle>
                          <polyline
                            class="check"
                            points="11.78 18.12 15.55 22.23 25.17 12.87"
                          ></polyline>
                        </svg>
                      </div>
                      </div>
                      <img src={linethrough} className="img-fluid" />
                      <div className="new_mission_select_box_div mt-3">
                        <div>
                          <div className="new_mission_line_through_three"></div>
                          <p className="new_cont_social_text">
                            Purchase Subscription:
                            <span>
                              {" "}
                              <img className="coinimg" src={coin} />{" "}
                            </span>
                            <span className="new_mission_mana_cnt_text">
                              {" "}
                              50 MANA{" "}
                            </span>
                          </p>
                          <img
                            src={Checkmarkmission}
                            className="img-fluid new_mission_check_mark"
                            draggable="false"
                          />
                        </div>
                       
                        <div class="checkbox-wrapper-radio">
                        <input
                          type="checkbox"
                          checked
                        />
                        <svg viewBox="0 0 35.6 35.6">
                          <circle
                            class="background"
                            cx="17.8"
                            cy="17.8"
                            r="17.8"
                          ></circle>
                          <circle
                            class="stroke"
                            cx="17.8"
                            cy="17.8"
                            r="14.37"
                          ></circle>
                          <polyline
                            class="check"
                            points="11.78 18.12 15.55 22.23 25.17 12.87"
                          ></polyline>
                        </svg>
                      </div>
                      </div>
                      <div className="eighty_percent_bg">
                        <p className="eighty_percent_text">
                          {" "}
                          80%{" "}
                          <span className="eighty_percent_second_text">
                            {" "}
                            completed{" "}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-sm-12 mission_box_space">
                    <div className="new_one_time_bg">
                      <h4 className="new_one_time_text">DAILY </h4>
                      <p className="new_mission_rates_text">
                        Mission resets In 12hr
                      </p>
                    </div>
                    <div className="new_missionimg2">
                      <div className="new_mission_select_box_div">
                        <div>
                          <div className="new_mission_line_through_four"></div>
                          <p className="new_cont_social_text">Login:</p>
                          <img
                            src={Checkmarkmission}
                            className="img-fluid new_mission_check_mark"
                            draggable="false"
                          />
                        </div>
                    
                        <div class="checkbox-wrapper-radio">
                        <input
                          type="checkbox"
                      
                        />
                        <svg viewBox="0 0 35.6 35.6">
                          <circle
                            class="background"
                            cx="17.8"
                            cy="17.8"
                            r="17.8"
                          ></circle>
                          <circle
                            class="stroke"
                            cx="17.8"
                            cy="17.8"
                            r="14.37"
                          ></circle>
                          <polyline
                            class="check"
                            points="11.78 18.12 15.55 22.23 25.17 12.87"
                          ></polyline>
                        </svg>
                      </div>
                      </div>
                      <img src={linethrough} className="img-fluid" />
                      <div className="new_mission_select_box_div mt-3">
                        <div>
                          <div className="new_mission_line_through_five"></div>
                          <p className="new_cont_social_text">
                            Vote for a book you like
                          </p>
                          <img
                            src={Checkmarkmission}
                            className="img-fluid new_mission_check_mark"
                            draggable="false"
                          />
                        </div>
                       
                        <div class="checkbox-wrapper-radio">
                        <input
                          type="checkbox"
                          checked
                        />
                        <svg viewBox="0 0 35.6 35.6">
                          <circle
                            class="background"
                            cx="17.8"
                            cy="17.8"
                            r="17.8"
                          ></circle>
                          <circle
                            class="stroke"
                            cx="17.8"
                            cy="17.8"
                            r="14.37"
                          ></circle>
                          <polyline
                            class="check"
                            points="11.78 18.12 15.55 22.23 25.17 12.87"
                          ></polyline>
                        </svg>
                      </div>
                      </div>
                      <img src={linethrough} className="img-fluid" />
                      <div className="new_mission_select_box_div mt-3">
                        <div>
                          <div className="new_mission_line_through_six"></div>
                          <p className="new_cont_social_text">
                            Post One Comment
                          </p>
                          <img
                            src={Checkmarkmission}
                            className="img-fluid new_mission_check_mark"
                            draggable="false"
                          />
                        </div>
                     
                        <div class="checkbox-wrapper-radio">
                        <input
                          type="checkbox"
                          checked
                         
                        />
                        <svg viewBox="0 0 35.6 35.6">
                          <circle
                            class="background"
                            cx="17.8"
                            cy="17.8"
                            r="17.8"
                          ></circle>
                          <circle
                            class="stroke"
                            cx="17.8"
                            cy="17.8"
                            r="14.37"
                          ></circle>
                          <polyline
                            class="check"
                            points="11.78 18.12 15.55 22.23 25.17 12.87"
                          ></polyline>
                        </svg>
                      </div>
                      </div>
                      <img src={linethrough} className="img-fluid" />
                      <div className="new_mission_select_box_div mt-3">
                        <div>
                          <div className="new_mission_line_through_seven"></div>
                          <p className="new_cont_social_text">
                            Spend 5 or more coins
                          </p>
                          <img
                            src={Checkmarkmission}
                            className="img-fluid new_mission_check_mark"
                            draggable="false"
                          />
                        </div>
                      
                        <div class="checkbox-wrapper-radio">
                        <input
                          type="checkbox"
                          checked
                        />
                        <svg viewBox="0 0 35.6 35.6">
                          <circle
                            class="background"
                            cx="17.8"
                            cy="17.8"
                            r="17.8"
                          ></circle>
                          <circle
                            class="stroke"
                            cx="17.8"
                            cy="17.8"
                            r="14.37"
                          ></circle>
                          <polyline
                            class="check"
                            points="11.78 18.12 15.55 22.23 25.17 12.87"
                          ></polyline>
                        </svg>
                      </div>

                      </div>
                      <img src={linethrough} className="img-fluid" />
                      <div className="new_mission_select_box_div mt-3">
                        <div>
                          <p className="new_cont_social_text">Like A review</p>
                        </div>
                      
                        <div class="checkbox-wrapper-radio">
                        <input
                          type="checkbox"
                         
                        />
                        <svg viewBox="0 0 35.6 35.6">
                          <circle
                            class="background"
                            cx="17.8"
                            cy="17.8"
                            r="17.8"
                          ></circle>
                          <circle
                            class="stroke"
                            cx="17.8"
                            cy="17.8"
                            r="14.37"
                          ></circle>
                          <polyline
                            class="check"
                            points="11.78 18.12 15.55 22.23 25.17 12.87"
                          ></polyline>
                        </svg>
                      </div>
                      </div>
                      <img src={linethrough} className="img-fluid" />
                      <div className="new_mission_select_box_div mt-3">
                        <div>
                          <p className="new_cont_social_text">
                            Collect Daily Mana
                          </p>
                        </div>
                        <div class="checkbox-wrapper-radio">
                        <input
                          type="checkbox"
                         
                        />
                        <svg viewBox="0 0 35.6 35.6">
                          <circle
                            class="background"
                            cx="17.8"
                            cy="17.8"
                            r="17.8"
                          ></circle>
                          <circle
                            class="stroke"
                            cx="17.8"
                            cy="17.8"
                            r="14.37"
                          ></circle>
                          <polyline
                            class="check"
                            points="11.78 18.12 15.55 22.23 25.17 12.87"
                          ></polyline>
                        </svg>
                      </div>
                      </div>
                      <div className="completed_div  mx-auto">
                        <p className="cnt completespercent">4/5 Completed</p>
                      </div>
                      <div className="complete-all_two  ">
                        <p>COMPLETE ALL DAILY MISSION TO GET</p>
                      </div>
                      <div className="manacoin1 mx-auto ">
                        <p className="new_mission_mana_numbers">5 MANA</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-sm-12 new_weekly_reading_column">
                    <div className="new_weekly_reading_bg">
                      <h4 className="new_one_time_text"> READING/WEEKLY </h4>
                      <p className="new_mission_rates_text">
                        {" "}
                        Mission resets In 3 Days{" "}
                      </p>
                    </div>

                    <div className="new_missionimg3">
                      <p className="new_reading_time_mission">
                        Reading Time Remaining 360Mins
                      </p>
                      <div className="new_mission_select_box_div">
                        <div className="highlighted_mission_mark"></div>
                        {/* <div className="highlighted_mission_mark_two"></div>
                              <div className="highlighted_mission_mark_three"></div>
                              <div className="highlighted_mission_mark_four"></div> */}
                        <div>
                          <div className="new_mission_line_through_eight"></div>
                          <p className="new_cont_social_text">
                            Read for 60 more mins this week:
                          </p>
                          <img
                            src={Checkmarkmission}
                            className="img-fluid new_mission_check_mark"
                            draggable="false"
                          />
                        </div>                       
                        <div class="checkbox-wrapper-radio">
                        <input
                          type="checkbox"
                          checked                         
                        />
                        <svg viewBox="0 0 35.6 35.6">
                          <circle
                            class="background"
                            cx="17.8"
                            cy="17.8"
                            r="17.8"
                          ></circle>
                          <circle
                            class="stroke"
                            cx="17.8"
                            cy="17.8"
                            r="14.37"
                          ></circle>
                          <polyline
                            class="check"
                            points="11.78 18.12 15.55 22.23 25.17 12.87"
                          ></polyline>
                        </svg>
                      </div>
                      </div>
                      <img src={linethrough} className="img-fluid" />
                      <div className="new_mission_select_box_div mt-3">
                        <div className="highlighted_mission_mark_second"></div>
                        <div>
                          <div className="new_mission_line_through_nine"></div>
                          <p className="new_cont_social_text">
                            Read 2Hrs or more mins this week:
                          </p>
                          <img
                            src={Checkmarkmission}
                            className="img-fluid new_mission_check_mark"
                            draggable="false"
                          />
                        </div>
                     
                        <div class="checkbox-wrapper-radio">
                        <input
                          type="checkbox"
                          checked                         
                        />
                        <svg viewBox="0 0 35.6 35.6">
                          <circle
                            class="background"
                            cx="17.8"
                            cy="17.8"
                            r="17.8"
                          ></circle>
                          <circle
                            class="stroke"
                            cx="17.8"
                            cy="17.8"
                            r="14.37"
                          ></circle>
                          <polyline
                            class="check"
                            points="11.78 18.12 15.55 22.23 25.17 12.87"
                          ></polyline>
                        </svg>
                      </div>
                      </div>
                      <img src={linethrough} className="img-fluid" />
                      <div className="new_mission_select_box_div mt-3">
                        <div className="highlighted_mission_mark_third"></div>
                        <div>
                          <div className="new_mission_line_through_nine"></div>
                          <p className="new_cont_social_text">
                            Read for 3hr or mor mins this week:
                          </p>
                          <img
                            src={Checkmarkmission}
                            className="img-fluid new_mission_check_mark"
                            draggable="false"
                          />
                        </div>
                       
                        <div class="checkbox-wrapper-radio">
                        <input
                          type="checkbox"
                          checked
                         
                        />
                        <svg viewBox="0 0 35.6 35.6">
                          <circle
                            class="background"
                            cx="17.8"
                            cy="17.8"
                            r="17.8"
                          ></circle>
                          <circle
                            class="stroke"
                            cx="17.8"
                            cy="17.8"
                            r="14.37"
                          ></circle>
                          <polyline
                            class="check"
                            points="11.78 18.12 15.55 22.23 25.17 12.87"
                          ></polyline>
                        </svg>
                      </div>
                      </div>
                      <img src={linethrough} className="img-fluid" />
                      <div className="new_mission_select_box_div mt-3">
                        <div className="highlighted_mission_mark_forth"></div>
                        <div>
                          <div className="new_mission_line_through_nine"></div>
                          <p className="new_cont_social_text">
                            Read for 5hr or more mins this week:
                          </p>
                          <img
                            src={Checkmarkmission}
                            className="img-fluid new_mission_check_mark"
                            draggable="false"
                          />
                        </div>
                    
                        <div class="checkbox-wrapper-radio">
                        <input
                          type="checkbox"
                          checked
                         
                        />
                        <svg viewBox="0 0 35.6 35.6">
                          <circle
                            class="background"
                            cx="17.8"
                            cy="17.8"
                            r="17.8"
                          ></circle>
                          <circle
                            class="stroke"
                            cx="17.8"
                            cy="17.8"
                            r="14.37"
                          ></circle>
                          <polyline
                            class="check"
                            points="11.78 18.12 15.55 22.23 25.17 12.87"
                          ></polyline>
                        </svg>
                      </div>
                      </div>
                      <img src={linethrough} className="img-fluid" />
                      <div className="new_mission_select_box_div mt-3">
                        <div className="highlighted_mission_mark_fifth"></div>
                        <div>
                          <div className="new_mission_line_through_nine"></div>
                          <p className="new_cont_social_text">
                            Read for 360 more mins this week:
                          </p>
                          <img
                            src={Checkmarkmission}
                            className="img-fluid new_mission_check_mark"
                            draggable="false"
                          />
                        </div>
                      
                        <div class="checkbox-wrapper-radio">
                        <input
                          type="checkbox"
                          checked                         
                        />
                        <svg viewBox="0 0 35.6 35.6">
                          <circle
                            class="background"
                            cx="17.8"
                            cy="17.8"
                            r="17.8"
                          ></circle>
                          <circle
                            class="stroke"
                            cx="17.8"
                            cy="17.8"
                            r="14.37"
                          ></circle>
                          <polyline
                            class="check"
                            points="11.78 18.12 15.55 22.23 25.17 12.87"
                          ></polyline>
                        </svg>
                      </div>
                      </div>
                      <img src={linethrough} className="img-fluid" />
                      <div className="new_mission_select_box_div mt-3">
                        <div className="highlighted_mission_mark_sixth"></div>

                        <div>
                          <div className="new_mission_line_through_nine"></div>
                          <p className="new_cont_social_text">
                            Read for 12hr more mins this week:
                          </p>
                          <img
                            src={Checkmarkmission}
                            className="img-fluid new_mission_check_mark"
                            draggable="false"
                          />
                        </div>
                       
                        <div class="checkbox-wrapper-radio">
                        <input
                          type="checkbox"
                          checked                         
                        />
                        <svg viewBox="0 0 35.6 35.6">
                          <circle
                            class="background"
                            cx="17.8"
                            cy="17.8"
                            r="17.8"
                          ></circle>
                          <circle
                            class="stroke"
                            cx="17.8"
                            cy="17.8"
                            r="14.37"
                          ></circle>
                          <polyline
                            class="check"
                            points="11.78 18.12 15.55 22.23 25.17 12.87"
                          ></polyline>
                        </svg>
                      </div>
                      </div>
                      <img src={linethrough} className="img-fluid" />
                      <div className="new_mission_select_box_div mt-3">
                        <div className="highlighted_mission_mark_seventh"></div>
                        <div className="highlighted_mission_mark_eight"></div>
                        <img
                          src={pointermission}
                          className="img-fluid pointermission_img_arrow"
                          draggable="false"
                        />
                        <div>
                          <div className="new_mission_line_through_nine"></div>
                          <p className="new_cont_social_text">
                            Read for 16hr more mins this week:
                          </p>
                          <img
                            src={Checkmarkmission}
                            className="img-fluid new_mission_check_mark"
                            draggable="false"
                          />
                        </div>                       
                        <div class="checkbox-wrapper-radio">
                        <input
                          type="checkbox"
                          checked
                        />
                        <svg viewBox="0 0 35.6 35.6">
                          <circle
                            class="background"
                            cx="17.8"
                            cy="17.8"
                            r="17.8"
                          ></circle>
                          <circle
                            class="stroke"
                            cx="17.8"
                            cy="17.8"
                            r="14.37"
                          ></circle>
                          <polyline
                            class="check"
                            points="11.78 18.12 15.55 22.23 25.17 12.87"
                          ></polyline>
                        </svg>
                      </div>
                      </div>

                      <img src={linethrough} className="img-fluid" />
                      <div className="complete-all">
                        <p>COMPLETE ALL DAILY MISSION TO GET</p>
                      </div>
                      <div className="manacoin1 mx-auto ">
                        <p className="new_mission_mana_numbers">15 MANA</p>
                      </div>
                    </div>
                    <div className="new_weekly_mission_sidebar">
                      <div>
                        <p className="hours_ramaining_mission_text">
                          2 HOURS REMAINING
                        </p>
                        <img src={giftmission} className=" gift_mission_img" draggable="false"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </UserLayout>
    </>
  );
};
