import { React, useState, useEffect } from "react";
import "./style.css";
import { UserLayout } from "../../Components/Layout/UserLayout";
import { Checkmarkmission } from "../../Assets/images";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aos from "aos";
import "aos/dist/aos.css";
export const Help = () => {
  const [ads, setAds] = useState([]);
  const [books, setBooks] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const base_url = "https://custom.mystagingserver.site/Tim-WDLLC/public/";
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <UserLayout>
      <>
        {/* Header */}

        {/* Hero Section */}
        <section class="inner__hero-sec jost-font">
          <div className="container">
            <div className="row">
              <div className="herro__title">
                <h1 className="typewriter"> Help </h1>
              </div>
            </div>
          </div>
        </section>

        <section class="contactUSNew_hero">
          {/* <div class="width-1600"> */}
          <div class="container">
            <div class="row">
              <div class="col-lg-6">
                <div class="inner_hero_content">
                  <h1
                    data-aos="fade-right"
                    data-aos-offset="0"
                    data-aos-duration="1000"
                    className="help_support_text"
                  >
                    Help and Support
                  </h1>
                  <p
                    data-aos="fade-right"
                    data-aos-offset="0"
                    data-aos-duration="2000"
                    className="happens_next"
                  >
                    Have an inquiry or some feedback for us? Fill out the form
                    to contact Our Team!
                  </p>
                  <br />
                  <div
                    class="icon_box"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-offset="0"
                  >
                    <div class="box_icon mb-2">
                      <img src={Checkmarkmission} alt="" />
                    </div>
                    <p className="help_text_detail">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting
                    </p>
                  </div>
                  <div
                    class="icon_box"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-offset="0"
                  >
                    <div class="box_icon mb-2">
                      <img src={Checkmarkmission} alt="" />
                    </div>
                    <p className="help_text_detail">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting
                    </p>
                  </div>
                  <div
                    class="icon_box"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    <div class="box_icon">
                      <img src={Checkmarkmission} alt="" />
                    </div>
                    <p className="help_text_detail">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-6  form_responsive_gap">
                <div
                  class="contactPage_form"
                  data-aos="fade-up"
                  data-aos-offset="0"
                  data-aos-duration="2000"
                >
                  <div class="contact_form">
                    <div class="contact_formContent">
                      <form id="leadForm" action="">
                        <div class="row">
                          <div class="col-md-12 mb-3 contact-formCols">
                            <div className="form-group"></div>
                          </div>
                          <div class="col-md-6 mb-3 contact-formCols">
                            <div class="form-group">
                              <input
                                type="text"
                                placeholder="First Name"
                                class="inputForm"
                                name="firstname"
                                required
                              />
                            </div>
                          </div>
                          <div class="col-md-6 mb-3 contact-formCols">
                            <div class="form-group">
                              <input
                                type="text"
                                placeholder="Last Name"
                                class="inputForm"
                                name="lastname"
                                required
                              />
                            </div>
                          </div>
                          <div class="col-md-6 mb-3 contact-formCols">
                            <div class="form-group">
                              <input
                                type="text"
                                placeholder="Phone Number"
                                class="inputForm"
                                name="phone"
                                required
                              />
                            </div>
                          </div>
                          <div class="col-md-6 mb-3 contact-formCols">
                            <div class="form-group">
                              <input
                                type="email"
                                placeholder="Your Email"
                                class="inputForm"
                                name="email"
                                required
                              />
                            </div>
                          </div>
                          <div class="col-md-12 mb-3 contact-formCols">
                            <div class="form-group">
                              <textarea
                                rows="4"
                                class="inputForm"
                                placeholder="How Can We Help?"
                                name="message"
                              ></textarea>
                            </div>
                          </div>
                          <div class="col-md-12 mb-5 contact-formCols"></div>
                          <div class="confidentialData">
                            <input type="hidden" id="country" name="country" />
                            <input type="hidden" id="ip" name="ip" />
                            <input
                              type="hidden"
                              class="locationLink"
                              name="website_url"
                            />
                          </div>
                          <div class="col-md-12 contact-formCols">
                            <div class="form-group">
                              <div class="techVerse_hero_btns">
                                <button
                                  type="submit"
                                  class="btn_with_icon w-100"
                                >
                                  <span class="btn_with_icon_text">SUBMIT</span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}
        </section>

        {/* Footer */}
      </>
    </UserLayout>
  );
};
