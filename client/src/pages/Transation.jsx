import React, { useState,useEffect } from "react";
import TableContent from "../components/TableContent";
import PaginationButtons from "../components/PaginationButtons";
import axios from "axios";
import SelectDropdown from "../components/SelectDropdown";

const Transation = () => {
  const [isSelectValue, setIsSelectValue] = useState(0);
  const [isAllTransation, setIsAllTransation] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const indexOfLastItem = currentPage * rowsPerPage;
  const indexOfFirstItem = indexOfLastItem - rowsPerPage;
  //last page number
  const totalPage = isAllTransation.length / rowsPerPage;
  const currentItems = isAllTransation.slice(indexOfFirstItem, indexOfLastItem);


  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPage));
  };

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  useEffect(() => {
    axios
      .get("http://localhost:5002/api/v1/alltransation")
      .then((response) => {
        const data = response.data.transation;
        setIsAllTransation(data);
      })
      .catch((error) => {
        console.error("Error fetching data", error);
      });
  }, []);

  const handleDropdown = (e)=>{

    alert(e)

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
        <SelectDropdown handleDropdown={handleDropdown} />
      </section>
      <br />
      <TableContent
        isAllTransation={isAllTransation}
        currentItems={currentItems}
      />

      <PaginationButtons
        currentPage={currentPage}
        rowsPerPage={rowsPerPage}
        handleNext={handleNext}
        handlePrev={handlePrev}
      />
    </main>
  );
};

export default Transation;
