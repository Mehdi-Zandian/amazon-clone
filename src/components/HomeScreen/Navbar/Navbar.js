import { Link } from "react-router-dom";
// UI
import "./Navbar.scss";
import { MdSearch } from "react-icons/md";
import { MdShoppingBasket } from "react-icons/md";
import Logo from "../../../assets/Logo/logo.PNG";

function Navbar() {
  return (
    <div
      className="navbar w-100 m-0 p-0 position-fixed top-0"
      style={{ zIndex: "100" }}
    >
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
          className="text-decoration-none nav__optionsMobile mx-2 text-light d-flex flex-column"
        >
          <span className="nav__optionsFirstLine">Hello Mehdi</span>
          <span>Sign In</span>
        </Link>
        <Link
          to="/"
          className="text-decoration-none mx-2 text-light d-flex flex-column"
        >
          <span className="nav__optionsFirstLine">Returns</span>
          <span>& Orders</span>
        </Link>
        <Link
          to="/"
          className="text-decoration-none mx-2 text-light d-flex flex-column"
        >
          <span className="nav__optionsFirstLine">Your</span>
          <span>Prime</span>
        </Link>

        <Link to="/" className="text-decoration-none ms-2 me-3 text-light">
          <div className="nav__optionBasket position-relative">
            <span className="fs-5">
              <MdShoppingBasket />
            </span>
            <span className="nav__optionNumber position-absolute fw-bold bg-danger rounded-pill px-1">
              0
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
