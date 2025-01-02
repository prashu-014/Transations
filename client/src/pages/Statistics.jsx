import React from "react";
import SelectDropdown from "../components/SelectDropdown";

const Statistics = () => {
  const handleDropdown = (e) => {
    console.log(e);
  };
  return (
    <div className="xl:container mx-auto h-screen bg-blue-300 p-4 ">
      <div className="flex  gap-10">
        <h1 className="text-3xl">Statistics</h1>
        <SelectDropdown handleDropdown={handleDropdown} />
      </div>

      <div className="bg-yellow-300 mt-5 p-4 w-3/12 rounded-xl flex flex-col gap-4">

        <h1>Total sale :</h1>
        <h1>Total sold item :</h1>
        <h1>Total not sold item :</h1>

      </div>
    </div>
  );
};

export default Statistics;
