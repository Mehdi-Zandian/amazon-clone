import Navbar from "../HomeScreen/Navbar/Navbar";
import CheckoutProduct from "./CheckoutProduct/CheckoutProduct";
// context
import { useStateValue } from "../../StateContext/StateProvider";
import { getBasketTotal } from "../../StateContext/reducer";
// UI
import Exclusive from "../../assets/exclusive/exclusive.jpg";
import "./CheckoutScreen.scss";

function CheckoutScreen() {
  // context setup
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <Navbar />
      <div className="checkout__wrapper mx-auto d-flex flex-md-row flex-column">
        <div>
          <img
            className="checkout__banner img-fluid w-100"
            src={Exclusive}
            alt="Amazon exclusive"
          />

          {basket?.length === 0 ? (
            <div className="">
              <h2 className="fw-bold p-2">Your Shopping basket is empty ...</h2>
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
            </div>
          )}
        </div>

        <div className="d-flex flex-column bg-white p-3 my-md-0 my-3 col-md-2 col-12 shadow-sm">
          {basket.length > 0 && (
            <>
              <h6 style={{ fontSize: "15px" }} className="fw-bold px-2">
                Subtotal ({basket.length} items): {`£${getBasketTotal(basket)}`}
              </h6>
              <button
                disabled={!false}
                className={`btn p-1 shadow-none text-white ${
                  !false && "checkout__btnSignin"
                }`}
                style={{ fontSize: "15px" }}
              >
                {/* if has user checkout else cant checkout */}
                {false ? "Proceed to checkout" : "Sign in to checkout"}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default CheckoutScreen;
