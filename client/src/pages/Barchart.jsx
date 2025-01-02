import React from "react";
import SelectDropdown from "../components/SelectDropdown";
import BarChartComponent from "../components/BarChartComponent";



const Barchart = () => {
  const handleDropdown = (e) => {
    console.log(e);
  };
  return (
    <div className="xl:container mx-auto h-screen flex flex-col gap-4 ">
      <div className="flex gap-5 bg-blue-200 p-4">
        <h1 className="text-3xl">Bar Chart Statistic - </h1>
        <SelectDropdown handleDropdown={handleDropdown} />
      </div>

      <div className="px-2 md:px-4" style={{width:'70rem',height:'50rem'}}>
        <BarChartComponent />
      </div>
    </div>
  );
};

export default Barchart;
