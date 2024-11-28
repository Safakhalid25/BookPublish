import { React, useState, useEffect } from "react";
import { UserLayout } from "../../Components/Layout/UserLayout";
import {
  AdertiseImage,
  BookImage,
  Fancy,
  MainNoval,
  NovalImage,
} from "../../Assets/images";
import { Link } from "react-router-dom";
import { BookListingCover } from "../../Assets/images";
export const Home = () => {
  const [ads, setAds] = useState([]);
  const [books, setBooks] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const base_url = "https://custom.mystagingserver.site/Tim-WDLLC/public/";
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

  const GenreData = () => {
    document.querySelector(".loaderBox").classList.remove("d-none");
    fetch(
      "https://custom.mystagingserver.site/Tim-WDLLC/public/api/genre_listing"
    )
      .then((response) => response.json())
      .then((data) => {
        document.querySelector(".loaderBox").classList.add("d-none");
        console.log(data);
        setGenres(data.data);
        if (data.data.length > 0) {
          setSelectedGenre(data.data[0]); // Select the first genre by default
        }
      })
      .catch((error) => {
        document.querySelector(".loaderBox").classList.add("d-none");
        console.error("Error fetching data: ", error);
      });
  };

  useEffect(() => {
    adsListing();
    BookListing();
    GenreData();
  }, []);

  const handleTabClick = (genre) => {
    setSelectedGenre(genre);
  };

  return (
    <UserLayout subHeader={BookListingCover}>
      <section className="first-wrap">
        <div className="container-fluid">
          <div className="row mb-4">
            <div className="col-md-2 p-0">
              {ads &&
                ads.map((item, index) => (
                  <div className="advertise-main-div" key={index}>
                    <div className="img-div">
                      <a href="javascript:;">
                        <img
                          src={base_url + item?.ad_image}
                          className="form-control"
                          alt="advertise image"
                        />
                      </a>
                    </div>
                    <h6>
                      <a href="javascript:;">{item?.ad_title}</a>
                    </h6>
                  </div>
                ))}
            </div>
            <div className="col-md-10">
              <div className="row">
                {books &&
                  books.map((item, index) => (
                    <div className="col-md-3" key={index}>
                      <div className="book-category-main">
                        <h4>{item?.name}</h4>
                        <div className="img-div">
                          <a href="javascript:;">
                            <img
                              src={base_url + item?.image}
                              className="form-control"
                              alt="book"
                            />
                          </a>
                        </div>
                        <div className="book-category-price">
                          <div>
                            <h6>Price</h6>
                            <h5> {`$ ${item?.price || 0}`}</h5>
                          </div>
                          <div className="arrow-icon">
                            <Link to={`/book-detail/${item?.id}`}>
                              <i className="fa-solid fa-arrow-right"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="popular_tags_section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="content">
                <h1>Our Genre</h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry’s
                  standard dummy text ever since the 1500s.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="tag_list">
            <div className="tab-container">
              {genres.map((genre, index) => (
                <div
                  key={genre.title}
                  className={`tab ${selectedGenre === genre ? "active" : ""}`}
                  onClick={() => handleTabClick(genre)}
                >
                  {genre.title}
                </div>
              ))}
            </div>
            <div className="genre-details tag_list py-5">
              {selectedGenre && (
                <div className="row">
                  <div className="col-md-6">
                    <div className="img_div">
                      <img
                        src={base_url + selectedGenre.image}
                        alt={selectedGenre.title}
                        className="mw-100"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="content">
                      <h4>{selectedGenre.title}</h4>
                      <p>{selectedGenre.description}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </UserLayout>
  );
};

{
  /* <Modal.Header closeButton>
    <Modal.Title
      className="modal-title_form"
      id="contained-modal-title-vcenter"
    >
      Modal heading
    </Modal.Title>
  </Modal.Header> */
}

// <Modal
// show={modalShow}
// size="lg"
// aria-labelledby="contained-modal-title-vcenter"
// centered
// >
// <div className="  form_bg_one">

//   <div class="modal-header custom_form_header">
//     <h1 class="modal-title_form " id="exampleModalToggleLabel">
//       tailor to your needs
//     </h1>
//     <button
//     onClick={() => setModalShow(false)}
//       type="button"
//       class="form_btn_close"
//       data-bs-dismiss="modal"
//       aria-label="Close"
//     >
//       Skip
//     </button>
//   </div>

//   <div class="modal-body">
//       <div className="modal_form_divider"></div>
//       <p className="form_modal_para">choose your reading preference before digging in..</p>
//       <p className="form_modal_para">you can change it later</p>
//       <div className="row modal_forms_rows_spacing">
//         <div className="col-md-6">
//           <div className="female_stories">
//             <h3 className="female_lead_heading">FEMALE LEAD STORIES</h3>
//             <div className="lead_story_divider"></div>
//             <div className="lead_story_text_div">
//               <p className="story_detail_content">more Romance, LGBT +, Teen, History, Fantasy, Urban.</p>
//               <img src={storyarrow} className="img-fluid story_arrow_right"/>
//             </div>
//           </div>
//         </div>
//         <div className="col-md-6">
//           <div className="male_stories">
//             <h3 className="female_lead_heading">MALE LEAD STORIES</h3>
//             <div className="lead_story_divider"></div>
//             <div className="lead_story_text_div">
//               <p className="story_detail_content">more easter, Games, Horror, Sports, Action, War, Realistic..</p>
//               <img src={storyarrow} className="img-fluid"/>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     <div class="modal-footer custome_form_modal_footer">
//       <button class="second_modal_btn" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Next <i class="fa-solid fa-caret-right next_form_arrow"></i></button>
//     </div>

// </div>
// </Modal>

{
  /* <Modal.Footer>
    <Button onClick={() => setModalShow(false)}>Skip</Button>
  </Modal.Footer> */
}

//   <Modal
//   show={modalShow}
//   size="lg"
//   aria-labelledby="contained-modal-title-vcenter"
//   centered
// >
//   <div className="  form_bg_three">

//     <div class="modal-header custom_form_header">
//       <h1 class="modal-title_form " id="exampleModalToggleLabel">
//         tailor to your needs
//       </h1>
//       <button onClick={() => setModalShow(false)}
//         type="button"
//         class="form_btn_close"
//         data-bs-dismiss="modal"
//         aria-label="Close"
//       >
//         Skip
//       </button>
//     </div>
//     <div class="modal-body">
//         <div className="modal_form_divider"></div>
//         <p className="form_modal_para">
//           What type Of Book is Your Favorite
//         </p>

//         <div className="row modal_forms_rows_spacing">
//           <div className="col-md-12">
//             <div className="web_stories_bg">
//               <h3 className="web_novel_heading">Web Novel</h3>
//               <i class="fa-solid fa-caret-right web_novel_arrow_img"></i>
//               <div className="web_story_form_divider"></div>
//               <p className="web_novel_para">
//                 Please Choose Your Prefrerence
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-md-12">
//             <div className="web_stories_bg_two">
//               <h3 className="web_novel_heading">Light Novel</h3>
//               <i class="fa-solid fa-caret-right web_novel_arrow_img"></i>
//               <div className="web_story_form_divider"></div>
//               <p className="web_novel_para">
//                 Please Choose Your Prefrerence
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-md-12">
//             <div className="web_stories_bg_three">
//               <h3 className="web_novel_heading">Manga</h3>
//               <i class="fa-solid fa-caret-right web_novel_arrow_img"></i>
//               <div className="web_story_form_divider"></div>
//               <p className="web_novel_para">
//                 Please Choose Your Prefrerence
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div class="modal-footer custome_form_modal_footer_two">
//         <button
//           class="second_modal_btn"
//           data-bs-target="#exampleModalToggle2"
//           data-bs-toggle="modal"
//         >
//           <i class="fa-solid fa-caret-left next_form_arrow"></i>{" "}
//           Previous{" "}
//         </button>
//         <button
//           class="second_modal_btn"
//           data-bs-target="#exampleModalToggle4"
//           data-bs-toggle="modal"
//         >
//           Next <i class="fa-solid fa-caret-right next_form_arrow"></i>
//         </button>
//       </div>

//   </div>
// </Modal>

// <Modal
// show={modalShow}
// size="lg"
// aria-labelledby="contained-modal-title-vcenter"
// centered
// >
// <div className="  form_bg_two">

//   <div class="modal-header custom_form_header">
//     <h1 class="modal-title_form " id="exampleModalToggleLabel">
//       tailor to your needs
//     </h1>
//     <button
//     onClick={() => setModalShow(false)}
//       type="button"
//       class="form_btn_close"
//       data-bs-dismiss="modal"
//       aria-label="Close"
//     >
//       Skip
//     </button>
//   </div>

//   <div class="modal-body">
//       <div className="modal_form_divider"></div>
//       <p className="form_modal_para">
//         choose your reading preference
//       </p>

//       <div className="row modal_forms_rows_spacing">
//         <div className="col-md-6">
//           <div className="female_stories_two">
//             <div className="lead_story_text_div">
//               <h3 className="female_lead_heading">More Fantasy</h3>
//               <img src={storyarrow} className="img-fluid" />
//             </div>
//             <div className="lead_story_divider"></div>
//             <p className="story_detail_content_two">
//               #action #adventure #Reincarnation #System #Magic #harem
//               #Cultivation #Weakostrong #Videogame #Dragon
//             </p>
//           </div>
//         </div>
//         <div className="col-md-6">
//           <div className="male_stories_two">
//             <div className="lead_story_text_div">
//               <h3 className="female_lead_heading">More Romance</h3>
//               <img src={storyarrow} className="img-fluid" />
//             </div>
//             <div className="lead_story_divider"></div>
//             <p className="story_detail_content_two">
//               #Vampire #Warewolf #rebirth #teen #LGBT+ #Billionaire
//               #Badboy #mafia #Sweetlove #Revenge
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//     <div class="modal-footer custome_form_modal_footer">
//       <button
//         class="second_modal_btn"
//         data-bs-target="#exampleModalToggle"
//         data-bs-toggle="modal"
//       >
//         <i class="fa-solid fa-caret-left next_form_arrow"></i>{" "}
//         Previous{" "}
//       </button>
//       <button
//         class="second_modal_btn"
//         data-bs-target="#exampleModalToggle3"
//         data-bs-toggle="modal"
//       >
//         Next <i class="fa-solid fa-caret-right next_form_arrow"></i>
//       </button>
//     </div>

// </div>
// </Modal>

// <Modal
// show={modalShow}
// size="lg"
// aria-labelledby="contained-modal-title-vcenter"
// centered
// >
// <div className="  form_bg_four">

// <div class="modal-header custom_form_header">
//       <h1 class="modal-title_form " id="exampleModalToggleLabel">
//         tailor to your needs
//       </h1>
//       <button onClick={() => setModalShow(false)}
//         type="button"
//         class="form_btn_close"
//         data-bs-dismiss="modal"
//         aria-label="Close"
//       >
//         Skip
//       </button>
//     </div>
//     <div class="modal-body">
//       <div className="modal_form_divider"></div>
//       <p className="form_modal_para">
//         What type Of Book is Your Favorite
//       </p>

//       <div className="row modal_forms_rows_spacing">
//         <div className="col-md-12">
//           <div className="modal_form_book_selection_bg">
//             <h3 className="modal_form_book_selection">
//               what are your three favorite genres
//             </h3>
//             <i class="fa-solid fa-caret-right form_book_selection_arrow_img"></i>
//             <div className="form_book_selection_divider"></div>
//             <p className="modal_form_book_selection_para">
//               please select Atleast Three
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="row modal_forms_rows_spacing">
//         <div className="col-md-12">
//           <div className="book_category_div">
//             <button className="book_category_btns">Action</button>
//             <button className="book_category_btns">Adventure</button>
//             <button className="book_category_btns">Comedy</button>
//             <button className="book_category_btns">Drama</button>
//           </div>
//           <div className="book_category_div modal_forms_rows_spacing">
//             <button className="book_category_btns">Fantasy</button>
//             <button className="book_category_btns">Horror</button>
//             <button className="book_category_btns">Mystery</button>
//             <button className="book_category_btns">Romance</button>
//           </div>
//           <div className="book_category_div modal_forms_rows_spacing">
//             <button className="book_category_btns">Science</button>
//             <button className="book_category_btns">Fiction</button>
//             <button className="book_category_btns">Thriller</button>
//             <button className="book_category_btns">Western</button>
//           </div>
//           <div className="book_category_div modal_forms_rows_spacing">
//             <button className="book_category_btns">Historical</button>
//             <button className="book_category_btns">
//               Slice Of Life
//             </button>
//             <button className="book_category_btns">Wuxia</button>
//             <button className="book_category_btns">
//               Documentary
//             </button>
//           </div>
//           <div className="book_category_div modal_forms_rows_spacing">
//             <button className="book_category_btns">18+</button>
//           </div>
//         </div>
//       </div>
//       <div className="row modal_forms_rows_spacing">
//         <div className="col-md-12">
//           <p className="higlighted_text">
//             To Select, please Click on the genre until it is
//             highlighted
//           </p>
//         </div>
//       </div>
//     </div>
//     <div class="modal-footer custome_form_modal_footer_two">
//       <button
//         class="second_modal_btn"
//         data-bs-target="#exampleModalToggle3"
//         data-bs-toggle="modal"
//       >
//         <i class="fa-solid fa-caret-left next_form_arrow"></i>{" "}
//         Previous{" "}
//       </button>
//       <button
//         class="second_modal_btn"
//         data-bs-target="#exampleModalToggle5"
//         data-bs-toggle="modal"
//       >
//         Next <i class="fa-solid fa-caret-right next_form_arrow"></i>
//       </button>
//     </div>

// </div>
// </Modal>

{
  /* <Modal
show={modalShowfirst}
size="lg"
aria-labelledby="contained-modal-title-vcenter"
centered
>
<div className="form_bg_one">
  <div className="modal-header custom_form_header">
    <h1 className="modal-title_form" id="exampleModalToggleLabel">
      tailor to your needs
    </h1>
    <button
      onClick={() => setModalShowfirst(false)}
      type="button"
      className="form_btn_close"
      aria-label="Close"
    >
      Skip
    </button>
  </div>

  <div className="modal-body">
    <div className="modal_form_divider"></div>
    <p className="form_modal_para">
      choose your reading preference before digging in..
    </p>
    <p className="form_modal_para">you can change it later</p>
    <div className="row modal_forms_rows_spacing">
      <div className="col-md-6">
        <div className="female_stories">
          <h3 className="female_lead_heading">FEMALE LEAD STORIES</h3>
          <div className="lead_story_divider"></div>
          <div className="lead_story_text_div">
            <p className="story_detail_content">
              more Romance, LGBT +, Teen, History, Fantasy, Urban.
            </p>
            <img
              src={storyarrow}
              className="img-fluid story_arrow_right"
              alt="arrow"
            />
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="male_stories">
          <h3 className="female_lead_heading">MALE LEAD STORIES</h3>
          <div className="lead_story_divider"></div>
          <div className="lead_story_text_div">
            <p className="story_detail_content">
              more eastern, Games, Horror, Sports, Action, War,
              Realistic.
            </p>
            <img src={storyarrow} className="img-fluid" alt="arrow" />
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="modal-footer custome_form_modal_footer">
    <button
      onClick={() => {
        // Close the first modal and open the second modal
        setModalShowfirst(false);
        setModalShowsecound(true);
      }}
      className="second_modal_btn"
    >
      Next <i className="fa-solid fa-caret-right next_form_arrow"></i>
    </button>
  </div>
</div>
</Modal> */
}
