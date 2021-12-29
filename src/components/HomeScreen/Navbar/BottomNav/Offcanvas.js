import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import OffCanvasBody from "./OffCanvasBody";
// UI
import { FaUserCircle } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";

function Offcanvas() {
  const { isAuthenticated, user, loginWithPopup, logout } = useAuth0();
  return (
    <div>
      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="bottomNavCanvas"
        aria-labelledby="bottomNavCanvasLabel"
      >
        <div
          className="position-relative offcanvas-header text-white"
          style={{ backgroundColor: "#232f3e" }}
        >
          <h5
            className="offcanvas-title d-flex align-items-center"
            id="bottomNavCanvasLabel"
          >
            {isAuthenticated ? (
              user?.picture ? (
                <img
                  src={user?.picture}
                  className="rounded-circle w-25 me-3"
                  loading="lazy"
                  alt=""
                  style={{ minWidth: "60px" }}
                />
              ) : (
                <FaUserCircle className="fs-3 me-3" />
              )
            ) : (
              <FaUserCircle className="fs-3 me-3" />
            )}
            <span className="fw-bold">
              {isAuthenticated ? (
                <div className="d-flex flex-column">
                  <span className="m-0 p-0">Hello {user.given_name} ✌</span>
                  <small
                    onClick={logout}
                    style={{ fontSize: "11px", cursor: "pointer" }}
                    className="bg-danger mt-1 p-0 m-0 col-6 text-center rounded"
                  >
                    Sign out
                  </small>
                </div>
              ) : (
                <span style={{ cursor: "pointer" }} onClick={loginWithPopup}>
                  Hello, Sign in{" "}
                  <small className="fs-6 text-muted">(click)</small>
                </span>
              )}
            </span>
          </h5>

          <span
            className="position-absolute d-none d-sm-block"
            data-bs-dismiss="offcanvas"
            style={{ right: "-45px", cursor: "pointer" }}
          >
            <IoCloseOutline className="fs-1 fw-bolder" />
          </span>

          <span
            data-bs-dismiss="offcanvas"
            className="d-sm-none"
            style={{ cursor: "pointer" }}
          >
            <IoCloseOutline className="fs-1 fw-bolder" />
          </span>
        </div>

        <div
          style={{ overflowX: "hidden" }}
          className="offcanvas-body m-0 px-0"
        >
          <OffCanvasBody />
        </div>
      </div>
    </div>
  );
}

export default React.memo(Offcanvas);
