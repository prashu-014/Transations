import React, { useState } from "react";

import fetchApi from "../helper/fetchApi";

import { toast } from "react-toastify";

const Piechart = () => {
  const [iscategory, setIscategory] = useState([]);
  async function handleDropdown(e) {
    const yearID = e.target.value;

    if (yearID === "") {
      setIscategory([]);
    }

    if (yearID) {
      try {
        const data = await fetchApi(
          `http://localhost:5002/api/v1/piechart?yearnum=${yearID}`
        );
        console.log(data);
        setIscategory(data);
        toast.success(`( ${data.length}) Records fetch..`, {
          position: "top-right",
        });
      } catch (error) {
        console.error("Error fetching filtered data", error);
      }
    }
  }

  const countItemsByCategory = () => {
    const categoryCount = {};

    iscategory.forEach((item) => {
      if (categoryCount[item.category]) {
        categoryCount[item.category]++;
      } else {
        categoryCount[item.category] = 1;
      }
    });

    return categoryCount;
  };

  const categoryCounts = countItemsByCategory();

  console.log(categoryCounts);

  return (
    <div className="">
      <div className="px-4">
        <div className="flex gap-5">
          <h1 className="text-3xl font-bold bg-blue-600 text-white  py-4 px-4 text-center">
            Pie chart data
          </h1>
          <select
            name=""
            id=""
            className="w-40 p-2 focus:outline-none"
            onChange={(e) => handleDropdown(e)}
          >
            <option value="">Select Year</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>

        <div className="bg-blue-700 p-4 mt-2 h-44  rounded-lg text-white grid grid-cols-2 gap-5 text-xl font-bold cursor-pointer">
          <ul>
            {Object.keys(categoryCounts).map((category) => (
              <li key={category}>
                {category}: {categoryCounts[category]}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Piechart;
