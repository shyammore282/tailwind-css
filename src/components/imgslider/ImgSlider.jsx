import React, { useEffect, useState } from "react";
import { imgs } from "../../data/data";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const ImgSlider = () => {
  const [images, setImages] = useState([]);
  const [imgSlider, setImgSlider] = useState(0);

  useEffect(() => {
    setImages(imgs);
  }, []);
  const handlePrevies = () => {
    setImgSlider(imgSlider === 0 ? images.length - 1 : imgSlider - 1);
    console.log(imgSlider);
  };
  const handleNext = () => {
    setImgSlider(imgSlider === images.length - 1 ? 0 : imgSlider + 1);
    console.log(imgSlider);
  };
  console.log(images);
  return (
    <div className="flex  justify-center items-center w-[500px] h-[450px] relative">
      <BsArrowLeftCircleFill
        className=" absolute left-1 text-white"
        size={30}
        onClick={handlePrevies}
      />
      {images && images.length
        ? images.map((imgItems, index) => {
            return (
              <img
                key={imgItems.id}
                src={imgItems.url}
                alt="all value"
                className={
                  imgSlider === index ? " w-[100%] h-[100%]" : "hidden"
                }
              />
            );
          })
        : null}
      <BsArrowRightCircleFill
        className=" absolute right-1 text-white"
        size={30}
        onClick={handleNext}
      />
      <span className=" absolute bottom-1">
        {images && images.length
          ? images.map((_, index) => {
              return (
                <button
                  key={index}
                  className={
                    imgSlider === index
                      ? "w-2 h-2  rounded-full bg-white mx-[5px]"
                      : "w-2 h-2  rounded-full bg-black mx-[5px]"
                  }
                  onClick={() => setImgSlider(index)}
                ></button>
              );
            })
          : null}
      </span>
    </div>
  );
};

export default ImgSlider;
