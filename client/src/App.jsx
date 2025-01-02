import "./App.css";
import Transation from "./pages/Transation";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Fix the imports
import Statistics from "./pages/Statistics";
import NotFound from "./pages/NotFound";
import Barchart from "./pages/Barchart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Transation />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/barchart" element={<Barchart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
