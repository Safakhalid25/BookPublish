<section className="bestselling_books">
<section className="bestSell__book-sec jost-font">
  <div className="bestSell__book-cartoon1">
    {/* <img src={SmallAnime1} /> */}
  </div>
  <div className="container">
    <div className="row">
      <div className="col-12">
        <div className="bestSell__book-title">
          <h2> COMPETITION WINNERS</h2>
        </div>
      </div>
      <div className="col-12">
        <div className="bestSelling__books">
          <div className="row mb-5">
            <div className="col-md-4">
              <div className=" d-flex gap-2 justify-content-center  ">
                <span className="bookvote bg-white color-blacl ">
                  Vote
                </span>
                <span className="bookdetail bg-white color-blacl">
                  Details
                </span>
              </div>
              <img src={book1} className="img-fluid" />
            </div>
            <div className="col-md-4">
              <div className="completion-book d-flex gap-2 justify-content-center  ">
                <span className="bookvote bg-white color-black ">
                  Vote
                </span>
                <span className="bookdetail bg-white color-blacl">
                  Details
                </span>
              </div>
              <img src={Untitledbook2} className="img-fluid" />
            </div>
            <div className="col-md-4">
              <div className="completion-book d-flex gap-2  justify-content-center ">
                <span className="bookvote bg-white color-black ">
                  Vote
                </span>
                <span className="bookdetail bg-white color-blacl">
                  Details
                </span>
              </div>
              <div className="completion-board">
                <img src={book3} className=" img-fluid" />
              </div>
            </div>

            <img src={board1} className="board-compition" />

            <div className="row sectioncompletion py-3  px-5   justify-content-center  mx-auto ">
              <div class="col-md-3 input-completion completion__search">
                <button
                  className="completion_btn btn btn-outline-secondary" type="button" id="button-addon1"></button>

                <p className="completion-input form-control ">
                  {" "}
                  View All Winners
                </p>
                <button
                  className="btn btn-outline-secondary  compition-category__icon"
                  type="button" id="button-addon2">
                  <img src={medal} className="   " id="icon-img" />
                </button>
              </div>
              <div class="col-md-3 input-completion completion__search">
                <button
                  className="completion_btn btn btn-outline-secondary  "
                  type="button"
                  id="button-addon1"
                ></button>

                <p className="completion-input form-control ">
                  {" "}
                  View All Winners
                </p>
                <button
                  className="btn btn-outline-secondary  compition-category__icon"
                  type="button"
                  id="button-addon2"
                >
                  <img src={cup} className="   " id="icon-img" />
                </button>
              </div>
              <div class="col-md-3 input-completion completion__search">
                <button
                  className="completion_btn btn btn-outline-secondary  "
                  type="button"
                  id="button-addon1"
                ></button>

                <p className="completion-input form-control ">
                  {" "}
                  View All Winners
                </p>
                <button
                  className="btn btn-outline-secondary  compition-category__icon"
                  type="button"
                  id="button-addon2"
                >
                  <img src={docs} className="   " id="icon-img" />
                </button>
              </div>
              <div class=" col-md-3 input-completion completion__search">
                <button
                  className="completion_btn btn btn-outline-secondary  "
                  type="button"
                  id="button-addon1"
                ></button>

                <p className="completion-input form-control ">
                  {" "}
                  View All Winners
                </p>
                <button
                  className="btn btn-outline-secondary  compition-category__icon"
                  type="button"
                  id="button-addon2"
                >
                  <img src={medal} className="   " id="icon-img" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="bestSell__bookListing-sec1">
  <div className="bestSell__filters">
    <div className="container">
      <div className="row align-items-center">
      </div>
      <div className="bestBooks__listing">
        <div className="row">
         {currentItems?.map((item , index) =>(
         <div className="col-lg-3 col-md-4">
            <div className="bestBooks__list">
              <div className="bestBooks__list-img">
                <img src={base_url + item?.image} />
                <div className="bestBooks__list-overlay">
                  {/* <button className="bestBooks__purchase-btn">
                    Purchases
                  </button> */}
                   <Link
                      to={`/book-detail/${item?.id}`}
                      className="bestBooks__purchase-btn"
                    >
                      Purchases
                    </Link>
                </div>
              </div>
              <div className="bestBooks__list-body">
                <h3 className="bestBooks__list-title">
             {item?.category?.name}
                </h3>
                <p className="bestBooks__list-text">
                  Lorem Ipsum is simply dummy text{" "}
                </p>
              </div>
            </div>
          </div>
         ))}
       
        </div>
      </div>
      <div className="row">
        <div className="book__listing-pagination">
          <nav aria-label="Page navigation example">
            {/* <ul class="pagination">
              <li class="page-item">
                <a class="page-link page_link-active" href="#">
                {currentPage}
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                {userdata.length}
                </a>
              </li>
             
            </ul> */}
            <CustomPagination
                itemsPerPage={itemsPerPage}
                totalItems={userdata.length}
                currentPage={currentPage}
                onPageChange={handlePageChange}
              />
          </nav>
        </div>

{/* 
<CustomPagination
                itemsPerPage={itemsPerPage}
                totalItems={userdata.length}
                currentPage={currentPage}
                onPageChange={handlePageChange}
              /> */}

      </div>
    </div>
  </div>
</section>
</section>