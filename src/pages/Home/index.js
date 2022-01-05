import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../../components/module/Card";
import {useNavigate} from 'react-router-dom'

const Home = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const user = JSON.parse(localStorage.getItem('user'))
  const navigate = useNavigate()

  useEffect(() => {
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
  }, []);
  const handleLogout = ()=>{
    localStorage.removeItem('auth')
    localStorage.removeItem('user')
    navigate('/login')
  }
  return (
    <div className="container">
        <h1>Halaman Home</h1>
        <h3>Selamat datang {user && user.name}</h3>
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
              onClick={()=>navigate(`/product/${product.id}`)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
