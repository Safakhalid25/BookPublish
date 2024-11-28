import './style.css';

const CustomPagination = ({ itemsPerPage, totalItems, currentPage, onPageChange }) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const pageNumbers = [];
  
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
  
    return (
      <div className="  align-items-center">
        {/* <p>Showing {itemsPerPage} out of {totalItems} Entries</p> */}
        {/* <ul>
          <li><button>Prev</button></li>
          {pageNumbers.map((pageNumber) => (
            <li key={pageNumber}>
              <button onClick={() => onPageChange(pageNumber)}>{pageNumber}</button>
            </li>
          ))}
          <li><button>Next</button></li>
        </ul> */}




        <ul class="pagination">
        {pageNumbers.map((pageNumber) => (  
                        <li class="page-item">
                          <button class="page-link page_link-active"  onClick={() => onPageChange(pageNumber)}>
                          {pageNumber}
                          </button>
                        </li>
                          ))}
                      </ul>
      </div>
    );
  };
  // page_link-active
  export default CustomPagination;

