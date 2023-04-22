import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import {
  decreament,
  deleteFromCart,
  increament,
  reseatCart,
} from "../redux/features/bazarSlice";
import EmptyCart from "../components/EmptyCart";
import { toast, ToastContainer } from "react-toastify";

function Cart() {
  const [total, setTotal] = useState(0);

  const dispatch = useDispatch();

  const naviegat = useNavigate();

  const cartItems = useSelector((state) => state.bazaar.productQuantity);

  const user = useSelector((state) => state.bazaar.userInfo);

  // Calculate total price using reduce method
  const totalPrice = cartItems.reduce(
    (accumulator, currentItem) =>
      accumulator + currentItem.price * currentItem.quantity,
    0
  );

  const handelCheckout = () => {
    if (user) {
      toast.success("checkout successfully");
    } else {
      toast.error("you must login first");
      setTimeout(() => naviegat("/login"), 1000);
    }
  };

  useEffect(() => {
    setTotal(totalPrice);
  });

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-8 text-black">Shopping Cart</h1>
      <div className="space-y-12">
        {cartItems.map((item) => (
          <div
            key={item._id}
            className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-4 sm:space-y-0"
          >
            <div className="w-full groub  sm:w-1/4 pb-4 sm:pb-0">
              <img
                className="w-full h-80 object-cover rounded-md"
                src={item.image}
                alt={item.title}
              />
            </div>
            <div className="sm:w-1/2 sm:pl-8">
              <p className="text-xl font-bold text-black">{item.title}</p>
              <p className="text-gray-700 py-7 text-xl">${item.price}</p>
              <div className="flex items-center space-x-4">
                <button
                  className="text-xl text-gray-700 hover:text-black focus:outline-none"
                  onClick={() => dispatch(decreament({ _id: item._id }))}
                >
                  -
                </button>
                <p className="text-xl">{item.quantity}</p>
                <button
                  className="text-xl text-gray-700 hover:text-black focus:outline-none"
                  onClick={() => dispatch(increament({ _id: item._id }))}
                >
                  +
                </button>
              </div>
            </div>
            <div className="sm:w-1/4 text-right">
              <p className="text-xl text-black">
                ${item.price * item.quantity}
              </p>
              <button
                className="mt-2 text-red-700 hover:text-red-900 focus:outline-none"
                onClick={() =>
                  dispatch(deleteFromCart(item._id)) &
                  toast.error(`Item Deleted`)
                }
              >
                Remove
              </button>
            </div>
          </div>
        ))}
        {/* total , clear, back to home */}
        <div className="flex items-center justify-between border-t pt-4">
          <button
            className="text-right bg-red-600 text-white p-2 rounded-md text-xl"
            onClick={() =>
              dispatch(reseatCart()) & toast.error(`Cart is cleared`)
            }
          >
            Reseat Cart
          </button>
          <div className="flex gap-2 text-2xl mt-4 items-center text-gray-500 ">
            <AiOutlineArrowLeft />
            <Link to="/">go to Shopping</Link>
          </div>
          <p className="text-3xl text-right text-black">
            Total: ${total.toFixed(2)}
          </p>
        </div>
        {/* Proceed to Checkout */}

        <button
          onClick={handelCheckout}
          className=" bg-black text-white p-4 rounded-md text-xl"
        >
          Proceed to Checkout
        </button>
      </div>
      {/* if there the cart empty */}
      {cartItems.length == 0 && <EmptyCart />}
      {/* toastify */}
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default Cart;
