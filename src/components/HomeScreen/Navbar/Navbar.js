import React from "react";
import { Link } from "react-router-dom";
// context
import { useStateValue } from "../../../StateContext/StateProvider";
// Auth0
import { useAuth0 } from "@auth0/auth0-react";
// UI
import "./Navbar.scss";
import { MdSearch } from "react-icons/md";
import { HiOutlineShoppingCart } from "react-icons/hi";
import Logo from "../../../assets/Logo/logo.PNG";

function Navbar() {
  // context setup
  const [{ basket }] = useStateValue();
  // Auth0 setup
  const { user, isAuthenticated, loginWithPopup, logout } = useAuth0();
  return (
    <div id="top" className="navbar w-100 m-0 p-0 position-static">
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
          {isAuthenticated ? (
            <>
              <span className="nav__optionsFirstLine">Hello {user?.name}</span>
              <span onClick={() => logout()}>Sign Out</span>
            </>
          ) : (
            <>
              <span className="nav__optionsFirstLine">Account</span>
              <span onClick={() => loginWithPopup()}>Sign In</span>
            </>
          )}
        </Link>
        <Link
          to="/"
          className="text-decoration-none mx-2 text-light d-flex flex-column justify-content-center"
        >
          <span className="nav__optionsFirstLine">Returns</span>
          <span>& Orders</span>
        </Link>

        <Link
          to="/checkout"
          className="text-decoration-none ms-2 me-3 text-light position-relative d-flex flex-column"
        >
          <HiOutlineShoppingCart className="fs-2" />
          <span className="nav__optionNumber position-absolute fw-bold rounded-pill px-1">
            {basket.length}
          </span>
        </Link>
      </div>
    </div>
  );
}

export default React.memo(Navbar);
