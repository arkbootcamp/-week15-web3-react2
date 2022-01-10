import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import Card from "../../components/module/Card";
import { useNavigate, useSearchParams } from "react-router-dom";
import Navbar from "../../components/base/Navbar";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const querySearch = searchParams.get("search");

  useEffect(() => {
    if (querySearch) {
      axios
        .get(
          `https://zwallet-hello.herokuapp.com/products?name=${querySearch}&limit=6`,
          { headers: { auth: 1 } }
        )
        .then((res) => {
          setIsloading(false);
          const result = res.data.data;
          setProducts(result);
        })
        .catch((err) => {
          setIsloading(false);
          console.log(err.response);
        });
    } else {
      setIsloading(true);
      axios
        .get("https://zwallet-hello.herokuapp.com/products?limit=6&page=2")
        .then((res) => {
          setIsloading(false);
          const result = res.data.data;
          setProducts(result);
        })
        .catch((err) => {
          setIsloading(false);
          console.log(err.response);
        });
    }
  }, [querySearch]);

  const handleLogout = () => {
    localStorage.removeItem("auth");
    localStorage.removeItem("user");
    navigate("/login");
  };
  const handleSearch = (e) => {
    if (e.key === "Enter") {
      setSearchParams({ search: e.target.value });
      // axios
      //   .get(
      //     `https://zwallet-hello.herokuapp.com/products?name=${e.target.value}&limit=6`,
      //     { headers: { auth: 1 } }
      //   )
      //   .then((res) => {
      //     setIsloading(false);
      //     const result = res.data.data;
      //     setProducts(result);
      //   })
      //   .catch((err) => {
      //     setIsloading(false);
      //     console.log(err.response);
      //   });
    }
  };

  console.log(searchParams.get("search"));
  return (
    <Fragment>
      <Navbar />
      <div className="container">
        <h1>Halaman Home</h1>
        <h3>Selamat datang {user && user.name}</h3>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="search product"
          onKeyUp={handleSearch}
        />
        <br />
        <button onClick={handleLogout}>Logout</button>
        {isLoading && <h4>Loading...</h4>}
        <div className="row">
          {products.map((product) => {
            return (
              <div className="col-md-3 mb-4">
                <Card
                  title={product.name}
                  price={product.price}
                  photo={product.photo}
                  onClick={() => navigate(`/product/${product.id}`)}
                />
              </div>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
