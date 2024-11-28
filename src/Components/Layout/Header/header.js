<section className="header-navbar jost-font">
<div className="container">
  <div className="row align-items-center d-none d-lg-flex">
    <div className="col-5">
      <ul className="main-navbar main-navbar-1">
        <li className="main-navbar-list">
          <Link to="/beta/" className="main-navbar-link navbar-active">
            Home
          </Link>
        </li>
        <li className="main-navbar-list">
          <Link to="/beta/" className="main-navbar-link">
            Browse
          </Link>
        </li>
        <li className="main-navbar-list">
          <Link to="/beta/" className="main-navbar-link">
            Rankings
          </Link>
        </li>
        <li className="main-navbar-list">
          <Link to="/beta/" className="main-navbar-link">
            Competion
          </Link>
        </li>
        <li className="main-navbar-list">
          <Link to="/beta/" className="main-navbar-link">
            Library
          </Link>
        </li>
      </ul>
    </div>
    <div className="col-1">
      <div className="main-navbar-logo">
        <Link to="!#">
          <img src={Logo} />
        </Link>
      </div>
    </div>
    <div className="col-3">
      <ul className="main-navbar main-navbar-2">
        <li className="main-navbar-list">
          <Link to="/beta/" className="main-navbar-link">
            Author Hub
          </Link>
        </li>
        <li className="main-navbar-list">
          <Link to="/beta/" className="main-navbar-link">
            Forum
          </Link>
        </li>
      </ul>
    </div>
    <div className="col-3">
      <div class="searchbox-and-icon-container">
        <div class="input-group header__search">
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
        <div class="user__icon-container">
          <Link className="nav-link user__icon" to="!#">
            {/* <FontAwesomeIcon icon={faUser} /> */}
            <img src={User_icon_white} />
          </Link>
          <Link className="nav-link user__icon-plus" to="!#">
            {/* <FontAwesomeIcon icon={faUserPlus} /> */}
            <img src={User_icon_plus} />
          </Link>
        </div>
      </div>
    </div>
  </div>
  <div className="row">
    <nav className="navbar navbar-expand-xl d-lg-none d-block">
      <div className="container-fluid">
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
                to="/beta/"
                className="main-navbar-link navbar-active"
              >
                Home
              </Link>
            </li>
            <li className="main-navbar-list">
              <Link to="/beta/" className="main-navbar-link">
                Browse
              </Link>
            </li>
            <li className="main-navbar-list">
              <Link to="/beta/" className="main-navbar-link">
                Rankings
              </Link>
            </li>
            <li className="main-navbar-list">
              <Link to="/beta/" className="main-navbar-link">
                Competion
              </Link>
            </li>
            <li className="main-navbar-list">
              <Link to="/beta/" className="main-navbar-link">
                Library
              </Link>
            </li>
            <li className="main-navbar-list">
              <Link to="/beta/" className="main-navbar-link">
                Author Hub
              </Link>
            </li>
            <li className="main-navbar-list">
              <Link to="/beta/" className="main-navbar-link">
                Forum
              </Link>
            </li>
          </ul>
          <div class="input-group header__search">
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
        <a className="navbar-brand" href="#">
          <div className="main-navbar-logo">
            <Link to="!#">
              <img src={Logo} />
            </Link>
          </div>
        </a>
        <div class="searchbox-and-icon-container">
          {/* <div class="input-group header__search d-none d-md-block">
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
          <div class="user__icon-container">
            <Link className="nav-link user__icon" to="!#">
              {/* <FontAwesomeIcon icon={faUser} /> */}
              <img src={User_icon_white} />
            </Link>
            <Link className="nav-link user__icon-plus" to="!#">
              {/* <FontAwesomeIcon icon={faUserPlus} /> */}
              <img src={User_icon_plus} />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  </div>
</div>
</section>























<header>
<div className="mobile-menu">
  <div className="mobile-top">
    <div className="img-div">
      <img src="/public/images/logo.png" className="img-fluid" alt="" />
    </div>
    <div className="circle" id="navbar"><i className="fa fa-bars" aria-hidden="true"></i></div>
  </div>
  <div className="nveMenu text-left">
    <div className="mobile-cross close-btn-nav" id="navbar"><i className="fas fa-times" aria-hidden="true"></i></div>
    <div>
      <a href="index.php"><img src="/public/images/logo.png" className="img-fluid" /></a>
    </div>
    <ul className="navlinks p-0 mt-4">
      <li><Link to="#" className="active">Home</Link></li>
      <li><Link to="/novel-listing">Author</Link></li>
      <li><Link to="/book-listing">Our Books</Link></li>
      <li><Link to="#">Client's Reviews</Link></li>
      <li><Link to="#">Blogs</Link></li>
      <li><Link to="#">Contact Us</Link></li>
      {Logintoken ?
        (
          <li><Link to="/account">My Account</Link></li>

        ) :
        (
          <li><Link to="/login">Login / Sign up</Link></li>
        )
      }
      {Logintoken && (
        <li>
          <button className="border-0 bg-transparent" onClick={((event) => { handleLogout(event) })}>Logout</button>
        </li>
      )}
    </ul>
  </div>
  <div className="overlay"></div>
</div>
<div className="header-top">
  <div className="container-fluid">
    <div className="two-colors-division row">
      <div className="first-div col-md-6"></div>
      <div className="second-div col-md-6 p-0">
        <img src={HeaderTop} className="" alt="" />
      </div>
    </div>
  </div>
  <div className="logo-img">
    <img src={Logo} className="form-control" alt="" />
  </div>
