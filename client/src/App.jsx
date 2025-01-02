import "./App.css";
import Transation from "./pages/Transation";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [isAllTransation, setIsAllTransation] = useState([]);

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

  return (
    <>
      <Transation
        isAllTransation={isAllTransation}
        setIsAllTransation={setIsAllTransation}
      />
    </>
  );
}

export default App;
