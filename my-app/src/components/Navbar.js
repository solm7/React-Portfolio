import { Link } from "react-router-dom";

function Navbar({ currentPage, handlePageChange }) {
  return (
    <div className="d-flex flex-wrap justify-content-center">
      <nav className="navbar navbar-expand-lg">
        <Link
          onClick={() => handlePageChange("portfolio")}
          className={
            currentPage === "portfolio"
              ? "nav-link active fs-3"
              : "nav-link fs-3"
          }
          to="/"
        >
          Portfolio
        </Link>
        <Link
          onClick={() => handlePageChange("Home")}
          className={
            currentPage === "Home" ? "nav-link active fs-3" : "nav-link fs-3"
          }
          to="/About"
        >
          About Me
        </Link>
        <Link
          onClick={() => handlePageChange("contact")}
          className={
            currentPage === "contact" ? "nav-link active fs-3" : "nav-link fs-3"
          }
          to="/contact"
        >
          Contact
        </Link>
        <Link
          onClick={() => handlePageChange("resume")}
          className={
            currentPage === "resume" ? "nav-link active fs-3" : "nav-link fs-3"
          }
          to="/resume"
        >
          Resume
        </Link>
      </nav>
    </div>
  );
}
export default Navbar;
