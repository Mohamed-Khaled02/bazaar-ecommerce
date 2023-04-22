import React, { useEffect, useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const dataImagesSlider = [
    "https://.vercel.app/static/media/img4.8f7fc6b56e74dba2b6f9.jpg",
    "https://amazonproone.vercel.app/static/media/img2.bc1bdb910ead16c65197.jpg",
    "https://amazonproone.vercel.app/static/media/img1.efb3d39101f7ef77d616.jpg",
    "https://amazonproone.vercel.app/static/media/img5.aa945e25375bfdee385f.jpg",
    "https://amazonproone.vercel.app/static/media/img3.c80809bb40bee5c34372.jpg",
  ];

  useEffect(() => {
    const timerId = setTimeout(() => {
      setCurrentSlide(currentSlide === 1 ? 3 : currentSlide - 1);
    }, 7000);

    return () => {
      clearTimeout(timerId);
    };
  }, [currentSlide]);

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 1 ? 3 : (prev) => prev - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === 3 ? 1 : (prev) => prev + 1);
  };

  return (
    <div className="w-full h-full">
      <div className="relative">
        <div className=" flex overflow-x-hidden">
          <img
            loading="priorety"
            src={dataImagesSlider[currentSlide]}
            alt="img"
          />
        </div>
        <div className="absolute w-fit left-0 right-0 mx-auto gap-8 bottom-44 flex">
          <div
            onClick={prevSlide}
            className="cursor-pointer w-12 h-12 border-[1px] border-gray-700 flex justify-center items-center hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
          >
            <AiOutlineArrowLeft />
          </div>
          <div
            onClick={nextSlide}
            className="cursor-pointer w-12 h-12 border-[1px] border-gray-700 flex justify-center items-center hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
          >
            <AiOutlineArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
