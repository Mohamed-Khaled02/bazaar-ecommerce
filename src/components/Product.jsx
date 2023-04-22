import React, { useEffect, useState } from "react";
import { BsStar } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { addToCart } from "../redux/features/bazarSlice";

const Product = () => {
  const [details, setDetails] = useState({});
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  const location = useLocation();

  useEffect(() => {
    setDetails(location.state.item);
  }, [details]);

  const { _id, description, title, image, price, category, oldPrice } =
    location.state.item;

  return (
    <div className="groub  py-10 mx-12 flex flex-col md:flex-row items-center gap-5">
      <div className="overflow-hidden">
        <img
          src={image}
          alt="Product"
          className="hover:scale-110 hover:rounded-xl  duration-500 rounded-xl w-96 h-96 object-cover"
        />
      </div>
      <div className="p-4 py-12">
        <h2 className="text-3xl font-bold">{title}</h2>
        <div className="flex justify-center itmes-start flex-col  mt-2">
          <div className="mt-3">
            <span className="text-3xl font-bold">${price}</span>
            <span className="ml-2 text-gray-500 line-through">${oldPrice}</span>
          </div>
          <div className="flex gap-1 ml-2 mt-3">
            {[...Array(5)].map((_, index) => (
              <BsStar key={index} className="text-black-500" />
            ))}
          </div>
        </div>
        <p className="mt-4 text-lg text-gray-600">
          {description.substring(0, 100)}
        </p>
        <div className="flex items-center mt-4">
          <button
            onClick={() => setQuantity(Math.max(quantity - 1, 1))}
            className="px-3 py-2 bg-gray-200 rounded-full"
          >
            -
          </button>
          <span className="mx-4">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="px-3 py-2 bg-gray-200 rounded-full"
          >
            +
          </button>
        </div>
        <button
          onClick={() =>
            dispatch(
              addToCart({
                _id: _id,
                title: title,
                image: image,
                price: price,
                category: category,
                oldPrice: oldPrice,
                quantity: 1,
              })
            ) & toast.success(`${title} Added To Card`)
          }
          className="mt-4 px-4  bg-black text-white py-2 transition duration-100 hover:bg-gray-400 focus:outline-none rounded-md"
        >
          Add to Cart
        </button>
        <div className="mt-5 text-lg font-semibold text-black">
          Category: <span className="font-bold">{category.toUpperCase()}</span>
        </div>
      </div>
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
};

export default Product;