</div>
<div className="desktop-header">
  <div className="container">
    <div className="row">
      <div className="col-md-2">
        <div className="input-div">
          <input type="text" className="form-control" placeholder="Search..." />
          <i className="fa-solid fa-arrow-right"></i>
        </div>
      </div>
      <div className="col-md-10">
        <div className="userNav d-md-flex justify-content-between">
          <div className="navBar">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/novel-listing">Author</Link></li>
              <li><Link to="/book-listing">Our Books</Link></li>
              <li><Link to="#">Client's Reviews</Link></li>
              <li><Link to="#">Blogs</Link></li>
              <li><Link to="#">Contact Us</Link></li>
              {Logintoken ?
                (
                  <li><Link to="/account">My Account</Link></li>

                ) :
                (
                  <li><Link to="/login">Login / Sign up</Link></li>
                )
              }
              {Logintoken && (
                <li>
                  <button className="border-0 bg-transparent" onClick={((event) => { handleLogout(event) })}>Logout</button>
                </li>
              )}
            </ul>
          </div>
          {
            mana && (
              <div className="currencyUser">
                <p>Mana: <span className="text-success">{mana}</span></p>
              </div>
            )
          }
        </div>
      </div>
    </div>
  </div>
</div>
</header>







































































import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
// import { HeaderTop, Logo } from './../../../Assets/images/'


import "./style.css";


import {
  faBell,
  faUser,
  faBars,
  faEllipsisV,
  faSignOut,
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
} from "./../../../Assets/images/";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faSearch, faStar } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aos from "aos";
import "aos/dist/aos.css";

export const Header = (props) => {
  const navigate = useNavigate();
  const [mana, setMana] = useState('');
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
      <div className="  ">
        <div className="row align-items-center d-none d-lg-flex">
          <div className="col-5">
            <ul className="main-navbar main-navbar-1">
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
              {/* <li className="main-navbar-list">
                <Link to="/translation-request/" className="main-navbar-link">
                  Translation
                </Link>
              </li> */}


              <li className="main-navbar-list">
                <Link to="/create-request/" className="main-navbar-link">
                  Creation

                </Link>
              </li>
              {/* create-request */}
              <li className="main-navbar-list">
                <Link to="/competition/" className="main-navbar-link">
                  Competition
                </Link>

              </li>

              <li className="main-navbar-list">
                <Link to="/book-listing/" className="main-navbar-link">
                  Books
                </Link>

              </li>
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
          <div className="col-1">
            <div className="main-navbar-logo">
              <Link to="/">
                <img src={Logo} />
              </Link>
            </div>
          </div>
          <div className="col-4">
            <ul className="main-navbar main-navbar-2">
              {/* <li className="main-navbar-list">
                <Link to="/beta/" className="main-navbar-link">
                  Author Hub
                </Link>
              </li>
              */}
              <li className="main-navbar-list">
                <Link to="/shop/" className="main-navbar-link">
                  Shop
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

              {/* book-listing */}
              <li className="main-navbar-list ">
                <Link to="/beta/" className="main-navbar-link ">
                  <span className=" d-flex ">Mana : {mana} </span>

                </Link>
              </li>
              {/* Logintoken */}
            </ul>
          </div>
          <div className="col-2">
            <div class="searchbox-and-icon-container">
        
              {!LogoutData ? (


                <li className=" main-navbar-list  mx-auto w-100 ">
                  <Link className="main-navbar-link    text-black-50      " to="/login" type="button">
                    <i className="fa fa-user-circle-o" aria-hidden="true"></i> Login / Signup
                  </Link>
                </li>

               
              ) : (
                <div class="user__icon-container">
                  <Link className="nav-link user__icon" to="/account">
                    {/* <FontAwesomeIcon icon={faUser} /> */}
                    <img src={User_icon_white} />
                  </Link>
                  <Link onClick={handleRedirect} className="nav-link user__icon-plus"  >
                 
                    <FontAwesomeIcon
                      className="me-1 yellow-text"
                      icon={faSignOut}

                    />{" "}
                  </Link>

                </div>)}
            </div>


          </div>


        </div>
        <div className="row">
          <nav className="navbar navbar-expand-xl d-lg-none d-block">
            <div className="container-fluid">
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
                      to="/beta/"
                      className="main-navbar-link navbar-active"
                    >
                      Home
                    </Link>
                  </li>
                 
                  <li className="main-navbar-list">
                    <Link to="/beta/" className="main-navbar-link">
                      Rankings
                    </Link>
                  </li>
                  <li className="main-navbar-list">
                    <Link to="/beta/" className="main-navbar-link">
                      Competion
                    </Link>
                  </li>
                  <li className="main-navbar-list">
                    <Link to="/beta/" className="main-navbar-link">
                      Library
                    </Link>
                  </li>
                  <li className="main-navbar-list">
                    <Link to="/beta/" className="main-navbar-link">
                      Author Hub
                    </Link>
                  </li>
                  <li className="main-navbar-list">
                    <Link to="/beta/" className="main-navbar-link">
                      Forum
                    </Link>
                  </li>
                </ul>
                <div class="input-group header__search">
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
              <a className="navbar-brand" href="#">
                <div className="main-navbar-logo">
                  <Link to="/">
                    <img src={Logo} />
                  </Link>
                </div>
              </a>
              <div class="searchbox-and-icon-container">
               
                <div class="user__icon-container">
                  <Link className="nav-link user__icon" to="!#">
                    {/* <FontAwesomeIcon icon={faUser} /> */}
                    <img src={User_icon_white} />
                  </Link>

                  <Link to="#" className="userMenuItem" onClick={handleRedirect}>
                    <FontAwesomeIcon
                      className="me-1 yellow-text"
                      icon={faSignOut}

                    />{" "}
                    Logout
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </section>
  );
};




















































