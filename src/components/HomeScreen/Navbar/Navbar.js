import React from "react";
import BottomNav from "./BottomNav/BottomNav";
import { Link } from "react-router-dom";
// context
import { useStateValue } from "../../../StateContext/StateProvider";
// Auth0
import { useAuth0 } from "@auth0/auth0-react";
// UI
import "./Navbar.scss";
import { MdSearch } from "react-icons/md";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import Logo from "../../../assets/Logo/logo.PNG";
import flag from "../../../assets/flag/um.svg";

function Navbar() {
  // context setup
  const [{ basket }] = useStateValue();
  // Auth0 setup
  const { user, isAuthenticated, loginWithPopup, logout } = useAuth0();
  return (
    <div id="top" className="w-100">
      <div className="navbar w-100 m-0 p-0 position-static">
        <Link to="/">
          <img
            src={Logo}
            alt="Amazon Logo"
            title="Amazon Clone Home Page"
            className="nav__logo m-2"
          />
        </Link>

        <div
          className="d-none d-md-flex me-3"
          style={{ cursor: "pointer", fontSize: "13px" }}
        >
          <div className="text-white align-self-end">
            <IoLocationOutline className="fs-4 mb-1" />
          </div>
          <div className="d-flex flex-column">
            <span className="text-muted">Deliver to</span>
            <span className="text-white fw-bold">United States</span>
          </div>
        </div>

        <div className="navbar__search d-flex">
          <input
            placeholder="Search In Amazon ..."
            type="text"
            className="navbar__searchInput w-100 border-0 px-2"
          />
          <MdSearch className="navbr__searchIcon text-dark" />
        </div>

        <div
          className="mx-4 d-none d-md-block"
          style={{ maxWidth: "25px", width: "25px", cursor: "pointer" }}
        >
          <img src={flag} alt="" />
        </div>

        <div className="nav__options d-flex justify-content-evenly">
          <div className="nav__optionsMobile mx-2 text-light d-flex flex-column justify-content-center">
            {isAuthenticated ? (
              <>
                <span className="nav__optionsFirstLine">
                  Hello {user?.given_name}
                </span>
                <span style={{ cursor: "pointer" }} onClick={() => logout()}>
                  Sign Out
                </span>
              </>
            ) : (
              <>
                <span className="nav__optionsFirstLine">Account</span>
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => loginWithPopup()}
                >
                  Sign In
                </span>
              </>
            )}
          </div>
          <Link
            to="/Order"
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

      <BottomNav />
    </div>
  );
}

export default React.memo(Navbar);
