import React from "react";
// context
import { useStateValue } from "../../../StateContext/StateProvider";
// UI
import "./CheckoutProduct.scss";
import { ImStarFull } from "react-icons/im";

function CheckoutProduct({
  orderUI = false,
  id,
  description,
  title,
  image,
  price,
  rating,
}) {
  // make long descriptions short
  const truncate = (text, num) => {
    return text.length > num ? text.substr(0, num - 1) + " ..." : text;
  };

  // context setup
  const [{}, dispatch] = useStateValue();

  // add to basket action
  const addTobasket = () => {
    const newId = id + Math.ceil(Math.random() * 1953);
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: newId,
        description,
        title,
        image,
        price,
        rating,
      },
    });
  };

  // remove from basket action
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="d-flex p-3 my-5">
      <div className="col-3 col-md-2 d-flex align-items-start">
        <img
          style={{ maxHeight: "200px" }}
          className="img-fluid"
          src={image}
          alt="Image of product"
        />
      </div>

      <div className="product__info d-flex flex-column flex-md-row justify-content-between w-100 ms-3">
        <div>
          <p className="m-0 fw-bold" style={{ wordWrap: "break-word" }}>
            {truncate(title, 60)}
          </p>

          <p className="product__rating my-1">
            {Array(Math.ceil(rating))
              .fill()
              .map((_) => (
                <span key={Math.random() * 20}>
                  <ImStarFull className="product__ratingStar" />
                </span>
              ))}
          </p>

          <p>{truncate(description, 120)}</p>

          <p>
            <small>£</small>
            <strong>{price}</strong>
          </p>
        </div>

        {!orderUI && (
          <div className="product__buttons d-flex flex-column col-12 col-sm-4 col-md-2 ms-md-2">
            <button
              onClick={addTobasket}
              className="shadow-none product__buttonsBasket mb-2 btn btn-sm"
            >
              Add to Basket
            </button>
            <button
              onClick={removeFromBasket}
              className="shadow-none product__buttonsBasket btn btn-sm"
            >
              Remove from Basket
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default CheckoutProduct;
