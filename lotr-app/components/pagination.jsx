import React from "react";

const Pagination = ({
  currentPage,
  totalPages,
  onPreviousClick,
  onNextClick,
}) => {
  return (
    <div>
      <button onClick={onPreviousClick} disabled={currentPage === 1}>
        Previous
      </button>
      <span>{`Page ${currentPage} of ${totalPages}`}</span>
      <button onClick={onNextClick} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
