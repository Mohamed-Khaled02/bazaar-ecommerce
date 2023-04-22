import React from "react";
import ProductCard from "./ProductCard";

const Products = ({ products }) => {
  return (
    <div className="py-10 flex flex-col items-center justify-items-center">
      <div className="flex flex-col gap-4 items-center">
        <h1 className="text-2xl bg-black text-white text-center py-2 w-80">
          Shop Everyday
        </h1>
        <span className="w-20 h-[3px] bg-black"></span>
        <p className="text-gray-600 max-w-[700px] text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
          natus laudantium, ea ut omnis quos, sint voluptatum aliquid aperiam
          labore numquam voluptatem reprehenderit fugiat consectetur iure
          laborum quasi earum itaque!
        </p>
      </div>
      {/* all products */}
      <div className="mx-4 max-w-screen-2xl py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {products.map((item) => (
          <ProductCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
