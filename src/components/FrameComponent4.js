import React from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import FrameComponent from "./FrameComponent";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FrameComponent4 = ({ className = "" }) => {
  // Carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Adjust the speed as needed
    arrows: false, // Disable arrows
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div
      className={`self-stretch flex flex-col items-end justify-start py-8 px-0 pb-3.5 box-border gap-y-12 max-w-full text-center text-31xl text-surface-light font-poppins mq450:gap-8 mq800:gap-[63px] ${className}`}
    >
      <h1 className="m-0 self-stretch relative text-inherit leading-[50px] font-bold font-inherit [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_4px_4px_rgba(0,_0,_0,_0.25)] z-[1]">
        Hear what our Users Say
      </h1>
      <div className="box-border max-w-full px-32 py-0 text-black">
        <Slider {...settings}>
          <div>
            <FrameComponent
              schoolName="Kasiga School, Dehradun"
              testimonial="The best Platform to find your career even if you are not sure yourself. Their AI Engine is especially helpful in carefully crafting the best step forward."
              imageSrc="/path/to/image.png"
              author="Rizu"
            />
          </div>
          <div>
            <FrameComponent
              schoolName="Kasiga School, Dehradun"
              testimonial="The best Platform to find your career even if you are not sure yourself. Their AI Engine is especially helpful in carefully crafting the best step forward."
              imageSrc="/path/to/image.png"
              author="Rizu"
            />
          </div>
          <div>
            <FrameComponent
              schoolName="Kasiga School, Dehradun"
              testimonial="The best Platform to find your career even if you are not sure yourself. Their AI Engine is especially helpful in carefully crafting the best step forward."
              imageSrc="/path/to/image.png"
              author="Rizu"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
