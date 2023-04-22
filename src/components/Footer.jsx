import React from "react";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillHome,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiOutlineUser,
} from "react-icons/ai";
import { BsPaypal } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-black p-20 text-[#949494]">
      <div className="flex flex-col items-center justify-center gap-10 md:flex-row md:justify-around max-w-screen-xl mx-auto">
        {/* Display flex column on mobile, flex row on larger screens */}
        <div className="flex flex-col gap-5">
          <h1 className="text-3xl font-bold">Bazaar</h1>
          <p>@Mohamed-Khaled</p>
          <div className="flex gap-4 text-xl text-gray-500">
            <AiFillGithub />
            <AiFillFacebook />
            <AiFillTwitterCircle />
            <AiFillInstagram />
          </div>
        </div>

        <div className="flex flex-col gap-5  md:block">
          {/* Hide this column on mobile */}
          <h1 className="text-3xl font-bold">Locate us</h1>
          <p>Alexandria, Egypt</p>
          <p>Bazaar@gmail.com</p>
          <p>Mopile 01208918005</p>
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="text-3xl font-bold">Profile</h1>
          <p className="flex gap-3 hover:text-white cursor-pointer duration-300">
            <AiOutlineUser />
            My Account
          </p>
          <p className="flex gap-3 hover:text-white cursor-pointer duration-300">
            <BsPaypal />
            Checkout
          </p>
          <p className="flex gap-3 hover:text-white cursor-pointer duration-300">
            <AiFillHome />
            Order Tracking
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        {/* Center the input and button */}
        <input
          className="bg-transparent border w-64 px-4 py-2 text-sm"
          type="text"
          placeholder="e-mail"
        />
        <button
          className="text-sm border w-32 text-white 
          hover:bg-grat-900 active:bg-white active:text-black"
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Footer;
