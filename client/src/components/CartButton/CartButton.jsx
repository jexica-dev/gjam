import React from "react";
import { NavLink } from "react-router-dom";

export default function CartButton() {
  return (
    <>
      <NavLink to="/cart">
        <button className="border border-white text-white font-bold px-10 py-5 font-gt-america text-3xl">
          cart
        </button>
      </NavLink>
    </>
  );
}
