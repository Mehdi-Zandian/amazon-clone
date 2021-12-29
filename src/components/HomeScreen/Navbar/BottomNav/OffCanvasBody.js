import React from "react";
// UI
import { IoIosArrowForward } from "react-icons/io";
import { VscGlobe } from "react-icons/vsc";
import flag from "../../../../assets/flag/um.svg";

function OffCanvasBody() {
  return (
    <>
      <div>
        <div>
          <h5 className="fw-bold ps-4">Digital content & devices</h5>
          <div className="offcanvas__items d-flex justify-content-between align-items-center p-3 ps-4">
            <span>Amazon Music</span>
            <IoIosArrowForward className="text-muted fs-5" />
          </div>
          <div className="offcanvas__items d-flex justify-content-between align-items-center p-3 ps-4">
            <span>Kindle E-readers & Books </span>
            <IoIosArrowForward className="text-muted fs-5" />
          </div>
          <div className="offcanvas__items d-flex justify-content-between align-items-center p-3 ps-4">
            <span>Appstore for Android </span>
            <IoIosArrowForward className="text-muted fs-5" />
          </div>
        </div>

        <div className="divider border-bottom my-2"></div>

        <div>
          <h5 className="fw-bold ps-4">Shop By Department</h5>
          <div className="offcanvas__items d-flex justify-content-between align-items-center p-3 ps-4">
            <span>Electronics</span>
            <IoIosArrowForward className="text-muted fs-5" />
          </div>
          <div className="offcanvas__items d-flex justify-content-between align-items-center p-3 ps-4">
            <span>Jewelery</span>
            <IoIosArrowForward className="text-muted fs-5" />
          </div>
          <div className="offcanvas__items d-flex justify-content-between align-items-center p-3 ps-4">
            <span>Men's Clothing</span>
            <IoIosArrowForward className="text-muted fs-5" />
          </div>
          <div className="offcanvas__items d-flex justify-content-between align-items-center p-3 ps-4">
            <span>Women's Clothing</span>
            <IoIosArrowForward className="text-muted fs-5" />
          </div>
        </div>

        <div className="divider border-bottom my-2"></div>

        <div>
          <h5 className="fw-bold ps-4">Programs & features</h5>
          <div className="offcanvas__items d-flex justify-content-between align-items-center p-3 ps-4">
            <span>Gift Cards</span>
            <IoIosArrowForward className="text-muted fs-5" />
          </div>
          <div className="offcanvas__items d-flex justify-content-between align-items-center p-3 ps-4">
            <span>#FoundOnAmazon</span>
            <IoIosArrowForward className="text-muted fs-5" />
          </div>
          <div className="offcanvas__items d-flex justify-content-between align-items-center p-3 ps-4">
            <span>Amazon Live</span>
            <IoIosArrowForward className="text-muted fs-5" />
          </div>
          <div className="offcanvas__items d-flex justify-content-between align-items-center p-3 ps-4">
            <span>International Shopping</span>
            <IoIosArrowForward className="text-muted fs-5" />
          </div>
        </div>

        <div className="divider border-bottom my-2"></div>

        <div>
          <h5 className="fw-bold ps-4">Help & settings</h5>
          <div className="offcanvas__items d-flex justify-content-between align-items-center p-3 ps-4">
            <span>Your Account</span>
            <IoIosArrowForward className="text-muted fs-5" />
          </div>
          <div className="offcanvas__items d-flex justify-content-between align-items-center p-3 ps-4">
            <span>
              <VscGlobe className="me-2" />
              <span>English</span>
            </span>
            <IoIosArrowForward className="text-muted fs-5" />
          </div>
          <div className="offcanvas__items d-flex justify-content-between align-items-center p-3 ps-4">
            <span className="d-flex align-items-center">
              <img src={flag} style={{ maxWidth: "18px" }} className="me-2" />
              <span className="col-12">United States</span>
            </span>
            <IoIosArrowForward className="text-muted fs-5" />
          </div>
          <div className="offcanvas__items d-flex justify-content-between align-items-center p-3 ps-4">
            <span>Customer Service</span>
            <IoIosArrowForward className="text-muted fs-5" />
          </div>
        </div>
      </div>
    </>
  );
}

export default React.memo(OffCanvasBody);
