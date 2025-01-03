import React, { useState, useEffect } from "react";
import axios from "axios";

const InputSearch = ({setIsAllTransation,setCurrentPage,originalTransactions}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 1000);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  useEffect(() => {
    if (debouncedSearchTerm.trim() === "") {
      setIsAllTransation(originalTransactions)
      setCurrentPage(1)
      return;
    }

    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5002/api/v1/transactionSearch?search=${debouncedSearchTerm}`
        );
        setIsAllTransation(response.data);
        console.log(response.data);
        
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };

    fetchData();
  }, [debouncedSearchTerm]);
  return (
    <input
      type="text"
      name="search"
      id=""
      className="w-52 px-2"
      placeholder="search..."
      autoComplete="off"
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
};

export default InputSearch;