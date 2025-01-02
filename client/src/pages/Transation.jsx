import React, { useState } from "react";
import TableContent from "../components/TableContent";
import PaginationButtons from "../components/PaginationButtons";

const Transation = ({ isAllTransation }) => {
  const [isSelectValue, setIsSelectValue] = useState(0);

  const [currentPage,setCurrentPage] = useState(1)
  const [rowsPerPage,setRowsPerPage] = useState(10)
  
  const indexOfLastItem = currentPage * rowsPerPage;
  const indexOfFirstItem = indexOfLastItem - rowsPerPage;
  
  //last page number
  const totalPage = isAllTransation.length / rowsPerPage ;

  const currentItems = isAllTransation.slice(indexOfFirstItem, indexOfLastItem);


  const handleNext = ()=>{
    setCurrentPage((prev)=>Math.min(prev + 1,totalPage))

    
  }

  const handlePrev = ()=>{
    setCurrentPage((prev)=>Math.max(prev - 1,1))
  }
  

  return (
    <main className="xl:container bg-blue-300 mx-auto p-4">
      <header className="text-center py-5 bg-slate-400">
        Transation Dashboard
      </header>

      <section className="flex justify-between">
        <input
          type="text"
          name="search"
          id=""
          className="w-52 px-2"
          placeholder="search..."
          autoComplete="off"
        />
        <select
          name=""
          id=""
          className="w-40 p-2"
          onChange={(e) => setIsSelectValue(e.target.value)}
        >
          <option value="">Select Month</option>
          <option value="1">Jan</option>
          <option value="2">Feb</option>
          <option value="3">Mar</option>
          <option value="4">Apr</option>
          <option value="5">May</option>
          <option value="6">Jun</option>
          <option value="7">Jul</option>
          <option value="8">Aug</option>
          <option value="9">Sep</option>
          <option value="10">Oct</option>
          <option value="11">Nov</option>
          <option value="12">Dec</option>
        </select>
      </section>
      <br />
      <TableContent isAllTransation={isAllTransation} currentItems={currentItems} />

      <PaginationButtons currentPage={currentPage} rowsPerPage={rowsPerPage} handleNext={handleNext} handlePrev={handlePrev}/>
    </main>
  );
};

export default Transation;
