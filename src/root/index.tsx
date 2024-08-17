import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Cart from "../pages/cart";

const Root = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default Root;
