import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About, Portfolio, Resume, Contact } from "./components/Main";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [currentPage, setCurrentPage] = useState("React-Portfolio");
  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
        <Routes>
          <Route path="/home" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>

      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;
