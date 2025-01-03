import React, { useState, useEffect } from "react";
import TableContent from "../components/TableContent";
import PaginationButtons from "../components/PaginationButtons";
import axios from "axios";
import SelectDropdown from "../components/SelectDropdown";
import fetchApi from "../helper/fetchApi";
import InputSearch from "../components/InputSearch";
import { toast } from "react-toastify";

const Transation = () => {
  const [originalTransactions, setOriginalTransactions] = useState([]); // Store original data
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
        setOriginalTransactions(data);
        setIsAllTransation(data);
      })
      .catch((error) => {
        toast.error("Data Not Found..", {
          position: "top-right",
        });
      });
  }, []);

  async function handleChange(e) {
    const monthID = e.target.value;

    if (monthID) {
      try {
        const data = await fetchApi(`http://localhost:5002/api/v1/transation?month=${monthID}`);
        setIsAllTransation(data);
        setCurrentPage(1);
        toast.success(`( ${data.length}) Records fetch..`, {
          position: "top-right",
        });
      } catch (error) {
        toast.error(`Data Not Found..${error.message}`, {
          position: "top-right",
        });
      }
    } else {
      setIsAllTransation(originalTransactions);
      setCurrentPage(1);
    }
  }

  return (
    <main className="xl:container bg-blue-300 mx-auto">
      <header className="text-center py-5 bg-blue-600 text-2xl font-bold text-white">
        Transation Dashboard
      </header>

      <section className="flex justify-between">
        <InputSearch
          setIsAllTransation={setIsAllTransation}
          originalTransactions={originalTransactions}
          setCurrentPage={setCurrentPage}
        />
        <SelectDropdown handleChange={handleChange} />
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
