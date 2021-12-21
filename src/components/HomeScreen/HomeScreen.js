import Product from "./Product/Product";
// axios
import axios from "../../API_FakeStore/axios";
import requests from "../../API_FakeStore/requests";
// UI
import "./HomeScreen.scss";
import Banner from "../../assets/banner/prime-day-product-banner.jpg";
import { Fragment, useEffect, useState } from "react";

function HomeScreen() {
  // get products from API
  const [products, setProducts] = useState(null);
  useEffect(() => {
    // abort control
    const abortCont = new AbortController();
    async function fetch() {
      const res = await axios.get(`${requests.fetchAllProducts}?limit=15`, {
        signal: abortCont.signal,
      });
      const data = await res.data;
      setProducts(data);
    }
    fetch();
    return () => abortCont.abort();
  }, []);

  return (
    <div>
      <div className="homeScreen__wrapper mx-auto">
        <div className="homeScreen__banner w-100"></div>

        <div className="homeScreen__row mx-2">
          {products ? (
            products.map((p, index) => {
              return (
                <Fragment key={p?.id}>
                  {index === 4 ? (
                    <img
                      src={Banner}
                      alt="Prime day"
                      className="homeScreen__productsBanner img-fluid my-md-3"
                    />
                  ) : null}

                  <Product
                    id={p?.id}
                    category={p?.category}
                    description={p?.description}
                    title={p?.title}
                    price={p?.price}
                    rating={p?.rating.rate}
                    image={p?.image}
                  />
                </Fragment>
              );
            })
          ) : (
            <span className="loader position-fixed"></span>
          )}
        </div>

        {products ? (
          <a
            href="#top"
            className="homeScreen__back d-block text-decoration-none px-4 py-3 text-white text-center my-3"
          >
            Back to top
          </a>
        ) : null}
      </div>
    </div>
  );
}

export default HomeScreen;
