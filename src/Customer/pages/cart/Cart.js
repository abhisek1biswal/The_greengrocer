import React, { useContext } from "react";
import { CartContext } from "./Cartpage";
import { Link } from "react-router-dom";
import CartCard from "./CartCard";

export default function Cart() {
  const { item,totalItems,totalAmt } = useContext(CartContext);

  const { removeCart } = useContext(CartContext);
  if (item.length === 0) {
    return (
      <div className="h-[100vh]">
        <div className="ml-20 mt-10">
          <h3 className="text-xl font-bold">My Cart</h3>
        </div>
        <div className="ml-20 mt-10 flex items-center justify-center">
          <h3 className="text-xl font-extrabold">Your cart is empty</h3>
        </div>
      </div>
    );
  }
  return (
    <div className="">
      <div className="mx-20 mt-10 flex justify-between">
        <div>
        <h3 className="text-xl font-bold">My Cart</h3>
        <p>total items {totalItems}</p>
        </div>
        <button className="w-30 bg-green-600 rounded-md px-5" onClick={removeCart}>
          Clear cart
        </button>
      </div>
      <div className="mt-5">
        {item.map((curItem) => (
          <CartCard key={curItem.id} {...curItem} />
        ))}
      </div>
      <div className="mr-20 mt-5 flex justify-end">
        <p className="mr-5 text-lg font-medium">Total:{" "}Rs.{totalAmt}</p>
        <span></span>
      </div>
      <div className="flex justify-end mr-20 mt-10">
        <Link to="/placeorder">
        <button className="px-5 bg-emerald-600 rounded-md pt-2 pb-2">
          Proceed to checkout{" "}<span>&#8594;</span>
        </button>
        </Link>
      </div>
    </div>
  );
}

