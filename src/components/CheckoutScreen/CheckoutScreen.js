import React, { useState } from "react";
import CheckoutProduct from "./CheckoutProduct/CheckoutProduct";
import { Link } from "react-router-dom";
// context
import { useStateValue } from "../../StateContext/StateProvider";
import { getBasketTotal } from "../../StateContext/reducer";
// Auth0 setup
import { useAuth0 } from "@auth0/auth0-react";
// UI
import Exclusive from "../../assets/exclusive/exclusive.jpg";
import "./CheckoutScreen.scss";

function CheckoutScreen() {
  // show loader of proceed btn
  const [loaderShow, setLoaderShow] = useState(false);
  // context setup
  const [{ basket, order }, dispatch] = useStateValue();
  // Auth0 setup
  const { isAuthenticated } = useAuth0();
  // Clear basket
  const clearBasket = () => {
    dispatch({
      type: "CLEAR_BASKET",
    });
  };
  // add proceeded products to order list
  const addToOrderList = () => {
    setLoaderShow(true);
    setTimeout(() => {
      setLoaderShow(false);
      basket.map((p) => {
        dispatch({
          type: "ADD_TO_ORDER",
          item: p,
        });
      });
      // clear basket after proceed to checkout
      clearBasket();
    }, 2000);
  };
  return (
    <div className="checkout">
      <div className="checkout__wrapper mx-auto d-flex flex-md-row flex-column">
        <div>
          <img
            className="checkout__banner img-fluid w-100"
            src={Exclusive}
            alt="Amazon exclusive"
          />

          {basket?.length === 0 ? (
            <div>
              <h3 className="fw-bold p-2">
                Your Shopping basket is empty ... <br />{" "}
                {order.length > 0 && (
                  <Link to="/order" className="fs-5">
                    Checkout Order List
                  </Link>
                )}
              </h3>
            </div>
          ) : (
            <div className="p-2 bg-white shadow-sm">
              <h2 className="fw-bold border-bottom py-2 border-2">
                Your shopping basket
              </h2>
              {basket.map((p) => {
                return (
                  <CheckoutProduct
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
                onClick={() => clearBasket()}
                title="You will not be able to see the Basket items anymore !"
                className="btn btn-sm btn-danger mx-auto d-block mb-5 shadow w-50"
              >
                Clear Basket !
              </button>
            </div>
          )}
        </div>

        {basket.length > 0 && (
          <div className="d-flex flex-column bg-white p-3 my-md-0 my-3 col-md-2 col-12 shadow-sm">
            <>
              <h6 style={{ fontSize: "15px" }} className="fw-bold px-2">
                Subtotal ({basket.length} items): {`£${getBasketTotal(basket)}`}
              </h6>
              <button
                disabled={!isAuthenticated}
                onClick={() => addToOrderList()}
                className={`checkout__btnStyle btn p-1 shadow-none text-dark ${
                  !isAuthenticated && "checkout__btnSignin text-white"
                }`}
                style={{ fontSize: "15px" }}
              >
                {isAuthenticated ? (
                  loaderShow ? (
                    <span className="loader"></span>
                  ) : (
                    "Proceed to checkout"
                  )
                ) : (
                  "Sign in to checkout"
                )}
              </button>
            </>
          </div>
        )}
      </div>
    </div>
  );
}

export default React.memo(CheckoutScreen);
