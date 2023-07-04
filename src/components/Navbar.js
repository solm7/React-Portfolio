import { Link } from "react-router-dom";

function Navbar({ currentPage, handlePageChange }) {
  return (
    <div className="d-flex flex-wrap justify-content-center mb-4">
      <nav className="navbar navbar-expand-lg">
        <Link
          onClick={() => handlePageChange("portfolio")}
          className={
            currentPage === "portfolio"
              ? "nav-link active fs-3 me-2"
              : "nav-link fs-3  me-2"
          }
          to="/React-Portfolio"
        >
          Portfolio
        </Link>
        <Link
          onClick={() => handlePageChange("React-Portfolio")}
          className={
            currentPage === "React-Portfolio"
              ? "nav-link active fs-3 me-2"
              : "nav-link fs-3 me-2"
          }
          to="/"
        >
          About Me
        </Link>
        <Link
          onClick={() => handlePageChange("contact")}
          className={
            currentPage === "contact"
              ? "nav-link active fs-3 me-2"
              : "nav-link fs-3 me-2"
          }
          to="/contact"
        >
          Contact
        </Link>
        <Link
          onClick={() => handlePageChange("resume")}
          className={
            currentPage === "resume"
              ? "nav-link active fs-3 me-2"
              : "nav-link fs-3 me-2"
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
