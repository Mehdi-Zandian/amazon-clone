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
import emptyCart from "../../assets/Empty/empty-cart.svg";
import { AiFillEuroCircle } from "react-icons/ai";

function CheckoutScreen() {
  // show loader of proceed btn
  const [loaderShow, setLoaderShow] = useState(false);
  const [loaderShowBasket, setLoaderShowBasket] = useState(false);
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
  const clearBasketLoader = () => {
    setLoaderShowBasket(true);
    setTimeout(() => {
      setLoaderShowBasket(false);
      clearBasket();
    }, 2500);
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
    }, 2500);
  };
  return (
    <div className="checkout">
      <div className="checkout__wrapper mx-auto d-flex flex-md-row flex-column">
        <div className="w-100">
          {basket?.length === 0 ? (
            <div className="w-100">
              <img src={emptyCart} className="col-4 mt-4 mx-auto d-block" />
              <span className="fw-bold d-inline-block p-2 text-center mt-3 w-100">
                Your Shopping basket is empty ... <br />{" "}
                {order.length > 0 ? (
                  <Link
                    to="/order"
                    style={{
                      fontSize: "14px",
                      width: "250px",
                      backgroundColor: "#febd69",
                      color: "#131921",
                    }}
                    className="py-1 d-inline-block shadow mt-2 mb-5 rounded text-decoration-none"
                  >
                    Checkout Order List
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
                className="checkout__banner img-fluid w-100"
                src={Exclusive}
                alt="Amazon exclusive"
              />
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
                onClick={() => clearBasketLoader()}
                title="You will not be able to see the Basket items anymore !"
                className="btn btn-sm btn-danger mx-auto d-block mb-5 shadow w-50 py-2"
              >
                {loaderShowBasket ? (
                  <span className="loader"></span>
                ) : (
                  "Clear Basket !"
                )}
              </button>
            </div>
          )}
        </div>

        {basket.length > 0 && (
          <div className="d-flex flex-column bg-white p-3 my-md-0 my-3 col-md-2 col-12 shadow-sm">
            <>
              <div style={{ fontSize: "15px" }} className="fw-bold">
                <p>
                  <span>
                    <AiFillEuroCircle className="fs-5" /> Order Total
                    <small className="text-danger mx-1">
                      ({basket.length} items)
                    </small>
                    :
                  </span>
                </p>
                <p className="w-100 p-1 text-center bg-danger text-white my-1 rounded">
                  £{getBasketTotal(basket)}
                </p>
              </div>
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
