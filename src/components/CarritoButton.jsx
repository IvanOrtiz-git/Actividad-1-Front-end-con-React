import React, { useState, useContext } from "react";
import { ShoppingCart } from "lucide-react";
import { GlobalContext } from '../context/GlobalContext';

const CarritoButton = () => {

  const { open, setOpen, count } = useContext(GlobalContext);

  return (
    <button onClick={() => setOpen(true)} className={`cart-button ${open ? "open" : ""}`}>
      <ShoppingCart />
      <span>{count}</span>
    </button>
  );
};

export default CarritoButton;