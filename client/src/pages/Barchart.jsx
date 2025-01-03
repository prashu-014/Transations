import React, { useState } from "react";
import SelectDropdown from "../components/SelectDropdown";
import BarChartComponent from "../components/BarChartComponent";
import fetchApi from "../helper/fetchApi";


const Barchart = () => {
const [isBarchartData,setIsBarchartData] = useState([])

  async function handleChange(e) {
    const monthID = e.target.value

    if (monthID) {
      try {
        const data = await fetchApi(`http://localhost:5002/api/v1/barchart?month=${monthID}`);
        setIsBarchartData(data.transactions)        
      } catch (error) {
        console.error("Error fetching filtered data", error);
      }
    }
  }
  return (
    <div className="xl:container mx-auto h-screen flex flex-col gap-4 ">
      <div className="flex gap-5 bg-blue-700 p-4">
        <h1 className="text-3xl text-white font-bold">Bar Chart Statistic - </h1>
        <SelectDropdown handleChange={handleChange} />
      </div>

      <div className="px-2 md:px-4" style={{width:'70rem',height:'50rem'}}>
        <BarChartComponent isBarchartData={isBarchartData} />
      </div>
    </div>
  );
};

export default Barchart;
