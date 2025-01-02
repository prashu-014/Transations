import React from "react";

const PaginationButtons = ({ currentPage, rowsPerPage ,handlePrev,handleNext}) => {
  return (
    <div className="flex justify-between mt-2">
      <h2>Page No:{currentPage} </h2>
      <div className="flex gap-4">
        <button className="bg-green-500 px-4 py-1" onClick={handlePrev}>Previous</button>
        <button className="bg-green-500 px-4 py-1" onClick={handleNext}>Next</button>
      </div>
      <h2>Per Page : {rowsPerPage}</h2>
    </div>
  );
};

export default PaginationButtons;
