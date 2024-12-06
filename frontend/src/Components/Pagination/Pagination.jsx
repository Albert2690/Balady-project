// eslint-disable-next-line react/prop-types
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";

function Pagination({ totalPosts = 1, postPerPage = 1, setCurrentPage, currentPage }) {
  // Calculate total pages
  const totalPages = Math.ceil(totalPosts / postPerPage);

  // Debugging outputs to verify props
  // console.log("totalPosts:", totalPosts);
  // console.log("postPerPage:", postPerPage);
  // console.log("totalPages:", totalPages);
  // console.log("currentPage:", currentPage);

  const previous = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const next = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="flex justify-center">
      <nav aria-label="Page navigation">
        <ul className="inline-flex -space-x-px text-base h-10 gap-3">
          {/* Previous Button */}
          <li onClick={previous}>
            <span
              
              className="flex items-center justify-center text-[30px] px-4 h-10 leading-tight hover:scale-125 transition ease-in-out"
            >
              <IoIosArrowRoundBack />
            </span>
          </li>

          {/* First Page */}
          <li onClick={() => setCurrentPage(1)}>
            <span
             
              className={`${
                currentPage === 1
                  ? "bg-[#07706C] text-white border rounded-full"
                  : ""
              } flex items-center justify-center px-4 h-10 leading-tight hover:bg-gray-100 hover:text-gray-700`}
            >
              1
            </span>
          </li>

          {/* Ellipsis */}
          {currentPage > 2 && (
            <li>
              <span className="flex items-center justify-center px-4 h-10 leading-tight">
                ...
              </span>
            </li>
          )}

          {/* Current Page (if not the first or last) */}
          {currentPage > 1 && currentPage < totalPages && (
            <li>
              <span
                
                className="bg-[#07706C] text-white border rounded-full flex items-center justify-center px-4 h-10 leading-tight"
              >
                {currentPage}
              </span>
            </li>
          )}

          {/* Ellipsis */}
          {currentPage < totalPages - 1 && (
            <li>
              <span className="flex items-center justify-center px-4 h-10 leading-tight">
                ...
              </span>
            </li>
          )}

          {/* Last Page */}
          {totalPages > 1 && (
            <li onClick={() => setCurrentPage(totalPages)}>
              <span
              
                className={`${
                  currentPage === totalPages
                    ? "bg-[#07706C] text-white border rounded-full"
                    : ""
                } flex items-center justify-center px-4 h-10 leading-tight hover:bg-gray-100 hover:text-gray-700`}
              >
                {totalPages}
              </span>
            </li>
          )}

          {/* Next Button */}
          <li onClick={next}>
            <span
             
              className="flex items-center text-[30px] justify-center px-4 h-10 leading-tight hover:scale-125 transition ease-in-out"
            >
              <IoIosArrowRoundForward />
            </span>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;
