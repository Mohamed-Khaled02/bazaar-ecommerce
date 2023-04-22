import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { addToCart } from "../redux/features/bazarSlice";
import "react-toastify/dist/ReactToastify.css";

const ProductCard = ({ item }) => {
  const dispatch = useDispatch();

  const { _id, title, image, price, category, oldPrice } = item;
  const navigate = useNavigate();
  const handelProductDetails = () => {
    navigate(`/product/${_id}`, {
      state: {
        item: item,
      },
    });
  };

  return (
    <div className="groub rounded-lg shadow-lg">
      {/* Image */}
      <div onClick={handelProductDetails} className="overflow-hidden">
        <img
          className="w-full h-96 object-cover hover:scale-110 duration-300 cursor-pointer"
          src={image}
          alt={title}
        />
      </div>
      {/* Body */}
      <div className="p-4">
        <h3 className="text-gray-900 font-bold text-lg mb-2">{title}</h3>
        <div className="flex flex-wrap justify-between items-center">
          <span className="text-gray-700 font-medium">
            {category.toUpperCase()}
          </span>
          <div className="text-gray-700 ">
            <span className="mr-1 line-through">${oldPrice}</span>
            <span className="font-bold">${price}</span>
          </div>
        </div>
      </div>
      {/* Add to Cart button */}
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
        className="w-full rounded-sm bg-black text-white py-2 transition duration-300 hover:bg-gray-400 focus:outline-none"
      >
        Add to Cart
      </button>
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

export default ProductCard;
