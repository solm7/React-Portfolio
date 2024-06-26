import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  const [currentPage, setCurrentPage] = useState("React-Portfolio");
  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
        <Routes>
          <Route path="/" element={<Home />} />
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
