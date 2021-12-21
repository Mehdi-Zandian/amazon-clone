// context
import { useStateValue } from "../../../StateContext/StateProvider";
// UI
import { ImStarFull } from "react-icons/im";
import "./Product.scss";

function Product({ id, category, description, title, image, price, rating }) {
  // make long descriptions short
  const truncate = (text, num) => {
    return text.length > num ? text.substr(0, num - 1) + " ..." : text;
  };

  // context api setup
  const [{}, dispatch] = useStateValue();
  const addToBasket = () => {
    const newId = id + Math.ceil(Math.random() * 1539);
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: newId,
        category,
        description,
        title,
        image,
        price,
        rating,
      },
    });
  };

  return (
    <div
      className={`${
        id === 5 ? "product__extend" : ""
      } product d-flex flex-column justify-content-between bg-white px-3 pt-1 pb-4 rounded-3 shadow`}
    >
      <small className="text-secondary text-end">{category}</small>
      <img src={image} className="product__image w-100 mb-2" alt="Product" />
      <p className="m-0 fw-bold" style={{ wordWrap: "break-word" }}>
        {truncate(title, 70)}
      </p>
      <p className="product__rating my-2">
        {Array(Math.ceil(rating))
          .fill()
          .map((_) => (
            <span key={Math.random() * 20}>
              <ImStarFull className="product__ratingStar" />
            </span>
          ))}
      </p>
      <p>{truncate(description, 65)}</p>
      <p className="mb-2">
        <small>£</small>
        <strong>{price}</strong>
      </p>

      <button
        onClick={addToBasket}
        className="product__btn btn w-100 p-1 shadow-none rounded mx-auto"
      >
        Add to basket
      </button>
    </div>
  );
}

export default Product;
