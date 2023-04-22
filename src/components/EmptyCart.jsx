import React from "react";

const EmptyCart = () => {
  return (
    <div className="bg-white text-black p-4 rounded-md text-center">
      <p className="text-3xl pb-12">Your cart is empty!</p>
      <p className="text-2xl">Add some items to get started.</p>
    </div>
  );
};

export default EmptyCart;
