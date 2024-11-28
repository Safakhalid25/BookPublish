import { React, useState, useEffect } from "react";
import "./style.css";
import add_comments from "../../Assets/images/add_comments.png";
import advertise from "../../Assets/images/advertise.png";
import unlockbatch from "../../Assets/images/unlockbatch.png";
import Group1000002083 from "../../Assets/images/Group1000002083.png";
import Polygon6 from "../../Assets/images/Polygon6.png";
import Form from "react-bootstrap/Form";
import medal from "../../Assets/images/Medal.png";
import readChapCoin from "../../Assets/images/readChapCoin.png";
import club from "../../Assets/images/club.png";
import msg from "../../Assets/images/msg.png";
import recent_msg from "../../Assets/images/recent_msg.png";
import me from "../../Assets/images/me.png";
import cup from "../../Assets/images/cupimg.png";
import docs from "../../Assets/images/docimg.png";

import Trashcan from "../../Assets/images/Trashcan.png";

import Notification from "../../Assets/images/Notification.png";
import Vote from "../../Assets/images/Vote.png";
import { UserLayout } from "../../Components/Layout/UserLayout";
import board1 from "../../Assets/images/board1.png";
import openBook from "../../Assets/images/openBook.png";
import headphone from "../../Assets/images/headphone.png";
import comments from "../../Assets/images/comments.png";
import abtAuthor from "../../Assets/images/abtAuthor.png";
import unlocked from "../../Assets/images/unlocked.png";
import bookvote from "../../Assets/images/bookvote.png";
import backarrow from "../../Assets/images/backarrow.png";
import showmore from "../../Assets/images/showmore.png";
import previous from "../../Assets/images/previous.png";
import dropdown from "../../Assets/images/dropdown.png";
import comments_profile from "../../Assets/images/comments_profile.png";
import codex_omega from "../../Assets/images/codex_omega.png";
import arrow_right from "../../Assets/images/arrow_right.png";
import content_img from "../../Assets/images/content_img.png";
import reply_icon from "../../Assets/images/reply_icon.png";
import moreicon from "../../Assets/images/moreicon.png";
import theme from "../../Assets/images/theme.png";
import bookreport from "../../Assets/images/bookreport.png";
import next from "../../Assets/images/next.png";
import bookchaplocked from "../../Assets/images/bookchaplocked.png";
import ManaFrame from "../../Assets/images/ManaFrame.png";
import rotateManaCoin from "../../Assets/images/rotateManaCoin.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faSearch, faStar } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aos from "aos";
import "aos/dist/aos.css";
import lcimg from "../../Assets/images/51L+xXb2C7L 1.png";
export const BookChapterDetail = () => {
  const [ads, setAds] = useState([]);
  const [books, setBooks] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const base_url = "https://custom.mystagingserver.site/Tim-WDLLC/public/";
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

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <UserLayout>
      <>
        {/* Header */}

        <section className="book_name_bg">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h6 className="chap_short_description">
                  Lorem Ipsum is simply dummy text of the
                </h6>
                <h5 className="chapter_name">
                  Chapter 721 - 731 - Chapter Name Here
                </h5>
                <div className="content_height">
                  <p className="chapter_content">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                  <p className="chapter_content">
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old. Richard
                    McClintock, a Latin professor at Hampden-Sydney College in
                    Virginia, looked up one of the more obscure Latin words,
                    consectetur, from a Lorem Ipsum passage, and going through
                    the cites of the word in classical literature, discovered
                    the undoubtable source. Lorem Ipsum comes from sections
                    1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The
                    Extremes of Good and Evil) by Cicero, written in 45 BC. This
                    book is a treatise on the theory of ethics, very popular
                    during the Renaissance. The first line of Lorem Ipsum,
                    "Lorem ipsum dolor sit amet..", comes from a line in section
                    1.10.32.
                  </p>
                  <p className="chapter_content">
                    The standard chunk of Lorem Ipsum used since the 1500s is
                    reproduced below for those interested. Sections 1.10.32 and
                    1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are
                    also reproduced in their exact original form, accompanied by
                    English versions from the 1914 translation by H. Rackham.
                  </p>
                  <p className="chapter_content">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English. Many desktop publishing packages and web
                    page editors now use Lorem Ipsum as their default model
                    text, and a search for 'lorem ipsum' will uncover many web
                    sites still in their infancy. Various versions have evolved
                    over the years, sometimes by accident, sometimes on purpose
                    (injected humour and the like).
                  </p>
                  <p className="chapter_content">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum."
                  </p>
                  <p className="chapter_content">
                    "Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                    qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                    velit, sed quia non numquam eius modi tempora incidunt ut
                    labore et dolore magnam aliquam quaerat voluptatem. Ut enim
                    ad minima veniam, quis nostrum
                  </p>
                  <p className="chapter_content">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English. Many desktop publishing packages and web
                    page editors now use Lorem Ipsum as their default model
                    text, and a search for 'lorem ipsum' will uncover many web
                    sites still in their infancy. Various versions have evolved
                    over the years, sometimes by accident, sometimes on purpose
                    (injected humour and the like).
                  </p>
                  <div>
                    <img src={advertise} className="img-fluid advertise_img" />
                  </div>
                  <p className="chapter_content">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English. Many desktop publishing packages and web
                    page editors now use Lorem Ipsum as their default model
                    text, and a search for 'lorem ipsum' will uncover many web
                    sites still in their infancy. Various versions have evolved
                    over the years, sometimes by accident, sometimes on purpose
                    (injected humour and the like).
                  </p>
                  <p className="chapter_content">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum."
                  </p>
                  <p className="chapter_content">
                    "Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                    qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                    velit, sed quia non numquam eius modi tempora incidunt ut
                    labore et dolore magnam aliquam quaerat voluptatem. Ut enim
                    ad minima veniam, quis nostrum
                  </p>
                  <p className="chapter_content">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English. Many desktop publishing packages and web
                    page editors now use Lorem Ipsum as their default model
                    text, and a search for 'lorem ipsum' will uncover many web
                    sites still in their infancy. Various versions have evolved
                    over the years, sometimes by accident, sometimes on purpose
                    (injected humour and the like).
                  </p>
                  <p className="chapter_content">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum."
                  </p>
                  <p className="chapter_content">
                    "Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                    qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                    velit, sed quia non numquam eius modi tempora incidunt ut
                    labore et dolore magnam aliquam quaerat voluptatem. Ut enim
                    ad minima veniam, quis nostrum
                  </p>
                  <p className="chapter_content">
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old. Richard
                    McClintock, a Latin professor at Hampden-Sydney College in
                    Virginia, looked up one of the more obscure Latin words,
                    consectetur, from a Lorem Ipsum passage, and going through
                    the cites of the word in classical literature, discovered
                    the undoubtable source. Lorem Ipsum comes from sections
                    1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The
                    Extremes of Good and Evil) by Cicero, written in 45 BC. This
                    book is a treatise on the theory of ethics, very popular
                    during the Renaissance. The first line of Lorem Ipsum,
                    "Lorem ipsum dolor sit amet..", comes from a line in section
                    1.10.32.
                  </p>
                  <p className="chapter_content">
                    The standard chunk of Lorem Ipsum used since the 1500s is
                    reproduced below for those interested. Sections 1.10.32 and
                    1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are
                    also reproduced in their exact original form, accompanied by
                    English versions from the 1914 translation by H. Rackham.
                  </p>
                  <div>
                    <img src={advertise} className="img-fluid advertise_img" />
                  </div>
                  <p className="chapter_content">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English. Many desktop publishing packages and web
                    page editors now use Lorem Ipsum as their default model
                    text, and a search for 'lorem ipsum' will uncover many web
                    sites still in their infancy. Various versions have evolved
                    over the years, sometimes by accident, sometimes on purpose
                    (injected humour and the like).
                  </p>
                  <p className="chapter_content">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum."
                  </p>
                  <p className="chapter_content">
                    "Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                    qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                    velit, sed quia non numquam eius modi tempora incidunt ut
                    labore et dolore magnam aliquam quaerat voluptatem. Ut enim
                    ad minima veniam, quis nostrum
                  </p>
                  <p className="chapter_content">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English. Many desktop publishing packages and web
                    page editors now use Lorem Ipsum as their default model
                    text, and a search for 'lorem ipsum' will uncover many web
                    sites still in their infancy. Various versions have evolved
                    over the years, sometimes by accident, sometimes on purpose
                    (injected humour and the like).
                  </p>
                  <p className="chapter_content">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum."
                  </p>
                  <p className="chapter_content">
                    "Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                    qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                    velit, sed quia non numquam eius modi tempora incidunt ut
                    labore et dolore magnam aliquam quaerat voluptatem. Ut enim
                    ad minima veniam, quis nostrum
                  </p>
                  <p className="chapter_content">
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old. Richard
                    McClintock, a Latin professor at Hampden-Sydney College in
                    Virginia, looked up one of the more obscure Latin words,
                    consectetur, from a Lorem Ipsum passage, and going through
                    the cites of the word in classical literature, discovered
                    the undoubtable source. Lorem Ipsum comes from sections
                    1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The
                    Extremes of Good and Evil) by Cicero, written in 45 BC. This
                    book is a treatise on the theory of ethics, very popular
                    during the Renaissance. The first line of Lorem Ipsum,
                    "Lorem ipsum dolor sit amet..", comes from a line in section
                    1.10.32.
                  </p>
                  <p className="chapter_content">
                    The standard chunk of Lorem Ipsum used since the 1500s is
                    reproduced below for those interested. Sections 1.10.32 and
                    1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are
                    also reproduced in their exact original form, accompanied by
                    English versions from the 1914 translation by H. Rackham.
                  </p>
                  <div>
                    <img src={advertise} className="img-fluid advertise_img" />
                  </div>
                  <div className="detial_chapter_bg">
                    <div>
                      <h1 className="chapter_detail_comments">Comments</h1>
                      <div className="modal_comments_btn_div">
                        <button className="comment_top_btn"> TOP </button>
                        <button className="comment_top_btn"> NEWEST </button>
                      </div>
                    </div>
                    <div class="modal-body">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="cmnts_chapter_divider chapter_detail_btns_space"></div>
                          <div className="chapter_comment_detail_box">
                            <img
                              src={recent_msg}
                              className="chapter_detail_recent_images"
                              draggable="false"
                            />
                            <div className="cmnts_custom_width">
                              <div className="user_name_with_cmnts_details_div">
                                <p className="chapter_detail_cmnt_user_name">
                                  @Braindean B33
                                </p>
                                <p className="chapter_detail_cmnt_edit_history">
                                  5min ago (edited)
                                </p>
                              </div>
                              <p className="chapter_detail_modal_user_cmts_para">
                                {" "}
                                Would have been kinda cool if chuck lost his
                                powers after wiping out the last humans across
                                the multiverse who believed in him and realized
                                he was also just another story.
                              </p>
                              <div className="user_name_with_cmnts_details_div">
                                <i class="fa-solid fa-thumbs-up chapter_detail_like_comnts_icon"></i>
                                <p className="chapter_detail_number_of_likes">
                                  {" "}
                                  684{" "}
                                </p>
                                <i class="fa-solid fa-thumbs-down  fa-flip-horizontal chapter_detail_like_comnts_icon"></i>
                                <i class="fa-solid fa-message chapter_detail_like_comnts_icon"></i>
                              </div>
                              <p className="chapter_detail_cmnts_replies">
                                {" "}
                                19 Replies{" "}
                              </p>
                            </div>
                            <i class="fa-solid fa-ellipsis-vertical chapter_detail_view_more_icon"></i>
                          </div>
                        </div>
                      </div>

                      <div className="row mt-4">
                        <div className="col-md-12">
                          <div className="chapter_comment_detail_box">
                            <img
                              src={me}
                              className="chapter_detail_recent_images"
                              draggable="false"
                            />
                            <div className="cmnts_custom_width">
                              <div className="user_name_with_cmnts_details_div">
                                <p className="chapter_detail_cmnt_user_name">
                                  @emilatariq1271
                                </p>
                                <p className="chapter_detail_cmnt_edit_history">
                                  5min ago
                                </p>
                              </div>
                              <p className="chapter_detail_modal_user_cmts_para">
                                {" "}
                                Would have been kinda cool if chuck lost his
                                powers after wiping out the last humans across
                                the multiverse.{" "}
                              </p>
                              <div className="user_name_with_cmnts_details_div">
                                <i class="fa-solid fa-thumbs-up chapter_detail_like_comnts_icon"></i>
                                <p className="chapter_detail_number_of_likes">
                                  {" "}
                                  637{" "}
                                </p>
                                <i class="fa-solid fa-thumbs-down  fa-flip-horizontal chapter_detail_like_comnts_icon"></i>
                                <i class="fa-solid fa-message chapter_detail_like_comnts_icon"></i>
                              </div>
                              <p className="chapter_detail_cmnts_replies">
                                {" "}
                                13 Replies{" "}
                              </p>
                            </div>
                            <i class="fa-solid fa-ellipsis-vertical chapter_detail_view_more_icon"></i>
                          </div>
                        </div>
                      </div>

                      <div className="row mt-4">
                        <div className="col-md-12">
                          <div className="type_cmnts_box">
                            <img
                              src={club}
                              className="chapter_detail_recent_msg_img"
                              draggable="false"
                            />
                            <div className="chapter_detail_cmnt_input_box">
                              <input
                                type="text"
                                name="firstname"
                                placeholder="Add a Comment"
                                className="chapter_detail_add_cmnt_input"
                              />
                              <input
                                type="submit"
                                value="Comment"
                                className="chapter_detail_add_cmnt_btn"
                              />
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

        <div className="">
          <div className="hhhhhhh">
            <button className="arrow_btn" onClick={toggleClass}>
              <i class="fa-solid fa-angle-down"></i>
            </button>
          </div>
          <div className={`icons_box ${isActive ? "minimiziing" : ""} `}>
            <div className="text-center">
              <button
                className="book_name_icons_btn"
                data-bs-toggle="modal"
                data-bs-target="#Backdropfour"
              >
                {" "}
                <img src={headphone} className="img-fluid book_name_icons" />
              </button>
              <p className="book_name_icons_detail">Audio Book</p>
            </div>
            <div className="text-center">
              <button className="book_name_icons_btn">
                <img src={openBook} className="img-fluid book_name_icons" />
              </button>
              <p className="book_name_icons_detail">Novel Detail</p>
            </div>
            <div className="text-center">
              <button
                className="book_name_icons_btn"
                data-bs-toggle="modal"
                data-bs-target="#BackdropThree"
              >
                <img src={comments} className="img-fluid book_name_icons" />
              </button>
              <p className="book_name_icons_detail">Comments</p>
            </div>
            <div className="text-center">
              <button className="book_name_icons_btn">
                <img src={abtAuthor} className="img-fluid book_name_icons" />
              </button>
              <p className="book_name_icons_detail">About Author</p>
            </div>
            <div className="text-center">
              <button
                className="book_name_icons_btn"
                data-bs-toggle="modal"
                data-bs-target="#Backdrop"
              >
                <img src={unlockbatch} className="img-fluid book_name_icons" />
              </button>
              <p className="book_name_icons_detail">Batch Unlock</p>
            </div>
            <div className="text-center">
              <button className="book_name_icons_btn">
                {" "}
                <img src={theme} className="img-fluid book_name_icons" />{" "}
              </button>
              <p className="book_name_icons_detail"> change theme</p>
            </div>
            <div className="text-center">
              <button className="book_name_icons_btn">
                {" "}
                <img src={bookvote} className="img-fluid book_name_icons" />
              </button>
              <p className="book_name_icons_detail"> vote now</p>
            </div>
            <div className="text-center">
              <button
                className="book_name_icons_btn"
                data-bs-toggle="modal"
                data-bs-target="#BackdropTwo"
              >
                <img src={bookreport} className="img-fluid book_name_icons" />
              </button>
              <p className="book_name_icons_detail"> Report Chapter</p>
            </div>
            <div className="text-center dropup-center dropup">
              <button
                className="book_name_icons_btn"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img src={moreicon} className="img-fluid more_icons" />
              </button>

              <p className="book_name_icons_detail"> More</p>

              <ul class="dropdown-menu custom_dropdown_menu_container">
                <div className="dropdown_list_bg">
                  <div className="dropdown_list_with_toggle">
                    <li className="custom_dropdown_item_list_text">
                      Auto-unlock locked chapters
                    </li>
                    <div class="checkbox-wrapper-14">
                      <input id="s1-14" type="checkbox" class="switch" />
                    </div>
                  </div>
                  <div className="dropdown_list_divider"></div>
                  <div className="dropdown_list_with_toggle">
                    <li className="custom_dropdown_item_list_text">
                      Paragraph Comments
                    </li>
                    <div class="checkbox-wrapper-14">
                      <input id="s1-14" type="checkbox" class="switch" />
                    </div>
                  </div>
                  <div className="dropdown_list_divider"></div>
                  <div className="dropdown_list_with_toggle">
                    <li className="custom_dropdown_item_list_text">
                      Apply Voucher
                    </li>
                    <img
                      src={arrow_right}
                      className="img-fluid arrow_right_side"
                    />
                  </div>
                </div>

                <div className="dropdown_list_bg mt-3">
                  <div className="dropdown_list_with_toggle">
                    <li className="custom_dropdown_item_list_text">
                      Recommend this book
                    </li>
                    <img
                      src={arrow_right}
                      className="img-fluid arrow_right_side"
                    />
                  </div>
                  <div className="dropdown_list_divider"></div>
                  <div className="dropdown_list_with_toggle">
                    <li className="custom_dropdown_item_list_text">
                      Content Creator(s)
                    </li>
                    <img
                      src={arrow_right}
                      className="img-fluid arrow_right_side"
                    />
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>

        <div className="more_icons_box">
          <div className="text-center">
            <p className="book_name_icons_detail">Previous Chapter</p>
            <img src={previous} className="img-fluid book_name_icons" />
          </div>
          <div className="text-center">
            <buton
              type="button"
              class=""
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              <img src={showmore} className="img-fluid book_name_icons" />
            </buton>
          </div>
          <div className="text-center">
            <p className="book_name_icons_detail">Next Chapter</p>
            <img src={next} className="img-fluid book_name_icons" />
          </div>
        </div>

        {/* Footer */}

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
          <div class="modal-dialog custom_modal_dailog">
            <div class="modal-content custom_modal-content">
              <div class="modal-header">
                <div className="position-relative">
                  <img
                    src={backarrow}
                    className="img-fluid book_content_arrow"
                  />
                  <h3 className="content_text"> Contents </h3>
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
              <div class="modal-body custom_modal_body">
                <div className="chapter_numbers_box">
                  <div className="d-flex gap-3 ">
                    <p className="chap_no"> 1 </p>
                    <div>
                      <p className="chap_title">Lorem Ipsum</p>
                      <p className="chapter_year"> 3yr </p>
                    </div>
                  </div>
                </div>
                <div className="chapter_numbers_box">
                  <div className="d-flex gap-3 ">
                    <p className="chap_no"> 2</p>
                    <div>
                      <p className="chap_title">Lorem Ipsum</p>
                      <p className="chapter_year"> 3yr </p>
                    </div>
                  </div>
                </div>
                <div className="chapter_numbers_box">
                  <div className="d-flex gap-3 ">
                    <p className="chap_no"> 3</p>
                    <div>
                      <p className="chap_title">Lorem Ipsum</p>
                      <p className="chapter_year"> 3yr </p>
                    </div>
                  </div>
                </div>

                <div className="chapter_numbers_box">
                  <div className="d-flex gap-3 ">
                    <p className="chap_no"> 4 </p>
                    <div>
                      <p className="chap_title">Lorem Ipsum</p>
                      <p className="chapter_year"> 3yr </p>
                    </div>
                  </div>

                  <div>
                    <img
                      src={bookchaplocked}
                      className="img-fluid book_chap_lock"
                    />
                  </div>
                </div>
                <div className="chapter_numbers_box">
                  <div className="d-flex gap-3 ">
                    <p className="chap_no"> 5 </p>
                    <div>
                      <p className="chap_title">Lorem Ipsum</p>
                      <p className="chapter_year"> 3yr </p>
                    </div>
                  </div>
                  <div>
                    <img
                      src={bookchaplocked}
                      className="img-fluid book_chap_lock"
                    />
                  </div>
                </div>

                <div className="chapter_numbers_box">
                  <div className="d-flex gap-3 ">
                    <p className="chap_no"> 6 </p>
                    <div>
                      <p className="chap_title">Lorem Ipsum</p>
                      <p className="chapter_year"> 3yr </p>
                    </div>
                  </div>
                  <div>
                    <img
                      src={bookchaplocked}
                      className="img-fluid book_chap_lock"
                    />
                  </div>
                </div>

                <div className="chapter_numbers_box">
                  <div className="d-flex gap-3 ">
                    <p className="chap_no"> 7 </p>
                    <div>
                      <p className="chap_title">Lorem Ipsum</p>
                      <p className="chapter_year"> 3yr </p>
                    </div>
                  </div>
                  <div>
                    <img
                      src={bookchaplocked}
                      className="img-fluid book_chap_lock"
                    />
                  </div>
                </div>
                <div className="chapter_numbers_box">
                  <div className="d-flex gap-3 ">
                    <p className="chap_no"> 8 </p>
                    <div>
                      <p className="chap_title">Lorem Ipsum</p>
                      <p className="chapter_year"> 3yr </p>
                    </div>
                  </div>
                  <div>
                    <img
                      src={bookchaplocked}
                      className="img-fluid book_chap_lock"
                    />
                  </div>
                </div>

                <div className="chapter_numbers_box">
                  <div className="d-flex gap-3 ">
                    <p className="chap_no"> 9 </p>
                    <div>
                      <p className="chap_title">Lorem Ipsum</p>
                      <p className="chapter_year"> 3yr </p>
                    </div>
                  </div>
                  <div>
                    <img
                      src={bookchaplocked}
                      className="img-fluid book_chap_lock"
                    />
                  </div>
                </div>
                <div className="chapter_numbers_box">
                  <div className="d-flex gap-3 ">
                    <p className="chap_no"> 10 </p>
                    <div>
                      <p className="chap_title">Lorem Ipsum</p>
                      <p className="chapter_year"> 3yr </p>
                    </div>
                  </div>
                  <div>
                    <img
                      src={bookchaplocked}
                      className="img-fluid book_chap_lock"
                    />
                  </div>
                </div>
                <div className="chapter_numbers_box">
                  <div className="d-flex gap-3 ">
                    <p className="chap_no"> 11 </p>
                    <div>
                      <p className="chap_title">Lorem Ipsum</p>
                      <p className="chapter_year"> 3yr </p>
                    </div>
                  </div>
                  <div>
                    <img
                      src={bookchaplocked}
                      className="img-fluid book_chap_lock"
                    />
                  </div>
                </div>
                <div className="chapter_numbers_box">
                  <div className="d-flex gap-3 ">
                    <p className="chap_no"> 12 </p>
                    <div>
                      <p className="chap_title">Lorem Ipsum</p>
                      <p className="chapter_year"> 3yr </p>
                    </div>
                  </div>
                  <div>
                    <img
                      src={bookchaplocked}
                      className="img-fluid book_chap_lock"
                    />
                  </div>
                </div>
                <div className="chapter_numbers_box">
                  <div className="d-flex gap-3 ">
                    <p className="chap_no"> 13 </p>
                    <div>
                      <p className="chap_title">Lorem Ipsum</p>
                      <p className="chapter_year"> 3yr </p>
                    </div>
                  </div>
                  <div>
                    <img
                      src={bookchaplocked}
                      className="img-fluid book_chap_lock"
                    />
                  </div>
                </div>
              </div>

              <div className="purchased_bg">
                <h4 className="more_chap">MORE ADVANCED CHAPTERS</h4>
                <h4 className="more_chap more_chap_two">
                  Excited for more? <span className="great"> Great! </span>
                </h4>
                <p className="program_text more_chap_two">
                  The author has many chapters in store and has joined the
                  program
                </p>
                <h4 className="prices_notes more_chap_two">
                  NOTE: Chapters will be released at the usual rate and standard
                  prices.
                </h4>
                <h4 className="warning_note more_chap_two">
                  CONSIDER THIS YOUR WARNING!
                </h4>
                <div className="text-center">
                  {" "}
                  <button
                    className="advanced_purchased_btn"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdropPurchased"
                  >
                    Purchase advanced{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Modal end --> */}

        {/* <!-- Modal --> */}

        <div
          class="modal fade"
          id="Backdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered">
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
                      />
                      <div className="mana_gift_box">
                        <h3 className="batch_unlock">
                          {" "}
                          Batch Unlock Chapters{" "}
                        </h3>
                        <i class="fa-solid fa-question batch_unlock_mark"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="col-md-12">
                    <div className="chapters_with_checkbox">
                      <div>
                        <h6 className="locked_chapters_text">
                          Next 10 Locked Chapters
                        </h6>
                        <p className="locked_chapters_number"> Ch 73 - Ch 82</p>
                      </div>

                      <div class="checkbox-wrapper-31">
                        <input
                          type="checkbox"
                          checked={selectedOption === "option1"}
                          onChange={() => SingleSelectCheckbox("option1")}
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
                  </div>

                  <div className="checkbox_div"></div>

                  <div className="col-md-12">
                    <div className="chapters_with_checkbox">
                      <div>
                        <h6 className="locked_chapters_text">
                          Next 50 Locked Chapters
                        </h6>
                        <p className="locked_chapters_number">
                          {" "}
                          Ch 73 - Ch 122
                        </p>
                      </div>

                      <div class="checkbox-wrapper-31">
                        <input
                          type="checkbox"
                          checked={selectedOption === "option2"}
                          onChange={() => SingleSelectCheckbox("option2")}
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
                  </div>

                  <div className="checkbox_div"></div>

                  <div className="col-md-12">
                    <div className="chapters_with_checkbox">
                      <div>
                        <h6 className="locked_chapters_text">
                          Next 100 Locked Chapters
                        </h6>
                        <p className="locked_chapters_number">
                          {" "}
                          Ch 73 - Ch 172
                        </p>
                      </div>

                      <div class="checkbox-wrapper-31">
                        <input
                          type="checkbox"
                          checked={selectedOption === "option3"}
                          onChange={() => SingleSelectCheckbox("option3")}
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
                  </div>

                  <div className="checkbox_div"></div>

                  <div className="col-md-12">
                    <div className="chapters_with_checkbox">
                      <div>
                        <h6 className="locked_chapters_text">
                          {" "}
                          Remaining Locked Chapters{" "}
                          <span className="locked_chapter_buy"> 10% OFF </span>
                        </h6>
                        <p className="locked_chapters_number">
                          {" "}
                          Ch 73 - Ch 906{" "}
                        </p>
                      </div>

                      <div class="checkbox-wrapper-31">
                        <input
                          type="checkbox"
                          checked={selectedOption === "option4"}
                          onChange={() => SingleSelectCheckbox("option4")}
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
                  </div>
                </div>

                <div className="row mt-5">
                  <div className="col-md-6">
                    <p className="unlock_cost">Unlock Cost</p>
                    <div className="discount_coins_div">
                      <p className="unlock_cost_amount">
                        {" "}
                        - 8332{" "}
                        <sub className="unlock_cost_discount"> 9257 </sub>
                      </p>
                      <img
                        src={ManaFrame}
                        className="img-fluid mana_discount_frame"
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <p className="unlock_cost">Balance</p>
                    <div className="discount_coins_div">
                      <p className="unlock_cost_amount"> 0 </p>
                      <img
                        src={ManaFrame}
                        className="img-fluid mana_discount_frame"
                      />
                    </div>
                  </div>
                </div>

                <div className="row mt-5">
                  <div className="col-md-12">
                    <button className="more_mana_cost_btn">
                      {" "}
                      Get More Mana{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Modal End --> */}

        {/* <!-- Modal --> */}

        <div
          class="modal fade"
          id="BackdropTwo"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered">
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
                      <h3 className="report_heading"> Report </h3>
                      <p className="report_para">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                      </p>
                    </div>
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-12">
                    <form className="report_form">
                      <label for="fname">Reason for report?</label>
                      <textarea
                        type="text"
                        className="report_input"
                        id="fname"
                        name="fname"
                        rows="7"
                        placeholder="Your answer here..."
                      />
                      <input type="submit" value="Report" />
                    </form>
                  </div>
                  <div className="col-md-12">
                    <button
                      type="button"
                      class="custom_report_close_btn"
                      data-bs-dismiss="modal"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Modal End --> */}

        {/* <!-- Modal --> */}

        <div
          class="modal fade"
          id="BackdropThree"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div class=" modal-dialog second_custom_modal_dailog custom_modal_scroll">
            <div class="modal-content ">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="staticBackdropLabel"></h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <div className="row">
                  <div className="col-md-12">
                    <div className="position-relative">
                      <div className="comments_filter_div">
                        <h3 className="comments_heading"> COMMENTS </h3>
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
                            <span className="comments_date"> 13-Feb-2024 </span>
                          </p>
                        </div>
                        <p className="comments_text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam,
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
                            <span className="comments_date"> 13-Feb-2024 </span>
                          </p>
                        </div>
                        <p className="comments_text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam,
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
                            <span className="comments_date"> 13-Feb-2024 </span>
                          </p>
                        </div>
                        <p className="comments_text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam,
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
                            <span className="comments_date"> 13-Feb-2024 </span>
                          </p>
                        </div>
                        <p className="comments_text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam,
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
            </div>
          </div>
        </div>

        {/* <!-- Modal End --> */}

        {/* <!-- Modal --> */}

        <div
          class="modal fade"
          id="Backdropfour"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered cust_modal_dailog">
            <div class="modal-content audio_modal_bg">
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
                  <div className="col-md-5">
                    <img src={codex_omega} className="img-fluid codex_img" />
                  </div>

                  <div className="col-md-7">
                    <p className="playing_text">Now Playing</p>
                    <p className="playing_text_chap_name">Chapter Name</p>
                    <p className="playing_text_author_name">Author Name</p>
                    <div className="content_icon_with_text">
                      <img
                        src={content_img}
                        className="img-fluid content_img"
                      />
                      <p className="second_content_text">Content </p>
                    </div>
                    <p className="playback_text">
                      Playback Speed{" "}
                      <span className="playback_speed">1.5x</span>
                    </p>
                    <p className="playback_text">Sleep Timer</p>
                    <div class="btns_group">
                      <button className="timer_btns active off_btn">Off</button>
                      <button className="timer_btns">5min</button>
                      <button className="timer_btns">15min</button>
                      <button className="timer_btns">30min</button>
                      <button className="timer_btns">1Hr</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Modal End --> */}

        {/* <!-- purchased Modal --> */}

        <div
          class="modal fade"
          id="staticBackdropPurchased"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog custom_modal_dailog">
            <div class="modal-content purchased_modal-content">
              <div class="modal-header">
                <div className="plan_with_mark">
                  <h3 className="choose_plan_para"> Choose a plan </h3>
                  <i class="fa-solid fa-question batch_unlock_mark"></i>
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
              <div class="modal-body modal_body_spacing">
                <p className="time_left">
                  Time left before Advanced expires:{" "}
                  <span className="expire_date"> 16d 19h 07m 47s </span>
                </p>

                {/* raed chapter card start */}
                <div className="purchased_chap_cards">
                  <p className="read_ahead"> Read 2 chapters ahead </p>
                  <div className="read_ahead_main_div">
                    <p className="read_ahead_para">
                      Purchase to unlock 2 chapters in advance
                    </p>
                    <div className="read_ahead_child_div">
                      <p className="read_ahead_num">1</p>
                      <img
                        src={readChapCoin}
                        className="img-fluid read_chap_coin_img"
                      />
                    </div>
                  </div>
                  <div className="read_ahead_main_div">
                    <p className="read_ahead_para">Unlock to Ch.813</p>
                    <div className="read_ahead_child_div">
                      <p className="read_ahead_num">28</p>
                      <img
                        src={readChapCoin}
                        className="img-fluid read_chap_coin_img"
                      />
                    </div>
                  </div>
                  <div className="purchased_chap_divider"></div>
                  <div className="read_ahead_main_div">
                    <div className="read_ahead_child_div">
                      <img
                        src={rotateManaCoin}
                        className="img-fluid purchased_mana_fram_img"
                      />
                      <p className="purchased_mana_num">26</p>
                    </div>
                    <button className="purchased_mana_card_btn">
                      Purchase
                    </button>
                  </div>
                </div>
                {/* raed chapter card end */}
                {/* raed chapter card start */}
                <div className="purchased_chap_cards">
                  <p className="read_ahead">
                    {" "}
                    Read 5 chapters in 2 days ahead{" "}
                  </p>
                  <div className="read_ahead_main_div">
                    <p className="read_ahead_para">
                      Purchase to unlock 2 chapters in advance
                    </p>
                    <div className="read_ahead_child_div">
                      <p className="read_ahead_num">399</p>
                      <img
                        src={readChapCoin}
                        className="img-fluid read_chap_coin_img"
                      />
                    </div>
                  </div>
                  <div className="read_ahead_main_div">
                    <p className="read_ahead_para">Unlock to Ch.813</p>
                    <div className="read_ahead_child_div">
                      <p className="read_ahead_num">633</p>
                      <img
                        src={readChapCoin}
                        className="img-fluid read_chap_coin_img"
                      />
                    </div>
                  </div>
                  <div className="purchased_chap_divider"></div>
                  <div className="read_ahead_main_div">
                    <div className="read_ahead_child_div">
                      <img
                        src={rotateManaCoin}
                        className="img-fluid purchased_mana_fram_img"
                      />
                      <p className="purchased_mana_num">462</p>
                    </div>
                    <button className="purchased_mana_card_btn">
                      Purchase
                    </button>
                  </div>
                </div>
                {/* raed chapter card end */}

                {/* raed chapter card start */}
                <div className="purchased_chap_cards">
                  <p className="read_ahead">
                    {" "}
                    Read 10 chapters in 6 days ahead{" "}
                  </p>
                  <div className="read_ahead_main_div">
                    <p className="read_ahead_para">
                      Purchase to unlock 2 chapters in advance
                    </p>
                    <div className="read_ahead_child_div">
                      <p className="read_ahead_num">899</p>
                      <img
                        src={readChapCoin}
                        className="img-fluid read_chap_coin_img"
                      />
                    </div>
                  </div>
                  <div className="read_ahead_main_div">
                    <p className="read_ahead_para">Unlock to Ch.813</p>
                    <div className="read_ahead_child_div">
                      <p className="read_ahead_num">166</p>
                      <img
                        src={readChapCoin}
                        className="img-fluid read_chap_coin_img"
                      />
                    </div>
                  </div>
                  <div className="purchased_chap_divider"></div>
                  <div className="read_ahead_main_div">
                    <div className="read_ahead_child_div">
                      <img
                        src={rotateManaCoin}
                        className="img-fluid purchased_mana_fram_img"
                      />
                      <p className="purchased_mana_num">1065</p>
                    </div>
                    <button className="purchased_mana_card_btn">
                      Purchase
                    </button>
                  </div>
                </div>
                {/* raed chapter card end */}
                {/* raed chapter card start */}
                <div className="purchased_chap_cards">
                  <p className="read_ahead"> Read 15 chapters ahead </p>
                  <div className="read_ahead_main_div">
                    <p className="read_ahead_para">
                      Purchase to unlock 2 chapters in advance
                    </p>
                    <div className="read_ahead_child_div">
                      <p className="read_ahead_num">1</p>
                      <img
                        src={readChapCoin}
                        className="img-fluid read_chap_coin_img"
                      />
                    </div>
                  </div>
                  <div className="read_ahead_main_div">
                    <p className="read_ahead_para">Unlock to Ch.813</p>
                    <div className="read_ahead_child_div">
                      <p className="read_ahead_num">28</p>
                      <img
                        src={readChapCoin}
                        className="img-fluid read_chap_coin_img"
                      />
                    </div>
                  </div>
                  <div className="purchased_chap_divider"></div>
                  <div className="read_ahead_main_div">
                    <div className="read_ahead_child_div">
                      <img
                        src={rotateManaCoin}
                        className="img-fluid purchased_mana_fram_img"
                      />
                      <p className="purchased_mana_num">26</p>
                    </div>
                    <button className="purchased_mana_card_btn">
                      Purchase
                    </button>
                  </div>
                </div>
                {/* raed chapter card end */}

                {/* raed chapter card start */}
                <div className="purchased_chap_cards">
                  <p className="read_ahead">
                    {" "}
                    Read 20 chapters in 2 days ahead{" "}
                  </p>
                  <div className="read_ahead_main_div">
                    <p className="read_ahead_para">
                      Purchase to unlock 2 chapters in advance
                    </p>
                    <div className="read_ahead_child_div">
                      <p className="read_ahead_num">399</p>
                      <img
                        src={readChapCoin}
                        className="img-fluid read_chap_coin_img"
                      />
                    </div>
                  </div>
                  <div className="read_ahead_main_div">
                    <p className="read_ahead_para">Unlock to Ch.813</p>
                    <div className="read_ahead_child_div">
                      <p className="read_ahead_num">63</p>
                      <img
                        src={readChapCoin}
                        className="img-fluid read_chap_coin_img"
                      />
                    </div>
                  </div>
                  <div className="purchased_chap_divider"></div>
                  <div className="read_ahead_main_div">
                    <div className="read_ahead_child_div">
                      <img
                        src={rotateManaCoin}
                        className="img-fluid purchased_mana_fram_img"
                      />
                      <p className="purchased_mana_num">462</p>
                    </div>
                    <button className="purchased_mana_card_btn">
                      Purchase
                    </button>
                  </div>
                </div>
                {/* raed chapter card end */}
                <div className="unlocked_mana_card_div">
                  <p className="unclocked_chap_content">
                    {" "}
                    Unlock Remaining Chapters
                  </p>
                  <div className="read_ahead_main_div_two">
                    <div className="read_ahead_child_div ">
                      <img
                        src={rotateManaCoin}
                        className="img-fluid purchased_mana_fram_img_two"
                      />
                      <p className="purchased_mana_num">600</p>
                    </div>
                    <button className="purchased_mana_card_btn_two">
                      Unlock
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Modal end --> */}
      </>
    </UserLayout>
  );
};
