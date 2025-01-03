import React from "react";
import SelectDropdown from "../components/SelectDropdown";

const Statistics = () => {
  const handleDropdown = (e) => {
    console.log(e);
  };
  return (
    <div className="xl:container mx-auto h-screen bg-blue-300">
      <div className="flex  gap-10 bg-blue-600 p-4 ">
        <h1 className="text-3xl font-bold text-white">Statistics</h1>
        <SelectDropdown handleDropdown={handleDropdown} />
      </div>

      <div className="bg-blue-600 text-white text-xl font-bold mt-5 ms-4 p-4 w-3/12 rounded-xl flex flex-col gap-4">

        <h1>Total sale :</h1>
        <h1>Total sold item :</h1>
        <h1>Total not sold item :</h1>

      </div>
    </div>
  );
};

export default Statistics;
