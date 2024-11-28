import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
// import { HeaderTop, Logo } from './../../../Assets/images/'
import Form from "react-bootstrap/Form";

import "./style.css";


import {
  faBell,
  faUser,
  faBars,
  faEllipsisV,
  faSignOut,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";

import {
  AuthorList1,
  Logo,
  SmallAnime1,
  SmallAnime2,
  User_icon_plus,
  User_icon_white,
  BestSellingBooks,
  BestSellingBook1,
  BestSellingBook2,
  BestSellingBook3,
  BestSellingBook4,
  BestSellingBook5,
  BestSellingBook6,
  BestSellingBook7,
  BestSellingBook8,
  BestSellingBook9,
  BestSellingBook10,
  BestSellingBook11,
  BestSellingBook12,
  msg,
  startconversation,
  backarrow,
  ManaFrame,

} from "./../../../Assets/images/";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faSearch, faStar } from "@fortawesome/free-solid-svg-icons";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { Modal } from "react-bootstrap";

export const Header = (props) => {
  const Navigate = useNavigate();
  const [mana, setMana] = useState('');
  const [isActive, setIsActive] = useState(false);

  const toggleClass = () => {
    setIsActive(!isActive);
  };
  const [selectedOption, setSelectedOption] = useState(null);
  const handleCheckboxChange = (option) => {
    // setSelectedOption(option);
  }
  const SingleSelectCheckbox = (option) => {
    setSelectedOption(option);

  };
  console.log("mana", mana)


  const Logintoken = localStorage.getItem('loginUser');
  console.log("manas", Logintoken);

  const handleLogout = async (event) => {

    event.preventDefault();

    document.querySelector('.loaderBox').classList.remove("d-none");

    const apiUrl = 'https://custom.mystagingserver.site/Tim-WDLLC/public/api/logout';

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${Logintoken}`
        }
      });

      if (response.ok) {
        // Parse the response data as JSON
        const responseData = await response.json();

        localStorage.removeItem('login');
        localStorage.removeItem('loginUser');

        console.log('Logout Response:', responseData);

        document.querySelector('.loaderBox').classList.add("d-none");
        UserCredit()

        navigate('/');
      }
    } catch (error) {
      document.querySelector('.loaderBox').classList.add("d-none");
      console.error('Error:', error);
    }
  };


  const navigate = useNavigate();

  const handleSelectChange = (event) => {
    const value = event.target.value;

    if (value === '1') {

      window.location.href = 'https://custom.mystagingserver.site/TimAuthor/';
    } else if (value === '2') {
      // Redirect to the User sign-in page
      navigate('/login');
    }
  };


  const UserCredit = () => {
    fetch('https://custom.mystagingserver.site/Tim-WDLLC/public/api/user/getbalance',
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${Logintoken}`
        },
      }
    )

      .then(response =>
        response.json()
      )
      .then((data) => {
        console.log(data?.data)
        setMana(data?.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    if (Logintoken) {
      UserCredit()
    }
  }, [])


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  const LogoutData = localStorage.getItem('loginUser');

  const handleRedirect = () => {
    const LogoutData = localStorage.removeItem('loginUser');
    fetch(`https://custom.mystagingserver.site/Tim-WDLLC/public/api/user/logout`,
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${LogoutData}`
        },
      },
    )
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        console.log(data)
        localStorage.removeItem('login');
        localStorage.removeItem('name');
        localStorage.removeItem('email');
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
      })
  }
  return (
    <section className="header-navbar jost-font">
      <div className="">
        <div className="justify-content-center  d-flex align-items-center d-none d-lg-flex">
          <div className="">
            <ul className="main-navbar main-navbar-1">



              <div className="dropdown">
                <button className="nav-link user__icon_two closebtn" type="button" data-bs-toggle="dropdown" aria-expanded="false" ><i className="fa-solid fa-bars header_more_menu"></i></button>

                <ul className="dropdown-menu more_nav_header_menu">
                  <li className="">
                    <Link to="/book-listing/" className="new_main-navbar-list">
                      Browse Books
                    </Link>
                  </li>
                  <div className="dropdown_menu_divider"></div>
                  <li className="">
                    <Link to="/translation-request/" className="new_main-navbar-list">
                      Translation Request
                    </Link>
                  </li>
                  <div className="dropdown_menu_divider"></div>
                  <li className="">
                    <Link to="/author-listings/" className="new_main-navbar-list">
                      Top Author
                    </Link>
                  </li>
                  <div className="dropdown_menu_divider"></div>
                  <li className="">
                    <Link to="/Ranking/" className="new_main-navbar-list">
                      Ranking
                    </Link>
                  </li>
                  <div className="dropdown_menu_divider"></div>
                  <li className="">
                    <Link to="/competition/" className="new_main-navbar-list">
                      Competition
                    </Link>
                  </li>
                  <div className="dropdown_menu_divider"></div>
                  <li className="">
                    <Link onClick={handleShow} className="new_main-navbar-list">
                      Personalization
                    </Link>
                  </li>
                  <div className="dropdown_menu_divider"></div>
                  <li className="">
                    <Link to="/#/" className="new_main-navbar-list">
                      Become An Author
                    </Link>
                  </li>
                  <div className="dropdown_menu_divider"></div>
                  <li className="">
                    <Link to="/Help/" className="new_main-navbar-list">
                      Help
                    </Link>
                  </li>
                  {/* <div className="dropdown_menu_divider"></div>
                  <li className="">
                    <div className="user__icon-container">


                      <Link className="nav-link user__icon_two" to="#" >
                        <i className="fa-solid fa-message header_msg"></i>
                      </Link>

                      <Link className="nav-link user__icon-plus" to="/account" >

                        <i className="fa-solid fa-user header_msg"></i>

                      </Link>

                    </div>
                  </li> */}

                  {/* <div className="dropdown_menu_divider"></div>
                  <li >

                    <div className="searchbox-and-icon-container">

                      {!LogoutData ? (

                        <li className=" main-navbar-list  mx-auto w-100 ml-2">
                          <Link className="new_main-navbar-list  " to="/login" type="button">
                            <i className="fa fa-user-circle-o new_main-navbar-list" aria-hidden="true"></i> Login / Signup
                          </Link>
                        </li>


                      ) : (
                        <div className="user__icon-container">

                          <Link onClick={handleRedirect} className="nav-link reads_login"  >
                            Login
                     
                            <i className="fa-solid fa-arrow-right-from-bracket iconn_login"></i>
                          </Link>

                        </div>)}


                    </div>



                  </li> */}




                </ul>
              </div>




              <li className="main-navbar-list">
                <Link to="/" className="main-navbar-link ">
                  Home
                </Link>
              </li>

              <li className="main-navbar-list">
                <Link to="/library/" className="main-navbar-link">
                  Library
                </Link>
              </li>

              <li className="main-navbar-list">
                <Link to="/shop/" className="main-navbar-link">
                  Shop
                </Link>
              </li>

              <li className="main-navbar-list">
                <Link to="/mission/" className="main-navbar-link">
                  Mission
                </Link>
              </li>

              {/* <li className="main-navbar-list">
                <Link to="/translation-request/" className="main-navbar-link">
                  Translation
                </Link>
              </li> */}


              {/* <li className="main-navbar-list">
                <Link to="/create-request/" className="main-navbar-link">
                  Creation

                </Link>
              </li> */}
              {/* create-request */}
              {/* <li className="main-navbar-list">
                <Link to="/competition/" className="main-navbar-link">
                  Competition
                </Link>

              </li> */}

              {/* <li className="main-navbar-list">
                <Link to="/book-listing/" className="main-navbar-link">
                  Books
                </Link>

              </li>
             */}
              {/* <li className="main-navbar-list">
                <Link to="/shop/" className="main-navbar-link">
                Shop
                </Link>
              </li> */}
              {/* <li className="main-navbar-list">
                <Link to="/library/" className="main-navbar-link">
                  Library
                </Link>
              </li> */}


            </ul>
          </div>
          <div className="">
            <div className="main-navbar-logo">
              <Link to="/">
                <img src={Logo} />
              </Link>
            </div>
          </div>


          <div className="">
            <div className="justify-content-center  d-flex align-items-center d-none d-lg-flex">
              <ul className="main-navbar main-navbar-2">
                {/* <li className="main-navbar-list">
                    <Link to="/beta/" className="main-navbar-link">
                      Author Hub
                    </Link>
                  </li>
                  */}
                <li className="main-navbar-list">
                  <Link to="/Forum/" className="main-navbar-link">
                    Forum
                  </Link>
                </li>

                <div className="input-group header__search">
                  <button
                    className="btn btn-outline-secondary search__btn"
                    type="button"
                    id="button-addon1"
                  >
                    <FontAwesomeIcon icon={faSearch} />
                  </button>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search Here..."
                    aria-describedby="button-addon1"
                  />
                  <button
                    className="btn btn-outline-secondary category__icon"
                    type="button"
                    id="button-addon2"
                  >
                    <FontAwesomeIcon icon={faList} />
                  </button>
                </div>

                <div className="user__icon-container">
                          <div className="dropdown">
                                <button className="nav-link user__icon_two" type="button" id="dropdownMenuButtonmsg" data-bs-toggle="dropdown" aria-expanded="false">
                             
                              
                                <i className="fa-solid fa-message header_msg"></i>
                                </button>
                                <ul className="dropdown-menu msg_menu_container add_friend_container" aria-labelledby="dropdownMenuButtonmsg">
                                    <div className="dropdown_list_bg add_friend_list_bg">
                                        <li className="msg_heading"> 
                                          Messages
                                        </li>
                                        <div className="dropdown_list_divider"></div>
                                        <li className="no_recent_msg"> 
                                        You have no recent messages
                                        </li>
                                        <div className="dropdown_list_divider"></div>
                                        <li className="msg_footer_btn"> 
                                          <button className="show_msg_btn"> Show All </button>
                                          <button className="show_msg_btn">
                                            <img src={startconversation} className="startconversation_img" />
                                            <span> Start A New Conversation </span>
                                          </button>
                                        </li>
                                    </div>
                                  </ul>
                              </div>

                  

                        <Link className="nav-link user__icon-plus"  to="/account" >
                    
                              <i className="fa-solid fa-user header_msg"></i>

                        </Link>
                     </div>

              </ul>
            </div>
          </div>



          <div className=" ">
            <div className="searchbox-and-icon-container">
        
              {!LogoutData ? (

                <li className=" main-navbar-list  mx-auto w-100 ml-2">
                  <Link className="main-navbar-link  text-black-50 " to="/login" type="button">
                    <i className="fa fa-user-circle-o " aria-hidden="true"></i> Login / Signup
                  </Link>
                </li>
              
               
              ) : (
                <div className="user__icon-container">
                
                  <Link onClick={handleRedirect} className="nav-link reads_login"  >
                    Login                
            
                    <i className="fa-solid fa-arrow-right-from-bracket iconn_login"></i>
                  </Link>

                </div>)}

                
            </div>


          </div>


        </div>





        <div className="row mx-auto">
          <nav className="navbar navbar-expand-xl d-lg-none d-block">

            <div className="container-fluid">
              {/* <a className="navbar-brand" href="#">
                <div className="main-navbar-logo">
                  <Link to="/">
                    <img src={Logo} />
                  </Link>
                </div>
              </a> */}
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="main-navbar-list">
                    <Link
                      to="/"
                      className="main-navbar-link navbar-active"
                    >
                      Home
                    </Link>
                  </li>

                  <li className="main-navbar-list">
                    <Link to="/library/" className="main-navbar-link">
                      Library
                    </Link>
                  </li>
                  <li className="main-navbar-list">
                    <Link to="/shop/" className="main-navbar-link">
                      Shop
                    </Link>
                  </li>
                  <li className="main-navbar-list">
                    <Link to="/mission/" className="main-navbar-link">
                      Mission
                    </Link>
                  </li>
                  <li className="main-navbar-list">
                    <Link to="/book-listing/" className="main-navbar-link">
                      Browse Books
                    </Link>
                  </li>
                  <li className="main-navbar-list">
                    <Link to="/translation-request/" className="main-navbar-link">
                      Translation Request
                    </Link>
                  </li>
                  <li className="main-navbar-list">
                    <Link to="/author-listings/" className="main-navbar-link">
                      Top Author
                    </Link>
                  </li>
                  <li className="main-navbar-list">
                    <Link to="/Ranking/" className="main-navbar-link">
                      Ranking
                    </Link>
                  </li>

                  <li className="main-navbar-list">
                    <Link to="/competition/" className="main-navbar-link">
                      Competition
                    </Link>
                  </li>
                  <li className="main-navbar-list">
                    <Link onClick={handleShow} className="main-navbar-link">
                    Personalization
                    </Link>
                  </li>

                  <li className="main-navbar-list">
                    <Link to="/#/" className="main-navbar-link">
                      Become An Author
                    </Link>
                  </li>
                  <li className="main-navbar-list">
                    <Link to="/Help/" className="main-navbar-link">
                      Help
                    </Link>
                  </li>

                </ul>
                {/* <div className="input-group header__search">
                  <button
                    className="btn btn-outline-secondary search__btn"
                    type="button"
                    id="button-addon1"
                  >
                    <FontAwesomeIcon icon={faSearch} />
                  </button>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search Here..."
                    aria-describedby="button-addon1"
                  />
                  <button
                    className="btn btn-outline-secondary category__icon"
                    type="button"
                    id="button-addon2"
                  >
                    <FontAwesomeIcon icon={faList} />
                  </button>
                </div> */}
              </div>
              <a className="navbar-brand" href="#">
                <div className="main-navbar-logo">
                  <Link to="/">
                    <img src={Logo} />
                  </Link>
                </div>
              </a>
              <div className="input-group header__search">
                <button
                  className="btn btn-outline-secondary search__btn"
                  type="button"
                  id="button-addon1"
                >
                  <FontAwesomeIcon icon={faSearch} />
                </button>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search Here..."
                  aria-describedby="button-addon1"
                />
                <button
                  className="btn btn-outline-secondary category__icon"
                  type="button"
                  id="button-addon2"
                >
                  <FontAwesomeIcon icon={faList} />
                </button>
              </div>

            </div>
          </nav>
        </div>
      </div>





      {/* <!-- Modal --> */}

    


          <Modal show={show} onHide={handleClose}
          aria-labelledby="contained-modal-title-vcenter"
          centered
           >
          <div className="sigin_modal_bg">
            
            <Modal.Header closeButton> 
              <Modal.Title id="contained-modal-title-vcenter" className="batch_unlock_sigin">Sign in as an Author/User</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="row mt-5">
                <div className="col-md-12 text-center">

                  <p className="newSigin_option_text">Sign in  </p>

                  <Form.Select
                    aria-label="Default select example"
                    className="book-release-input mt-4"
                    onChange={handleSelectChange}
                  >
                    <option>Select Option</option>
                    <option value="1">Sign in as an Author</option>
                    <option value="2">Sign in as an User</option>

                  </Form.Select>

                </div>

                {/* <div className="checkbox_div" ></div> */}



              </div>
            </Modal.Body>
            </div>

          </Modal>


      {/* <!-- Modal End --> */}














    </section>

  );
};
