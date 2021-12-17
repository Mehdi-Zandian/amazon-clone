import Navbar from "./Navbar/Navbar";
import Product from "./Product/Product";
// axios
import axios from "../../API_FakeStore/axios";
import requests from "../../API_FakeStore/requests";
// UI
import "./HomeScreen.scss";
import Banner from "../../assets/banner/prime-day-product-banner.jpg";
import { Fragment, useEffect, useState } from "react";

function HomeScreen() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    async function fetch() {
      const res = await axios.get(`${requests.fetchAllProducts}?limit=15`);
      const data = await res.data;
      setProducts(data);
    }
    fetch();
  }, []);

  return (
    <div style={{ height: "100vh" }}>
      <Navbar />
      <div className="homeScreen__wrapper mx-auto">
        <div className="homeScreen__banner w-100"></div>

        <div className="homeScreen__row mx-2">
          {products
            ? products.map((p, index) => {
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
            : "No"}

          {/* Put loader or Message in place of NO */}
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
