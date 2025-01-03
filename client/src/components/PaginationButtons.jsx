import React from "react";

const PaginationButtons = ({ currentPage, rowsPerPage ,handlePrev,handleNext}) => {
  return (
    <div className="flex justify-between px-4 py-4">
      <h2>Page No:{currentPage} </h2>
      <div className="flex gap-4">
        <button className="bg-blue-700 text-white px-4 py-1" onClick={handlePrev}>Previous</button>
        <button className="bg-blue-700 text-white px-4 py-1" onClick={handleNext}>Next</button>
      </div>
      <h2>Per Page : {rowsPerPage}</h2>
    </div>
  );
};

export default PaginationButtons;
