import React from "react";
import CheckoutProduct from "../CheckoutScreen/CheckoutProduct/CheckoutProduct";
import { Link } from "react-router-dom";
// context setup
import { useStateValue } from "../../StateContext/StateProvider";
// UI
import OrderImage from "../../assets/order/order.png";

function OrderList() {
  // context setup
  const [{ basket, order }, dispatch] = useStateValue();
  // clear order list
  const clearOrder = () => {
    dispatch({
      type: "CLEAR_ORDER",
    });
  };

  return (
    <div className="mx-auto" style={{ maxWidth: "1500px" }}>
      <img
        style={{
          maxHeight: "400px",
          maskImage:
            "linear-gradient(to bottom,rgba(0, 0, 0, 1) 60%,rgba(0, 0, 0, 0))",
        }}
        className="img-fluid w-100"
        src={OrderImage}
        alt="Order Banner"
      />
      {order?.length === 0 ? (
        <div className="">
          <h3 className="fw-bold p-2">
            Your Order List is empty ... <br />{" "}
            {basket.length > 0 && (
              <Link to="/checkout" className="fs-5">
                Buy products in your Basket.
              </Link>
            )}
          </h3>
        </div>
      ) : (
        <div className="p-2 bg-white shadow-sm">
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
            Clear Order List !
          </button>
        </div>
      )}
    </div>
  );
}

export default React.memo(OrderList);
