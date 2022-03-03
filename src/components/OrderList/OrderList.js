import React, { useState } from "react";
import CheckoutProduct from "../CheckoutScreen/CheckoutProduct/CheckoutProduct";
import { Link } from "react-router-dom";
// context setup
import { useStateValue } from "../../StateContext/StateProvider";
// UI
import "./OrderList.scss";
import OrderImage from "../../assets/order/order.jpg";
import emptyOrder from "../../assets/Empty/empty-order.svg";

function OrderList() {
  // clear basket loader
  const [showLoader, setLoader] = useState(false);
  // context setup
  const [{ basket, order }, dispatch] = useStateValue();
  // clear order list
  const clearOrder = () => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
      dispatch({
        type: "CLEAR_ORDER",
      });
    }, 2500);
  };

  return (
    <div className="mx-auto" style={{ maxWidth: "1500px" }}>
      {order?.length === 0 ? (
        <div className="w-100">
          <img src={emptyOrder} className="col-4 mt-4 mx-auto d-block" />
          <span className="fw-bold d-inline-block p-2 text-center mt-3 w-100">
            Your Order List is empty ... <br />{" "}
            {basket.length > 0 ? (
              <Link
                to="/checkout"
                style={{
                  fontSize: "14px",
                  width: "250px",
                  backgroundColor: "#febd69",
                  color: "#131921",
                }}
                className="py-1 d-inline-block shadow mt-2 mb-5 rounded text-decoration-none"
              >
                Buy products in your Basket.
              </Link>
            ) : (
              <Link
                to="/"
                style={{
                  fontSize: "14px",
                  width: "250px",
                  backgroundColor: "#febd69",
                  color: "#131921",
                }}
                className="py-1 d-inline-block shadow mt-2 mb-5 rounded text-decoration-none"
              >
                Back To Home
              </Link>
            )}
          </span>
        </div>
      ) : (
        <div className="p-2 bg-white shadow-sm">
          <img
            style={{
              maxHeight: "450px",
              maskImage:
                "linear-gradient(to bottom,rgba(0, 0, 0, 1) 60%,rgba(0, 0, 0, 0))",
            }}
            className="img-fluid w-100"
            src={OrderImage}
            alt="Order Banner"
          />
          <h2 className="fw-bold border-bottom py-2 border-2">
            Your Order List :
          </h2>
          {order.map((p) => {
            return (
              <CheckoutProduct
                orderUI={true}
                key={p?.id}
                id={p?.id}
                description={p?.description}
                title={p?.title}
                price={p?.price}
                rating={p?.rating}
                image={p?.image}
              />
            );
          })}
          <button
            onClick={() => clearOrder()}
            title="You will not be able to see the order list items anymore"
            className="btn btn-sm btn-danger mx-auto d-block mb-5 shadow w-50"
          >
            {showLoader ? (
              <span className="order__loader"></span>
            ) : (
              "Clear Order List !"
            )}
          </button>
        </div>
      )}
    </div>
  );
}

export default React.memo(OrderList);
