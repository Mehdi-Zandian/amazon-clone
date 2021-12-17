import React from "react";
import { Link } from "react-router-dom";
// UI
import "./Navbar.scss";
import { MdSearch } from "react-icons/md";
import { HiOutlineShoppingCart } from "react-icons/hi";
import Logo from "../../../assets/Logo/logo.PNG";

function Navbar() {
  return (
    <div className="navbar w-100 m-0 p-0 position-sticky top-0">
      <Link to="/">
        <img
          src={Logo}
          alt="Amazon Logo"
          title="Amazon Clone Home Page"
          className="nav__logo m-2"
        />
      </Link>

      <div className="navbar__search d-flex">
        <input
          type="text"
          className="navbar__searchInput w-100 border-0 px-2"
        />
        <MdSearch className="navbr__searchIcon text-dark" />
      </div>

      <div className="nav__options d-flex justify-content-evenly">
        <Link
          to="/"
          className="text-decoration-none nav__optionsMobile mx-2 text-light d-flex flex-column justify-content-center"
        >
          <span className="nav__optionsFirstLine">Hello Mehdi</span>
          <span>Sign In</span>
        </Link>
        <Link
          to="/"
          className="text-decoration-none mx-2 text-light d-flex flex-column justify-content-center"
        >
          <span className="nav__optionsFirstLine">Returns</span>
          <span>& Orders</span>
        </Link>

        <Link
          to="/"
          className="text-decoration-none ms-2 me-3 text-light position-relative d-flex flex-column"
        >
          <HiOutlineShoppingCart className="fs-2" />
          <span className="nav__optionNumber position-absolute fw-bold rounded-pill px-1">
            0
          </span>
        </Link>
      </div>
    </div>
  );
}

export default React.memo(Navbar);
