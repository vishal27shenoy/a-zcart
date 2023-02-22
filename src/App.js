import "./App.css";
import data from "./Api";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "./Component/Navbar";
import Footbar from "./Component/Footbar";
import Home from "./Component/Home";
import Product from "./Component/Product";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./Component/Cart";
import Singleproduct from "./Component/Singleproduct";
function App() {
  // const [data, setdata] = useState([]);
  // const fetchdata = async () => {
  //   const response = await axios.get(
  //     "https://api.escuelajs.co/api/v1/categories"
  //   );
  //   console.log(response);
  // };
  // useEffect(() => {
  //   fetchdata();
  // }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="*" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/singleproduct" element={<Singleproduct />} />
      </Routes>
    </Router>
  );
}

export default App;
