import React, { useState } from "react";
import SelectDropdown from "../components/SelectDropdown";

import fetchApi from "../helper/fetchApi";
import {toast} from 'react-toastify'

const Statistics = () => {
  const [isTotalsale, setIsTotalsale] = useState([]);
  async function handleDropdown(e) {
    const monthID = e.target.value;

    if (monthID === "") {
      setIsTotalsale([]);
    }

    if (monthID) {
      try {
        const data = await fetchApi(
          `http://localhost:5002/api/v1/statastics?month=${monthID}`
        );
        console.log(data);
        setIsTotalsale(data);
        toast.success(`( ${data.length}) Records fetch..`, {
                  position: "top-right"
                });
      } catch (error) {
        console.error("Error fetching filtered data", error);
      }
    }
  }

  const totalprice =
    isTotalsale && isTotalsale.length > 0
      ? Math.floor(
          isTotalsale.map((item) => item.price).reduce((ac, cb) => ac + cb, 0)
        )
      : 0;

  const totalItemSold =
    isTotalsale && isTotalsale.length > 0
      ? isTotalsale.filter((item) => item.sale === true)
      : [];

  const totalItemNotSold =
    isTotalsale && isTotalsale.length > 0
      ? isTotalsale.filter((item) => item.sale === false)
      : [];
      
  return (
    <div className="xl:container mx-auto h-screen bg-blue-300">
      <div className="flex  gap-10 bg-blue-600 p-4 ">
        <h1 className="text-3xl font-bold text-white">Statistics</h1>
        <SelectDropdown handleChange={handleDropdown} />
      </div>

      <div className="bg-blue-700 p-4 mt-2 ms-4 rounded-lg text-white grid grid-cols-2 gap-10 w-2/5 text-xl font-bold cursor-pointer">
        <h1>Total sale :-</h1>
        <h1> &#8377; {totalprice}</h1>
        <h1>Total sold item :-</h1>
        <h1> {totalItemSold.length}</h1>
        <h1>Total not sold item :-</h1>
        <h1>{totalItemNotSold.length}</h1>
      </div>
    </div>
  );
};

export default Statistics;
