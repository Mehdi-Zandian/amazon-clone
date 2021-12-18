import Navbar from "../HomeScreen/Navbar/Navbar";
import CheckoutProduct from "./CheckoutProduct/CheckoutProduct";
// context
import { useStateValue } from "../../StateContext/StateProvider";
// UI
import Exclusive from "../../assets/exclusive/exclusive.jpg";
import "./CheckoutScreen.scss";

function CheckoutScreen() {
  // context setup
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <Navbar />
      <div className="checkout__wrapper mx-auto">
        <img
          className="img-fluid w-100"
          src={Exclusive}
          alt="Amazon exclusive"
        />

        {basket?.length === 0 ? (
          <div>
            <h2 className="fw-bold p-2">Your Shopping basket is empty ...</h2>
          </div>
        ) : (
          <div className="p-2 bg-white">
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
    </div>
  );
}

export default CheckoutScreen;
